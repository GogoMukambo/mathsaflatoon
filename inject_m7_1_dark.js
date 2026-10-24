const fs = require('fs');

let content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
let jsonStr = content.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '').replace(/;\s*$/, '');
let data = eval('(' + jsonStr + ')');

const BG_COLOR = "#0f172a";
const BOX_BG = "#1e293b";
const BOX_BORDER = "#334155";
const TEXT_MAIN = "#f8fafc";
const TEXT_SUB = "#94a3b8";
const GREEN = "#10b981";
const BLUE = "#3b82f6";
const RED = "#f43f5e";
const ORANGE = "#f59e0b";

// Helper to create a dark background for every scene
const getBg = () => [
  { type: "rect", x: 0, y: 0, width: 800, height: 600, fill: BG_COLOR }
];

// ------------------------------------------------------------------
// m7_1.1: Factors, multiples and primes
// ------------------------------------------------------------------
data["m7_1.1"] = {
  title: "1.1 Factors, multiples and primes",
  watermark: "Section 1.1: Primes & Factor Trees",
  subtopics: [
    { id: "factor_tree", label: "Factor Trees" },
    { id: "hcf_lcm", label: "HCF and LCM" }
  ],
  scenes: {
    "factor_tree": [
      {
        narration: "Every integer is built out of prime numbers. Let's break down 120 using a factor tree!",
        rule: "Primes: Only divisible by 1 & itself (2, 3, 5, 7...). Remember: The number 1 is NOT a prime!",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "rect", x: 70, y: 70, width: 250, height: 40, fill: "#064e3b", rx: 5 },
          { type: "text", x: 195, y: 90, text: "1. PRIMES & FACTOR TREES", color: GREEN, size: 18 },
          { type: "text", x: 400, y: 150, text: "120", color: TEXT_MAIN, size: 24 },
          { type: "circle", cx: 400, cy: 150, r: 25, stroke: GREEN, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "120 can be split into 12 × 10.",
        rule: "Find any two numbers that multiply to make the top number.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 380 170 L 320 210", stroke: "#475569", width: 2, fill: "none" },
          { type: "path", d: "M 420 170 L 480 210", stroke: "#475569", width: 2, fill: "none" },
          { type: "text", x: 300, y: 230, text: "12", color: TEXT_MAIN, size: 20 },
          { type: "circle", cx: 300, cy: 230, r: 20, stroke: "#64748b", width: 2, fill: "none" },
          { type: "text", x: 500, y: 230, text: "10", color: TEXT_MAIN, size: 20 },
          { type: "circle", cx: 500, cy: 230, r: 20, stroke: "#64748b", width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Now let's break down 12 and 10. 12 is 3 × 4. 10 is 2 × 5.",
        rule: "Circle the prime numbers in green when you find them!",
        quizQ: "",
        quizA: "",
        elements: [
          // 12 -> 3 & 4
          { type: "path", d: "M 285 245 L 240 290", stroke: "#475569", width: 2, fill: "none" },
          { type: "path", d: "M 315 245 L 360 290", stroke: "#475569", width: 2, fill: "none" },
          { type: "circle", cx: 220, cy: 310, r: 20, fill: GREEN },
          { type: "text", x: 220, y: 310, text: "3", color: BG_COLOR, size: 20 },
          { type: "text", x: 380, y: 310, text: "4", color: TEXT_MAIN, size: 20 },
          { type: "circle", cx: 380, cy: 310, r: 20, stroke: "#64748b", width: 2, fill: "none" },
          
          // 10 -> 2 & 5
          { type: "path", d: "M 485 245 L 440 290", stroke: "#475569", width: 2, fill: "none" },
          { type: "path", d: "M 515 245 L 560 290", stroke: "#475569", width: 2, fill: "none" },
          { type: "circle", cx: 420, cy: 310, r: 20, fill: GREEN },
          { type: "text", x: 420, y: 310, text: "2", color: BG_COLOR, size: 20 },
          { type: "circle", cx: 580, cy: 310, r: 20, fill: GREEN },
          { type: "text", x: 580, y: 310, text: "5", color: BG_COLOR, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Finally, 4 breaks down into 2 × 2. Both are prime!",
        rule: "When all branches end in a solid green circle, you are done!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 370 330 L 340 370", stroke: "#475569", width: 2, fill: "none" },
          { type: "path", d: "M 390 330 L 420 370", stroke: "#475569", width: 2, fill: "none" },
          { type: "circle", cx: 320, cy: 390, r: 20, fill: GREEN },
          { type: "text", x: 320, y: 390, text: "2", color: BG_COLOR, size: 20 },
          { type: "circle", cx: 440, cy: 390, r: 20, fill: GREEN },
          { type: "text", x: 440, y: 390, text: "2", color: BG_COLOR, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Now we write out all the green circled numbers multiplied together.",
        rule: "Use index notation (powers) to make it neat!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 480, text: "120 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5", color: GREEN, size: 24 }
        ]
      }
    ],
    "hcf_lcm": [
      {
        narration: "How do we find the Highest Common Factor (HCF) of 120 and 75?",
        rule: "Find the prime numbers they BOTH share.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "HCF and LCM", color: ORANGE, size: 32 },
          { type: "text", x: 250, y: 200, text: "120 = 2³ × 3 × 5", color: TEXT_MAIN, size: 28 },
          { type: "text", x: 550, y: 200, text: "75 = 3 × 5²", color: TEXT_MAIN, size: 28 }
        ]
      },
      {
        clear: false,
        narration: "They both share a 3 and a 5. Multiply them for the HCF!",
        rule: "HCF uses the lowest power of shared primes.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "circle", cx: 315, cy: 190, r: 20, stroke: ORANGE, width: 3, fill: "none" },
          { type: "circle", cx: 365, cy: 190, r: 20, stroke: ORANGE, width: 3, fill: "none" },
          { type: "circle", cx: 505, cy: 190, r: 20, stroke: ORANGE, width: 3, fill: "none" },
          { type: "circle", cx: 555, cy: 190, r: 20, stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 300, text: "HCF = 3 × 5 = 15", color: ORANGE, size: 36 }
        ]
      },
      {
        clear: false,
        narration: "For the Lowest Common Multiple (LCM), we take the HIGHEST power of EVERY prime.",
        rule: "LCM uses the highest power of every prime.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 255 215 L 255 400 L 300 400", stroke: GREEN, width: 2, fill: "none" },
          { type: "path", d: "M 315 215 L 315 380 L 350 380", stroke: GREEN, width: 2, fill: "none" },
          { type: "path", d: "M 555 215 L 555 400 L 500 400", stroke: GREEN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 410, text: "LCM = 2³ × 3 × 5² = 600", color: GREEN, size: 36 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_1.2: Multiplying and dividing integers
// ------------------------------------------------------------------
data["m7_1.2"] = {
  title: "1.2 Multiplying and dividing integers",
  watermark: "Section 1.2: Integer Math Rules",
  subtopics: [
    { id: "signs", label: "The Sign Rules" },
    { id: "bidmas", label: "Order of Operations" }
  ],
  scenes: {
    "signs": [
      {
        narration: "What happens when you multiply or divide negative numbers?",
        rule: "If the signs are the SAME, the answer is POSITIVE.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "rect", x: 70, y: 70, width: 250, height: 40, fill: "#4c1d95", rx: 5 },
          { type: "text", x: 195, y: 90, text: "2. INTEGER MATH RULES", color: "#c084fc", size: 18 },
          
          // Same signs box
          { type: "rect", x: 100, y: 150, width: 280, height: 100, fill: "none", stroke: BLUE, strokeWidth: 2, rx: 10 },
          { type: "circle", cx: 360, cy: 150, r: 15, fill: BLUE },
          { type: "text", x: 360, y: 150, text: "+", color: "#ffffff", size: 20 },
          { type: "text", x: 240, y: 190, text: "SAME SIGNS", color: BLUE, size: 22 },
          { type: "text", x: 240, y: 220, text: "Make a POSITIVE (+)", color: TEXT_MAIN, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "But if the signs are DIFFERENT, the answer is NEGATIVE!",
        rule: "Different signs = Negative.",
        quizQ: "",
        quizA: "",
        elements: [
          // Different signs box
          { type: "rect", x: 420, y: 150, width: 280, height: 100, fill: "none", stroke: RED, strokeWidth: 2, rx: 10 },
          { type: "circle", cx: 680, cy: 150, r: 15, fill: RED },
          { type: "text", x: 680, y: 150, text: "-", color: "#ffffff", size: 20 },
          { type: "text", x: 560, y: 190, text: "DIFFERENT SIGNS", color: RED, size: 22 },
          { type: "text", x: 560, y: 220, text: "Make a NEGATIVE (-)", color: TEXT_MAIN, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Let's look at a complex example: (-3 + 15) ÷ -4",
        rule: "Follow BIDMAS: Brackets first!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "rect", x: 100, y: 280, width: 600, height: 200, fill: "none", stroke: BOX_BORDER, strokeWidth: 2, rx: 10, dash: "5,5" },
          { type: "text", x: 150, y: 310, text: "EXAMPLE:", color: TEXT_SUB, size: 16 },
          { type: "text", x: 220, y: 350, text: "( -3 + 15 ) ÷ -4", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "First, do the Brackets: -3 + 15 = 12.",
        rule: "Always solve inside the brackets first.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 150 370 L 150 400 L 180 400", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 320, y: 400, text: "1. Brackets First! (-3 + 15 = 12)", color: RED, size: 16 },
          { type: "text", x: 180, y: 450, text: "= 12 ÷ -4", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "A positive divided by a negative is a negative! So the answer is -3.",
        rule: "Different signs make a negative.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 150 470 L 150 500 L 180 500", stroke: BLUE, width: 2, fill: "none" },
          { type: "text", x: 320, y: 500, text: "2. Diff signs make negative! Result: -3", color: BLUE, size: 16 }
        ]
      }
    ],
    "bidmas": [
      {
        narration: "When doing math with lots of steps, we follow BIDMAS!",
        rule: "Brackets, Indices, Division/Multiplication, Addition/Subtraction.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Order of Operations (BIDMAS)", color: ORANGE, size: 32 },
          { type: "text", x: 400, y: 200, text: "B - Brackets", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 250, text: "I - Indices (Powers & Roots)", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 300, text: "D - Division", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 350, text: "M - Multiplication", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 400, text: "A - Addition", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 450, text: "S - Subtraction", color: TEXT_MAIN, size: 24 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_1.3: Square roots and cube roots
// ------------------------------------------------------------------
data["m7_1.3"] = {
  title: "1.3 Square roots and cube roots",
  watermark: "Section 1.3: Roots",
  subtopics: [
    { id: "square_roots", label: "Square Roots" },
    { id: "cube_roots", label: "Cube Roots" }
  ],
  scenes: {
    "square_roots": [
      {
        narration: "A square root asks: what number multiplied by itself gives this?",
        rule: "Roots give you the original integer building blocks!",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "rect", x: 70, y: 70, width: 250, height: 40, fill: "#3b0764", rx: 5 },
          { type: "text", x: 195, y: 90, text: "3. SQUARE & CUBE ROOTS", color: "#d8b4fe", size: 18 },
          { type: "text", x: 400, y: 150, text: "Roots give you the original integer building blocks!", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 250, text: "√64 = ?", color: TEXT_MAIN, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "8 × 8 = 64, so the square root is 8!",
        rule: "Positive roots are easy.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 350, text: "8", color: GREEN, size: 48 },
          { type: "text", x: 400, y: 410, text: "Because 8 × 8 = 64", color: TEXT_SUB, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "But wait! -8 × -8 ALSO equals 64. So a positive number actually has TWO square roots: 8 and -8.",
        rule: "A negative times a negative is positive.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 470, text: "OR -8", color: ORANGE, size: 48 },
          { type: "text", x: 400, y: 530, text: "Because -8 × -8 = 64", color: TEXT_SUB, size: 24 }
        ]
      }
    ],
    "cube_roots": [
      {
        narration: "A cube root asks: what number multiplied by itself THREE times gives this?",
        rule: "Every number has exactly one cube root.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Cube Roots", color: ORANGE, size: 40 },
          { type: "text", x: 250, y: 250, text: "∛125 = 5", color: GREEN, size: 40 },
          { type: "text", x: 250, y: 320, text: "(5 × 5 × 5 = 125)", color: TEXT_SUB, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Unlike square roots, you CAN find the cube root of a negative number!",
        rule: "A negative times negative times negative is negative.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 550, y: 250, text: "∛-125 = -5", color: RED, size: 40 },
          { type: "text", x: 550, y: 320, text: "(-5 × -5 × -5 = -125)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_1.4: Indices
// ------------------------------------------------------------------
data["m7_1.4"] = {
  title: "1.4 Indices",
  watermark: "Section 1.4: Index Laws",
  subtopics: [
    { id: "multiplying", label: "Multiplying Powers" },
    { id: "dividing", label: "Dividing Powers" }
  ],
  scenes: {
    "multiplying": [
      {
        narration: "When you multiply terms with the same base, you ADD the powers!",
        rule: "MULTIPLYING -> ADD THE POWERS",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "rect", x: 70, y: 70, width: 250, height: 40, fill: "#0c4a6e", rx: 5 },
          { type: "text", x: 195, y: 90, text: "4. LAWS OF INDICES", color: "#38bdf8", size: 18 },
          { type: "rect", x: 150, y: 150, width: 500, height: 60, fill: "none", stroke: BLUE, strokeWidth: 2, rx: 5 },
          { type: "text", x: 400, y: 180, text: "MULTIPLYING → ADD THE POWERS", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 280, text: "6³ × 6⁴", color: TEXT_MAIN, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "Just add 3 and 4 together.",
        rule: "Add the indices.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 400, text: "= 6³⁺⁴", color: BLUE, size: 50 },
          { type: "path", d: "M 390 310 L 410 360", stroke: BLUE, width: 2, dash: "4,4" }
        ]
      },
      {
        clear: false,
        narration: "So the answer is 6 to the power of 7.",
        rule: "3 + 4 = 7",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 500, text: "= 6⁷", color: GREEN, size: 60 }
        ]
      }
    ],
    "dividing": [
      {
        narration: "When you divide terms with the same base, you SUBTRACT the powers!",
        rule: "DIVIDING -> SUBTRACT THE POWERS",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "rect", x: 150, y: 100, width: 500, height: 60, fill: "none", stroke: ORANGE, strokeWidth: 2, rx: 5 },
          { type: "text", x: 400, y: 130, text: "DIVIDING → SUBTRACT THE POWERS", color: ORANGE, size: 20 },
          { type: "text", x: 400, y: 250, text: "12⁸ ÷ 12³", color: TEXT_MAIN, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "Just subtract 3 from 8.",
        rule: "Subtract the indices.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 380, text: "= 12⁸⁻³", color: ORANGE, size: 50 }
        ]
      },
      {
        clear: false,
        narration: "So the answer is 12 to the power of 5.",
        rule: "8 - 3 = 5",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 480, text: "= 12⁵", color: GREEN, size: 60 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected dark theme screenshot-style scenes for Year 7 Chapter 1!");
