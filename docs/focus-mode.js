/* Focus mode: local camera check while a sprint is open. Frames are not recorded or uploaded. */
(function () {
  var STORAGE_KEY = "aflatoon_focus_mode";
  var PIN_KEY = "aflatoon_focus_pin";
  var SPRINT_KEY = "aflatoon_focus_sprint";
  var AWAY_MS = 2500;
  var BACK_MS = 700;
  var CHECK_MS = 220;

  var enabled = false;
  var watching = false;
  var starting = false;
  var stream = null;
  var video = null;
  var detector = null;
  var detectorKind = "";
  var raf = 0;
  var busy = false;
  var awaySince = 0;
  var backSince = 0;
  var popupOpen = false;
  var lastCheck = 0;
  var sprint = null;
  var pinMode = "";
  var pinAction = null;

  function $(id) {
    return document.getElementById(id);
  }

  function loadEnabled() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch (err) {
      return false;
    }
  }

  function saveEnabled() {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
    } catch (err) { /* ignore */ }
  }

  function loadPin() {
    try {
      return localStorage.getItem(PIN_KEY) || "";
    } catch (err) {
      return "";
    }
  }

  function savePin(hash) {
    try {
      localStorage.setItem(PIN_KEY, hash);
    } catch (err) { /* ignore */ }
  }

  function loadSprint() {
    try {
      var raw = localStorage.getItem(SPRINT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function saveSprint() {
    try {
      if (!sprint) localStorage.removeItem(SPRINT_KEY);
      else localStorage.setItem(SPRINT_KEY, JSON.stringify(sprint));
    } catch (err) { /* ignore */ }
  }

  function sprintLocked() {
    return !!(enabled && sprint && sprint.done !== true);
  }

  function hashPin(pin) {
    var text = "aflatoon-focus:" + pin;
    if (window.crypto && crypto.subtle && window.TextEncoder) {
      return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (b) {
          return ("0" + b.toString(16)).slice(-2);
        }).join("");
      });
    }
    var h = 2166136261;
    for (var i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Promise.resolve("fnv:" + (h >>> 0).toString(16));
  }

  function paintButton() {
    var btn = $("focusModeBtn");
    if (!btn) return;
    var label = $("focusModeLabel");
    var dot = $("focusModeDot");
    btn.setAttribute("aria-pressed", enabled ? "true" : "false");
    btn.classList.toggle("is-on", enabled);
    btn.classList.toggle("is-watching", watching);
    if (label) {
      label.textContent = starting ? "Camera…" : watching ? "Watching" : enabled ? "Focus on" : "Focus";
    }
    if (dot) dot.hidden = !watching;
    if (starting) {
      btn.title = "Starting the camera for this sprint.";
    } else if (watching) {
      btn.title = "Focus mode is using the camera for this sprint. Nothing is recorded.";
    } else if (enabled) {
      btn.title = "Focus mode is on. The camera starts when the sprint starts. Nothing is recorded.";
    } else {
      btn.title = "Turn on Focus mode. When the sprint starts, the camera checks that you are looking at the screen.";
    }
  }

  function ensureChrome() {
    if ($("focusNudge")) return;
    var style = document.createElement("style");
    style.textContent = [
      "#focusModeBtn.is-on { background:#059669; color:#fff; border-color:#047857; }",
      "#focusModeBtn.is-watching { box-shadow:0 0 0 3px rgba(16,185,129,.35); }",
      "#focusModeDot { width:.55rem; height:.55rem; border-radius:999px; background:#f87171; box-shadow:0 0 0 0 rgba(248,113,113,.7); animation:focusPulse 1.4s infinite; }",
      "@keyframes focusPulse { 70% { box-shadow:0 0 0 6px rgba(248,113,113,0);} 100% { box-shadow:0 0 0 0 rgba(248,113,113,0);} }",
      "#focusCamPip { position:fixed; right:1rem; bottom:1rem; z-index:60; width:7.5rem; border-radius:1rem; overflow:hidden; border:2px solid #fff; box-shadow:0 10px 30px rgba(15,23,42,.28); background:#0f172a; }",
      "#focusCamPip video { width:100%; height:5.4rem; object-fit:cover; transform:scaleX(-1); display:block; }",
      "#focusCamPip p { margin:0; padding:.3rem .4rem .4rem; color:#e2e8f0; font:700 .62rem/1.2 Fredoka, Nunito, sans-serif; text-align:center; }",
      "#focusNudge { position:fixed; inset:0; z-index:80; display:flex; align-items:center; justify-content:center; padding:1.25rem; background:rgba(15,23,42,.45); pointer-events:none; }",
      "#focusNudge.hidden, #focusCamPip.hidden, #focusToast.hidden { display:none !important; }",
      "#focusNudgeCard { pointer-events:none; max-width:26rem; width:100%; background:#fff; border-radius:1.5rem; padding:1.6rem 1.4rem 1.2rem; text-align:center; box-shadow:0 24px 60px rgba(15,23,42,.35); border:3px solid #f59e0b; }",
      "#focusNudgeCard h2 { margin:.4rem 0 .35rem; font-family:Fredoka, Nunito, sans-serif; font-size:1.8rem; color:#0f172a; }",
      "#focusNudgeCard p { margin:0; color:#334155; font-family:Nunito, sans-serif; font-weight:700; font-size:1.02rem; }",
      "#focusNudgeNote { margin-top:.8rem !important; color:#64748b !important; font-size:.75rem !important; font-weight:600 !important; }",
      "#focusToast { position:fixed; left:50%; bottom:1.25rem; transform:translateX(-50%); z-index:75; max-width:28rem; background:#0f172a; color:#fff; border-radius:1rem; padding:.8rem 1rem; font:700 .85rem/1.35 Nunito, sans-serif; box-shadow:0 12px 30px rgba(15,23,42,.3); }",
      "#focusPinModal { position:fixed; inset:0; z-index:95; display:flex; align-items:center; justify-content:center; padding:1.25rem; background:rgba(15,23,42,.62); }",
      "#focusPinModal.hidden { display:none !important; }",
      "#focusPinCard { width:100%; max-width:24rem; background:#fff; border-radius:1.5rem; padding:1.4rem 1.3rem 1.15rem; box-shadow:0 24px 60px rgba(15,23,42,.35); border:3px solid #6366f1; }",
      "#focusPinCard h2 { margin:0 0 .4rem; font-family:Fredoka, Nunito, sans-serif; font-size:1.45rem; color:#0f172a; }",
      "#focusPinCard p { margin:0 0 .9rem; color:#334155; font-family:Nunito, sans-serif; font-weight:700; font-size:.95rem; }",
      "#focusPinCard label { display:block; margin:.55rem 0 .2rem; color:#475569; font:800 .75rem/1.2 Nunito, sans-serif; letter-spacing:.02em; }",
      "#focusPinConfirmWrap[hidden] { display:none !important; }",
      "#focusPinCard input { width:100%; box-sizing:border-box; margin-top:.25rem; border:2px solid #cbd5e1; border-radius:.9rem; padding:.7rem .8rem; font:800 1.4rem/1 ui-monospace, monospace; letter-spacing:.35rem; text-align:center; color:#0f172a; }",
      "#focusPinError { min-height:1.2rem; margin:.45rem 0 0 !important; color:#be123c !important; font-size:.85rem !important; }",
      "#focusPinActions { display:flex; gap:.6rem; margin-top:.85rem; }",
      "#focusPinActions button { flex:1; border:0; border-radius:.9rem; padding:.75rem .6rem; font:800 .95rem/1 Nunito, sans-serif; cursor:pointer; }",
      "#focusPinCancel { background:#e2e8f0; color:#0f172a; }",
      "#focusPinOk { background:#4f46e5; color:#fff; }",
      "@media print { #focusCamPip, #focusNudge, #focusToast, #focusModeBtn, #focusPinModal { display:none !important; } }"
    ].join("\n");
    document.head.appendChild(style);

    var pip = document.createElement("div");
    pip.id = "focusCamPip";
    pip.className = "hidden no-print";
    pip.innerHTML = '<video id="focusCamVideo" playsinline autoplay muted></video><p>Focus camera · not saved</p>';
    document.body.appendChild(pip);
    video = pip.querySelector("video");

    var nudge = document.createElement("div");
    nudge.id = "focusNudge";
    nudge.className = "hidden no-print";
    nudge.setAttribute("role", "alertdialog");
    nudge.setAttribute("aria-live", "assertive");
    nudge.setAttribute("aria-label", "Please focus");
    nudge.innerHTML = '<div id="focusNudgeCard"><div style="font-size:2.4rem" aria-hidden="true">👀</div><h2>Please focus</h2><p>Look at the screen. This closes when your eyes are back on the lesson.</p><p id="focusNudgeNote">The camera stays on this computer. Nothing is recorded.</p></div>';
    document.body.appendChild(nudge);

    var toast = document.createElement("div");
    toast.id = "focusToast";
    toast.className = "hidden no-print";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);

    var pin = document.createElement("div");
    pin.id = "focusPinModal";
    pin.className = "hidden no-print";
    pin.setAttribute("role", "dialog");
    pin.setAttribute("aria-modal", "true");
    pin.setAttribute("aria-labelledby", "focusPinTitle");
    pin.innerHTML = '<form id="focusPinForm"><div id="focusPinCard"><h2 id="focusPinTitle">Parent code</h2><p id="focusPinText"></p><label>4-digit code<input id="focusPinA" inputmode="numeric" maxlength="4" autocomplete="off" pattern="[0-9]*"></label><label id="focusPinConfirmWrap">Confirm code<input id="focusPinB" inputmode="numeric" maxlength="4" autocomplete="off" pattern="[0-9]*"></label><p id="focusPinError"></p><div id="focusPinActions"><button type="button" id="focusPinCancel">Cancel</button><button type="submit" id="focusPinOk">Save code</button></div></div></form>';
    document.body.appendChild(pin);
    pin.addEventListener("submit", submitPin);
    $("focusPinCancel").addEventListener("click", closePin);
    ["focusPinA", "focusPinB"].forEach(function (id) {
      var input = $(id);
      input.addEventListener("input", function () {
        input.value = (input.value || "").replace(/\D/g, "").slice(0, 4);
      });
      input.addEventListener("keydown", function (event) {
        event.stopPropagation();
      });
    });
  }

  function openPin(mode, action) {
    ensureChrome();
    pinMode = mode;
    pinAction = action || null;
    $("focusPinA").value = "";
    $("focusPinB").value = "";
    $("focusPinError").textContent = "";
    var confirmWrap = $("focusPinConfirmWrap");
    var purpose = "Focus uses the camera during a sprint. If the child looks away, it asks them to look back. Nothing is recorded.";
    if (mode === "setup") {
      $("focusPinTitle").textContent = "Parent: set a 4-digit code";
      $("focusPinText").textContent = purpose + " Set a 4-digit parent code and type it again. Only this code can turn Focus off or leave a sprint early.";
      confirmWrap.hidden = false;
      $("focusPinOk").textContent = "Save code";
    } else if (mode === "off") {
      $("focusPinTitle").textContent = "Turn Focus off";
      $("focusPinText").textContent = purpose + " Enter the parent code to turn Focus off.";
      confirmWrap.hidden = true;
      $("focusPinOk").textContent = "Turn off";
    } else {
      $("focusPinTitle").textContent = "Leave this sprint";
      $("focusPinText").textContent = purpose + " Enter the parent code to leave. Without the code, finish all the questions first.";
      confirmWrap.hidden = true;
      $("focusPinOk").textContent = "Leave";
    }
    $("focusPinModal").classList.remove("hidden");
    setTimeout(function () {
      var field = $("focusPinA");
      if (field) field.focus();
    }, 30);
  }

  function closePin() {
    pinMode = "";
    pinAction = null;
    var modal = $("focusPinModal");
    if (modal) modal.classList.add("hidden");
  }

  function submitPin(event) {
    event.preventDefault();
    var code = $("focusPinA").value;
    var err = $("focusPinError");
    if (!/^\d{4}$/.test(code)) {
      err.textContent = "Enter a 4-digit code.";
      return;
    }
    if (pinMode === "setup") {
      if (code !== $("focusPinB").value) {
        err.textContent = "The two codes do not match.";
        return;
      }
      hashPin(code).then(function (hash) {
        savePin(hash);
        closePin();
        enableFocus();
      });
      return;
    }
    hashPin(code).then(function (hash) {
      if (hash !== loadPin()) {
        err.textContent = "That code is not right.";
        $("focusPinA").value = "";
        return;
      }
      var mode = pinMode;
      var action = pinAction;
      closePin();
      if (mode === "off") {
        disableFocus();
        return;
      }
      sprint = null;
      saveSprint();
      if (action) action();
    });
  }

  function enableFocus() {
    enabled = true;
    saveEnabled();
    paintButton();
    showToast("Focus mode is on. The camera starts when the sprint starts. Nothing is recorded.");
    if (sprintIsOpen() && window.app && app.state) onSprintStart(app.state.activeCourse, app.currentDay);
    if (sprintIsOpen() || moduleIsOpen()) startCamera();
  }

  function disableFocus() {
    enabled = false;
    sprint = null;
    saveSprint();
    saveEnabled();
    stopCamera();
    paintButton();
  }

  function showToast(text) {
    ensureChrome();
    var toast = $("focusToast");
    toast.textContent = text;
    toast.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.classList.add("hidden");
    }, 4200);
  }

  function showPopup() {
    ensureChrome();
    popupOpen = true;
    $("focusNudge").classList.remove("hidden");
  }

  function hidePopup() {
    popupOpen = false;
    backSince = 0;
    var el = $("focusNudge");
    if (el) el.classList.add("hidden");
  }

  function scoreMap(categories) {
    var map = {};
    if (!categories) return map;
    for (var i = 0; i < categories.length; i++) {
      map[categories[i].categoryName] = categories[i].score || 0;
    }
    return map;
  }

  function lookingFromLandmarks(lm, blend) {
    if (!lm || lm.length < 468) return false;
    var leftOuter = lm[33];
    var leftInner = lm[133];
    var rightInner = lm[362];
    var rightOuter = lm[263];
    var nose = lm[1];
    var forehead = lm[10];
    var chin = lm[152];
    var eyeSpan = rightOuter.x - leftOuter.x;
    var faceHeight = chin.y - forehead.y;
    if (eyeSpan < 0.04 || faceHeight < 0.08) return false;
    var midEyeX = (leftOuter.x + rightOuter.x) / 2;
    var midEyeY = (leftOuter.y + rightOuter.y) / 2;
    var yaw = (nose.x - midEyeX) / eyeSpan;
    var pitch = (nose.y - midEyeY) / faceHeight;
    var leftEye = Math.hypot(leftOuter.x - leftInner.x, leftOuter.y - leftInner.y);
    var rightEye = Math.hypot(rightOuter.x - rightInner.x, rightOuter.y - rightInner.y);
    var eyeRatio = Math.min(leftEye, rightEye) / Math.max(leftEye, rightEye || 0.0001);
    var headOnScreen = Math.abs(yaw) < 0.30 && pitch > 0.02 && pitch < 0.48 && eyeRatio > 0.4;
    if (!headOnScreen) return false;
    if (!blend) return true;
    var down = ((blend.eyeLookDownLeft || 0) + (blend.eyeLookDownRight || 0)) / 2;
    var up = ((blend.eyeLookUpLeft || 0) + (blend.eyeLookUpRight || 0)) / 2;
    var side = Math.max(blend.eyeLookOutLeft || 0, blend.eyeLookOutRight || 0, blend.eyeLookInLeft || 0, blend.eyeLookInRight || 0);
    return down < 0.55 && up < 0.55 && side < 0.55;
  }

  function noteFocus(looking, now) {
    if (!enabled) return;
    var t = now == null ? performance.now() : now;
    if (looking) {
      awaySince = 0;
      if (!popupOpen) {
        backSince = 0;
        return;
      }
      if (!backSince) backSince = t;
      if (t - backSince >= BACK_MS) hidePopup();
      return;
    }
    backSince = 0;
    if (!awaySince) awaySince = t;
    if (!popupOpen && t - awaySince >= AWAY_MS) showPopup();
  }

  async function loadDetector() {
    if (detector) return;
    var vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.17");
    var fileset = await vision.FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.17/wasm"
    );
    var model = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
    try {
      detector = await vision.FaceLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: model, delegate: "GPU" },
        runningMode: "VIDEO",
        numFaces: 1,
        outputFaceBlendshapes: true
      });
    } catch (err) {
      detector = await vision.FaceLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: model, delegate: "CPU" },
        runningMode: "VIDEO",
        numFaces: 1,
        outputFaceBlendshapes: true
      });
    }
    detectorKind = "landmarker";
  }

  async function loadFaceDetectorFallback() {
    if (detector) return;
    if (typeof FaceDetector !== "function") {
      throw new Error("Focus check could not load.");
    }
    detector = new FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
    detectorKind = "face";
  }

  async function detectLooking() {
    if (!detector) return true;
    if (detectorKind === "landmarker") {
      var result = detector.detectForVideo(video, performance.now());
      var faces = result && result.faceLandmarks;
      if (!faces || !faces.length) return false;
      var blend = result.faceBlendshapes && result.faceBlendshapes[0]
        ? scoreMap(result.faceBlendshapes[0].categories)
        : null;
      return lookingFromLandmarks(faces[0], blend);
    }
    var found = await detector.detect(video);
    return !!(found && found.length);
  }

  function loop(now) {
    if (!watching) return;
    raf = requestAnimationFrame(loop);
    if (document.hidden || busy) return;
    if (!video || video.readyState < 2) return;
    if (now - lastCheck < CHECK_MS) return;
    lastCheck = now;
    busy = true;
    detectLooking().then(function (looking) {
      if (watching) noteFocus(looking);
    }).catch(function () {
      /* skip a bad frame */
    }).then(function () {
      busy = false;
    });
  }

  function cameraErrorText(err) {
    var name = err && err.name;
    if (name === "NotAllowedError" || name === "PermissionDeniedError") {
      return "Allow the camera to use Focus mode, then start the sprint again.";
    }
    if (name === "NotFoundError" || name === "DevicesNotFoundError") {
      return "No camera was found, so Focus mode cannot watch this sprint.";
    }
    return "The camera could not start. Close other apps using it, then start the sprint again.";
  }

  function openStream() {
    var tries = [
      { audio: false, video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } } },
      { audio: false, video: true }
    ];
    var last = Promise.reject(new Error("No camera"));
    tries.forEach(function (constraints) {
      last = last.catch(function (err) {
        if (err && (err.name === "NotAllowedError" || err.name === "PermissionDeniedError")) throw err;
        return navigator.mediaDevices.getUserMedia(constraints);
      });
    });
    return last;
  }

  function armDetector() {
    if (detector || armDetector._loading) return;
    armDetector._loading = true;
    loadDetector().catch(function () {
      return loadFaceDetectorFallback();
    }).catch(function () {
      showToast("The camera is on. Focus reminders will start once the face check finishes loading.");
    }).then(function () {
      armDetector._loading = false;
    });
  }

  async function startCamera() {
    if (watching || starting) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showToast("This browser cannot use the camera for Focus mode.");
      return;
    }
    starting = true;
    paintButton();
    ensureChrome();
    try {
      stream = await openStream();
      video.srcObject = stream;
      await video.play();
      watching = true;
      awaySince = 0;
      backSince = 0;
      $("focusCamPip").classList.remove("hidden");
      if (!raf) raf = requestAnimationFrame(loop);
      armDetector();
    } catch (err) {
      stopCamera();
      showToast(cameraErrorText(err));
    } finally {
      starting = false;
      paintButton();
    }
  }

  function stopCamera() {
    watching = false;
    starting = false;
    busy = false;
    awaySince = 0;
    backSince = 0;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    hidePopup();
    if (stream) {
      stream.getTracks().forEach(function (track) { track.stop(); });
      stream = null;
    }
    if (video) video.srcObject = null;
    var pip = $("focusCamPip");
    if (pip) pip.classList.add("hidden");
    paintButton();
  }

  function moduleIsOpen() {
    var view = $("dayModuleView");
    return !!(view && !view.classList.contains("hidden"));
  }

  function sprintIsOpen() {
    var practice = $("practiceTabContent");
    return moduleIsOpen() && !!(practice && !practice.classList.contains("hidden"));
  }

  function toggle() {
    var modal = $("focusPinModal");
    if (modal && !modal.classList.contains("hidden")) return;
    if (!enabled) {
      if (!loadPin()) openPin("setup");
      else enableFocus();
      return;
    }
    openPin("off");
  }

  function onSprintStart(course, day) {
    if (!enabled || !course || !day) return;
    sprint = { course: course, day: day, done: false };
    saveSprint();
  }

  function onSprintComplete() {
    if (!sprint) return;
    sprint.done = true;
    saveSprint();
  }

  function requestLeave(action) {
    if (!sprintLocked()) {
      if (sprint && sprint.done) {
        sprint = null;
        saveSprint();
      }
      if (action) action();
      return;
    }
    openPin("leave", action);
  }

  function unfinishedSprint() {
    if (!sprintLocked()) return null;
    return { course: sprint.course, day: sprint.day };
  }

  function onModuleStart() {
    if (!enabled) return;
    startCamera();
  }

  function onModuleStop() {
    stopCamera();
  }

  function init() {
    ensureChrome();
    sprint = loadSprint();
    enabled = loadEnabled();
    if (enabled && !loadPin()) {
      enabled = false;
      sprint = null;
      saveEnabled();
      saveSprint();
    }
    paintButton();
    var btn = $("focusModeBtn");
    if (btn) btn.addEventListener("click", toggle);
    window.addEventListener("beforeunload", function (event) {
      if (!sprintLocked()) return;
      event.preventDefault();
      event.returnValue = "";
    });
  }

  window.FocusGuard = {
    toggle: toggle,
    onModuleStart: onModuleStart,
    onModuleStop: onModuleStop,
    onSprintStart: onSprintStart,
    onSprintComplete: onSprintComplete,
    requestLeave: requestLeave,
    sprintLocked: sprintLocked,
    unfinishedSprint: unfinishedSprint,
    lookingFromLandmarks: lookingFromLandmarks,
    noteFocus: noteFocus
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
