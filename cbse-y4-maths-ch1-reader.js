/**
 * CBSE Class 4 Maths — Chapter 1 (Shapes Around Us) NCERT JSON reader.
 */
(function () {
  var IMAGE_BASE =
    (window.CBSE_Y4_MATHS_CH1_IMAGE_BASE || "images/cbse-y4-maths-ch1/").replace(/\/?$/, "/");

  function chapterData() {
    return window.CBSE_Y4_MATHS_CH1 || null;
  }

  function visualDescription(item) {
    if (item == null) return "";
    if (typeof item === "string") return item;
    return item.description || item.alt || item.caption || item.label || "";
  }

  function resolveImageSrc(item) {
    if (item == null) return null;
    var raw =
      typeof item === "string"
        ? item.match(/\.(png|jpe?g|webp|gif|svg)(\?|$)/i)
          ? item
          : null
        : item.src || item.url || item.file || item.path || item.image || null;
    if (!raw) return null;
    if (/^(https?:|data:|\/)/i.test(raw)) return raw;
    return IMAGE_BASE + String(raw).replace(/^\.?\//, "");
  }

  function defaultPageImageSrc(pageNumber) {
    if (pageNumber == null) return null;
    var pad = String(pageNumber).padStart(2, "0");
    return IMAGE_BASE + "page-" + pad + ".png";
  }

  function appendFigure(parent, item, opts) {
    opts = opts || {};
    var fig = el("figure", "cbse-read-figure");
    var src = resolveImageSrc(item) || (opts.tryPageDefault ? defaultPageImageSrc(opts.pageNumber) : null);
    var desc = visualDescription(item) || opts.fallbackCaption || "";

    if (src) {
      var img = document.createElement("img");
      img.className = "cbse-read-figure-img";
      img.loading = "lazy";
      img.alt = desc || "Textbook illustration";
      img.src = src;
      img.addEventListener("error", function onErr() {
        if (opts.hideIfMissing) {
          fig.remove();
          return;
        }
        img.remove();
        fig.classList.add("cbse-read-figure-text-only");
        fig.appendChild(el("div", "cbse-read-figure-icon", "🖼"));
        if (desc) fig.appendChild(el("p", "cbse-read-figure-desc", desc));
      });
      fig.appendChild(img);
    } else {
      fig.classList.add("cbse-read-figure-text-only");
      fig.appendChild(el("div", "cbse-read-figure-icon", "🖼"));
      if (desc) fig.appendChild(el("p", "cbse-read-figure-desc", desc));
    }

    if (desc && src) {
      var cap = el("figcaption", "cbse-read-figure-caption", desc);
      fig.appendChild(cap);
    }
    parent.appendChild(fig);
  }

  function appendFigures(parent, visuals, opts) {
    if (visuals == null) return;
    var list = Array.isArray(visuals) ? visuals : [visuals];
    if (!list.length) return;
    var wrap = el("div", "cbse-read-figures");
    list.forEach(function (item) {
      appendFigure(wrap, item, opts);
    });
    parent.appendChild(wrap);
  }

  function cubeFaceColor(name) {
    var map = {
      red: "#ef4444",
      orange: "#f97316",
      green: "#22c55e",
      blue: "#3b82f6",
      yellow: "#eab308",
      purple: "#a855f7",
      pink: "#ec4899",
      magenta: "#d946ef",
    };
    var key = String(name || "")
      .toLowerCase()
      .replace(/\(or.*\)/, "")
      .trim()
      .split("/")[0]
      .trim();
    return map[key] || "#94a3b8";
  }

  function renderCubeViews(parent, views) {
    var wrap = el("div", "cbse-read-cube-views");
    (views || []).forEach(function (v) {
      var card = el("div", "cbse-read-cube-view");
      card.appendChild(el("p", "cbse-read-cube-view-label", "View " + v.view));
      var iso = el("div", "cbse-read-cube-iso");
      iso.innerHTML =
        '<div class="cbse-cube-face cbse-cube-top" style="background:' +
        cubeFaceColor(v.top) +
        '"></div>' +
        '<div class="cbse-cube-face cbse-cube-front" style="background:' +
        cubeFaceColor(v.front) +
        '"></div>' +
        '<div class="cbse-cube-face cbse-cube-right" style="background:' +
        cubeFaceColor(v.right) +
        '"></div>';
      card.appendChild(iso);
      card.appendChild(
        el(
          "p",
          "cbse-read-muted cbse-read-cube-key",
          "Top: " + v.top + " · Front: " + v.front + " · Right: " + v.right
        )
      );
      wrap.appendChild(card);
    });
    parent.appendChild(wrap);
  }

  function isCbseY4Ch1Unit(unit) {
    return (
      typeof homeBoard !== "undefined" &&
      homeBoard === "CBSE" &&
      yearId === "4" &&
      studySubject === "maths" &&
      unit &&
      unit.ncertJson === "ch1"
    );
  }

  window.cbseY4MathsCh1ReaderPages = function cbseY4MathsCh1ReaderPages(unit) {
    if (!isCbseY4Ch1Unit(unit)) return null;
    const data = chapterData();
    if (!data || !data.pages) return [{ type: "cbse-empty" }];
    const pages = [{ type: "cbse-overview", meta: data.metadata }];
    data.pages.forEach(function (p, i) {
      pages.push({ type: "cbse-page", bookPage: p, pageIdx: i });
    });
    return pages;
  };

  window.cbseY4MathsCh1PageLabel = function cbseY4MathsCh1PageLabel(page) {
    if (!page) return "Section";
    if (page.type === "cbse-overview") return "Chapter overview";
    if (page.type === "cbse-page" && page.bookPage) {
      const bp = page.bookPage;
      const title = bp.section_title || "Reading";
      return "Page " + bp.page_number + " · " + title;
    }
    return "Reading";
  };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null && text !== "") node.textContent = text;
    return node;
  }

  function appendParagraphs(parent, lines) {
    (lines || []).forEach(function (line) {
      parent.appendChild(el("p", "cbse-read-p", line));
    });
  }

  function appendList(parent, items, className) {
    if (!items || !items.length) return;
    const ul = el("ul", className || "cbse-read-ul");
    items.forEach(function (item) {
      const li = document.createElement("li");
      if (typeof item === "string") li.textContent = item;
      else if (item && item.text) li.textContent = item.text;
      else li.textContent = JSON.stringify(item);
      ul.appendChild(li);
    });
    parent.appendChild(ul);
  }

  function appendQuestionBlock(parent, q, indexLabel) {
    const box = el("div", "cbse-read-question");
    const prompt = q.question || q.prompt || q.title;
    if (prompt) {
      const h = el("p", "cbse-read-q-prompt", (indexLabel ? indexLabel + " " : "") + prompt);
      box.appendChild(h);
    }
    if (q.context) box.appendChild(el("p", "cbse-read-muted", q.context));
    if (q.sample_answer != null) {
      const ans = el("p", "cbse-read-sample");
      ans.innerHTML = "<strong>Sample answer:</strong> " + escapeHtml(String(q.sample_answer));
      box.appendChild(ans);
    }
    if (q.answer != null && q.sample_answer == null) {
      const ans = el("p", "cbse-read-sample");
      const val =
        typeof q.answer === "object" ? JSON.stringify(q.answer, null, 2) : String(q.answer);
      ans.innerHTML = "<strong>Answer:</strong> " + escapeHtml(val);
      box.appendChild(ans);
    }
    if (q.explanation) box.appendChild(el("p", "cbse-read-muted", q.explanation));
    if (q.options && q.options.length) {
      const ol = el("ol", "cbse-read-ol");
      q.options.forEach(function (opt) {
        const li = document.createElement("li");
        const label = opt.label || opt.id || opt.solid || "";
        const extra = opt.can_fold != null ? (opt.can_fold ? " (folds)" : " (does not fold)") : "";
        li.textContent = label + extra;
        ol.appendChild(li);
      });
      box.appendChild(ol);
    }
    if (q.sub_questions) appendList(box, q.sub_questions);
    if (q.items) {
      q.items.forEach(function (item, i) {
        appendQuestionBlock(
          box,
          item,
          item.sub_id || item.question_number || String(i + 1) + "."
        );
      });
    }
    parent.appendChild(box);
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTable(parent, table) {
    if (!table || !table.columns) return;
    const wrap = el("div", "cbse-read-table-wrap");
    const tableEl = document.createElement("table");
    tableEl.className = "cbse-read-table";
    const thead = document.createElement("thead");
    const hr = document.createElement("tr");
    table.columns.forEach(function (col) {
      const th = document.createElement("th");
      th.textContent = col;
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    tableEl.appendChild(thead);
    const tbody = document.createElement("tbody");
    (table.rows || []).forEach(function (row) {
      const tr = document.createElement("tr");
      const cells = [
        row.shape,
        row.faces_F,
        row.corners_V,
        row.edges_E,
      ];
      table.columns.forEach(function (_col, i) {
        const td = document.createElement("td");
        td.textContent = cells[i] != null ? cells[i] : "";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tableEl.appendChild(tbody);
    wrap.appendChild(tableEl);
    parent.appendChild(wrap);
  }

  function renderSortingColumns(parent, columns, titleKey) {
    (columns || []).forEach(function (col) {
      const card = el("div", "cbse-read-sort-col");
      const label =
        col.number_of_faces ||
        col.number_of_edges ||
        col.label ||
        col[titleKey] ||
        "Group";
      card.appendChild(el("h4", "cbse-read-h4", String(label)));
      if (col.shapes) appendList(card, col.shapes);
      parent.appendChild(card);
    });
  }

  function renderActivity(parent, act) {
    if (!act) return;
    const block = el("article", "cbse-read-activity");
    const heading =
      act.section ||
      (act.number != null ? "Activity " + act.number : "") ||
      act.title ||
      act.type ||
      "Activity";
    block.appendChild(el("h4", "cbse-read-h4", heading));
    if (act.prompt) block.appendChild(el("p", "cbse-read-p", act.prompt));

    if (act.type === "table_completion" && act.table) {
      renderTable(block, act.table);
      if (act.follow_up_question) appendQuestionBlock(block, act.follow_up_question);
    } else if (act.type === "sorting_table" && act.columns) {
      renderSortingColumns(block, act.columns);
      if (act.follow_up_question) appendQuestionBlock(block, act.follow_up_question);
    } else if (act.type === "comparison_table" && act.categories) {
      Object.keys(act.categories).forEach(function (key) {
        const cat = act.categories[key];
        block.appendChild(el("h5", "cbse-read-h5", key.charAt(0).toUpperCase() + key.slice(1)));
        if (cat.models_shown) {
          block.appendChild(el("p", "cbse-read-muted", "Models: " + cat.models_shown.join(", ")));
        }
        (cat.questions || []).forEach(function (q) {
          appendQuestionBlock(block, q);
        });
      });
      (act.discussion_questions || []).forEach(function (q) {
        appendQuestionBlock(block, q);
      });
    } else if (act.type === "two_circle_sort" || act.type === "venn_diagram") {
      if (act.circle_A) {
        block.appendChild(el("h5", "cbse-read-h5", act.circle_A.label || "Set A"));
        if (act.circle_A.sample_shapes) appendList(block, act.circle_A.sample_shapes);
      }
      if (act.intersection_AB) {
        block.appendChild(el("h5", "cbse-read-h5", act.intersection_AB.label || "A ∩ B"));
        if (act.intersection_AB.sample_shapes)
          appendList(block, act.intersection_AB.sample_shapes);
      }
      if (act.circle_B) {
        block.appendChild(el("h5", "cbse-read-h5", act.circle_B.label || "Set B"));
        if (act.circle_B.sample_shapes) appendList(block, act.circle_B.sample_shapes);
      }
    } else if (act.questions) {
      act.questions.forEach(function (q, i) {
        appendQuestionBlock(block, q, q.question_number != null ? q.question_number + "." : i + 1 + ".");
      });
    } else if (act.steps) {
      appendList(block, act.steps);
      if (act.question) appendQuestionBlock(block, { question: act.question, answer: act.answer });
    } else if (act.tasks) {
      act.tasks.forEach(function (t) {
        if (typeof t === "string") block.appendChild(el("p", "cbse-read-p", t));
        else appendQuestionBlock(block, t);
      });
    } else if (act.parts) {
      act.parts.forEach(function (part) {
        block.appendChild(el("h5", "cbse-read-h5", part.character || "Part"));
        if (part.context) block.appendChild(el("p", "cbse-read-p", part.context));
        (part.questions || []).forEach(function (q) {
          appendQuestionBlock(block, q);
        });
      });
    } else if (act.items && act.type === "shape_decomposition") {
      act.items.forEach(function (item) {
        const ib = el("div", "cbse-read-question");
        ib.appendChild(el("p", "cbse-read-q-prompt", item.id + ". " + (item.source_shape || "")));
        if (item.target_pieces)
          ib.appendChild(el("p", "cbse-read-muted", "Target: " + item.target_pieces));
        if (item.solution) ib.appendChild(el("p", "cbse-read-p", item.solution));
        block.appendChild(ib);
      });
    } else if (act.definitions) {
      act.definitions.forEach(function (d) {
        block.appendChild(el("p", "cbse-read-p", d.term + " — " + d.definition));
      });
    } else if (act.border_objects) {
      appendList(
        block,
        act.border_objects.map(function (o) {
          return o.object + " → " + o.shape;
        })
      );
      if (act.instructions) appendList(block, act.instructions);
    } else if (act.models || act.towers) {
      (act.models || act.towers || []).forEach(function (m) {
        const line = m.description || m.id || m.tower_id;
        const ans = m.answer_solid != null ? " (" + m.answer_solid + " cubes)" : "";
        block.appendChild(el("p", "cbse-read-p", line + ans));
      });
    } else if (act.nets && act.solids) {
      block.appendChild(el("p", "cbse-read-muted", "Match nets to solids (see textbook diagrams)."));
      if (act.answers) {
        block.appendChild(
          el("p", "cbse-read-sample", "Answers: " + JSON.stringify(act.answers))
        );
      }
    } else if (act.options && act.type === "multiple_select_reasoning") {
      act.options.forEach(function (opt) {
        appendQuestionBlock(block, {
          question: opt.solid + " — " + (opt.can_fold ? "Yes" : "No"),
          explanation: opt.explanation,
        });
      });
    } else if (act.groups) {
      act.groups.forEach(function (g) {
        block.appendChild(el("p", "cbse-read-p", g.group + ": " + (g.suggested_criterion || "")));
      });
    } else if (act.shapes && act.categories) {
      appendQuestionBlock(block, act.follow_up_question || {});
    } else if (act.visual_views) {
      renderCubeViews(block, act.visual_views);
      (act.items || []).forEach(function (item) {
        appendQuestionBlock(block, item, item.sub_id + ") ");
      });
    } else if (act.fill_in_blank_group || act.type === "fill_in_blank_group") {
      if (act.context) block.appendChild(el("p", "cbse-read-p", act.context));
      (act.items || []).forEach(function (item) {
        appendQuestionBlock(block, item, item.sub_id + ") ");
      });
    }

    if (act.visuals && act.type !== "comparison_table") {
      appendFigures(block, act.visuals);
    }

    if (act.discussion_questions) {
      act.discussion_questions.forEach(function (q) {
        appendQuestionBlock(block, typeof q === "string" ? { question: q } : q);
      });
    }

    parent.appendChild(block);
  }

  window.renderCbseY4MathsCh1ReaderContent = function renderCbseY4MathsCh1ReaderContent(parent, page) {
    if (!parent || !page) return;
    const section = el("section", "cbse-read-page reader-topic");

    if (page.type === "cbse-overview") {
      const meta = page.meta || {};
      section.appendChild(el("h3", "cbse-read-title", meta.chapter_title || "Chapter 1"));
      section.appendChild(
        el(
          "p",
          "cbse-read-meta",
          (meta.publisher || "NCERT") +
            " · " +
            (meta.edition || "") +
            " · " +
            (meta.total_pages || "") +
            " pages"
        )
      );
      if (meta.key_concepts && meta.key_concepts.length) {
        section.appendChild(el("h4", "cbse-read-h4", "Key concepts in this chapter"));
        appendList(section, meta.key_concepts, "cbse-read-ul cbse-read-concepts");
      }
      section.appendChild(
        el(
          "p",
          "cbse-read-lead",
          "Read page by page below. Questions include sample answers you can check after you try yourself."
        )
      );
      section.appendChild(
        el(
          "p",
          "cbse-read-meta cbse-read-image-note",
          "This chapter JSON describes textbook pictures in words (no image files are embedded). " +
            "If you add scans as page-01.png … page-23.png under images/cbse-y4-maths-ch1/, they will appear automatically. " +
            "You can also add src on each visual in the JSON."
        )
      );
      parent.appendChild(section);
      return;
    }

    if (page.type === "cbse-page" && page.bookPage) {
      const bp = page.bookPage;
      section.appendChild(
        el(
          "h3",
          "cbse-read-title",
          "Page " + bp.page_number + " · " + (bp.section_title || "Reading")
        )
      );
      if (bp.page_image || bp.images) {
        appendFigures(section, bp.images || [{ src: bp.page_image, description: "Textbook page" }], {
          pageNumber: bp.page_number,
        });
      } else {
        appendFigure(section, null, {
          tryPageDefault: true,
          pageNumber: bp.page_number,
          hideIfMissing: true,
          fallbackCaption: "",
        });
      }
      appendParagraphs(section, bp.narrative);
      if (bp.instructions) section.appendChild(el("p", "cbse-read-instructions", bp.instructions));
      if (bp.visuals && bp.visuals.length) {
        section.appendChild(el("h4", "cbse-read-h4", "Pictures on this textbook page"));
        appendFigures(section, bp.visuals, { pageNumber: bp.page_number });
      }
      (bp.dialogue || []).forEach(function (line) {
        section.appendChild(
          el("p", "cbse-read-dialogue", (line.speaker || "Speaker") + ": “" + line.text + "”")
        );
      });
      (bp.facts || []).forEach(function (fact) {
        const box = el("aside", "cbse-read-callout");
        box.appendChild(el("strong", null, fact.title || "Note"));
        box.appendChild(el("p", "cbse-read-p", fact.content));
        section.appendChild(box);
      });
      (bp.definitions || []).forEach(function (d) {
        const box = el("aside", "cbse-read-definition");
        box.appendChild(el("strong", null, d.term));
        box.appendChild(el("p", "cbse-read-p", d.definition));
        section.appendChild(box);
      });
      (bp.activities || []).forEach(function (act) {
        renderActivity(section, act);
      });
      if (bp.teacher_note) {
        const note = el("aside", "cbse-read-teacher");
        note.appendChild(el("strong", null, "Teacher note"));
        note.appendChild(el("p", "cbse-read-p", bp.teacher_note));
        section.appendChild(note);
      }
      parent.appendChild(section);
      return;
    }

    section.appendChild(el("p", "cbse-read-p", "Chapter data is loading…"));
    parent.appendChild(section);
  };
})();
