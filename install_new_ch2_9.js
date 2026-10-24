// Installs the supplied "Chapter 2 to 9" boards over the existing Year 7 Science data.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = "C:/Users/rupes/Downloads/Chapter 2 to 9.js";
const root = __dirname;
const ILLUSTRATIONS = path.join(root, "assets", "illustrations");

function load(file, raw) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw !== undefined ? raw : fs.readFileSync(file, "utf8"), ctx);
  return ctx.window.INTERACTIVE_WHITEBOARD_DATA || {};
}

const incoming = load(SRC, fs.readFileSync(SRC, "utf8").replace(/\[cite:[^\]]*\]/g, ""));
const data = load(path.join(root, "interactive-whiteboard-data.js"));

// The schematic diagrams are SVG files, so point the board at the file that exists.
function resolveSrc(src) {
  const base = String(src).replace(/^.*\//, "").replace(/\.(png|jpg|jpeg|svg)$/i, "");
  for (const ext of [".svg", ".png", ".jpg"]) {
    if (fs.existsSync(path.join(ILLUSTRATIONS, base + ext))) return "assets/illustrations/" + base + ext;
  }
  return null;
}

const unresolved = new Set();
const keys = Object.keys(incoming).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

keys.forEach((key) => {
  const board = incoming[key];
  Object.values(board.scenes || {}).forEach((steps) =>
    (steps || []).forEach((step) => {
      (step.elements || []).forEach((el) => {
        if (el.type !== "image") return;
        const resolved = resolveSrc(el.src || el.href || el.url || "");
        if (resolved) el.src = resolved;
        else unresolved.add(String(el.src));
      });
    })
  );
  data[key] = board;
});

if (unresolved.size) {
  throw new Error("missing illustrations:\n" + [...unresolved].join("\n"));
}

fs.writeFileSync(
  path.join(root, "interactive-whiteboard-data.js"),
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n"
);

const extra = {};
Object.keys(data)
  .filter((k) => /^s7_[2-9]\./.test(k))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach((k) => {
    extra[k] = data[k];
  });
fs.writeFileSync(
  path.join(root, "iwb-y7-science-enhanced.js"),
  "// Year 7 Science Ch2+ enhanced boards\n" +
    "window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};\n" +
    "Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, " +
    JSON.stringify(extra, null, 2) +
    ");\n"
);

console.log("installed " + keys.length + " boards: " + keys.join(", "));
