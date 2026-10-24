(function () {
  const form = document.getElementById("uploadForm");
  const status = document.getElementById("uploadStatus");
  const button = document.getElementById("uploadBtn");
  const yearSelect = document.getElementById("yearSelect");
  const subjectSelect = document.getElementById("subjectSelect");
  const fileInput = document.getElementById("fileInput");
  const picker = document.getElementById("chapterPicker");
  const chapterList = document.getElementById("chapterList");
  const queueBtn = document.getElementById("queueBtn");
  const selectAllBtn = document.getElementById("selectAllBtn");
  const selectNoneBtn = document.getElementById("selectNoneBtn");
  const API = "http://127.0.0.1:8788";
  const HELPER_HINT =
    "Restart the upload helper so it has the queue API: stop the old window with Ctrl+C, then run python tools/content_upload_server.py";
  let pollTimer = null;
  let splitResult = null;

  async function readJson(response) {
    const text = await response.text();
    const trimmed = (text || "").trim();
    if (!trimmed || trimmed.charAt(0) === "<") {
      throw new Error(HELPER_HINT);
    }
    try {
      return JSON.parse(trimmed);
    } catch (err) {
      throw new Error(HELPER_HINT);
    }
  }

  function showStatus(message, kind) {
    status.hidden = false;
    status.className = "upload-status " + (kind || "");
    status.textContent = message;
  }

  function formReady() {
    const file = fileInput.files && fileInput.files[0];
    return Boolean(yearSelect.value && subjectSelect.value && file && file.name);
  }

  function refreshSubmit() {
    button.disabled = !formReady();
  }

  function selectedBoxes() {
    return Array.from(chapterList.querySelectorAll("input[type=checkbox]:checked"));
  }

  function refreshQueue() {
    queueBtn.disabled = selectedBoxes().length === 0;
  }

  ["change", "input"].forEach((eventName) => {
    yearSelect.addEventListener(eventName, refreshSubmit);
    subjectSelect.addEventListener(eventName, refreshSubmit);
    fileInput.addEventListener(eventName, refreshSubmit);
  });
  refreshSubmit();

  function formatJobs(snapshot) {
    const jobs = snapshot.jobs || [];
    if (!jobs.length) return "";
    const lines = jobs.slice(-20).map((job) => {
      const bit = [
        job.status,
        "Year " + job.year,
        job.subject,
        "Chapter " + job.chapter,
        job.topic ? "Topic " + job.topic : "",
      ].filter(Boolean);
      if (job.status === "error") {
        bit.push(job.error || "Chapter build failed.");
      }
      return bit.join(" · ");
    });
    return (
      "\n\nCourse builds (" +
      snapshot.queued +
      " queued, " +
      snapshot.running +
      " running, " +
      snapshot.done +
      " done)\n" +
      lines.join("\n")
    );
  }

  async function pollJobs(head) {
    try {
      const response = await fetch(API + "/api/jobs");
      const snapshot = await readJson(response);
      showStatus(head + formatJobs(snapshot), "ok");
      const busy = (snapshot.queued || 0) + (snapshot.running || 0);
      if (busy === 0 && pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
    } catch (err) {
      /* helper may have stopped */
    }
  }

  function renderChapters(chapters) {
    chapterList.replaceChildren();
    chapters.forEach((chapter, index) => {
      const label = document.createElement("label");
      const box = document.createElement("input");
      box.type = "checkbox";
      box.value = chapter.path;
      box.checked = true;
      const text = document.createElement("span");
      const title = document.createElement("strong");
      title.textContent =
        "Topic " +
        (chapter.topic || chapter.chapter) +
        " · " +
        (chapter.title || chapter.name);
      const meta = document.createElement("div");
      meta.className = "chapter-meta";
      meta.textContent = chapter.name;
      text.append(title, meta);
      label.append(box, text);
      chapterList.appendChild(label);
      box.addEventListener("change", refreshQueue);
      box.id = "chapter-" + index;
    });
    picker.hidden = chapters.length === 0;
    refreshQueue();
  }

  selectAllBtn.addEventListener("click", () => {
    chapterList.querySelectorAll("input[type=checkbox]").forEach((box) => {
      box.checked = true;
    });
    refreshQueue();
  });

  selectNoneBtn.addEventListener("click", () => {
    chapterList.querySelectorAll("input[type=checkbox]").forEach((box) => {
      box.checked = false;
    });
    refreshQueue();
  });

  queueBtn.addEventListener("click", async () => {
    if (!splitResult) return;
    const paths = selectedBoxes().map((box) => box.value);
    if (!paths.length) {
      showStatus("Select at least one topic.", "error");
      return;
    }
    queueBtn.disabled = true;
    showStatus("Queuing " + paths.length + " selected topic" + (paths.length === 1 ? "" : "s") + "…", "");
    try {
      const response = await fetch(API + "/api/queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year: splitResult.year || yearSelect.value,
          subject: splitResult.subject || subjectSelect.value,
          paths: paths,
        }),
      });
      const result = await readJson(response);
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not queue topics.");
      }
      const queued = (result.builds && result.builds.queued) || paths.length;
      const head =
        "Queued " +
        queued +
        " selected topic" +
        (queued === 1 ? "" : "s") +
        " for Year " +
        splitResult.year +
        " " +
        splitResult.subject +
        ".";
      showStatus(head, "ok");
      if (pollTimer) clearInterval(pollTimer);
      pollTimer = setInterval(() => pollJobs(head), 4000);
      pollJobs(head);
    } catch (err) {
      showStatus(err.message || "Could not queue topics.", "error");
    } finally {
      refreshQueue();
    }
  });

  const mdForm = document.getElementById("mdForm");
  const mdStatus = document.getElementById("mdStatus");
  const mdApplyBtn = document.getElementById("mdApplyBtn");
  const mdYearSelect = document.getElementById("mdYearSelect");
  const mdSubjectSelect = document.getElementById("mdSubjectSelect");
  const mdChapterSelect = document.getElementById("mdChapterSelect");
  const mdFileInput = document.getElementById("mdFileInput");

  for (let ch = 1; ch <= 20; ch += 1) {
    const opt = document.createElement("option");
    opt.value = String(ch);
    opt.textContent = "Chapter " + ch;
    mdChapterSelect.appendChild(opt);
  }

  function showMdStatus(message, kind) {
    mdStatus.hidden = false;
    mdStatus.className = "upload-status " + (kind || "");
    mdStatus.textContent = message;
  }

  function mdFormReady() {
    const file = mdFileInput.files && mdFileInput.files[0];
    return Boolean(
      mdYearSelect.value && mdSubjectSelect.value && mdChapterSelect.value && file && file.name
    );
  }

  function refreshMdSubmit() {
    mdApplyBtn.disabled = !mdFormReady();
  }

  ["change", "input"].forEach((eventName) => {
    mdYearSelect.addEventListener(eventName, refreshMdSubmit);
    mdSubjectSelect.addEventListener(eventName, refreshMdSubmit);
    mdChapterSelect.addEventListener(eventName, refreshMdSubmit);
    mdFileInput.addEventListener(eventName, refreshMdSubmit);
  });
  refreshMdSubmit();

  mdForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!mdFormReady()) {
      showMdStatus("Year, subject, chapter, and a .md file are required.", "error");
      refreshMdSubmit();
      return;
    }
    const data = new FormData(mdForm);
    mdApplyBtn.disabled = true;
    showMdStatus("Applying markdown to the app content file…", "");
    try {
      const health = await fetch(API + "/api/health").catch(() => null);
      if (!health || !health.ok) {
        throw new Error(
          "Start the upload helper first: python tools/content_upload_server.py"
        );
      }
      const response = await fetch(API + "/api/upload-markdown", {
        method: "POST",
        body: data,
      });
      const result = await readJson(response);
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not apply markdown.");
      }
      const info = result.result || {};
      let msg =
        (info.created ? "Created new chapter in " : "Updated ") +
        (info.content_file || "content") +
        " · unit " +
        (info.unit_id || result.chapter) +
        " · " +
        (info.unit_title || "") +
        " · " +
        (info.topics || "?") +
        " topic(s).\nSaved copy: " +
        (result.saved_markdown || "");
      if (info.warnings && info.warnings.length) {
        msg += "\n\n" + info.warnings.join("\n");
      }
      showMdStatus(msg, "ok");
    } catch (err) {
      showMdStatus(err.message || "Could not apply markdown.", "error");
    } finally {
      refreshMdSubmit();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!yearSelect.value || !subjectSelect.value) {
      showStatus("Year and subject are required.", "error");
      refreshSubmit();
      return;
    }
    const data = new FormData(form);
    const file = data.get("file");
    if (!(file instanceof File) || !file.name) {
      showStatus("Choose a PDF file.", "error");
      return;
    }
    button.disabled = true;
    picker.hidden = true;
    splitResult = null;
    showStatus("Uploading and splitting chapters… this can take a minute for a full book.", "");
    try {
      const health = await fetch(API + "/api/health").catch(() => null);
      if (!health || !health.ok) {
        throw new Error(
          "Start the upload helper first: python tools/content_upload_server.py"
        );
      }
      const response = await fetch(API + "/api/upload", { method: "POST", body: data });
      const result = await readJson(response);
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Upload failed.");
      }
      splitResult = result;
      const chapters = (result.chapters || []).map((item) => {
        if (typeof item === "string") {
          const name = item.split(/[/\\]/).pop();
          return { path: item, name: name, chapter: name, title: name };
        }
        return item;
      });
      renderChapters(chapters);
      showStatus(
        "Split " +
          chapters.length +
          " topic" +
          (chapters.length === 1 ? "" : "s") +
          " in " +
          result.folder +
          ".\nTick the topics you want, then queue those builds.",
        "ok"
      );
    } catch (err) {
      showStatus(err.message || "Upload failed.", "error");
    } finally {
      refreshSubmit();
    }
  });
})();
