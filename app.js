const welcomeEl = document.getElementById("welcome");
const studyEl = document.getElementById("study");
const readerEl = document.getElementById("reader");
const readerDoc = document.getElementById("readerDoc");
const yearPicks = document.getElementById("yearPicks");
const tree = document.getElementById("tree");
const pageTitle = document.getElementById("pageTitle");
const eyebrow = document.getElementById("eyebrow");
const moduleLabel = document.getElementById("moduleLabel");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeHint = document.getElementById("welcomeHint");
const welcomeHero = document.getElementById("welcomeHero");
const welcomeHeroImg = document.getElementById("welcomeHeroImg");
const welcomeHeroBadge = document.getElementById("welcomeHeroBadge");
const learnBanner = document.getElementById("learnBanner");
const homeHero = document.getElementById("homeHero");
const appToolbar = document.getElementById("appToolbar");
const viewBack = document.getElementById("viewBack");
const choiceStage = document.getElementById("choiceStage");
const flash = document.getElementById("flash");
const frontText = document.getElementById("frontText");
const backText = document.getElementById("backText");
const cardProgress = document.getElementById("cardProgress");
const topicLabel = document.getElementById("topicLabel");
const barFill = document.getElementById("barFill");
const dots = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const faceKicker = document.getElementById("faceKicker");
const visualEl = document.getElementById("visual");
const modeLabel = document.getElementById("modeLabel");
const modePicks = document.getElementById("modePicks");
const subjectLabel = document.getElementById("subjectLabel");
const subjectPicks = document.getElementById("subjectPicks");
const quizEl = document.getElementById("quiz");
const quizResultEl = document.getElementById("quizResult");
const quizReviewEl = document.getElementById("quizReview");
const quizProgress = document.getElementById("quizProgress");
const quizSubjectLabel = document.getElementById("quizSubjectLabel");
const quizBarFill = document.getElementById("quizBarFill");
const quizSource = document.getElementById("quizSource");
const quizPrompt = document.getElementById("quizPrompt");
const quizAnswer = document.getElementById("quizAnswer");
const symbolBar = document.getElementById("symbolBar");
const quizAnswerLabel = document.getElementById("quizAnswerLabel");
const quizChoices = document.getElementById("quizChoices");
const quizPrevBtn = document.getElementById("quizPrevBtn");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizScoreTitle = document.getElementById("quizScoreTitle");
const quizScoreNumber = document.getElementById("quizScoreNumber");
const quizScoreHint = document.getElementById("quizScoreHint");
const reviewList = document.getElementById("reviewList");
const reviewHint = document.getElementById("reviewHint");
const examTimer = document.getElementById("examTimer");
const topicShowcase = document.getElementById("topicShowcase");

// Visual elements & Image showcase
const stageBackdrop = document.getElementById("stageBackdrop");
const featuredGallery = document.getElementById("featuredGallery");
const quizPicker = document.getElementById("quizPicker");
const quizChapterList = document.getElementById("quizChapterList");
const quizAllTopicsBtn = document.getElementById("quizAllTopicsBtn");
const quizStartBtn = document.getElementById("quizStartBtn");
const quizStartTopBtn = document.getElementById("quizStartTopBtn");
const quizPickerError = document.getElementById("quizPickerError");
const mockWelcome = document.getElementById("mockWelcome");
const mockStartBtn = document.getElementById("mockStartBtn");
const mentalWelcome = document.getElementById("mentalWelcome");
const mentalHighScoreEl = document.getElementById("mentalHighScore");
const mentalStartBtn = document.getElementById("mentalStartBtn");
const countdownOverlay = document.getElementById("countdownOverlay");
const countdownNum = document.getElementById("countdownNum");
const leaveDialog = document.getElementById("leaveDialog");
const leaveDialogText = document.getElementById("leaveDialogText");
const leaveOkBtn = document.getElementById("leaveOkBtn");
const leaveCancelBtn = document.getElementById("leaveCancelBtn");
const trophyFlash = document.getElementById("trophyFlash");
const topicHeroImg = document.getElementById("topicHeroImg");
const topicHeroBadge = document.getElementById("topicHeroBadge");
const topicHeroCaption = document.getElementById("topicHeroCaption");
const showcaseTag = document.getElementById("showcaseTag");
const showcaseSource = document.getElementById("showcaseSource");
const topicGalleryTabs = document.getElementById("topicGalleryTabs");
const heroZoomBtn = document.getElementById("heroZoomBtn");
const topicShowcaseMedia = document.getElementById("topicShowcaseMedia");

// Lightbox Modal elements
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBackdrop = document.getElementById("modalBackdrop");

let yearId = null;
let homeBoard = null;
const gogoMetro = document.getElementById("gogoMetro");
const gogoBreadcrumb = document.getElementById("gogoBreadcrumb");
let gogoMetroBound = false;

function gogoShowView(viewId) {
  if (!gogoMetro) return;
  gogoMetro.querySelectorAll("[data-gogo-view]").forEach((el) => {
    const on = el.dataset.gogoView === viewId;
    el.classList.toggle("active", on);
    if (on) show(el);
    else hide(el);
  });
}

function gogoUpdateBreadcrumb() {
  if (!gogoBreadcrumb) return;
  if (!homeBoard) {
    hide(gogoBreadcrumb);
    gogoBreadcrumb.replaceChildren();
    return;
  }
  show(gogoBreadcrumb);
  gogoBreadcrumb.replaceChildren();
  const path = document.createElement("span");
  path.className = "gogo-bc-muted";
  path.textContent = "Path:";
  gogoBreadcrumb.appendChild(path);
  const boardBtn = document.createElement("button");
  boardBtn.type = "button";
  boardBtn.textContent = homeBoard;
  boardBtn.addEventListener("click", () => gogoResetTo("board"));
  gogoBreadcrumb.appendChild(boardBtn);
  if (yearId) {
    const year = yearById(yearId);
    if (year) {
      const sep = document.createElement("span");
      sep.className = "gogo-bc-sep";
      sep.textContent = "/";
      gogoBreadcrumb.appendChild(sep);
      const current = document.createElement("span");
      current.className = "gogo-bc-current";
      current.textContent = year.title;
      gogoBreadcrumb.appendChild(current);
    }
  }
}

function gogoResetTo(level) {
  if (level === "board") {
    homeBoard = null;
    yearId = null;
    saveHomePref();
    gogoShowView("board");
  } else if (homeBoard === "IGCSE") {
    gogoShowView("years-igcse");
  } else if (homeBoard === "CBSE") {
    gogoShowView("years-cbse");
  }
  gogoUpdateBreadcrumb();
}

function gogoSelectBoard(board) {
  homeBoard = board;
  yearId = null;
  saveHomePref();
  gogoShowView(board === "CBSE" ? "years-cbse" : "years-igcse");
  gogoUpdateBreadcrumb();
}

function childAgeLabel(dob) {
  const born = new Date(String(dob || "") + "T12:00:00");
  if (Number.isNaN(born.getTime())) return "";
  const now = new Date();
  let age = now.getFullYear() - born.getFullYear();
  const month = now.getMonth() - born.getMonth();
  if (month < 0 || (month === 0 && now.getDate() < born.getDate())) age -= 1;
  if (age < 0 || age > 30) return "";
  return age === 1 ? "1 year old" : age + " years old";
}

function childFace(gender) {
  if (gender === "Male") return "👦";
  if (gender === "Female") return "👧";
  return "🧒";
}

function openParentChildModal() {
  const modal = document.getElementById("parentAddChildModal");
  const form = document.getElementById("parentAddChildForm");
  const error = document.getElementById("parentAddChildError");
  if (!modal) return;
  if (form) form.reset();
  if (error) {
    error.textContent = "";
    hide(error);
  }
  show(modal);
  const field = document.getElementById("parentChildName");
  if (field) field.focus();
}

function closeParentChildModal() {
  const modal = document.getElementById("parentAddChildModal");
  if (modal) hide(modal);
}

function parentChildCard(child, isActive, index) {
  const tpl = document.getElementById("childCardTemplate");
  const node = tpl.content.firstElementChild.cloneNode(true);
  node.classList.toggle("border-indigo-300", isActive);
  node.classList.toggle("border-slate-200", !isActive);
  node.setAttribute("aria-pressed", isActive ? "true" : "false");
  const badge = node.querySelector("[data-active-badge]");
  if (badge) {
    if (isActive) show(badge);
    else hide(badge);
  }
  const face = node.querySelector("[data-face]");
  const palette = [
    "bg-amber-100 text-amber-600",
    "bg-sky-100 text-sky-600",
    "bg-emerald-100 text-emerald-600",
    "bg-rose-100 text-rose-600",
  ];
  if (face) {
    face.className = "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 " + palette[index % palette.length];
    face.textContent = childFace(child.gender);
  }
  const name = node.querySelector("[data-name]");
  if (name) name.textContent = child.name;
  const meta = node.querySelector("[data-meta]");
  if (meta) {
    const age = childAgeLabel(child.dob);
    meta.textContent = [age, child.gender].filter(Boolean).join(" · ");
  }
  const board = node.querySelector("[data-board]");
  if (board) board.textContent = child.board || "";
  const school = node.querySelector("[data-school]");
  if (school) school.textContent = child.school || "";
  node.addEventListener("click", async () => {
    if (!window.Auth || !Auth.setActiveChild) return;
    const active = Auth.activeChild && Auth.activeChild();
    if (active && active.id === child.id) return;
    try {
      await Auth.setActiveChild(child.id);
    } catch (err) {
      return;
    }
    window.location.reload();
  });
  return node;
}

let curriculumSubject = null;

function renderParentDashboard() {
  const user = window.Auth && Auth.currentUser && Auth.currentUser();
  const loggedIn = Boolean(user && window.Auth && Auth.profileComplete(user));
  const welcome = document.getElementById("parentWelcome");
  if (welcome) {
    welcome.textContent = loggedIn && user.firstName
      ? "Welcome back, " + user.firstName + "! 👋"
      : "Welcome! Choose a course to study.";
  }
  const loginBtn = document.getElementById("parentLoginBtn");
  const avatarBtn = document.getElementById("parentAvatarBtn");
  const avatarMenu = document.getElementById("parentAvatarMenu");
  if (loginBtn) {
    if (loggedIn) hide(loginBtn);
    else show(loginBtn);
  }
  if (avatarBtn) {
    if (loggedIn) show(avatarBtn);
    else hide(avatarBtn);
  }
  if (!loggedIn && avatarMenu) hide(avatarMenu);
  const initial = document.getElementById("parentInitial");
  if (initial) {
    const letter = user && user.firstName ? user.firstName.trim().charAt(0).toUpperCase() : "P";
    initial.textContent = letter || "P";
  }
  const note = document.getElementById("pathwayChild");
  const active = window.Auth && Auth.activeChild && Auth.activeChild();
  if (note) {
    note.textContent = active
      ? "Select a program below to begin " + active.name + "'s maths journey."
      : "Select a program below to begin your child's math journey.";
  }
  const list = document.getElementById("parentChildList");
  if (!list || !window.Auth || !Auth.listChildren) return;
  list.replaceChildren();
  Auth.listChildren().forEach((child) => {
    const button = document.createElement("button");
    button.type = "button";
    const on = active && active.id === child.id;
    button.className = "w-full text-left px-3 py-2 rounded-xl text-sm font-heading font-bold " + (on ? "bg-indigo-50 text-indigo-700" : "text-slate-700 hover:bg-slate-50");
    button.textContent = child.name + " · " + child.board;
    button.addEventListener("click", async () => {
      if (on) return;
      try {
        await Auth.setActiveChild(child.id);
      } catch (err) {
        return;
      }
      window.location.reload();
    });
    list.appendChild(button);
  });
}

function showParentView(name) {
  ["dashboard", "setup", "chapters"].forEach((id) => {
    const el = document.getElementById("parentView-" + id);
    if (!el) return;
    if (id === name) show(el);
    else hide(el);
  });
  window.scrollTo(0, 0);
}

function curriculumYearOptions(board) {
  if (board === "CBSE") return [{ id: "4", label: "Class 4" }, { id: "6", label: "Class 6" }];
  if (board === "IGCSE") return ["4", "5", "6", "7", "8", "9"].map((id) => ({ id: id, label: "Year " + id }));
  return [];
}

function curriculumYearLabel(board, id) {
  const match = curriculumYearOptions(board).find((year) => year.id === id);
  return match ? match.label : id ? "Year " + id : "";
}

function renderSetupYears(board, selectedId) {
  const grid = document.getElementById("setupYearGrid");
  const tpl = document.getElementById("yearChoiceTemplate");
  if (!grid || !tpl) return;
  grid.replaceChildren();
  curriculumYearOptions(board).forEach((year) => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    const input = node.querySelector("input");
    input.value = year.id;
    input.checked = year.id === selectedId;
    node.querySelector("[data-label]").textContent = year.label;
    grid.appendChild(node);
  });
}

function showCurriculumSetup() {
  showParentView("setup");
  const child = window.Auth && Auth.activeChild && Auth.activeChild();
  const board = homeBoard || (child && (child.board === "CBSE" || child.board === "IGCSE") ? child.board : "");
  document.querySelectorAll("#setupForm input[name=board]").forEach((input) => {
    input.checked = input.value === board;
  });
  renderSetupYears(board, yearId);
  const error = document.getElementById("setupFormError");
  if (error) hide(error);
}

function unitMasteryPercent(yId, subjectId, unit) {
  const store = loadProgressStore();
  const topics = unit.topics && unit.topics.length ? unit.topics : null;
  if (!topics) {
    const row = store[progressRecordKey(yId, subjectId, unit.id, "_chapter")];
    return row && (row.study || row.cards || row.quiz) ? 100 : 0;
  }
  let done = 0;
  topics.forEach((topic) => {
    const row = store[progressRecordKey(yId, subjectId, unit.id, topic.id)];
    if (row && (row.study || row.cards || row.quiz)) done += 1;
  });
  return Math.round((done / topics.length) * 100);
}

function chapterNumberLabel(unit, index) {
  const match = String(unit.title || "").match(/^(\d+)/);
  return "Ch " + (match ? match[1] : index + 1);
}

function renderChapterView() {
  const subjects = yearSubjects(yearId).filter((subject) => subject.id !== "stats");
  if (!subjects.length) return;
  if (!subjects.some((subject) => subject.id === curriculumSubject)) {
    curriculumSubject = (subjects.find((subject) => subject.id === "maths") || subjects[0]).id;
  }
  const boardEl = document.getElementById("displayBoard");
  const yearEl = document.getElementById("displayYear");
  const titleEl = document.getElementById("chapterPageTitle");
  if (boardEl) boardEl.textContent = homeBoard || "";
  if (yearEl) yearEl.textContent = curriculumYearLabel(homeBoard, yearId);
  if (titleEl) titleEl.textContent = curriculumYearLabel(homeBoard, yearId) + " " + subjectTitle(curriculumSubject);
  const subjectRow = document.getElementById("chapterSubjects");
  if (subjectRow) {
    subjectRow.replaceChildren();
    if (subjects.length > 1) {
      subjects.forEach((subject) => {
        const button = document.createElement("button");
        button.type = "button";
        const on = subject.id === curriculumSubject;
        button.className = "px-4 py-2 rounded-xl text-sm font-heading font-bold border-2 " + (on ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-200 bg-white text-slate-600");
        button.textContent = subject.title;
        button.addEventListener("click", () => {
          curriculumSubject = subject.id;
          renderChapterView();
        });
        subjectRow.appendChild(button);
      });
    }
  }
  const grid = document.getElementById("chaptersGrid");
  const tpl = document.getElementById("chapterCardTemplate");
  if (!grid || !tpl) return;
  grid.replaceChildren();
  const units = unitsForSubject(yearId, curriculumSubject);
  if (!units.length) {
    const card = tpl.content.firstElementChild.cloneNode(true);
    card.querySelector("[data-num]").textContent = "Go";
    const status = card.querySelector("[data-status]");
    status.className = "bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-md";
    status.textContent = "Ready";
    card.querySelector("[data-title]").textContent = subjectTitle(curriculumSubject);
    card.querySelector("[data-desc]").textContent = (subjects.find((subject) => subject.id === curriculumSubject) || {}).blurb || "";
    card.querySelector("[data-pct]").textContent = "Open";
    card.querySelector("[data-bar]").style.width = "0%";
    card.addEventListener("click", () => openDashboardChapter(curriculumSubject, null));
    grid.appendChild(card);
    return;
  }
  units.forEach((unit, index) => {
    const pct = unitMasteryPercent(yearId, curriculumSubject, unit);
    const card = tpl.content.firstElementChild.cloneNode(true);
    card.querySelector("[data-num]").textContent = chapterNumberLabel(unit, index);
    const status = card.querySelector("[data-status]");
    status.className = "text-[10px] font-bold px-2 py-1 rounded-md " + (pct === 100 ? "bg-emerald-100 text-emerald-700" : pct > 0 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500");
    status.textContent = pct === 100 ? "Completed" : pct > 0 ? "In Progress" : "Not Started";
    card.querySelector("[data-title]").textContent = unit.title;
    card.querySelector("[data-desc]").textContent = unit.intro || unit.strand || "";
    card.querySelector("[data-pct]").textContent = pct + "%";
    const bar = card.querySelector("[data-bar]");
    bar.className = "h-2 rounded-full " + (pct === 100 ? "bg-emerald-500" : "bg-amber-500");
    bar.style.width = pct + "%";
    card.addEventListener("click", () => openDashboardChapter(curriculumSubject, unit.id));
    grid.appendChild(card);
  });
}

function openDashboardChapter(subjectId, unitIdToOpen) {
  document.body.classList.remove("parent-dash", "home-landing");
  studySubject = subjectId;
  appMode = "study";
  saveHomePref();
  if (subjectId === "mental") {
    selectStudySubject("mental");
    return;
  }
  const year = yearById(yearId);
  if (year) applyYearWelcomeShell(year);
  openReader(unitIdToOpen);
  setViewBack("Chapters", () => {
    confirmLeaveMock().then((ok) => {
      if (!ok) return;
      cancelMentalCountdown();
      studySubject = null;
      appMode = null;
      unitId = null;
      topicId = null;
      stopMockTimer();
      resetStudy();
      setViewBack("");
      showParentDashboard();
      renderChapterView();
      showParentView("chapters");
    });
  });
}

function showParentDashboard() {
  document.body.classList.add("home-landing", "parent-dash");
  studySubject = null;
  const parentHome = document.getElementById("parentHome");
  if (parentHome) show(parentHome);
  if (gogoMetro) hide(gogoMetro);
  if (homeHero) show(homeHero);
  if (choiceStage) {
    choiceStage.innerHTML = "";
    hide(choiceStage);
  }
  renderParentDashboard();
  showParentView("dashboard");
}

function openFormalCurriculum() {
  document.body.classList.add("home-landing", "parent-dash");
  studySubject = null;
  const parentHome = document.getElementById("parentHome");
  if (parentHome) show(parentHome);
  if (gogoMetro) hide(gogoMetro);
  if (homeHero) show(homeHero);
  if (choiceStage) {
    choiceStage.innerHTML = "";
    hide(choiceStage);
  }
  const pref = loadHomePref();
  if (pref && pref.board && pref.yearId && yearById(pref.yearId)) {
    homeBoard = pref.board;
    yearId = pref.yearId;
    renderChapterView();
    showParentView("chapters");
    return;
  }
  const child = window.Auth && Auth.activeChild && Auth.activeChild();
  if (!homeBoard && child && (child.board === "CBSE" || child.board === "IGCSE")) homeBoard = child.board;
  showCurriculumSetup();
}

let parentHomeBound = false;
function bindParentHome() {
  if (parentHomeBound) return;
  parentHomeBound = true;
  const openBtn = document.getElementById("openAddChild");
  const closeBtn = document.getElementById("closeAddChild");
  const exploreBtn = document.getElementById("exploreCurriculumBtn");
  const logoutBtn = document.getElementById("parentLogoutBtn");
  const statsBtn = document.getElementById("parentStatsBtn");
  const form = document.getElementById("parentAddChildForm");
  const modal = document.getElementById("parentAddChildModal");
  if (openBtn) openBtn.addEventListener("click", openParentChildModal);
  if (closeBtn) closeBtn.addEventListener("click", closeParentChildModal);
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeParentChildModal();
    });
  }
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      if (window.ensureCourseAccess && !window.ensureCourseAccess("curriculum")) return;
      openFormalCurriculum();
    });
  }
  const parentLoginBtn = document.getElementById("parentLoginBtn");
  if (parentLoginBtn) {
    parentLoginBtn.addEventListener("click", () => {
      if (typeof window.promptLogin === "function") window.promptLogin();
    });
  }
  const brandBtn = document.getElementById("parentBrandHome");
  const dashBtn = document.getElementById("parentDashHome");
  const avatarBtn = document.getElementById("parentAvatarBtn");
  const avatarMenu = document.getElementById("parentAvatarMenu");
  const setupBack = document.getElementById("setupBackBtn");
  const chaptersDash = document.getElementById("chaptersDashBtn");
  const changeCurriculum = document.getElementById("changeCurriculumBtn");
  const setupForm = document.getElementById("setupForm");
  if (brandBtn) brandBtn.addEventListener("click", () => showParentDashboard());
  if (dashBtn) dashBtn.addEventListener("click", () => showParentDashboard());
  if (setupBack) setupBack.addEventListener("click", () => showParentDashboard());
  if (chaptersDash) chaptersDash.addEventListener("click", () => showParentDashboard());
  if (changeCurriculum) changeCurriculum.addEventListener("click", showCurriculumSetup);
  if (avatarBtn && avatarMenu) {
    avatarBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = avatarMenu.hasAttribute("hidden");
      if (open) show(avatarMenu);
      else hide(avatarMenu);
      avatarBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (event) => {
      if (!avatarMenu.hasAttribute("hidden") && !avatarBtn.contains(event.target)) {
        hide(avatarMenu);
        avatarBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
  if (setupForm) {
    setupForm.addEventListener("change", (event) => {
      if (event.target && event.target.name === "board") renderSetupYears(event.target.value, "");
    });
    setupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const error = document.getElementById("setupFormError");
      const data = new FormData(setupForm);
      const board = String(data.get("board") || "");
      const year = String(data.get("year") || "");
      if (!board || !year || !yearById(year)) {
        if (error) {
          error.textContent = "Choose a board and a year.";
          show(error);
        }
        return;
      }
      if (error) hide(error);
      homeBoard = board;
      yearId = year;
      curriculumSubject = null;
      saveHomePref();
      renderChapterView();
      showParentView("chapters");
    });
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const existing = document.getElementById("logoutBtn");
      if (existing) existing.click();
    });
  }
  if (statsBtn) {
    statsBtn.addEventListener("click", () => {
      const existing = document.getElementById("headerStatsBtn");
      if (existing) existing.click();
    });
  }
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const error = document.getElementById("parentAddChildError");
      if (error) {
        error.textContent = "";
        hide(error);
      }
      const data = new FormData(form);
      try {
        await Auth.addChild({
          name: data.get("name"),
          gender: data.get("gender"),
          dob: data.get("dob"),
          board: data.get("board"),
          school: data.get("school"),
        });
        window.location.reload();
      } catch (err) {
        if (!error) return;
        error.textContent = err.message;
        show(error);
      }
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const open = document.getElementById("parentAddChildModal");
    if (open && !open.hasAttribute("hidden")) closeParentChildModal();
  });
}

function returnToParentHome() {
  confirmLeaveMock().then((ok) => {
    if (!ok) return;
    cancelMentalCountdown();
    studySubject = null;
    unitId = null;
    topicId = null;
    appMode = null;
    quizSubject = null;
    examKind = "quiz";
    stopMockTimer();
    if (featuredGallery) hide(featuredGallery);
    resetStudy();
    setY6QuestBodyMode(false);
    setViewBack("");
    pageTitle.textContent = "Choose a year";
    showParentDashboard();
    markTopNav("navHome");
  });
}

function resetGogoHome() {
  homeBoard = null;
  yearId = null;
  saveHomePref();
  showParentDashboard();
  gogoUpdateBreadcrumb();
}

function bindGogoMetro() {
  if (gogoMetroBound || !gogoMetro) return;
  gogoMetroBound = true;
  gogoMetro.addEventListener("click", (e) => {
    const boardBtn = e.target.closest("[data-gogo-board]");
    if (boardBtn) {
      gogoSelectBoard(boardBtn.dataset.gogoBoard);
      return;
    }
    const backBtn = e.target.closest("[data-gogo-back]");
    if (backBtn) {
      if (backBtn.dataset.gogoBack === "parent") {
        showParentDashboard();
        return;
      }
      gogoResetTo(backBtn.dataset.gogoBack);
      return;
    }
    const yearBtn = e.target.closest("[data-gogo-year]");
    if (yearBtn && (homeBoard === "IGCSE" || homeBoard === "CBSE")) {
      selectYear(yearBtn.dataset.gogoYear);
    }
  });
}
let unitId = null;
let topicId = null;
let cardIndex = 0;
let currentImageData = null;
let appMode = null;
let studySubject = null;
let quizSubject = null;
let quizItems = [];
let savedQuizPaper = [];
let quizIndex = 0;
let quizResponses = [];
let quizMarked = [];
let examKind = "quiz";
let mockTimerId = null;
let mockEndsAt = 0;
let quizClosed = false;
let quizSelectedUnits = new Set();
let mockLeaveGranted = false;
let mentalCorrect = 0;
let mentalPool = [];
let mentalCursor = 0;
let mentalCountdownTimer = 0;
let leaveResolver = null;

function haptic(kind) {
  const bridge = window.StudyHaptics;
  try {
    if (bridge) {
      if (kind === "finish" && bridge.finish) bridge.finish();
      else if (kind === "begin" && bridge.begin) bridge.begin();
      else if (bridge.startTap) bridge.startTap();
      return;
    }
  } catch (_err) {
    /* The page still runs if the phone bridge is missing. */
  }
  if (!navigator.vibrate) return;
  if (kind === "finish") navigator.vibrate([40, 50, 90]);
  else if (kind === "begin") navigator.vibrate(60);
  else navigator.vibrate(30);
}

function activeChildId() {
  try {
    const child = window.Auth && Auth.activeChild && Auth.activeChild();
    if (child && child.id) return child.id;
  } catch (_err) {
    /* Progress stays on a guest key until a child profile is selected. */
  }
  return "";
}

function mentalPlayerId() {
  return activeChildId() || "guest";
}

function scopedStoreKey(base) {
  const childId = activeChildId();
  return childId ? base + ":" + childId : base;
}

function copyLegacyProgress() {
  const childId = activeChildId();
  const owner = localStorage.getItem("scienceStudyLegacyChild");
  if (!childId || owner !== childId || localStorage.getItem("scienceStudyLegacyDone")) return;
  const progressDest = PROGRESS_STORE_KEY + ":" + childId;
  const homeDest = HOME_PREF_KEY + ":" + childId;
  if (!localStorage.getItem(progressDest)) {
    const legacy = localStorage.getItem(PROGRESS_STORE_KEY);
    if (legacy) localStorage.setItem(progressDest, legacy);
  }
  if (!localStorage.getItem(homeDest)) {
    const legacyHome = localStorage.getItem(HOME_PREF_KEY);
    if (legacyHome) localStorage.setItem(homeDest, legacyHome);
  }
  localStorage.setItem("scienceStudyLegacyDone", "1");
}

function mentalScoreKey() {
  return `mental-high:${mentalPlayerId()}:${yearId || ""}`;
}

const HOME_PREF_KEY = "achievers-den-home-pref";
const PROGRESS_STORE_KEY = "achievers-den-topic-progress";

function loadHomePref() {
  try {
    copyLegacyProgress();
    const raw = localStorage.getItem(scopedStoreKey(HOME_PREF_KEY));
    return raw ? JSON.parse(raw) : null;
  } catch (_err) {
    return null;
  }
}

function saveHomePref() {
  const payload = {};
  if (homeBoard) payload.board = homeBoard;
  if (yearId) payload.yearId = yearId;
  const key = scopedStoreKey(HOME_PREF_KEY);
  if (!payload.board && !payload.yearId) {
    localStorage.removeItem(key);
    return;
  }
  localStorage.setItem(key, JSON.stringify(payload));
}

function loadProgressStore() {
  try {
    copyLegacyProgress();
    return JSON.parse(localStorage.getItem(scopedStoreKey(PROGRESS_STORE_KEY)) || "{}");
  } catch (_err) {
    return {};
  }
}

function saveProgressStore(store) {
  localStorage.setItem(scopedStoreKey(PROGRESS_STORE_KEY), JSON.stringify(store));
}

function progressRecordKey(yId, subject, uId, tId) {
  return `${yId}|${subject}|${uId}|${tId || "_chapter"}`;
}

function markLearningProgress(kind) {
  const subject = studySubject || quizSubject;
  if (!yearId || !subject || subject === "stats") return;
  if (!unitId) return;
  const tId = topicId || "_chapter";
  const store = loadProgressStore();
  const key = progressRecordKey(yearId, subject, unitId, tId);
  const row = store[key] || {};
  row[kind] = true;
  row.updated = Date.now();
  store[key] = row;
  saveProgressStore(store);
  syncHeaderStats();
}

function unitsForSubject(yId, subjectId) {
  if (!yId || !subjectId || subjectId === "stats") return [];
  const prevY = yearId;
  const prevS = studySubject;
  yearId = yId;
  studySubject = subjectId;
  const units = currentUnits();
  yearId = prevY;
  studySubject = prevS;
  return units;
}

function subjectTopicEntries(yId, subjectId) {
  const entries = [];
  unitsForSubject(yId, subjectId).forEach((unit) => {
    if (unit.topics && unit.topics.length) {
      unit.topics.forEach((topic) => {
        entries.push({
          unitId: unit.id,
          topicId: topic.id,
          label: `${topic.id} ${topic.title}`,
          unitTitle: unit.title,
        });
      });
    } else {
      entries.push({
        unitId: unit.id,
        topicId: "_chapter",
        label: unit.title,
        unitTitle: unit.title,
      });
    }
  });
  return entries;
}

function subjectProgressStats(yId, subjectId) {
  if (subjectId === "mental") {
    const high = Number(localStorage.getItem(`mental-high:${mentalPlayerId()}:${yId}`) || 0);
    const pct = high > 0 ? 100 : 0;
    return { total: 1, completed: high > 0 ? 1 : 0, percent: pct, breakdown: { study: 0, cards: 0, quiz: 0 } };
  }
  const entries = subjectTopicEntries(yId, subjectId);
  const store = loadProgressStore();
  let completed = 0;
  const breakdown = { study: 0, cards: 0, quiz: 0 };
  entries.forEach((entry) => {
    const row = store[progressRecordKey(yId, subjectId, entry.unitId, entry.topicId)];
    if (!row) return;
    if (row.study) breakdown.study += 1;
    if (row.cards) breakdown.cards += 1;
    if (row.quiz) breakdown.quiz += 1;
    if (row.study || row.cards || row.quiz) completed += 1;
  });
  const total = entries.length || 1;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percent, breakdown };
}

function yearOverallProgress(yId) {
  const subjects = yearSubjects(yId).filter((s) => s.id !== "stats");
  if (!subjects.length) return 0;
  const sum = subjects.reduce((acc, s) => acc + subjectProgressStats(yId, s.id).percent, 0);
  return Math.round(sum / subjects.length);
}

function mentalHighScore() {
  const saved = Number(localStorage.getItem(mentalScoreKey()) || 0);
  return Number.isFinite(saved) ? saved : 0;
}

function testInProgress() {
  return Boolean(quizEl && !quizEl.hasAttribute("hidden") && !quizClosed);
}

function leaveMessage() {
  if (!testInProgress()) return "";
  if (examKind === "mock") {
    return "Leave this mock exam? Your progress will be lost and you will have to start the test again.";
  }
  return "Leave this test? Your answers so far will be lost.";
}

function askLeave(message) {
  if (!leaveDialog || !leaveDialogText) return Promise.resolve(window.confirm(message));
  if (leaveResolver) return Promise.resolve(false);
  return new Promise((resolve) => {
    leaveResolver = resolve;
    leaveDialogText.textContent = message;
    show(leaveDialog);
  });
}

function closeLeave(ok) {
  const resolve = leaveResolver;
  leaveResolver = null;
  hide(leaveDialog);
  if (resolve) resolve(Boolean(ok));
}

function mockExamOpen() {
  return examKind === "mock" && testInProgress();
}

async function confirmLeaveMock() {
  if (mockLeaveGranted) {
    mockLeaveGranted = false;
    return true;
  }
  const message = leaveMessage();
  if (!message) return true;
  return askLeave(message);
}

async function grantMockLeave() {
  if (mockLeaveGranted) return true;
  const message = leaveMessage();
  if (!message) return true;
  if (!(await askLeave(message))) return false;
  mockLeaveGranted = true;
  return true;
}

function mentalCountdownOn() {
  return Boolean(countdownOverlay && !countdownOverlay.hasAttribute("hidden"));
}

function cancelMentalCountdown() {
  if (mentalCountdownTimer) {
    clearTimeout(mentalCountdownTimer);
    mentalCountdownTimer = 0;
  }
  hide(countdownOverlay);
}

function hide(el) {
  if (!el) return;
  el.classList.add("hidden");
  el.setAttribute("hidden", "");
}

function hideQuizPanels() {
  hide(quizEl);
  hide(quizResultEl);
  hide(quizReviewEl);
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/²/g, "2")
    .replace(/³/g, "3")
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt")
    .replace(/≤/g, " le ")
    .replace(/≥/g, " ge ")
    .replace(/≠/g, " ne ")
    .replace(/≈/g, " approx ")
    .replace(/±/g, " pm ")
    .replace(/[^a-z0-9.+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesPhrase(haystack, needle) {
  const n = normalizeText(needle);
  if (!n) return false;
  if (n.length <= 2) {
    return haystack.split(" ").includes(n) || haystack === n;
  }
  return haystack.includes(n);
}

const SUPERSCRIPT_DIGITS = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9" };

function foldSuperscripts(value) {
  return String(value || "").replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (run) => {
    const digits = run.replace(/./g, (ch) => SUPERSCRIPT_DIGITS[ch] || "");
    return "^" + digits;
  });
}

function compactMath(value) {
  return foldSuperscripts(value)
    .toLowerCase()
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/[−–—]/g, "-")
    .replace(/\*\*/g, "^")
    .replace(/(\d)\.(\d)/g, "$1§$2")
    .replace(/\s+/g, "")
    .replace(/[.,!;:]+/g, "")
    .replace(/§/g, ".");
}

function parseSimpleValue(value) {
  const t = compactMath(value);
  if (!t) return null;
  if (/^-?\d+(?:\.\d+)?$/.test(t)) return parseFloat(t);
  const frac = t.match(/^(-?\d+)\/(-?\d+)$/);
  if (frac && frac[2] !== "0") return parseFloat(frac[1]) / parseFloat(frac[2]);
  return null;
}

function valuesClose(a, b) {
  return Math.abs(a - b) <= Math.max(0.001, Math.abs(b) * 0.001);
}

function mathEquivalent(expected, raw) {
  const user = compactMath(raw);
  if (!user) return false;
  const folded = foldSuperscripts(expected);
  const options = [];
  const add = (part) => {
    const c = compactMath(part);
    if (c && !options.includes(c)) options.push(c);
  };
  add(folded);
  folded.split("=").forEach(add);
  const results = folded.matchAll(/=\s*(-?\d+(?:\.\d+)?|\d+\s*\/\s*\d+)(?!\s*[+\-*/^])/g);
  for (const match of results) add(match[1]);
  if (options.includes(user)) return true;
  const userVal = parseSimpleValue(raw);
  if (userVal == null) return false;
  return options.some((opt) => {
    const val = parseSimpleValue(opt);
    return val != null && valuesClose(userVal, val);
  });
}

function yesNoWord(value) {
  const t = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[.!]+/g, "");
  if (/^yes\b/.test(t) || /^(yeah|yep)$/.test(t)) return "yes";
  if (/^no\b/.test(t) || /^nope$/.test(t)) return "no";
  return "";
}

function yesNoMatch(question, raw) {
  const prompt = String(question.prompt || "").trim();
  if (!/^(is|are|do|does|did|can|could|was|were|has|have|will|should)\b/i.test(prompt)) return false;
  const expected = yesNoWord(question.answer);
  const given = yesNoWord(raw);
  return Boolean(expected) && expected === given;
}

function markAnswer(question, raw) {
  const text = normalizeText(raw);
  if (!text) return false;
  if (question.choices) return text === normalizeText(question.answer);
  if (typeof question.numeric === "number") {
    const match = String(raw).match(/-?\d+(?:\.\d+)?/);
    if (!match) return false;
    const num = parseFloat(match[0]);
    return Math.abs(num - question.numeric) <= Math.max(0.05, Math.abs(question.numeric) * 0.02);
  }
  if (yesNoMatch(question, raw)) return true;
  if (mathEquivalent(question.answer, raw)) return true;
  if (text === normalizeText(question.answer)) return true;
  if (question.acceptAll && question.acceptAll.length) return question.acceptAll.every((part) => includesPhrase(text, part));
  if (question.acceptAny && question.acceptAny.length) return question.acceptAny.some((part) => includesPhrase(text, part));
  return false;
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function hideMainPanels() {
  hide(welcomeEl);
  hide(studyEl);
  hide(readerEl);
  hideQuizPanels();
  hide(quizPicker);
  hide(mockWelcome);
  hide(mentalWelcome);
}

function show(el) {
  if (!el) return;
  el.classList.remove("hidden");
  el.removeAttribute("hidden");
}

function openModal(src, alt, caption) {
  if (!imageModal) return;
  modalImg.src = src;
  modalImg.alt = alt || "Scientific image";
  modalCaption.textContent = caption || alt || "";
  show(imageModal);
  imageModal.removeAttribute("aria-hidden");
}

function closeModal() {
  if (!imageModal) return;
  hide(imageModal);
  imageModal.setAttribute("aria-hidden", "true");
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

const STUDY_KEY_TERMS = [
  "balanced diet",
  "antagonistic muscles",
  "ball-and-socket",
  "hinge joint",
  "carbon monoxide",
  "haemoglobin",
  "anaemia",
  "scurvy",
  "rickets",
  "nutrient",
  "nutrients",
  "carbohydrate",
  "protein",
  "fibre",
  "constipation",
  "biceps",
  "triceps",
  "tendon",
  "tendons",
  "ligament",
  "nicotine",
  "particulates",
  "embryo",
  "discontinuous variation",
  "continuous variation",
  "greenhouse gases",
  "greenhouse effect",
  "electronic structure",
  "potential difference",
  "natural selection",
  "reactivity series",
  "Punnett square",
  "umbilical cord",
  "standard form",
  "scientific notation",
  "compound interest",
  "mutually exclusive",
  "relative frequency",
  "theoretical probability",
  "tree diagram",
  "combined event",
  "exhaustive",
  "sample size",
  "frequency polygon",
  "stem-and-leaf",
  "scatter graph",
  "y-intercept",
  "nth term",
  "scale factor",
  "right-angled",
  "surface area",
  "limiting factor",
  "carbon dioxide",
  "fossil fuels",
  "climate change",
  "Periodic Table",
  "atomic number",
  "mass number",
  "alkali metal",
  "noble gas",
  "ionic bonding",
  "covalent bonding",
  "thermal energy",
  "root hair",
  "live wire",
  "earth wire",
  "series circuit",
  "independent events",
  "index laws",
  "photosynthesis",
  "chlorophyll",
  "chloroplast",
  "chloroplasts",
  "stomata",
  "guard cells",
  "cellulose",
  "glucose",
  "sucrose",
  "starch",
  "iodine",
  "respiration",
  "combustion",
  "decomposition",
  "decomposers",
  "methane",
  "proton",
  "neutron",
  "electron",
  "electrons",
  "halogen",
  "lattice",
  "molecule",
  "compound",
  "mixture",
  "density",
  "temperature",
  "conduction",
  "convection",
  "radiation",
  "evaporation",
  "insulator",
  "xylem",
  "phloem",
  "transpiration",
  "kidney",
  "kidneys",
  "ureter",
  "bladder",
  "urethra",
  "placenta",
  "fetus",
  "displacement",
  "titration",
  "crystallisation",
  "alkali",
  "carbonate",
  "amplitude",
  "frequency",
  "loudness",
  "interference",
  "nebula",
  "tectonics",
  "magma",
  "mantle",
  "chromosome",
  "chromosomes",
  "nucleus",
  "allele",
  "genotype",
  "phenotype",
  "gamete",
  "gametes",
  "variation",
  "catalyst",
  "collision",
  "current",
  "voltage",
  "resistance",
  "parallel",
  "oxygen",
  "carbon cycle",
  "energy store",
  "chemical store",
  "elastic store",
  "integer",
  "numerator",
  "denominator",
  "reciprocal",
  "like terms",
  "Group 1",
  "Group 7",
  "Group 0",
  "irrational number",
  "rational number",
  "irrational",
  "rational",
  "substitute",
  "expression",
  "equation",
  "inequality",
  "factorise",
  "expand",
  "simultaneous",
  "quadratic",
  "gradient",
  "sequence",
  "arithmetic",
  "geometric",
  "proportion",
  "percentage",
  "Pythagoras",
  "hypotenuse",
  "congruent",
  "translation",
  "rotation",
  "reflection",
  "enlargement",
  "circumference",
  "cylinder",
  "pyramid",
  "probability",
  "correlation",
  "median",
  "prism",
  "volume",
  "ratio",
  "linear",
  "formula",
  "indices",
  "index",
  "mean",
  "mode",
  "range",
  "bias",
  "sample",
  "gene",
  "DNA",
  "fuse",
  "acid",
  "salt",
  "crust",
  "pitch",
  "ohm",
  "CO\u2082",
  "H\u2082O",
  "O\u2082",
  "C\u2086H\u2081\u2082O\u2086",
  "NaCl",
  "CH\u2084",
].sort((a, b) => b.length - a.length);

let studyKeyTermRe = null;

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function studyKeyTermPattern() {
  if (!studyKeyTermRe) {
    studyKeyTermRe = new RegExp(
      `(^|[^A-Za-z0-9])(${STUDY_KEY_TERMS.map(escapeRegExp).join("|")})(?![A-Za-z0-9])`,
      "gi",
    );
  }
  return studyKeyTermRe;
}

function highlightStudyText(text) {
  const re = studyKeyTermPattern();
  re.lastIndex = 0;
  return escapeHtml(text).replace(re, '$1<mark class="key-term">$2</mark>');
}

function isExampleLead(text) {
  return /^(worked example|examples?:|for example\b|e\.g\.|such as\b)/i.test(text);
}

function isKeywordDef(text) {
  return /^(keyword|key word|definition)\s*:/i.test(String(text).trim());
}

function isFormulaLine(text) {
  const t = String(text).trim();
  if (/^(formula|equation)\s*:/i.test(t)) return true;
  if (/→/.test(t) && t.length < 180) return true;
  return false;
}

function isWorkedLine(text) {
  if (isExampleLead(text)) return true;
  if (/\bexamples?\b/i.test(text)) return true;
  if (/^if [a-z]\s*=/i.test(text) && /=/.test(text.slice(8))) return true;
  if (/^[\dπ√(−\-][\s\S]{0,100}?=/.test(text) && text.length < 220) return true;
  return false;
}

function splitExampleTail(text) {
  const found = text.match(/^(.*?)(\(?\s*(?:for example|e\.g\.|such as)\b[\s\S]+)$/i);
  if (found && found[1].replace(/[.\s(]/g, "").length > 12) {
    return [
      { type: "body", text: found[1].trim().replace(/[;,(]$/, ".") },
      { type: "example", text: found[2].trim().replace(/^\(/, "").replace(/\)\.$/, ".").replace(/\)$/, "") },
    ];
  }
  return null;
}

function studySentences(text) {
  return String(text)
    .split(/(?<=[.!?])\s+(?=[A-Zπ√(\d])/)
    .map((bit) => bit.trim())
    .filter(Boolean);
}

function parseStudyCallout(part) {
  const normalized = String(part).replace(/\r\n/g, "\n");
  const lines = normalized.split(/\n/);
  const head = (lines[0] || "").trim();
  const match = head.match(/^CALLOUT\s+(keyword|rule|fun|formula)\|(.+)$/i);
  if (!match) return null;
  return {
    kind: match[1].toLowerCase(),
    label: match[2].trim(),
    text: lines.slice(1).join("\n").trim(),
  };
}

function readerProseChunk(card, part) {
  const text = String(part || "").trim();
  if (!text) return text;
  if (/^CALLOUT\s+/i.test(text)) return text;
  const back = String(card.back || "");
  if (back.includes("CALLOUT ")) return text;
  return cardToBookText(card, text);
}

function studyBlocks(text) {
  const blocks = [];
  String(text)
    .replace(/\r\n/g, "\n")
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const callout = parseStudyCallout(part);
      if (callout) {
        blocks.push({
          type: "callout",
          calloutKind: callout.kind,
          label: callout.label,
          text: callout.text,
        });
        return;
      }
      let body = [];
      const flushBody = () => {
        if (!body.length) return;
        blocks.push({ type: "body", text: body.join(" ") });
        body = [];
      };
      part.split(/\n/).forEach((rawLine) => {
        const line = rawLine.trim();
        if (!line) return;
        if (isKeywordDef(line)) {
          flushBody();
          blocks.push({ type: "keyword", text: line.replace(/^(keyword|key word|definition)\s*:\s*/i, "") });
          return;
        }
        if (isFormulaLine(line)) {
          flushBody();
          blocks.push({ type: "formula", text: line.replace(/^(formula|equation)\s*:\s*/i, "") });
          return;
        }
        studySentences(line).forEach((sentence) => {
          const split = splitExampleTail(sentence);
          if (split) {
            if (split[0].text) body.push(split[0].text);
            flushBody();
            blocks.push(split[1]);
            return;
          }
          if (isWorkedLine(sentence)) {
            flushBody();
            blocks.push({ type: "example", text: sentence });
            return;
          }
          body.push(sentence);
        });
      });
      flushBody();
    });
  return blocks;
}

function appendFormattedStudy(parent, text, compact) {
  const blocks = studyBlocks(text);
  if (!blocks.length) return;
  blocks.forEach((block, i) => {
    if (block.type === "callout") {
      const box = document.createElement("div");
      box.className = "study-callout study-callout-" + (block.calloutKind || "keyword");
      const label = document.createElement("p");
      label.className = "study-callout-label";
      label.textContent = block.label || "";
      box.appendChild(label);
      const bodyText = block.text || "";
      if (bodyText) {
        const body = document.createElement("div");
        body.className = "study-callout-body";
        bodyText.split(/\n/).forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed) return;
          const row = document.createElement("p");
          row.innerHTML = highlightStudyText(trimmed);
          body.appendChild(row);
        });
        box.appendChild(body);
      }
      parent.appendChild(box);
      return;
    }
    const p = document.createElement("p");
    const typeClass = {
      example: "study-example",
      keyword: "study-keyword",
      formula: "study-formula",
    }[block.type];
    p.className = typeClass || (compact && i === 0 ? "study-lead" : "study-body");
    p.innerHTML = highlightStudyText(block.text);
    parent.appendChild(p);
  });
}

function setNote(el, text) {
  el.replaceChildren();
  appendFormattedStudy(el, text);
}

function yearById(id) {
  return window.STUDY_YEARS.find((y) => y.id === id);
}

function subjectTitle(id) {
  if (id === "maths") return "Mathematics";
  if (id === "science") return "Science";
  if (id === "stats") return "Stats";
  if (id === "mental") return mentalQuestPathForYear(yearId) ? "Mental Mathematics" : "Quick Mental Mathematics";
  return id || "";
}

const MENTAL_QUEST_MODULES = {
  4: "modules/y4-mental-arithmetic.html",
  5: "modules/y5-mental-maths-quest.html",
  6: "modules/y6-mental-maths-quest.html",
};

function mentalQuestPathForYear(id) {
  return MENTAL_QUEST_MODULES[id] || null;
}

function yearSubjects(forYear) {
  const y = forYear != null ? String(forYear) : yearId;
  if (y === "4") {
    if (homeBoard === "CBSE") {
      return [
        {
          id: "maths",
          title: "Mathematics",
          blurb: "NCERT Class 4 — Chapter 1 Shapes Around Us (reading)",
        },
      ];
    }
    return [
      { id: "mental", title: "Mental Mathematics", blurb: "Times tables, number facts and a Year 4 arithmetic adventure" },
    ];
  }
  if (y === "5") {
    return [
      { id: "mental", title: "Mental Mathematics", blurb: "Key Stage 2 mental maths and 11+ preparation quest" },
    ];
  }
  if (y === "11plus") {
    return [
      { id: "maths", title: "Mathematics", blurb: "11+ CEM, GL and independent papers" },
    ];
  }
  if (y === "6") {
    if (homeBoard === "CBSE") {
      return [
        {
          id: "maths",
          title: "Mathematics",
          blurb: "Ganita Prakash — Chapters 1–3: patterns, lines and angles, and number play",
        },
      ];
    }
    return [
      { id: "maths", title: "Mathematics", blurb: "Chapters 1–8 — integers, algebra, place value, decimals, angles, data, fractions and shapes" },
      { id: "mental", title: "Mental Mathematics", blurb: "Advanced mental arithmetic and problem-solving quest" },
    ];
  }
  if (y === "9") {
    return [
      { id: "science", title: "Science", blurb: "Stage 9 Learner’s Book — Forces and energy (density, heat, thermal transfer)" },
      { id: "maths", title: "Mathematics", blurb: "Stage 9 Learner’s Book — Probability, position and transformation" },
    ];
  }
  return [
    { id: "science", title: "Science", blurb: "Biology, chemistry and physics" },
    { id: "maths", title: "Mathematics", blurb: "Mathematics Second Edition only" },
    { id: "mental", title: "Quick Mental Mathematics", blurb: "10 questions you can do in your head" },
  ];
}

const DEFAULT_HERO = {
  src: "images/years/year-8.jpg",
  alt: "Year 8: science and mathematics study together",
  badge: "Cambridge Year 8",
};

const SUBJECT_VISUALS = {
  science: {
    src: "images/subjects/science.png",
    alt: "Science: leaf, atom and circuit illustration",
    badge: "Cambridge Science",
  },
  maths: {
    src: "images/subjects/maths.jpg",
    alt: "Mathematics: geometry solids, graph paper and instruments",
    badge: "Cambridge Mathematics",
  },
  mental: {
    src: "images/subjects/mental.jpg",
    alt: "Quick mental mathematics: a short sum you can do in your head",
    badge: "Mental mathematics",
  },
};

function setSubjectVisual(subjectId) {
  const visual = SUBJECT_VISUALS[subjectId] || DEFAULT_HERO;
  if (welcomeHeroImg) {
    welcomeHeroImg.src = visual.src;
    welcomeHeroImg.alt = visual.alt;
  }
  if (welcomeHeroBadge) welcomeHeroBadge.textContent = visual.badge;
  updateBackdrop(visual.src);
}

function elaboratedBody(topicKey, index, fallback) {
  const extra =
    studySubject === "maths" && yearId === "11plus"
      ? null
      : studySubject === "maths" && yearId === "9"
      ? (window.ELABORATE_MATHS_Y9 || {})[topicKey]
      : studySubject === "maths" && yearId !== "7" && yearId !== "6"
      ? (window.ELABORATE_MATHS || {})[topicKey]
      : studySubject === "maths"
        ? null
        : (window.ELABORATE || {})[`${yearId}:${topicKey}`];
  if (extra && extra[index]) return extra[index];
  return fallback || "";
}

function currentUnits() {
  if (studySubject === "mental") return [];
  if (studySubject === "maths") {
    if (homeBoard === "CBSE" && yearId === "4") {
      return (window.MATHS_CBSE_Y4 && window.MATHS_CBSE_Y4.units) || [];
    }
    if (homeBoard === "CBSE" && yearId === "6") {
      return (window.MATHS_CBSE_Y6 && window.MATHS_CBSE_Y6.units) || [];
    }
    if (yearId === "11plus") return (window.MATHS_11PLUS && window.MATHS_11PLUS.units) || [];
    if (yearId === "6") return (window.MATHS_Y6 && window.MATHS_Y6.units) || [];
    if (yearId === "7") return (window.MATHS_Y7 && window.MATHS_Y7.units) || [];
    if (yearId === "9") return (window.MATHS_Y9 && window.MATHS_Y9.units) || [];
    return (window.MATHS_Y8 && window.MATHS_Y8.units) || [];
  }
  if (yearId === "9" && studySubject === "science") {
    return (window.SCIENCE_Y9 && window.SCIENCE_Y9.units) || [];
  }
  const year = yearById(yearId);
  return year ? year.units : [];
}

function unitById(id) {
  return currentUnits().find((u) => u.id === id);
}

function stopMockTimer() {
  if (mockTimerId) {
    clearInterval(mockTimerId);
    mockTimerId = null;
  }
  mockEndsAt = 0;
  if (examTimer) {
    hide(examTimer);
    examTimer.textContent = "60:00";
  }
}

function formatCountdown(ms) {
  const safe = Math.max(0, ms);
  const total = Math.floor(safe / 1000);
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function tickMockTimer() {
  if (!examTimer || !mockEndsAt) return;
  const left = mockEndsAt - Date.now();
  examTimer.textContent = formatCountdown(left);
  const warn = examKind === "mental" ? 10000 : 5 * 60 * 1000;
  examTimer.classList.toggle("low", left <= warn);
  if (examKind === "mental" && quizBarFill) {
    quizBarFill.style.width = `${Math.max(0, left / 60000) * 100}%`;
  }
  if (left <= 0) {
    const mental = examKind === "mental";
    stopMockTimer();
    if (mental) haptic("finish");
    finishQuiz(mental ? "Time is up." : "Time is up. Your answers were submitted automatically.");
  }
}

function startMockTimer(ms) {
  stopMockTimer();
  mockEndsAt = Date.now() + (ms || window.MOCK_DURATION_MS || 3600000);
  if (examTimer) {
    show(examTimer);
    examTimer.classList.remove("low");
    tickMockTimer();
  }
  mockTimerId = setInterval(tickMockTimer, 250);
}

function topicById(unit, id) {
  return unit.topics.find((t) => t.id === id);
}

let studyDeck = [];

function chapterDeck(unit) {
  if (!unit || !unit.topics) return [];
  const deck = [];
  unit.topics.forEach((topic) => {
    (topic.cards || []).forEach((card, i) => {
      deck.push({
        ...card,
        _topicId: topic.id,
        _topicIndex: i,
        _topicTitle: topic.title,
      });
    });
  });
  return deck;
}

function yearHero(id) {
  if (id === "11plus") {
    return {
      src: "images/subjects/maths.jpg",
      alt: "11+ Mathematics preparation",
      badge: "11+ Maths",
    };
  }
  if (id === "4" || id === "5") {
    return {
      src: "images/subjects/mental.jpg",
      alt: `Year ${id} mental mathematics`,
      badge: `Year ${id}`,
    };
  }
  if (id === "8") {
    return {
      src: "images/years/year-8.jpg",
      alt: "Year 8 science and mathematics",
      badge: "Year 8",
    };
  }
  if (id === "9") {
    return {
      src: "images/subjects/maths.jpg",
      alt: "Year 9 mathematics",
      badge: "Year 9",
    };
  }
  if (id === "6" && window.Y6_IMAGES && window.Y6_IMAGES.year) return window.Y6_IMAGES.year;
  if (id === "7" && window.Y7_IMAGES && window.Y7_IMAGES.year) return window.Y7_IMAGES.year;
  return DEFAULT_HERO;
}

function y7ChapterArt(unit) {
  const chapters = window.Y7_IMAGES && window.Y7_IMAGES.chapters;
  if (yearId !== "7" || !chapters || !unit) return null;
  return chapters[unit.id] || null;
}

function y6ChapterArt(unit) {
  const chapters = window.Y6_IMAGES && window.Y6_IMAGES.chapters;
  if (yearId !== "6" || !chapters || !unit) return null;
  return chapters[unit.id] || null;
}

function chapterImage(unit) {
  const y6 = y6ChapterArt(unit);
  if (y6) {
    return {
      src: y6.src,
      alt: unit.title,
      badge: unit.title,
      caption: y6.caption || unit.intro || unit.title,
      source: "Year 6",
    };
  }
  const y7 = y7ChapterArt(unit);
  if (y7) {
    return {
      src: y7.src,
      alt: unit.title,
      badge: unit.title,
      caption: y7.caption || unit.intro || unit.title,
      source: "Year 7",
    };
  }
  if (!unit) return null;
  const art = (window.READER_IMAGES || {})[unit.id];
  if (art) {
    return {
      src: art.src,
      alt: art.alt || unit.title,
      badge: unit.title,
      caption: art.caption || unit.intro || unit.title,
      source: "Chapter visual",
    };
  }
  if (studySubject === "maths") {
    const y9img = yearId === "9" && window.MATHS_Y9_CHAPTER_IMAGES && window.MATHS_Y9_CHAPTER_IMAGES[unit.id];
    const img = y9img || (window.MATHS_CHAPTER_IMAGES || {})[unit.id];
    if (!img) return null;
    return {
      src: img.src,
      alt: img.alt || unit.title,
      badge: unit.title,
      caption: img.caption || unit.intro || unit.title,
      source: "Mathematics Second Edition",
    };
  }
  if (yearId === "9" && studySubject === "science") {
    const img = window.SCIENCE_Y9_CHAPTER_IMAGES && window.SCIENCE_Y9_CHAPTER_IMAGES[unit.id];
    if (!img) return null;
    return {
      src: img.src,
      alt: img.alt || unit.title,
      badge: unit.title,
      caption: img.caption || unit.intro || unit.title,
      source: "Science Learner’s Book Stage 9",
    };
  }
  if (!unit.topics || !unit.topics[0]) return null;
  return window.getTopicImageData(yearId, unit.id, unit.topics[0].id);
}

function renderChapterGallery() {
  if (!featuredGallery) return;
  featuredGallery.innerHTML = "";
  currentUnits().forEach((unit) => {
    const img = chapterImage(unit);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-card";
    const thumb = img
      ? `<img src="${img.src}" alt="${unit.title}" class="gallery-card-thumb" loading="lazy" />`
      : `<div class="gallery-card-thumb chapter-thumb-plain">${unit.strand || "Chapter"}</div>`;
    const pages = readerPages(unit);
    const n = pages.length;
    const topicLabel =
      yearId === "6" && studySubject === "maths"
        ? y6MathsHtmlQuestPages(unit)
          ? (homeBoard === "CBSE"
              ? CBSE_Y6_MATHS_QUEST_GALLERY_LABELS[unit.id]
              : Y6_MATHS_QUEST_GALLERY_LABELS[unit.id]) || "Quest — interactive map"
          : "Quest-style chapter reading"
        : y6MathsChapterPages(unit) && y6UnitFrontPages(unit).length
          ? n === 1
            ? "1 section"
            : `${n} sections (goals, intro + topics)`
          : n === 1
            ? "1 topic"
            : `${n} topics`;
    card.innerHTML = `
      ${thumb}
      <div class="gallery-card-body">
        <span class="gallery-card-badge">${unit.strand || "Chapter"}</span>
        <h4 class="gallery-card-title">${unit.title}</h4>
        <p class="gallery-card-meta">${topicLabel}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      if (appMode === "study") openReader(unit.id);
      else openChapter(unit.id);
    });
    featuredGallery.appendChild(card);
  });
}

function updateBackdrop(imgSrc) {
  if (!stageBackdrop) return;
  if (imgSrc) {
    stageBackdrop.style.backgroundImage = `url("${imgSrc}")`;
    stageBackdrop.style.opacity = "0.18";
  } else {
    stageBackdrop.style.backgroundImage = `url("${DEFAULT_HERO.src}")`;
    stageBackdrop.style.opacity = "0.12";
  }
}

function updateTopicMedia(imgData) {
  currentImageData = imgData;
  if (!imgData) return;

  topicHeroImg.src = imgData.src;
  topicHeroImg.alt = imgData.alt || "Topic study image";
  topicHeroBadge.textContent = imgData.badge || "Module Visual";
  topicHeroCaption.textContent = imgData.caption || "";
  showcaseTag.textContent = imgData.badge ? imgData.badge.split(" ")[0] : "Visual";
  showcaseSource.textContent = imgData.source || "IGCSE Science Media";

  updateBackdrop(imgData.src);

  // Gallery tabs if multiple images exist for this module/topic
  topicGalleryTabs.innerHTML = "";
  if (imgData.gallery && imgData.gallery.length > 1) {
    imgData.gallery.forEach((g, idx) => {
      const tabBtn = document.createElement("button");
      tabBtn.type = "button";
      tabBtn.className = "gallery-tab-btn" + (g.src === topicHeroImg.getAttribute("src") ? " on" : "");
      tabBtn.textContent = g.label || `Photo ${idx + 1}`;
      tabBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        topicHeroImg.src = g.src;
        topicHeroCaption.textContent = g.caption || imgData.caption;
        updateBackdrop(g.src);
        topicGalleryTabs.querySelectorAll(".gallery-tab-btn").forEach((btn) => btn.classList.remove("on"));
        tabBtn.classList.add("on");
      });
      topicGalleryTabs.appendChild(tabBtn);
    });
  }
}

if (heroZoomBtn) {
  heroZoomBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (topicHeroImg && topicHeroImg.src) {
      openModal(topicHeroImg.src, topicHeroImg.alt, topicHeroCaption.textContent);
    }
  });
}

if (topicShowcaseMedia) {
  topicShowcaseMedia.addEventListener("click", () => {
    if (topicHeroImg && topicHeroImg.src) {
      openModal(topicHeroImg.src, topicHeroImg.alt, topicHeroCaption.textContent);
    }
  });
}

function renderYearPicks() {
  yearPicks.innerHTML = "";
  const years = (window.STUDY_YEARS || []).slice().sort((a, b) => {
    const rank = (id) => (id === "11plus" ? 99 : Number(id) || 0);
    return rank(a.id) - rank(b.id);
  });
  years.filter((year) => year.id !== "11plus").forEach((year) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "year-btn" + (year.id === yearId ? " on" : "");
    const extra =
      year.id === "4" || year.id === "5"
        ? " · Mental mathematics"
        : year.id === "6"
        ? " · Mathematics & mental maths"
        : year.id === "11plus" || year.id === "9"
        ? " · Mathematics only"
        : " · Science, maths and mental maths";
    const icons = { "4": "🧮", "5": "⚡", "6": "📒", "8": "📘", "7": "📗", "9": "📙", "11plus": "🎯" };
    btn.dataset.year = year.id;
    btn.innerHTML = `<span class="nav-ico" aria-hidden="true">${icons[year.id] || "📘"}</span><span class="year-btn-copy"><strong>${year.title}</strong><span>${year.stage}${extra}</span></span>`;
    btn.addEventListener("click", () => selectYear(year.id));
    yearPicks.appendChild(btn);
  });
  renderChoiceStage();
}

function renderSubjectPicks() {
  hide(subjectLabel);
  hide(subjectPicks);
  if (subjectPicks) subjectPicks.innerHTML = "";
  renderChoiceStage();
}

function renderModePicks() {
  hide(modeLabel);
  hide(modePicks);
  if (modePicks) modePicks.innerHTML = "";
  renderChoiceStage();
}

function panelOpen(el) {
  return Boolean(el && !el.classList.contains("hidden") && !el.hasAttribute("hidden"));
}

function choiceStageBusy() {
  return panelOpen(quizPicker) || panelOpen(mockWelcome) || panelOpen(mentalWelcome) || panelOpen(featuredGallery);
}

const SUBJECT_METRO_CLASS = {
  science: "metro-tile-science",
  maths: "metro-tile-maths",
  mental: "metro-tile-mental",
  stats: "metro-tile-stats",
};

const SUBJECT_METRO_ICON = {
  science: "🧪",
  maths: "🔢",
  mental: "⚡",
  stats: "📊",
};

function subjectMetroSizeClass(index, total) {
  if (total === 1) return "metro-tile-wide metro-tile-subject-banner";
  if (total === 2) return "metro-tile-half metro-tile-subject-square";
  return index < 2 ? "metro-tile-half metro-tile-subject-square" : "metro-tile-wide metro-tile-subject-banner";
}

function appendSubjectMetroTile(parent, sub, index, total) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `metro-tile ${subjectMetroSizeClass(index, total)} ${SUBJECT_METRO_CLASS[sub.id] || "metro-tile-igcse"}`;
  btn.dataset.kind = sub.id;
  const delay = index === 1 ? " delay-2" : index === 0 ? " delay-1" : "";
  const icon = SUBJECT_METRO_ICON[sub.id] || "✦";
  const cta = sub.id === "stats" ? "View progress →" : "Start learning →";
  let pctBadge = "";
  if (sub.id !== "stats" && yearId) {
    const st = subjectProgressStats(yearId, sub.id);
    pctBadge = `<span class="tile-subject-progress">${st.percent}% complete</span>`;
  }
  btn.innerHTML = `<span class="live-tile-inner${delay}"><span class="tile-face tile-face-subject"><span class="tile-subject-icon" aria-hidden="true">${icon}</span><h3 class="tile-subject-title">${sub.title}</h3><p class="tile-subject-blurb">${sub.blurb}</p>${pctBadge}</span><span class="tile-face tile-face-cta tile-face-subject-cta"><span>${cta}</span></span></span>`;
  btn.addEventListener("click", () => selectStudySubject(sub.id));
  parent.appendChild(btn);
}

function renderSubjectMetroScreen() {
  if (!choiceStage) return;
  choiceStage.innerHTML = "";
  choiceStage.className = "choice-stage gogo-pick-screen";
  const year = yearById(yearId);
  if (!year) return;
  const subjects = yearSubjects();
  const hintText =
    (welcomeHint && welcomeHint.textContent && welcomeHint.textContent.trim()) ||
    "Choose a subject to continue.";

  const screen = document.createElement("div");
  screen.className = "gogo-subject-screen";

  const layout = document.createElement("div");
  layout.className = "gogo-home-layout";

  const copy = document.createElement("div");
  copy.className = "gogo-home-copy";
  const title = document.createElement("h1");
  title.className = "gogo-home-title";
  title.innerHTML = `${year.title}<br><span>Choose a subject.</span>`;
  const lede = document.createElement("p");
  lede.className = "gogo-home-lede";
  lede.textContent = hintText;
  const breadcrumb = document.createElement("div");
  breadcrumb.className = "gogo-breadcrumb";
  breadcrumb.setAttribute("aria-label", "Selection path");
  const pathMuted = document.createElement("span");
  pathMuted.className = "gogo-bc-muted";
  pathMuted.textContent = "Path:";
  breadcrumb.append(pathMuted, document.createTextNode(" "));
  const boardLabel = document.createElement("span");
  boardLabel.textContent = homeBoard || "IGCSE";
  const sep = document.createElement("span");
  sep.className = "gogo-bc-sep";
  sep.textContent = "/";
  const yearLabel = document.createElement("span");
  yearLabel.className = "gogo-bc-current";
  yearLabel.textContent = year.title;
  breadcrumb.append(boardLabel, sep, yearLabel);
  copy.append(title, lede, breadcrumb);

  const metroWrap = document.createElement("div");
  metroWrap.className = "gogo-metro-wrap";
  const grid = document.createElement("div");
  grid.className = "gogo-view active";
  grid.setAttribute("aria-label", "Select subject");
  const head = document.createElement("div");
  head.className = "gogo-view-head";
  const headTitle = document.createElement("h2");
  headTitle.textContent = "3. Select Subject";
  head.appendChild(headTitle);
  grid.appendChild(head);
  subjects.forEach((sub, i) => appendSubjectMetroTile(grid, sub, i, subjects.length));

  metroWrap.appendChild(grid);
  layout.append(copy, metroWrap);
  screen.appendChild(layout);
  choiceStage.appendChild(screen);
}

function statsMotivation(overall, remaining) {
  if (overall <= 0) {
    return {
      kicker: "Fresh start",
      title: "One topic today changes the whole year.",
      body: "You have a full year ahead. Open any subject and finish a single chapter — that is how a strong streak begins.",
    };
  }
  if (overall < 25) {
    return {
      kicker: "Momentum",
      title: "You have started. Keep that feeling.",
      body: remaining
        ? `${remaining} topics are still open. Do one more now and you will already be ahead of yesterday.`
        : "You are on the board. One more session will make this feel easy.",
    };
  }
  if (overall < 50) {
    return {
      kicker: "Building",
      title: "Halfway is closer than it looks.",
      body: "The hard part was starting. A short study, a set of flash cards, or a quick test will push this year past the middle.",
    };
  }
  if (overall < 80) {
    return {
      kicker: "Strong run",
      title: "You are doing the work that counts.",
      body: "Most of this year is already underway. Finish the topics you have opened and the percentage will jump.",
    };
  }
  if (overall < 100) {
    return {
      kicker: "Almost there",
      title: "A few topics stand between you and a complete year.",
      body: remaining
        ? `Only ${remaining} left. Close them and this year is yours.`
        : "You are right at the finish. One more push completes the year.",
    };
  }
  return {
    kicker: "Year complete",
    title: "You covered every subject.",
    body: "Brilliant work. Retake a quiz to stay sharp, or open another year and start the next climb.",
  };
}

function subjectNudge(subjectId, stats) {
  if (subjectId === "mental") {
    return stats.percent
      ? "You have a score on the board. Beat it with another one-minute run."
      : "A one-minute mental maths run is the fastest win on this page.";
  }
  const left = Math.max(0, stats.total - stats.completed);
  if (stats.percent >= 100) return "Complete. A quick test will keep it fresh.";
  if (stats.percent <= 0) return "Not started yet — the first topic is the easiest one to finish.";
  if (stats.breakdown.study && !stats.breakdown.quiz) return "You have been reading. A short quiz will lock it in.";
  if (left <= 3) return `${left} topic${left === 1 ? "" : "s"} left. You can finish this subject today.`;
  return `${left} topics still open. One chapter now keeps the streak alive.`;
}

function syncHeaderStats() {
  const btn = document.getElementById("headerStatsBtn");
  const pctEl = document.getElementById("headerStatsPct");
  if (!btn) return;
  const onStats = studySubject === "stats";
  btn.classList.toggle("on", onStats);
  btn.setAttribute("aria-pressed", onStats ? "true" : "false");
  if (!pctEl) return;
  if (!yearId) {
    pctEl.textContent = "";
    pctEl.hidden = true;
    return;
  }
  pctEl.hidden = false;
  pctEl.textContent = `${yearOverallProgress(yearId)}%`;
}

function renderStatsNeedYear() {
  if (!choiceStage) return;
  choiceStage.innerHTML = "";
  choiceStage.className = "choice-stage gogo-pick-screen gogo-stats-screen";
  const screen = document.createElement("div");
  screen.className = "gogo-subject-screen gogo-stats-panel";
  screen.innerHTML = `
    <div class="stats-page">
      <p class="stats-kicker">Stats</p>
      <h1 class="gogo-home-title">Your progress<br><span>starts with a year.</span></h1>
      <p class="gogo-home-lede">Choose a board and year first. Then this page will show how far you have come in every subject — and the next step worth taking.</p>
      <button type="button" class="stats-card-go stats-need-year-go">Choose a year</button>
    </div>`;
  screen.querySelector(".stats-need-year-go").addEventListener("click", () => {
    studySubject = null;
    openFormalCurriculum();
  });
  studySubject = "stats";
  choiceStage.appendChild(screen);
  show(choiceStage);
  if (homeHero) hide(homeHero);
  document.body.classList.remove("home-landing", "parent-dash");
  syncHeaderStats();
}

function renderStatsMetroScreen() {
  if (!choiceStage) return;
  choiceStage.innerHTML = "";
  choiceStage.className = "choice-stage gogo-pick-screen gogo-stats-screen";
  const year = yearById(yearId);
  if (!year) {
    renderStatsNeedYear();
    return;
  }
  const subjects = yearSubjects(yearId).filter((s) => s.id !== "stats");
  const rows = subjects.map((sub) => ({ sub, stats: subjectProgressStats(yearId, sub.id) }));
  const overall = yearOverallProgress(yearId);
  const remaining = rows.reduce((sum, row) => {
    if (row.sub.id === "mental") return sum + (row.stats.percent ? 0 : 1);
    return sum + Math.max(0, row.stats.total - row.stats.completed);
  }, 0);
  const motive = statsMotivation(overall, remaining);
  const focus = rows
    .filter((row) => row.stats.percent < 100)
    .sort((a, b) => a.stats.percent - b.stats.percent)[0];

  const screen = document.createElement("div");
  screen.className = "gogo-subject-screen gogo-stats-panel";
  const page = document.createElement("div");
  page.className = "stats-page";

  const hero = document.createElement("div");
  hero.className = "stats-hero";
  hero.innerHTML = `
    <div class="stats-overall-ring" style="--pct:${overall}"><span class="stats-overall-value">${overall}%</span></div>
    <div class="stats-hero-copy">
      <p class="stats-kicker">${year.title} · ${motive.kicker}</p>
      <h1 class="stats-hero-title">${motive.title}</h1>
      <p class="stats-hero-body">${motive.body}</p>
    </div>`;
  page.appendChild(hero);

  if (focus) {
    const banner = document.createElement("button");
    banner.type = "button";
    banner.className = "stats-focus";
    const icon = SUBJECT_METRO_ICON[focus.sub.id] || "✦";
    banner.innerHTML = `<span class="stats-focus-icon" aria-hidden="true">${icon}</span><span><strong>Best next step · ${focus.sub.title}</strong><span>${subjectNudge(focus.sub.id, focus.stats)}</span></span><span class="stats-focus-go">Go →</span>`;
    banner.addEventListener("click", () => selectStudySubject(focus.sub.id));
    page.appendChild(banner);
  }

  const list = document.createElement("div");
  list.className = "stats-cards";
  list.setAttribute("aria-label", "Subject progress");
  rows.forEach((row) => {
    const st = row.stats;
    const icon = SUBJECT_METRO_ICON[row.sub.id] || "✦";
    const left = row.sub.id === "mental" ? (st.percent ? 0 : 1) : Math.max(0, st.total - st.completed);
    const card = document.createElement("article");
    card.className = `stats-card stats-card-${row.sub.id}`;
    card.innerHTML = `
      <div class="stats-card-head">
        <span class="stats-card-icon" aria-hidden="true">${icon}</span>
        <div class="stats-card-titles">
          <h3>${row.sub.title}</h3>
          <p class="stats-card-meta">${row.sub.id === "mental" ? (st.percent ? "You have a mental maths score" : "Ready for a one-minute run") : `${st.completed} of ${st.total} topics started · ${left} still open`}</p>
        </div>
        <span class="stats-card-pct">${st.percent}%</span>
      </div>
      <div class="stats-bar" role="progressbar" aria-valuenow="${st.percent}" aria-valuemin="0" aria-valuemax="100" aria-label="${row.sub.title} progress"><span class="stats-bar-fill" style="width:${st.percent}%"></span></div>
      <div class="stats-chips">
        <span>Study ${st.breakdown.study}</span>
        <span>Cards ${st.breakdown.cards}</span>
        <span>Quiz ${st.breakdown.quiz}</span>
      </div>
      <p class="stats-card-detail">${subjectNudge(row.sub.id, st)}</p>
      <button type="button" class="stats-card-go">${st.percent ? "Keep going" : "Start"} ${row.sub.title} →</button>`;
    card.querySelector(".stats-card-go").addEventListener("click", () => selectStudySubject(row.sub.id));
    list.appendChild(card);
  });
  page.appendChild(list);
  screen.appendChild(page);
  choiceStage.appendChild(screen);
  syncHeaderStats();
}

const MODE_METRO_CLASS = {
  study: "metro-tile-mode-study",
  cards: "metro-tile-mode-cards",
  test: "metro-tile-mode-test",
  mock: "metro-tile-mode-mock",
};

function modeOptionsForSubject() {
  const subjectName = subjectTitle(studySubject);
  if (studySubject === "mental") {
    return [{ id: "test", title: "Quick Test", blurb: "1 minute — score as many as you can", icon: "⚡" }];
  }
  return [
    { id: "study", title: "Study", blurb: `${subjectName} chapter reading`, icon: "📖" },
    { id: "cards", title: "Flash cards", blurb: `${subjectName} chapter cards`, icon: "🃏" },
    { id: "test", title: "Quick Test", blurb: `Short ${subjectName} quiz`, icon: "✏️" },
    { id: "mock", title: "Mock exam", blurb: `Timed 1 hour ${subjectName} paper`, icon: "📝" },
  ];
}

function modeMetroSizeClass(index, total) {
  if (total === 1) return "metro-tile-wide metro-tile-subject-banner";
  if (total === 2) return "metro-tile-half metro-tile-subject-square";
  if (total === 4) return "metro-tile-half metro-tile-subject-square";
  return index < 2 ? "metro-tile-half metro-tile-subject-square" : "metro-tile-wide metro-tile-subject-banner";
}

function appendModeMetroTile(parent, opt, index, total) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `metro-tile ${modeMetroSizeClass(index, total)} ${MODE_METRO_CLASS[opt.id] || "metro-tile-igcse"}`;
  btn.dataset.kind = opt.id;
  const delay = index === 1 ? " delay-2" : index === 2 ? " delay-1" : index === 3 ? " delay-2" : "";
  btn.innerHTML = `<span class="live-tile-inner${delay}"><span class="tile-face tile-face-subject"><span class="tile-subject-icon" aria-hidden="true">${opt.icon}</span><h3 class="tile-subject-title">${opt.title}</h3><p class="tile-subject-blurb">${opt.blurb}</p></span><span class="tile-face tile-face-cta tile-face-subject-cta"><span>Open →</span></span></span>`;
  btn.addEventListener("click", () => selectMode(opt.id));
  parent.appendChild(btn);
}

function yearWelcomeHint(year) {
  if (!year) return "Choose a subject to continue.";
  if (year.id === "11plus") {
    return "This course is Mathematics only. Choose Study, Flash cards, Quick Test, or Mock exam.";
  }
  if (year.id === "4") {
    if (homeBoard === "CBSE") {
      return "Choose Mathematics to read NCERT Chapter 1 — Shapes Around Us (23 pages).";
    }
    return "Choose Mental Mathematics to open the Year 4 arithmetic adventure.";
  }
  if (year.id === "5") return "Choose Mental Mathematics to open the Year 5 mental maths quest.";
  if (year.id === "6") {
    if (homeBoard === "CBSE") {
      return "Choose Mathematics for Ganita Prakash Chapters 1–3 — patterns, lines and angles, and number play.";
    }
    return "Choose Mathematics for chapters 1–8, or Mental Mathematics for the interactive quest.";
  }
  if (year.id === "9") {
    return "Choose Science (Chapter 3 Forces and energy) or Mathematics (Chapters 12–13), then Study or Flash cards.";
  }
  return "Choose a subject first. Then you can Study, use Flash cards, take a Quick Test, or sit a Mock exam.";
}

function renderModeMetroScreen() {
  if (!choiceStage) return;
  choiceStage.innerHTML = "";
  choiceStage.className = "choice-stage gogo-pick-screen";
  const year = yearById(yearId);
  if (!year || !studySubject) return;
  const subjectName = subjectTitle(studySubject);
  const options = modeOptionsForSubject();
  const hintText =
    (welcomeHint && welcomeHint.textContent && welcomeHint.textContent.trim()) ||
    "Pick how you want to learn today.";

  const screen = document.createElement("div");
  screen.className = "gogo-subject-screen gogo-mode-screen";

  const layout = document.createElement("div");
  layout.className = "gogo-home-layout";

  const copy = document.createElement("div");
  copy.className = "gogo-home-copy";
  const title = document.createElement("h1");
  title.className = "gogo-home-title";
  title.innerHTML = `${subjectName}<br><span>Choose your path.</span>`;
  const lede = document.createElement("p");
  lede.className = "gogo-home-lede";
  lede.textContent = hintText;
  const breadcrumb = document.createElement("div");
  breadcrumb.className = "gogo-breadcrumb";
  breadcrumb.setAttribute("aria-label", "Selection path");
  breadcrumb.innerHTML = `<span class="gogo-bc-muted">Path:</span> <span>${homeBoard || "IGCSE"}</span> <span class="gogo-bc-sep">/</span> <span>${year.title}</span> <span class="gogo-bc-sep">/</span> <span class="gogo-bc-current">${subjectName}</span>`;

  copy.append(title, lede, breadcrumb);

  const metroWrap = document.createElement("div");
  metroWrap.className = "gogo-metro-wrap";
  const grid = document.createElement("div");
  grid.className = "gogo-view active gogo-mode-grid";
  grid.setAttribute("aria-label", "Choose learning path");
  const head = document.createElement("div");
  head.className = "gogo-view-head";
  const headTitle = document.createElement("h2");
  headTitle.textContent = "4. Choose your path";
  head.appendChild(headTitle);
  grid.appendChild(head);
  options.forEach((opt, i) => appendModeMetroTile(grid, opt, i, options.length));

  metroWrap.appendChild(grid);
  layout.append(copy, metroWrap);
  screen.appendChild(layout);
  choiceStage.appendChild(screen);
}

function renderChoiceStage() {
  if (!choiceStage) return;
  choiceStage.innerHTML = "";
  if (choiceStageBusy()) {
    hide(choiceStage);
    if (welcomeHero) hide(welcomeHero);
    if (learnBanner) hide(learnBanner);
    if (homeHero) hide(homeHero);
    setViewBack("");
    return;
  }

  const addTile = (opts) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-tile" + (opts.atom ? " choice-tile-atom" : "");
    btn.dataset.kind = opts.kind;
    btn.style.setProperty("--i", String(opts.index || 0));
    const cta = opts.cta ? `<span class="choice-tile-cta">${opts.cta}</span>` : "";
    if (opts.atom) {
      const preview = opts.src
        ? `<span class="choice-tile-preview"><img src="${opts.src}" alt="" /></span>`
        : "";
      btn.innerHTML = `<span class="choice-tile-body"><strong>${opts.title}</strong><span class="choice-tile-blurb">${opts.blurb}</span>${cta}</span>${preview}`;
    } else {
      const media = opts.src
        ? `<span class="choice-tile-media"><img src="${opts.src}" alt="" /></span>`
        : `<span class="choice-tile-icon" aria-hidden="true">${opts.icon || "✦"}</span>`;
      const motto = opts.motto ? `<span class="choice-tile-motto">${opts.motto}</span>` : "";
      btn.innerHTML = `${media}<span class="choice-tile-body"><span class="choice-tile-kicker">${opts.kicker}</span><strong>${opts.title}</strong><span class="choice-tile-blurb">${opts.blurb}</span>${cta}</span>${motto}`;
    }
    btn.addEventListener("click", opts.onClick);
    choiceStage.appendChild(btn);
  };

  if (!yearId) {
    if (appToolbar) hide(appToolbar);
    if (homeHero) show(homeHero);
    bindGogoMetro();
    if (learnBanner) hide(learnBanner);
    if (welcomeHero) hide(welcomeHero);
    document.body.classList.add("home-landing");
    setViewBack("");
    hide(choiceStage);
    choiceStage.innerHTML = "";
    syncHeaderStats();
    return;
  }

  document.body.classList.remove("home-landing", "parent-dash");
  if (appToolbar) hide(appToolbar);
  if (homeHero) hide(homeHero);

  if (!studySubject) {
    setViewBack(yearSelectionBackLabel(), goBackToYearSelection);
    renderSubjectMetroScreen();
    show(choiceStage);
    if (welcomeHero) hide(welcomeHero);
    if (learnBanner) hide(learnBanner);
    syncHeaderStats();
    return;
  }

  if (studySubject === "stats") {
    setViewBack("Back to subjects", goBackToSubjectSelection);
    renderStatsMetroScreen();
    show(choiceStage);
    if (welcomeHero) hide(welcomeHero);
    if (learnBanner) hide(learnBanner);
    syncHeaderStats();
    return;
  }

  if (!appMode) {
    setViewBack("Back to subjects", goBackToSubjectSelection);
    renderModeMetroScreen();
    show(choiceStage);
    if (welcomeHero) hide(welcomeHero);
    if (learnBanner) hide(learnBanner);
    syncHeaderStats();
    return;
  }

  hide(choiceStage);
  setViewBack("");
  if (welcomeHero) hide(welcomeHero);
  if (learnBanner) hide(learnBanner);
  syncHeaderStats();
}

function renderTree() {
  if (moduleLabel) hide(moduleLabel);
  if (tree) {
    tree.innerHTML = "";
    hide(tree);
  }
}

function setViewBack(label, onClick) {
  if (!viewBack) return;
  if (!label) {
    hide(viewBack);
    viewBack.onclick = null;
    return;
  }
  viewBack.textContent = label;
  viewBack.onclick = onClick;
  show(viewBack);
}

function yearSelectionBackLabel() {
  return "Back to year choice";
}

function applyYearWelcomeShell(year) {
  if (!year) return;
  pageTitle.textContent = year.title;
  eyebrow.textContent =
    homeBoard === "CBSE" && year.id === "4"
      ? "CBSE · Class 4 Mathematics"
      : homeBoard === "CBSE" && year.id === "6"
        ? "CBSE · Class 6 Mathematics"
        : year.id === "11plus"
        ? "11+ entrance examinations · Mathematics"
        : year.id === "4" || year.id === "5"
          ? "Cambridge Primary · Mental mathematics"
          : `Cambridge Lower Secondary · ${year.stage}`;
  welcomeTitle.textContent = year.title;
  welcomeHint.textContent = yearWelcomeHint(year);
  const hero = yearHero(year.id);
  if (welcomeHeroImg) {
    welcomeHeroImg.src = hero.src;
    welcomeHeroImg.alt = hero.alt;
  }
  if (welcomeHeroBadge) welcomeHeroBadge.textContent = hero.badge;
  updateBackdrop(hero.src);
}

function goToYearHome() {
  confirmLeaveMock().then((ok) => {
    if (!ok) return;
    cancelMentalCountdown();
    const year = yearById(yearId);
    if (!year) {
      yearId = null;
      saveHomePref();
      resetGogoHome();
      pageTitle.textContent = "Choose a year";
      eyebrow.textContent = "Cambridge Lower Secondary";
      welcomeTitle.textContent = "Choose a year";
      welcomeHint.textContent = "Choose a year, then choose a subject.";
      if (featuredGallery) hide(featuredGallery);
      resetStudy();
      if (welcomeHeroImg) {
        welcomeHeroImg.src = DEFAULT_HERO.src;
        welcomeHeroImg.alt = DEFAULT_HERO.alt;
      }
      if (welcomeHeroBadge) welcomeHeroBadge.textContent = DEFAULT_HERO.badge;
      updateBackdrop(DEFAULT_HERO.src);
      renderYearPicks();
      renderModePicks();
      renderSubjectPicks();
      renderTree();
      markTopNav("navHome");
      return;
    }
    studySubject = null;
    unitId = null;
    topicId = null;
    appMode = null;
    quizSubject = null;
    examKind = "quiz";
    stopMockTimer();
    saveHomePref();
    if (featuredGallery) hide(featuredGallery);
    resetStudy();
    setY6QuestBodyMode(false);
    applyYearWelcomeShell(year);
    gogoUpdateBreadcrumb();
    renderYearPicks();
    renderModePicks();
    renderSubjectPicks();
    renderTree();
    markTopNav("navHome");
  });
}

function goBackToSubjectSelection() {
  confirmLeaveMock().then((ok) => {
    if (!ok) return;
    cancelMentalCountdown();
    studySubject = null;
    appMode = null;
    quizSubject = null;
    unitId = null;
    topicId = null;
    examKind = "quiz";
    stopMockTimer();
    const year = yearById(yearId);
    if (year) {
      pageTitle.textContent = year.title;
      welcomeTitle.textContent = year.title;
      welcomeHint.textContent = yearWelcomeHint(year);
    }
    if (featuredGallery) hide(featuredGallery);
    resetStudy();
    renderYearPicks();
    renderModePicks();
    renderSubjectPicks();
    renderTree();
  });
}

function goBackToYearSelection() {
  confirmLeaveMock().then((ok) => {
    if (!ok) return;
    cancelMentalCountdown();
    yearId = null;
    saveHomePref();
    unitId = null;
    topicId = null;
    appMode = null;
    studySubject = null;
    quizSubject = null;
    examKind = "quiz";
    stopMockTimer();
    pageTitle.textContent = "Choose a year";
    eyebrow.textContent = "Cambridge Lower Secondary";
    welcomeTitle.textContent = "Choose a year";
    welcomeHint.textContent = "Choose a year, then choose a subject.";
    if (featuredGallery) hide(featuredGallery);
    resetStudy();
    document.body.classList.remove("parent-dash");
    document.body.classList.add("home-landing");
    const parentHome = document.getElementById("parentHome");
    if (parentHome) hide(parentHome);
    if (gogoMetro) show(gogoMetro);
    if (homeBoard === "IGCSE") gogoShowView("years-igcse");
    else if (homeBoard === "CBSE") gogoShowView("years-cbse");
    else resetGogoHome();
    gogoUpdateBreadcrumb();
    renderYearPicks();
    renderModePicks();
    renderSubjectPicks();
    renderTree();
  });
}

function resetStudy() {
  topicId = null;
  cardIndex = 0;
  setY6QuestBodyMode(false);
  hide(studyEl);
  hide(readerEl);
  hideQuizPanels();
  hide(quizPicker);
  hide(mockWelcome);
  hide(mentalWelcome);
  show(welcomeEl);
  setSubjectVisual(studySubject);
}

function selectYear(id) {
  confirmLeaveMock().then((ok) => {
    if (!ok) return;
    const year = yearById(id);
    if (!year) return;
    if (id !== "11plus" && homeBoard !== "CBSE") homeBoard = "IGCSE";
    cancelMentalCountdown();
  yearId = id;
  studySubject = null;
  unitId = null;
  appMode = null;
  quizSubject = null;
  examKind = "quiz";
  stopMockTimer();
  applyYearWelcomeShell(year);
  if (featuredGallery) hide(featuredGallery);
  resetStudy();
  setY6QuestBodyMode(false);
  saveHomePref();
  gogoUpdateBreadcrumb();
  renderYearPicks();
  renderModePicks();
  renderSubjectPicks();
  renderTree();
  });
}

function selectStudySubject(subjectId) {
  confirmLeaveMock().then((ok) => {
    if (!ok) return;
    if (subjectId === "stats") {
      cancelMentalCountdown();
      studySubject = "stats";
      appMode = null;
      quizSubject = null;
      unitId = null;
      topicId = null;
      stopMockTimer();
      hideMainPanels();
      show(welcomeEl);
      hide(mockWelcome);
      hide(mentalWelcome);
      if (featuredGallery) hide(featuredGallery);
      if (topicShowcase) hide(topicShowcase);
      const year = yearById(yearId);
      pageTitle.textContent = year ? `${year.title} · Stats` : "Stats";
      welcomeTitle.textContent = year ? `${year.title} · Progress` : "Progress";
      welcomeHint.textContent = "Your learning progress across subjects this year.";
      setSubjectVisual(null);
      renderSubjectPicks();
      renderModePicks();
      renderTree();
      return;
    }
    const mentalQuest = mentalQuestPathForYear(yearId);
    if (subjectId === "mental" && mentalQuest) {
      if (yearId === "4" || yearId === "5" || yearId === "6") {
        studySubject = subjectId;
        const year = yearById(yearId);
        openMentalQuestReader(mentalQuest, year ? `${year.title} · Mental Mathematics` : "Mental Mathematics");
        return;
      }
      window.location.href = mentalQuest;
      return;
    }
    cancelMentalCountdown();
    studySubject = subjectId;
  appMode = null;
  quizSubject = null;
  unitId = currentUnits()[0] ? currentUnits()[0].id : null;
  topicId = null;
  stopMockTimer();
  const name = subjectTitle(subjectId);
  pageTitle.textContent = name;
  welcomeTitle.textContent = `${yearById(yearId).title} · ${name}`;
  welcomeHint.textContent =
    subjectId === "mental"
      ? "Score as much as you can in 1 minute."
      : subjectId === "maths" && homeBoard === "CBSE" && yearId === "6"
        ? "Ganita Prakash Chapters 1–3. Choose Study to open a quest."
        : subjectId === "maths" && homeBoard === "CBSE" && yearId === "4"
          ? "NCERT Class 4 Mathematics. Choose Study to read the chapter."
          : subjectId === "maths"
            ? "Syllabus from Mathematics Second Edition. Choose Study, Flash cards, Quick Test, or Mock exam."
            : "Choose Study, Flash cards, Quick Test, or Mock exam for this subject.";
  renderSubjectPicks();
  renderModePicks();
  renderTree();
  hideMainPanels();
  show(welcomeEl);
  hide(mockWelcome);
  hide(mentalWelcome);
  if (featuredGallery) hide(featuredGallery);
  if (topicShowcase) hide(topicShowcase);
  setSubjectVisual(subjectId);
  });
}

function selectMode(mode) {
  confirmLeaveMock().then((ok) => {
    if (!ok || !studySubject) return;
    cancelMentalCountdown();
    appMode = mode;
  quizSubject = null;
  topicId = null;
  examKind = mode === "mock" ? "mock" : "quiz";
  stopMockTimer();
  renderModePicks();
  renderTree();
  hideMainPanels();
  show(welcomeEl);
  if (featuredGallery) hide(featuredGallery);
  hide(quizPicker);
  hide(mockWelcome);
  hide(mentalWelcome);

  if (mode === "study") {
    welcomeTitle.textContent = studySubject === "maths" ? "Mathematics study" : "Science study";
    welcomeHint.textContent = "Choose a chapter. The reading pane shows every sub-chapter in that chapter.";
    if (featuredGallery) {
      show(featuredGallery);
      renderChapterGallery();
    }
    if (topicShowcase) hide(topicShowcase);
    renderChoiceStage();
    return;
  }

  if (mode === "cards") {
    welcomeTitle.textContent = studySubject === "maths" ? "Mathematics flash cards" : "Science flash cards";
    welcomeHint.textContent = "Chapters are on the right. Sub-chapters (1.1, 1.2, …) are in the menu on the left.";
    if (featuredGallery) {
      show(featuredGallery);
      renderChapterGallery();
    }
    if (topicShowcase) hide(topicShowcase);
    renderChoiceStage();
    return;
  }

  if (mode === "mock") {
    showMockBriefing();
    return;
  }

  if (studySubject === "mental") {
    showMentalBriefing();
    return;
  }

  showQuizPicker();
  });
}

function fallbackMockPool(subjectId) {
  if (yearId === "11plus") return (window.QUIZ_BANK_11PLUS && window.QUIZ_BANK_11PLUS.maths) || [];
  if (yearId === "7") {
    const bank = window.QUIZ_BANK_Y7 || {};
    return subjectId === "maths" ? bank.maths || [] : bank.science || [];
  }
  if (yearId === "9") {
    const bank = window.QUIZ_BANK_Y9 || {};
    return subjectId === "maths" ? bank.maths || [] : bank.science || [];
  }
  if (subjectId === "maths") return (window.MOCK_BANK && window.MOCK_BANK.maths) || [];
  return (window.scienceMockPool && window.scienceMockPool()) || [];
}

function mergeMockQuestions(subjectId, remote) {
  const fallback = fallbackMockPool(subjectId);
  const remoteList = Array.isArray(remote) ? remote : [];
  const markableRemote = remoteList.filter((q) => q && q.prompt && q.answer);
  const stems = remoteList.filter((q) => q && q.prompt && !q.answer);
  const used = new Set();
  const merged = [];
  function add(q) {
    const key = normalizeText(q.prompt);
    if (!key || used.has(key)) return;
    used.add(key);
    merged.push(q);
  }
  markableRemote.forEach(add);
  fallback.forEach(add);
  return { merged, stems: stems.length, folders: true };
}

function showMockBriefing() {
  examKind = "mock";
  quizClosed = true;
  stopMockTimer();
  hideMainPanels();
  show(welcomeEl);
  hide(quizPicker);
  if (featuredGallery) hide(featuredGallery);
  if (topicShowcase) hide(topicShowcase);
  show(mockWelcome);
  pageTitle.textContent = "Mock exam";
  welcomeTitle.textContent = "Mock exam";
  welcomeHint.textContent = "Read the rules, then press Start test when you are ready.";
  renderChoiceStage();
}

function showMentalBriefing() {
  cancelMentalCountdown();
  examKind = "quiz";
  quizClosed = true;
  stopMockTimer();
  hideMainPanels();
  show(welcomeEl);
  hide(quizPicker);
  hide(mockWelcome);
  if (featuredGallery) hide(featuredGallery);
  if (topicShowcase) hide(topicShowcase);
  if (mentalHighScoreEl) mentalHighScoreEl.textContent = String(mentalHighScore());
  show(mentalWelcome);
  pageTitle.textContent = "Quick Test";
  welcomeTitle.textContent = "Quick Mental Mathematics";
  welcomeHint.textContent = "Score as much as you can in 1 minute.";
  renderChoiceStage();
}

function takeMentalQuestion() {
  const bank = quizBankFor("mental");
  if (!bank.length) return null;
  if (mentalCursor >= mentalPool.length) {
    mentalPool = shuffle(bank);
    mentalCursor = 0;
  }
  let question = mentalPool[mentalCursor++];
  const last = quizItems[quizItems.length - 1];
  if (last && question && question.prompt === last.prompt && bank.length > 1) {
    if (mentalCursor >= mentalPool.length) {
      mentalPool = shuffle(bank);
      mentalCursor = 0;
    }
    const other = mentalPool[mentalCursor];
    if (other && other.prompt !== last.prompt) question = mentalPool[mentalCursor++];
  }
  return { ...question, id: `${question.id}-n${quizItems.length}` };
}

function startMentalCountdown() {
  haptic("tap");
  cancelMentalCountdown();
  hideMainPanels();
  show(countdownOverlay);
  const steps = ["3", "2", "1"];
  let step = 0;
  const tick = () => {
    if (!mentalCountdownOn()) return;
    if (step >= steps.length) {
      hide(countdownOverlay);
      beginMentalRun();
      return;
    }
    if (countdownNum) {
      countdownNum.textContent = steps[step];
      countdownNum.classList.remove("pop");
      void countdownNum.offsetWidth;
      countdownNum.classList.add("pop");
    }
    step += 1;
    mentalCountdownTimer = setTimeout(tick, 700);
  };
  tick();
}

function beginMentalRun() {
  const bank = quizBankFor("mental");
  if (!bank.length) {
    showMentalBriefing();
    welcomeHint.textContent = "No mental mathematics questions are loaded for this year.";
    return;
  }
  haptic("begin");
  examKind = "mental";
  quizClosed = false;
  quizSubject = "mental";
  mentalCorrect = 0;
  mentalPool = shuffle(bank);
  mentalCursor = 0;
  quizItems = [];
  const first = takeMentalQuestion();
  quizItems = [first];
  quizResponses = [""];
  quizIndex = 0;
  quizMarked = [];
  savedQuizPaper = [];
  hideMainPanels();
  show(quizEl);
  pageTitle.textContent = "Quick Test";
  const year = yearById(yearId);
  eyebrow.textContent = `${year ? year.title : "Year"} · Quick Mental Mathematics · 1 minute`;
  startMockTimer(60000);
  renderQuizCard();
}

function advanceMental() {
  if (quizClosed) return;
  saveQuizAnswer();
  const current = quizItems[quizIndex];
  if (current && markAnswer(current, quizResponses[quizIndex] || "")) mentalCorrect += 1;
  const next = takeMentalQuestion();
  if (!next) return;
  quizItems.push(next);
  quizResponses.push("");
  quizIndex = quizItems.length - 1;
  renderQuizCard();
}

function flashTrophy() {
  if (!trophyFlash) return;
  hide(trophyFlash);
  show(trophyFlash);
  const svg = trophyFlash.querySelector("svg");
  if (svg) {
    svg.style.animation = "none";
    void svg.offsetWidth;
    svg.style.animation = "";
  }
  setTimeout(() => hide(trophyFlash), 1900);
}

async function startMock(subjectId) {
  if (yearId !== "8" && yearId !== "7" && yearId !== "9" && yearId !== "11plus") return;
  examKind = "mock";
  quizSubject = subjectId;
  renderSubjectPicks();
  let remote = [];
  try {
    const res = await fetch(`${window.MOCK_API || "http://127.0.0.1:5181"}/api/mock?subject=${encodeURIComponent(subjectId)}`);
    if (res.ok) {
      const data = await res.json();
      remote = data.questions || [];
    }
  } catch (_err) {
    remote = [];
  }
  const { merged } = mergeMockQuestions(subjectId, remote);
  if (appMode !== "mock" || studySubject !== subjectId || yearId == null) return;
  if (!merged.length) {
    welcomeTitle.textContent = "Mock exam";
    welcomeHint.textContent = "No markable questions found yet. Add a JSON question pack to the paper folder, or keep the built-in pack.";
    return;
  }
  quizClosed = false;
  const count = Math.min(window.MOCK_LENGTH || 20, merged.length);
  quizItems = shuffle(merged).slice(0, count);
  savedQuizPaper = freezePaper(quizItems);
  quizIndex = 0;
  quizResponses = quizItems.map(() => "");
  quizMarked = [];
  hideMainPanels();
  show(quizEl);
  pageTitle.textContent = "Mock exam";
  const sub = (window.MOCK_SUBJECTS || []).find((s) => s.id === subjectId);
  eyebrow.textContent = `${yearById(yearId).title} · ${sub ? sub.title : subjectId} · 1 hour`;
  startMockTimer();
  renderQuizCard();
}

function quizBankFor(subjectId) {
  if (subjectId === "mental") return (window.MENTAL_MATHS && window.MENTAL_MATHS[yearId]) || [];
  if (yearId === "11plus") return (window.QUIZ_BANK_11PLUS && window.QUIZ_BANK_11PLUS.maths) || [];
  if (yearId === "7") {
    const bank = window.QUIZ_BANK_Y7 || {};
    return subjectId === "maths" ? bank.maths || [] : bank.science || [];
  }
  if (yearId === "9") {
    const bank = window.QUIZ_BANK_Y9 || {};
    return subjectId === "maths" ? bank.maths || [] : bank.science || [];
  }
  if (subjectId === "science") return (window.scienceMockPool && window.scienceMockPool()) || [];
  if (subjectId === "maths") return (window.MOCK_BANK && window.MOCK_BANK.maths) || (window.QUIZ_BANK || {}).maths || [];
  return (window.QUIZ_BANK || {})[subjectId] || [];
}

function hideQuizPickerError() {
  hide(quizPickerError);
  if (quizPickerError) quizPickerError.textContent = "";
}

function setQuizPickerError(msg) {
  if (!quizPickerError) return;
  quizPickerError.textContent = msg;
  show(quizPickerError);
}

function showQuizPicker() {
  quizSelectedUnits = new Set();
  hideQuizPickerError();
  pageTitle.textContent = "Quick Test";
  const name = studySubject === "maths" ? "Mathematics" : "Science";
  eyebrow.textContent = `Year 8 · ${name}`;
  welcomeTitle.textContent = "Quick Test";
  welcomeHint.textContent = "Tick the chapters the test should cover, or choose All topics, then Start.";
  show(welcomeEl);
  show(quizPicker);
  renderQuizChapterList();
  renderChoiceStage();
}

function renderQuizChapterList() {
  if (!quizChapterList) return;
  quizChapterList.innerHTML = "";
  currentUnits().forEach((unit) => {
    const checked = quizSelectedUnits.has(unit.id);
    const label = document.createElement("label");
    label.className = "quiz-chapter-item" + (checked ? " on" : "");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = checked;
    box.addEventListener("change", () => {
      if (box.checked) quizSelectedUnits.add(unit.id);
      else quizSelectedUnits.delete(unit.id);
      hideQuizPickerError();
      renderQuizChapterList();
    });
    const text = document.createElement("div");
    text.innerHTML = `<strong>${unit.title}</strong><span>${unit.strand || "Chapter"}</span>`;
    label.append(box, text);
    quizChapterList.appendChild(label);
  });
}

function questionMatchesUnit(q, unit) {
  const ids = q.unitIds || [];
  if (ids.includes(unit.id)) return true;
  const hay = `${q.source || ""} ${q.prompt || ""}`.toLowerCase();
  const title = String(unit.title || "")
    .replace(/^\d+\s+/, "")
    .toLowerCase();
  if (title.length > 8 && hay.includes(title)) return true;
  const num = String(unit.id).replace(/^m/, "");
  if (hay.includes(`unit ${unit.id}`) || hay.includes(`unit ${num}`)) return true;
  return (unit.topics || []).some((topic) => {
    const tt = String(topic.title || "").toLowerCase();
    return tt.length > 8 && hay.includes(tt);
  });
}

function flashcardsAsQuestions(unit) {
  const items = [];
  (unit.topics || []).forEach((topic) => {
    (topic.cards || []).forEach((card, i) => {
      const stop = new Set(["which", "where", "there", "their", "these", "those", "about", "would", "could", "should", "being", "other", "after", "before", "because", "while", "every", "still", "than", "then", "with", "from", "that", "this", "have", "into", "only", "also", "when", "your"]);
      const words = String(card.back || "")
        .split(/[^a-zA-Z0-9]+/)
        .filter((w) => w.length > 4 && !stop.has(w.toLowerCase()));
      const item = {
        id: `fc-${unit.id}-${topic.id}-${i}`,
        source: `${topic.id} ${topic.title}`,
        prompt: card.front,
        answer: card.back,
        kind: card.kind,
        unitIds: [unit.id],
      };
      if (words.length) item.acceptAny = words.slice(0, 4);
      items.push(item);
    });
  });
  return items;
}

function quizPoolForSelection(subjectId, selected) {
  const bank = quizBankFor(subjectId);
  const pooled = [];
  currentUnits().forEach((unit) => {
    if (!selected.has(unit.id)) return;
    pooled.push(...bank.filter((q) => questionMatchesUnit(q, unit)));
    pooled.push(...flashcardsAsQuestions(unit));
  });
  const seen = new Set();
  return pooled.filter((q) => {
    const key = normalizeText(q.prompt);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function pickQuizItems(pool, count) {
  const n = count || 10;
  if (!pool.length) return [];
  const shuffled = shuffle(pool);
  const items = shuffled.slice(0, Math.min(n, shuffled.length));
  let i = 0;
  while (items.length < n) {
    const src = shuffled[i % shuffled.length];
    items.push({ ...src, id: `${src.id || "q"}-r${items.length}` });
    i += 1;
  }
  return items.map((item) => attachChoices(item, pool));
}

function isNumericCalculation(q) {
  if (!q) return false;
  if (typeof q.numeric === "number") return true;
  const prompt = String(q.prompt || "").trim();
  const answer = String(q.answer || "").trim();
  const p = prompt.toLowerCase();
  if (!prompt) return false;

  if (/\b(calculate|evaluate|compute|work out|solve)\b/.test(p)) return true;
  if (/^[\s£($]*\d/.test(prompt)) return true;
  if (/\b(increased by|reduced by|decreased by)\b/.test(p) && /\d/.test(prompt)) return true;
  if (/\bfalls\s+\d/.test(p) || /\brises\s+\d/.test(p)) return true;
  if (/\bto the nearest\b/.test(p) && /\d/.test(prompt)) return true;
  if (/\b(hypotenuse|circumference|nth term|12th term|lower bound|upper bound|y-intercept|standard form)\b/.test(p) && /\d/.test(prompt)) return true;
  if (/\b(area|volume|angle|ratio|share)\b/.test(p) && /\d/.test(prompt) && !/\b(what is|why|how|name)\b/.test(p)) return true;
  if (q.kind === "Recall" && /\d/.test(prompt) && /\d/.test(answer)) return true;

  const longWords = (answer.match(/[A-Za-z]{4,}/g) || []).filter((w) => !/^(with|from|then|that|this|when|into|plus|minus)$/i.test(w));
  const digits = (answer.match(/\d/g) || []).length;
  if (digits >= 1 && longWords.length === 0) return true;
  if (digits >= 1 && answer.length <= 28) return true;
  return false;
}

function wantsMultipleChoice() {
  return false;
}

function overlapCount(a, b) {
  const left = new Set(
    normalizeText(a)
      .split(" ")
      .filter((w) => w.length > 3)
  );
  if (!left.size) return 0;
  let n = 0;
  normalizeText(b)
    .split(" ")
    .forEach((w) => {
      if (left.has(w)) n += 1;
    });
  return n;
}

function similarChoiceLength(correct, other) {
  const c = String(correct || "").length;
  const o = String(other || "").length;
  if (c <= 24) return o <= Math.max(36, c * 3);
  if (c <= 48) return o <= 72;
  if (c <= 90) return o <= 160;
  if (c <= 160) return o >= 24 && o <= 280;
  return o >= 40;
}

function twistedAnswers(correct) {
  const pairs = [
    ["glucose", "starch"],
    ["oxygen", "nitrogen"],
    ["carbon dioxide", "oxygen"],
    ["photosynthesis", "respiration"],
    ["increases", "decreases"],
    ["increase", "decrease"],
    ["faster", "slower"],
    ["higher", "lower"],
    ["more", "less"],
    ["solid", "liquid"],
    ["liquid", "gas"],
    ["series", "parallel"],
    ["proton", "electron"],
    ["nucleus", "shell"],
    ["endothermic", "exothermic"],
    ["producer", "consumer"],
    ["genotype", "phenotype"],
    ["dominant", "recessive"],
    ["mitosis", "meiosis"],
    ["current", "voltage"],
    ["mass", "volume"],
    ["conduction", "convection"],
    ["absorption", "reflection"],
    ["positive", "negative"],
  ];
  const out = [];
  pairs.forEach(([from, to]) => {
    const re = new RegExp(`\\b${from}\\b`, "i");
    if (!re.test(correct)) return;
    const next = correct.replace(re, (m) => (m[0] === m[0].toUpperCase() ? to[0].toUpperCase() + to.slice(1) : to));
    if (normalizeText(next) !== normalizeText(correct)) out.push(next);
  });
  return out;
}

function distractorScore(item, candidate, ans) {
  let score = 0;
  const ids = item.unitIds || [];
  if ((candidate.unitIds || []).some((id) => ids.includes(id))) score += 10;
  if (candidate.source && item.source && candidate.source === item.source) score += 8;
  score += Math.min(6, overlapCount(item.answer, ans) + overlapCount(item.prompt, ans));
  if (similarChoiceLength(item.answer, ans)) score += 4;
  else score -= 8;
  return score;
}

function attachChoices(item, pool) {
  if (!wantsMultipleChoice(item)) {
    const next = { ...item };
    delete next.choices;
    return next;
  }
  const correct = String(item.answer || "").trim();
  const used = new Set([normalizeText(correct)]);
  const distractors = [];
  function addChoice(ans) {
    const text = String(ans || "").trim();
    const key = normalizeText(text);
    if (!text || !key || used.has(key) || distractors.length >= 3) return;
    used.add(key);
    distractors.push(text);
  }
  twistedAnswers(correct).forEach(addChoice);
  const ranked = pool
    .filter((q) => q && normalizeText(q.prompt) !== normalizeText(item.prompt))
    .map((q) => ({ q, ans: String(q.answer || "").trim() }))
    .filter((row) => row.ans)
    .map((row) => ({ ...row, score: distractorScore(item, row.q, row.ans) }))
    .filter((row) => row.score > 0 && similarChoiceLength(correct, row.ans))
    .sort((a, b) => b.score - a.score);
  ranked.forEach((row) => addChoice(row.ans));
  if (distractors.length < 3) {
    pool.forEach((q) => {
      if (!(q.unitIds || []).some((id) => (item.unitIds || []).includes(id))) return;
      if (!similarChoiceLength(correct, q.answer)) return;
      addChoice(q.answer);
    });
  }
  if (distractors.length < 3) {
    const sameLen = ranked.filter((row) => similarChoiceLength(correct, row.ans));
    sameLen.forEach((row) => addChoice(row.ans));
  }
  if (distractors.length < 3) {
    currentUnits().forEach((unit) => {
      if (!(item.unitIds || []).includes(unit.id)) return;
      (unit.topics || []).forEach((topic) => {
        addChoice(topic.title);
        (topic.cards || []).forEach((card) => {
          if (similarChoiceLength(correct, card.back)) addChoice(card.back);
        });
      });
    });
  }
  return {
    ...item,
    choices: shuffle([correct, distractors[0], distractors[1], distractors[2]].filter(Boolean)),
  };
}

function freezePaper(items) {
  return (items || []).map((q) => ({
    ...q,
    choices: Array.isArray(q.choices) ? q.choices.slice() : undefined,
    unitIds: q.unitIds ? q.unitIds.slice() : undefined,
    acceptAny: q.acceptAny ? q.acceptAny.slice() : undefined,
    acceptAll: q.acceptAll ? q.acceptAll.slice() : undefined,
  }));
}

function replaySavedQuiz() {
  if (!savedQuizPaper.length) return false;
  quizItems = freezePaper(savedQuizPaper);
  quizClosed = false;
  quizIndex = 0;
  quizResponses = quizItems.map(() => "");
  quizMarked = [];
  hideMainPanels();
  show(quizEl);
  if (examKind === "mock") startMockTimer();
  renderModePicks();
  renderQuizCard();
  return true;
}

function beginQuickTest() {
  hideQuizPickerError();
  if (!quizSelectedUnits.size) {
    setQuizPickerError("choose atleast 1 topic");
    return;
  }
  startQuiz(studySubject);
}

function startQuiz(subjectId) {
  const bank = subjectId === "mental" ? quizBankFor(subjectId) : quizPoolForSelection(subjectId, quizSelectedUnits);
  if (!bank.length) {
    show(welcomeEl);
    if (subjectId === "mental") {
      welcomeHint.textContent = "No mental mathematics questions are loaded for this year.";
      return;
    }
    show(quizPicker);
    setQuizPickerError("No questions for the selected topics.");
    return;
  }
  examKind = "quiz";
  quizClosed = false;
  stopMockTimer();
  quizSubject = subjectId;
  quizItems = pickQuizItems(bank, window.QUIZ_LENGTH || 10);
  savedQuizPaper = freezePaper(quizItems);
  quizIndex = 0;
  quizResponses = quizItems.map(() => "");
  quizMarked = [];
  hideMainPanels();
  show(quizEl);
  pageTitle.textContent = "Quick Test";
  const name = subjectTitle(subjectId);
  eyebrow.textContent = `${yearById(yearId) ? yearById(yearId).title : "Year"} · ${name}`;
  renderModePicks();
  renderQuizCard();
}

function saveQuizAnswer() {
  const q = quizItems[quizIndex];
  if (!q) return;
  if (q.choices && quizChoices) {
    const picked = quizChoices.querySelector('input[name="quizChoice"]:checked');
    quizResponses[quizIndex] = picked ? q.choices[Number(picked.value)] || "" : "";
    return;
  }
  quizResponses[quizIndex] = quizAnswer.value;
}

function renderQuizChoices(q) {
  if (!quizChoices) return;
  quizChoices.innerHTML = "";
  if (!q.choices) {
    hide(quizChoices);
    if (quizAnswerLabel) show(quizAnswerLabel);
    show(quizAnswer);
    quizAnswer.value = quizResponses[quizIndex] || "";
    quizAnswer.focus();
    return;
  }
  hide(quizAnswer);
  if (quizAnswerLabel) hide(quizAnswerLabel);
  show(quizChoices);
  const saved = quizResponses[quizIndex] || "";
  q.choices.forEach((choice, i) => {
    const label = document.createElement("label");
    const selected = saved === choice;
    label.className = "quiz-choice" + (selected ? " on" : "");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quizChoice";
    radio.value = String(i);
    radio.checked = selected;
    radio.addEventListener("change", () => {
      quizResponses[quizIndex] = q.choices[i];
      quizChoices.querySelectorAll(".quiz-choice").forEach((el) => el.classList.remove("on"));
      label.classList.add("on");
    });
    const text = document.createElement("span");
    text.textContent = choice;
    label.append(radio, text);
    quizChoices.appendChild(label);
  });
}

function renderQuizCard() {
  const q = quizItems[quizIndex];
  if (!q) return;
  const mental = examKind === "mental";
  const last = !mental && quizIndex === quizItems.length - 1;
  quizSource.textContent = q.source;
  quizPrompt.textContent = q.prompt;
  quizProgress.textContent = mental ? `Score ${mentalCorrect}` : `Question ${quizIndex + 1} of ${quizItems.length}`;
  quizSubjectLabel.textContent = subjectTitle(quizSubject);
  if (!mental) quizBarFill.style.width = `${((quizIndex + 1) / quizItems.length) * 100}%`;
  if (mental) hide(quizPrevBtn);
  else show(quizPrevBtn);
  quizPrevBtn.disabled = quizIndex === 0;
  quizNextBtn.textContent = mental ? "Next" : last ? (examKind === "mock" ? "Submit exam" : "Submit test") : "Next";
  renderQuizChoices(q);
  if (symbolBar) {
    if (quizSubject === "maths" || quizSubject === "mental") show(symbolBar);
    else hide(symbolBar);
  }
}

function insertQuizSymbol(symbol) {
  if (!quizAnswer) return;
  const start = quizAnswer.selectionStart == null ? quizAnswer.value.length : quizAnswer.selectionStart;
  const end = quizAnswer.selectionEnd == null ? start : quizAnswer.selectionEnd;
  quizAnswer.value = quizAnswer.value.slice(0, start) + symbol + quizAnswer.value.slice(end);
  const pos = start + symbol.length;
  quizAnswer.focus();
  quizAnswer.setSelectionRange(pos, pos);
  quizResponses[quizIndex] = quizAnswer.value;
}

function finishQuiz(extraHint) {
  if (quizClosed) return;
  quizClosed = true;
  saveQuizAnswer();
  stopMockTimer();
  quizMarked = quizItems.map((q, i) => ({
    question: q,
    given: quizResponses[i] || "",
    correct: markAnswer(q, quizResponses[i] || ""),
  }));
  const score = quizMarked.filter((row) => row.correct).length;
  hideMainPanels();
  show(quizResultEl);
  if (examKind === "mental") {
    const previous = mentalHighScore();
    const isHigh = score > previous;
    if (isHigh) localStorage.setItem(mentalScoreKey(), String(score));
    quizScoreTitle.textContent = isHigh ? "New high score" : "Your score";
    quizScoreNumber.textContent = String(score);
    quizScoreHint.textContent = isHigh
      ? `You answered ${score} correctly in 1 minute.`
      : `You answered ${score} correctly in 1 minute. High score: ${mentalHighScore()}.`;
    if (isHigh) flashTrophy();
    syncHeaderStats();
    return;
  }
  quizScoreTitle.textContent = examKind === "mock" ? "Mock exam score" : "Your score";
  quizScoreNumber.textContent = `${score} / ${quizItems.length}`;
  const pct = Math.round((score / quizItems.length) * 100);
  const timed = examKind === "mock" ? " This was a 1 hour mock." : "";
  quizScoreHint.textContent =
    (extraHint ? extraHint + " " : "") + `You scored ${pct}%.${timed} Review your answers, or retake the same paper.`;
  markLearningProgress("quiz");
}

function renderReview() {
  hideMainPanels();
  show(quizReviewEl);
  reviewHint.textContent = `${quizMarked.filter((r) => r.correct).length} correct out of ${quizMarked.length}.`;
  reviewList.innerHTML = "";
  quizMarked.forEach((row, i) => {
    const item = document.createElement("article");
    item.className = "review-item " + (row.correct ? "ok" : "bad");
    const badge = document.createElement("span");
    badge.className = "review-badge";
    badge.textContent = row.correct ? "Correct" : "Check this";
    const q = document.createElement("p");
    q.className = "review-q";
    q.textContent = `${i + 1}. ${row.question.prompt}`;
    const given = document.createElement("p");
    given.className = "review-a";
    given.textContent = `Your answer: ${row.given.trim() || "(blank)"}`;
    const expected = document.createElement("p");
    expected.className = "review-c";
    expected.textContent = `Expected: ${row.question.answer}`;
    item.append(badge, q, given, expected);
    reviewList.appendChild(item);
  });
}

function selectUnit(id) {
  if (appMode === "study") {
    openReader(id);
    return;
  }
  unitId = id;
  topicId = null;
  renderTree();
  hide(studyEl);
  hide(readerEl);
  hideQuizPanels();
  show(welcomeEl);
  if (featuredGallery) {
    show(featuredGallery);
    renderChapterGallery();
  }
  const unit = unitById(id);
  if (unit) {
    welcomeTitle.textContent = unit.title;
    welcomeHint.textContent =
      (unit.intro ? unit.intro + " " : "") + "Open a sub-chapter on the left, or tap the chapter tile on the right.";
  }
}

function topicNoteBody(topic, card, index) {
  return elaboratedBody(topic.id, index, card.back);
}

function cardToBookText(card, body) {
  const front = String(card.front || "").trim();
  const text = String(body || "").trim();
  if (!text) return front;
  const isQuestion =
    /[?]$/.test(front) ||
    /^(what|why|how|name|which|when|where|who|list|state|define|write|explain|compare|describe|give|identify)\b/i.test(front);
  if (isQuestion) return text;
  if (!front) return text;
  const start = front.slice(0, Math.min(24, front.length)).toLowerCase();
  if (start && text.toLowerCase().startsWith(start)) return text;
  return `${front.replace(/[.]$/, "")}. ${text}`;
}

function appendReaderProse(parent, topic) {
  const prose = document.createElement("div");
  prose.className = "reader-prose";
  (topic.cards || []).forEach((card, i) => {
    const body = topicNoteBody(topic, card, i);
    const parts = String(body || "")
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (!parts.length) {
      const fallback = cardToBookText(card, "");
      if (!fallback) return;
      appendFormattedStudy(prose, fallback);
      return;
    }
    parts.forEach((part) => {
      appendFormattedStudy(prose, readerProseChunk(card, part));
    });
  });
  parent.appendChild(prose);
}

function appendReaderFigure(parent, src, alt, caption) {
  if (!src) return;
  const fig = document.createElement("figure");
  fig.className = "reader-figure";
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  fig.appendChild(img);
  if (caption) {
    const cap = document.createElement("figcaption");
    cap.textContent = caption;
    fig.appendChild(cap);
  }
  parent.appendChild(fig);
}

function mathsLessonFor(unit) {
  const bank = window.MATHS_LESSONS || {};
  return bank[`${yearId}:${unit.id}`] || null;
}

function appendChalkLesson(parent, lesson) {
  const launchBtn = document.createElement("button");
  launchBtn.type = "button";
  launchBtn.className = "primary chalk-launch-btn";
  launchBtn.textContent = lesson.audio ? "Play lesson" : "Play video";
  launchBtn.style.cssText = "width: 100%; margin-bottom: 20px; font-size: 16px; padding: 12px;";
  
  parent.appendChild(launchBtn);

  launchBtn.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "chalk-modal";
    modal.style.cssText = "position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;";
    
    const modalContent = document.createElement("div");
    modalContent.style.cssText = "background: #fff; border-radius: 12px; padding: 20px; max-width: 900px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative;";
    
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "× Close";
    closeBtn.className = "primary";
    closeBtn.style.cssText = "position: absolute; top: 16px; right: 16px;";
    
    const fig = document.createElement("figure");
    fig.className = "chalk-lesson";
    const stage = document.createElement("div");
    stage.className = "chalk-stage";
    stage.setAttribute("aria-label", lesson.label || "Maths lesson");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "primary chalk-play";
    btn.textContent = lesson.audio ? "Play lesson" : "Play video";
    const cap = document.createElement("p");
    cap.className = "chalk-caption";
    cap.textContent = "Press play. The board follows the teacher.";
    
    let player;
    if (lesson.audio) {
      const audio = document.createElement("audio");
      audio.preload = "auto";
      audio.src = lesson.audio + "?v=ava";
      fig.append(stage, btn, cap, audio);
      player = audio;
    } else {
      fig.append(stage, btn, cap);
      player = {
        paused: true,
        ended: false,
        currentTime: 0,
        duration: lesson.duration || 20,
        listeners: {},
        addEventListener(evt, cb) {
          if (!this.listeners[evt]) this.listeners[evt] = [];
          this.listeners[evt].push(cb);
        },
        dispatchEvent(evt) {
          if (this.listeners[evt.type]) this.listeners[evt.type].forEach(cb => cb());
        },
        play() {
          this.paused = false;
          this.ended = false;
          this.startTime = Date.now();
          this.startOffset = this.currentTime;
          const tick = () => {
            if (this.paused) return;
            this.currentTime = this.startOffset + (Date.now() - this.startTime) / 1000;
            if (this.currentTime >= this.duration) {
              this.currentTime = this.duration;
              this.paused = true;
              this.ended = true;
              this.dispatchEvent(new Event("ended"));
            } else {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        },
        pause() {
          this.paused = true;
        }
      };
    }

    modalContent.append(closeBtn, fig);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    let raf = 0;

    function placePen(group, glyphs, count, writing) {
      let pen = group.querySelector(".pen");
      if (!pen) {
        const svg = group.ownerSVGElement;
        if (!svg) return;
        pen = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pen.setAttribute("class", "pen");
        pen.setAttribute("width", "3");
        pen.setAttribute("rx", "1");
        pen.setAttribute("fill", "#1b3a6b");
        group.appendChild(pen);
      }
      const target = glyphs[Math.max(0, Math.min(glyphs.length, count) - 1)];
      if (!target) {
        pen.classList.remove("is-live");
        return;
      }
      const box = target.getBBox();
      pen.setAttribute("x", String(box.x + box.width + 2));
      pen.setAttribute("y", String(box.y + 1));
      pen.setAttribute("height", String(Math.max(10, box.height - 2)));
      pen.classList.toggle("is-live", writing);
    }

    function reveal(index, ratio) {
      const writing = ratio < 0.995;
      stage.querySelectorAll(".chalk-step").forEach((el) => {
        const on = Number(el.getAttribute("data-step")) === index;
        el.classList.toggle("is-on", on);
        if (!on) return;
        const glyphs = el.querySelectorAll(".glyph");
        const count = glyphs.length ? Math.ceil(ratio * glyphs.length) : 0;
        glyphs.forEach((glyph, i) => glyph.classList.toggle("is-ink", i < count));
        if (glyphs.length) placePen(el, glyphs, count, writing && count > 0);
        el.querySelectorAll(".draw").forEach((shape) => {
          if (!shape.getTotalLength) return;
          const length = shape.getTotalLength();
          if (!length) return;
          shape.style.strokeDasharray = String(length);
          shape.style.strokeDashoffset = String(length * (1 - ratio));
        });
      });
    }

    function stepFor(time) {
      let index = 0;
      lesson.steps.forEach((mark, i) => {
        if (time >= mark) index = i;
      });
      return index;
    }

    function lineFor(time) {
      let text = "";
      lesson.lines.forEach((row) => {
        if (time >= row[0]) text = row[1];
      });
      return text;
    }

    fetch(lesson.svg + "?v=ava")
      .then((res) => res.text())
      .then((markup) => {
        stage.innerHTML = markup;
        reveal(0, 0);
      })
      .catch(() => {
        cap.textContent = "The lesson board could not be loaded.";
      });

    function paint() {
      const time = player.currentTime || 0;
      const index = stepFor(time);
      const start = lesson.steps[index] || 0;
      const end = lesson.steps[index + 1] || player.duration || start + 3;
      const span = Math.max(0.4, end - start);
      const ratio = Math.max(0, Math.min(1, (time - start) / span));
      reveal(index, ratio);
      const spoken = lineFor(time);
      if (spoken) cap.textContent = spoken;
    }

    function watch() {
      paint();
      if (!player.paused && !player.ended) raf = requestAnimationFrame(watch);
    }

    btn.addEventListener("click", () => {
      if (player.paused) {
        player.play();
        btn.textContent = "Pause";
        watch();
      } else {
        player.pause();
        btn.textContent = lesson.audio ? "Play lesson" : "Play video";
        if (raf) cancelAnimationFrame(raf);
      }
    });
    player.addEventListener("seeked", paint);
    player.addEventListener("ended", () => {
      btn.textContent = lesson.audio ? "Play lesson" : "Play video";
      if (raf) cancelAnimationFrame(raf);
      reveal(lesson.steps.length - 1, 1);
    });

    closeBtn.addEventListener("click", () => {
      player.pause();
      if (raf) cancelAnimationFrame(raf);
      document.body.removeChild(modal);
    });
  });
}

function appendReaderAnimation(parent, src, label, caption) {
  const fig = document.createElement("figure");
  fig.className = "reader-figure reader-animation";
  const obj = document.createElement("object");
  obj.className = "reader-animation-frame";
  obj.type = "image/svg+xml";
  obj.data = src;
  obj.setAttribute("aria-label", label);
  fig.appendChild(obj);
  if (caption) {
    const cap = document.createElement("figcaption");
    cap.textContent = caption;
    fig.appendChild(cap);
  }
  parent.appendChild(fig);
}

function appendReaderDiagram(parent, vis) {
  if (!vis || !vis.svg) return;
  const fig = document.createElement("figure");
  fig.className = "reader-figure reader-diagram";
  fig.innerHTML = vis.svg;
  if (vis.alt) {
    const cap = document.createElement("figcaption");
    cap.textContent = vis.alt;
    fig.appendChild(cap);
  }
  parent.appendChild(fig);
}

function readerArtFor(unit, topic) {
  const y7 = y7ChapterArt(unit || (topic && unitById(unitId)));
  if (y7 && !topic) return { src: y7.explain, alt: unit.title, caption: y7.caption };
  if (studySubject === "maths" || yearId === "7") return null;
  const custom = window.READER_IMAGES || {};
  if (topic) return custom[`${yearId}:${topic.id}`] || null;
  if (unit && custom[unit.id]) return custom[unit.id];
  return null;
}

function topicDiagram(topicId) {
  if (!topicId) return null;
  return (window.TOPIC_VISUALS || {})[`${yearId}:${topicId}`] || null;
}

function topicExplainArt(topicId) {
  if (!topicId) return null;
  if (yearId === "7") {
    const unit = currentUnits().find((item) => (item.topics || []).some((topic) => topic.id === topicId));
    const y7 = y7ChapterArt(unit);
    if (y7) return { src: y7.explain, alt: unit.title, caption: y7.caption };
    return null;
  }
  return (window.READER_IMAGES || {})[`${yearId}:${topicId}`] || null;
}

function siblingUnits(id) {
  const units = currentUnits();
  const index = units.findIndex((u) => u.id === id);
  return {
    prev: index > 0 ? units[index - 1] : null,
    next: index >= 0 && index < units.length - 1 ? units[index + 1] : null,
  };
}

function y6MathsChapterPages(unit) {
  return yearId === "6" && studySubject === "maths";
}

function splitY6ChapterIntro(intro) {
  const combined = String(intro || "").trim();
  if (!combined) return { objectives: "", introduction: "" };
  let rest = combined.replace(
    /^In this chapter, by the end you will be able to:\s*\n+/i,
    "",
  );
  if (rest === combined && !/^In this chapter/i.test(combined)) {
    return { objectives: "", introduction: combined };
  }
  const chunks = rest.split(/\n\n+/).map((c) => c.trim()).filter(Boolean);
  const objectives = [];
  const introduction = [];
  let introStarted = false;
  chunks.forEach((chunk) => {
    if (
      !introStarted &&
      (chunk.startsWith("CALLOUT ") ||
        chunk.length > 120 ||
        /^(When you|The word|You use|Information|Algebra|Many countries|A length|Multiplication|Did you)/.test(chunk))
    ) {
      introStarted = true;
    }
    if (introStarted) introduction.push(chunk);
    else objectives.push(chunk);
  });
  return { objectives: objectives.join("\n"), introduction: introduction.join("\n\n") };
}

function y6ChapterObjectives(unit) {
  if (unit.chapterObjectives) return String(unit.chapterObjectives).trim();
  return splitY6ChapterIntro(unit.chapterIntro).objectives;
}

function y6ChapterIntroduction(unit) {
  if (unit.chapterIntroduction) return String(unit.chapterIntroduction).trim();
  const split = splitY6ChapterIntro(unit.chapterIntro);
  if (split.introduction) return split.introduction;
  return String(unit.intro || "").trim();
}

function y6UnitFrontPages(unit) {
  const pages = [];
  const objectives = y6ChapterObjectives(unit);
  const introduction = y6ChapterIntroduction(unit);
  if (objectives) pages.push({ type: "objectives", text: objectives });
  if (introduction) pages.push({ type: "introduction", text: introduction });
  return pages;
}

function y6MathsQuestThemeActive(unit) {
  return yearId === "6" && studySubject === "maths" && !!unit;
}

function y6MathsCh1ThemeActive(unit) {
  return y6MathsQuestThemeActive(unit) && unit.id === "m1";
}

function setY6QuestBodyMode(on) {
  document.body.classList.toggle("y6-maths-quest-mode", !!on);
}

function closeMentalQuestReader() {
  setY6QuestBodyMode(false);
  if (readerEl) {
    readerEl.classList.remove("y6-maths-fullscreen", "y6-maths-quest-theme");
    hide(readerEl);
  }
  studySubject = null;
  resetStudy();
  renderYearPicks();
  renderSubjectPicks();
  renderModePicks();
  renderTree();
  renderChoiceStage();
}

function openMentalQuestReader(modulePath, label) {
  studySubject = studySubject || "mental";
  appMode = "study";
  hideMainPanels();
  hide(choiceStage);
  if (featuredGallery) hide(featuredGallery);
  show(readerEl);
  setY6QuestBodyMode(true);
  readerEl.classList.add("y6-maths-fullscreen", "y6-maths-quest-theme");
  updateBackdrop("");
  readerDoc.replaceChildren();

  const shell = document.createElement("div");
  shell.className = "y6-quest-shell";
  setViewBack(label || "Back to subjects", () => {
    confirmLeaveMock().then((ok) => {
      if (!ok) return;
      closeMentalQuestReader();
    });
  });

  const body = document.createElement("div");
  body.className = "y6-quest-body";
  const wrap = document.createElement("div");
  wrap.className = "y6-integers-module-wrap mental-quest-module-wrap";
  const iframe = document.createElement("iframe");
  iframe.className = "y6-integers-module-frame";
  iframe.title = label || "Mental Mathematics";
  const moduleHref = new URL(modulePath, window.location.href);
  moduleHref.searchParams.set("embed", "1");
  moduleHref.searchParams.set("v", "5");
  iframe.src = moduleHref.href;
  iframe.loading = "eager";
  wrap.appendChild(iframe);
  body.appendChild(wrap);
  shell.appendChild(body);
  readerDoc.appendChild(shell);

  const year = yearById(yearId);
  pageTitle.textContent = label || "Mental Mathematics";
  eyebrow.textContent = year ? `${year.title} · Mental mathematics` : "Mental mathematics";
}

function y6ChapterShortLabel(unit) {
  const m = String(unit.title || "").match(/^(\d+)/);
  return m ? `Ch ${m[1]}` : unit.title.slice(0, 14);
}

function appendY6ChapterTopNav(parent, unit) {
  parent.querySelectorAll(".y6-chapter-top-nav").forEach((el) => el.remove());
  const nav = document.createElement("nav");
  nav.className = "y6-chapter-top-nav";
  nav.setAttribute("aria-label", "Year 6 chapters");
  currentUnits().forEach((u) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "y6-chapter-top-btn" + (u.id === unit.id ? " is-active" : "");
    btn.textContent = y6ChapterShortLabel(u);
    btn.title = u.title;
    btn.addEventListener("click", () => openReader(u.id, 0));
    nav.appendChild(btn);
  });
  parent.appendChild(nav);
}

function buildY6SectionTopNav(unit, page, idx, pages) {
  const bar = document.createElement("div");
  bar.className = "y6-section-top-nav reader-topic-bar";
  const topicStatus = document.createElement("p");
  topicStatus.className = "reader-topic-status";
  topicStatus.textContent = page
    ? `${readerPageLabel(unit, page, idx, pages)} · ${idx + 1} of ${pages.length}`
    : "No content";
  bar.appendChild(topicStatus);
  const topicActions = document.createElement("div");
  topicActions.className = "reader-topic-actions";
  if (page) {
    const prevPage = idx > 0 ? pages[idx - 1] : null;
    const nextPage = idx < pages.length - 1 ? pages[idx + 1] : null;
    const prevTopicBtn = document.createElement("button");
    prevTopicBtn.type = "button";
    prevTopicBtn.className = "ghost reader-prev-topic";
    prevTopicBtn.disabled = !prevPage;
    prevTopicBtn.textContent = prevPage
      ? `Previous: ${readerPageLabel(unit, prevPage, idx - 1, pages)}`
      : "Previous section";
    prevTopicBtn.addEventListener("click", () => {
      if (idx > 0) openReader(unit.id, idx - 1);
    });
    topicActions.appendChild(prevTopicBtn);
    const nextTopicBtn = document.createElement("button");
    nextTopicBtn.type = "button";
    nextTopicBtn.className = "primary reader-next-topic";
    nextTopicBtn.disabled = !nextPage;
    nextTopicBtn.textContent = nextPage
      ? `Next: ${readerPageLabel(unit, nextPage, idx + 1, pages)}`
      : "Next section";
    nextTopicBtn.addEventListener("click", () => {
      if (idx < pages.length - 1) openReader(unit.id, idx + 1);
    });
    topicActions.appendChild(nextTopicBtn);
  }
  bar.appendChild(topicActions);
  return bar;
}

function appendY6GlassObjectives(parent, text) {
  appendReaderY6Objectives(parent, text);
  const sec = parent.querySelector(".reader-chapter-objectives:last-of-type");
  if (sec) sec.classList.add("y6-glass-panel");
}

function appendY6GlassIntroduction(parent, text) {
  const panel = document.createElement("section");
  panel.className = "y6-glass-panel reader-chapter-intro";
  const heading = document.createElement("h3");
  heading.textContent = "Introduction";
  panel.appendChild(heading);
  appendFormattedStudy(panel, text);
  parent.appendChild(panel);
}

function appendY6GlassTopic(parent, topic) {
  const panel = document.createElement("section");
  panel.className = "y6-glass-panel reader-topic";
  const heading = document.createElement("h3");
  heading.textContent = `${topic.id} ${topic.title}`;
  panel.appendChild(heading);
  appendReaderProse(panel, topic);
  parent.appendChild(panel);
}

const Y6_CH1_SECTION_LABELS = [
  "Chapter goals",
  "Introduction",
  "Adding & Subtracting",
  "Multiplying & Dividing",
  "Common Multiples (LCM)",
  "Common Factors (HCF)",
  "Divisibility Tests",
  "Square & Cube Roots",
];

function y6Ch1SectionLabel(unit, page, pageIdx) {
  if (Y6_CH1_SECTION_LABELS[pageIdx]) return Y6_CH1_SECTION_LABELS[pageIdx];
  return readerPageLabel(unit, page, pageIdx, readerPages(unit));
}

function appendY6Ch1ModuleBanner(parent, unit) {
  if (parent.querySelector(".y6-ch1-module-banner")) return;
  const banner = document.createElement("div");
  banner.className = "y6-ch1-module-banner";
  banner.setAttribute("role", "banner");
  const brand = document.createElement("div");
  brand.className = "y6-ch1-module-banner-brand";
  brand.innerHTML =
    '<span class="y6-ch1-module-banner-star" aria-hidden="true">★</span><span>Abhyaas</span>';
  const badge = document.createElement("span");
  badge.className = "y6-ch1-module-badge";
  badge.textContent = "Math: Integers";
  banner.append(brand, badge);
  parent.appendChild(banner);
}

function appendY6Ch1TabNav(parent, unit, activeIdx, insertBeforeEl) {
  parent.querySelectorAll(".y6-ch1-tab-nav").forEach((el) => el.remove());
  const pages = readerPages(unit);
  const nav = document.createElement("nav");
  nav.className = "y6-ch1-tab-nav";
  nav.setAttribute("aria-label", "Chapter sections");
  pages.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "y6-ch1-tab-btn" + (i === activeIdx ? " is-active" : "");
    btn.textContent = y6Ch1SectionLabel(unit, p, i);
    btn.addEventListener("click", () => openReader(unit.id, i));
    nav.appendChild(btn);
  });
  if (insertBeforeEl && insertBeforeEl.parentNode === parent) {
    parent.insertBefore(nav, insertBeforeEl);
  } else {
    parent.appendChild(nav);
  }
  return nav;
}

function y6MathsCh1ModuleActive(unit, page) {
  return y6MathsHtmlQuestPages(unit) && !!page;
}

function appendY6MathsCh1LessonCta(parent, unit) {
  if (!y6MathsCh1ModuleActive(unit, { type: "objectives" })) return;
  if (parent.querySelector(".y6-integers-module-cta-wrap")) return;
  const pages = readerPages(unit);
  const frontLen = y6UnitFrontPages(unit).length;
  const targetIdx = Math.min(frontLen, pages.length - 1);
  const box = document.createElement("div");
  box.className = "y6-integers-module-cta-wrap";
  const lead = document.createElement("p");
  lead.className = "y6-integers-module-cta-lead";
  lead.textContent =
    "This chapter includes an interactive lesson with tabs, a draggable number line, and quizzes. Continue to section 1.1 or use the button below.";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "primary y6-integers-module-cta";
  btn.textContent = "Open interactive lesson (1.1)";
  btn.addEventListener("click", () => openReader(unit.id, targetIdx));
  box.append(lead, btn);
  parent.appendChild(box);
}

const CBSE_Y6_MATHS_QUEST_MODULES = {
  m1: {
    path: "modules/cbse-y6-maths-ch1-quest.html",
    title: "Patterns in Mathematics Quest",
  },
  m2: {
    path: "modules/cbse-y6-maths-ch2-quest.html",
    title: "Lines and Angles Quest",
  },
  m3: {
    path: "modules/cbse-y6-maths-ch3-quest.html",
    title: "Number Play Quest",
  },
};

const CBSE_Y6_MATHS_QUEST_GALLERY_LABELS = {
  m1: "Patterns in Mathematics — interactive map",
  m2: "Lines and Angles — interactive map",
  m3: "Number Play — interactive map",
};

const Y6_MATHS_QUEST_MODULES = {
  m1: {
    path: "modules/y6-maths-ch1-quest.html",
    title: "Abhyaas Integers Quest",
  },
  m2: {
    path: "modules/y6-maths-ch2-quest.html",
    title: "Abhyaas Algebra Quest",
  },
  m3: {
    path: "modules/y6-maths-ch3-quest.html",
    title: "Abhyaas Place Value Quest",
  },
  m4: {
    path: "modules/y6-maths-ch4-quest.html",
    title: "Abhyaas Decimals Quest",
  },
  m5: {
    path: "modules/y6-maths-ch5-quest.html",
    title: "Abhyaas Angles Quest",
  },
  m6: {
    path: "modules/y6-maths-ch6-quest.html",
    title: "Abhyaas Collecting Data Quest",
  },
  m7: {
    path: "modules/y6-maths-ch7-quest.html",
    title: "Abhyaas Fractions Quest",
  },
  m8: {
    path: "modules/y6-maths-ch8-quest.html",
    title: "Abhyaas Shapes Quest",
  },
  m9: {
    path: "modules/y6-maths-ch9-quest.html",
    title: "Abhyaas Sequences Quest",
  },
  m10: {
    path: "modules/y6-maths-ch10-quest.html",
    title: "Abhyaas Percentages Quest",
  },
  m11: {
    path: "modules/y6-maths-ch11-quest.html",
    title: "Abhyaas Graphs Quest",
  },
  m12: {
    path: "modules/y6-maths-ch12-quest.html",
    title: "Abhyaas Ratio Quest",
  },
  m13: {
    path: "modules/y6-maths-ch13-quest.html",
    title: "Abhyaas Probability Quest",
  },
};

const Y6_MATHS_QUEST_GALLERY_LABELS = {
  m1: "Integers Quest — interactive map",
  m2: "Algebra Quest — interactive map",
  m3: "Place value Quest — interactive map",
  m4: "Decimals Quest — interactive map",
  m5: "Angles Quest — interactive map",
  m6: "Collecting data Quest — interactive map",
  m7: "Fractions Quest — interactive map",
  m8: "Shapes Quest — interactive map",
  m9: "Sequences Quest — interactive map",
  m10: "Percentages Quest — interactive map",
  m11: "Graphs Quest — interactive map",
  m12: "Ratio Quest — interactive map",
  m13: "Probability Quest — interactive map",
};

function y6MathsQuestModuleSpec(unit) {
  if (!unit || yearId !== "6" || studySubject !== "maths") return null;
  if (homeBoard === "CBSE") return CBSE_Y6_MATHS_QUEST_MODULES[unit.id] || null;
  return Y6_MATHS_QUEST_MODULES[unit.id] || null;
}

function y6MathsHtmlQuestPages(unit) {
  return !!y6MathsQuestModuleSpec(unit);
}

function appendY6MathsQuestModule(parent, unit, topic) {
  const spec = y6MathsQuestModuleSpec(unit);
  if (!spec) return;
  const wrap = document.createElement("div");
  wrap.className = "y6-integers-module-wrap";
  const iframe = document.createElement("iframe");
  iframe.className = "y6-integers-module-frame";
  iframe.title = topic ? `${topic.id} ${topic.title}` : spec.title;
  const moduleHref = new URL(spec.path.replace(/\.html$/i, ""), window.location.href);
  moduleHref.searchParams.set("embed", "1");
  moduleHref.searchParams.set("v", homeBoard === "CBSE" ? "6" : "4");
  iframe.src = moduleHref.href;
  iframe.loading = "lazy";
  wrap.appendChild(iframe);
  parent.appendChild(wrap);
}

/** @deprecated use y6MathsHtmlQuestPages */
function y6MathsCh1QuestPages(unit) {
  return y6MathsHtmlQuestPages(unit) && unit.id === "m1";
}

function cbseY4MathsReaderPagesForUnit(unit) {
  if (homeBoard !== "CBSE" || yearId !== "4" || studySubject !== "maths" || !unit) return null;
  if (unit.ncertJson === "ch1" && typeof window.cbseY4MathsCh1ReaderPages === "function") {
    return window.cbseY4MathsCh1ReaderPages(unit);
  }
  if (unit.ncertPdf === "ch2" && typeof window.cbseY4MathsCh2ReaderPages === "function") {
    return window.cbseY4MathsCh2ReaderPages(unit);
  }
  return null;
}

function cbseY4MathsPageLabelForUnit(unit, page) {
  if (!unit || !page) return null;
  if (unit.ncertJson === "ch1" && typeof window.cbseY4MathsCh1PageLabel === "function") {
    return window.cbseY4MathsCh1PageLabel(page);
  }
  if (unit.ncertPdf === "ch2" && typeof window.cbseY4MathsCh2PageLabel === "function") {
    return window.cbseY4MathsCh2PageLabel(page);
  }
  return null;
}

function readerPages(unit) {
  const cbsePages = cbseY4MathsReaderPagesForUnit(unit);
  if (cbsePages && cbsePages.length) return cbsePages;
  if (y6MathsHtmlQuestPages(unit)) {
    return [{ type: "quest" }];
  }
  const topics = unit.topics || [];
  if (y6MathsChapterPages(unit)) {
    const front = y6UnitFrontPages(unit);
    if (front.length) {
      return [...front, ...topics.map((topic, topicIdx) => ({ type: "topic", topic, topicIdx }))];
    }
  }
  return topics.map((topic, topicIdx) => ({ type: "topic", topic, topicIdx }));
}

function readerPageLabel(unit, page, pageIdx, pages) {
  const cbseLabel = cbseY4MathsPageLabelForUnit(unit, page);
  if (cbseLabel) return cbseLabel;
  if (page.type === "quest") {
    const spec = y6MathsQuestModuleSpec(unit);
    return spec ? spec.title.replace(/^Abhyaas\s+/, "") : "Quest";
  }
  if (page.type === "objectives") return "By the end of this chapter";
  if (page.type === "introduction") return "Introduction";
  if (page.type === "intro") return "Introduction";
  return `${page.topic.id} ${page.topic.title}`;
}

function appendReaderY6Objectives(parent, text) {
  const section = document.createElement("section");
  section.className = "reader-topic reader-chapter-objectives";
  const heading = document.createElement("h3");
  heading.textContent = "In this chapter, by the end you will be able to:";
  section.appendChild(heading);
  const lead = document.createElement("p");
  lead.className = "reader-objectives-lead";
  lead.textContent =
    "Use this checklist as you read. Each topic helps you build these skills.";
  section.appendChild(lead);
  const ul = document.createElement("ul");
  ul.className = "reader-objectives-list";
  String(text || "")
    .split(/\n+/)
    .map((line) => line.trim().replace(/^[-*•]\s*/, ""))
    .filter(Boolean)
    .forEach((line) => {
      const li = document.createElement("li");
      li.innerHTML = highlightStudyText(line);
      ul.appendChild(li);
    });
  section.appendChild(ul);
  parent.appendChild(section);
}

function appendReaderChapterNav(unit, parent, inLessonUnit) {
  const host = parent || readerDoc;
  const { prev, next } = siblingUnits(unit.id);
  const units = currentUnits();
  const index = units.findIndex((u) => u.id === unit.id);
  const nav = document.createElement("div");
  nav.className = "reader-chapter-nav" + (inLessonUnit ? " lesson-unit-nav" : "");
  if (inLessonUnit) {
    const status = document.createElement("p");
    status.className = "reader-topic-status";
    status.textContent = index >= 0
      ? `Chapter ${index + 1} of ${units.length}`
      : "Chapter";
    nav.appendChild(status);
    const actions = document.createElement("div");
    actions.className = "reader-topic-actions";
    if (prev) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ghost reader-prev-topic";
      btn.textContent = `Previous chapter: ${prev.title}`;
      btn.addEventListener("click", () => openReader(prev.id));
      actions.appendChild(btn);
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ghost reader-prev-topic";
      btn.disabled = true;
      btn.textContent = "Previous chapter";
      actions.appendChild(btn);
    }
    if (next) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "primary reader-next-topic";
      btn.textContent = `Next chapter: ${next.title}`;
      btn.addEventListener("click", () => openReader(next.id));
      actions.appendChild(btn);
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "primary reader-next-topic";
      btn.disabled = true;
      btn.textContent = "Next chapter";
      actions.appendChild(btn);
    }
    nav.appendChild(actions);
  } else {
    if (prev) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ghost";
      btn.textContent = `Previous chapter: ${prev.title}`;
      btn.addEventListener("click", () => openReader(prev.id));
      nav.appendChild(btn);
    } else {
      nav.appendChild(document.createElement("span"));
    }
    if (next) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "primary";
      btn.textContent = `Next chapter: ${next.title}`;
      btn.addEventListener("click", () => openReader(next.id));
      nav.appendChild(btn);
    }
  }
  host.appendChild(nav);
}

function openReader(uId, topicIndex) {
  const year = yearById(yearId);
  const unit = unitById(uId);
  if (!unit) return;
  unitId = uId;
  const pages = readerPages(unit);
  const idx = Math.max(0, Math.min(pages.length - 1, Number(topicIndex) || 0));
  const page = pages[idx];
  topicId =
    page && page.type === "topic"
      ? page.topic.id
      : page && page.type === "quest"
        ? "quest"
        : page && page.type === "cbse-page"
          ? "p" + (page.bookPage && page.bookPage.page_number != null ? page.bookPage.page_number : page.pageIdx + 1)
          : page && page.type === "cbse-pdf-page"
            ? "p" + (page.pageNumber != null ? page.pageNumber : "")
            : page && (page.type === "cbse-overview" || page.type === "cbse-pdf-overview")
              ? "overview"
              : page && (page.type === "intro" || page.type === "objectives" || page.type === "introduction")
              ? page.type
              : null;
  pageTitle.textContent = unit.title;
  eyebrow.textContent = `${studySubject === "maths" ? "Mathematics" : "Science"} · ${year ? year.title : "Year 8"}`;
  hideMainPanels();
  show(readerEl);
  renderYearPicks();
  renderSubjectPicks();
  renderModePicks();
  renderTree();
  renderReader(unit, idx);
  markLearningProgress("study");
}

function renderReader(unit, topicIndex) {
  if (!readerDoc) return;
  readerDoc.replaceChildren();

  const pages = readerPages(unit);
  const idx = Math.max(0, Math.min(pages.length - 1, Number(topicIndex) || 0));
  const page = pages[idx] || null;
  const topic = page && page.type === "topic" ? page.topic : null;
  const topicIdx = page && page.type === "topic" ? page.topicIdx : -1;
  const y6Quest = y6MathsQuestThemeActive(unit);
  const y6HtmlQuest = y6MathsHtmlQuestPages(unit);
  const cbseY4Read =
    page &&
    (page.type === "cbse-overview" ||
      page.type === "cbse-page" ||
      page.type === "cbse-pdf-overview" ||
      page.type === "cbse-pdf-page") &&
    homeBoard === "CBSE" &&
    yearId === "4";
  if (readerEl) readerEl.classList.toggle("cbse-y4-reader", !!cbseY4Read);

  let lesson = null;

  const hasIwb = window.mountInteractiveWhiteboard && !y6Quest && (
    (yearId === "6" && studySubject === "maths") ||
    (yearId === "7" && studySubject === "maths") ||
    (yearId === "7" && studySubject === "science") ||
    (yearId === "8" && studySubject === "maths") ||
    (yearId === "8" && studySubject === "science") ||
    (yearId === "9" && studySubject === "maths") ||
    (yearId === "9" && studySubject === "science")
  );
  const unifiedLesson = !!(lesson || hasIwb);
  setY6QuestBodyMode(y6Quest);
  if (readerEl) {
    readerEl.classList.toggle("lesson-unit-reader", unifiedLesson && !y6Quest);
    readerEl.classList.toggle("y6-maths-fullscreen", y6Quest);
    readerEl.classList.toggle("y6-maths-quest-theme", y6Quest);
  }
  if (y6Quest) updateBackdrop("");

  const header = document.createElement("header");
  header.className = "reader-header";
  const kicker = document.createElement("p");
  kicker.className = "reader-kicker";
  kicker.textContent = unit.strand || "Chapter";
  const title = document.createElement("h2");
  title.textContent = unit.title;
  header.append(kicker, title);
  const showLegacyIntroInHeader =
    unit.intro &&
    idx === 0 &&
    !(y6MathsChapterPages(unit) && y6UnitFrontPages(unit).length);
  if (showLegacyIntroInHeader) {
    const intro = document.createElement("div");
    intro.className = "reader-intro";
    appendFormattedStudy(intro, unit.intro);
    header.appendChild(intro);
  }

  const topicBar = document.createElement("div");
  topicBar.className = "reader-topic-bar";
  const topicStatus = document.createElement("p");
  topicStatus.className = "reader-topic-status";
  topicStatus.textContent = page
    ? `${readerPageLabel(unit, page, idx, pages)} · ${idx + 1} of ${pages.length}`
    : "No content";
  topicBar.appendChild(topicStatus);
  const topicActions = document.createElement("div");
  topicActions.className = "reader-topic-actions";
  if (page) {
    const prevPage = idx > 0 ? pages[idx - 1] : null;
    const nextPage = idx < pages.length - 1 ? pages[idx + 1] : null;
    const prevTopicBtn = document.createElement("button");
    prevTopicBtn.type = "button";
    prevTopicBtn.className = "ghost reader-prev-topic";
    prevTopicBtn.disabled = !prevPage;
    prevTopicBtn.textContent = prevPage
      ? `Previous: ${readerPageLabel(unit, prevPage, idx - 1, pages)}`
      : "Previous section";
    prevTopicBtn.addEventListener("click", () => {
      if (idx > 0) openReader(unit.id, idx - 1);
    });
    topicActions.appendChild(prevTopicBtn);

    const nextTopicBtn = document.createElement("button");
    nextTopicBtn.type = "button";
    nextTopicBtn.className = "primary reader-next-topic";
    nextTopicBtn.disabled = !nextPage;
    nextTopicBtn.textContent = nextPage
      ? `Next: ${readerPageLabel(unit, nextPage, idx + 1, pages)}`
      : "Next section";
    nextTopicBtn.addEventListener("click", () => {
      if (idx < pages.length - 1) openReader(unit.id, idx + 1);
    });
    topicActions.appendChild(nextTopicBtn);
  }
  topicBar.appendChild(topicActions);

  let notesRoot = readerDoc;
  let lessonWrap = null;

  if (lesson || hasIwb) {
    const wrap = document.createElement("div");
    wrap.className = "reader-with-lesson" + (unifiedLesson ? " lesson-unit" : "");
    wrap.style.position = "relative";
    const mainCol = document.createElement("div");
    mainCol.className = "reader-main";
    const side = document.createElement("aside");
    side.className = "reader-lesson";
    if (unifiedLesson) wrap.append(topicBar, mainCol, side);
    else wrap.append(mainCol, side);
    lessonWrap = wrap;
    readerDoc.appendChild(wrap);
    if (!unifiedLesson) mainCol.appendChild(topicBar);
    mainCol.appendChild(header);

    if (lesson) {
      appendChalkLesson(side, lesson);
    }
    if (hasIwb && page && page.type === "topic") {
      const topicId = topic && topic.id ? String(topic.id) : "";
      const topicKey = studySubject === "science"
        ? (topicId.indexOf(".") !== -1 ? `s${yearId}_${topicId}` : `s${yearId}_${unit.id}.${topicId}`)
        : `m${yearId}_${String(unit.id).replace("m", "")}.${topicId}`;
      const twoD = window.INTERACTIVE_WHITEBOARD_DATA && window.INTERACTIVE_WHITEBOARD_DATA[topicKey];
      const used3d = !(twoD && twoD.scenes) &&
        window.mountInteractive3D &&
        window.mountInteractive3D(side, unit.id, studySubject, yearId, topic && topic.id);
      if (!used3d) {
        window.mountInteractiveWhiteboard(side, unit.id, studySubject, yearId, topic && topic.id);
      }
    }

    if (!lesson && !hasIwb) {
      side.style.display = "none";
    } else {
      side.style.display = "block";
    }

    notesRoot = mainCol;
    updateBackdrop("");
  } else if (y6Quest) {
    const shell = document.createElement("div");
    shell.className = "y6-quest-shell";
    appendY6ChapterTopNav(shell, unit);
    if (!y6HtmlQuest) {
      shell.appendChild(buildY6SectionTopNav(unit, page, idx, pages));
    }
    const body = document.createElement("div");
    body.className = "y6-quest-body";
    shell.appendChild(body);
    readerDoc.appendChild(shell);
    notesRoot = body;
  } else {
    readerDoc.appendChild(topicBar);
    readerDoc.appendChild(header);
  }

  if (y6Quest && y6HtmlQuest && page && page.type === "quest") {
    appendY6MathsQuestModule(notesRoot, unit, topic);
  } else if (y6Quest && page && page.type === "objectives") {
    appendY6GlassObjectives(
      notesRoot,
      page.text || y6ChapterObjectives(unit),
    );
  } else if (y6Quest && page && (page.type === "introduction" || page.type === "intro")) {
    appendY6GlassIntroduction(
      notesRoot,
      page.text ||
        y6ChapterIntroduction(unit) ||
        unit.chapterIntro ||
        unit.intro ||
        "",
    );
  } else if (y6Quest && topic) {
    appendY6GlassTopic(notesRoot, topic);
  } else if (page && page.type === "objectives") {
    appendReaderY6Objectives(notesRoot, page.text || y6ChapterObjectives(unit));
    appendY6MathsCh1LessonCta(notesRoot, unit);
  } else if (page && (page.type === "introduction" || page.type === "intro")) {
    const section = document.createElement("section");
    section.className = "reader-topic reader-chapter-intro";
    const heading = document.createElement("h3");
    heading.textContent = "Introduction";
    section.appendChild(heading);
    appendFormattedStudy(
      section,
      page.text || y6ChapterIntroduction(unit) || unit.chapterIntro || unit.intro || "",
    );
    notesRoot.appendChild(section);
  } else if (
    page &&
    (page.type === "cbse-overview" || page.type === "cbse-page") &&
    typeof window.renderCbseY4MathsCh1ReaderContent === "function"
  ) {
    window.renderCbseY4MathsCh1ReaderContent(notesRoot, page);
  } else if (
    page &&
    (page.type === "cbse-pdf-overview" || page.type === "cbse-pdf-page") &&
    typeof window.renderCbseY4MathsCh2ReaderContent === "function"
  ) {
    window.renderCbseY4MathsCh2ReaderContent(notesRoot, page);
  } else if (topic) {
    if (studySubject !== "maths") {
      const chapterArt = readerArtFor(unit, null);
      const art = topicExplainArt(topic.id);
      if (unifiedLesson) {
        /* Board already shows the topic visual. */
      } else if (art && art.src) {
        appendReaderFigure(notesRoot, art.src, art.alt, art.caption);
      } else {
        const vis = topicDiagram(topic.id);
        if (vis) appendReaderDiagram(notesRoot, vis);
        else if (chapterArt && topicIdx === 0 && !hasIwb) {
          appendReaderFigure(notesRoot, chapterArt.src, chapterArt.alt, chapterArt.caption);
        }
      }
      const section = document.createElement("section");
      section.className = "reader-topic";
      const heading = document.createElement("h3");
      heading.textContent = `${topic.id} ${topic.title}`;
      section.appendChild(heading);
      appendReaderProse(section, topic);
      notesRoot.appendChild(section);
    } else {
      const y7 = y7ChapterArt(unit);
      if (y7 && topicIdx === 0 && !lesson && !hasIwb) {
        appendReaderFigure(notesRoot, y7.explain, unit.title, y7.caption);
        updateBackdrop(y7.explain);
      }
      const section = document.createElement("section");
      section.className = "reader-topic";
      const heading = document.createElement("h3");
      heading.textContent = `${topic.id} ${topic.title}`;
      section.appendChild(heading);
      appendReaderProse(section, topic);
      notesRoot.appendChild(section);
    }
  }

  if (unifiedLesson && lessonWrap) appendReaderChapterNav(unit, lessonWrap, true);
  else if (!y6Quest) appendReaderChapterNav(unit, readerDoc);
  finishReader();
}

function setupReaderPaging(mainCol) {
  if (!mainCol || mainCol.querySelector(".reader-page-stage")) return;

  function collectBlocks(node, out) {
    Array.from(node.children).forEach((el) => {
      if (el.classList.contains("reader-topic") || el.classList.contains("reader-prose") || el.tagName === "SECTION") {
        collectBlocks(el, out);
      } else {
        out.push(el);
      }
    });
  }

  const kids = [];
  collectBlocks(mainCol, kids);
  if (!kids.length) return;

  const stage = document.createElement("div");
  stage.className = "reader-page-stage";
  kids.forEach((el) => stage.appendChild(el));
  mainCol.innerHTML = "";
  mainCol.appendChild(stage);

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "reader-flip-prev";
  prevBtn.setAttribute("aria-label", "Previous page");
  prevBtn.innerHTML = "<span aria-hidden=\"true\">‹</span>";

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "reader-flip-next";
  nextBtn.setAttribute("aria-label", "Next page");
  nextBtn.innerHTML = "<span aria-hidden=\"true\">›</span>";

  mainCol.append(prevBtn, nextBtn);

  let page = 0;
  let pages = 1;

  function showPage() {
    Array.from(stage.children).forEach((el) => {
      el.hidden = Number(el.dataset.readerPage) !== page;
    });
    const many = pages > 1;
    prevBtn.hidden = !many;
    nextBtn.hidden = !many;
    prevBtn.disabled = page <= 0;
    nextBtn.disabled = page >= pages - 1;
  }

  function assignPages() {
    const items = Array.from(stage.children);
    items.forEach((el) => {
      el.hidden = false;
    });
    const limit = Math.max(180, stage.clientHeight || mainCol.clientHeight);
    let p = 0;
    let used = 0;
    items.forEach((el) => {
      const style = window.getComputedStyle(el);
      const h = el.getBoundingClientRect().height +
        parseFloat(style.marginTop || 0) +
        parseFloat(style.marginBottom || 0);
      if (used > 0 && used + h > limit) {
        p += 1;
        used = 0;
      }
      el.dataset.readerPage = String(p);
      used += h;
    });
    pages = p + 1;
    if (page > pages - 1) page = Math.max(0, pages - 1);
    showPage();
  }

  nextBtn.addEventListener("click", () => {
    if (page < pages - 1) {
      page += 1;
      showPage();
    }
  });
  prevBtn.addEventListener("click", () => {
    if (page > 0) {
      page -= 1;
      showPage();
    }
  });

  requestAnimationFrame(() => requestAnimationFrame(assignPages));
  window.addEventListener("resize", assignPages);
}

function finishReader() {
  const mainCol = readerEl && readerEl.querySelector(".reader-main");
  if (mainCol) setupReaderPaging(mainCol);

  if (readerEl) readerEl.scrollTop = 0;
  const main = document.querySelector("main.content");
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
  const panel = readerEl && readerEl.closest ? readerEl.closest(".panel") : readerEl;
  if (panel) {
    panel.style.animation = "none";
    void panel.offsetWidth;
    panel.style.animation = "";
  }
}

function topicDeck(topic) {
  return (topic.cards || []).map((card, i) => ({
    ...card,
    _topicId: topic.id,
    _topicIndex: i,
    _topicTitle: topic.title,
  }));
}

function showStudyMedia(unit, topic) {
  if (studySubject === "maths") {
    if (topicShowcase) hide(topicShowcase);
    updateBackdrop(SUBJECT_VISUALS.maths.src);
    return;
  }
  if (topic) {
    const art = topicExplainArt(topic.id);
    if (art && art.src && topicShowcase) {
      show(topicShowcase);
      updateTopicMedia({
        ...art,
        badge: topic.title,
        caption: art.caption || topic.title,
        source: "Topic illustration",
      });
      if (showcaseTag) showcaseTag.textContent = unit.strand || "Topic";
      if (showcaseSource) showcaseSource.textContent = "Topic illustration";
      return;
    }
    if (topicShowcase) hide(topicShowcase);
    const cover = chapterImage(unit);
    if (cover) updateBackdrop(cover.src);
    return;
  }

  const imgData = readerArtFor(unit, null) || chapterImage(unit);

  if (imgData && topicShowcase) {
    show(topicShowcase);
    updateTopicMedia({
      ...imgData,
      badge: topic ? topic.title : unit.title,
      caption: topic ? topic.title : unit.intro || imgData.caption,
    });
    if (showcaseTag) showcaseTag.textContent = unit.strand || "Chapter";
    if (showcaseSource) {
      showcaseSource.textContent = studySubject === "maths" ? "Mathematics chapter visual" : "Chapter visual";
    }
  } else if (topicShowcase) {
    hide(topicShowcase);
    if (studySubject === "maths") updateBackdrop("");
  }
}

function openTopic(uId, tId) {
  const year = yearById(yearId);
  const unit = unitById(uId);
  const topic = unit && topicById(unit, tId);
  if (!unit || !topic) return;
  unitId = uId;
  topicId = tId;
  studyDeck = topicDeck(topic);
  cardIndex = 0;
  pageTitle.textContent = `${topic.id} ${topic.title}`;
  eyebrow.textContent = `${studySubject === "maths" ? "Mathematics" : "Science"} · ${unit.title}`;
  hide(welcomeEl);
  hide(readerEl);
  hideQuizPanels();
  show(studyEl);
  renderYearPicks();
  renderSubjectPicks();
  renderModePicks();
  renderTree();
  showStudyMedia(unit, topic);
  renderCard();
  markLearningProgress("cards");
}

function openChapter(uId) {
  const year = yearById(yearId);
  const unit = unitById(uId);
  if (!unit) return;
  unitId = uId;
  topicId = null;
  studyDeck = chapterDeck(unit);
  cardIndex = 0;
  pageTitle.textContent = unit.title;
  eyebrow.textContent = `${studySubject === "maths" ? "Mathematics" : "Science"} · ${year.title}`;
  hide(welcomeEl);
  hide(readerEl);
  hideQuizPanels();
  show(studyEl);
  renderYearPicks();
  renderSubjectPicks();
  renderModePicks();
  renderTree();
  showStudyMedia(unit, null);
  renderCard();
  markLearningProgress("cards");
}

function renderCard() {
  const unit = unitById(unitId);
  const card = studyDeck[cardIndex];
  if (!unit || !card) return;
  const last = cardIndex === studyDeck.length - 1;

  faceKicker.textContent = card.kind || "Key idea";
  frontText.replaceChildren();
  appendFormattedStudy(frontText, card.front, true);
  const long = elaboratedBody(card._topicId, card._topicIndex, card.back);
  setNote(backText, long);

  const art = studySubject === "maths" ? null : topicExplainArt(card._topicId);
  const vis = studySubject === "maths" ? null : topicDiagram(card._topicId);
  if (art && art.src) {
    visualEl.innerHTML = "";
    const img = document.createElement("img");
    img.src = art.src;
    img.alt = art.alt || card._topicTitle || unit.title;
    img.className = "flash-art";
    visualEl.appendChild(img);
    visualEl.removeAttribute("hidden");
    visualEl.classList.remove("hidden");
    visualEl.setAttribute("aria-label", art.alt || "Illustration");
  } else if (vis) {
    visualEl.innerHTML = vis.svg;
    visualEl.removeAttribute("hidden");
    visualEl.classList.remove("hidden");
    visualEl.setAttribute("aria-label", vis.alt || "Diagram");
  } else {
    visualEl.innerHTML = "";
    visualEl.classList.add("hidden");
    visualEl.setAttribute("hidden", "");
  }
  topicLabel.textContent = card._topicTitle ? `${card._topicId} ${card._topicTitle}` : unit.title;
  cardProgress.textContent = `Card ${cardIndex + 1} of ${studyDeck.length}`;
  barFill.style.width = `${((cardIndex + 1) / studyDeck.length) * 100}%`;
  prevBtn.disabled = cardIndex === 0;
  nextBtn.disabled = last;
  nextBtn.textContent = last ? "Last card" : "Next card";

  dots.innerHTML = "";
  if (studyDeck.length <= 24) {
    studyDeck.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = i === cardIndex ? "on" : "";
      d.setAttribute("aria-label", `Card ${i + 1}`);
      d.addEventListener("click", (e) => {
        e.stopPropagation();
        cardIndex = i;
        renderCard();
      });
      dots.appendChild(d);
    });
  }
}

prevBtn.addEventListener("click", () => {
  if (cardIndex === 0) return;
  cardIndex -= 1;
  renderCard();
});

nextBtn.addEventListener("click", () => {
  if (cardIndex >= studyDeck.length - 1) return;
  cardIndex += 1;
  renderCard();
});

document.getElementById("homeBtn").addEventListener("click", () => {
  goToYearHome();
});

quizPrevBtn.addEventListener("click", () => {
  saveQuizAnswer();
  if (quizIndex === 0) return;
  quizIndex -= 1;
  renderQuizCard();
});

if (symbolBar) {
  symbolBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mousedown", (event) => event.preventDefault());
    button.addEventListener("click", () => insertQuizSymbol(button.dataset.symbol || ""));
  });
}

quizNextBtn.addEventListener("click", () => {
  if (examKind === "mental") {
    advanceMental();
    return;
  }
  saveQuizAnswer();
  if (quizIndex >= quizItems.length - 1) {
    finishQuiz();
    return;
  }
  quizIndex += 1;
  renderQuizCard();
});

if (quizAllTopicsBtn) {
  quizAllTopicsBtn.addEventListener("click", () => {
    currentUnits().forEach((unit) => quizSelectedUnits.add(unit.id));
    hideQuizPickerError();
    renderQuizChapterList();
  });
}
[quizStartBtn, quizStartTopBtn].forEach((button) => {
  if (!button) return;
  button.addEventListener("click", beginQuickTest);
});

if (mockStartBtn) {
  mockStartBtn.addEventListener("click", () => startMock(studySubject));
}
if (mentalStartBtn) {
  mentalStartBtn.addEventListener("click", startMentalCountdown);
}
if (leaveOkBtn) leaveOkBtn.addEventListener("click", () => closeLeave(true));
if (leaveCancelBtn) leaveCancelBtn.addEventListener("click", () => closeLeave(false));

function retakeCurrent() {
  if (examKind === "mental") {
    showMentalBriefing();
    return;
  }
  replaySavedQuiz();
}

document.getElementById("reviewBtn").addEventListener("click", renderReview);
document.getElementById("reviewBackBtn").addEventListener("click", () => {
  hideMainPanels();
  show(quizResultEl);
});
document.getElementById("retakeBtn").addEventListener("click", () => {
  retakeCurrent();
});
document.getElementById("reviewRetakeBtn").addEventListener("click", () => {
  retakeCurrent();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && leaveDialog && !leaveDialog.hasAttribute("hidden")) {
    closeLeave(false);
    return;
  }
  if (e.key === "Escape" && imageModal && !imageModal.hasAttribute("hidden")) {
    closeModal();
    return;
  }
  if (!quizEl.hasAttribute("hidden") && e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    quizNextBtn.click();
    return;
  }
  if (studyEl.hasAttribute("hidden")) return;
  if (e.key === "ArrowRight") nextBtn.click();
  else if (e.key === "ArrowLeft") prevBtn.click();
});

function startStudyApp() {
  if (window.__studyAppStarted) return;
  window.__studyAppStarted = true;
  bindGogoMetro();
  bindParentHome();
  const requestedYear = new URLSearchParams(window.location.search).get("year");
  if (requestedYear && yearById(requestedYear)) {
    const url = new URL(window.location.href);
    url.searchParams.delete("year");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    homeBoard = requestedYear === "11plus" ? null : "IGCSE";
    selectYear(requestedYear);
    return;
  }
  showParentDashboard();
  renderYearPicks();
  renderModePicks();
  renderSubjectPicks();
  renderTree();
}

const navHome = document.getElementById("navHome");
const navLearning = document.getElementById("navLearning");
const navProgress = document.getElementById("navProgress");
const navResources = document.getElementById("navResources");
const topSearch = document.getElementById("topSearch");

function markTopNav(id) {
  [navHome, navLearning, navProgress, navResources].forEach((btn) => {
    if (btn) btn.classList.toggle("on", btn.id === id);
  });
}

if (navHome) {
  navHome.addEventListener("click", () => {
    markTopNav("navHome");
    document.getElementById("homeBtn").click();
  });
}
const brandHome = document.getElementById("brandHome");
if (brandHome && brandHome.tagName === "BUTTON") {
  brandHome.addEventListener("click", () => {
    returnToParentHome();
  });
}
const headerStatsBtn = document.getElementById("headerStatsBtn");
if (headerStatsBtn) {
  headerStatsBtn.addEventListener("click", () => {
    if (!yearId) {
      renderStatsNeedYear();
      return;
    }
    selectStudySubject("stats");
  });
}
if (navLearning) {
  navLearning.addEventListener("click", () => {
    markTopNav("navLearning");
    if (yearId && studySubject) selectMode("study");
  });
}
if (navProgress) {
  navProgress.addEventListener("click", () => {
    markTopNav("navProgress");
    if (headerStatsBtn) headerStatsBtn.click();
  });
}
if (navResources) {
  navResources.addEventListener("click", () => {
    markTopNav("navResources");
    if (yearId && studySubject && studySubject !== "mental") selectMode("cards");
  });
}
if (topSearch) {
  topSearch.addEventListener("input", () => {
    const q = topSearch.value.trim().toLowerCase();
    document.querySelectorAll(".choice-tile").forEach((tile) => {
      const hay = tile.textContent.toLowerCase();
      tile.style.display = !q || hay.includes(q) ? "" : "none";
    });
  });
}

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;
  if (!event.data || event.data.type !== "mental-quest-back") return;
  if (readerEl && !readerEl.hasAttribute("hidden")) closeMentalQuestReader();
});

window.startStudyApp = startStudyApp;
window.openFormalCurriculum = openFormalCurriculum;
window.showParentDashboard = showParentDashboard;
window.renderParentDashboard = renderParentDashboard;
