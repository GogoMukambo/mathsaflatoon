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
const PURPLE = "#7c3aed";
const PALE_G = "#d1fae5";
const PALE_B = "#e0f2fe";
const PALE_O = "#ffedd5";
const PALE_R = "#fee2e2";
const PALE_P = "#ede9fe";

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
  const size = title.length > 36 ? 16 : 18;
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
    R(50, 40, 700, 403, "#f8fafc", "#cbd5e1"),
    T(400, 74, title, INK, size),
  ];
}
function cells(x, y, n, filled, color, w, h, g) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(R(x + i * (w + g), y, w, h, i < filled ? color : "#ffffff", color));
  }
  return out;
}
function lesson(title, watermark, sections) {
  const subtopics = [];
  const scenes = {};
  sections.forEach((sec, i) => {
    const id = "card_" + i;
    subtopics.push({ id, label: sec.label });
    scenes[id] = sec.steps.map((st, n) => ({
      clear: n > 0 ? true : undefined,
      narration: st.narration,
      rule: st.rule,
      quizQ: st.quizQ || "",
      quizA: st.quizA || "",
      elements: frame(st.heading || title).concat(st.draw),
    }));
  });
  return { title, watermark, subtopics, scenes };
}

function fix21() {
  const steps = data["m7_2.1"].scenes.parts;
  steps[0].elements = steps[0].elements.filter((e) => !(e.type === "text" && e.text === "3x + 8"));
  steps[0].elements.push(
    T(318, 175, "3", GREEN, 42),
    T(372, 175, "x", BLUE, 42),
    T(448, 175, "+", INK, 36),
    T(512, 175, "8", ORANGE, 42)
  );
  steps[1].elements = [
    P("M 372 204 L 372 268", BLUE, 3),
    T(372, 296, "VARIABLE", BLUE, 15),
    T(372, 322, "the letter x", SUB, 13),
  ];
  steps[2].elements = [
    P("M 318 204 L 318 250 L 155 250 L 155 286", GREEN, 3),
    T(155, 312, "COEFFICIENT", GREEN, 14),
    T(155, 336, "the 3 in front", SUB, 13),
  ];
  steps[3].elements = [
    P("M 512 204 L 512 250 L 650 250 L 650 286", ORANGE, 3),
    T(650, 312, "CONSTANT", ORANGE, 14),
    T(650, 336, "the 8 on its own", SUB, 13),
  ];
}

function placeHeaders() {
  const cols = [
    ["Tens", 175],
    ["Ones", 315],
    ["Tenths", 500],
    ["Hundredths", 650],
  ];
  const els = [];
  cols.forEach(([name, x]) => {
    els.push(R(x - 55, 125, 110, 175, "#ffffff", "#cbd5e1"));
    els.push(T(x, 152, name, SUB, 13));
  });
  els.push(T(405, 230, ".", RED, 28));
  return els;
}
function digit(col, value, color) {
  return T(col, 230, String(value), color || BLUE, 32);
}

function rebuild31() {
  data["m7_3.1"] = {
    title: "3.1 Multiplying and dividing by 0.1 and 0.01",
    watermark: "Section 3.1: Powers of 10",
    subtopics: [
      { id: "mult_01", label: "Multiplying by 0.1 & 0.01" },
      { id: "div_01", label: "Dividing by 0.1 & 0.01" },
    ],
    scenes: {
      mult_01: [
        {
          narration: "32 sits in the tens and ones columns. Multiplying by 0.1 is the same as dividing by 10, so every digit slides one place to the right.",
          rule: "× 0.1 slides each digit one place right.",
          quizQ: "",
          quizA: "",
          elements: frame("32 × 0.1").concat(placeHeaders(), [
            digit(175, "3"),
            digit(315, "2"),
            T(400, 360, "3 is tens, 2 is ones", SUB, 16),
          ]),
        },
        {
          clear: true,
          narration: "The 3 moves into the ones, and the 2 moves into the tenths. 32 × 0.1 = 3.2. Two places right, × 0.01, would make 4.2 into 0.042.",
          rule: "32 × 0.1 = 3.2",
          quizQ: "What is 4.2 × 0.01?",
          quizA: "0.042. × 0.01 slides the digits two places right.",
          elements: frame("Slide one place right").concat(placeHeaders(), [
            digit(315, "3", GREEN),
            digit(500, "2", GREEN),
            P("M 175 335 L 315 335", BLUE, 3),
            T(400, 375, "3.2", GREEN, 22),
          ]),
        },
      ],
      div_01: [
        {
          narration: "Dividing by 0.1 does the opposite. It is the same as multiplying by 10, so the digits slide one place to the left and the number gets bigger.",
          rule: "÷ 0.1 slides each digit one place left.",
          quizQ: "",
          quizA: "",
          elements: frame("6 ÷ 0.1").concat(placeHeaders(), [
            digit(315, "6", ORANGE),
            T(400, 360, "6 starts in the ones", SUB, 16),
          ]),
        },
        {
          clear: true,
          narration: "The 6 jumps into the tens column and a 0 fills the ones. 6 ÷ 0.1 = 60. Dividing by 0.01 slides two places left.",
          rule: "6 ÷ 0.1 = 60",
          quizQ: "What is 4.156 ÷ 0.01?",
          quizA: "415.6. ÷ 0.01 slides the digits two places left.",
          elements: frame("Slide one place left").concat(placeHeaders(), [
            digit(175, "6", GREEN),
            digit(315, "0", GREEN),
            P("M 315 335 L 175 335", ORANGE, 3),
            T(400, 375, "60", GREEN, 22),
          ]),
        },
      ],
    },
  };
}

function chapters() {
  data["m7_7.1"] = lesson("7.1 Fractions and recurring decimals", "Section 7.1: Recurring decimals", [
    {
      label: "Key idea",
      steps: [{
        heading: "Does the decimal stop?",
        narration: "A fraction stops as a decimal only when the bottom number is made from 2s and 5s. If a 3, 7, or 11 is hiding in the bottom, the decimal repeats forever.",
        rule: "Denominator built from 2 and 5: the decimal stops.",
        draw: [
          T(230, 120, "1/4", GREEN, 22),
          ...cells(130, 150, 4, 1, GREEN, 42, 48, 8),
          T(230, 230, "0.25", GREEN, 26),
          T(230, 262, "stops", SUB, 15),
          T(560, 120, "1/3", RED, 22),
          ...cells(470, 150, 3, 1, RED, 50, 48, 8),
          T(560, 230, "0.333...", RED, 24),
          T(560, 262, "repeats", SUB, 15),
          T(400, 340, "4 = 2 × 2, so it stops", SUB, 16),
          T(400, 375, "3 is not a 2 or a 5", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "The repeating dot",
        narration: "A dot over a digit means that digit repeats. Two dots show where the repeating block starts and ends.",
        rule: "1/3 = 0.333...   5/11 = 0.4545...   1/7 = 0.142857 repeating.",
        draw: [
          R(90, 140, 180, 150, PALE_B, BLUE),
          T(180, 185, "1/3", BLUE, 22),
          T(180, 230, "0.3 3 3", BLUE, 20),
          C(168, 208, 4, BLUE, BLUE),
          R(310, 140, 180, 150, PALE_O, ORANGE),
          T(400, 185, "5/11", ORANGE, 22),
          T(400, 230, "0.45 45", ORANGE, 20),
          C(392, 208, 4, ORANGE, ORANGE),
          C(430, 208, 4, ORANGE, ORANGE),
          R(530, 140, 180, 150, PALE_P, PURPLE),
          T(620, 185, "1/7", PURPLE, 22),
          T(620, 230, "0.142857", PURPLE, 18),
          C(575, 208, 4, PURPLE, PURPLE),
          C(668, 208, 4, PURPLE, PURPLE),
          T(400, 360, "dots mark the repeating digits", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Is 1/4 repeating?",
        narration: "1/4 is 0.25. The decimal finishes. The bottom number 4 is only 2 × 2, so no other prime makes it repeat.",
        rule: "1/4 = 0.25. It stops.",
        quizQ: "Is 1/4 a repeating decimal?",
        quizA: "No. 1/4 = 0.25, and 4 = 2 × 2, so the decimal stops.",
        draw: [
          T(250, 160, "1/4", INK, 28),
          P("M 310 160 L 390 160", INK, 3),
          T(470, 160, "0.25", GREEN, 32),
          R(180, 230, 90, 70, PALE_G, GREEN),
          R(300, 230, 90, 70, PALE_G, GREEN),
          T(225, 265, "2", GREEN, 26),
          T(345, 265, "2", GREEN, 26),
          T(430, 265, "×", SUB, 22),
          T(400, 360, "only 2s, so the decimal stops", GREEN, 16),
        ],
      }],
    },
  ]);

  data["m7_7.2"] = lesson("7.2 Ordering fractions", "Section 7.2: Ordering fractions", [
    {
      label: "Key idea",
      steps: [{
        heading: "Same size slices",
        narration: "3/5 and 2/3 are cut into different size slices, so you cannot tell which is bigger just by looking. Give both pizzas the same number of slices first.",
        rule: "Make the denominators the same, then compare the numerators.",
        draw: [
          T(230, 120, "3/5", BLUE, 20),
          ...cells(120, 150, 5, 3, BLUE, 40, 50, 8),
          T(560, 120, "2/3", ORANGE, 20),
          ...cells(470, 150, 3, 2, ORANGE, 52, 50, 8),
          T(400, 280, "different slice sizes", SUB, 16),
          T(400, 340, "cut both into fifteenths", INK, 18),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Which negative is smaller?",
        narration: "Turn both into twenty-firsts. −8/3 is −2 and 14/21. −2 4/7 is −2 and 12/21. The one further left is smaller.",
        rule: "−8/3 is smaller than −2 4/7.",
        draw: [
          P("M 120 230 L 680 230", "#94a3b8", 3),
          C(230, 230, 10, RED, RED),
          C(430, 230, 10, BLUE, BLUE),
          T(230, 180, "−8/3", RED, 18),
          T(230, 280, "−2 14/21", RED, 16),
          T(430, 180, "−2 4/7", BLUE, 18),
          T(430, 280, "−2 12/21", BLUE, 16),
          T(400, 360, "further left means smaller", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "3/5 or 2/3?",
        narration: "Fifteenths make the slices match. 3/5 is 9 shaded pieces. 2/3 is 10 shaded pieces. 10 is more, so 2/3 is larger.",
        rule: "2/3 is larger.",
        quizQ: "Which is larger, 3/5 or 2/3?",
        quizA: "2/3. As fifteenths, 3/5 = 9/15 and 2/3 = 10/15.",
        draw: [
          T(160, 125, "3/5 = 9/15", BLUE, 16),
          ...cells(110, 150, 15, 9, BLUE, 16, 28, 3),
          T(160, 230, "2/3 = 10/15", ORANGE, 16),
          ...cells(110, 255, 15, 10, ORANGE, 16, 28, 3),
          T(520, 200, "10 > 9", GREEN, 22),
          T(520, 250, "2/3 wins", GREEN, 18),
        ],
      }],
    },
  ]);

  data["m7_7.3"] = lesson("7.3 Subtracting mixed numbers", "Section 7.3: Mixed numbers", [
    {
      label: "Key idea",
      steps: [{
        heading: "Turn them top-heavy",
        narration: "3 wholes split into quarters make 12 quarters. One extra quarter makes 13/4. Subtracting is easier once both numbers are improper fractions with the same bottom.",
        rule: "Change mixed numbers to improper fractions first.",
        draw: [
          ...cells(110, 150, 4, 4, BLUE, 36, 40, 6),
          ...cells(290, 150, 4, 4, BLUE, 36, 40, 6),
          ...cells(470, 150, 4, 4, BLUE, 36, 40, 6),
          R(650, 150, 36, 40, PALE_O, ORANGE),
          T(200, 220, "1", SUB, 14),
          T(380, 220, "1", SUB, 14),
          T(560, 220, "1", SUB, 14),
          T(668, 220, "+1/4", ORANGE, 14),
          T(400, 300, "12 quarters + 1 = 13/4", INK, 20),
          T(400, 350, "same bottom, then subtract", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "6 1/3 − 2 4/9",
        narration: "6 1/3 is 19/3, which is 57/9. 2 4/9 is 22/9. Subtract the tops: 57 − 22 = 35. 35/9 is 3 wholes and 8 ninths.",
        rule: "57/9 − 22/9 = 35/9 = 3 8/9.",
        draw: [
          R(90, 150, 140, 90, PALE_B, BLUE),
          R(270, 150, 140, 90, PALE_R, RED),
          R(450, 150, 200, 90, PALE_G, GREEN),
          T(160, 195, "57/9", BLUE, 22),
          T(340, 195, "22/9", RED, 22),
          T(550, 195, "35/9", GREEN, 22),
          T(400, 300, "35 ÷ 9 = 3 remainder 8", SUB, 16),
          T(400, 350, "3 8/9", GREEN, 28),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "3 1/4 − 1 1/2",
        narration: "3 1/4 is 13/4. 1 1/2 is 6/4. 13 − 6 = 7, so 7 quarters are left. That is 1 whole and 3 quarters.",
        rule: "13/4 − 6/4 = 7/4 = 1 3/4.",
        quizQ: "Work out 3 1/4 − 1 1/2.",
        quizA: "1 3/4. That is 13/4 − 6/4 = 7/4.",
        draw: [
          ...cells(140, 160, 7, 4, GREEN, 40, 46, 8),
          T(230, 240, "1 whole", GREEN, 14),
          ...cells(500, 160, 3, 3, ORANGE, 40, 46, 8),
          T(580, 240, "3/4", ORANGE, 16),
          T(400, 340, "7 quarters left", INK, 18),
          T(400, 385, "1 3/4", GREEN, 26),
        ],
      }],
    },
  ]);

  data["m7_7.4"] = lesson("7.4 Multiplying by a mixed number", "Section 7.4: Multiplying mixed numbers", [
    {
      label: "Key idea",
      steps: [{
        heading: "Split, then add",
        narration: "Do the whole part and the fraction part separately. 6 × 2 is 12. 6 × 1/3 is 2. Add them and you get 14.",
        rule: "Multiply the whole, multiply the fraction, then add.",
        draw: [
          R(100, 150, 180, 110, PALE_B, BLUE),
          R(320, 150, 180, 110, PALE_O, ORANGE),
          R(540, 150, 160, 110, PALE_G, GREEN),
          T(190, 190, "6 × 2", BLUE, 20),
          T(190, 225, "12", BLUE, 26),
          T(410, 190, "6 × 1/3", ORANGE, 20),
          T(410, 225, "2", ORANGE, 26),
          T(620, 205, "14", GREEN, 32),
          T(400, 340, "12 + 2 = 14", INK, 20),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "4 × 20 2/3",
        narration: "4 × 20 is 80. 4 × 2/3 is 8/3, which is 2 and 2/3. 80 + 2 2/3 = 82 2/3.",
        rule: "4 × 20 2/3 = 82 2/3.",
        draw: [
          R(110, 160, 200, 100, PALE_B, BLUE),
          R(360, 160, 200, 100, PALE_O, ORANGE),
          T(210, 200, "4 × 20 = 80", BLUE, 18),
          T(460, 200, "4 × 2/3 = 8/3", ORANGE, 18),
          T(400, 320, "80 + 2 2/3", SUB, 18),
          T(400, 365, "82 2/3", GREEN, 28),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "6 × 2 1/3",
        narration: "2 1/3 is seven thirds. Six groups of 7/3 is 42/3. 42 ÷ 3 = 14.",
        rule: "6 × 7/3 = 14.",
        quizQ: "Work out 6 × 2 1/3.",
        quizA: "14. Change 2 1/3 to 7/3, then 6 × 7/3 = 14.",
        draw: [
          ...cells(140, 160, 7, 7, PURPLE, 36, 44, 6),
          T(300, 240, "7 thirds = 2 1/3", PURPLE, 16),
          T(400, 310, "6 × 7/3 = 42/3", INK, 20),
          T(400, 365, "14", GREEN, 32),
        ],
      }],
    },
  ]);

  data["m7_7.5"] = lesson("7.5 Dividing by a fraction", "Section 7.5: Dividing by a fraction", [
    {
      label: "Key idea",
      steps: [{
        heading: "Flip and multiply",
        narration: "Dividing by a fraction asks how many of those pieces fit into the number. Flip the fraction upside down and change the divide sign into a multiply.",
        rule: "÷ a fraction = × its reciprocal.",
        draw: [
          T(230, 170, "3", BLUE, 28),
          P("M 190 196 L 270 196", BLUE, 3),
          T(230, 230, "4", BLUE, 28),
          P("M 330 200 L 450 200", ORANGE, 4),
          T(560, 170, "4", ORANGE, 28),
          P("M 520 196 L 600 196", ORANGE, 3),
          T(560, 230, "3", ORANGE, 28),
          T(390, 200, "flip", ORANGE, 16),
          T(400, 330, "÷ 3/4  becomes  × 4/3", INK, 20),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "10 ÷ 3/4",
        narration: "Flip 3/4 to 4/3. 10 × 4/3 = 40/3. 40 ÷ 3 is 13 wholes with 1 third left over.",
        rule: "10 ÷ 3/4 = 13 1/3.",
        draw: [
          R(100, 150, 160, 80, PALE_B, BLUE),
          R(310, 150, 160, 80, PALE_O, ORANGE),
          R(520, 150, 170, 80, PALE_G, GREEN),
          T(180, 190, "10 × 4/3", BLUE, 18),
          T(390, 190, "40/3", ORANGE, 22),
          T(605, 190, "13 1/3", GREEN, 22),
          T(400, 310, "13 groups of 3, plus 1 left", SUB, 16),
          ...cells(250, 340, 3, 3, GREEN, 28, 24, 6),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Why ÷ 1/2 = × 2",
        narration: "Every whole pizza contains two halves. Asking how many halves are in one pizza is the same as multiplying by 2.",
        rule: "There are 2 halves in every 1 whole.",
        quizQ: "Why is dividing by 1/2 the same as multiplying by 2?",
        quizA: "There are two halves in every whole, so ÷ 1/2 means × 2.",
        draw: [
          C(250, 210, 70, PALE_O, ORANGE),
          P("M 250 140 L 250 280", ORANGE, 3),
          T(220, 210, "1/2", ORANGE, 16),
          T(285, 210, "1/2", ORANGE, 16),
          T(520, 180, "1 whole", INK, 20),
          T(520, 230, "2 halves", GREEN, 22),
          T(400, 360, "÷ 1/2  =  × 2", INK, 22),
        ],
      }],
    },
  ]);

  data["m7_7.6"] = lesson("7.6 Easier fraction calculations", "Section 7.6: Easier fractions", [
    {
      label: "Key idea",
      steps: [{
        heading: "Cross-multiply to subtract",
        narration: "For a/b − c/d, multiply diagonally. The new top is a×d minus b×c. The new bottom is b×d.",
        rule: "a/b − c/d = (ad − bc) / bd.",
        draw: [
          T(250, 150, "4", BLUE, 26),
          P("M 220 176 L 280 176", BLUE, 3),
          T(250, 210, "5", BLUE, 26),
          T(430, 180, "−", INK, 28),
          T(540, 150, "3", ORANGE, 26),
          P("M 510 176 L 570 176", ORANGE, 3),
          T(540, 210, "4", ORANGE, 26),
          P("M 270 145 L 520 215", RED, 2, "6,4"),
          P("M 270 215 L 520 145", RED, 2, "6,4"),
          T(400, 300, "(4×4 − 5×3) / (5×4)", INK, 18),
          T(400, 355, "(16 − 15) / 20 = 1/20", GREEN, 20),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "4/5 − 3/4",
        narration: "Cross 4 with 4 to get 16. Cross 5 with 3 to get 15. The difference is 1, over 5 × 4 = 20.",
        rule: "4/5 − 3/4 = 1/20.",
        draw: [
          R(140, 150, 150, 80, PALE_B, BLUE),
          R(330, 150, 150, 80, PALE_R, RED),
          R(520, 150, 150, 80, PALE_G, GREEN),
          T(215, 190, "16", BLUE, 26),
          T(405, 190, "15", RED, 26),
          T(595, 190, "1", GREEN, 26),
          T(400, 300, "bottom is 5 × 4 = 20", SUB, 16),
          T(400, 355, "1/20", GREEN, 28),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Cancel before you multiply",
        narration: "5 and 10 share a factor of 5. 6 and 9 share a factor of 3. Cancel those first, then multiply what is left: 1/2 × 3/2 = 3/4.",
        rule: "5/6 × 9/10 = 3/4.",
        quizQ: "Work out 5/6 × 9/10 by cancelling first.",
        quizA: "3/4. Cancel 5 with 10 and 6 with 9, leaving 1/2 × 3/2.",
        draw: [
          T(180, 155, "5", RED, 26),
          P("M 155 155 L 205 155", RED, 3),
          T(180, 195, "1", GREEN, 20),
          P("M 150 220 L 210 220", INK, 3),
          T(180, 255, "6", RED, 26),
          P("M 155 255 L 205 255", RED, 3),
          T(180, 295, "2", GREEN, 20),
          T(320, 210, "×", INK, 28),
          T(460, 155, "9", RED, 26),
          P("M 435 155 L 485 155", RED, 3),
          T(460, 195, "3", GREEN, 20),
          P("M 430 220 L 490 220", INK, 3),
          T(460, 255, "10", RED, 26),
          P("M 430 255 L 490 255", RED, 3),
          T(460, 295, "2", GREEN, 20),
          T(620, 220, "= 3/4", GREEN, 26),
        ],
      }],
    },
  ]);

  data["m7_10.1"] = lesson("10.1 Percentage increases and decreases", "Section 10.1: Percentage change", [
    {
      label: "Key idea",
      steps: [{
        heading: "Change compared with the start",
        narration: "Find how much the price moved, then compare that change with the original price. Divide the change by the start, and multiply by 100.",
        rule: "Percentage change = change ÷ original × 100.",
        draw: [
          R(120, 160, 220, 50, PALE_B, BLUE),
          R(120, 240, 360, 50, PALE_O, ORANGE),
          T(230, 185, "start  £75", BLUE, 18),
          T(300, 265, "now  £105", ORANGE, 18),
          T(560, 200, "change", SUB, 14),
          T(560, 235, "£30", RED, 26),
          T(400, 360, "30 ÷ 75 = 0.4 = 40%", GREEN, 20),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "£75 up to £105",
        narration: "The ticket went up by £30. 30 divided by the starting £75 is 0.4. That is 40 percent.",
        rule: "The increase is 40%.",
        draw: [
          T(400, 160, "£30", RED, 32),
          T(400, 210, "out of £75", SUB, 18),
          R(200, 260, 400, 36, "#ffffff", "#cbd5e1"),
          R(200, 260, 160, 36, ORANGE, ORANGE),
          T(400, 340, "40% increase", GREEN, 24),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Increase £80 by 15%",
        narration: "10% of £80 is £8. Half of that, 5%, is £4. So 15% is £12. Add it to £80.",
        rule: "£80 + £12 = £92.",
        quizQ: "Increase £80 by 15%.",
        quizA: "£92. 10% is £8 and 5% is £4, so add £12.",
        draw: [
          R(100, 160, 400, 56, PALE_B, BLUE),
          T(300, 188, "£80", BLUE, 22),
          R(510, 150, 90, 36, PALE_G, GREEN),
          R(510, 196, 90, 36, PALE_O, ORANGE),
          T(555, 168, "£8", GREEN, 16),
          T(555, 214, "£4", ORANGE, 16),
          T(250, 250, "10%", GREEN, 14),
          T(470, 250, "5%", ORANGE, 14),
          T(400, 330, "£80 + £12 = £92", GREEN, 24),
        ],
      }],
    },
  ]);

  data["m7_10.2"] = lesson("10.2 Using a multiplier", "Section 10.2: Multipliers", [
    {
      label: "Key idea",
      steps: [{
        heading: "One multiplication",
        narration: "A 35% increase means you keep 100% and add 35%, so multiply by 1.35. A 15% decrease leaves 85%, so multiply by 0.85.",
        rule: "Increase: 1 + the percent. Decrease: 1 − the percent.",
        draw: [
          R(110, 150, 250, 120, PALE_G, GREEN),
          R(430, 150, 250, 120, PALE_R, RED),
          T(235, 190, "+35%", GREEN, 22),
          T(235, 230, "× 1.35", GREEN, 24),
          T(555, 190, "−15%", RED, 22),
          T(555, 230, "× 0.85", RED, 24),
          T(400, 340, "100% + 35% = 135%", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Increase 240 by 35%",
        narration: "The multiplier for a 35% rise is 1.35. 240 × 1.35 = 324.",
        rule: "240 × 1.35 = 324.",
        draw: [
          R(120, 170, 140, 80, PALE_B, BLUE),
          R(330, 170, 140, 80, PALE_O, ORANGE),
          R(540, 170, 140, 80, PALE_G, GREEN),
          T(190, 210, "240", BLUE, 26),
          T(400, 210, "× 1.35", ORANGE, 20),
          T(610, 210, "324", GREEN, 26),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Decrease 750 by 15%",
        narration: "A 15% sale leaves 85% of the price. Multiply 750 by 0.85.",
        rule: "750 × 0.85 = 637.50.",
        quizQ: "Decrease 750 by 15% using a multiplier.",
        quizA: "637.50. The multiplier is 0.85.",
        draw: [
          R(140, 160, 200, 90, PALE_B, BLUE),
          R(460, 160, 200, 90, PALE_G, GREEN),
          T(240, 205, "750", BLUE, 28),
          T(400, 205, "× 0.85", ORANGE, 18),
          T(560, 205, "637.50", GREEN, 24),
          T(400, 330, "100% − 15% = 85%", SUB, 16),
        ],
      }],
    },
  ]);

  data["m7_11.1"] = lesson("11.1 Functions", "Section 11.1: Functions", [
    {
      label: "Key idea",
      steps: [{
        heading: "A hire cost",
        narration: "A starting fee plus a charge for each day is a function. The formula is cost = (price per day × days) + starting fee.",
        rule: "Cost = m × days + c.",
        draw: [
          R(120, 150, 160, 90, PALE_O, ORANGE),
          T(200, 185, "£35", ORANGE, 24),
          T(200, 215, "to start", SUB, 14),
          T(340, 195, "+", INK, 28),
          R(400, 150, 160, 90, PALE_B, BLUE),
          T(480, 185, "£10", BLUE, 24),
          T(480, 215, "each day", SUB, 14),
          T(400, 320, "cost = 10n + 35", INK, 22),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Digger hire",
        narration: "£35 to start, then £10 every day. For n days the cost is 10n + 35.",
        rule: "Cost = 10n + 35.",
        draw: [
          R(150, 160, 140, 70, "#ffffff", BLUE),
          R(330, 160, 140, 70, "#ffffff", BLUE),
          R(510, 160, 140, 70, "#ffffff", BLUE),
          T(220, 195, "1 day", BLUE, 16),
          T(400, 195, "2 days", BLUE, 16),
          T(580, 195, "3 days", BLUE, 16),
          T(220, 270, "£45", INK, 18),
          T(400, 270, "£55", INK, 18),
          T(580, 270, "£65", INK, 18),
          T(400, 350, "10n + 35", GREEN, 22),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "y = 2x",
        narration: "The machine doubles the input. Put in 5 and the output is 10.",
        rule: "When x = 5, y = 10.",
        quizQ: "For y = 2x, what is y when x = 5?",
        quizA: "10, because 2 × 5 = 10.",
        draw: [
          R(140, 170, 120, 80, PALE_B, BLUE),
          R(340, 160, 140, 100, PALE_O, ORANGE),
          R(560, 170, 120, 80, PALE_G, GREEN),
          T(200, 210, "5", BLUE, 28),
          T(410, 210, "× 2", ORANGE, 24),
          T(620, 210, "10", GREEN, 28),
        ],
      }],
    },
  ]);

  data["m7_11.2"] = lesson("11.2 Plotting graphs", "Section 11.2: Plotting", [
    {
      label: "Key idea",
      steps: [{
        heading: "Table, dots, ruler",
        narration: "Pick x values, work out y, plot the dots, then join them with a ruler. A third dot checks that the line is really straight.",
        rule: "At least three points for a straight line.",
        draw: [
          R(110, 140, 70, 40, PALE_B, BLUE),
          R(190, 140, 70, 40, "#ffffff", BLUE),
          R(270, 140, 70, 40, "#ffffff", BLUE),
          R(110, 190, 70, 40, PALE_O, ORANGE),
          R(190, 190, 70, 40, "#ffffff", ORANGE),
          R(270, 190, 70, 40, "#ffffff", ORANGE),
          T(145, 160, "x", BLUE, 16),
          T(225, 160, "0", INK, 16),
          T(305, 160, "1", INK, 16),
          T(145, 210, "y", ORANGE, 16),
          T(225, 210, "1", INK, 16),
          T(305, 210, "4", INK, 16),
          P("M 460 340 L 460 150", "#94a3b8", 2),
          P("M 430 310 L 680 310", "#94a3b8", 2),
          C(460, 310, 6, BLUE, BLUE),
          C(530, 250, 6, BLUE, BLUE),
          C(600, 190, 6, BLUE, BLUE),
          P("M 460 310 L 620 170", BLUE, 3),
          T(400, 390, "y = 3x + 1", INK, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "y = 3x + 1",
        narration: "Multiply x by 3 and add 1. x = 0 gives 1, x = 1 gives 4, x = 2 gives 7.",
        rule: "The y values are 1, 4 and 7.",
        draw: [
          T(250, 160, "x = 0", SUB, 16),
          T(400, 160, "x = 1", SUB, 16),
          T(550, 160, "x = 2", SUB, 16),
          R(190, 200, 120, 80, PALE_B, BLUE),
          R(340, 200, 120, 80, PALE_O, ORANGE),
          R(490, 200, 120, 80, PALE_G, GREEN),
          T(250, 240, "1", BLUE, 28),
          T(400, 240, "4", ORANGE, 28),
          T(550, 240, "7", GREEN, 28),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Why three dots?",
        narration: "Any two dots can be joined by a straight line, even if one calculation is wrong. A third dot that sits on the same line shows the table is right.",
        rule: "The third point is a check.",
        quizQ: "Why plot at least three points for a straight line?",
        quizA: "Two points always make a line. A third point shows a calculation has not gone wrong.",
        draw: [
          C(220, 250, 8, BLUE, BLUE),
          C(360, 190, 8, BLUE, BLUE),
          C(520, 250, 8, RED, RED),
          P("M 200 270 L 400 160", "#94a3b8", 2, "6,4"),
          T(560, 220, "off the line", RED, 16),
          T(400, 340, "the red dot shows a mistake", SUB, 16),
        ],
      }],
    },
  ]);

  data["m7_11.3"] = lesson("11.3 Gradient and intercept", "Section 11.3: y = mx + c", [
    {
      label: "Key idea",
      steps: [{
        heading: "Steepness and crossing",
        narration: "In y = mx + c, m is how many steps the line climbs for one step across. c is where it crosses the y-axis.",
        rule: "m = gradient, c = y-intercept.",
        draw: [
          P("M 180 360 L 180 140", "#94a3b8", 2),
          P("M 140 320 L 620 320", "#94a3b8", 2),
          P("M 180 250 L 520 140", BLUE, 4),
          C(180, 250, 7, ORANGE, ORANGE),
          T(130, 250, "c", ORANGE, 18),
          P("M 300 214 L 380 214", GREEN, 3),
          P("M 380 214 L 380 174", GREEN, 3),
          T(450, 175, "up m", GREEN, 16),
          T(340, 240, "across 1", GREEN, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "y = 2x + 1",
        narration: "The +1 means the line crosses the y-axis at 1. That point is (0, 1).",
        rule: "It crosses at (0, 1).",
        draw: [
          P("M 300 340 L 300 150", "#94a3b8", 2),
          P("M 180 300 L 560 300", "#94a3b8", 2),
          C(300, 250, 8, ORANGE, ORANGE),
          T(380, 240, "(0, 1)", ORANGE, 18),
          T(400, 390, "c = 1", INK, 18),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Build the equation",
        narration: "Crossing at 4 means c = 4. Up 2 for every 1 across means m = 2. The equation is y = 2x + 4.",
        rule: "y = 2x + 4.",
        quizQ: "A line crosses the y-axis at 4 and rises 2 for every 1 across. What is its equation?",
        quizA: "y = 2x + 4.",
        draw: [
          R(140, 160, 200, 90, PALE_O, ORANGE),
          R(420, 160, 220, 90, PALE_G, GREEN),
          T(240, 205, "crosses at 4", ORANGE, 16),
          T(530, 205, "up 2, across 1", GREEN, 16),
          T(400, 330, "y = 2x + 4", INK, 28),
        ],
      }],
    },
  ]);

  data["m7_11.4"] = lesson("11.4 Interpreting graphs", "Section 11.4: Real-life graphs", [
    {
      label: "Key idea",
      steps: [{
        heading: "Read the slope",
        narration: "A flat line means nothing is changing. A steep line means a fast change. Where two lines cross, the amounts are equal.",
        rule: "Flat = no change. Steep = fast change.",
        draw: [
          P("M 120 300 L 300 300", BLUE, 4),
          T(210, 250, "flat", BLUE, 16),
          T(210, 340, "stopped", SUB, 14),
          P("M 420 320 L 620 160", RED, 4),
          T(560, 250, "steep", RED, 16),
          T(560, 340, "fast", SUB, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "A flat distance–time graph",
        narration: "Time still passes along the bottom, but the distance does not grow. The object is standing still.",
        rule: "A horizontal line means speed zero.",
        draw: [
          P("M 160 320 L 160 150", "#94a3b8", 2),
          P("M 160 300 L 640 300", "#94a3b8", 2),
          P("M 200 200 L 560 200", BLUE, 4),
          T(200, 340, "time", SUB, 14),
          T(130, 180, "distance", SUB, 13),
          T(400, 160, "still", BLUE, 22),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "£5 becomes $40",
        narration: "The graph pairs £5 with $40. One pound is that amount shared into 5, so 40 ÷ 5 = 8 dollars.",
        rule: "£1 = $8.",
        quizQ: "A graph changes £5 into $40. How many dollars is £1?",
        quizA: "$8, because 40 ÷ 5 = 8.",
        draw: [
          R(140, 160, 160, 80, PALE_B, BLUE),
          R(500, 160, 160, 80, PALE_G, GREEN),
          T(220, 200, "£5", BLUE, 26),
          T(580, 200, "$40", GREEN, 26),
          P("M 320 200 L 480 200", ORANGE, 3),
          T(400, 320, "40 ÷ 5 = 8", INK, 22),
          T(400, 365, "£1 = $8", GREEN, 20),
        ],
      }],
    },
  ]);

  data["m7_13.1"] = lesson("13.1 Calculating probabilities", "Section 13.1: Probability", [
    {
      label: "Key idea",
      steps: [{
        heading: "Winners out of all outcomes",
        narration: "Count the results you want, then divide by every result that can happen. If rain is 0.3, no rain is the rest of 1.",
        rule: "Probability = favourable ÷ possible. The rest is 1 minus that.",
        draw: [
          P("M 140 240 L 660 240", "#94a3b8", 4),
          C(140, 240, 8, INK, INK),
          C(660, 240, 8, INK, INK),
          C(296, 240, 10, BLUE, BLUE),
          T(140, 200, "0", SUB, 16),
          T(296, 200, "0.3", BLUE, 18),
          T(660, 200, "1", SUB, 16),
          T(296, 290, "rain", BLUE, 14),
          T(500, 290, "no rain 0.7", GREEN, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Two dice add to 6",
        narration: "Two dice make 36 equally likely pairs. The pairs that add to 6 are 1+5, 2+4, 3+3, 4+2 and 5+1. That is 5 out of 36.",
        rule: "The probability is 5/36.",
        draw: [
          R(100, 160, 90, 60, PALE_B, BLUE),
          R(210, 160, 90, 60, PALE_B, BLUE),
          R(320, 160, 90, 60, PALE_O, ORANGE),
          R(430, 160, 90, 60, PALE_B, BLUE),
          R(540, 160, 90, 60, PALE_B, BLUE),
          T(145, 190, "1+5", BLUE, 16),
          T(255, 190, "2+4", BLUE, 16),
          T(365, 190, "3+3", ORANGE, 16),
          T(475, 190, "4+2", BLUE, 16),
          T(585, 190, "5+1", BLUE, 16),
          T(400, 300, "5 winners", GREEN, 20),
          T(400, 345, "out of 36", INK, 18),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Chance it does not rain",
        narration: "All chances together make 1. Take the rain chance away from 1.",
        rule: "1 − 0.3 = 0.7.",
        quizQ: "The probability of rain is 0.3. What is the probability it does not rain?",
        quizA: "0.7, because 1 − 0.3 = 0.7.",
        draw: [
          R(160, 170, 140, 90, PALE_B, BLUE),
          T(230, 215, "0.3", BLUE, 28),
          T(370, 215, "→", INK, 28),
          R(450, 170, 180, 90, PALE_G, GREEN),
          T(540, 215, "0.7", GREEN, 28),
          T(400, 330, "1 − 0.3 = 0.7", INK, 20),
        ],
      }],
    },
  ]);

  data["m7_13.2"] = lesson("13.2 Experimental and theoretical probability", "Section 13.2: Experiments", [
    {
      label: "Key idea",
      steps: [{
        heading: "What actually happened",
        narration: "Experimental probability is wins divided by how many times you tried. The more tries you make, the closer it usually gets to the theoretical chance.",
        rule: "Relative frequency = successes ÷ trials.",
        draw: [
          R(180, 260, 80, 80, PALE_B, BLUE),
          R(300, 180, 80, 160, PALE_O, ORANGE),
          P("M 140 220 L 520 220", RED, 2, "6,4"),
          T(220, 360, "50 theory", RED, 14),
          T(340, 150, "62 heads", ORANGE, 16),
          T(580, 220, "more flips", SUB, 16),
          T(580, 250, "closer to 0.5", GREEN, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "62 heads in 100 flips",
        narration: "Divide the heads by the number of flips. 62 ÷ 100 = 0.62.",
        rule: "The experimental probability is 0.62.",
        draw: [
          T(250, 190, "62", ORANGE, 36),
          T(400, 190, "÷ 100", INK, 28),
          T(560, 190, "0.62", GREEN, 36),
          T(400, 300, "a fair coin theory is 0.5", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Why 1000 flips?",
        narration: "Ten flips can be a lucky streak, like five heads in a row. A thousand flips lets those streaks even out.",
        rule: "More trials get closer to the theory.",
        quizQ: "Why is 1000 coin flips better than 10?",
        quizA: "Lucky streaks even out, so the result gets closer to the theoretical probability.",
        draw: [
          R(120, 160, 240, 120, PALE_R, RED),
          R(430, 160, 240, 120, PALE_G, GREEN),
          T(240, 205, "10 flips", RED, 20),
          T(240, 245, "can be lucky", SUB, 16),
          T(550, 205, "1000 flips", GREEN, 20),
          T(550, 245, "streaks fade", SUB, 16),
        ],
      }],
    },
  ]);

  data["m7_14.1"] = lesson("14.1 Bearings", "Section 14.1: Bearings", [
    {
      label: "Key idea",
      steps: [{
        heading: "Three bearing rules",
        narration: "Start facing north, turn clockwise, and always write three digits. East is 090, south is 180, and west is 270.",
        rule: "From north, clockwise, three digits.",
        draw: [
          C(300, 230, 90, "#ffffff", BLUE),
          P("M 300 230 L 300 145", GREEN, 3),
          T(300, 125, "000", GREEN, 14),
          T(410, 230, "090", BLUE, 14),
          T(300, 345, "180", SUB, 14),
          T(175, 230, "270", SUB, 14),
          P("M 300 230 L 390 200", ORANGE, 4),
          T(430, 185, "070", ORANGE, 18),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Reverse of 070",
        narration: "To look back the other way, add 180 when the bearing is less than 180. 070 + 180 = 250.",
        rule: "The reverse bearing is 250°.",
        draw: [
          P("M 220 250 L 420 180", ORANGE, 4),
          T(450, 165, "070", ORANGE, 18),
          P("M 420 180 L 250 280", BLUE, 3, "7,4"),
          T(200, 300, "250", BLUE, 18),
          T(520, 240, "+ 180", INK, 22),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Reverse of 235",
        narration: "235 is already more than 180, so subtract 180 to turn around. 235 − 180 = 055.",
        rule: "The reverse bearing is 055°.",
        quizQ: "The bearing from A to B is 235°. What is the reverse bearing?",
        quizA: "055°. Subtract 180 because 235 is greater than 180.",
        draw: [
          R(140, 160, 180, 100, PALE_O, ORANGE),
          R(430, 160, 200, 100, PALE_G, GREEN),
          T(230, 210, "235", ORANGE, 32),
          T(530, 210, "055", GREEN, 32),
          T(360, 210, "−180", INK, 18),
        ],
      }],
    },
  ]);

  data["m7_14.2"] = lesson("14.2 The midpoint", "Section 14.2: Midpoint", [
    {
      label: "Key idea",
      steps: [{
        heading: "Average the ends",
        narration: "Add the two x-coordinates and halve them. Do the same for y. That point is exactly in the middle.",
        rule: "Midpoint = (average of x, average of y).",
        draw: [
          P("M 160 280 L 620 160", BLUE, 3),
          C(160, 280, 8, BLUE, BLUE),
          C(620, 160, 8, ORANGE, ORANGE),
          C(390, 220, 10, GREEN, GREEN),
          T(140, 310, "start", BLUE, 14),
          T(640, 140, "end", ORANGE, 14),
          T(390, 260, "middle", GREEN, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "(10, 4) and (−4, −6)",
        narration: "The x average is (10 + −4) ÷ 2 = 3. The y average is (4 + −6) ÷ 2 = −1.",
        rule: "The midpoint is (3, −1).",
        draw: [
          R(120, 160, 240, 80, PALE_B, BLUE),
          R(430, 160, 240, 80, PALE_O, ORANGE),
          T(240, 200, "x: 3", BLUE, 22),
          T(550, 200, "y: −1", ORANGE, 22),
          T(400, 320, "(3, −1)", GREEN, 28),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "(2, 6) and (8, 10)",
        narration: "(2 + 8) ÷ 2 = 5 and (6 + 10) ÷ 2 = 8. The middle is (5, 8).",
        rule: "Midpoint (5, 8).",
        quizQ: "What is the midpoint of (2, 6) and (8, 10)?",
        quizA: "(5, 8).",
        draw: [
          C(180, 280, 8, BLUE, BLUE),
          C(560, 160, 8, ORANGE, ORANGE),
          C(370, 220, 10, GREEN, GREEN),
          P("M 180 280 L 560 160", "#94a3b8", 3),
          T(160, 310, "(2, 6)", BLUE, 16),
          T(590, 145, "(8, 10)", ORANGE, 16),
          T(430, 230, "(5, 8)", GREEN, 18),
        ],
      }],
    },
  ]);

  data["m7_14.3"] = lesson("14.3 Translating shapes", "Section 14.3: Translations", [
    {
      label: "Key idea",
      steps: [{
        heading: "A slide vector",
        narration: "The top number of a vector is right or left. Positive is right. The bottom number is up or down. Positive is up.",
        rule: "Vector: top is across, bottom is up.",
        draw: [
          R(160, 220, 70, 70, PALE_B, BLUE),
          P("M 240 255 L 430 160", ORANGE, 4),
          R(430, 120, 70, 70, PALE_O, ORANGE),
          T(360, 250, "right 3", ORANGE, 16),
          T(470, 230, "down 2", RED, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "3 across, −2 down",
        narration: "Top number 3 slides the shape 3 steps right. Bottom number −2 slides it 2 steps down.",
        rule: "Right 3, down 2.",
        draw: [
          T(300, 180, "3", BLUE, 36),
          P("M 250 210 L 350 210", INK, 3),
          T(300, 250, "−2", RED, 36),
          T(500, 180, "right 3", BLUE, 18),
          T(500, 250, "down 2", RED, 18),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "(1, 4) then right 2, up 5",
        narration: "Add 2 to the x-coordinate and 5 to the y-coordinate. 1 + 2 = 3 and 4 + 5 = 9.",
        rule: "It lands at (3, 9).",
        quizQ: "The point (1, 4) moves 2 right and 5 up. Where does it land?",
        quizA: "(3, 9).",
        draw: [
          C(200, 280, 8, BLUE, BLUE),
          T(180, 310, "(1, 4)", BLUE, 16),
          P("M 210 270 L 480 160", ORANGE, 4),
          C(500, 150, 8, GREEN, GREEN),
          T(560, 140, "(3, 9)", GREEN, 18),
          T(360, 250, "+2, +5", ORANGE, 16),
        ],
      }],
    },
  ]);

  data["m7_14.4"] = lesson("14.4 Reflecting shapes", "Section 14.4: Reflections", [
    {
      label: "Key idea",
      steps: [{
        heading: "Same distance from the mirror",
        narration: "Every point jumps straight across the mirror and lands the same distance on the other side.",
        rule: "Image distance = object distance.",
        draw: [
          P("M 400 130 L 400 360", PURPLE, 3, "6,4"),
          R(250, 180, 70, 70, PALE_B, BLUE),
          R(480, 180, 70, 70, PALE_O, ORANGE),
          T(400, 120, "mirror", PURPLE, 14),
          T(285, 270, "2", BLUE, 14),
          T(515, 270, "2", ORANGE, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "x = 2 and y = 3",
        narration: "x = 2 is a vertical line, an up-and-down wall. y = 3 is a horizontal line, a flat floor.",
        rule: "x = a number is vertical. y = a number is horizontal.",
        draw: [
          P("M 250 140 L 250 340", BLUE, 4),
          T(250, 370, "x = 2", BLUE, 16),
          P("M 420 240 L 680 240", ORANGE, 4),
          T(550, 210, "y = 3", ORANGE, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Mirror y = x",
        narration: "The diagonal mirror swaps the coordinates. (2, 5) reflects to (5, 2).",
        rule: "(2, 5) → (5, 2).",
        quizQ: "Reflect (2, 5) in the line y = x.",
        quizA: "(5, 2). Swap the coordinates.",
        draw: [
          P("M 160 340 L 560 140", PURPLE, 3),
          C(220, 200, 8, BLUE, BLUE),
          C(480, 280, 8, ORANGE, ORANGE),
          T(200, 170, "(2, 5)", BLUE, 16),
          T(530, 300, "(5, 2)", ORANGE, 16),
          T(400, 390, "swap x and y", SUB, 16),
        ],
      }],
    },
  ]);

  data["m7_14.5"] = lesson("14.5 Rotating shapes", "Section 14.5: Rotations", [
    {
      label: "Key idea",
      steps: [{
        heading: "Three things to spin",
        narration: "A rotation needs an angle, a direction, and a centre to pin. Miss any one of them and the image is not fixed.",
        rule: "Angle, direction, centre.",
        draw: [
          R(120, 160, 160, 80, PALE_B, BLUE),
          R(320, 160, 160, 80, PALE_O, ORANGE),
          R(520, 160, 160, 80, PALE_G, GREEN),
          T(200, 200, "90°", BLUE, 22),
          T(400, 200, "clockwise", ORANGE, 16),
          T(600, 200, "centre", GREEN, 18),
          C(400, 310, 8, RED, RED),
          T(400, 345, "the pin", RED, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "90° anticlockwise",
        narration: "(3, 1) turned 90° anticlockwise around the origin lands at (−1, 3).",
        rule: "(3, 1) → (−1, 3).",
        draw: [
          P("M 400 320 L 400 150", "#94a3b8", 2),
          P("M 180 250 L 620 250", "#94a3b8", 2),
          C(520, 220, 7, BLUE, BLUE),
          C(360, 170, 7, GREEN, GREEN),
          T(560, 210, "(3, 1)", BLUE, 14),
          T(300, 160, "(−1, 3)", GREEN, 14),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "180° around the origin",
        narration: "A half turn sends every point straight through the origin to the opposite side. (4, −2) becomes (−4, 2).",
        rule: "(4, −2) → (−4, 2).",
        quizQ: "A 180° rotation about the origin sends (4, −2) where?",
        quizA: "(−4, 2).",
        draw: [
          P("M 400 140 L 400 360", "#94a3b8", 2),
          P("M 160 250 L 640 250", "#94a3b8", 2),
          C(560, 300, 8, BLUE, BLUE),
          C(240, 200, 8, GREEN, GREEN),
          P("M 560 300 L 240 200", ORANGE, 2, "6,4"),
          T(600, 320, "(4, −2)", BLUE, 14),
          T(190, 175, "(−4, 2)", GREEN, 14),
        ],
      }],
    },
  ]);

  data["m7_14.6"] = lesson("14.6 Enlarging shapes", "Section 14.6: Enlargement", [
    {
      label: "Key idea",
      steps: [{
        heading: "Scale factor and centre",
        narration: "The scale factor says how many times longer each side becomes. The centre is the point the shape grows away from. A factor between 0 and 1 makes a smaller copy.",
        rule: "New length = old length × scale factor.",
        draw: [
          P("M 180 300 L 280 300 L 230 230 Z", BLUE, 3),
          P("M 180 300 L 430 300 L 305 125 Z", ORANGE, 3),
          T(230, 330, "small", BLUE, 14),
          T(400, 330, "scale 2", ORANGE, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Centre on a corner",
        narration: "If the centre is a corner of the shape, that corner does not move. It is called an invariant point.",
        rule: "The centre stays fixed.",
        draw: [
          C(220, 260, 10, RED, RED),
          P("M 220 260 L 360 260 L 360 180 Z", BLUE, 3),
          P("M 220 260 L 560 260 L 560 120 Z", ORANGE, 3),
          T(220, 300, "stays put", RED, 14),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "4 cm × 2.5",
        narration: "Multiply the side by the scale factor. 4 × 2.5 = 10, so the image side is 10 cm.",
        rule: "The image side is 10 cm.",
        quizQ: "A 4 cm side is enlarged with scale factor 2.5. How long is the image?",
        quizA: "10 cm.",
        draw: [
          R(140, 180, 80, 28, PALE_B, BLUE),
          T(180, 230, "4 cm", BLUE, 16),
          T(360, 190, "× 2.5", ORANGE, 22),
          R(470, 170, 200, 28, PALE_O, ORANGE),
          T(570, 230, "10 cm", ORANGE, 16),
        ],
      }],
    },
  ]);

  data["m7_15.1"] = lesson("15.1 Miles and kilometres", "Section 15.1: Miles and km", [
    {
      label: "Key idea",
      steps: [{
        heading: "5 miles ≈ 8 km",
        narration: "Five miles is about eight kilometres. To change miles into kilometres, divide by 5 and multiply by 8. To go back, divide by 8 and multiply by 5.",
        rule: "miles → km: ÷ 5 × 8. km → miles: ÷ 8 × 5.",
        draw: [
          ...cells(120, 160, 5, 5, BLUE, 36, 36, 6),
          T(230, 230, "5 miles", BLUE, 16),
          ...cells(430, 150, 8, 8, ORANGE, 28, 28, 5),
          T(560, 230, "8 km", ORANGE, 16),
          T(400, 320, "same journey", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "20 miles",
        narration: "20 ÷ 5 = 4 groups. Each group is 8 km, so 4 × 8 = 32 km.",
        rule: "20 miles ≈ 32 km.",
        draw: [
          T(220, 190, "20 ÷ 5", BLUE, 24),
          T(400, 190, "4", ORANGE, 32),
          T(560, 190, "× 8", GREEN, 24),
          T(400, 300, "32 km", GREEN, 28),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "72 km to miles",
        narration: "Go backwards. 72 ÷ 8 = 9 groups, and each group is 5 miles. 9 × 5 = 45 miles.",
        rule: "72 km ≈ 45 miles.",
        quizQ: "Convert 72 km to miles.",
        quizA: "45 miles. (72 ÷ 8) × 5 = 45.",
        draw: [
          T(220, 190, "72 ÷ 8", ORANGE, 24),
          T(400, 190, "9", BLUE, 32),
          T(560, 190, "× 5", GREEN, 24),
          T(400, 300, "45 miles", GREEN, 28),
        ],
      }],
    },
  ]);

  data["m7_15.2"] = lesson("15.2 Parallelogram and trapezium", "Section 15.2: Areas", [
    {
      label: "Key idea",
      steps: [{
        heading: "Use the straight height",
        narration: "A parallelogram is base times the vertical height, not the slanted side. A trapezium adds the two parallel sides, halves that, then multiplies by the height.",
        rule: "Parallelogram: b × h. Trapezium: ½(a + b) × h.",
        draw: [
          P("M 140 280 L 300 280 L 360 180 L 200 180 Z", BLUE, 3),
          P("M 250 280 L 250 180", RED, 2, "5,4"),
          T(250, 320, "b × h", BLUE, 16),
          P("M 470 280 L 680 280 L 630 180 L 520 180 Z", ORANGE, 3),
          T(575, 320, "½(a+b)h", ORANGE, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Base 9, height 4",
        narration: "Ignore the slant. Multiply the base by the straight-up height. 9 × 4 = 36.",
        rule: "Area = 36 cm².",
        draw: [
          P("M 180 280 L 460 280 L 540 180 L 260 180 Z", BLUE, 3),
          P("M 360 280 L 360 180", RED, 2, "5,4"),
          T(320, 310, "9 cm", BLUE, 16),
          T(400, 230, "4 cm", RED, 16),
          T(400, 370, "36 cm²", GREEN, 22),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Sides 6 and 10, height 5",
        narration: "Add the parallel sides: 6 + 10 = 16. Half of 16 is 8. Then 8 × 5 = 40.",
        rule: "Area = 40 cm².",
        quizQ: "A trapezium has parallel sides 6 cm and 10 cm, and height 5 cm. What is the area?",
        quizA: "40 cm². ½(6 + 10) × 5 = 40.",
        draw: [
          P("M 220 280 L 580 280 L 500 170 L 300 170 Z", ORANGE, 3),
          T(400, 155, "6 cm", ORANGE, 16),
          T(400, 310, "10 cm", ORANGE, 16),
          P("M 460 280 L 460 170", RED, 2, "5,4"),
          T(500, 230, "5", RED, 16),
          T(400, 370, "40 cm²", GREEN, 22),
        ],
      }],
    },
  ]);

  data["m7_15.3"] = lesson("15.3 Volume of a triangular prism", "Section 15.3: Prism volume", [
    {
      label: "Key idea",
      steps: [{
        heading: "Front face times length",
        narration: "Find the area of the triangle on the end, then multiply by how long the prism is. That fills the space inside.",
        rule: "Volume = area of cross-section × length.",
        draw: [
          P("M 160 280 L 320 280 L 240 170 Z", BLUE, 3),
          P("M 320 280 L 520 230 L 440 120 L 240 170", ORANGE, 3),
          P("M 520 230 L 360 230", ORANGE, 3),
          T(240, 310, "end area", BLUE, 14),
          T(470, 270, "length", ORANGE, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "End 12 cm², length 10 cm",
        narration: "The triangle area is already 12. Multiply by the length 10. The volume is 120 cm³.",
        rule: "12 × 10 = 120 cm³.",
        draw: [
          R(150, 170, 160, 90, PALE_B, BLUE),
          R(430, 170, 180, 90, PALE_G, GREEN),
          T(230, 215, "12 × 10", BLUE, 22),
          T(520, 215, "120 cm³", GREEN, 22),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Triangle 6 by 4, length 8",
        narration: "The triangle area is half of 6 × 4, which is 12. Then 12 × 8 = 96 cm³.",
        rule: "Volume = 96 cm³.",
        quizQ: "A triangular prism has base 6 cm, height 4 cm and length 8 cm. What is the volume?",
        quizA: "96 cm³. The triangle is 12 cm², then × 8.",
        draw: [
          T(200, 180, "½ × 6 × 4", BLUE, 20),
          T(400, 180, "12", ORANGE, 28),
          T(560, 180, "× 8", GREEN, 22),
          T(400, 280, "96 cm³", GREEN, 32),
        ],
      }],
    },
  ]);

  data["m7_15.4"] = lesson("15.4 Surface area of prisms and pyramids", "Section 15.4: Surface area", [
    {
      label: "Key idea",
      steps: [{
        heading: "Add every face",
        narration: "Surface area is the paper needed to wrap the shape. Add the area of every flat face.",
        rule: "Surface area = sum of the faces.",
        draw: [
          R(120, 160, 90, 70, PALE_B, BLUE),
          R(230, 160, 90, 70, PALE_O, ORANGE),
          R(340, 160, 90, 70, PALE_G, GREEN),
          R(450, 160, 90, 70, PALE_P, PURPLE),
          R(560, 160, 90, 70, PALE_R, RED),
          T(400, 280, "add the faces", INK, 18),
          T(400, 330, "two triangles + three rectangles", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "A triangular prism",
        narration: "A Toblerone box has two triangle ends and three rectangle sides. Find each area, then add.",
        rule: "2 triangles + 3 rectangles.",
        draw: [
          P("M 180 220 L 280 220 L 230 150 Z", BLUE, 3),
          P("M 460 220 L 560 220 L 510 150 Z", BLUE, 3),
          R(180, 250, 380, 36, PALE_O, ORANGE),
          R(180, 296, 380, 36, PALE_G, GREEN),
          T(400, 370, "ends + sides", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Pyramid faces",
        narration: "The square base is 25. Each of the four triangles is 10. 25 + 40 = 65.",
        rule: "Surface area = 65.",
        quizQ: "A pyramid has base area 25 and four triangles of area 10. What is the surface area?",
        quizA: "65. 25 + 10 + 10 + 10 + 10.",
        draw: [
          R(300, 250, 80, 80, PALE_B, BLUE),
          T(340, 290, "25", BLUE, 18),
          P("M 300 250 L 340 150 L 380 250 Z", ORANGE, 3),
          T(500, 200, "4 × 10", ORANGE, 20),
          T(500, 260, "65", GREEN, 32),
        ],
      }],
    },
  ]);

  data["m7_16.1"] = lesson("16.1 Frequency diagrams", "Section 16.1: Frequency diagrams", [
    {
      label: "Key idea",
      steps: [{
        heading: "Gaps or no gaps",
        narration: "Counted data, like shoe sizes, has gaps between the bars. Measured data, like height, uses bars that touch, because the groups run into each other.",
        rule: "Discrete bars have gaps. Continuous bars touch.",
        draw: [
          R(120, 220, 40, 100, PALE_B, BLUE),
          R(190, 180, 40, 140, PALE_B, BLUE),
          R(260, 250, 40, 70, PALE_B, BLUE),
          T(200, 350, "shoe sizes", BLUE, 14),
          R(460, 200, 50, 120, PALE_O, ORANGE),
          R(510, 160, 50, 160, PALE_O, ORANGE),
          R(560, 230, 50, 90, PALE_O, ORANGE),
          T(535, 350, "heights", ORANGE, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Twice as tall",
        narration: "If the scale starts at zero, a bar twice as tall means twice as many people. A broken scale would cheat that comparison.",
        rule: "Double height means double frequency, from zero.",
        draw: [
          R(220, 230, 70, 80, PALE_B, BLUE),
          R(420, 150, 70, 160, PALE_O, ORANGE),
          T(255, 340, "8", BLUE, 16),
          T(455, 340, "16", ORANGE, 16),
          T(400, 390, "twice as many", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Shoes and heights",
        narration: "You cannot be shoe size 4.123, so those bars stay separate. Height is continuous, so the groups touch.",
        rule: "Shoe size is discrete. Height is continuous.",
        quizQ: "Why are there gaps between shoe-size bars but not between height bars?",
        quizA: "Shoe size is discrete. Height is continuous, so the groups touch.",
        draw: [
          R(120, 170, 240, 120, PALE_B, BLUE),
          R(430, 170, 240, 120, PALE_O, ORANGE),
          T(240, 215, "gaps", BLUE, 22),
          T(240, 255, "counted sizes", SUB, 15),
          T(550, 215, "touching", ORANGE, 22),
          T(550, 255, "measured height", SUB, 15),
        ],
      }],
    },
  ]);

  data["m7_16.2"] = lesson("16.2 Time series graphs", "Section 16.2: Time series", [
    {
      label: "Key idea",
      steps: [{
        heading: "Time along the bottom",
        narration: "Join the points in time order. The little zig-zags are ups and downs. The overall rise or fall is the trend.",
        rule: "Join points in order. Look for the trend.",
        draw: [
          P("M 140 300 L 640 300", "#94a3b8", 2),
          P("M 160 260 L 250 220 L 340 250 L 430 180 L 520 200 L 610 140", BLUE, 3),
          P("M 160 270 L 610 150", RED, 2, "6,4"),
          T(500, 120, "trend", RED, 16),
          T(200, 340, "time", SUB, 14),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "What a trend is",
        narration: "The trend is the general direction, like a slow rise, ignoring the small bounces along the way.",
        rule: "Trend = the overall direction.",
        draw: [
          P("M 160 280 L 240 240 L 320 260 L 400 200 L 480 220 L 600 150", "#94a3b8", 3),
          P("M 160 290 L 600 150", GREEN, 4),
          T(400, 340, "ignore the bounces", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Join, or do not join",
        narration: "Time happens in order, so the line tells a story. A scatter graph compares two things that do not follow a path, so the dots stay unjoined.",
        rule: "Time series: join. Scatter: leave the dots.",
        quizQ: "Why join points on a time series but not on a scatter graph?",
        quizA: "Time is in order. A scatter graph does not follow a path.",
        draw: [
          P("M 140 250 L 220 200 L 300 230 L 380 170", BLUE, 3),
          T(250, 300, "time series", BLUE, 16),
          C(500, 180, 6, ORANGE, ORANGE),
          C(560, 240, 6, ORANGE, ORANGE),
          C(620, 160, 6, ORANGE, ORANGE),
          C(660, 220, 6, ORANGE, ORANGE),
          T(580, 300, "scatter", ORANGE, 16),
        ],
      }],
    },
  ]);

  data["m7_16.3"] = lesson("16.3 Stem-and-leaf diagrams", "Section 16.3: Stem-and-leaf", [
    {
      label: "Key idea",
      steps: [{
        heading: "Stem and leaves",
        narration: "The stem is the first digit. The leaves are the last digits. 1 | 9 means 19. You can see the shape and still read every number.",
        rule: "1 | 9 means 19.",
        draw: [
          R(220, 140, 80, 160, PALE_B, BLUE),
          P("M 300 150 L 300 290", INK, 3),
          T(260, 190, "1", BLUE, 28),
          T(260, 250, "2", BLUE, 28),
          T(360, 190, "9", ORANGE, 24),
          T(470, 250, "1  1  5  6  7  9", ORANGE, 18),
          T(400, 350, "key: 1 | 9 = 19", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "Row 2 | 1 1 5 6 7 9",
        narration: "The stem 2 means twenty-something. Read each leaf: 21, 21, 25, 26, 27 and 29.",
        rule: "21, 21, 25, 26, 27, 29.",
        draw: [
          T(180, 180, "21", BLUE, 22),
          T(280, 180, "21", BLUE, 22),
          T(380, 180, "25", ORANGE, 22),
          T(480, 180, "26", ORANGE, 22),
          T(250, 260, "27", GREEN, 22),
          T(380, 260, "29", GREEN, 22),
          T(400, 340, "six temperatures", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Why it is useful",
        narration: "The leaves pile up like a sideways bar chart, so you see the shape. Unlike a bar chart, every original number is still there.",
        rule: "Shape plus the exact numbers.",
        quizQ: "Why is a stem-and-leaf diagram useful?",
        quizA: "You see the shape of the data and can still read every number.",
        draw: [
          R(200, 200, 30, 80, PALE_B, BLUE),
          R(240, 170, 30, 110, PALE_B, BLUE),
          R(280, 220, 30, 60, PALE_B, BLUE),
          T(500, 190, "shape", BLUE, 18),
          T(500, 240, "and", SUB, 16),
          T(500, 290, "every number", GREEN, 18),
        ],
      }],
    },
  ]);

  data["m7_16.4"] = lesson("16.4 Pie charts", "Section 16.4: Pie charts", [
    {
      label: "Key idea",
      steps: [{
        heading: "Fraction of 360°",
        narration: "A full circle is 360°. Find what fraction chose that answer, then multiply by 360 to get the angle of the slice.",
        rule: "Angle = fraction × 360°.",
        draw: [
          C(300, 230, 80, "#ffffff", ORANGE),
          P("M 300 230 L 300 150 A 80 80 0 0 0 380 230 Z", ORANGE, 3),
          T(560, 190, "1/4", ORANGE, 28),
          T(560, 240, "of 360°", SUB, 16),
          T(560, 290, "90°", GREEN, 28),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "5 out of 20 chose red",
        narration: "5/20 is one quarter. One quarter of 360° is 90°, a right angle.",
        rule: "The red slice is 90°.",
        draw: [
          T(250, 180, "5/20", BLUE, 28),
          T(430, 180, "=", INK, 28),
          T(560, 180, "1/4", ORANGE, 28),
          T(400, 280, "360 ÷ 4 = 90°", GREEN, 24),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "A 120° slice of 30 people",
        narration: "120 is one third of 360. One third of 30 people is 10 people.",
        rule: "The slice is 10 people.",
        quizQ: "A slice is 120° and 30 people were surveyed. How many people is the slice?",
        quizA: "10 people. 120° is one third of 360°.",
        draw: [
          C(260, 220, 70, "#ffffff", BLUE),
          P("M 260 220 L 260 150 A 70 70 0 0 1 321 255 Z", BLUE, 3),
          T(520, 190, "120°", BLUE, 26),
          T(520, 240, "1/3 of 30", SUB, 16),
          T(520, 290, "10 people", GREEN, 22),
        ],
      }],
    },
  ]);

  data["m7_16.5"] = lesson("16.5 Representing data", "Section 16.5: Choosing a graph", [
    {
      label: "Key idea",
      steps: [{
        heading: "Pick the picture",
        narration: "Change over time uses a time series. A share of a whole uses a pie chart. Exact numbers can use a stem-and-leaf. Two linked measures use a scatter graph.",
        rule: "Match the graph to the question.",
        draw: [
          R(110, 140, 130, 80, PALE_B, BLUE),
          R(270, 140, 130, 80, PALE_O, ORANGE),
          R(430, 140, 130, 80, PALE_G, GREEN),
          R(590, 140, 110, 80, PALE_P, PURPLE),
          T(175, 180, "time", BLUE, 16),
          T(335, 180, "pie", ORANGE, 16),
          T(495, 180, "stem", GREEN, 16),
          T(645, 180, "scatter", PURPLE, 14),
          T(400, 290, "title, labels, units", INK, 18),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "What every graph needs",
        narration: "A title says what it is about. The axes need names, and the numbers need units such as cm or minutes.",
        rule: "Title, labels, and units.",
        draw: [
          R(160, 150, 160, 70, PALE_B, BLUE),
          R(360, 150, 160, 70, PALE_O, ORANGE),
          R(250, 250, 220, 70, PALE_G, GREEN),
          T(240, 185, "title", BLUE, 18),
          T(440, 185, "labels", ORANGE, 18),
          T(360, 285, "units", GREEN, 18),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "A 3D pie can trick you",
        narration: "The slice at the front is drawn thicker, so it looks bigger than its angle. A flat pie chart compares the angles fairly.",
        rule: "The front slice looks too big.",
        quizQ: "Why can a 3D pie chart trick you?",
        quizA: "The front slices look bigger than they really are.",
        draw: [
          C(280, 210, 70, "#ffffff", "#94a3b8"),
          P("M 280 210 L 280 140 A 70 70 0 0 1 350 210 Z", PALE_O, ORANGE),
          R(500, 170, 140, 90, PALE_R, RED),
          T(570, 215, "looks bigger", RED, 16),
        ],
      }],
    },
  ]);

  data["m7_16.6"] = lesson("16.6 Using statistics", "Section 16.6: Averages", [
    {
      label: "Key idea",
      steps: [{
        heading: "Four summaries",
        narration: "Mean: add and divide. Median: the middle after sorting. Mode: the most common. Range: largest minus smallest.",
        rule: "Mean, median, mode, range.",
        draw: [
          T(160, 160, "2", BLUE, 22),
          T(250, 160, "3", ORANGE, 22),
          T(340, 160, "3", ORANGE, 22),
          T(430, 160, "8", RED, 22),
          R(110, 210, 130, 60, PALE_B, BLUE),
          R(260, 210, 130, 60, PALE_O, ORANGE),
          R(410, 210, 130, 60, PALE_G, GREEN),
          R(560, 210, 130, 60, PALE_R, RED),
          T(175, 240, "mean", BLUE, 14),
          T(325, 240, "mode", ORANGE, 14),
          T(475, 240, "median", GREEN, 14),
          T(625, 240, "range", RED, 14),
          T(400, 330, "2, 3, 3, 8", SUB, 16),
        ],
      }],
    },
    {
      label: "Recall",
      steps: [{
        heading: "One huge outlier",
        narration: "A single giant number pulls the mean up. The median stays in the middle of the ordered list, so it is safer.",
        rule: "Use the median when there is an outlier.",
        draw: [
          C(180, 240, 10, BLUE, BLUE),
          C(260, 240, 10, BLUE, BLUE),
          C(340, 240, 12, GREEN, GREEN),
          C(620, 160, 16, RED, RED),
          T(340, 280, "median", GREEN, 16),
          T(620, 200, "outlier", RED, 16),
          T(400, 350, "mean gets dragged", SUB, 16),
        ],
      }],
    },
    {
      label: "Check",
      steps: [{
        heading: "Range 10 or range 30",
        narration: "A range of 10 means the scores sit close together. A range of 30 means they are spread out.",
        rule: "Class A is more consistent.",
        quizQ: "Class A has range 10 and class B has range 30. What does that tell you?",
        quizA: "Class A’s scores are closer together. Class B’s scores are more spread out.",
        draw: [
          R(150, 190, 80, 40, PALE_G, GREEN),
          T(190, 250, "range 10", GREEN, 16),
          R(430, 170, 220, 40, PALE_R, RED),
          T(540, 250, "range 30", RED, 16),
          T(400, 330, "smaller range, closer scores", SUB, 16),
        ],
      }],
    },
  ]);
}

function keepOnly(prefix, ids) {
  Object.keys(data).forEach((key) => {
    if (key.startsWith(prefix) && ids.indexOf(key) === -1) delete data[key];
  });
}

function audit(keys) {
  const problems = [];
  keys.forEach((key) => {
    const topic = data[key];
    if (!topic) {
      problems.push(key + " missing");
      return;
    }
    topic.subtopics.forEach((sub) => {
      let stack = [];
      (topic.scenes[sub.id] || []).forEach((step, index) => {
        if (step.clear || index === 0) stack = [];
        stack = stack.concat(step.elements || []);
        const texts = stack.filter((e) => e.type === "text");
        const boxes = texts.map((e) => {
          const w = e.size * 0.62 * String(e.text).length;
          const h = e.size;
          return { t: e.text, l: e.x - w / 2, r: e.x + w / 2, top: e.y - h / 2, bot: e.y + h / 2 };
        });
        boxes.forEach((b) => {
          if (b.l < 58 || b.r > 745 || b.top < 46 || b.bot > 438) {
            problems.push(key + " " + sub.id + " step " + index + " outside: " + b.t);
          }
        });
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i];
            const b = boxes[j];
            const w = Math.min(a.r, b.r) - Math.max(a.l, b.l);
            const h = Math.min(a.bot, b.bot) - Math.max(a.top, b.top);
            if (w > 2 && h > 2) problems.push(key + " " + sub.id + " step " + index + " overlap: " + a.t + " | " + b.t);
          }
        }
      });
    });
  });
  return problems;
}

fix21();
rebuild31();
chapters();
keepOnly("m7_10.", ["m7_10.1", "m7_10.2"]);
keepOnly("m7_13.", ["m7_13.1", "m7_13.2"]);

const keys = ["m7_2.1", "m7_3.1"]
  .concat(["7.1", "7.2", "7.3", "7.4", "7.5", "7.6"].map((id) => "m7_" + id))
  .concat(["10.1", "10.2", "11.1", "11.2", "11.3", "11.4"].map((id) => "m7_" + id))
  .concat(["13.1", "13.2", "14.1", "14.2", "14.3", "14.4", "14.5", "14.6"].map((id) => "m7_" + id))
  .concat(["15.1", "15.2", "15.3", "15.4", "16.1", "16.2", "16.3", "16.4", "16.5", "16.6"].map((id) => "m7_" + id));

const problems = audit(keys);
if (problems.length) {
  console.log(problems.slice(0, 80).join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote sketches", keys.length);
