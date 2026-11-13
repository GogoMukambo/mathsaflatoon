(function () {
  const USERS_KEY = "scienceStudyUsers";
  const SESSION_KEY = "scienceStudySession";
  const ACTIVE_CHILD_KEY = "scienceStudyActiveChild";

  let applying = false;
  let timer = 0;
  const pending = new Map();

  function isProgressKey(key) {
    if (!key) return false;
    return (
      key === "achievers-den-topic-progress" ||
      key.indexOf("achievers-den-topic-progress:") === 0 ||
      key === "achievers-den-home-pref" ||
      key.indexOf("achievers-den-home-pref:") === 0 ||
      key.indexOf("mental-high:") === 0 ||
      key === "aflatoon_academy_3stage_90d_v2" ||
      key === "mathsprint_y5_v1_progress" ||
      key.indexOf("mathsprint_y5_v1_progress:") === 0 ||
      key === "maths_quest_y4_profiles_v1" ||
      key === "maths_quest_y5_profiles_v1" ||
      key === "maths_quest_y6_profiles_v1" ||
      key === "maths_quest_y4_active_id" ||
      key === "maths_quest_y5_active_id" ||
      key === "maths_quest_y6_active_id"
    );
  }

  function activeChildId() {
    try {
      const saved = JSON.parse(localStorage.getItem(ACTIVE_CHILD_KEY) || "null");
      return saved && saved.childId ? saved.childId : "";
    } catch (_err) {
      return "";
    }
  }

  function schedule(key, value) {
    if (applying || !isProgressKey(key)) return;
    pending.set(key, value == null ? null : String(value));
    clearTimeout(timer);
    timer = setTimeout(function () {
      flush();
    }, 400);
  }

  function flush() {
    clearTimeout(timer);
    const childId = activeChildId();
    if (!childId || pending.size === 0) {
      pending.clear();
      return Promise.resolve();
    }
    const items = [];
    pending.forEach(function (value, key) {
      items.push({ key: key, value: value });
    });
    pending.clear();
    return fetch("/api/progress", {
      method: "PUT",
      credentials: "same-origin",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childId: childId, items: items }),
    })
      .then(function (res) {
        if (res.status === 401 || res.ok) return;
        items.forEach(function (item) {
          if (!pending.has(item.key)) pending.set(item.key, item.value);
        });
        timer = setTimeout(flush, 5000);
      })
      .catch(function () {
        items.forEach(function (item) {
          if (!pending.has(item.key)) pending.set(item.key, item.value);
        });
        timer = setTimeout(flush, 5000);
      });
  }

  function setRaw(key, value) {
    if (value == null || value === "") return;
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  }

  function progressHasData(progress) {
    if (!progress) return false;
    if (progress.curriculum && Object.keys(progress.curriculum).length) return true;
    if (progress.home && (progress.home.board || progress.home.yearId)) return true;
    if (progress.mentalScores && Object.keys(progress.mentalScores).length) return true;
    const docs = progress.documents || {};
    return Object.keys(docs).some(function (key) {
      const value = docs[key];
      if (value == null || value === "") return false;
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === "object") return Object.keys(value).length > 0;
      return true;
    });
  }

  function writeProgress(childId, progress) {
    if (!childId || !progress || !progressHasData(progress)) return;
    applying = true;
    try {
      if (progress.curriculum && Object.keys(progress.curriculum).length) {
        setRaw("achievers-den-topic-progress:" + childId, progress.curriculum);
      }
      if (progress.home && (progress.home.board || progress.home.yearId)) {
        setRaw("achievers-den-home-pref:" + childId, progress.home);
      }
      const scores = progress.mentalScores || {};
      Object.keys(scores).forEach(function (year) {
        setRaw("mental-high:" + childId + ":" + year, String(scores[year]));
      });
      const docs = progress.documents || {};
      if (docs.aflatoon) setRaw("aflatoon_academy_3stage_90d_v2", docs.aflatoon);
      if (docs["mathsprint-y45"]) setRaw("mathsprint_y5_v1_progress:" + childId, docs["mathsprint-y45"]);
      ["y4", "y5", "y6"].forEach(function (quest) {
        if (docs["quest-" + quest]) setRaw("maths_quest_" + quest + "_profiles_v1", docs["quest-" + quest]);
        if (docs["quest-" + quest + "-active"]) setRaw("maths_quest_" + quest + "_active_id", docs["quest-" + quest + "-active"]);
      });
    } finally {
      applying = false;
    }
  }

  function remember(data) {
    if (!data || !data.user) return;
    applying = true;
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
      const user = {
        id: data.user.id,
        email: data.user.email,
        firstName: data.user.firstName || "",
        surname: data.user.surname || "",
        dob: data.user.dob || "",
        gender: data.user.gender || "",
        provider: data.user.provider || "email",
        children: data.children || [],
      };
      const index = users.findIndex(function (item) {
        return item.email === user.email;
      });
      if (index >= 0) users[index] = user;
      else users.push(user);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, at: Date.now() }));
      if (data.activeChildId) {
        localStorage.setItem(
          ACTIVE_CHILD_KEY,
          JSON.stringify({ email: user.email, childId: data.activeChildId })
        );
      }
    } finally {
      applying = false;
    }
    writeProgress(data.activeChildId, data.progress);
  }

  function take(items, key) {
    const value = localStorage.getItem(key);
    if (value != null && value !== "") items.push({ key: key, value: value });
  }

  function localSnapshot(childId, includeShared) {
    const items = [];
    if (!childId) return items;
    take(items, "achievers-den-topic-progress:" + childId);
    take(items, "achievers-den-home-pref:" + childId);
    take(items, "mathsprint_y5_v1_progress:" + childId);
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key && key.indexOf("mental-high:" + childId + ":") === 0) take(items, key);
    }
    if (includeShared) {
      take(items, "achievers-den-topic-progress");
      take(items, "achievers-den-home-pref");
      take(items, "aflatoon_academy_3stage_90d_v2");
      take(items, "mathsprint_y5_v1_progress");
      ["y4", "y5", "y6"].forEach(function (quest) {
        take(items, "maths_quest_" + quest + "_profiles_v1");
        take(items, "maths_quest_" + quest + "_active_id");
      });
    }
    return items;
  }

  function pushLocal(childId, includeShared) {
    const id = childId || activeChildId();
    const items = localSnapshot(id, includeShared);
    if (!id || !items.length) return Promise.resolve();
    return fetch("/api/progress", {
      method: "PUT",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childId: id, items: items }),
    }).then(function () {});
  }

  function snapshotAll() {
    const items = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (isProgressKey(key)) take(items, key);
    }
    return items;
  }

  async function hydrate() {
    if (location.protocol === "file:") return;
    const before = snapshotAll();
    let response;
    try {
      response = await fetch("/api/me", { credentials: "same-origin", cache: "no-store" });
    } catch (_err) {
      return;
    }
    if (response.status === 404 || !response.ok) return;
    const data = await response.json();
    remember(data);
    if (!progressHasData(data.progress) && data.activeChildId && before.length) {
      await fetch("/api/progress", {
        method: "PUT",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childId: data.activeChildId, items: before }),
      }).catch(function () {});
    }
  }

  const readyPromise = hydrate();

  const originalSet = localStorage.setItem.bind(localStorage);
  localStorage.setItem = function (key, value) {
    originalSet(key, value);
    schedule(key, value);
  };
  const originalRemove = localStorage.removeItem.bind(localStorage);
  localStorage.removeItem = function (key) {
    originalRemove(key);
    schedule(key, null);
  };
  window.addEventListener("storage", function (event) {
    if (!event.key) return;
    schedule(event.key, event.newValue);
  });
  window.addEventListener("pagehide", function () {
    flush();
  });

  window.AccountSync = {
    ready: function () {
      return readyPromise;
    },
    remember: remember,
    flush: flush,
    pushLocal: pushLocal,
    writeProgress: writeProgress,
  };
})();
