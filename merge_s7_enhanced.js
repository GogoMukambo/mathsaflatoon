const fs = require("fs");
const path = require("path");
const vm = require("vm");

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  return ctx.window.INTERACTIVE_WHITEBOARD_DATA;
}

const root = __dirname;
const data = load(path.join(root, "interactive-whiteboard-data.js"));
const extra = load(path.join(root, "iwb-y7-science-enhanced.js"));
const keys = Object.keys(extra).filter((k) => k.startsWith("s7_"));
for (const k of keys) data[k] = extra[k];

fs.writeFileSync(
  path.join(root, "interactive-whiteboard-data.js"),
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n"
);
console.log("merged", keys.sort().join(", "));
