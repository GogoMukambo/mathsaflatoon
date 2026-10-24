(function () {
  function mountInteractiveWhiteboard(container, unitId, studySubject, yearId, topicId) {
    const DATA = window.INTERACTIVE_WHITEBOARD_DATA;
    if (!container || !DATA) return;

    // Filter topics based on unitId, subject and yearId
    let chapterPrefix = "5.";
    if (unitId) {
      if (studySubject === "science") {
        chapterPrefix = `s${yearId}_${unitId}.`;
      } else {
        chapterPrefix = `m${yearId}_${unitId.replace("m", "")}.`;
      }
    }

    const availableTopics = Object.keys(DATA)
      .filter(k => k.startsWith(chapterPrefix))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    if (availableTopics.length === 0) return;

    const wanted = topicId ? String(topicId) : "";
    let currentTopicKey =
      availableTopics.find((k) => wanted && (k === wanted || k.endsWith("." + wanted) || k.endsWith("_" + wanted))) ||
      availableTopics[0];
    let currentSubtopicId = DATA[currentTopicKey].subtopics[0].id;
    let currentStep = 0;
    let isPlaying = false;
    let playTimer = null;
    const HOLD_MS = 3000;

    const zoomFit = true;
    const wrap = document.createElement("section");
    wrap.className = "iwb-container iwb-zoom-fit iwb-autoplay";
    wrap.setAttribute("aria-label", "Interactive Whiteboard");
    const displayChapter = unitId ? String(unitId).replace("m", "") : "";

    wrap.innerHTML = `
      <div class="iwb-header">
        <div class="iwb-header-title">
          <span class="iwb-icon">${studySubject === "science" ? "🔬" : "📐"}</span>
          <div>
            <h4 class="iwb-title">Interactive Whiteboard Explanation</h4>
            <p class="iwb-subtitle">Chapter ${displayChapter} · Step-by-step visual proofs</p>
          </div>
        </div>
        <div class="iwb-tabs hidden" hidden role="tablist"></div>
      </div>

      <div class="iwb-subtopic-bar">
        <div class="iwb-subtopic-pills" id="iwbSubtopics"></div>
        <span class="iwb-badge" id="iwbCurrentBadge">Topic</span>
      </div>

      <div class="iwb-workbench">
        <div class="iwb-board-column">
          <div class="iwb-surface">
            <svg id="iwbCanvas" class="iwb-canvas" viewBox="0 0 800 500" width="800" height="500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <marker id="iwb-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155" />
                </marker>
                <marker id="iwb-arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444" />
                </marker>
                <filter id="iwb-marker-roughness" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
                </filter>
              </defs>
              <g id="iwbImageLayer"></g>
              <g id="iwbDrawingLayer" filter="url(#iwb-marker-roughness)"></g>
            </svg>
            <div id="iwbDrawingIndicator" class="iwb-drawing-indicator">
              <span class="iwb-pulse-dot"></span> Drawing marker active
            </div>
          </div>

          <div class="iwb-controls">
            <div class="iwb-btn-group">
              <button type="button" id="iwbBtnPrev" class="iwb-ctrl-btn">◀ Previous</button>
              <button type="button" id="iwbBtnPlay" class="iwb-play-btn">
                <span id="iwbPlayIcon">▶</span> <span id="iwbPlayLabel">Play Step</span>
              </button>
              <button type="button" id="iwbBtnNext" class="iwb-ctrl-btn">Next ▶</button>
              <button type="button" id="iwbBtnRestart" class="iwb-icon-btn" title="Restart">↺</button>
            </div>
            <div class="iwb-step-tracker">
              <span class="iwb-tracker-label">STEP PROGRESS</span>
              <div class="iwb-dots" id="iwbDots"></div>
              <span class="iwb-counter" id="iwbCounter">1 / 3</span>
            </div>
          </div>
        </div>

        <div class="iwb-side-column">
          <div class="iwb-card iwb-teacher-card">
            <div class="iwb-card-header">
              <span class="iwb-card-avatar">👨‍🏫</span>
              <div>
                <h5 class="iwb-card-title" id="iwbTeacherTitle">Teacher's Explanation</h5>
                <p class="iwb-card-sub" id="iwbTeacherSub">Step-by-step breakdown</p>
              </div>
            </div>
            <div class="iwb-narration-box">
              <p id="iwbNarration" class="iwb-narration-text">Loading...</p>
            </div>
            <div class="iwb-rule-box">
              <span class="iwb-rule-label">💡 KEY RULE TO REMEMBER</span>
              <p id="iwbRuleText" class="iwb-rule-text"></p>
            </div>
            <div class="iwb-practice-box">
              <span class="iwb-practice-label">✍️ PRACTICE CHECK</span>
              <p id="iwbPracticeQ" class="iwb-practice-q"></p>
              <div class="iwb-practice-actions">
                <button type="button" id="iwbPracticeBtn" class="iwb-answer-btn">Show Answer</button>
                <span id="iwbPracticeA" class="iwb-practice-a hidden"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(wrap);

    const tabs = wrap.querySelectorAll(".iwb-tab");
    const subtopicsContainer = wrap.querySelector("#iwbSubtopics");
    const badgeText = wrap.querySelector("#iwbCurrentBadge");
    const drawingLayer = wrap.querySelector("#iwbDrawingLayer");
    const imageLayer = wrap.querySelector("#iwbImageLayer");
    const drawingIndicator = wrap.querySelector("#iwbDrawingIndicator");
    const btnPrev = wrap.querySelector("#iwbBtnPrev");
    const btnNext = wrap.querySelector("#iwbBtnNext");
    const btnPlay = wrap.querySelector("#iwbBtnPlay");
    const btnRestart = wrap.querySelector("#iwbBtnRestart");
    const playIcon = wrap.querySelector("#iwbPlayIcon");
    const playLabel = wrap.querySelector("#iwbPlayLabel");
    const dotsContainer = wrap.querySelector("#iwbDots");
    const counterText = wrap.querySelector("#iwbCounter");
    const teacherTitle = wrap.querySelector("#iwbTeacherTitle");
    const teacherSub = wrap.querySelector("#iwbTeacherSub");
    const narrationText = wrap.querySelector("#iwbNarration");
    const ruleText = wrap.querySelector("#iwbRuleText");
    const practiceQ = wrap.querySelector("#iwbPracticeQ");
    const practiceA = wrap.querySelector("#iwbPracticeA");
    const practiceBtn = wrap.querySelector("#iwbPracticeBtn");
    const practiceBox = wrap.querySelector(".iwb-practice-box");
    const svgCanvas = wrap.querySelector("#iwbCanvas");

    function fitBoardView() {
      if (!zoomFit || !svgCanvas) {
        if (svgCanvas) svgCanvas.setAttribute("viewBox", "0 0 800 500");
        return;
      }
      try {
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        function acc(node) {
          if (!node || !node.getBBox) return;
          const b = node.getBBox();
          if (!b.width && !b.height) return;
          minX = Math.min(minX, b.x);
          minY = Math.min(minY, b.y);
          maxX = Math.max(maxX, b.x + b.width);
          maxY = Math.max(maxY, b.y + b.height);
        }
        // Year 7 Science Chapter 2 diagrams are label-heavy; crop in so the
        // picture text is larger without changing every other chapter.
        if (String(currentTopicKey || "").startsWith("s7_2")) {
          svgCanvas.setAttribute("viewBox", "58 4 684 412");
          return;
        }
        acc(imageLayer);
        acc(drawingLayer);
        if (!isFinite(minX) || maxX - minX < 40 || maxY - minY < 40) {
          svgCanvas.setAttribute("viewBox", "40 20 720 460");
          return;
        }
        const padX = Math.max(12, (maxX - minX) * 0.04);
        const padY = Math.max(12, (maxY - minY) * 0.04);
        svgCanvas.setAttribute(
          "viewBox",
          [minX - padX, minY - padY, maxX - minX + padX * 2, maxY - minY + padY * 2].join(" ")
        );
      } catch (err) {
        svgCanvas.setAttribute("viewBox", "40 20 720 460");
      }
    }

    function studyPractice(topicKey) {
      const match = /^([ms])(\d+)_(.+)$/.exec(topicKey);
      if (!match) return null;
      let units = [];
      if (match[1] === "m") {
        const bank = match[2] === "6" ? window.MATHS_Y6 : match[2] === "7" ? window.MATHS_Y7 : match[2] === "9" ? window.MATHS_Y9 : window.MATHS_Y8;
        units = (bank && bank.units) || [];
      } else {
        const studyYear = (window.STUDY_YEARS || []).find((year) => year.id === match[2]);
        units = (studyYear && studyYear.units) || [];
      }
      const topicId = match[3];
      for (let u = 0; u < units.length; u++) {
        const topics = units[u].topics || [];
        for (let t = 0; t < topics.length; t++) {
          if (topics[t].id !== topicId) continue;
          const cards = topics[t].cards || [];
          const check = cards.find((card) => card.kind === "Check") || cards[cards.length - 1];
          if (check && check.front) return { q: check.front, a: check.back || "" };
        }
      }
      return null;
    }

    function practiceForStep(sceneData) {
      const ownQ = (sceneData.quizQ || "").trim();
      if (ownQ) return { q: ownQ, a: (sceneData.quizA || "").trim() };
      const scenes = DATA[currentTopicKey].scenes[currentSubtopicId] || [];
      for (let i = scenes.length - 1; i >= 0; i--) {
        const q = (scenes[i].quizQ || "").trim();
        if (q) return { q: q, a: (scenes[i].quizA || "").trim() };
      }
      return studyPractice(currentTopicKey);
    }

    function stopAutoPlay() {
      if (playTimer) {
        clearTimeout(playTimer);
        playTimer = null;
      }
      isPlaying = false;
      if (playIcon) playIcon.textContent = "▶";
      if (playLabel) playLabel.textContent = "Play Step";
    }

    function scheduleAdvance() {
      if (playTimer) {
        clearTimeout(playTimer);
        playTimer = null;
      }
      playTimer = setTimeout(advanceBoard, HOLD_MS);
    }

    function advanceBoard() {
      const scenes = DATA[currentTopicKey].scenes[currentSubtopicId] || [];
      if (currentStep < scenes.length - 1) {
        currentStep += 1;
        renderCurrentStep();
        scheduleAdvance();
        return;
      }
      const subs = DATA[currentTopicKey].subtopics || [];
      const idx = subs.findIndex((sub) => sub.id === currentSubtopicId);
      if (idx >= 0 && idx < subs.length - 1) {
        switchSubtopic(subs[idx + 1].id);
        return;
      }
      isPlaying = false;
    }

    function startAutoPlay() {
      isPlaying = true;
      if (playIcon) playIcon.textContent = "⏸";
      if (playLabel) playLabel.textContent = "Pause";
      renderCurrentStep();
      scheduleAdvance();
    }

    function toggleAutoPlay() {
      if (isPlaying) stopAutoPlay();
      else startAutoPlay();
    }

    function switchTopic(topicKey) {
      currentTopicKey = topicKey;
      const topicData = DATA[topicKey];
      tabs.forEach((tab) => {
        tab.classList.toggle("on", tab.getAttribute("data-topic") === topicKey);
      });

      badgeText.textContent = topicData.title;

      subtopicsContainer.innerHTML = "";
      topicData.subtopics.forEach((sub, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "iwb-pill-btn" + (idx === 0 ? " on" : "");
        btn.textContent = sub.label;
        btn.addEventListener("click", () => {
          stopAutoPlay();
          switchSubtopic(sub.id, false);
        });
        subtopicsContainer.appendChild(btn);
      });

      switchSubtopic(topicData.subtopics[0].id, true);
    }

    function switchSubtopic(subId, shouldAutoPlay = false) {
      currentSubtopicId = subId;
      currentStep = 0;

      const pills = subtopicsContainer.querySelectorAll(".iwb-pill-btn");
      const topicData = DATA[currentTopicKey];
      topicData.subtopics.forEach((sub, idx) => {
        if (pills[idx]) pills[idx].classList.toggle("on", sub.id === subId);
      });

      if (shouldAutoPlay) {
        startAutoPlay();
      } else {
        stopAutoPlay();
        renderCurrentStep();
      }
    }

    function renderCurrentStep() {
      const scenes = DATA[currentTopicKey].scenes[currentSubtopicId];
      const maxSteps = scenes.length;
      if (currentStep >= maxSteps) currentStep = maxSteps - 1;
      if (currentStep < 0) currentStep = 0;

      const sceneData = scenes[currentStep];

      teacherTitle.textContent = DATA[currentTopicKey].title;
      teacherSub.textContent = `Step ${currentStep + 1} of ${maxSteps}`;
      narrationText.textContent = `"${sceneData.narration}"`;
      ruleText.textContent = sceneData.rule;
      const practice = practiceForStep(sceneData);
      if (!practice || !practice.q) {
        practiceBox.hidden = true;
      } else {
        practiceBox.hidden = false;
        if (practiceQ.textContent !== practice.q) {
          practiceQ.textContent = practice.q;
          practiceA.textContent = practice.a;
          practiceA.classList.add("hidden");
          practiceBtn.textContent = "Show Answer";
        }
        practiceBtn.hidden = !practice.a;
      }

      btnPrev.disabled = currentStep === 0;
      btnNext.disabled = currentStep === maxSteps - 1;
      counterText.textContent = `${currentStep + 1} / ${maxSteps}`;

      dotsContainer.innerHTML = "";
      for (let i = 0; i < maxSteps; i++) {
        const dot = document.createElement("span");
        dot.className = "iwb-dot" + (i === currentStep ? " on" : i < currentStep ? " done" : "");
        dotsContainer.appendChild(dot);
      }

      drawingLayer.innerHTML = "";
      if (imageLayer) imageLayer.innerHTML = "";
      if (String(currentTopicKey || "").startsWith("s7_2")) {
        drawingLayer.removeAttribute("filter");
      } else {
        drawingLayer.setAttribute("filter", "url(#iwb-marker-roughness)");
      }
      drawingIndicator.style.opacity = "1";

      let startStep = 0;
      for (let s = 0; s <= currentStep; s++) {
        if (scenes[s].clear) startStep = s;
      }

      for (let s = startStep; s <= currentStep; s++) {
        const stepElements = scenes[s].elements || [];
        const isCurrentActiveStep = s === currentStep;

        stepElements.forEach((el) => {
          if (el.type === "line" || el.type === "path" || el.type === "arc") {
            const node = document.createElementNS("http://www.w3.org/2000/svg", "path");
            node.setAttribute("d", el.d);
            node.setAttribute("stroke", el.stroke);
            node.setAttribute("stroke-width", el.width || 3);
            node.setAttribute("fill", el.fill || "none");
            node.setAttribute("class", "iwb-path");
            const dash = el.dash || el.strokeDasharray;
            if (dash) node.setAttribute("stroke-dasharray", Array.isArray(dash) ? dash.join(" ") : String(dash));
            drawingLayer.appendChild(node);

            if (isCurrentActiveStep && node.getTotalLength && !dash) {
              const length = node.getTotalLength() || 600;
              node.style.strokeDasharray = String(length);
              node.style.strokeDashoffset = String(length);
              node.getBoundingClientRect();
              node.style.transition = "stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1)";
              node.style.strokeDashoffset = "0";
            }
          } else if (el.type === "point") {
            const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            node.setAttribute("cx", String(el.cx));
            node.setAttribute("cy", String(el.cy));
            node.setAttribute("r", String(el.r || 5));
            node.setAttribute("fill", el.fill || "#0f172a");
            node.setAttribute("class", "iwb-point" + (isCurrentActiveStep ? " pop" : ""));
            drawingLayer.appendChild(node);
            } else if (el.type === "circle") {
              const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
              node.setAttribute("cx", String(el.cx));
              node.setAttribute("cy", String(el.cy));
              node.setAttribute("r", String(el.r));
              node.setAttribute("stroke", el.stroke);
              node.setAttribute("stroke-width", String(el.width || 2));
              node.setAttribute("fill", el.fill || "none");
              if (el.class) node.setAttribute("class", el.class);
              drawingLayer.appendChild(node);
            } else if (el.type === "rect") {
              const node = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              node.setAttribute("x", String(el.x));
              node.setAttribute("y", String(el.y));
              node.setAttribute("width", String(el.width));
              node.setAttribute("height", String(el.height));
              if (el.rx) node.setAttribute("rx", String(el.rx));
              if (el.stroke) node.setAttribute("stroke", el.stroke);
              if (el.strokeWidth) node.setAttribute("stroke-width", String(el.strokeWidth));
              const dash = el.dash || el.strokeDasharray;
              if (dash) node.setAttribute("stroke-dasharray", Array.isArray(dash) ? dash.join(" ") : String(dash));
              node.setAttribute("fill", el.fill || "none");
              if (el.class) node.setAttribute("class", el.class);
              // A rect that covers the whole board is the backdrop, so it has to sit
              // under the illustration layer instead of painting over it.
              const coversBoard =
                !el.stroke &&
                Number(el.x || 0) <= 0 &&
                Number(el.y || 0) <= 0 &&
                Number(el.width) >= 800 &&
                Number(el.height) >= 500;
              (coversBoard && imageLayer ? imageLayer : drawingLayer).appendChild(node);
            } else if (el.type === "image") {
              let href = el.src || el.href || el.url || "";
              if (href && !/^(https?:|data:|blob:|\/)/i.test(href)) {
                href = "/" + href.replace(/^\.\//, "");
              }
              const node = document.createElementNS("http://www.w3.org/2000/svg", "image");
              let imgX = Number(el.x || 0);
              let imgY = Number(el.y || 0);
              let imgW = Number(el.width || 400);
              let imgH = Number(el.height || 300);
              if (String(currentTopicKey || "").startsWith("s7_2")) {
                const scale = 1.18;
                const cx = imgX + imgW / 2;
                const cy = imgY + imgH / 2;
                imgW = Math.min(760, imgW * scale);
                imgH = Math.min(430, imgH * scale);
                imgX = Math.max(20, cx - imgW / 2);
                imgY = Math.max(4, cy - imgH / 2 - 8);
              }
              node.setAttribute("x", String(imgX));
              node.setAttribute("y", String(imgY));
              node.setAttribute("width", String(imgW));
              node.setAttribute("height", String(imgH));
              node.setAttribute("preserveAspectRatio", el.fit || "xMidYMid meet");
              node.setAttribute("href", href);
              node.setAttributeNS("http://www.w3.org/1999/xlink", "href", href);
              if (el.opacity != null) node.setAttribute("opacity", String(el.opacity));
              node.addEventListener("load", fitBoardView);
              (imageLayer || drawingLayer).appendChild(node);
            } else if (el.type === "text") {
            const node = document.createElementNS("http://www.w3.org/2000/svg", "text");
            node.setAttribute("x", String(el.x));
            node.setAttribute("y", String(el.y));
            node.setAttribute("fill", el.color || "#0f172a");
            const baseSize = Number(el.size || 22);
            const ch2 = String(currentTopicKey || "").startsWith("s7_2");
            const sizeBoost = ch2 ? 1.55 : zoomFit ? 1.35 : 1;
            node.setAttribute("font-size", String(Math.max(ch2 ? 16 : 18, Math.round(baseSize * sizeBoost))));
            node.setAttribute("font-weight", el.weight || el.fontWeight || "bold");
            node.setAttribute("font-family", "Plus Jakarta Sans, Segoe UI, sans-serif");
            node.setAttribute("text-anchor", "middle");
            node.setAttribute("dominant-baseline", "middle");
            node.setAttribute("class", "iwb-svg-text" + (isCurrentActiveStep ? " pop" : ""));
            node.textContent = el.text;
            drawingLayer.appendChild(node);
          }
        });
      }

      requestAnimationFrame(fitBoardView);
      setTimeout(fitBoardView, 80);

      setTimeout(() => {
        drawingIndicator.style.opacity = "0";
      }, 700);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => switchTopic(tab.getAttribute("data-topic")));
    });

    if (btnPrev) btnPrev.addEventListener("click", () => {
      stopAutoPlay();
      if (currentStep > 0) {
        currentStep--;
        renderCurrentStep();
      }
    });

    if (btnNext) btnNext.addEventListener("click", () => {
      stopAutoPlay();
      const scenes = DATA[currentTopicKey].scenes[currentSubtopicId];
      if (currentStep < scenes.length - 1) {
        currentStep++;
        renderCurrentStep();
      }
    });

    if (btnPlay) btnPlay.addEventListener("click", toggleAutoPlay);
    if (btnRestart) btnRestart.addEventListener("click", () => {
      currentStep = 0;
      startAutoPlay();
    });

    practiceBtn.addEventListener("click", () => {
      const isHidden = practiceA.classList.contains("hidden");
      if (isHidden) {
        practiceA.classList.remove("hidden");
        practiceBtn.textContent = "Hide Answer";
      } else {
        practiceA.classList.add("hidden");
        practiceBtn.textContent = "Show Answer";
      }
    });

    switchTopic(currentTopicKey);
  }

  window.mountInteractiveWhiteboard = mountInteractiveWhiteboard;
})();
