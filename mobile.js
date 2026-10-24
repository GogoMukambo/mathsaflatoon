(function () {
  const appShell = document.getElementById("appShell");
  const content = appShell && appShell.querySelector(".content");
  if (!appShell || !content) return;

  const IN_ANDROID_APP = /Year8StudyApp/.test(navigator.userAgent);
  const narrow = window.matchMedia("(max-width: 760px)");

  const MODE_NAMES = {
    study: "Study",
    cards: "Flash cards",
    test: "Quick Test",
    mock: "Mock exam",
  };

  const BACK_ICON = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';

  const top = document.createElement("header");
  top.className = "m-top";
  top.innerHTML = `
    <button type="button" class="m-icon-btn m-back" id="mBack" aria-label="Back">${BACK_ICON}</button>
    <div class="m-heading">
      <p class="m-hello" id="mHello">Welcome back,</p>
      <h1 class="m-title" id="mTitle">Student</h1>
    </div>
    <button type="button" class="m-avatar" id="mAvatar" aria-label="Account"></button>
  `;

  const yearsSection = document.createElement("section");
  yearsSection.className = "m-section m-years";
  yearsSection.innerHTML = `<p class="m-label">Year</p>`;

  const subjectsSection = document.createElement("section");
  subjectsSection.className = "m-section m-subjects";
  subjectsSection.innerHTML = `<p class="m-label">Subjects</p>`;

  const modesSection = document.createElement("section");
  modesSection.className = "m-section m-modes";
  modesSection.innerHTML = `<p class="m-label">Choose a path</p>`;

  const sheet = document.createElement("div");
  sheet.className = "m-sheet";
  sheet.hidden = true;
  sheet.innerHTML = `
    <div class="m-sheet-backdrop" data-close></div>
    <div class="m-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="mSheetTitle">
      <div class="m-sheet-grip" data-close></div>
      <h2 class="m-sheet-title" id="mSheetTitle">Your account</h2>
      <p class="m-account-name" id="mAccountName"></p>
      <p class="m-account-meta">Cambridge Lower Secondary</p>
      <button type="button" class="ghost" id="mLogout">Log out</button>
    </div>
  `;

  const mBack = top.querySelector("#mBack");
  const mHello = top.querySelector("#mHello");
  const mTitle = top.querySelector("#mTitle");
  const mAvatar = top.querySelector("#mAvatar");
  const accountName = sheet.querySelector("#mAccountName");
  const backFace = studyEl.querySelector(".back");

  const moved = [yearPicks, subjectPicks, modePicks].map((el) => {
    const marker = document.createComment("mobile-slot");
    el.parentNode.insertBefore(marker, el);
    return { el, marker };
  });

  let active = false;
  let lastPanel = null;
  let fitFrame = 0;

  function visible(el) {
    return el && !el.hasAttribute("hidden");
  }

  // sync() runs from a MutationObserver on `hidden`, so only write real changes.
  function setHidden(el, value) {
    if (el.hidden !== value) el.hidden = value;
  }

  function userName() {
    const chip = document.getElementById("userChip");
    return ((chip && chip.textContent) || "").trim();
  }

  function level() {
    if (visible(readerEl) || visible(studyEl) || visible(quizEl) || visible(quizResultEl) || visible(quizReviewEl)) {
      return 4;
    }
    if (appMode) return 3;
    if (studySubject) return 2;
    if (yearId) return 1;
    return 0;
  }

  function subjectName() {
    if (studySubject === "maths") return "Mathematics";
    if (studySubject === "mental") return "Quick Mental Mathematics";
    return "Science";
  }

  function quizInProgress() {
    return visible(quizEl) && !quizClosed;
  }

  function goBack() {
    const lv = level();
    if (lv === 0) return false;
    closeSheet();
    if (mentalCountdownOn()) {
      cancelMentalCountdown();
      showMentalBriefing();
      return true;
    }
    const message = leaveMessage();
    if (message && lv >= 4) {
      askLeave(message).then((ok) => {
        if (!ok) return;
        mockLeaveGranted = true;
        navigateBack();
      });
      return true;
    }
    navigateBack();
    return true;
  }

  function navigateBack() {
    const lv = level();
    if (lv >= 4 && appMode === "mock") {
      if (mockExamOpen() || mockLeaveGranted) selectMode("mock");
      else selectStudySubject(studySubject);
      return;
    }
    if (lv >= 4 && appMode) {
      if (studySubject === "mental") showMentalBriefing();
      else selectMode(appMode);
    } else if (lv === 3) selectStudySubject(studySubject);
    else if (lv === 2) selectYear(yearId);
    else document.getElementById("homeBtn").click();
  }

  function openSheet() {
    accountName.textContent = userName() || "Student";
    sheet.hidden = false;
    document.body.classList.add("m-sheet-open");
  }

  function closeSheet() {
    sheet.hidden = true;
    document.body.classList.remove("m-sheet-open");
  }

  function safeBottom() {
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--safe-bottom");
    return parseFloat(raw) || 0;
  }

  // Size the flash card to the screen, then shrink the note until Key idea + Remember fit without scrolling.
  function fitCard() {
    fitFrame = 0;
    const on = active && visible(studyEl);
    document.body.classList.toggle("m-cards", on);
    studyEl.style.height = "";
    backText.style.fontSize = "";
    backFace.classList.remove("m-scroll");
    visualEl.classList.remove("m-no-art");
    if (!on) return;

    const topEdge = studyEl.getBoundingClientRect().top + window.scrollY;
    studyEl.style.height = `${Math.max(360, window.innerHeight - topEdge - safeBottom() - 12)}px`;

    const overflowing = () => backFace.scrollHeight > backFace.clientHeight + 1;
    for (let size = 15; size >= 12.5 && overflowing(); size -= 0.5) {
      backText.style.fontSize = `${size}px`;
    }
    if (overflowing() || visualEl.clientHeight < 80) {
      visualEl.classList.add("m-no-art");
      for (let size = 15; size >= 12.5; size -= 0.5) {
        backText.style.fontSize = `${size}px`;
        if (!overflowing()) break;
      }
    }
    if (overflowing()) backFace.classList.add("m-scroll");
  }

  function scheduleFit() {
    if (fitFrame) cancelAnimationFrame(fitFrame);
    fitFrame = requestAnimationFrame(fitCard);
  }

  function sync() {
    if (!active) return;
    const lv = level();
    const name = userName();
    const first = name.split(/\s+/)[0] || "Student";
    const initials = name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");

    mAvatar.textContent = initials || "?";
    setHidden(mBack, lv === 0);
    if (lv === 0) {
      mHello.textContent = "Welcome back,";
      mTitle.textContent = first;
    } else if (lv === 1) {
      mHello.textContent = "Choose a subject";
      mTitle.textContent = yearById(yearId) ? yearById(yearId).title : "Year";
    } else if (lv === 2) {
      mHello.textContent = yearById(yearId) ? yearById(yearId).title : "Study";
      mTitle.textContent = subjectName();
    } else if (lv === 3) {
      mHello.textContent = subjectName();
      mTitle.textContent = MODE_NAMES[appMode] || pageTitle.textContent;
    } else {
      mHello.textContent = `${subjectName()} · ${MODE_NAMES[appMode] || ""}`;
      mTitle.textContent = visible(readerEl) || visible(studyEl) ? pageTitle.textContent : MODE_NAMES[appMode] || "Test";
    }

    document.body.classList.toggle("m-home", visible(welcomeEl));
    document.body.classList.toggle("m-has-year", Boolean(yearId));
    document.body.classList.toggle("m-has-subject", Boolean(studySubject));
    document.body.classList.toggle("m-has-mode", Boolean(appMode));
    setHidden(subjectsSection, !visible(subjectPicks));
    setHidden(modesSection, !visible(modePicks));

    const panel = [welcomeEl, readerEl, studyEl, quizEl, quizResultEl, quizReviewEl].find(visible);
    const panelKey = panel ? panel.id + ":" + pageTitle.textContent + ":" + (appMode || "") : null;
    if (panelKey !== lastPanel) {
      lastPanel = panelKey;
      window.scrollTo(0, 0);
    }
    scheduleFit();
  }

  function liftQuizField() {
    if (!active) return;
    const el = document.activeElement;
    if (!el || el.id !== "quizAnswer") return;
    const row = el.closest(".quiz-answer-row") || el;
    const safe = safeBottom();
    const rect = row.getBoundingClientRect();
    const limit = window.innerHeight - safe - 24;
    if (rect.bottom > limit) window.scrollBy(0, rect.bottom - limit);
  }

  function enter() {
    if (active) return;
    active = true;
    document.body.classList.add("is-mobile");
    const hero = welcomeEl.querySelector(".welcome-hero");
    content.prepend(top);
    content.insertBefore(yearsSection, welcomeEl);
    yearsSection.appendChild(yearPicks);
    if (hero) hero.after(subjectsSection);
    else welcomeEl.prepend(subjectsSection);
    subjectsSection.appendChild(subjectPicks);
    subjectsSection.after(modesSection);
    modesSection.appendChild(modePicks);
    appShell.append(sheet);
    lastPanel = null;
    sync();
  }

  function leave() {
    if (!active) return;
    active = false;
    closeSheet();
    document.body.classList.remove("is-mobile", "m-home", "m-has-year", "m-has-subject", "m-has-mode");
    moved.forEach(({ el, marker }) => marker.parentNode.insertBefore(el, marker.nextSibling));
    [top, yearsSection, subjectsSection, modesSection, sheet].forEach((el) => el.remove());
    fitCard();
  }

  function applyLayout() {
    if (IN_ANDROID_APP || narrow.matches) enter();
    else leave();
  }

  if (IN_ANDROID_APP) document.body.classList.add("is-android");

  mBack.addEventListener("click", goBack);
  mAvatar.addEventListener("click", openSheet);
  sheet.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeSheet();
  });
  sheet.querySelector("#mLogout").addEventListener("click", () => {
    document.getElementById("logoutBtn").click();
  });

  visualEl.addEventListener("click", () => {
    const img = visualEl.querySelector("img");
    if (active && img) openModal(img.src, img.alt, img.alt);
  });
  visualEl.addEventListener("load", scheduleFit, true);

  const baseRenderCard = window.renderCard;
  window.renderCard = function () {
    baseRenderCard.apply(this, arguments);
    scheduleFit();
  };

  const observer = new MutationObserver(sync);
  observer.observe(appShell, { subtree: true, attributes: true, attributeFilter: ["hidden"] });
  observer.observe(pageTitle, { childList: true, characterData: true, subtree: true });
  const chip = document.getElementById("userChip");
  if (chip) observer.observe(chip, { childList: true, characterData: true, subtree: true });

  if (quizAnswer) {
    quizAnswer.addEventListener("focus", () => {
      setTimeout(liftQuizField, 60);
      setTimeout(liftQuizField, 320);
    });
  }
  window.addEventListener("resize", () => {
    scheduleFit();
    requestAnimationFrame(liftQuizField);
  });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => requestAnimationFrame(liftQuizField));
    window.visualViewport.addEventListener("scroll", () => requestAnimationFrame(liftQuizField));
  }
  if (narrow.addEventListener) narrow.addEventListener("change", applyLayout);
  else narrow.addListener(applyLayout);
  applyLayout();

  window.mobileBack = function () {
    if (!active) return false;
    if (leaveDialog && !leaveDialog.hasAttribute("hidden")) {
      closeLeave(false);
      return true;
    }
    if (!sheet.hidden) {
      closeSheet();
      return true;
    }
    if (imageModal && !imageModal.hasAttribute("hidden")) {
      closeModal();
      return true;
    }
    return goBack();
  };
})();
