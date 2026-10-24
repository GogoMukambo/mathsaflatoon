(function () {
  function topicKey(t) {
    return [t.board, t.year, t.subject, t.chapterId, t.topicId].join("|");
  }

  function dedupeTopics(list) {
    var map = new Map();
    list.forEach(function (t) {
      map.set(topicKey(t), t);
    });
    return Array.from(map.values());
  }

  var topics = dedupeTopics(window.QUESTION_BANK_TOPICS || []);
  function dedupePapers(list) {
    var map = new Map();
    list.forEach(function (p) {
      map.set(p.id, p);
    });
    return Array.from(map.values());
  }

  var papers = dedupePapers(window.PRACTICE_PAPERS || []);
  var panel = document.getElementById("qbPanel");
  var breadcrumb = document.getElementById("qbBreadcrumb");

  var state = {
    section: null,
    board: null,
    year: null,
    subject: null,
    chapterId: null,
    topicId: null,
    paperId: null,
  };

  function groupBy(list, keyFn) {
    var map = new Map();
    list.forEach(function (item) {
      var key = keyFn(item);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return map;
  }

  function boards() {
    return [...new Set(topics.map(function (t) { return t.board; }))].sort();
  }

  function years(board) {
    return [
      ...new Set(
        topics.filter(function (t) { return t.board === board; }).map(function (t) { return t.year; })
      ),
    ].sort(function (a, b) { return a - b; });
  }

  function subjects(board, year) {
    return topics.filter(function (t) { return t.board === board && t.year === year; }).reduce(function (acc, t) {
      if (!acc.some(function (s) { return s.id === t.subject; })) {
        acc.push({ id: t.subject, title: t.subjectTitle || t.subject });
      }
      return acc;
    }, []);
  }

  function chapters(board, year, subject) {
    return topics
      .filter(function (t) {
        return t.board === board && t.year === year && t.subject === subject;
      })
      .reduce(function (acc, t) {
        if (!acc.some(function (c) { return c.id === t.chapterId; })) {
          acc.push({
            id: t.chapterId,
            number: t.chapterNumber,
            title: t.chapterTitle,
          });
        }
        return acc;
      }, [])
      .sort(function (a, b) { return (a.number || 0) - (b.number || 0); });
  }

  function topicList(board, year, subject, chapterId) {
    return topics.filter(function (t) {
      return (
        t.board === board &&
        t.year === year &&
        t.subject === subject &&
        t.chapterId === chapterId
      );
    });
  }

  function findTopic() {
    return topics.find(function (t) {
      return (
        t.board === state.board &&
        t.year === state.year &&
        t.subject === state.subject &&
        t.chapterId === state.chapterId &&
        t.topicId === state.topicId
      );
    });
  }

  function paperBoards() {
    return [...new Set(papers.map(function (p) { return p.board; }))].sort();
  }

  function paperYears(board) {
    return [
      ...new Set(papers.filter(function (p) { return p.board === board; }).map(function (p) { return p.year; })),
    ].sort(function (a, b) { return a - b; });
  }

  function paperSubjects(board, year) {
    return papers.filter(function (p) { return p.board === board && p.year === year; }).reduce(function (acc, p) {
      if (!acc.some(function (s) { return s.id === p.subject; })) {
        acc.push({ id: p.subject, title: p.subjectTitle || p.subject });
      }
      return acc;
    }, []);
  }

  function paperList(board, year, subject) {
    return papers.filter(function (p) {
      return p.board === board && p.year === year && p.subject === subject;
    });
  }

  function findPaper() {
    return papers.find(function (p) { return p.id === state.paperId; });
  }

  function resetNav() {
    state.board = state.year = state.subject = state.chapterId = state.topicId = state.paperId = null;
  }

  function renderBreadcrumb() {
    breadcrumb.replaceChildren();
    function addPart(label, onClick, isCurrent) {
      if (breadcrumb.childNodes.length) {
        var sep = document.createElement("span");
        sep.className = "sep";
        sep.textContent = "/";
        breadcrumb.appendChild(sep);
      }
      if (isCurrent) {
        var cur = document.createElement("span");
        cur.className = "current";
        cur.textContent = label;
        breadcrumb.appendChild(cur);
        return;
      }
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.addEventListener("click", onClick);
      breadcrumb.appendChild(btn);
    }

    if (!state.section) {
      addPart("Question bank home", null, true);
      return;
    }

    addPart("Home", function () {
      state.section = null;
      resetNav();
      render();
    }, false);

    addPart(
      state.section === "practice" ? "Practice papers" : "Workbook questions",
      function () {
        resetNav();
        render();
      },
      !state.board
    );

    if (!state.board) return;

    if (state.section === "practice" && state.paperId) {
      var pap = findPaper();
      addPart(
        pap ? pap.title : state.paperId,
        null,
        true
      );
      return;
    }

    addPart(
      state.board,
      function () {
        state.year = state.subject = state.chapterId = state.topicId = null;
        render();
      },
      !state.year
    );
    if (!state.year) return;

    addPart(
      "Year " + state.year,
      function () {
        state.subject = state.chapterId = state.topicId = null;
        render();
      },
      !state.subject
    );
    if (!state.subject) return;

    var subj = subjects(state.board, state.year).find(function (s) { return s.id === state.subject; });
    addPart(
      subj ? subj.title : state.subject,
      function () {
        state.chapterId = state.topicId = null;
        render();
      },
      !state.chapterId
    );
    if (!state.chapterId) return;

    var ch = chapters(state.board, state.year, state.subject).find(function (c) { return c.id === state.chapterId; });
    addPart(
      ch ? ch.title : state.chapterId,
      function () {
        state.topicId = null;
        render();
      },
      !state.topicId
    );
    if (!state.topicId) return;

    if (state.section === "practice") return;

    var top = findTopic();
    addPart(top ? top.topicId + " " + top.topicTitle : state.topicId, null, true);
  }

  function renderQuestionItem(q, ul) {
    var li = document.createElement("li");
    li.className = "qb-q";
    var qh = document.createElement("div");
    qh.className = "qb-q-head";
    var idSpan = document.createElement("span");
    idSpan.className = "qb-q-id";
    idSpan.textContent = q.id;
    qh.appendChild(idSpan);
    if (q.label) {
      var lab = document.createElement("span");
      lab.className = "qb-q-label";
      lab.textContent = q.label;
      qh.appendChild(lab);
    }
    if (q.marks) {
      var mk = document.createElement("span");
      mk.className = "qb-q-marks";
      mk.textContent = "[" + q.marks + " mark" + (q.marks === 1 ? "" : "s") + "]";
      qh.appendChild(mk);
    }
    if (q.type) {
      var ty = document.createElement("span");
      ty.className = "qb-q-type";
      ty.textContent = q.type;
      qh.appendChild(ty);
    }
    li.appendChild(qh);
    var prompt = document.createElement("p");
    prompt.className = "qb-q-prompt";
    prompt.textContent = q.prompt;
    li.appendChild(prompt);
    if (q.diagramSvg) {
      var fig = document.createElement("div");
      fig.className = "qb-q-diagram";
      fig.innerHTML = q.diagramSvg;
      li.appendChild(fig);
    }
    if (q.table) li.appendChild(renderTable(q.table));
    if (q.answer) {
      var ans = document.createElement("p");
      ans.className = "qb-q-answer";
      ans.textContent = "Answer: " + q.answer;
      li.appendChild(ans);
    }
    if (q.note) {
      var note = document.createElement("p");
      note.className = "qb-q-note";
      note.textContent = q.note;
      li.appendChild(note);
    }
    ul.appendChild(li);
  }

  function renderTable(table) {
    var wrap = document.createElement("div");
    var el = document.createElement("table");
    el.className = "qb-q-table";
    if (table.kind === "data" && table.headers) {
      var head = document.createElement("thead");
      var hr = document.createElement("tr");
      table.headers.forEach(function (h) {
        var th = document.createElement("th");
        th.textContent = h;
        hr.appendChild(th);
      });
      head.appendChild(hr);
      el.appendChild(head);
      var body = document.createElement("tbody");
      (table.rows || []).forEach(function (row) {
        var tr = document.createElement("tr");
        row.forEach(function (cell) {
          var td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });
        body.appendChild(tr);
      });
      el.appendChild(body);
      wrap.appendChild(el);
      return wrap;
    }
    var head = document.createElement("thead");
    var hr = document.createElement("tr");
    var corner = document.createElement("th");
    corner.textContent = table.kind === "subtraction" ? "−" : "+";
    hr.appendChild(corner);
    (table.columnHeaders || []).forEach(function (h) {
      var th = document.createElement("th");
      th.textContent = h;
      hr.appendChild(th);
    });
    head.appendChild(hr);
    el.appendChild(head);
    var body = document.createElement("tbody");
    (table.rowHeaders || []).forEach(function (rowLabel, ri) {
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.textContent = rowLabel;
      tr.appendChild(th);
      var rowCells = (table.cells && table.cells[ri]) || [];
      rowCells.forEach(function (cell) {
        var td = document.createElement("td");
        td.textContent = cell || "□";
        tr.appendChild(td);
      });
      while (tr.cells.length < (table.columnHeaders || []).length + 1) {
        var empty = document.createElement("td");
        empty.textContent = "□";
        tr.appendChild(empty);
      }
      body.appendChild(tr);
    });
    el.appendChild(body);
    wrap.appendChild(el);
    if (table.givenExample) {
      var ex = document.createElement("p");
      ex.className = "qb-q-note";
      ex.textContent = table.givenExample;
      wrap.appendChild(ex);
    }
    return wrap;
  }

  function renderTopicDetail(topic) {
    panel.replaceChildren();
    var head = document.createElement("div");
    head.className = "qb-topic-head";
    var h2 = document.createElement("h2");
    h2.textContent = topic.topicId + " · " + topic.topicTitle;
    head.appendChild(h2);
    var meta = document.createElement("p");
    meta.textContent =
      topic.questions.length +
      " questions · " +
      (topic.source && topic.source.section ? topic.source.section : "Workbook") +
      (topic.source && topic.source.title ? " · " + topic.source.title : "");
    head.appendChild(meta);
    if (topic.source && topic.source.note) {
      var srcNote = document.createElement("p");
      srcNote.className = "qb-q-note";
      srcNote.textContent = topic.source.note;
      head.appendChild(srcNote);
    }
    panel.appendChild(head);

    var byGroup = groupBy(topic.questions, function (q) { return q.group || "Questions"; });
    byGroup.forEach(function (qs, groupName) {
      var section = document.createElement("section");
      section.className = "qb-group";
      var h3 = document.createElement("h3");
      h3.textContent = groupName;
      section.appendChild(h3);
      var ul = document.createElement("ul");
      ul.className = "qb-qlist";
      qs.forEach(function (q) {
        renderQuestionItem(q, ul);
      });
      section.appendChild(ul);
      panel.appendChild(section);
    });
  }

  function renderTiles(items, onPick) {
    panel.replaceChildren();
    if (!items.length) {
      var empty = document.createElement("p");
      empty.className = "qb-empty";
      empty.textContent = "No question sets here yet.";
      panel.appendChild(empty);
      return;
    }
    var grid = document.createElement("div");
    grid.className = "qb-grid";
    items.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "qb-tile";
      var meta = document.createElement("span");
      meta.className = "meta";
      meta.textContent = item.meta || "";
      var title = document.createElement("span");
      title.className = "title";
      title.textContent = item.title;
      btn.appendChild(meta);
      btn.appendChild(title);
      btn.addEventListener("click", function () { onPick(item); });
      grid.appendChild(btn);
    });
    panel.appendChild(grid);
  }

  function renderSectionPicker() {
    panel.replaceChildren();
    var grid = document.createElement("div");
    grid.className = "qb-section-grid";
    [
      {
        id: "workbook",
        meta: "Chapter topics",
        title: "Workbook question bank",
        sub: topics.length + " topic sets",
      },
      {
        id: "practice",
        meta: "Exam-style",
        title: "Practice papers",
        sub: papers.length + " paper" + (papers.length === 1 ? "" : "s"),
      },
    ].forEach(function (sec) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "qb-section-tile";
      var meta = document.createElement("span");
      meta.className = "meta";
      meta.textContent = sec.meta;
      var title = document.createElement("span");
      title.className = "title";
      title.textContent = sec.title;
      var sub = document.createElement("span");
      sub.className = "meta";
      sub.textContent = sec.sub;
      btn.appendChild(meta);
      btn.appendChild(title);
      btn.appendChild(sub);
      btn.addEventListener("click", function () {
        state.section = sec.id;
        resetNav();
        render();
      });
      grid.appendChild(btn);
    });
    panel.appendChild(grid);
  }

  function renderPaperDetail(paper) {
    panel.replaceChildren();
    var head = document.createElement("div");
    head.className = "qb-topic-head";
    var h2 = document.createElement("h2");
    h2.textContent = paper.title;
    head.appendChild(h2);
    var meta = document.createElement("p");
    meta.textContent =
      paper.totalMarks +
      " marks · " +
      paper.duration +
      " · " +
      paper.questions.length +
      " parts";
    head.appendChild(meta);
    panel.appendChild(head);

    var info = document.createElement("div");
    info.className = "qb-paper-meta";
    var lines = [];
    if (paper.school) lines.push(paper.school);
    if (paper.code) lines.push("Subject code " + paper.code);
    if (paper.source && paper.source.reference) lines.push(paper.source.reference);
    if (paper.instructions && paper.instructions.length) {
      lines.push(paper.instructions.join(" "));
    }
    info.textContent = lines.join(" · ");
    if (paper.note) {
      var pnote = document.createElement("p");
      pnote.style.marginTop = "0.45rem";
      pnote.textContent = paper.note;
      info.appendChild(pnote);
    }
    if (paper.source && paper.source.file) {
      var link = document.createElement("p");
      link.style.marginTop = "0.5rem";
      var a = document.createElement("a");
      a.href = paper.source.file;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "Open original PDF (diagrams & layout)";
      link.appendChild(a);
      info.appendChild(link);
    }
    panel.appendChild(info);

    var byNum = groupBy(paper.questions, function (q) {
      return "Question " + (q.number != null ? q.number : "?");
    });
    byNum.forEach(function (qs, groupName) {
      var section = document.createElement("section");
      section.className = "qb-group";
      var h3 = document.createElement("h3");
      h3.textContent = groupName;
      section.appendChild(h3);
      var ul = document.createElement("ul");
      ul.className = "qb-qlist";
      qs.forEach(function (q) {
        renderQuestionItem(q, ul);
      });
      section.appendChild(ul);
      panel.appendChild(section);
    });
  }

  function renderPracticeFlow() {
    if (state.paperId) {
      var paper = findPaper();
      if (paper) return renderPaperDetail(paper);
    }
    if (!state.board) {
      return renderTiles(
        paperBoards().map(function (b) {
          var count = papers.filter(function (p) { return p.board === b; }).length;
          return { id: b, title: b, meta: count + " paper" + (count === 1 ? "" : "s") };
        }),
        function (item) {
          state.board = item.id;
          render();
        }
      );
    }
    if (!state.year) {
      return renderTiles(
        paperYears(state.board).map(function (y) {
          var count = papers.filter(function (p) { return p.board === state.board && p.year === y; }).length;
          return { id: y, title: "Year " + y, meta: count + " paper" + (count === 1 ? "" : "s") };
        }),
        function (item) {
          state.year = item.id;
          render();
        }
      );
    }
    if (!state.subject) {
      return renderTiles(
        paperSubjects(state.board, state.year).map(function (s) {
          var count = paperList(state.board, state.year, s.id).length;
          return { id: s.id, title: s.title, meta: count + " paper" + (count === 1 ? "" : "s") };
        }),
        function (item) {
          state.subject = item.id;
          render();
        }
      );
    }
    return renderTiles(
      paperList(state.board, state.year, state.subject).map(function (p) {
        return {
          id: p.id,
          title: p.title,
          meta: p.totalMarks + " marks · " + p.duration,
          paper: p,
        };
      }),
      function (item) {
        state.paperId = item.id;
        render();
      }
    );
  }

  function render() {
    renderBreadcrumb();
    if (!state.section) {
      return renderSectionPicker();
    }
    if (state.section === "practice") {
      return renderPracticeFlow();
    }
    if (!state.board) {
      return renderTiles(
        boards().map(function (b) {
          var count = topics.filter(function (t) { return t.board === b; }).length;
          return { id: b, title: b, meta: count + " topic" + (count === 1 ? "" : "s") };
        }),
        function (item) {
          state.board = item.id;
          render();
        }
      );
    }
    if (!state.year) {
      return renderTiles(
        years(state.board).map(function (y) {
          var count = topics.filter(function (t) { return t.board === state.board && t.year === y; }).length;
          return { id: y, title: "Year " + y, meta: count + " topic" + (count === 1 ? "" : "s") };
        }),
        function (item) {
          state.year = item.id;
          render();
        }
      );
    }
    if (!state.subject) {
      return renderTiles(
        subjects(state.board, state.year).map(function (s) {
          var count = topics.filter(function (t) {
            return t.board === state.board && t.year === state.year && t.subject === s.id;
          }).length;
          return { id: s.id, title: s.title, meta: count + " topic" + (count === 1 ? "" : "s") };
        }),
        function (item) {
          state.subject = item.id;
          render();
        }
      );
    }
    if (!state.chapterId) {
      return renderTiles(
        chapters(state.board, state.year, state.subject).map(function (c) {
          var count = topicList(state.board, state.year, state.subject, c.id).length;
          return {
            id: c.id,
            title: c.title,
            meta: count + " topic" + (count === 1 ? "" : "s"),
          };
        }),
        function (item) {
          state.chapterId = item.id;
          render();
        }
      );
    }
    if (!state.topicId) {
      return renderTiles(
        topicList(state.board, state.year, state.subject, state.chapterId).map(function (t) {
          return {
            id: t.topicId,
            title: t.topicId + " · " + t.topicTitle,
            meta: t.questions.length + " questions",
            topic: t,
          };
        }),
        function (item) {
          state.topicId = item.id;
          render();
        }
      );
    }
    var topic = findTopic();
    if (topic) renderTopicDetail(topic);
    else {
      panel.replaceChildren();
      var err = document.createElement("p");
      err.className = "qb-empty";
      err.textContent = "Topic not found.";
      panel.appendChild(err);
    }
  }

  render();
})();
