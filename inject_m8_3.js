const fs = require('fs');

let content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
let jsonStr = content.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '').replace(/;\s*$/, '');
let data = eval('(' + jsonStr + ')');

const BG_COLOR = "#ffffff";
const BOX_BG = "#f8fafc";
const BOX_BORDER = "#cbd5e1";
const TEXT_MAIN = "#0f172a";
const TEXT_SUB = "#475569";
const GREEN = "#059669";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PURPLE = "#7c3aed";

const getBg = () => [
  { type: "rect", x: 0, y: 0, width: 800, height: 600, fill: BG_COLOR }
];

// ------------------------------------------------------------------
// m8_3.1: Multiplying and dividing by powers of 10
// ------------------------------------------------------------------
data["m8_3.1"] = {
  title: "3.1 Multiplying and dividing by powers of 10",
  watermark: "Section 3.1: Powers of 10",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What happens when you multiply or divide by 10, 100, or 1000?",
        rule: "What happens when you × or ÷ by 10, 100, 1000?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Powers of 10", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What happens when you × or ÷ by 10, 100, 1000?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "3.4", color: BLUE, size: 48 },
          { type: "text", x: 400, y: 320, text: "× 10", color: ORANGE, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "The digits slide left when multiplying, and right when dividing! Zeros jump in to hold empty spaces.",
        rule: "The digits slide left when multiplying (getting bigger) and right when dividing (getting smaller). Zeros jump in to hold the empty spaces!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 430 250 L 370 250", stroke: GREEN, width: 3, fill: "none" },
          { type: "path", d: "M 380 240 L 370 250 L 380 260", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 210, text: "Digits slide LEFT", color: GREEN, size: 16 },
          
          { type: "text", x: 400, y: 400, text: "= 34", color: GREEN, size: 48, bold: true },
          
          { type: "text", x: 400, y: 480, text: "Zeros jump in to hold empty spaces!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's multiply 3.47 by 100.",
        rule: "3.47 × 100.",
        quizQ: "3.47 × 100.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "3.47 × 100", color: TEXT_MAIN, size: 24 },
          
          // Columns
          { type: "text", x: 250, y: 220, text: "H", color: TEXT_SUB, size: 20 },
          { type: "text", x: 300, y: 220, text: "T", color: TEXT_SUB, size: 20 },
          { type: "text", x: 350, y: 220, text: "U", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 220, text: ".", color: TEXT_SUB, size: 20 },
          { type: "text", x: 450, y: 220, text: "t", color: TEXT_SUB, size: 20 },
          { type: "text", x: 500, y: 220, text: "h", color: TEXT_SUB, size: 20 },
          
          { type: "text", x: 350, y: 280, text: "3", color: BLUE, size: 40 },
          { type: "text", x: 400, y: 280, text: ".", color: BLUE, size: 40 },
          { type: "text", x: 450, y: 280, text: "4", color: BLUE, size: 40 },
          { type: "text", x: 500, y: 280, text: "7", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Multiply by 100 means slide two places left. The answer is 347.",
        rule: "347. (Slide two places left).",
        quizQ: "",
        quizA: "347. (Slide two places left).",
        elements: [
          { type: "path", d: "M 350 300 C 320 330, 280 330, 250 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 260 290 L 250 300 L 265 305", stroke: ORANGE, width: 2, fill: "none" },
          
          { type: "path", d: "M 450 300 C 420 330, 380 330, 350 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 360 290 L 350 300 L 365 305", stroke: ORANGE, width: 2, fill: "none" },
          
          { type: "path", d: "M 500 300 C 470 330, 430 330, 400 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 410 290 L 400 300 L 415 305", stroke: ORANGE, width: 2, fill: "none" },
          
          { type: "text", x: 250, y: 380, text: "3", color: GREEN, size: 40, bold: true },
          { type: "text", x: 300, y: 380, text: "4", color: GREEN, size: 40, bold: true },
          { type: "text", x: 350, y: 380, text: "7", color: GREEN, size: 40, bold: true },
          { type: "text", x: 400, y: 380, text: ".", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 400, y: 480, text: "= 347", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Now let's divide 0.6 by 1000.",
        rule: "0.6 ÷ 1000.",
        quizQ: "0.6 ÷ 1000.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Dividing", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "0.6 ÷ 1000", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 350, y: 250, text: "0", color: BLUE, size: 40 },
          { type: "text", x: 400, y: 250, text: ".", color: BLUE, size: 40 },
          { type: "text", x: 450, y: 250, text: "6", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Divide by 1000 means slide three places right. We need zeros to hold the empty spaces! 0.0006.",
        rule: "0.0006. (Slide three places right).",
        quizQ: "",
        quizA: "0.0006. (Slide three places right).",
        elements: [
          { type: "path", d: "M 450 270 C 500 300, 550 300, 600 270", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 590 260 L 600 270 L 585 275", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 525, y: 310, text: "Slide 3 places right", color: ORANGE, size: 16 },
          
          { type: "text", x: 350, y: 380, text: "0", color: GREEN, size: 40, bold: true },
          { type: "text", x: 400, y: 380, text: ".", color: GREEN, size: 40, bold: true },
          { type: "text", x: 450, y: 380, text: "0", color: RED, size: 40, bold: true },
          { type: "text", x: 500, y: 380, text: "0", color: RED, size: 40, bold: true },
          { type: "text", x: 550, y: 380, text: "0", color: RED, size: 40, bold: true },
          { type: "text", x: 600, y: 380, text: "6", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 500, y: 430, text: "Zeros hold the spaces!", color: RED, size: 16 },
          
          { type: "text", x: 400, y: 500, text: "= 0.0006", color: GREEN, size: 40, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_3.2: Multiplying and dividing decimals
// ------------------------------------------------------------------
data["m8_3.2"] = {
  title: "3.2 Multiplying and dividing decimals",
  watermark: "Section 3.2: Decimal Arithmetic",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do we multiply decimals?",
        rule: "How do we multiply decimals?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Multiplying Decimals", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do we multiply decimals?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "0.3 × 0.7", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "Pretend the dots aren't there and multiply like normal. Then put the dot back so the answer has the same total number of decimal places!",
        rule: "Pretend the dots aren't there and multiply like normal. Then put the dot back so the answer has the same number of decimal places as the question!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 330, text: "1. Ignore dots: 3 × 7 = 21", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 380, text: "2. Count decimal places: 1 + 1 = 2", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 430, text: "3. Put dot back: 0.21", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's multiply 0.6 by 0.4.",
        rule: "0.6 × 0.4.",
        quizQ: "0.6 × 0.4.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "0.6 × 0.4", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 350, y: 250, text: "0.6", color: BLUE, size: 40 },
          { type: "text", x: 450, y: 250, text: "0.4", color: BLUE, size: 40 },
          { type: "text", x: 400, y: 250, text: "×", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "6 times 4 is 24. We need 2 decimal places in the answer. So it's 0.24.",
        rule: "0.24. (6×4=24, and we need 2 decimal places).",
        quizQ: "",
        quizA: "0.24. (6×4=24, and we need 2 decimal places).",
        elements: [
          { type: "path", d: "M 350 280 L 350 320", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 350, y: 340, text: "1 d.p.", color: ORANGE, size: 16 },
          
          { type: "path", d: "M 450 280 L 450 320", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 450, y: 340, text: "1 d.p.", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 420, text: "6 × 4 = 24", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 480, text: "= 0.24", color: GREEN, size: 48, bold: true },
          { type: "text", x: 400, y: 530, text: "(2 decimal places total)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do we divide decimals? 1.2 divided by 0.3.",
        rule: "1.2 ÷ 0.3.",
        quizQ: "1.2 ÷ 0.3.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Dividing", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "1.2 ÷ 0.3", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "1.2", color: BLUE, size: 40 },
          { type: "path", d: "M 370 270 L 430 270", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 310, text: "0.3", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Multiply both by 10 to make them whole numbers! 12 divided by 3 is 4.",
        rule: "4. (Multiply both by 10 to make it 12 ÷ 3).",
        quizQ: "",
        quizA: "4. (Multiply both by 10 to make it 12 ÷ 3).",
        elements: [
          { type: "path", d: "M 450 240 C 480 240, 500 250, 500 270 C 500 290, 480 300, 450 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 530, y: 275, text: "× 10", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 400, text: "12", color: BLUE, size: 40 },
          { type: "path", d: "M 370 420 L 430 420", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 460, text: "3", color: BLUE, size: 40 },
          
          { type: "text", x: 550, y: 430, text: "= 4", color: GREEN, size: 48, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_3.3: Compound percentages
// ------------------------------------------------------------------
data["m8_3.3"] = {
  title: "3.3 Compound percentages",
  watermark: "Section 3.3: Compound Percentages",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a compound percentage?",
        rule: "What is a 'compound' percentage?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Compound Percentages", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'compound' percentage?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 200, y: 200, width: 100, height: 100, fill: "#e2e8f0", rx: 10 },
          { type: "text", x: 250, y: 255, text: "£100", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 320 250 L 480 250", stroke: BLUE, width: 3, fill: "none" },
          { type: "path", d: "M 470 240 L 480 250 L 470 260", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 230, text: "+ 10%", color: BLUE, size: 20 },
          
          { type: "rect", x: 500, y: 200, width: 100, height: 100, fill: "#cbd5e1", rx: 10 },
          { type: "text", x: 550, y: 255, text: "£110", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "It's when a percentage changes an amount that has ALREADY changed! We use a 'multiplier' to do it fast.",
        rule: "It's when a percentage changes an amount that has ALREADY changed! We use a 'multiplier' to do it fast: +8% is ×1.08, and −15% is ×0.85.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 550 320 L 550 380 L 400 380 L 400 420", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 390 410 L 400 420 L 410 410", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 550, y: 350, text: "Another +10%", color: ORANGE, size: 20 },
          
          { type: "rect", x: 350, y: 440, width: 100, height: 100, fill: "#94a3b8", rx: 10 },
          { type: "text", x: 400, y: 495, text: "£121", color: GREEN, size: 24, bold: true },
          
          { type: "text", x: 400, y: 570, text: "Use a multiplier! +10% is × 1.10", color: RED, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's increase £200 by 10%, and then another 10%.",
        rule: "£200 increased by 10% then another 10%.",
        quizQ: "£200 increased by 10% then another 10%.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multipliers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "£200 increased by 10% then another 10%.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "£200", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Multiply by 1.1 twice! 200 times 1.1 is 220. 220 times 1.1 is 242. It's not 240!",
        rule: "200 × 1.1 × 1.1 = £242. (It's not £240!).",
        quizQ: "",
        quizA: "200 × 1.1 × 1.1 = £242. (It's not £240!).",
        elements: [
          { type: "text", x: 400, y: 320, text: "× 1.1 × 1.1", color: ORANGE, size: 32 },
          
          { type: "text", x: 400, y: 400, text: "= £242", color: GREEN, size: 48, bold: true },
          
          { type: "text", x: 400, y: 480, text: "(It's not £240! The second 10% is bigger)", color: RED, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "A value falls 20% then rises 20%. Is it back to the start?",
        rule: "A value falls 20% then rises 20%. Is it back to the start?",
        quizQ: "A value falls 20% then rises 20%. Is it back to the start?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: The Percentage Trap", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A value falls 20% then rises 20%. Is it back to the start?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "Start: 100%", color: BLUE, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "No! Falling 20% is multiplying by 0.8. Rising 20% is multiplying by 1.2. 0.8 times 1.2 is 0.96. It's 4% smaller!",
        rule: "No! ×0.8 × 1.2 = ×0.96, so it is actually 4% smaller than when it started.",
        quizQ: "",
        quizA: "No! ×0.8 × 1.2 = ×0.96, so it is actually 4% smaller than when it started.",
        elements: [
          { type: "text", x: 400, y: 320, text: "Multiplier: 0.8 × 1.2 = 0.96", color: ORANGE, size: 28 },
          
          { type: "text", x: 400, y: 400, text: "NO!", color: RED, size: 48, bold: true },
          { type: "text", x: 400, y: 460, text: "It is now 96% of the original.", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 500, text: "(It is 4% smaller!)", color: GREEN, size: 24, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_3.4: Upper and lower bounds
// ------------------------------------------------------------------
data["m8_3.4"] = {
  title: "3.4 Upper and lower bounds",
  watermark: "Section 3.4: Bounds",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are upper and lower bounds?",
        rule: "What are upper and lower bounds?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Bounds", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are upper and lower bounds?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "Rounded to 1 d.p:  3.6", color: BLUE, size: 32 },
          
          // Number line
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 400 340 L 400 360", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 380, text: "3.6", color: TEXT_MAIN, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "If a measurement is rounded, the true value lies in a range. 3.6 means it could be anywhere from 3.55 up to, but not including, 3.65.",
        rule: "If a measurement is rounded, the true value lies in a range. To 1 d.p., 3.6 means 3.55 ≤ x < 3.65.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 300 340 L 300 360", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 300, y: 380, text: "3.55", color: RED, size: 20 },
          { type: "text", x: 300, y: 310, text: "Lower Bound", color: RED, size: 16 },
          
          { type: "path", d: "M 500 340 L 500 360", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 500, y: 380, text: "3.65", color: RED, size: 20 },
          { type: "text", x: 500, y: 310, text: "Upper Bound", color: RED, size: 16 },
          
          { type: "rect", x: 300, y: 345, width: 200, height: 10, fill: GREEN, opacity: 0.5 },
          
          { type: "text", x: 400, y: 460, text: "3.55 ≤ x < 3.65", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "A length is 12 cm to the nearest centimetre. What are its bounds?",
        rule: "A length is 12 cm to the nearest centimetre. Bounds?",
        quizQ: "A length is 12 cm to the nearest centimetre. Bounds?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding Bounds", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A length is 12 cm to the nearest cm. Bounds?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "12 cm", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "The nearest cm means it could be half a cm smaller or half a cm bigger. So 11.5 cm to 12.5 cm.",
        rule: "11.5 cm ≤ length < 12.5 cm.",
        quizQ: "",
        quizA: "11.5 cm ≤ length < 12.5 cm.",
        elements: [
          { type: "path", d: "M 350 280 L 300 320", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 280, y: 350, text: "- 0.5", color: ORANGE, size: 20 },
          { type: "text", x: 280, y: 400, text: "11.5", color: RED, size: 32 },
          
          { type: "path", d: "M 450 280 L 500 320", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 520, y: 350, text: "+ 0.5", color: ORANGE, size: 20 },
          { type: "text", x: 520, y: 400, text: "12.5", color: RED, size: 32 },
          
          { type: "text", x: 400, y: 480, text: "11.5 ≤ length < 12.5", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why do bounds matter when you divide two measurements?",
        rule: "Why do bounds matter when you divide two measurements?",
        quizQ: "Why do bounds matter when you divide two measurements?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Bounds in Calculations", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why do bounds matter when you divide?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "Distance", color: BLUE, size: 32 },
          { type: "path", d: "M 320 270 L 480 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 310, text: "Time", color: BLUE, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "Because errors can grow! For a maximum answer, use the largest top number with the smallest bottom number.",
        rule: "Errors can grow. For a maximum quotient use the largest numerator with the smallest denominator.",
        quizQ: "",
        quizA: "Errors can grow. For a maximum quotient use the largest numerator with the smallest denominator.",
        elements: [
          { type: "text", x: 400, y: 400, text: "To get the MAXIMUM answer:", color: ORANGE, size: 24, bold: true },
          
          { type: "text", x: 400, y: 460, text: "Upper Bound of Distance", color: RED, size: 28 },
          { type: "path", d: "M 250 480 L 550 480", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 520, text: "Lower Bound of Time", color: GREEN, size: 28 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 3!");
