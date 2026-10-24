const fs = require("fs");
const path = require("path");
const vm = require("vm");

const downloads = [
  "C:\\Users\\rupes\\Downloads\\1.1.js",
  "C:\\Users\\rupes\\Downloads\\1.2.js",
  "C:\\Users\\rupes\\Downloads\\1.3.js",
  "C:\\Users\\rupes\\Downloads\\1.4.js",
];
const destDir = "C:\\OneDrive\\Documents\\Study Data Store\\Year 7 - IGCSE\\Animations";
const dataPath = path.join(__dirname, "interactive-whiteboard-data.js");

function loadData(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  return ctx.window.INTERACTIVE_WHITEBOARD_DATA;
}

const data = loadData(dataPath);
const incoming = {};
for (const file of downloads) {
  const part = loadData(file);
  Object.assign(incoming, part);
}

const keys = ["s7_1.1", "s7_1.2", "s7_1.3", "s7_1.4"];
for (const k of keys) {
  if (!incoming[k]) throw new Error("Missing key " + k);
  data[k] = incoming[k];
}

fs.writeFileSync(dataPath, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");

fs.mkdirSync(destDir, { recursive: true });
const titles = {
  "s7_1.1": "1.1 The human respiratory system",
  "s7_1.2": "1.2 Gas exchange",
  "s7_1.3": "1.3 Breathing",
  "s7_1.4": "1.4 Respiration",
};
for (const k of keys) {
  const topic = k.replace("s7_", "");
  const out = path.join(destDir, topic + ".js");
  const body =
    `// Year 7 Science — Chapter 1 — ${titles[k]}\n` +
    `// Key: ${k}\n` +
    `window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};\n` +
    `window.INTERACTIVE_WHITEBOARD_DATA[${JSON.stringify(k)}] = ${JSON.stringify(data[k], null, 2)};\n`;
  fs.writeFileSync(out, body);
  console.log("wrote", out, data[k].title, "subtopics", data[k].subtopics.length);
}
console.log("updated interactive-whiteboard-data.js");
