(function () {
  const authGate = document.getElementById("authGate");
  const appShell = document.getElementById("appShell");
  const authError = document.getElementById("authError");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const profileForm = document.getElementById("profileForm");
  const childForm = document.getElementById("childForm");
  const authWelcome = document.getElementById("authWelcome");
  const authHint = document.getElementById("authHint");
  const childSwitch = document.getElementById("childSwitch");
  const childChip = document.getElementById("childChip");
  const childChipName = document.getElementById("childChipName");
  const childMenu = document.getElementById("childMenu");
  const childMenuList = document.getElementById("childMenuList");
  const addChildBtn = document.getElementById("addChildBtn");
  const childDialog = document.getElementById("childDialog");
  const addChildForm = document.getElementById("addChildForm");
  const childDialogError = document.getElementById("childDialogError");
  const cancelAddChild = document.getElementById("cancelAddChild");
  const tabRegister = document.getElementById("tabRegister");
  const tabLogin = document.getElementById("tabLogin");
  const googleNote = document.getElementById("googleNote");
  const userChip = document.getElementById("userChip");
  const logoutBtn = document.getElementById("logoutBtn");
  const authBackHome = document.getElementById("authBackHome");
  let pendingIntent = "home";

  function showError(message) {
    if (!authError) return;
    const clean = String(message || "")
      .replace(/https?:\/\/appassets\.androidplatform\.net\S*/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();
    authError.textContent = clean;
    authError.hidden = !clean;
  }

  function showPanel(name) {
    hide(registerForm);
    hide(loginForm);
    hide(profileForm);
    hide(childForm);
    if (name === "register") show(registerForm);
    if (name === "login") show(loginForm);
    if (name === "profile") show(profileForm);
    if (name === "child") show(childForm);
    const signedIn = name === "profile" || name === "child";
    tabRegister.classList.toggle("on", name === "register");
    tabLogin.classList.toggle("on", name === "login");
    tabRegister.hidden = signedIn;
    tabLogin.hidden = signedIn;
    const googleWrap = document.getElementById("googleWrap");
    if (googleWrap) {
      if (signedIn) hide(googleWrap);
      else show(googleWrap);
    }
    const orLine = document.querySelector(".auth-or");
    if (orLine) orLine.hidden = signedIn;
    authWelcome.textContent =
      name === "child"
        ? "Add a child"
        : name === "profile"
          ? "Finish your profile"
          : name === "login"
            ? "Welcome back"
            : "Create your account";
    if (authHint) {
      authHint.textContent =
        name === "child"
          ? "Each child keeps their own lessons and progress. A parent can add more than one."
          : pendingIntent === "home"
            ? "Log in any time. Choose a course on the home page when you are ready to study."
            : "Log in to start this course. Your lessons and progress stay on this account.";
    }
  }

  function hide(el) {
    if (!el) return;
    el.classList.add("hidden");
    el.setAttribute("hidden", "");
  }

  function show(el) {
    if (!el) return;
    el.classList.remove("hidden");
    el.removeAttribute("hidden");
  }

  function closeChildMenu() {
    if (!childMenu || !childChip) return;
    childMenu.hidden = true;
    childChip.setAttribute("aria-expanded", "false");
  }

  function renderChildSwitch() {
    const child = Auth.activeChild();
    const children = Auth.listChildren();
    if (!childSwitch || !child) return;
    show(childSwitch);
    if (childChipName) childChipName.textContent = child.name;
    if (childChip) childChip.setAttribute("aria-label", "Child profile, " + child.name + ". Switch or add a child.");
    if (!childMenuList) return;
    childMenuList.innerHTML = "";
    children.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "child-choice" + (item.id === child.id ? " on" : "");
      button.textContent = item.name + " · " + item.board;
      button.addEventListener("click", async () => {
        try {
          await Auth.setActiveChild(item.id);
        } catch (err) {
          return;
        }
        window.location.reload();
      });
      childMenuList.appendChild(button);
    });
  }

  function openChildDialog() {
    closeChildMenu();
    if (childDialogError) {
      childDialogError.hidden = true;
      childDialogError.textContent = "";
    }
    if (addChildForm) addChildForm.reset();
    show(childDialog);
    const field = addChildForm && addChildForm.querySelector("[name=name]");
    if (field) field.focus();
  }

  function canStartCourse() {
    const user = Auth.currentUser();
    return Boolean(user && Auth.profileComplete(user) && Auth.listChildren().length);
  }

  function enterApp(user) {
    document.body.classList.add("study-open");
    hide(authGate);
    hide(childDialog);
    show(appShell);
    if (userChip && user) {
      userChip.textContent = user.firstName + " " + user.surname;
    }
    renderChildSwitch();
    if (typeof window.startStudyApp === "function") window.startStudyApp();
    if (typeof window.renderParentDashboard === "function") window.renderParentDashboard();
  }

  function showLoginPage() {
    document.body.classList.remove("study-open");
    document.body.classList.add("home-landing", "parent-dash");
    hide(appShell);
    show(authGate);
  }

  function fillProfileForm(user) {
    document.getElementById("profileFirstName").value = user.firstName || "";
    document.getElementById("profileSurname").value = user.surname || "";
    document.getElementById("profileDob").value = user.dob || "";
    document.getElementById("profileGender").value = user.gender || "";
  }

  function finishAuth(user) {
    const intent = pendingIntent;
    const mentalNext = window.__mentalNext || "";
    pendingIntent = "home";
    window.__mentalNext = "";
    if (intent === "mental" && mentalNext) {
      window.location.href = mentalNext;
      return;
    }
    enterApp(user);
    if (intent === "curriculum" && typeof window.openFormalCurriculum === "function") {
      window.openFormalCurriculum();
      return;
    }
    if (intent === "aflatoon") {
      window.location.href = "maths-aflatoon.html";
      return;
    }
    if (typeof window.showParentDashboard === "function") window.showParentDashboard();
  }

  function promptAuth(intent) {
    pendingIntent = intent || "home";
    const user = Auth.currentUser();
    const ready = Boolean(
      user && Auth.profileComplete(user) && (pendingIntent === "home" || Auth.listChildren().length)
    );
    if (ready) {
      finishAuth(user);
      return;
    }
    showLoginPage();
    if (!user) {
      showPanel("login");
      return;
    }
    if (!Auth.profileComplete(user)) {
      showPanel("profile");
      fillProfileForm(user);
      return;
    }
    showPanel("child");
  }

  function continueAfterParent(user) {
    promptAuth(pendingIntent);
  }

  function returnToHome() {
    pendingIntent = "home";
    showError("");
    hide(authGate);
    show(appShell);
    const user = Auth.currentUser();
    if (user && Auth.profileComplete(user)) {
      document.body.classList.add("study-open");
      if (userChip) userChip.textContent = user.firstName + " " + user.surname;
      renderChildSwitch();
    }
    if (typeof window.startStudyApp === "function") window.startStudyApp();
    if (typeof window.showParentDashboard === "function") window.showParentDashboard();
  }

  function mentalCourseFromQuery() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("login") !== "mental") return "";
    const next = params.get("next") || "";
    const allowed = [
      "maths-aflatoon.html#beginner",
      "maths-aflatoon.html#foundation",
      "maths-aflatoon.html#advanced",
      "maths-aflatoon-y45.html",
      "maths-aflatoon.html#67",
      "maths-aflatoon.html#8"
    ];
    return allowed.indexOf(next) >= 0 ? next : "";
  }

  function boot() {
    hide(authGate);
    show(appShell);
    const user = Auth.currentUser();
    if (user && Auth.profileComplete(user)) {
      document.body.classList.add("study-open");
      if (userChip) userChip.textContent = user.firstName + " " + user.surname;
      renderChildSwitch();
    } else {
      document.body.classList.remove("study-open");
      hide(childSwitch);
      if (userChip) userChip.textContent = "";
    }
    const mentalNext = mentalCourseFromQuery();
    if (mentalNext) {
      window.__mentalNext = mentalNext;
      const url = new URL(window.location.href);
      url.searchParams.delete("login");
      url.searchParams.delete("next");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
      promptAuth("mental");
      return;
    }
    if (typeof window.startStudyApp === "function") window.startStudyApp();
  }

  function formValues(form) {
    const data = new FormData(form);
    const out = {};
    data.forEach((value, key) => {
      out[key] = value;
    });
    return out;
  }

  tabRegister.addEventListener("click", () => {
    showError("");
    showPanel("register");
  });
  tabLogin.addEventListener("click", () => {
    showError("");
    showPanel("login");
  });

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    showError("");
    try {
      const user = await Auth.registerEmail(formValues(registerForm));
      continueAfterParent(user);
    } catch (err) {
      showError(err.message);
    }
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    showError("");
    try {
      const vals = formValues(loginForm);
      const user = await Auth.loginEmail(vals.email, vals.password);
      continueAfterParent(user);
    } catch (err) {
      showError(err.message);
    }
  });

  profileForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    showError("");
    try {
      const user = await Auth.completeProfile(formValues(profileForm));
      continueAfterParent(user);
    } catch (err) {
      showError(err.message);
    }
  });

  childForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    showError("");
    try {
      await Auth.addChild(formValues(childForm));
      continueAfterParent(Auth.currentUser());
    } catch (err) {
      showError(err.message);
    }
  });

  if (childChip) {
    childChip.addEventListener("click", () => {
      const open = childMenu.hidden;
      childMenu.hidden = !open;
      childChip.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (addChildBtn) addChildBtn.addEventListener("click", openChildDialog);
  if (cancelAddChild) {
    cancelAddChild.addEventListener("click", () => hide(childDialog));
  }
  if (addChildForm) {
    addChildForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (childDialogError) {
        childDialogError.hidden = true;
        childDialogError.textContent = "";
      }
      try {
        await Auth.addChild(formValues(addChildForm));
        window.location.reload();
      } catch (err) {
        if (!childDialogError) return;
        childDialogError.textContent = err.message;
        childDialogError.hidden = false;
      }
    });
  }
  document.addEventListener("click", (e) => {
    if (!childSwitch || childSwitch.hidden || !childMenu || childMenu.hidden) return;
    if (!childSwitch.contains(e.target)) closeChildMenu();
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      if (typeof confirmLeaveMock === "function" && !(await confirmLeaveMock())) return;
      await Auth.logout();
      window.location.reload();
    });
  }

  async function handleGoogleCredential(response) {
    try {
      const payload = Auth.parseJwt(response.credential);
      const user = await Auth.upsertGoogleUser({
        credential: response.credential,
        email: payload.email,
        firstName: payload.given_name || "",
        surname: payload.family_name || "",
        sub: payload.sub,
      });
      showError("");
      continueAfterParent(user);
    } catch (err) {
      showError(err.message || "Google sign-in failed.");
    }
  }

  function setupGoogle(attempt) {
    const tries = attempt || 0;
    const clientId = (window.AUTH_CONFIG && window.AUTH_CONFIG.googleClientId) || "";
    const buttons = document.querySelectorAll("[data-google-btn]");
    if (!clientId) {
      googleNote.hidden = false;
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          showError(
            "Add your Google Client ID in auth-config.js to use Google sign-in. You can register with email now."
          );
        });
      });
      return;
    }
    if (!window.google || !google.accounts || !google.accounts.id) {
      if (tries < 20) {
        setTimeout(() => setupGoogle(tries + 1), 250);
        return;
      }
      googleNote.hidden = false;
      googleNote.textContent = "Google sign-in did not load. Register with email instead.";
      return;
    }
    googleNote.hidden = true;
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleGoogleCredential,
    });
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        google.accounts.id.prompt();
      });
    });
    const slot = document.getElementById("googleButtonSlot");
    if (slot) {
      google.accounts.id.renderButton(slot, {
        theme: "outline",
        size: "large",
        width: 320,
        text: "continue_with",
      });
      buttons.forEach((btn) => hide(btn));
    }
  }

  if (authBackHome) authBackHome.addEventListener("click", returnToHome);

  window.promptLogin = function () {
    showError("");
    promptAuth("home");
  };

  window.ensureCourseAccess = function (intent) {
    if (canStartCourse()) return true;
    showError("");
    promptAuth(intent);
    return false;
  };

  window.addEventListener("load", async () => {
    setupGoogle();
    if (window.AccountSync && AccountSync.ready) await AccountSync.ready();
    boot();
  });
})();
