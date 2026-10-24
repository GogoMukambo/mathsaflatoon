(function () {
  const USERS_KEY = "scienceStudyUsers";
  const SESSION_KEY = "scienceStudySession";
  const ACTIVE_CHILD_KEY = "scienceStudyActiveChild";
  const LEGACY_CHILD_KEY = "scienceStudyLegacyChild";

  function loadUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    } catch (err) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function randomSalt() {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  }

  async function hashPassword(password, salt) {
    const data = new TextEncoder().encode(salt + password);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
  }

  function publicUser(user) {
    if (!user) return null;
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      surname: user.surname,
      dob: user.dob,
      gender: user.gender,
      provider: user.provider,
    };
  }

  function setSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, at: Date.now() }));
  }

  function currentUser() {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (!session || !session.email) return null;
      const user = loadUsers().find((u) => u.email === session.email);
      return publicUser(user);
    } catch (err) {
      return null;
    }
  }

  function findByEmail(email) {
    const key = String(email || "").trim().toLowerCase();
    return loadUsers().find((u) => u.email === key);
  }

  function profileComplete(user) {
    return Boolean(user && user.firstName && user.surname && user.dob && user.gender);
  }

  function cacheServerAccount(data) {
    if (!data || !data.user) return;
    if (window.AccountSync && typeof AccountSync.remember === "function") {
      AccountSync.remember(data);
      return;
    }
    const users = loadUsers().filter((u) => u.email !== data.user.email);
    users.push({
      id: data.user.id,
      email: data.user.email,
      firstName: data.user.firstName || "",
      surname: data.user.surname || "",
      dob: data.user.dob || "",
      gender: data.user.gender || "",
      provider: data.user.provider || "email",
      children: data.children || [],
    });
    saveUsers(users);
    setSession(data.user);
    if (data.activeChildId) rememberActiveChild(data.user.email, data.activeChildId);
  }

  async function postApi(path, body, options) {
    if (location.protocol === "file:") return null;
    let response;
    try {
      response = await fetch(path, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body || {}),
      });
    } catch (err) {
      return null;
    }
    if (response.status === 404) return null;
    let data = {};
    try {
      data = await response.json();
    } catch (err) {
      data = {};
    }
    if (!response.ok) {
      if (options && options.localOn401 && response.status === 401) return null;
      throw new Error(data.error || "Something went wrong. Please try again.");
    }
    return data;
  }

  async function copyLocalProgress(children) {
    if (!window.AccountSync || typeof AccountSync.pushLocal !== "function") return;
    const legacy = localStorage.getItem(LEGACY_CHILD_KEY) || "";
    for (let i = 0; i < children.length; i += 1) {
      const shared = legacy ? children[i].id === legacy : i === 0;
      await AccountSync.pushLocal(children[i].id, shared);
    }
  }

  async function adoptLocalChildren(localUser, remote) {
    if (!localUser || !Array.isArray(localUser.children) || !localUser.children.length) return remote;
    if (remote.children && remote.children.length) return remote;
    let latest = remote;
    for (const child of localUser.children) {
      const saved = await postApi("/api/children", {
        id: child.id,
        name: child.name,
        gender: child.gender,
        dob: child.dob,
        board: child.board,
        school: child.school,
      });
      if (saved) latest = saved;
    }
    let activeId = "";
    try {
      const saved = JSON.parse(localStorage.getItem(ACTIVE_CHILD_KEY) || "null");
      if (saved && saved.childId) activeId = saved.childId;
    } catch (err) {
      activeId = "";
    }
    if (activeId && (latest.children || []).some((child) => child.id === activeId)) {
      const switched = await postApi("/api/active-child", { childId: activeId });
      if (switched) latest = switched;
    }
    return latest;
  }

  async function registerEmail(details) {
    const email = String(details.email || "").trim().toLowerCase();
    const firstName = String(details.firstName || "").trim();
    const surname = String(details.surname || "").trim();
    const dob = String(details.dob || "").trim();
    const gender = String(details.gender || "").trim();
    const password = String(details.password || "");
    if (!firstName || !surname) throw new Error("Enter your name and surname.");
    if (!email || !email.includes("@")) throw new Error("Enter a valid email address.");
    if (!dob) throw new Error("Enter your date of birth.");
    if (!gender) throw new Error("Select your gender.");
    if (password.length < 6) throw new Error("Password must be at least 6 characters.");
    if (password !== details.confirmPassword) throw new Error("Passwords do not match.");
    const local = findByEmail(email);
    const remote = await postApi("/api/auth/register", {
      email: email,
      firstName: firstName,
      surname: surname,
      dob: dob,
      gender: gender,
      password: password,
    });
    if (remote) {
      const merged = await adoptLocalChildren(local, remote);
      cacheServerAccount(merged);
      await copyLocalProgress(merged.children || []);
      return publicUser(merged.user);
    }
    if (local) throw new Error("That email is already registered. Please log in.");
    const salt = randomSalt();
    const passwordHash = await hashPassword(password, salt);
    const user = {
      id: "u_" + Date.now(),
      email: email,
      firstName: firstName,
      surname: surname,
      dob: dob,
      gender: gender,
      provider: "email",
      salt: salt,
      passwordHash: passwordHash,
    };
    const users = loadUsers();
    users.push(user);
    saveUsers(users);
    setSession(user);
    return publicUser(user);
  }

  async function loginEmail(email, password) {
    const key = String(email || "").trim().toLowerCase();
    const local = findByEmail(key);
    const remote = await postApi("/api/auth/login", { email: key, password: password });
    if (remote) {
      const merged = await adoptLocalChildren(local, remote);
      cacheServerAccount(merged);
      await copyLocalProgress(merged.children || []);
      return publicUser(merged.user);
    }
    const user = local;
    if (!user || user.provider === "google") {
      throw new Error("No email account found. Register first, or use Google.");
    }
    const hash = await hashPassword(String(password || ""), user.salt);
    if (hash !== user.passwordHash) throw new Error("Incorrect email or password.");
    setSession(user);
    return publicUser(user);
  }

  async function upsertGoogleUser(profile) {
    const local = findByEmail(profile && profile.email);
    if (profile && profile.credential) {
      const remote = await postApi("/api/auth/google", { credential: profile.credential });
      if (remote) {
        const merged = await adoptLocalChildren(local, remote);
        cacheServerAccount(merged);
        await copyLocalProgress(merged.children || []);
        return publicUser(merged.user);
      }
    }
    const email = String((profile && profile.email) || "").trim().toLowerCase();
    if (!email) throw new Error("Google did not return an email address.");
    const users = loadUsers();
    let user = users.find((u) => u.email === email);
    if (!user) {
      user = {
        id: "g_" + Date.now(),
        email: email,
        firstName: String(profile.firstName || "").trim(),
        surname: String(profile.surname || "").trim(),
        dob: "",
        gender: "",
        provider: "google",
        googleSub: profile.sub || "",
      };
      users.push(user);
    } else {
      user.provider = user.provider || "google";
      if (!user.firstName && profile.firstName) user.firstName = profile.firstName;
      if (!user.surname && profile.surname) user.surname = profile.surname;
    }
    saveUsers(users);
    setSession(user);
    return publicUser(user);
  }

  async function completeProfile(details) {
    const session = currentUser();
    if (!session) throw new Error("Please sign in first.");
    const firstName = String(details.firstName || "").trim();
    const surname = String(details.surname || "").trim();
    const dob = String(details.dob || "").trim();
    const gender = String(details.gender || "").trim();
    if (!firstName || !surname) throw new Error("Enter your name and surname.");
    if (!dob) throw new Error("Enter your date of birth.");
    if (!gender) throw new Error("Select your gender.");
    const remote = await postApi(
      "/api/auth/profile",
      { firstName: firstName, surname: surname, dob: dob, gender: gender },
      { localOn401: true }
    );
    if (remote) {
      cacheServerAccount(remote);
      return publicUser(remote.user);
    }
    const users = loadUsers();
    const user = users.find((u) => u.email === session.email);
    if (!user) throw new Error("Account not found.");
    user.firstName = firstName;
    user.surname = surname;
    user.dob = dob;
    user.gender = gender;
    saveUsers(users);
    setSession(user);
    return publicUser(user);
  }

  function sessionEmail() {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      return session && session.email ? session.email : "";
    } catch (err) {
      return "";
    }
  }

  function mutableUser() {
    const email = sessionEmail();
    if (!email) return null;
    return loadUsers().find((u) => u.email === email) || null;
  }

  function publicChild(child) {
    return {
      id: child.id,
      name: child.name,
      gender: child.gender,
      dob: child.dob,
      board: child.board,
      school: child.school,
    };
  }

  function listChildren() {
    const user = mutableUser();
    if (!user || !Array.isArray(user.children)) return [];
    return user.children.map(publicChild);
  }

  function rememberActiveChild(email, childId) {
    localStorage.setItem(ACTIVE_CHILD_KEY, JSON.stringify({ email: email, childId: childId }));
  }

  function activeChild() {
    const email = sessionEmail();
    const children = listChildren();
    if (!email || !children.length) return null;
    let savedId = "";
    try {
      const saved = JSON.parse(localStorage.getItem(ACTIVE_CHILD_KEY) || "null");
      if (saved && saved.email === email) savedId = saved.childId;
    } catch (err) {
      savedId = "";
    }
    const child = children.find((item) => item.id === savedId) || children[0];
    if (child && child.id !== savedId) rememberActiveChild(email, child.id);
    return child;
  }

  async function setActiveChild(childId) {
    const email = sessionEmail();
    const child = listChildren().find((item) => item.id === childId);
    if (!email || !child) throw new Error("Choose one of your children.");
    if (window.AccountSync && typeof AccountSync.flush === "function") await AccountSync.flush();
    const remote = await postApi("/api/active-child", { childId: child.id }, { localOn401: true });
    if (remote) cacheServerAccount(remote);
    else rememberActiveChild(email, child.id);
    return child;
  }

  async function addChild(details) {
    const name = String(details.name || "").trim();
    const gender = String(details.gender || "").trim();
    const dob = String(details.dob || "").trim();
    const board = String(details.board || "").trim();
    const school = String(details.school || "").trim();
    if (!name) throw new Error("Enter the child's name.");
    if (!gender) throw new Error("Select the child's gender.");
    if (!dob) throw new Error("Enter the child's date of birth.");
    if (board !== "CBSE" && board !== "IGCSE") throw new Error("Select CBSE or IGCSE.");
    if (!school) throw new Error("Enter the child's school.");
    const remote = await postApi(
      "/api/children",
      { name: name, gender: gender, dob: dob, board: board, school: school },
      { localOn401: true }
    );
    if (remote && remote.child) {
      if ((remote.children || []).length === 1 && !localStorage.getItem(LEGACY_CHILD_KEY)) {
        localStorage.setItem(LEGACY_CHILD_KEY, remote.child.id);
      }
      cacheServerAccount(remote);
      return publicChild(remote.child);
    }
    const users = loadUsers();
    const email = sessionEmail();
    const user = users.find((u) => u.email === email);
    if (!user) throw new Error("Please sign in first.");
    const child = {
      id: "c_" + Date.now(),
      name: name,
      gender: gender,
      dob: dob,
      board: board,
      school: school,
    };
    if (!Array.isArray(user.children)) user.children = [];
    if (!user.children.length && !localStorage.getItem(LEGACY_CHILD_KEY)) {
      localStorage.setItem(LEGACY_CHILD_KEY, child.id);
    }
    user.children.push(child);
    saveUsers(users);
    rememberActiveChild(email, child.id);
    return publicChild(child);
  }

  async function logout() {
    if (window.AccountSync && typeof AccountSync.flush === "function") await AccountSync.flush();
    try {
      await postApi("/api/auth/logout", {});
    } catch (err) {
      /* Leave the browser even if the website is unreachable. */
    }
    localStorage.removeItem(SESSION_KEY);
  }

  function parseJwt(token) {
    const part = token.split(".")[1];
    const json = atob(part.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  }

  window.Auth = {
    currentUser,
    profileComplete,
    registerEmail,
    loginEmail,
    upsertGoogleUser,
    completeProfile,
    listChildren,
    activeChild,
    setActiveChild,
    addChild,
    logout,
    parseJwt,
  };
})();
