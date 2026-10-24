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
const PALE_GREEN = "#d1fae5";
const PALE_ORANGE = "#ffedd5";
const PALE_RED = "#fee2e2";
const PALE_PURPLE = "#ede9fe";

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
  return {
    clear: false,
    narration,
    rule,
    quizQ: quizQ || "",
    quizA: quizA || "",
    elements,
  };
}

function first(narration, rule, elements, quizQ, quizA) {
  const step = scene(narration, rule, elements, quizQ, quizA);
  delete step.clear;
  return step;
}

data["m7_6.1"] = {
  title: "6.1 Data collection",
  watermark: "Section 6.1: Data",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
  ],
  scenes: {
    card_0: [
      first(
        "Data is the information we collect. It comes in three kinds.",
        "There are three kinds of data: words, whole-number counts, and measurements.",
        [
          ...board("Three kinds of data", PURPLE),
          { type: "rect", x: 80, y: 150, width: 200, height: 250, fill: "#ffffff", stroke: BLUE, strokeWidth: 2, rx: 12 },
          { type: "rect", x: 300, y: 150, width: 200, height: 250, fill: "#ffffff", stroke: GREEN, strokeWidth: 2, rx: 12 },
          { type: "rect", x: 520, y: 150, width: 200, height: 250, fill: "#ffffff", stroke: ORANGE, strokeWidth: 2, rx: 12 },
          { type: "text", x: 180, y: 188, text: "Categorical", color: BLUE, size: 16 },
          { type: "text", x: 400, y: 188, text: "Discrete", color: GREEN, size: 16 },
          { type: "text", x: 620, y: 188, text: "Continuous", color: ORANGE, size: 16 },
        ]
      ),
      scene(
        "Categorical data is words you can name, like eye colour or favourite pizza.",
        "Categorical data is words, such as eye colour or favourite pizza.",
        [
          { type: "circle", cx: 140, cy: 250, r: 16, fill: BLUE },
          { type: "circle", cx: 180, cy: 250, r: 16, fill: "#92400e" },
          { type: "circle", cx: 220, cy: 250, r: 16, fill: GREEN },
          { type: "text", x: 180, y: 292, text: "blue  brown  green", color: SUB, size: 12 },
          { type: "text", x: 180, y: 340, text: "Words", color: BLUE, size: 18 },
          { type: "text", x: 180, y: 368, text: "eye colour", color: SUB, size: 14 },
        ]
      ),
      scene(
        "Discrete data is something you count in whole numbers. You can have 3 pets, not 2.5 pets.",
        "Discrete data is a whole-number count, such as the number of pets.",
        [
          { type: "circle", cx: 350, cy: 250, r: 14, fill: GREEN },
          { type: "circle", cx: 390, cy: 250, r: 14, fill: GREEN },
          { type: "circle", cx: 430, cy: 250, r: 14, fill: GREEN },
          { type: "text", x: 400, y: 286, text: "1    2    3", color: INK, size: 14 },
          { type: "text", x: 400, y: 332, text: "Whole numbers", color: GREEN, size: 16 },
          { type: "text", x: 400, y: 360, text: "number of pets", color: SUB, size: 14 },
          { type: "text", x: 400, y: 386, text: "not 2.5 pets", color: RED, size: 14 },
        ]
      ),
      scene(
        "Continuous data is measured, so decimals are allowed. A height can be 152.4 cm.",
        "Continuous data is measured and can include decimals, such as height or time.",
        [
          { type: "path", d: "M 555 248 L 685 248", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 555 240 L 555 256", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 685 240 L 685 256", stroke: ORANGE, width: 2, fill: "none" },
          { type: "circle", cx: 628, cy: 248, r: 6, fill: RED },
          { type: "text", x: 620, y: 278, text: "152.4 cm", color: RED, size: 16 },
          { type: "text", x: 620, y: 332, text: "Measured", color: ORANGE, size: 16 },
          { type: "text", x: 620, y: 360, text: "decimals allowed", color: SUB, size: 14 },
        ]
      ),
    ],
    card_1: [
      first(
        "We collect data instead of guessing. Here are four ways.",
        "Data can be collected with a survey, an interview, a tally, or a data logger.",
        [
          ...board("How we collect data", BLUE),
        ]
      ),
      scene(
        "A questionnaire is a written survey. People read the questions and write answers.",
        "A questionnaire is a written survey.",
        [
          { type: "rect", x: 110, y: 140, width: 150, height: 100, fill: "#ffffff", stroke: BLUE, strokeWidth: 2, rx: 8 },
          { type: "path", d: "M 128 165 L 232 165", stroke: LINE, width: 3, fill: "none" },
          { type: "path", d: "M 128 185 L 210 185", stroke: LINE, width: 3, fill: "none" },
          { type: "path", d: "M 128 205 L 220 205", stroke: LINE, width: 3, fill: "none" },
          { type: "text", x: 185, y: 268, text: "Questionnaire", color: BLUE, size: 16 },
          { type: "text", x: 185, y: 292, text: "written survey", color: SUB, size: 14 },
        ]
      ),
      scene(
        "An interview means you ask someone out loud and listen to the answer.",
        "An interview means asking people and listening.",
        [
          { type: "circle", cx: 500, cy: 185, r: 22, fill: PALE_BLUE, stroke: BLUE, width: 2 },
          { type: "circle", cx: 620, cy: 185, r: 22, fill: PALE_GREEN, stroke: GREEN, width: 2 },
          ...arrow(528, 185, 592, 185, INK),
          { type: "text", x: 560, y: 268, text: "Interview", color: GREEN, size: 16 },
          { type: "text", x: 560, y: 292, text: "ask out loud", color: SUB, size: 14 },
        ]
      ),
      scene(
        "A tally chart is for counting things you see. Groups of five make the count easy.",
        "A tally chart counts things you observe.",
        [
          { type: "text", x: 185, y: 360, text: "||||   ||||   |||", color: INK, size: 20 },
          { type: "text", x: 185, y: 396, text: "Tally chart", color: PURPLE, size: 16 },
          { type: "text", x: 185, y: 420, text: "count what you see", color: SUB, size: 14 },
        ]
      ),
      scene(
        "A data logger is a computer tool that records measurements for you.",
        "A data logger records measurements automatically.",
        [
          { type: "rect", x: 480, y: 340, width: 160, height: 46, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 8 },
          { type: "text", x: 560, y: 364, text: "12.6", color: BLUE, size: 18 },
          { type: "text", x: 560, y: 410, text: "Data logger", color: BLUE, size: 16 },
        ]
      ),
    ],
    card_2: [
      first(
        "Look at this question. Something in it is trying to trick you.",
        "A fair question does not hint at the answer.",
        [
          ...board("Spot the unfair question", RED),
          { type: "rect", x: 120, y: 140, width: 560, height: 70, fill: PALE_RED, stroke: RED, strokeWidth: 2, rx: 12 },
          { type: "text", x: 400, y: 178, text: "Do you like our excellent canteen?", color: RED, size: 18 },
        ],
        "Why is 'Do you like our excellent canteen?' a bad question?",
        "The word excellent tries to trick people into saying yes. A fair question stays neutral."
      ),
      scene(
        "The word excellent is a hint. It pushes people to say yes.",
        "Leading words such as excellent push people toward one answer.",
        [
          ...arrow(400, 220, 400, 268, RED),
          { type: "text", x: 400, y: 300, text: "excellent  =  a hint", color: RED, size: 18 },
          { type: "text", x: 400, y: 332, text: "It pushes people to say yes", color: SUB, size: 16 },
        ],
        "Why is 'Do you like our excellent canteen?' a bad question?",
        "The word excellent tries to trick people into saying yes. A fair question stays neutral."
      ),
      scene(
        "Take the hint away. Now yes and no are both fair answers.",
        "A fair question is neutral and does not hint at the answer.",
        [
          { type: "rect", x: 140, y: 360, width: 520, height: 58, fill: PALE_GREEN, stroke: GREEN, strokeWidth: 2, rx: 12 },
          { type: "text", x: 400, y: 392, text: "Do you like the canteen?", color: GREEN, size: 18 },
        ],
        "Why is 'Do you like our excellent canteen?' a bad question?",
        "The word excellent tries to trick people into saying yes. A fair question stays neutral."
      ),
    ],
  },
};

const schoolDots = [];
const sampleIds = new Set([3, 6, 10, 17, 22]);
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 7; col++) {
    const i = row * 7 + col;
    schoolDots.push({
      type: "circle",
      cx: 130 + col * 36,
      cy: 175 + row * 36,
      r: 12,
      fill: sampleIds.has(i) ? "#bfdbfe" : BLUE,
    });
  }
}
const sampleDots = [];
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 7; col++) {
    const i = row * 7 + col;
    if (!sampleIds.has(i)) continue;
    sampleDots.push({
      type: "circle",
      cx: 130 + col * 36,
      cy: 175 + row * 36,
      r: 12,
      fill: ORANGE,
    });
  }
}

data["m7_6.2"] = {
  title: "6.2 Sampling",
  watermark: "Section 6.2: Sampling",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
  ],
  scenes: {
    card_0: [
      first(
        "The population is everyone you want to know about, like the whole school.",
        "The population is the whole group. A sample is the smaller group you actually ask.",
        [
          ...board("Population and sample", BLUE),
          { type: "rect", x: 90, y: 140, width: 400, height: 180, fill: "#ffffff", stroke: BLUE, strokeWidth: 2, rx: 12 },
          ...schoolDots,
          { type: "text", x: 290, y: 348, text: "Whole school = population", color: BLUE, size: 16 },
        ]
      ),
      scene(
        "A sample is the smaller group you actually ask. These orange people are the sample.",
        "A sample is a smaller group taken from the population.",
        [
          ...sampleDots,
          { type: "text", x: 600, y: 200, text: "Sample", color: ORANGE, size: 18 },
          { type: "text", x: 600, y: 230, text: "the few", color: SUB, size: 14 },
          { type: "text", x: 600, y: 252, text: "you ask", color: SUB, size: 14 },
        ]
      ),
      scene(
        "A random sample is like pulling names from a hat. Every person has the same chance.",
        "In a random sample, every person has the same chance of being picked.",
        [
          { type: "rect", x: 150, y: 370, width: 500, height: 48, fill: PALE_ORANGE, stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 400, y: 396, text: "Random = same chance for everyone", color: ORANGE, size: 16 },
        ]
      ),
    ],
    card_1: [
      first(
        "Random does not mean 'whoever is nearby'. It means a fair pick.",
        "A sample is random when every person has the same chance.",
        [
          ...board("What makes a sample random?", ORANGE),
          { type: "rect", x: 250, y: 150, width: 300, height: 130, fill: "#ffffff", stroke: ORANGE, strokeWidth: 2, rx: 16 },
          { type: "rect", x: 280, y: 175, width: 70, height: 28, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 4 },
          { type: "rect", x: 365, y: 175, width: 70, height: 28, fill: PALE_GREEN, stroke: GREEN, strokeWidth: 2, rx: 4 },
          { type: "rect", x: 450, y: 175, width: 70, height: 28, fill: PALE_PURPLE, stroke: PURPLE, strokeWidth: 2, rx: 4 },
          { type: "rect", x: 320, y: 218, width: 70, height: 28, fill: PALE_ORANGE, stroke: ORANGE, strokeWidth: 2, rx: 4 },
          { type: "rect", x: 410, y: 218, width: 70, height: 28, fill: PALE_RED, stroke: RED, strokeWidth: 2, rx: 4 },
          { type: "text", x: 400, y: 320, text: "Every name is the same size", color: INK, size: 16 },
          { type: "text", x: 400, y: 360, text: "so every person has", color: SUB, size: 16 },
          { type: "text", x: 400, y: 392, text: "the same chance", color: ORANGE, size: 18 },
        ],
        "What makes a sample random?",
        "Every person in the population has the same chance of being picked."
      ),
    ],
    card_2: [
      first(
        "Suppose you only ask your friends. They might all like the same things you do.",
        "A sample of only friends can be biased.",
        [
          ...board("Friends are a biased sample", RED),
          { type: "circle", cx: 160, cy: 190, r: 18, fill: ORANGE },
          { type: "circle", cx: 210, cy: 190, r: 18, fill: ORANGE },
          { type: "circle", cx: 260, cy: 190, r: 18, fill: ORANGE },
          { type: "circle", cx: 310, cy: 190, r: 18, fill: ORANGE },
          { type: "text", x: 235, y: 240, text: "You and friends", color: ORANGE, size: 16 },
          { type: "text", x: 235, y: 268, text: "all say pizza", color: RED, size: 16 },
        ],
        "Why is asking only your friends a bad sample?",
        "Friends may all like the same things, so the sample is biased and does not show the whole school."
      ),
      scene(
        "The rest of the school likes different foods. Your friends do not show the whole school.",
        "A biased sample does not represent the population.",
        [
          { type: "circle", cx: 480, cy: 170, r: 14, fill: BLUE },
          { type: "circle", cx: 520, cy: 170, r: 14, fill: GREEN },
          { type: "circle", cx: 560, cy: 170, r: 14, fill: PURPLE },
          { type: "circle", cx: 600, cy: 170, r: 14, fill: RED },
          { type: "circle", cx: 500, cy: 210, r: 14, fill: ORANGE },
          { type: "circle", cx: 540, cy: 210, r: 14, fill: BLUE },
          { type: "circle", cx: 580, cy: 210, r: 14, fill: GREEN },
          { type: "text", x: 540, y: 252, text: "Whole school", color: BLUE, size: 16 },
          { type: "text", x: 540, y: 278, text: "many answers", color: SUB, size: 14 },
        ],
        "Why is asking only your friends a bad sample?",
        "Friends may all like the same things, so the sample is biased and does not show the whole school."
      ),
      scene(
        "That sample is biased. It copies your friends, not the school.",
        "Asking only friends is biased because it does not represent the whole school.",
        [
          { type: "rect", x: 140, y: 340, width: 520, height: 70, fill: PALE_RED, stroke: RED, strokeWidth: 2, rx: 12 },
          { type: "text", x: 400, y: 368, text: "Biased", color: RED, size: 18 },
          { type: "text", x: 400, y: 394, text: "friends are not the whole school", color: INK, size: 16 },
        ],
        "Why is asking only your friends a bad sample?",
        "Friends may all like the same things, so the sample is biased and does not show the whole school."
      ),
    ],
  },
};

data["m7_12.1"] = {
  title: "12.1 Simplifying ratios",
  watermark: "Section 12.1: Ratios",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
  ],
  scenes: {
    card_0: [
      first(
        "A ratio compares two amounts. 6 : 9 means 6 for every 9.",
        "Simplify a ratio by dividing both sides by the same number.",
        [
          ...board("Simplify a ratio", PURPLE),
          { type: "text", x: 400, y: 170, text: "6  :  9", color: INK, size: 32 },
          { type: "rect", x: 150, y: 220, width: 144, height: 36, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 6 },
          { type: "rect", x: 420, y: 220, width: 216, height: 36, fill: PALE_ORANGE, stroke: ORANGE, strokeWidth: 2, rx: 6 },
          { type: "text", x: 222, y: 242, text: "6", color: BLUE, size: 16 },
          { type: "text", x: 528, y: 242, text: "9", color: ORANGE, size: 16 },
        ]
      ),
      scene(
        "3 fits into both 6 and 9. Divide both sides by 3.",
        "Divide both sides by the same number.",
        [
          { type: "text", x: 222, y: 300, text: "÷ 3", color: BLUE, size: 16 },
          { type: "text", x: 528, y: 300, text: "÷ 3", color: ORANGE, size: 16 },
          ...arrow(222, 318, 222, 355, BLUE),
          ...arrow(528, 318, 528, 355, ORANGE),
        ]
      ),
      scene(
        "6 ÷ 3 is 2, and 9 ÷ 3 is 3. The simpler ratio is 2 : 3.",
        "6 : 9 simplifies to 2 : 3. Both sides must be in the same units before you divide.",
        [
          { type: "text", x: 400, y: 400, text: "2  :  3", color: GREEN, size: 28 },
        ]
      ),
    ],
    card_1: [
      first(
        "2 metres compared with 50 centimetres. The units do not match yet.",
        "Change both sides into the same unit before you simplify.",
        [
          ...board("Same units first", BLUE),
          { type: "text", x: 400, y: 150, text: "2 m  :  50 cm", color: INK, size: 26 },
          { type: "rect", x: 120, y: 190, width: 240, height: 28, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 4 },
          { type: "text", x: 240, y: 206, text: "2 m", color: BLUE, size: 14 },
          { type: "rect", x: 460, y: 190, width: 60, height: 28, fill: PALE_ORANGE, stroke: ORANGE, strokeWidth: 2, rx: 4 },
          { type: "text", x: 490, y: 206, text: "50 cm", color: ORANGE, size: 12 },
        ],
        "Simplify 2 m : 50 cm.",
        "Change 2 m into 200 cm. Then 200 : 50 divides by 50 to give 4 : 1."
      ),
      scene(
        "Change 2 m into centimetres. 2 m is 200 cm, so the ratio is 200 : 50.",
        "2 m = 200 cm, so the ratio is 200 : 50.",
        [
          ...arrow(400, 240, 400, 280, PURPLE),
          { type: "text", x: 400, y: 310, text: "200 cm  :  50 cm", color: PURPLE, size: 20 },
        ],
        "Simplify 2 m : 50 cm.",
        "Change 2 m into 200 cm. Then 200 : 50 divides by 50 to give 4 : 1."
      ),
      scene(
        "50 fits into both numbers. 200 ÷ 50 is 4, and 50 ÷ 50 is 1.",
        "200 : 50 simplifies to 4 : 1.",
        [
          { type: "text", x: 400, y: 380, text: "4  :  1", color: GREEN, size: 28 },
        ],
        "Simplify 2 m : 50 cm.",
        "Change 2 m into 200 cm. Then 200 : 50 divides by 50 to give 4 : 1."
      ),
    ],
    card_2: [
      first(
        "1.5 : 2 still has a decimal. Multiply both sides to clear it.",
        "Multiply both sides by 10 to remove the decimal, then simplify.",
        [
          ...board("Clear the decimal", ORANGE),
          { type: "text", x: 400, y: 160, text: "1.5  :  2", color: INK, size: 28 },
        ],
        "Simplify 1.5 : 2.",
        "Multiply by 10 to get 15 : 20. Then divide by 5 to get 3 : 4."
      ),
      scene(
        "Multiply both sides by 10. 1.5 becomes 15, and 2 becomes 20.",
        "1.5 : 2 is the same as 15 : 20.",
        [
          { type: "text", x: 400, y: 220, text: "× 10", color: ORANGE, size: 16 },
          ...arrow(400, 240, 400, 275, ORANGE),
          { type: "text", x: 400, y: 305, text: "15  :  20", color: PURPLE, size: 26 },
        ],
        "Simplify 1.5 : 2.",
        "Multiply by 10 to get 15 : 20. Then divide by 5 to get 3 : 4."
      ),
      scene(
        "Now divide both sides by 5. 15 ÷ 5 is 3, and 20 ÷ 5 is 4.",
        "15 : 20 simplifies to 3 : 4.",
        [
          { type: "text", x: 400, y: 350, text: "÷ 5", color: BLUE, size: 16 },
          { type: "text", x: 400, y: 400, text: "3  :  4", color: GREEN, size: 28 },
        ],
        "Simplify 1.5 : 2.",
        "Multiply by 10 to get 15 : 20. Then divide by 5 to get 3 : 4."
      ),
    ],
  },
};

function shareBlocks(x, y, count, fill, stroke) {
  const blocks = [];
  for (let i = 0; i < count; i++) {
    blocks.push({
      type: "rect",
      x: x + i * 42,
      y,
      width: 34,
      height: 34,
      fill,
      stroke,
      strokeWidth: 2,
      rx: 6,
    });
  }
  return blocks;
}

data["m7_12.2"] = {
  title: "12.2 Sharing in a ratio",
  watermark: "Section 12.2: Sharing",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
  ],
  scenes: {
    card_0: [
      first(
        "Sharing in a ratio means cutting the amount into equal parts, then giving out the parts.",
        "Add the parts, divide to find one part, then multiply.",
        [
          ...board("Share in a ratio", GREEN),
          { type: "text", x: 400, y: 140, text: "Share 10 sweets in 1 : 4", color: INK, size: 18 },
          ...shareBlocks(250, 180, 1, PALE_BLUE, BLUE),
          ...shareBlocks(340, 180, 4, PALE_ORANGE, ORANGE),
          { type: "text", x: 267, y: 240, text: "1", color: BLUE, size: 14 },
          { type: "text", x: 403, y: 240, text: "4", color: ORANGE, size: 14 },
        ]
      ),
      scene(
        "1 plus 4 is 5 parts altogether. 10 sweets divided by 5 is 2 sweets in one part.",
        "Total parts = 5. One part = 10 ÷ 5 = 2.",
        [
          { type: "text", x: 400, y: 290, text: "5 parts", color: PURPLE, size: 16 },
          { type: "text", x: 400, y: 322, text: "10 ÷ 5 = 2 each", color: INK, size: 18 },
        ]
      ),
      scene(
        "The first person gets 1 × 2 = 2 sweets. The second gets 4 × 2 = 8 sweets.",
        "The shares are 2 and 8. Check: 2 + 8 = 10.",
        [
          { type: "text", x: 267, y: 380, text: "2 sweets", color: BLUE, size: 16 },
          { type: "text", x: 424, y: 380, text: "8 sweets", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 420, text: "2 + 8 = 10", color: GREEN, size: 16 },
        ]
      ),
    ],
    card_1: [
      first(
        "Share £840 in the ratio 2 : 3 : 1. First add the parts.",
        "Add every number in the ratio to find the total number of parts.",
        [
          ...board("Three-way share", BLUE),
          { type: "text", x: 400, y: 130, text: "£840    in    2 : 3 : 1", color: INK, size: 20 },
          ...shareBlocks(150, 170, 2, PALE_BLUE, BLUE),
          ...shareBlocks(280, 170, 3, PALE_GREEN, GREEN),
          ...shareBlocks(450, 170, 1, PALE_ORANGE, ORANGE),
          { type: "text", x: 171, y: 230, text: "2", color: BLUE, size: 14 },
          { type: "text", x: 322, y: 230, text: "3", color: GREEN, size: 14 },
          { type: "text", x: 467, y: 230, text: "1", color: ORANGE, size: 14 },
        ],
        "Share £840 in the ratio 2 : 3 : 1.",
        "6 parts. One part is £140. The shares are £280, £420 and £140."
      ),
      scene(
        "2 + 3 + 1 = 6 parts. One part is 840 ÷ 6 = £140.",
        "One part = £840 ÷ 6 = £140.",
        [
          { type: "text", x: 400, y: 290, text: "6 parts", color: PURPLE, size: 16 },
          { type: "text", x: 400, y: 324, text: "840 ÷ 6 = £140", color: INK, size: 18 },
        ],
        "Share £840 in the ratio 2 : 3 : 1.",
        "6 parts. One part is £140. The shares are £280, £420 and £140."
      ),
      scene(
        "Multiply. 2 parts is £280, 3 parts is £420, and 1 part is £140.",
        "The shares are £280, £420 and £140.",
        [
          { type: "text", x: 171, y: 380, text: "£280", color: BLUE, size: 16 },
          { type: "text", x: 322, y: 380, text: "£420", color: GREEN, size: 16 },
          { type: "text", x: 467, y: 380, text: "£140", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 420, text: "280 + 420 + 140 = 840", color: GREEN, size: 16 },
        ],
        "Share £840 in the ratio 2 : 3 : 1.",
        "6 parts. One part is £140. The shares are £280, £420 and £140."
      ),
    ],
    card_2: [
      first(
        "Share £60 in the ratio 2 : 3. Add the parts first.",
        "Total parts = 2 + 3 = 5.",
        [
          ...board("Share £60", GREEN),
          { type: "text", x: 400, y: 140, text: "£60    in    2 : 3", color: INK, size: 22 },
          ...shareBlocks(220, 180, 2, PALE_BLUE, BLUE),
          ...shareBlocks(360, 180, 3, PALE_ORANGE, ORANGE),
        ],
        "Share £60 in the ratio 2 : 3.",
        "5 parts. One part is £12. The shares are £24 and £36."
      ),
      scene(
        "5 parts altogether. 60 ÷ 5 = £12, so one part is worth £12.",
        "One part = £60 ÷ 5 = £12.",
        [
          { type: "text", x: 400, y: 270, text: "5 parts", color: PURPLE, size: 16 },
          { type: "text", x: 400, y: 306, text: "60 ÷ 5 = £12", color: INK, size: 20 },
        ],
        "Share £60 in the ratio 2 : 3.",
        "5 parts. One part is £12. The shares are £24 and £36."
      ),
      scene(
        "2 × 12 is £24. 3 × 12 is £36. Together they make £60.",
        "The shares are £24 and £36.",
        [
          { type: "text", x: 241, y: 360, text: "£24", color: BLUE, size: 18 },
          { type: "text", x: 403, y: 360, text: "£36", color: ORANGE, size: 18 },
          { type: "text", x: 400, y: 410, text: "24 + 36 = 60", color: GREEN, size: 18 },
        ],
        "Share £60 in the ratio 2 : 3.",
        "5 parts. One part is £12. The shares are £24 and £36."
      ),
    ],
  },
};

data["m7_12.3"] = {
  title: "12.3 Ratio and direct proportion",
  watermark: "Section 12.3: Proportion",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
  ],
  scenes: {
    card_0: [
      first(
        "Direct proportion means both amounts grow at the same speed.",
        "If you buy twice as many, you pay twice as much.",
        [
          ...board("Direct proportion", BLUE),
          { type: "rect", x: 140, y: 150, width: 70, height: 50, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 8 },
          { type: "text", x: 175, y: 178, text: "1 bag", color: BLUE, size: 14 },
          { type: "text", x: 300, y: 178, text: "£3", color: INK, size: 20 },
        ]
      ),
      scene(
        "Two bags is twice one bag, so the price is twice £3.",
        "Multiply the number of bags and the price by the same number.",
        [
          { type: "text", x: 175, y: 240, text: "× 2", color: ORANGE, size: 16 },
          { type: "text", x: 300, y: 240, text: "× 2", color: ORANGE, size: 16 },
          ...arrow(175, 258, 175, 300, ORANGE),
          ...arrow(300, 258, 300, 300, ORANGE),
          { type: "rect", x: 120, y: 312, width: 50, height: 36, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 6 },
          { type: "rect", x: 178, y: 312, width: 50, height: 36, fill: PALE_BLUE, stroke: BLUE, strokeWidth: 2, rx: 6 },
          { type: "text", x: 300, y: 334, text: "£6", color: GREEN, size: 22 },
        ]
      ),
      scene(
        "Same multiplier on both sides. That is direct proportion.",
        "The two amounts stay in the same ratio.",
        [
          { type: "text", x: 520, y: 250, text: "twice as many", color: BLUE, size: 16 },
          { type: "text", x: 520, y: 280, text: "twice the cost", color: GREEN, size: 16 },
        ]
      ),
    ],
    card_1: [
      first(
        "Which mix is redder? Turn each mix into a fraction of the whole.",
        "Compare the red fraction of each whole mix.",
        [
          ...board("Which mix is redder?", RED),
          { type: "circle", cx: 150, cy: 180, r: 16, fill: RED },
          { type: "circle", cx: 190, cy: 180, r: 16, fill: RED },
          { type: "circle", cx: 230, cy: 180, r: 16, fill: RED },
          { type: "circle", cx: 270, cy: 180, r: 16, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "circle", cx: 310, cy: 180, r: 16, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "circle", cx: 350, cy: 180, r: 16, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "circle", cx: 390, cy: 180, r: 16, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "text", x: 270, y: 224, text: "Mix A    3 red + 4 white", color: INK, size: 14 },
        ],
        "Which paint mix is redder, 3:4 or 2:3?",
        "Mix A is 3/7 red. Mix B is 2/5 red. 15/35 is more than 14/35, so A is redder."
      ),
      scene(
        "Mix A is 3 red out of 7, so it is 3/7 red. Mix B is 2 red out of 5, so it is 2/5 red.",
        "Mix A is 3/7 red. Mix B is 2/5 red.",
        [
          { type: "circle", cx: 500, cy: 300, r: 14, fill: RED },
          { type: "circle", cx: 536, cy: 300, r: 14, fill: RED },
          { type: "circle", cx: 572, cy: 300, r: 14, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "circle", cx: 608, cy: 300, r: 14, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "circle", cx: 644, cy: 300, r: 14, fill: "#ffffff", stroke: LINE, width: 2 },
          { type: "text", x: 572, y: 340, text: "Mix B   2 red + 3 white", color: INK, size: 14 },
          { type: "text", x: 230, y: 280, text: "A = 3/7", color: RED, size: 18 },
          { type: "text", x: 230, y: 320, text: "B = 2/5", color: ORANGE, size: 18 },
        ],
        "Which paint mix is redder, 3:4 or 2:3?",
        "Mix A is 3/7 red. Mix B is 2/5 red. 15/35 is more than 14/35, so A is redder."
      ),
      scene(
        "Fifths and sevenths meet at 35. 3/7 is 15/35. 2/5 is 14/35. Mix A is redder.",
        "3/7 = 15/35 and 2/5 = 14/35, so mix A has more red.",
        [
          { type: "text", x: 400, y: 400, text: "15/35  >  14/35    so A is redder", color: GREEN, size: 16 },
        ],
        "Which paint mix is redder, 3:4 or 2:3?",
        "Mix A is 3/7 red. Mix B is 2/5 red. 15/35 is more than 14/35, so A is redder."
      ),
    ],
    card_2: [
      first(
        "5 pens cost £2. How much do 15 pens cost?",
        "Find how many times more pens, then use the same multiplier on the price.",
        [
          ...board("Scale the price", GREEN),
          { type: "text", x: 250, y: 170, text: "5 pens", color: BLUE, size: 18 },
          { type: "text", x: 500, y: 170, text: "£2", color: INK, size: 22 },
        ],
        "5 pens cost £2. What do 15 pens cost?",
        "15 is 3 times 5, so the cost is 3 times £2, which is £6."
      ),
      scene(
        "15 is 3 times 5. The price must be multiplied by 3 as well.",
        "Use the same multiplier on both sides.",
        [
          { type: "text", x: 250, y: 230, text: "× 3", color: ORANGE, size: 18 },
          { type: "text", x: 500, y: 230, text: "× 3", color: ORANGE, size: 18 },
          ...arrow(250, 250, 250, 300, ORANGE),
          ...arrow(500, 250, 500, 300, ORANGE),
        ],
        "5 pens cost £2. What do 15 pens cost?",
        "15 is 3 times 5, so the cost is 3 times £2, which is £6."
      ),
      scene(
        "3 × 5 pens is 15 pens. 3 × £2 is £6.",
        "15 pens cost £6.",
        [
          { type: "text", x: 250, y: 340, text: "15 pens", color: BLUE, size: 20 },
          { type: "text", x: 500, y: 340, text: "£6", color: GREEN, size: 28 },
        ],
        "5 pens cost £2. What do 15 pens cost?",
        "15 is 3 times 5, so the cost is 3 times £2, which is £6."
      ),
    ],
  },
};

delete data["m7_12.4"];

const warnings = [];
for (const key of ["m7_6.1", "m7_6.2", "m7_12.1", "m7_12.2", "m7_12.3"]) {
  const topic = data[key];
  for (const [subId, scenes] of Object.entries(topic.scenes)) {
    scenes.forEach((step, index) => {
      (step.elements || []).forEach((el) => {
        if (el.type === "text") {
          const size = el.size || 22;
          const width = size * 0.62 * String(el.text).length;
          const left = el.x - width / 2;
          const right = el.x + width / 2;
          if (left < 40 || right > 760 || el.y > 460 || el.y < 24) {
            warnings.push(`${key} ${subId} step ${index}: "${el.text}" left ${Math.round(left)} right ${Math.round(right)} y ${el.y}`);
          }
        }
        if (el.type === "rect" && el.y + el.height > 470 && !(el.x === 0 && el.width === 800)) {
          warnings.push(`${key} ${subId} step ${index}: rect bottom ${el.y + el.height}`);
        }
      });
    });
  }
}

if (data["m7_12.4"]) warnings.push("m7_12.4 still present");
if (warnings.length) {
  console.log(warnings.join("\n"));
  process.exitCode = 1;
}

fs.writeFileSync(
  "interactive-whiteboard-data.js",
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n",
  "utf8"
);
console.log("Updated Year 7 chapters 6 and 12");
console.log("12.4 removed:", data["m7_12.4"] === undefined);
console.log("titles:", ["m7_6.1", "m7_6.2", "m7_12.1", "m7_12.2", "m7_12.3"].map((k) => data[k].title).join(" | "));
