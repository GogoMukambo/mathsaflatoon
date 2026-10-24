/**
 * CBSE Class 4 Maths — Chapter 2 (PDF page scans: demm102).
 */
(function () {
  var CH2 = {
    document_id: "demm102",
    chapter_number: 2,
    chapter_title: "Hide and Seek",
    subtitle: "Where are you hiding?",
    total_pages: 10,
    edition: "Reprint 2026-27",
    publisher: "NCERT",
    image_base: "images/cbse-y4-maths-ch2/",
    intro:
      "Views from different sides, hide-and-seek scenes, and finding hidden objects — build spatial reasoning from the NCERT textbook pages below.",
  };

  function isCh2Unit(unit) {
    return (
      typeof homeBoard !== "undefined" &&
      homeBoard === "CBSE" &&
      yearId === "4" &&
      studySubject === "maths" &&
      unit &&
      unit.ncertPdf === "ch2"
    );
  }

  function imageSrc(pageNumber) {
    var pad = String(pageNumber).padStart(2, "0");
    return CH2.image_base + "page-" + pad + ".png";
  }

  window.cbseY4MathsCh2ReaderPages = function cbseY4MathsCh2ReaderPages(unit) {
    if (!isCh2Unit(unit)) return null;
    var pages = [{ type: "cbse-pdf-overview", meta: CH2 }];
    for (var p = 1; p <= CH2.total_pages; p++) {
      pages.push({
        type: "cbse-pdf-page",
        pageNumber: p,
        src: imageSrc(p),
        title: CH2.chapter_title,
      });
    }
    return pages;
  };

  window.cbseY4MathsCh2PageLabel = function cbseY4MathsCh2PageLabel(page) {
    if (!page) return "Section";
    if (page.type === "cbse-pdf-overview") return "Chapter overview";
    if (page.type === "cbse-pdf-page") {
      return "Page " + page.pageNumber + " · " + (page.title || "Textbook");
    }
    return "Reading";
  };

  window.renderCbseY4MathsCh2ReaderContent = function renderCbseY4MathsCh2ReaderContent(parent, page) {
    if (!parent || !page) return;

    function el(tag, className, text) {
      var node = document.createElement(tag);
      if (className) node.className = className;
      if (text != null && text !== "") node.textContent = text;
      return node;
    }

    var section = el("section", "cbse-read-page reader-topic");

    if (page.type === "cbse-pdf-overview") {
      var meta = page.meta || CH2;
      section.appendChild(el("h3", "cbse-read-title", meta.chapter_number + " " + meta.chapter_title));
      if (meta.subtitle) {
        section.appendChild(el("p", "cbse-read-lead", meta.subtitle));
      }
      section.appendChild(
        el(
          "p",
          "cbse-read-meta",
          (meta.publisher || "NCERT") +
            " · " +
            (meta.edition || "") +
            " · " +
            meta.total_pages +
            " textbook pages"
        )
      );
      section.appendChild(el("p", "cbse-read-p", meta.intro));
      section.appendChild(
        el(
          "p",
          "cbse-read-meta",
          "Use Next to read each scanned page. Images are exported from demm102.pdf at 150 DPI."
        )
      );
      parent.appendChild(section);
      return;
    }

    if (page.type === "cbse-pdf-page") {
      section.classList.add("cbse-read-page-scan");
      section.appendChild(
        el(
          "h3",
          "cbse-read-title cbse-read-scan-kicker",
          "Textbook page " + page.pageNumber + " of " + CH2.total_pages
        )
      );
      var fig = el("figure", "cbse-read-figure cbse-read-figure-scan");
      var img = document.createElement("img");
      img.className = "cbse-read-figure-img cbse-read-scan-img";
      img.src = page.src || imageSrc(page.pageNumber);
      img.alt =
        "NCERT Class 4 Mathematics Chapter 2, page " + page.pageNumber;
      img.loading = page.pageNumber <= 2 ? "eager" : "lazy";
      fig.appendChild(img);
      var cap = el(
        "figcaption",
        "cbse-read-figure-caption",
        CH2.chapter_title + " — page " + page.pageNumber
      );
      fig.appendChild(cap);
      section.appendChild(fig);
      parent.appendChild(section);
    }
  };
})();
