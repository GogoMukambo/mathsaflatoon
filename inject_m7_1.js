const fs = require('fs');

let content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');

// We will parse the JSON, update the m7_1 keys, and write it back.
// Since the file is just `window.INTERACTIVE_WHITEBOARD_DATA = { ... };`
let jsonStr = content.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '');
jsonStr = jsonStr.replace(/;\s*$/, '');

let data = eval('(' + jsonStr + ')');

// ------------------------------------------------------------------
// m7_1.1: Factors, multiples and primes
// ------------------------------------------------------------------
data["m7_1.1"] = {
  title: "1.1 Factors, multiples and primes",
  watermark: "Section 1.1: Prime Decomposition",
  subtopics: [
    { id: "factor_tree", label: "Prime Building Blocks" },
    { id: "hcf_lcm", label: "HCF and LCM" }
  ],
  scenes: {
    "factor_tree": [
      {
        narration: "Every number is built out of prime numbers. Let's break down 120 using a factor tree!",
        rule: "A prime number is divisible only by 1 and itself (2, 3, 5, 7, 11...). 1 is not prime!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 100, text: "120", color: "#3b82f6", size: 40 }
        ]
      },
      {
        clear: false,
        narration: "120 is even, so we can divide it by 2. 2 is a prime number, so we circle it!",
        rule: "Circle the prime numbers as you find them.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 230 120 L 170 170", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 170 170 L 185 165 M 170 170 L 175 155", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 270 120 L 330 170", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 330 170 L 315 165 M 330 170 L 325 155", stroke: "#3b82f6", width: 3, fill: "none" },
          
          { type: "text", x: 150, y: 215, text: "2", color: "#22c55e", size: 36 },
          { type: "circle", cx: 150, cy: 200, r: 25, stroke: "#22c55e", width: 4, fill: "none" },
          { type: "text", x: 70, y: 250, text: "PRIME!", color: "#22c55e", size: 20 },
          
          { type: "text", x: 350, y: 215, text: "60", color: "#3b82f6", size: 36 },
          { type: "circle", cx: 350, cy: 200, r: 30, stroke: "#3b82f6", width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Now let's break down 60. It divides into 2 and 30.",
        rule: "Keep branching out from the composite (non-prime) numbers.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 330 230 L 270 280", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 270 280 L 285 275 M 270 280 L 275 265", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 370 230 L 430 280", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 430 280 L 415 275 M 430 280 L 425 265", stroke: "#3b82f6", width: 3, fill: "none" },
          
          { type: "text", x: 250, y: 315, text: "2", color: "#22c55e", size: 36 },
          { type: "circle", cx: 250, cy: 300, r: 25, stroke: "#22c55e", width: 4, fill: "none" },
          { type: "text", x: 170, y: 350, text: "PRIME!", color: "#22c55e", size: 20 },
          
          { type: "text", x: 450, y: 315, text: "30", color: "#3b82f6", size: 36 },
          { type: "circle", cx: 450, cy: 300, r: 30, stroke: "#3b82f6", width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "30 breaks down into 2 and 15.",
        rule: "Circle the 2 again!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 430 330 L 370 380", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 370 380 L 385 375 M 370 380 L 375 365", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 470 330 L 530 380", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 530 380 L 515 375 M 530 380 L 525 365", stroke: "#3b82f6", width: 3, fill: "none" },
          
          { type: "text", x: 350, y: 415, text: "2", color: "#22c55e", size: 36 },
          { type: "circle", cx: 350, cy: 400, r: 25, stroke: "#22c55e", width: 4, fill: "none" },
          { type: "text", x: 270, y: 450, text: "PRIME!", color: "#22c55e", size: 20 },
          
          { type: "text", x: 550, y: 415, text: "15", color: "#3b82f6", size: 36 },
          { type: "circle", cx: 550, cy: 400, r: 30, stroke: "#3b82f6", width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Finally, 15 breaks down into 3 and 5. Both are prime!",
        rule: "When all branches end in a circled prime, you are done!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 530 430 L 470 480", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 470 480 L 485 475 M 470 480 L 475 465", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 570 430 L 630 480", stroke: "#3b82f6", width: 3, fill: "none" },
          { type: "path", d: "M 630 480 L 615 475 M 630 480 L 625 465", stroke: "#3b82f6", width: 3, fill: "none" },
          
          { type: "text", x: 450, y: 515, text: "3", color: "#22c55e", size: 36 },
          { type: "circle", cx: 450, cy: 500, r: 25, stroke: "#22c55e", width: 4, fill: "none" },
          { type: "text", x: 370, y: 550, text: "PRIME!", color: "#22c55e", size: 20 },
          
          { type: "text", x: 650, y: 515, text: "5", color: "#22c55e", size: 36 },
          { type: "circle", cx: 650, cy: 500, r: 25, stroke: "#22c55e", width: 4, fill: "none" },
          { type: "text", x: 730, y: 550, text: "PRIME!", color: "#22c55e", size: 20 },
          
          { type: "text", x: 650, y: 250, text: "A special number divisible only", color: "#f8fafc", size: 22 },
          { type: "text", x: 650, y: 280, text: "by 1 and itself (2, 3, 5, 7, 11...).", color: "#f8fafc", size: 22 },
          { type: "text", x: 650, y: 310, text: "1 is not prime!", color: "#f8fafc", size: 22 }
        ]
      },
      {
        clear: false,
        narration: "Now we write out all the circled numbers multiplied together.",
        rule: "Use index notation (powers) to make it neat!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 450, y: 620, text: "120 = 2³ × 3 × 5", color: "#f8fafc", size: 40 }
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
          { type: "text", x: 400, y: 100, text: "HCF and LCM", color: "#3b82f6", size: 40 },
          { type: "text", x: 250, y: 200, text: "120 = 2³ × 3 × 5", color: "#f8fafc", size: 30 },
          { type: "text", x: 550, y: 200, text: "75 = 3 × 5²", color: "#f8fafc", size: 30 }
        ]
      },
      {
        clear: false,
        narration: "They both share a 3 and a 5. Multiply them for the HCF!",
        rule: "HCF uses the lowest power of shared primes.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "circle", cx: 315, cy: 190, r: 20, stroke: "#eab308", width: 3, fill: "none" },
          { type: "circle", cx: 365, cy: 190, r: 20, stroke: "#eab308", width: 3, fill: "none" },
          { type: "circle", cx: 505, cy: 190, r: 20, stroke: "#eab308", width: 3, fill: "none" },
          { type: "circle", cx: 555, cy: 190, r: 20, stroke: "#eab308", width: 3, fill: "none" },
          { type: "text", x: 400, y: 300, text: "HCF = 3 × 5 = 15", color: "#eab308", size: 36 }
        ]
      },
      {
        clear: false,
        narration: "For the Lowest Common Multiple (LCM), we take the HIGHEST power of EVERY prime.",
        rule: "LCM uses the highest power of every prime.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 255 215 L 255 400 L 300 400", stroke: "#22c55e", width: 2, fill: "none" },
          { type: "path", d: "M 315 215 L 315 380 L 350 380", stroke: "#22c55e", width: 2, fill: "none" },
          { type: "path", d: "M 555 215 L 555 400 L 500 400", stroke: "#22c55e", width: 2, fill: "none" },
          { type: "text", x: 400, y: 410, text: "LCM = 2³ × 3 × 5² = 600", color: "#22c55e", size: 36 }
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
  watermark: "Section 1.2: Negative Numbers",
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
          { type: "text", x: 400, y: 100, text: "Multiplying & Dividing Signs", color: "#3b82f6", size: 40 },
          { type: "text", x: 250, y: 250, text: "(+) × (+) = (+)", color: "#22c55e", size: 36 },
          { type: "text", x: 250, y: 350, text: "(-) × (-) = (+)", color: "#22c55e", size: 36 }
        ]
      },
      {
        clear: false,
        narration: "But if the signs are DIFFERENT, the answer is NEGATIVE!",
        rule: "Different signs = Negative.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 550, y: 250, text: "(+) × (-) = (-)", color: "#ef4444", size: 36 },
          { type: "text", x: 550, y: 350, text: "(-) × (+) = (-)", color: "#ef4444", size: 36 }
        ]
      },
      {
        clear: false,
        narration: "Let's try one: -3 × 5",
        rule: "A negative times a positive is negative.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 480, text: "-3 × 5 = -15", color: "#f8fafc", size: 40 }
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
          { type: "text", x: 400, y: 100, text: "Order of Operations", color: "#3b82f6", size: 40 },
          { type: "text", x: 400, y: 200, text: "Work out: (-3 + 15) ÷ -4", color: "#f8fafc", size: 36 }
        ]
      },
      {
        clear: false,
        narration: "First, do the Brackets: -3 + 15 = 12.",
        rule: "Always solve inside the brackets first.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 270 220 L 270 250 L 370 250 L 370 220", stroke: "#eab308", width: 2, fill: "none" },
          { type: "text", x: 320, y: 280, text: "12", color: "#eab308", size: 36 }
        ]
      },
      {
        clear: false,
        narration: "Then bring down the rest: 12 ÷ -4.",
        rule: "Now do the division.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 280, text: "÷ -4", color: "#f8fafc", size: 36 }
        ]
      },
      {
        clear: false,
        narration: "A positive divided by a negative is a negative! So the answer is -3.",
        rule: "Different signs make a negative.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 380, text: "= -3", color: "#22c55e", size: 48 }
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
        rule: "The √ symbol means the positive square root.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 100, text: "Square Roots", color: "#3b82f6", size: 40 },
          { type: "text", x: 400, y: 220, text: "√64 = ?", color: "#f8fafc", size: 48 }
        ]
      },
      {
        clear: false,
        narration: "8 × 8 = 64, so the square root is 8!",
        rule: "Positive roots are easy.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 320, text: "8", color: "#22c55e", size: 48 },
          { type: "text", x: 400, y: 380, text: "Because 8 × 8 = 64", color: "#94a3b8", size: 24 }
        ]
      },
      {
        clear: false,
        narration: "But wait! -8 × -8 ALSO equals 64. So a positive number actually has TWO square roots: 8 and -8.",
        rule: "A negative times a negative is positive.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 460, text: "OR -8", color: "#eab308", size: 48 },
          { type: "text", x: 400, y: 520, text: "Because -8 × -8 = 64", color: "#94a3b8", size: 24 }
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
          { type: "text", x: 400, y: 100, text: "Cube Roots", color: "#3b82f6", size: 40 },
          { type: "text", x: 250, y: 250, text: "∛125 = 5", color: "#22c55e", size: 40 },
          { type: "text", x: 250, y: 320, text: "(5 × 5 × 5 = 125)", color: "#94a3b8", size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Unlike square roots, you CAN find the cube root of a negative number!",
        rule: "A negative times negative times negative is negative.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 550, y: 250, text: "∛-125 = -5", color: "#ef4444", size: 40 },
          { type: "text", x: 550, y: 320, text: "(-5 × -5 × -5 = -125)", color: "#94a3b8", size: 20 }
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
        rule: "aᵐ × aⁿ = aᵐ⁺ⁿ",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 150, text: "6³ × 6⁴", color: "#f8fafc", size: 60 }
        ]
      },
      {
        clear: false,
        narration: "Just add 3 and 4 together.",
        rule: "Add the indices.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 300, text: "= 6³⁺⁴", color: "#3b82f6", size: 50 },
          { type: "path", d: "M 390 170 L 410 250", stroke: "#3b82f6", width: 2, dash: "4,4" }
        ]
      },
      {
        clear: false,
        narration: "So the answer is 6 to the power of 7.",
        rule: "3 + 4 = 7",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "= 6⁷", color: "#22c55e", size: 60 }
        ]
      }
    ],
    "dividing": [
      {
        narration: "When you divide terms with the same base, you SUBTRACT the powers!",
        rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 150, text: "12⁸ ÷ 12³", color: "#f8fafc", size: 60 }
        ]
      },
      {
        clear: false,
        narration: "Just subtract 3 from 8.",
        rule: "Subtract the indices.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 300, text: "= 12⁸⁻³", color: "#eab308", size: 50 }
        ]
      },
      {
        clear: false,
        narration: "So the answer is 12 to the power of 5.",
        rule: "8 - 3 = 5",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "= 12⁵", color: "#22c55e", size: 60 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected custom visual scenes for Year 7 Chapter 1!");
