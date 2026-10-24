const fs = require("fs");

// Read Year 8 content
const contentY8 = fs.readFileSync("content-y8-maths.js", "utf8");
const matchY8 = contentY8.match(/window\.MATHS_Y8\s*=\s*(\{[\s\S]*?\});/);
if (!matchY8) throw new Error("Could not parse Year 8 content");
const y8Data = eval("(" + matchY8[1] + ")");

// Read existing whiteboard data
const wbContent = fs.readFileSync("interactive-whiteboard-data.js", "utf8");
const wbJsonStr = wbContent.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const wbData = eval("(" + wbJsonStr + ")");

// Helper to create basic text elements
function createText(text, x, y, size, color = "#334155", bold = false) {
  return { type: "text", x, y, text, size, color, bold };
}

// Generate basic visuals for a topic
function generateScenesForTopic(unitId, topic) {
  const scenes = [];
  
  topic.cards.forEach((card, index) => {
    const elements = [];
    
    // Background
    elements.push({ type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" });
    
    // Title
    elements.push(createText(topic.title, 400, 50, 24, "#0f172a", true));
    
    // Card kind badge
    elements.push({ type: "rect", x: 400 - 40, y: 80, width: 80, height: 24, fill: "#e2e8f0", rx: 12 });
    elements.push(createText(card.kind, 400, 92, 12, "#475569", true));
    
    // Question text
    const qLines = splitText(card.front, 60);
    qLines.forEach((line, i) => {
      elements.push(createText(line, 400, 140 + i * 24, 18, "#1e293b", true));
    });
    
    // Decorative separator
    elements.push({ type: "line", x1: 200, y1: 220, x2: 600, y2: 220, stroke: "#cbd5e1", strokeWidth: 2 });
    
    // Answer text
    const aLines = splitText(card.back, 65);
    aLines.forEach((line, i) => {
      elements.push(createText(line, 400, 260 + i * 22, 16, "#334155", false));
    });
    
    // Add some visual flair based on unit/topic
    addVisualFlair(elements, unitId, topic.id, index);
    
    scenes.push({ id: `scene${index + 1}`, elements });
  });
  
  return { scenes: { default: scenes } };
}

function splitText(text, maxLen) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";
  for (const word of words) {
    if ((currentLine + word).length > maxLen) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines;
}

function addVisualFlair(elements, unitId, topicId, index) {
  // Simple visual flair based on unit
  const yPos = 400;
  
  if (unitId === "m1") { // Number
    elements.push({ type: "circle", cx: 350, cy: yPos, r: 20, fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: 2 });
    elements.push(createText("π", 350, yPos + 6, 20, "#0284c7", true));
    elements.push({ type: "circle", cx: 450, cy: yPos, r: 20, fill: "#fce7f3", stroke: "#db2777", strokeWidth: 2 });
    elements.push(createText("√2", 450, yPos + 6, 16, "#db2777", true));
  } else if (unitId === "m2") { // Algebra
    elements.push({ type: "rect", x: 350, y: yPos - 15, width: 100, height: 30, fill: "#dcfce7", stroke: "#16a34a", strokeWidth: 2 });
    elements.push(createText("x + y = ?", 400, yPos + 5, 16, "#16a34a", true));
  } else if (unitId === "m5" || unitId === "m7" || unitId === "m13" || unitId === "m14") { // Geometry
    elements.push({ type: "path", d: `M 370 ${yPos+15} L 400 ${yPos-15} L 430 ${yPos+15} Z`, fill: "#fef08a", stroke: "#ca8a04", strokeWidth: 2 });
  } else if (unitId === "m6" || unitId === "m12" || unitId === "m15") { // Statistics
    elements.push({ type: "rect", x: 370, y: yPos - 10, width: 15, height: 25, fill: "#bfdbfe" });
    elements.push({ type: "rect", x: 390, y: yPos - 20, width: 15, height: 35, fill: "#93c5fd" });
    elements.push({ type: "rect", x: 410, y: yPos - 5, width: 15, height: 20, fill: "#60a5fa" });
  } else {
    // Default flair
    elements.push({ type: "circle", cx: 380, cy: yPos, r: 5, fill: "#94a3b8" });
    elements.push({ type: "circle", cx: 400, cy: yPos, r: 5, fill: "#94a3b8" });
    elements.push({ type: "circle", cx: 420, cy: yPos, r: 5, fill: "#94a3b8" });
  }
}

// Generate for all Y8 topics
y8Data.units.forEach(unit => {
  unit.topics.forEach(topic => {
    const key = `m8_${topic.id}`;
    wbData[key] = generateScenesForTopic(unit.id, topic);
  });
});

// Save back
fs.writeFileSync(
  "interactive-whiteboard-data.js",
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(wbData, null, 2) + ";\n",
  "utf8"
);
console.log("Successfully generated rich visuals for Year 8!");
