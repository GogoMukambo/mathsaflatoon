const fs = require("fs");

const content = fs.readFileSync("interactive-whiteboard-data.js", "utf8");
const jsonStr = content.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const data = eval("(" + jsonStr + ")");

const BG = "#ffffff";
const BOX = "#f8fafc";
const LINE = "#cbd5e1";
const INK = "#0f172a";
const SUB = "#475569";
const GREEN = "#059669";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PALE_BLUE = "#e0f2fe";
const PALE_GREEN = "#d1fae5";
const PALE_ORANGE = "#ffedd5";
const PALE_RED = "#fee2e2";
const PALE_GOLD = "#fef3c7";
const PURPLE = "#7c3aed";

function board(title, color) {
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: BG },
    { type: "rect", x: 50, y: 40, width: 700, height: 403, fill: BOX, stroke: LINE, strokeWidth: 2, rx: 15 },
    { type: "text", x: 400, y: 74, text: title, color, size: 18 },
  ];
}

function scene(narration, rule, elements, quizQ, quizA) {
  return { clear: false, narration, rule, quizQ: quizQ || "", quizA: quizA || "", elements };
}

function first(narration, rule, elements, quizQ, quizA) {
  const step = scene(narration, rule, elements, quizQ, quizA);
  delete step.clear;
  return step;
}

function cell(x, y, label, fill, color) {
  return [
    { type: "rect", x, y, width: 118, height: 52, fill, stroke: LINE, strokeWidth: 2, rx: 8 },
    { type: "text", x: x + 59, y: y + 26, text: label, color, size: 18 },
  ];
}

function grid(rows, fills) {
  const els = [];
  rows.forEach((row, r) => {
    row.forEach((label, c) => {
      const fill = (fills && fills[r] && fills[r][c]) || "#ffffff";
      const color = fill === PALE_RED ? RED : fill === PALE_GREEN ? GREEN : INK;
      els.push(...cell(300 + c * 136, 188 + r * 64, label, fill, color));
    });
  });
  return els;
}

data["m8_2.4"] = {
  title: "2.4 Expanding two linear expressions",
  watermark: "Section 2.4: Double Brackets",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" },
  ],
  scenes: {
    card_0: [
      first(
        "Each term in the first bracket multiplies each term in the second. That makes four products.",
        "Expand (x + a)(x + b) with a grid of four products.",
        [
          ...board("Four products", ORANGE),
          { type: "text", x: 400, y: 118, text: "(x + a)(x + b)", color: BLUE, size: 20 },
          { type: "text", x: 359, y: 164, text: "x", color: SUB, size: 16 },
          { type: "text", x: 495, y: 164, text: "+ b", color: SUB, size: 16 },
          { type: "text", x: 250, y: 214, text: "x", color: SUB, size: 16 },
          { type: "text", x: 250, y: 278, text: "+ a", color: SUB, size: 16 },
          ...grid(
            [["x²", "bx"], ["ax", "ab"]],
            [[PALE_BLUE, PALE_ORANGE], [PALE_GREEN, PALE_GOLD]]
          ),
        ]
      ),
      scene(
        "Add the four boxes. The answer is x squared, plus (a + b) times x, plus a times b.",
        "x² + (a + b)x + ab.",
        [
          { type: "text", x: 400, y: 390, text: "x² + (a + b)x + ab", color: GREEN, size: 18 },
        ]
      ),
    ],
    card_1: [
      first(
        "Expand (x + 3)(x + 5) in the grid. The row labels are x and + 3. The column labels are x and + 5.",
        "Multiply each row label by each column label.",
        [
          ...board("(x + 3)(x + 5)", BLUE),
          { type: "text", x: 359, y: 150, text: "x", color: SUB, size: 16 },
          { type: "text", x: 495, y: 150, text: "+ 5", color: SUB, size: 16 },
          { type: "text", x: 246, y: 214, text: "x", color: SUB, size: 16 },
          { type: "text", x: 246, y: 278, text: "+ 3", color: SUB, size: 16 },
          ...grid(
            [["x²", "5x"], ["3x", "15"]],
            [[PALE_BLUE, PALE_ORANGE], [PALE_GREEN, "#ffffff"]]
          ),
        ],
        "Expand (x + 3)(x + 5).",
        "x² + 8x + 15."
      ),
      scene(
        "5x and 3x are like terms. 5 + 3 is 8, so they make 8x.",
        "x² + 5x + 3x + 15 = x² + 8x + 15.",
        [
          { type: "text", x: 400, y: 390, text: "x² + 8x + 15", color: GREEN, size: 22 },
        ],
        "Expand (x + 3)(x + 5).",
        "x² + 8x + 15."
      ),
    ],
    card_2: [
      first(
        "Expand (2x − 1)(x + 4). Keep the minus sign with the 1.",
        "The row −1 multiplies both columns.",
        [
          ...board("(2x − 1)(x + 4)", RED),
          { type: "text", x: 359, y: 150, text: "x", color: SUB, size: 16 },
          { type: "text", x: 495, y: 150, text: "+ 4", color: SUB, size: 16 },
          { type: "text", x: 240, y: 214, text: "2x", color: SUB, size: 16 },
          { type: "text", x: 240, y: 278, text: "− 1", color: RED, size: 16 },
          ...grid(
            [["2x²", "8x"], ["−x", "−4"]],
            [[PALE_BLUE, PALE_ORANGE], [PALE_RED, PALE_RED]]
          ),
        ],
        "Expand (2x − 1)(x + 4).",
        "2x² + 7x − 4."
      ),
      scene(
        "8x minus x is 7x. The four products simplify to 2x² + 7x − 4.",
        "2x² + 8x − x − 4 = 2x² + 7x − 4.",
        [
          { type: "text", x: 400, y: 390, text: "2x² + 7x − 4", color: GREEN, size: 22 },
        ],
        "Expand (2x − 1)(x + 4).",
        "2x² + 7x − 4."
      ),
    ],
    card_3: [
      first(
        "In (x + 5)(x − 5) the middle products are +5x and −5x. They are opposites.",
        "(a + b)(a − b) = a² − b².",
        [
          ...board("Difference of two squares", PURPLE),
          { type: "text", x: 359, y: 150, text: "x", color: SUB, size: 16 },
          { type: "text", x: 495, y: 150, text: "− 5", color: SUB, size: 16 },
          { type: "text", x: 246, y: 214, text: "x", color: SUB, size: 16 },
          { type: "text", x: 246, y: 278, text: "+ 5", color: SUB, size: 16 },
          ...grid(
            [["x²", "−5x"], ["5x", "−25"]],
            [[PALE_BLUE, PALE_RED], [PALE_RED, "#ffffff"]]
          ),
        ],
        "What is a difference of two squares?",
        "(x + 5)(x − 5) = x² − 25."
      ),
      scene(
        "−5x + 5x is zero, so those boxes disappear. Only x² − 25 is left.",
        "(x + 5)(x − 5) = x² − 25. A perfect square such as (x + 3)² is x² + 6x + 9.",
        [
          { type: "text", x: 400, y: 360, text: "−5x + 5x = 0", color: RED, size: 16 },
          { type: "text", x: 400, y: 408, text: "x² − 25", color: GREEN, size: 22 },
        ],
        "What is a difference of two squares?",
        "(x + 5)(x − 5) = x² − 25."
      ),
    ],
  },
};

function boxes(elements) {
  return elements
    .filter((el) => el.type === "text")
    .map((el) => {
      const size = el.size || 22;
      const w = size * 0.62 * String(el.text).length;
      const h = size;
      return { text: el.text, x1: el.x - w / 2, y1: el.y - h / 2, x2: el.x + w / 2, y2: el.y + h / 2 };
    });
}

function overlaps(a, b) {
  return a.x1 < b.x2 - 2 && a.x2 > b.x1 + 2 && a.y1 < b.y2 - 2 && a.y2 > b.y1 + 2;
}

const warnings = [];
for (const [subId, scenes] of Object.entries(data["m8_2.4"].scenes)) {
  const stacked = [];
  scenes.forEach((step, index) => {
    if (step.clear !== false) stacked.length = 0;
    stacked.push(...step.elements);
    const textBoxes = boxes(stacked);
    textBoxes.forEach((box) => {
      if (box.x1 < 55 || box.x2 > 745 || box.y1 < 48 || box.y2 > 438) {
        warnings.push(`${subId} step ${index} outside "${box.text}"`);
      }
    });
    for (let i = 0; i < textBoxes.length; i++) {
      for (let j = i + 1; j < textBoxes.length; j++) {
        if (overlaps(textBoxes[i], textBoxes[j])) {
          warnings.push(`${subId} step ${index} overlap "${textBoxes[i].text}" / "${textBoxes[j].text}"`);
        }
      }
    }
  });
}

if (warnings.length) {
  console.log(warnings.join("\n"));
  process.exitCode = 1;
} else {
  fs.writeFileSync(
    "interactive-whiteboard-data.js",
    "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n",
    "utf8"
  );
  console.log("Rebuilt m8_2.4");
}
