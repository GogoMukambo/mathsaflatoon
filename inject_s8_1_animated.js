const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "interactive-whiteboard-data.js");
const raw = fs.readFileSync(file, "utf8");
const jsonStr = raw.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const data = eval("(" + jsonStr + ")");

const INK = "#0f172a";
const SUB = "#475569";
const GREEN = "#059669";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PALE_G = "#d1fae5";
const PALE_O = "#ffedd5";

function T(x, y, text, color, size) {
  return { type: "text", x, y, text, color: color || INK, size: size || 16 };
}
function R(x, y, w, h, fill, stroke) {
  return { type: "rect", x, y, width: w, height: h, fill, stroke: stroke || "#cbd5e1", strokeWidth: 2, rx: 8 };
}
function P(d, stroke, width, dash) {
  const el = { type: "path", d, stroke, width: width || 3, fill: "none" };
  if (dash) el.dash = dash;
  return el;
}
function C(cx, cy, r, fill, stroke) {
  return { type: "circle", cx, cy, r, fill: fill || "#ffffff", stroke: stroke || INK, width: 3 };
}
function frame(title) {
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
    R(50, 40, 700, 403, "#f8fafc", "#cbd5e1"),
    T(400, 74, title, INK, 18),
  ];
}

data["s8_1.1"] = {
  title: "1.1 Photosynthesis",
  watermark: "Section 1.1: Photosynthesis",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    card_0: [
      {
        narration: "Plants are amazing factories. They use light energy from the sun to make their own food.",
        rule: "Photosynthesis makes food using light.",
        quizQ: "",
        quizA: "",
        elements: [
          ...frame("Making glucose with light"),
          C(200, 150, 40, PALE_O, ORANGE),
          T(200, 150, "Sun", ORANGE, 20),
          P("M 230 170 L 300 220", ORANGE, 3, "5,5"),
          P("M 250 130 L 320 160", ORANGE, 3, "5,5"),
          T(330, 190, "light energy", ORANGE, 16),
          P("M 200 350 Q 200 200 400 150 Q 600 200 600 350 Z", PALE_G, GREEN),
          T(400, 260, "Green leaf", GREEN, 20)
        ]
      },
      {
        clear: true,
        narration: "The green colour comes from chlorophyll. It traps the light energy so the plant can use it.",
        rule: "Chlorophyll traps light energy.",
        quizQ: "",
        quizA: "",
        elements: [
          ...frame("Making glucose with light"),
          C(200, 150, 40, PALE_O, ORANGE),
          T(200, 150, "Sun", ORANGE, 20),
          P("M 230 170 L 300 220", ORANGE, 3, "5,5"),
          T(330, 190, "light energy", ORANGE, 16),
          P("M 200 350 Q 200 200 400 150 Q 600 200 600 350 Z", PALE_G, GREEN),
          C(400, 260, 40, GREEN, "#047857"),
          T(400, 260, "chlorophyll", "#ffffff", 14),
          T(400, 310, "traps light", GREEN, 16)
        ]
      },
      {
        clear: true,
        narration: "The plant takes in carbon dioxide from the air and water from the soil.",
        rule: "Reactants: Carbon dioxide and water.",
        quizQ: "",
        quizA: "",
        elements: [
          ...frame("Making glucose with light"),
          P("M 200 350 Q 200 200 400 150 Q 600 200 600 350 Z", PALE_G, GREEN),
          C(400, 260, 40, GREEN, "#047857"),
          P("M 150 220 L 250 240", BLUE, 3),
          P("M 150 260 L 250 260", BLUE, 3),
          T(120, 240, "CO₂ from air", BLUE, 16),
          P("M 400 420 L 400 350", BLUE, 4),
          T(400, 440, "water from roots", BLUE, 16)
        ]
      },
      {
        clear: true,
        narration: "Inside the leaf, these ingredients are turned into glucose (food) and oxygen (which is released).",
        rule: "Carbon dioxide + water → glucose + oxygen.",
        quizQ: "What are the two products of photosynthesis?",
        quizA: "Glucose and oxygen.",
        elements: [
          ...frame("Making glucose with light"),
          P("M 200 350 Q 200 200 400 150 Q 600 200 600 350 Z", PALE_G, GREEN),
          T(400, 260, "glucose made", GREEN, 20),
          P("M 550 240 L 650 220", BLUE, 3),
          P("M 550 260 L 650 260", BLUE, 3),
          T(690, 240, "O₂ released", BLUE, 16),
          T(400, 120, "Carbon dioxide + water → glucose + oxygen", INK, 18)
        ]
      }
    ],
    card_1: [
      {
        narration: "Let's look at the chemical equation. Six molecules of carbon dioxide and six of water are needed.",
        rule: "6CO₂ + 6H₂O",
        quizQ: "",
        quizA: "",
        elements: [
          ...frame("The chemical equation"),
          T(250, 200, "6 CO₂", BLUE, 24),
          T(330, 200, "+", INK, 24),
          T(410, 200, "6 H₂O", BLUE, 24)
        ]
      },
      {
        clear: true,
        narration: "With light and chlorophyll, they react to make one large glucose molecule and six oxygen molecules.",
        rule: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        quizQ: "What is the chemical formula for glucose?",
        quizA: "C₆H₁₂O₆",
        elements: [
          ...frame("The chemical equation"),
          T(200, 200, "6 CO₂", BLUE, 24),
          T(270, 200, "+", INK, 24),
          T(340, 200, "6 H₂O", BLUE, 24),
          P("M 400 200 L 480 200", INK, 3),
          T(440, 170, "light", ORANGE, 14),
          T(440, 230, "chlorophyll", GREEN, 14),
          T(560, 200, "C₆H₁₂O₆", GREEN, 24),
          T(640, 200, "+", INK, 24),
          T(700, 200, "6 O₂", BLUE, 24)
        ]
      }
    ],
    card_2: [
      {
        narration: "Leaves are adapted for photosynthesis. Being broad gives them a large surface area to catch lots of sunlight.",
        rule: "Broad to catch more light.",
        quizQ: "",
        quizA: "",
        elements: [
          ...frame("Why leaves are broad and thin"),
          R(200, 200, 400, 40, PALE_G, GREEN),
          P("M 250 120 L 250 180", ORANGE, 3, "5,5"),
          P("M 400 120 L 400 180", ORANGE, 3, "5,5"),
          P("M 550 120 L 550 180", ORANGE, 3, "5,5"),
          T(400, 100, "sunlight hits large surface", ORANGE, 16)
        ]
      },
      {
        clear: true,
        narration: "Being thin means gases like carbon dioxide have a very short distance to travel to reach the cells inside.",
        rule: "Thin for fast gas diffusion.",
        quizQ: "Why are most leaves broad and thin?",
        quizA: "Broad to catch more light; thin for a short diffusion distance for gases.",
        elements: [
          ...frame("Why leaves are broad and thin"),
          R(200, 200, 400, 40, PALE_G, GREEN),
          T(150, 220, "CO₂", BLUE, 16),
          P("M 180 220 L 220 220", BLUE, 2),
          T(400, 220, "short distance for gases", SUB, 16),
          P("M 400 240 L 400 280", INK, 2),
          P("M 400 200 L 400 160", INK, 2),
          T(400, 300, "thin leaf", INK, 16)
        ]
      }
    ]
  }
};

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote animated s8_1.1");
