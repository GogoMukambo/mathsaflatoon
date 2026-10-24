// Year 7 Mathematics Chapter 1 — 1.1 Factors, multiples and primes
// Year 7 Science 8.1 style: Key idea / Recall / Check only
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};

(function () {
  Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, {
    "m7_1.1": {
      title: "1.1 Factors, multiples and primes",
      watermark: "Section 1.1: Prime factors",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Recall" },
        { id: "card_2", label: "Check" }
      ],
      scenes: {
        card_0: [
          {
            clear: true,
            narration: "Primes are the building blocks of whole numbers. A prime only divides by 1 and itself — like 47. Every whole number bigger than 1 is either prime, or built by multiplying primes: 46 = 2 × 23, 48 = 2 × 2 × 2 × 2 × 3, 49 = 7 × 7, 50 = 2 × 5 × 5. And 1? Not a prime — too lonely to count!",
            rule: "Bigger than 1: prime, or built from primes. 1 is not prime.",
            quizQ: "Is 47 prime? How do you write 50 using primes?",
            quizA: "Yes — 47 is prime. 50 = 2 × 5 × 5.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_1_primes_labelled.jpg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "46 = 2 × 23   ·   47 prime   ·   48 = 2⁴ × 3   ·   49 = 7 × 7   ·   50 = 2 × 5²", color: "#c2410c", size: 14, weight: "bold" }
            ]
          }
        ],
        card_1: [
          {
            clear: true,
            narration: "Crack 120 with a factor tree! Split it into 12 × 10. Keep going: 12 = 3 × 4 and 10 = 2 × 5. Circle every prime you spot. 4 still splits into 2 × 2. When the ends are all primes, stop. 120 = 2 × 2 × 2 × 3 × 5, or 2³ × 3 × 5. The little 3 is an index — it just means three 2s. Check: 75 = 3 × 5². Never put 1 on a branch.",
            rule: "Split, circle the primes, multiply the ends.",
            quizQ: "Crack 120 into primes.",
            quizA: "120 = 2 × 2 × 2 × 3 × 5, or 2³ × 3 × 5.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_1_factor_tree_labelled.jpg", x: 90, y: 12, width: 620, height: 348 },
              { type: "rect", x: 50, y: 368, width: 700, height: 46, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 396, text: "120 = 12 × 10 → 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5", color: "#1d4ed8", size: 14, weight: "bold" }
            ]
          }
        ],
        card_2: [
          {
            clear: true,
            narration: "Line up the prime ingredients of 120 and 75. 120 = 2³ × 3 × 5 and 75 = 3 × 5². LCM grabs the bigger pile of each prime: three 2s, one 3, two 5s → 2³ × 3 × 5² = 600. HCF grabs the smaller pile: no 2s, one 3, one 5 → 3 × 5 = 15. LCM is the first shared multiple. HCF is the biggest chunk they both share.",
            rule: "LCM = bigger pile. HCF = smaller pile.",
            quizQ: "What are the LCM and HCF of 120 and 75?",
            quizA: "LCM is 600. HCF is 15.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_1_hcf_lcm_labelled.jpg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "120 = 2³ × 3 × 5   ·   75 = 3 × 5²   ·   LCM 600   ·   HCF 15", color: "#065f46", size: 14, weight: "bold" }
            ]
          }
        ]
      }
    },
    "m7_1.2": {
      title: "1.2 Multiplying and dividing integers",
      watermark: "Section 1.2: Integer products",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Recall" },
        { id: "card_2", label: "Check" }
      ],
      scenes: {
        card_0: [
          {
            clear: true,
            narration: "Keep −3 and knock the other number down: −3 × 4 = −12, then −9, then −6. The answer jumps up by 3 each time. Slide past zero and — surprise — −3 × −2 = 6. Two minuses hug and turn into a plus! Same signs give a plus. Different signs give a minus.",
            rule: "Same signs → plus. Different signs → minus.",
            quizQ: "What is −3 × −2?",
            quizA: "6 — two minuses make a plus!",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_2_sign_pattern_labelled.svg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "−3 × −2 = 6   ·   two minuses hug → plus!", color: "#c2410c", size: 15, weight: "bold" }
            ]
          }
        ],
        card_1: [
          {
            clear: true,
            narration: "Brackets are the boss! Tidy them first, then × or ÷. (3 + 5) × −4 is 8 × −4 = −32. (−3 + 15) ÷ −4 is 12 ÷ −4 = −3 — mixed signs, so a minus. Two minuses? −4 × −3 = 12. Nice!",
            rule: "Brackets first. Then × or ÷.",
            quizQ: "Work out (−3 + 15) ÷ −4.",
            quizA: "12 ÷ −4 = −3. Mixed signs → minus.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_2_brackets_labelled.svg", x: 90, y: 12, width: 620, height: 348 },
              { type: "rect", x: 50, y: 368, width: 700, height: 46, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 396, text: "(−3 + 15) ÷ −4 = 12 ÷ −4 = −3", color: "#1d4ed8", size: 14, weight: "bold" }
            ]
          }
        ],
        card_2: [
          {
            clear: true,
            narration: "÷ is just × played backwards. −4 × 6 = −24 flips into −24 ÷ 6 = −4 or −24 ÷ −4 = 6. Try two minuses: −7 × −2 = 14, so 14 ÷ −2 = −7. Same sign rule — it never takes a day off!",
            rule: "÷ undoes ×. Same sign rule!",
            quizQ: "Write −7 × −2 = 14 as two divisions.",
            quizA: "14 ÷ −2 = −7 and 14 ÷ −7 = −2.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_2_division_inverse_labelled.svg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "−4 × 6 = −24   ·   −24 ÷ 6 = −4   ·   −24 ÷ −4 = 6", color: "#065f46", size: 14, weight: "bold" }
            ]
          }
        ]
      }
    },
    "m7_1.3": {
      title: "1.3 Square roots and cube roots",
      watermark: "Section 1.3: Roots",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Recall" },
        { id: "card_2", label: "Check" }
      ],
      scenes: {
        card_0: [
          {
            clear: true,
            narration: "Who times themselves makes 25? 5 × 5 = 25, so √25 = 5. Counting numbers keep only that plus twin. But −5 hugs itself and still makes 25! Positives get two roots: + and −. Grumpy negatives? No square root. A square never goes negative.",
            rule: "Positives get twins. Negatives get none.",
            quizQ: "What are the two square roots of 25? Does −25 have one?",
            quizA: "5 and −5. No — a square never goes negative.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_3_two_square_roots_labelled.svg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "√25 = 5 or −5   ·   −25 has no square root", color: "#c2410c", size: 15, weight: "bold" }
            ]
          }
        ],
        card_1: [
          {
            clear: true,
            narration: "Cube root means times itself three times. 5 × 5 × 5 = 125, so ∛125 = 5. Try −5? That's −125, so ∛(−125) = −5. Cubes are one-and-done. Squares can be twins: x² = 64 is 8 or −8. x³ = 64 is just 4. x³ + 64 = 0 means x³ = −64, so x = −4.",
            rule: "Squares can be twins. Cubes are one-and-done.",
            quizQ: "Solve x² = 64, x³ = 64 and x³ + 64 = 0.",
            quizA: "8 or −8. Just 4. Then −4.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_3_cube_roots_worked_labelled.svg", x: 90, y: 12, width: 620, height: 348 },
              { type: "rect", x: 50, y: 368, width: 700, height: 46, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 396, text: "∛125 = 5   ·   ∛(−125) = −5   ·   x³ + 64 = 0 → x = −4", color: "#1d4ed8", size: 14, weight: "bold" }
            ]
          }
        ],
        card_2: [
          {
            clear: true,
            narration: "Nesting boxes! N is counting numbers and 0 — that's 5 and 16. I is all whole numbers, even grumpy ones, so add −500. Q is anything you can write as a fraction — the whole list fits, even −1/5, −4.8 and 99½. N lives inside I. I lives inside Q.",
            rule: "N inside I inside Q. Fractions are rational too!",
            quizQ: "From 5, −1/5, −500, 16, −4.8, 99½: N? I? Q?",
            quizA: "N: 5, 16. I: 5, −500, 16. Q: the whole list.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_3_number_sets_labelled.svg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "N ⊂ I ⊂ Q   ·   5 and 16 natural   ·   −500 integer   ·   all rational", color: "#065f46", size: 14, weight: "bold" }
            ]
          }
        ]
      }
    },
    "m7_1.4": {
      title: "1.4 Indices",
      watermark: "Section 1.4: Indices",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Recall" },
        { id: "card_2", label: "Check" }
      ],
      scenes: {
        card_0: [
          {
            clear: true,
            narration: "A power is a shortcut for “times itself again!” 5³ means three 5s: 125. One extra 5 makes 5⁴ = 625. Slide left and divide by 5: 25 ÷ 5 = 5, so 5¹ = 5. One more slide: 5 ÷ 5 = 1. Boom — 5⁰ = 1. Any positive whole number to the power 0 is 1. Try sevens: 7³ = 343, 7⁴ = 2401, and 7⁰ = 1. Easy!",
            rule: "The little number counts the repeats. Power 0 is always 1.",
            quizQ: "What is 7³, 7⁴ and 7⁰?",
            quizA: "343, 2401 and 1. Power 0 is always 1!",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_4_zero_index_labelled.svg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "5³ = 125   ·   5⁴ = 625   ·   5⁰ = 1   ·   7³ = 343   ·   7⁴ = 2401", color: "#c2410c", size: 14, weight: "bold" }
            ]
          }
        ],
        card_1: [
          {
            clear: true,
            narration: "4 × 16 = 64. Same team of 2s? Write 2² × 2⁴ = 2⁶. The little numbers high-five and add: 2 + 4 = 6. Try 8 × 4 = 32 → 2³ × 2² = 2⁵. Same for sixes: 6² × 6³ = 6⁵. Different bases? Don’t add. 2³ × 5³ is not 2⁸.",
            rule: "Same team? Multiply means ADD the little numbers.",
            quizQ: "Write 6² × 6³ as one power of 6.",
            quizA: "6⁵ — add 2 and 3. Same team!",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_4_multiply_powers_labelled.svg", x: 90, y: 12, width: 620, height: 348 },
              { type: "rect", x: 50, y: 368, width: 700, height: 46, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 396, text: "4 × 16 = 64  →  2² × 2⁴ = 2⁶   ·   6² × 6³ = 6⁵", color: "#1d4ed8", size: 14, weight: "bold" }
            ]
          }
        ],
        card_2: [
          {
            clear: true,
            narration: "Division is the opposite slide. 32 ÷ 4 = 8 is 2⁵ ÷ 2² = 2³. Subtract: 5 − 2 = 3. Same power top and bottom? 5⁶ ÷ 5⁶ = 5⁰ = 1 — a number ÷ itself is just 1. Brackets make the little numbers multiply: (3²)³ = 3⁶.",
            rule: "Same team? Divide means SUBTRACT. Brackets multiply.",
            quizQ: "Write 2⁷ ÷ 2⁵ and (3²)³ as one power each.",
            quizA: "2² and 3⁶.",
            elements: [
              { type: "image", src: "assets/illustrations/m7_1_4_divide_powers_labelled.svg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "32 ÷ 4 = 8  →  2⁵ ÷ 2² = 2³   ·   5⁶ ÷ 5⁶ = 5⁰ = 1   ·   (3²)³ = 3⁶", color: "#065f46", size: 14, weight: "bold" }
            ]
          }
        ]
      }
    }
  });
})();
