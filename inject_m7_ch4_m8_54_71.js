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
const PURPLE = "#7c3aed";
const PALE_BLUE = "#e0f2fe";
const PALE_ORANGE = "#ffedd5";
const PALE_GREEN = "#d1fae5";

function board(title, color) {
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: BG },
    { type: "rect", x: 50, y: 40, width: 700, height: 403, fill: BOX, stroke: LINE, strokeWidth: 2, rx: 15 },
    { type: "text", x: 400, y: 78, text: title, color: color, size: 18 },
  ];
}

function arrow(x1, y1, x2, y2, color) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const hx = x2 - ux * 12;
  const hy = y2 - uy * 12;
  return [
    { type: "path", d: `M ${x1} ${y1} L ${hx} ${hy}`, stroke: color, width: 3, fill: "none" },
    { type: "path", d: `M ${x2} ${y2} L ${hx + px * 7} ${hy + py * 7} L ${hx - px * 7} ${hy - py * 7} Z`, stroke: color, width: 1, fill: color },
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

function pills() {
  return [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
  ];
}

function digits(chars, y, color, size) {
  const gap = 42;
  const start = 400 - ((chars.length - 1) * gap) / 2;
  return chars.map((ch, i) => ({
    type: "text",
    x: Math.round(start + i * gap),
    y,
    text: ch,
    color,
    size: size || 22,
  }));
}

const COL = [316, 358, 400, 442, 484];

function placeRow(chars, y, color) {
  return chars.map((ch, i) => ({
    type: "text",
    x: COL[i],
    y,
    text: ch,
    color,
    size: 22,
  }));
}

data["m7_4.1"] = {
  title: "4.1 Ordering decimals",
  watermark: "Section 4.1: Ordering",
  subtopics: pills(),
  scenes: {
    card_0: [
      first(
        "To see which decimal is bigger, line the decimal points up in one column.",
        "Line up the decimal points, then compare from left to right.",
        [
          ...board("Line up the dots", BLUE),
          { type: "path", d: "M 358 150 L 358 300", stroke: RED, width: 2, fill: "none", dash: "4,4" },
          ...placeRow(["0", ".", "3", "0", "7"], 190, INK),
          ...placeRow(["0", ".", "3", "2"], 260, INK),
          { type: "text", x: 400, y: 340, text: "The dots sit in one column", color: SUB, size: 16 },
        ]
      ),
      scene(
        "0.32 is shorter, so write a zero on the end. It is still the same number: 0.320.",
        "Add zeros so both decimals have the same number of places.",
        [
          { type: "text", x: COL[4], y: 260, text: "0", color: GREEN, size: 22 },
          { type: "circle", cx: COL[4], cy: 260, r: 16, fill: "none", stroke: GREEN, width: 2 },
        ]
      ),
      scene(
        "Now look at the hundredths. 2 is more than 0, so 0.32 is larger.",
        "0.32 is larger than 0.307.",
        [
          { type: "circle", cx: COL[3], cy: 190, r: 16, fill: "none", stroke: ORANGE, width: 2 },
          { type: "circle", cx: COL[3], cy: 260, r: 16, fill: "none", stroke: ORANGE, width: 2 },
          { type: "text", x: 400, y: 400, text: "2 > 0    so  0.32 is larger", color: GREEN, size: 18 },
        ]
      ),
    ],
    card_1: [
      first(
        "These are all negative. On a number line, further left means smaller.",
        "A negative number with the larger size is further left, so it is smaller.",
        [
          ...board("Negatives: further left is smaller", PURPLE),
          { type: "path", d: "M 140 270 L 660 270", stroke: INK, width: 3, fill: "none" },
          ...arrow(620, 270, 670, 270, INK),
          { type: "circle", cx: 190, cy: 270, r: 7, fill: RED },
          { type: "circle", cx: 320, cy: 270, r: 7, fill: ORANGE },
          { type: "circle", cx: 460, cy: 270, r: 7, fill: BLUE },
          { type: "circle", cx: 600, cy: 270, r: 7, fill: GREEN },
          { type: "text", x: 190, y: 220, text: "−4.76", color: RED, size: 16 },
          { type: "text", x: 320, y: 220, text: "−4.67", color: ORANGE, size: 16 },
          { type: "text", x: 460, y: 220, text: "−4.50", color: BLUE, size: 16 },
          { type: "text", x: 600, y: 220, text: "−4.05", color: GREEN, size: 16 },
        ],
        "Put −4.76, −4.05, −4.67 and −4.50 in order, smallest first.",
        "−4.76, −4.67, −4.50, −4.05."
      ),
      scene(
        "Read from the left. The smallest is −4.76. The largest of these is −4.05.",
        "Smallest first: −4.76, −4.67, −4.50, −4.05.",
        [
          { type: "text", x: 400, y: 360, text: "−4.76,  −4.67,  −4.50,  −4.05", color: INK, size: 16 },
          { type: "text", x: 400, y: 400, text: "smallest  →  largest", color: GREEN, size: 16 },
        ],
        "Put −4.76, −4.05, −4.67 and −4.50 in order, smallest first.",
        "−4.76, −4.67, −4.50, −4.05."
      ),
    ],
    card_2: [
      first(
        "Which is larger, 0.307 or 0.32? Line up the dots before you decide.",
        "Compare the digits in the same columns.",
        [
          ...board("Which decimal is larger?", GREEN),
          { type: "path", d: "M 358 160 L 358 280", stroke: RED, width: 2, fill: "none", dash: "4,4" },
          ...placeRow(["0", ".", "3", "0", "7"], 200, INK),
          ...placeRow(["0", ".", "3", "2", "0"], 260, INK),
        ],
        "Which is larger, 0.307 or 0.32?",
        "0.32."
      ),
      scene(
        "Hundredths: 0 against 2. The 2 wins, so 0.32 is larger.",
        "0.32 is larger.",
        [
          { type: "text", x: 400, y: 360, text: "0.32 is larger", color: GREEN, size: 22 },
        ],
        "Which is larger, 0.307 or 0.32?",
        "0.32."
      ),
    ],
  },
};

data["m7_4.2"] = {
  title: "4.2 Multiplying decimals",
  watermark: "Section 4.2: Multiplying",
  subtopics: pills(),
  scenes: {
    card_0: [
      first(
        "Hide the decimal points and multiply the digits as whole numbers.",
        "Ignore the dots first. Multiply as whole numbers.",
        [
          ...board("Ignore the dots first", BLUE),
          { type: "text", x: 400, y: 160, text: "5.96 × 0.35", color: INK, size: 26 },
          ...arrow(400, 190, 400, 240, BLUE),
          { type: "text", x: 400, y: 280, text: "596 × 35", color: BLUE, size: 24 },
        ]
      ),
      scene(
        "596 times 35 is 20860. Keep that whole number. The dot comes back in the next step.",
        "596 × 35 = 20860.",
        [
          { type: "text", x: 400, y: 360, text: "596 × 35 = 20860", color: GREEN, size: 20 },
        ]
      ),
    ],
    card_1: [
      first(
        "Count the digits behind the dots in the question. 5.96 has two. 0.35 has two.",
        "The answer needs as many decimal places as the question.",
        [
          ...board("Count the decimal places", ORANGE),
          { type: "text", x: 250, y: 170, text: "5.96", color: INK, size: 26 },
          { type: "text", x: 550, y: 170, text: "0.35", color: INK, size: 26 },
          { type: "text", x: 250, y: 220, text: "2 places", color: ORANGE, size: 16 },
          { type: "text", x: 550, y: 220, text: "2 places", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 290, text: "2 + 2 = 4 places", color: RED, size: 18 },
        ],
        "Work out 5.96 × 0.35.",
        "596 × 35 = 20860. Four decimal places gives 2.0860, which is 2.086."
      ),
      scene(
        "Start from the right of 20860 and hop back 4 places. The answer is 2.0860.",
        "20860 with 4 decimal places is 2.0860, which is 2.086.",
        [
          { type: "text", x: 400, y: 360, text: "2.0860", color: PURPLE, size: 26 },
          { type: "text", x: 400, y: 410, text: "= 2.086", color: GREEN, size: 22 },
        ],
        "Work out 5.96 × 0.35.",
        "596 × 35 = 20860. Four decimal places gives 2.0860, which is 2.086."
      ),
    ],
    card_2: [
      first(
        "Check with a nearby whole-number multiply. 5.96 is about 6, and 0.35 is about 0.4.",
        "Estimate before you trust the exact answer.",
        [
          ...board("Check with an estimate", GREEN),
          { type: "text", x: 250, y: 180, text: "5.96 ≈ 6", color: BLUE, size: 18 },
          { type: "text", x: 550, y: 180, text: "0.35 ≈ 0.4", color: ORANGE, size: 18 },
          { type: "text", x: 400, y: 260, text: "6 × 0.4 = 2.4", color: INK, size: 24 },
        ],
        "How can you check 5.96 × 0.35?",
        "Estimate 6 × 0.4 = 2.4, which is close to 2.086."
      ),
      scene(
        "2.4 is close to 2.086, so the exact answer is sensible.",
        "6 × 0.4 = 2.4, close to 2.086.",
        [
          { type: "text", x: 400, y: 360, text: "2.4 is close to 2.086", color: GREEN, size: 20 },
        ],
        "How can you check 5.96 × 0.35?",
        "Estimate 6 × 0.4 = 2.4, which is close to 2.086."
      ),
    ],
  },
};

data["m7_4.3"] = {
  title: "4.3 Dividing by decimals",
  watermark: "Section 4.3: Dividing",
  subtopics: pills(),
  scenes: {
    card_0: [
      first(
        "Dividing by a decimal is awkward. Multiply both numbers by 10 so the divisor is a whole number.",
        "Multiply both numbers by 10, 100, or 1000 until the divisor is a whole number.",
        [
          ...board("Make the divisor whole", BLUE),
          { type: "text", x: 250, y: 180, text: "8.4", color: INK, size: 26 },
          { type: "text", x: 400, y: 180, text: "÷", color: SUB, size: 26 },
          { type: "text", x: 550, y: 180, text: "0.2", color: RED, size: 26 },
          { type: "text", x: 250, y: 230, text: "× 10", color: BLUE, size: 16 },
          { type: "text", x: 550, y: 230, text: "× 10", color: BLUE, size: 16 },
        ]
      ),
      scene(
        "8.4 becomes 84, and 0.2 becomes 2. Now it is an ordinary division: 84 ÷ 2 = 42.",
        "8.4 ÷ 0.2 = 84 ÷ 2 = 42.",
        [
          ...arrow(250, 255, 250, 300, BLUE),
          ...arrow(550, 255, 550, 300, BLUE),
          { type: "text", x: 250, y: 340, text: "84", color: BLUE, size: 26 },
          { type: "text", x: 400, y: 340, text: "÷", color: SUB, size: 26 },
          { type: "text", x: 550, y: 340, text: "2", color: GREEN, size: 26 },
          { type: "text", x: 400, y: 400, text: "= 42", color: GREEN, size: 24 },
        ]
      ),
    ],
    card_1: [
      first(
        "3.468 ÷ 0.8. The divisor 0.8 has one decimal place, so multiply both numbers by 10.",
        "One decimal place in the divisor means multiply both by 10.",
        [
          ...board("3.468 ÷ 0.8", PURPLE),
          { type: "text", x: 260, y: 180, text: "3.468", color: INK, size: 24 },
          { type: "text", x: 430, y: 180, text: "÷", color: SUB, size: 24 },
          { type: "text", x: 540, y: 180, text: "0.8", color: RED, size: 24 },
          { type: "text", x: 400, y: 240, text: "× 10 on both", color: BLUE, size: 16 },
        ],
        "Work out 3.468 ÷ 0.8.",
        "34.68 ÷ 8 = 4.335."
      ),
      scene(
        "That gives 34.68 ÷ 8. The division is 4.335.",
        "34.68 ÷ 8 = 4.335.",
        [
          { type: "text", x: 400, y: 320, text: "34.68 ÷ 8", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 390, text: "= 4.335", color: GREEN, size: 26 },
        ],
        "Work out 3.468 ÷ 0.8.",
        "34.68 ÷ 8 = 4.335."
      ),
    ],
    card_2: [
      first(
        "Work out 8.4 ÷ 0.2. What will you multiply by?",
        "Multiply both by 10.",
        [
          ...board("8.4 ÷ 0.2", GREEN),
          { type: "text", x: 400, y: 190, text: "8.4 ÷ 0.2", color: INK, size: 28 },
        ],
        "Work out 8.4 ÷ 0.2.",
        "84 ÷ 2 = 42."
      ),
      scene(
        "× 10 gives 84 ÷ 2, which is 42.",
        "84 ÷ 2 = 42.",
        [
          { type: "text", x: 400, y: 280, text: "84 ÷ 2", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 360, text: "= 42", color: GREEN, size: 28 },
        ],
        "Work out 8.4 ÷ 0.2.",
        "84 ÷ 2 = 42."
      ),
    ],
  },
};

data["m7_4.4"] = {
  title: "4.4 Making decimal calculations easier",
  watermark: "Section 4.4: Easier decimals",
  subtopics: pills(),
  scenes: {
    card_0: [
      first(
        "0.9 is the same as 1 minus 0.1. That split makes 22 × 0.9 easier.",
        "Split a decimal into parts you can multiply in your head.",
        [
          ...board("Split the decimal", ORANGE),
          { type: "text", x: 400, y: 160, text: "22 × 0.9", color: INK, size: 26 },
          { type: "text", x: 400, y: 230, text: "0.9 = 1 − 0.1", color: ORANGE, size: 20 },
        ]
      ),
      scene(
        "22 × 1 is 22. 22 × 0.1 is 2.2. Subtract: 22 − 2.2 = 19.8.",
        "22 × 0.9 = 22 − 2.2 = 19.8.",
        [
          { type: "text", x: 400, y: 310, text: "22 − 2.2", color: BLUE, size: 22 },
          { type: "text", x: 400, y: 380, text: "= 19.8", color: GREEN, size: 26 },
        ]
      ),
    ],
    card_1: [
      first(
        "4 × 12.6 × 2.5. Multiply 4 and 2.5 first, because 4 × 2.5 is exactly 10.",
        "Regroup so a pair makes a whole number.",
        [
          ...board("Regroup the multiply", BLUE),
          { type: "text", x: 400, y: 160, text: "4 × 12.6 × 2.5", color: INK, size: 22 },
          { type: "path", d: "M 300 185 Q 400 230 500 185", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 400, y: 250, text: "pair 4 with 2.5", color: ORANGE, size: 16 },
        ],
        "Work out 4 × 12.6 × 2.5 by regrouping.",
        "(4 × 2.5) × 12.6 = 10 × 12.6 = 126."
      ),
      scene(
        "4 × 2.5 = 10. Then 10 × 12.6 = 126.",
        "(4 × 2.5) × 12.6 = 126.",
        [
          { type: "text", x: 400, y: 330, text: "10 × 12.6", color: BLUE, size: 22 },
          { type: "text", x: 400, y: 390, text: "= 126", color: GREEN, size: 26 },
        ],
        "Work out 4 × 12.6 × 2.5 by regrouping.",
        "(4 × 2.5) × 12.6 = 10 × 12.6 = 126."
      ),
    ],
    card_2: [
      first(
        "0.15 is 0.5 × 0.3. Split the multiply into two easier steps.",
        "0.15 = 0.5 × 0.3.",
        [
          ...board("12 × 0.15", GREEN),
          { type: "text", x: 400, y: 170, text: "12 × 0.15", color: INK, size: 26 },
          { type: "text", x: 400, y: 240, text: "0.15 = 0.5 × 0.3", color: ORANGE, size: 18 },
        ],
        "Work out 12 × 0.15 by splitting 0.15.",
        "12 × 0.5 × 0.3 = 6 × 0.3 = 1.8."
      ),
      scene(
        "12 × 0.5 is 6. Then 6 × 0.3 is 1.8.",
        "12 × 0.5 × 0.3 = 1.8.",
        [
          { type: "text", x: 400, y: 320, text: "12 × 0.5 = 6", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 380, text: "6 × 0.3 = 1.8", color: GREEN, size: 22 },
        ],
        "Work out 12 × 0.15 by splitting 0.15.",
        "12 × 0.5 × 0.3 = 6 × 0.3 = 1.8."
      ),
    ],
  },
};

function label(x, y, text, color) {
  return { type: "text", x, y, text, color, size: 14 };
}

data["m8_5.4"] = {
  title: "5.4 Constructions",
  watermark: "Section 5.4: Constructions",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" },
  ],
  scenes: {
    card_0: [
      first(
        "With a compass and a ruler you can make four exact constructions.",
        "Perpendicular bisector, angle bisector, a perpendicular to a line, and a triangle from given sides.",
        [
          ...board("Compass and ruler", ORANGE),
          { type: "path", d: "M 130 175 L 290 175", stroke: INK, width: 3, fill: "none" },
          { type: "path", d: "M 145 175 Q 210 125 275 175", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 145 175 Q 210 225 275 175", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 210 135 L 210 215", stroke: RED, width: 2, fill: "none" },
          label(210, 250, "Cuts a line in half", BLUE),

          { type: "path", d: "M 580 210 L 500 155", stroke: INK, width: 3, fill: "none" },
          { type: "path", d: "M 580 210 L 660 155", stroke: INK, width: 3, fill: "none" },
          { type: "path", d: "M 580 210 L 580 145", stroke: RED, width: 2, fill: "none" },
          { type: "path", d: "M 545 175 Q 580 160 615 175", stroke: ORANGE, width: 2, fill: "none" },
          label(580, 250, "Cuts an angle in half", BLUE),

          { type: "path", d: "M 140 355 L 300 355", stroke: INK, width: 3, fill: "none" },
          { type: "circle", cx: 220, cy: 300, r: 5, fill: BLUE },
          { type: "path", d: "M 220 305 L 220 355", stroke: RED, width: 2, fill: "none" },
          { type: "rect", x: 220, y: 343, width: 12, height: 12, fill: "none", stroke: RED, strokeWidth: 2 },
          label(220, 395, "Straight down to a line", BLUE),

          { type: "path", d: "M 500 365 L 660 365 L 575 295 Z", stroke: PURPLE, width: 3, fill: "none" },
          label(580, 395, "A triangle from its sides", BLUE),
        ]
      ),
    ],
    card_1: [
      first(
        "A perpendicular bisector is the line of points equally far from both ends.",
        "Every point on the bisector is the same distance from A and from B.",
        [
          ...board("Equally far from A and B", BLUE),
          { type: "path", d: "M 230 240 L 570 240", stroke: INK, width: 4, fill: "none" },
          { type: "circle", cx: 230, cy: 240, r: 6, fill: BLUE },
          { type: "circle", cx: 570, cy: 240, r: 6, fill: BLUE },
          { type: "text", x: 230, y: 275, text: "A", color: BLUE, size: 16 },
          { type: "text", x: 570, y: 275, text: "B", color: BLUE, size: 16 },
          { type: "path", d: "M 250 240 Q 400 145 550 240", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 250 240 Q 400 335 550 240", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 400 165 L 400 315", stroke: RED, width: 3, fill: "none" },
          { type: "rect", x: 400, y: 228, width: 12, height: 12, fill: "none", stroke: RED, strokeWidth: 2 },
        ],
        "What does a perpendicular bisector give you?",
        "The set of points equally far from both endpoints."
      ),
      scene(
        "The red line stays exactly halfway. Every point on it matches the distance to A and to B.",
        "The bisector is the set of points equidistant from the two endpoints.",
        [
          { type: "text", x: 400, y: 390, text: "Same distance to A and to B", color: GREEN, size: 16 },
        ],
        "What does a perpendicular bisector give you?",
        "The set of points equally far from both endpoints."
      ),
    ],
    card_2: [
      first(
        "Both arcs must be drawn with the compass open the same amount.",
        "The same compass width makes the crossing equally far from both ends.",
        [
          ...board("Same compass width", RED),
          { type: "path", d: "M 250 250 L 550 250", stroke: INK, width: 4, fill: "none" },
          { type: "circle", cx: 250, cy: 250, r: 5, fill: BLUE },
          { type: "circle", cx: 550, cy: 250, r: 5, fill: BLUE },
          { type: "text", x: 250, y: 285, text: "A", color: BLUE, size: 16 },
          { type: "text", x: 550, y: 285, text: "B", color: BLUE, size: 16 },
          { type: "path", d: "M 250 250 Q 330 155 400 175", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 550 250 Q 470 155 400 175", stroke: PURPLE, width: 3, fill: "none" },
          { type: "circle", cx: 400, cy: 175, r: 6, fill: RED },
        ],
        "Why keep the same compass width for a perpendicular bisector?",
        "So the arcs meet at points equally far from both ends."
      ),
      scene(
        "If one arc is wider, the crossing is closer to one end and the line is not a true bisector.",
        "Equal compass width puts the crossing equally far from both ends.",
        [
          { type: "text", x: 280, y: 360, text: "same width", color: ORANGE, size: 14 },
          { type: "text", x: 520, y: 360, text: "same width", color: PURPLE, size: 14 },
          { type: "text", x: 400, y: 410, text: "The crossing is fair", color: GREEN, size: 16 },
        ],
        "Why keep the same compass width for a perpendicular bisector?",
        "So the arcs meet at points equally far from both ends."
      ),
    ],
    card_3: [
      first(
        "Inscribe means the inside shape's corners sit on the outside shape.",
        "A square inscribed in a circle has all four corners on the circle.",
        [
          ...board("Inscribed square", PURPLE),
          { type: "circle", cx: 400, cy: 230, r: 85, fill: "none", stroke: BLUE, width: 3 },
          { type: "path", d: "M 340 170 L 460 170 L 460 290 L 340 290 Z", stroke: RED, width: 3, fill: "none" },
          { type: "circle", cx: 340, cy: 170, r: 5, fill: ORANGE },
          { type: "circle", cx: 460, cy: 170, r: 5, fill: ORANGE },
          { type: "circle", cx: 460, cy: 290, r: 5, fill: ORANGE },
          { type: "circle", cx: 340, cy: 290, r: 5, fill: ORANGE },
        ],
        "What does inscribe mean?",
        "Draw a shape inside another so its corners touch the outer shape."
      ),
      scene(
        "These four orange corners are on the circle. The square is inscribed.",
        "The vertices of the inside shape touch the outer shape.",
        [
          { type: "text", x: 400, y: 370, text: "Corners touch the circle", color: GREEN, size: 16 },
        ],
        "What does inscribe mean?",
        "Draw a shape inside another so its corners touch the outer shape."
      ),
    ],
  },
};

data["m8_7.1"] = {
  title: "7.1 Circumference and area of a circle",
  watermark: "Section 7.1: Circles",
  subtopics: pills(),
  scenes: {
    card_0: [
      first(
        "A circle has two measures: the distance around the outside, and the space inside.",
        "Circumference uses the diameter. Area uses the radius.",
        [
          ...board("Two circle measures", ORANGE),
          { type: "text", x: 230, y: 130, text: "Around the outside", color: BLUE, size: 14 },
          { type: "circle", cx: 230, cy: 230, r: 68, fill: "none", stroke: BLUE, width: 4 },
          { type: "path", d: "M 162 230 L 298 230", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 230, y: 208, text: "d", color: RED, size: 16 },
          { type: "text", x: 230, y: 325, text: "C = π × d", color: BLUE, size: 16 },

          { type: "text", x: 560, y: 130, text: "Space inside", color: ORANGE, size: 14 },
          { type: "circle", cx: 560, cy: 230, r: 68, fill: PALE_ORANGE, stroke: INK, width: 3 },
          { type: "path", d: "M 560 230 L 628 230", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 594, y: 208, text: "r", color: GREEN, size: 16 },
          { type: "text", x: 560, y: 325, text: "A = π × r²", color: ORANGE, size: 16 },
        ]
      ),
    ],
    card_1: [
      first(
        "The radius is 7 cm. Area uses the radius, squared.",
        "Area = π × r².",
        [
          ...board("Area from the radius", GREEN),
          { type: "circle", cx: 400, cy: 210, r: 58, fill: PALE_ORANGE, stroke: INK, width: 3 },
          { type: "path", d: "M 400 210 L 458 210", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 430, y: 188, text: "7 cm", color: GREEN, size: 14 },
        ],
        "Radius is 7 cm. What is the area in terms of π?",
        "49π cm²."
      ),
      scene(
        "7 squared is 49. The area is 49π square centimetres.",
        "A = π × 7² = 49π cm².",
        [
          { type: "text", x: 400, y: 320, text: "A = π × 7²", color: INK, size: 18 },
          { type: "text", x: 400, y: 365, text: "7² = 49", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 410, text: "Area = 49π cm²", color: GREEN, size: 18 },
        ],
        "Radius is 7 cm. What is the area in terms of π?",
        "49π cm²."
      ),
    ],
    card_2: [
      first(
        "The diameter is 10 cm. Circumference uses the diameter, not the radius.",
        "Circumference = π × d.",
        [
          ...board("Circumference from the diameter", BLUE),
          { type: "circle", cx: 400, cy: 210, r: 58, fill: "none", stroke: BLUE, width: 4 },
          { type: "path", d: "M 342 210 L 458 210", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 400, y: 186, text: "10 cm", color: RED, size: 14 },
        ],
        "Diameter is 10 cm. What is the circumference in terms of π?",
        "10π cm."
      ),
      scene(
        "π times 10 is 10π centimetres.",
        "C = π × 10 = 10π cm.",
        [
          { type: "text", x: 400, y: 320, text: "C = π × d", color: INK, size: 18 },
          { type: "text", x: 400, y: 365, text: "C = π × 10", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 410, text: "C = 10π cm", color: GREEN, size: 18 },
        ],
        "Diameter is 10 cm. What is the circumference in terms of π?",
        "10π cm."
      ),
    ],
  },
};

function boxes(elements) {
  return elements.map((el) => {
    if (el.type === "text") {
      const size = el.size || 22;
      const w = size * 0.62 * String(el.text).length;
      const h = size;
      return { kind: "text", text: el.text, x1: el.x - w / 2, y1: el.y - h / 2, x2: el.x + w / 2, y2: el.y + h / 2 };
    }
    if (el.type === "circle") {
      return { kind: "circle", text: "", x1: el.cx - el.r, y1: el.cy - el.r, x2: el.cx + el.r, y2: el.cy + el.r };
    }
    return null;
  }).filter(Boolean);
}

function overlaps(a, b) {
  return a.x1 < b.x2 - 2 && a.x2 > b.x1 + 2 && a.y1 < b.y2 - 2 && a.y2 > b.y1 + 2;
}

const warnings = [];
for (const key of ["m7_4.1", "m7_4.2", "m7_4.3", "m7_4.4", "m8_5.4", "m8_7.1"]) {
  const topic = data[key];
  for (const [subId, scenes] of Object.entries(topic.scenes)) {
    const stacked = [];
    scenes.forEach((step, index) => {
      if (step.clear !== false) stacked.length = 0;
      stacked.push(...(step.elements || []));
      const textBoxes = boxes(stacked).filter((b) => b.kind === "text");
      textBoxes.forEach((box) => {
        if (box.x1 < 55 || box.x2 > 745 || box.y1 < 48 || box.y2 > 438) {
          warnings.push(`${key} ${subId} step ${index} outside: "${box.text}"`);
        }
      });
      for (let i = 0; i < textBoxes.length; i++) {
        for (let j = i + 1; j < textBoxes.length; j++) {
          if (overlaps(textBoxes[i], textBoxes[j])) {
            warnings.push(`${key} ${subId} step ${index} overlap: "${textBoxes[i].text}" / "${textBoxes[j].text}"`);
          }
        }
      }
    });
  }
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
  console.log("Rebuilt m7_4.1-4.4, m8_5.4 and m8_7.1");
}
