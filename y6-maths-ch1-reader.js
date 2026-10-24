/**
 * Year 6 Maths — quest reader hook (fullscreen + HTML chapter modules).
 */
(function () {
  if (typeof renderReader !== "function") return;

  const origRenderReader = renderReader;

  function isY6MathsQuest(unit) {
    return typeof y6MathsQuestThemeActive === "function"
      ? y6MathsQuestThemeActive(unit)
      : yearId === "6" && studySubject === "maths" && !!unit;
  }

  function moduleUrl(unit) {
    const spec =
      typeof y6MathsQuestModuleSpec === "function"
        ? y6MathsQuestModuleSpec(unit)
        : null;
    if (!spec) return null;
    const url = new URL(spec.path.replace(/\.html$/i, ""), window.location.href);
    url.searchParams.set("embed", "1");
    url.searchParams.set("v", "6");
    return url.href;
  }

  function readerDocRoot() {
    const reader = document.getElementById("reader");
    return reader ? reader.querySelector(".reader-doc") : null;
  }

  function flattenLessonLayout(doc) {
    const lesson = doc.querySelector(".reader-with-lesson");
    if (!lesson) return;
    const side = lesson.querySelector(".reader-lesson");
    if (side) side.remove();
    const mainCol = lesson.querySelector(".reader-main");
    if (mainCol) {
      while (mainCol.firstChild) {
        doc.insertBefore(mainCol.firstChild, lesson);
      }
    }
    lesson.remove();
  }

  function mountQuestModule(doc, unit) {
    const spec =
      typeof y6MathsHtmlQuestPages === "function"
        ? y6MathsHtmlQuestPages(unit)
        : unit && unit.id === "m1";
    if (!spec) return;
    const src = moduleUrl(unit);
    if (!src) return;

    const body = doc.querySelector(".y6-quest-body") || doc;
    let wrap = body.querySelector(".y6-integers-module-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "y6-integers-module-wrap";
      body.appendChild(wrap);
    }
    let iframe = wrap.querySelector("iframe.y6-integers-module-frame");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.className = "y6-integers-module-frame";
      wrap.appendChild(iframe);
    }
    const title =
      typeof y6MathsQuestModuleSpec === "function" &&
      y6MathsQuestModuleSpec(unit)
        ? y6MathsQuestModuleSpec(unit).title
        : "Abhyaas Quest";
    iframe.title = title;
    if (iframe.getAttribute("data-src") !== src) {
      iframe.src = src;
      iframe.setAttribute("data-src", src);
    }
  }

  function applyY6QuestView(unit, topicIndex) {
    if (!isY6MathsQuest(unit)) return;

    const reader = document.getElementById("reader");
    if (reader) {
      reader.classList.add("y6-maths-fullscreen", "y6-maths-quest-theme");
    }
    if (typeof setY6QuestBodyMode === "function") setY6QuestBodyMode(true);

    const doc = readerDocRoot();
    if (!doc) return;

    flattenLessonLayout(doc);

    const shell = doc.querySelector(".y6-quest-shell");
    if (shell && typeof appendY6ChapterTopNav === "function") {
      appendY6ChapterTopNav(shell, unit);
    }

    const pages = readerPages(unit);
    const page = pages[Math.max(0, Number(topicIndex) || 0)];
    if (page && page.type === "quest" && y6MathsHtmlQuestPages(unit)) {
      mountQuestModule(doc, unit);
    }
  }

  renderReader = function (unit, topicIndex) {
    origRenderReader(unit, topicIndex);
    applyY6QuestView(unit, topicIndex);
  };
})();
