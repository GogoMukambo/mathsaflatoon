const fs = require("fs");
const content = fs.readFileSync("interactive-whiteboard-data.js", "utf8");
const data = eval("(" + content.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "") + ")");

function maxContent(elements) {
  let max = 0;
  for (const el of elements) {
    if (el.type === "rect" && el.width === 800) continue;
    if (typeof el.y === "number") max = Math.max(max, el.y + (el.size || 0) / 2 + (el.height || 0));
    if (typeof el.cy === "number") max = Math.max(max, el.cy + (el.r || 0));
  }
  return max;
}

for (const key of Object.keys(data)) {
  if (!/^m7_[12]\./.test(key)) continue;
  let peak = 0;
  for (const list of Object.values(data[key].scenes)) {
    for (const scene of list) peak = Math.max(peak, maxContent(scene.elements));
  }
  console.log(key, "content bottom", peak);
}
