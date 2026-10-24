const fs = require("fs");

const content = fs.readFileSync("interactive-whiteboard-data.js", "utf8");
const jsonStr = content.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const data = eval("(" + jsonStr + ")");

const VIEW_H = 500;
const PAD = 16;

function scalePath(d, sy) {
  // Scale every Y coordinate (the second number of each command pair).
  return d.replace(/([MLQCTAZ])\s*([-\d.]+)(?:\s+([-\d.]+))?/gi, (full, cmd, a, b) => {
    if (b === undefined) return full;
    const y = Math.round(Number(b) * sy);
    return `${cmd} ${a} ${y}`;
  }).replace(/([-\d.]+)\s+([-\d.]+)/g, (full, a, b, offset, str) => {
    // Quadratic/cubic already handled if commands are single pairs.
    // Handle remaining bare pairs that follow a command with multiple pairs (Q, C).
    return full;
  });
}

function scalePathAllPairs(d, sy) {
  // Walk tokens. After a command, numbers come in pairs (x y) except H/V.
  const tokens = d.match(/[MLHVCSQTAZ]|-?\d*\.?\d+/gi);
  if (!tokens) return d;
  let out = "";
  let i = 0;
  let cmd = "M";
  while (i < tokens.length) {
    const t = tokens[i];
    if (/[MLHVCSQTAZ]/i.test(t) && /[A-Za-z]/.test(t)) {
      cmd = t.toUpperCase();
      out += t + " ";
      i++;
      continue;
    }
    if (cmd === "H") {
      out += t + " ";
      i++;
      continue;
    }
    if (cmd === "V") {
      out += String(Math.round(Number(t) * sy)) + " ";
      i++;
      continue;
    }
    const x = tokens[i];
    const y = tokens[i + 1];
    if (y === undefined) {
      out += x + " ";
      break;
    }
    out += `${x} ${Math.round(Number(y) * sy)} `;
    i += 2;
  }
  return out.trim();
}

function fitElements(elements, sy) {
  return elements.map((el) => {
    const e = { ...el };
    if (e.type === "rect" && e.x === 0 && e.y === 0 && e.width === 800) {
      e.height = VIEW_H;
      return e;
    }
    if (typeof e.y === "number") e.y = Math.round(e.y * sy);
    if (typeof e.cy === "number") e.cy = Math.round(e.cy * sy);
    if (typeof e.height === "number" && e.type === "rect") {
      e.height = Math.round(e.height * sy);
    }
    if (typeof e.size === "number") e.size = Math.max(12, Math.round(e.size * 0.82));
    if (typeof e.d === "string") e.d = scalePathAllPairs(e.d, sy);
    return e;
  });
}

function maxY(elements) {
  let max = 0;
  for (const el of elements) {
    if (typeof el.y === "number") max = Math.max(max, el.y + (el.size || 0) / 2 + (el.height || 0));
    if (typeof el.cy === "number") max = Math.max(max, el.cy + (el.r || 0));
    if (typeof el.d === "string") {
      const nums = el.d.match(/-?\d*\.?\d+/g) || [];
      for (let i = 1; i < nums.length; i += 2) max = Math.max(max, Number(nums[i]));
    }
  }
  return max;
}

for (const key of Object.keys(data)) {
  if (!/^m7_[12]\./.test(key)) continue;
  const topic = data[key];
  let peak = 0;
  for (const sceneList of Object.values(topic.scenes)) {
    for (const scene of sceneList) peak = Math.max(peak, maxY(scene.elements || []));
  }
  const sy = peak > VIEW_H - PAD ? (VIEW_H - PAD) / peak : 1;
  console.log(key, "peak", peak, "scale", sy.toFixed(3));
  for (const sceneList of Object.values(topic.scenes)) {
    for (const scene of sceneList) {
      scene.elements = fitElements(scene.elements || [], sy);
    }
  }
}

fs.writeFileSync(
  "interactive-whiteboard-data.js",
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n",
  "utf8"
);
console.log("Fitted chapter 1 and 2 into the 800x500 board.");
