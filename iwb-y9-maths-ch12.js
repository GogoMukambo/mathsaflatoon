// Year 9 Mathematics — Chapter 12 Probability
// Labelled posters (Year 7 Science 8.1 style) plus stepped working from Learner’s Book 9.
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};

(function () {
  function photo(src, caption, narration, rule, quizQ, quizA, fill, stroke, color) {
    return {
      clear: true,
      narration: narration,
      rule: rule,
      quizQ: quizQ,
      quizA: quizA,
      elements: [
        { type: "image", src: src, x: 90, y: 12, width: 620, height: 340 },
        { type: "rect", x: 40, y: 362, width: 720, height: 48, fill: fill || "#fff7ed", stroke: stroke || "#ea580c", strokeWidth: 1.5, rx: 8 },
        { type: "text", x: 400, y: 391, text: caption, color: color || "#c2410c", size: 14, weight: "bold" }
      ]
    };
  }

  Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, {

  "m9_12.1": {
    title: "12.1 Mutually exclusive events",
    watermark: "Section 12.1: Add exclusive events",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" },
      { id: "card_3", label: "Example" },
      { id: "card_4", label: "Leftover" }
    ],
    scenes: {
      card_0: [
        photo(
          "assets/illustrations/m9_12_1_exclusive_labelled.jpg",
          "KEYWORD: mutually exclusive — only one can happen",
          "The book uses 25 numbered balls. Events F, S and N cannot happen together: a ball cannot be a multiple of 5 and a multiple of 7 at once. That is mutually exclusive.",
          "Mutually exclusive = cannot happen at the same time. Then you ADD.",
          "What does mutually exclusive mean?",
          "Two events that cannot happen at the same time. For those events, P(A or B) = P(A) + P(B)."
        ),
        {
          clear: true,
          narration: "List the outcomes so you can see there is no overlap. F is 5, 10, 15, 20, 25. S is 7, 14, 21. N is 9, 18.",
          rule: "If the lists share no numbers, the events are exclusive.",
          quizQ: "Are F and S mutually exclusive?",
          quizA: "Yes. No ball is a multiple of both 5 and 7 in this bag.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "text", x: 400, y: 36, text: "25 balls · three exclusive events", color: "#0f172a", size: 18 },
            { type: "rect", x: 36, y: 64, width: 232, height: 250, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 284, y: 64, width: 232, height: 250, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 532, y: 64, width: 232, height: 250, fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 2, rx: 12 },
            { type: "text", x: 152, y: 96, text: "F  multiple of 5", color: "#1d4ed8", size: 15 },
            { type: "text", x: 400, y: 96, text: "S  multiple of 7", color: "#047857", size: 15 },
            { type: "text", x: 648, y: 96, text: "N  multiple of 9", color: "#6d28d9", size: 15 }
          ]
        },
        {
          narration: "Count the favourable balls, then write each probability as a fraction.",
          rule: "P = favourable ÷ 25.",
          quizQ: "What is P(F)?",
          quizA: "5/25 = 1/5.",
          elements: [
            { type: "text", x: 152, y: 150, text: "5  10  15  20  25", color: "#1e3a8a", size: 16 },
            { type: "text", x: 400, y: 150, text: "7   14   21", color: "#065f46", size: 16 },
            { type: "text", x: 648, y: 150, text: "9     18", color: "#5b21b6", size: 16 },
            { type: "text", x: 152, y: 210, text: "5 outcomes", color: "#1d4ed8", size: 14 },
            { type: "text", x: 400, y: 210, text: "3 outcomes", color: "#047857", size: 14 },
            { type: "text", x: 648, y: 210, text: "2 outcomes", color: "#6d28d9", size: 14 },
            { type: "text", x: 152, y: 268, text: "P(F) = 5/25 = 1/5", color: "#1d4ed8", size: 15, weight: "bold" },
            { type: "text", x: 400, y: 268, text: "P(S) = 3/25", color: "#047857", size: 15, weight: "bold" },
            { type: "text", x: 648, y: 268, text: "P(N) = 2/25", color: "#6d28d9", size: 15, weight: "bold" }
          ]
        },
        {
          narration: "Because they do not overlap, P(F or S) is just the two probabilities added. The leftover is 1 minus.",
          rule: "FORMULA: P(A or B) = P(A) + P(B)   and   P(not A) = 1 − P(A)",
          quizQ: "What is P(F or S)?",
          quizA: "5/25 + 3/25 = 8/25.",
          elements: [
            { type: "rect", x: 70, y: 338, width: 660, height: 56, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 8 },
            { type: "text", x: 400, y: 372, text: "FORMULA: P(F or S) = 5/25 + 3/25 = 8/25", color: "#9a3412", size: 18, weight: "bold" }
          ]
        }
      ],
      card_1: [
        photo(
          "assets/illustrations/m9_12_1_numbered_balls_bag.jpg",
          "Favourable ÷ 25  ·  then add if exclusive",
          "Same bag. Count the favourable balls, then write the fraction. Five multiples of 5 out of 25 balls is 1/5.",
          "P = favourable ÷ possible. Then add exclusive events.",
          "Balls 1 to 25. F is a multiple of 5, S a multiple of 7. Find P(F), P(S) and P(F or S).",
          "P(F) = 5/25 = 1/5. P(S) = 3/25. P(F or S) = 8/25.",
          "#ecfdf5", "#059669", "#065f46"
        ),
        {
          clear: true,
          narration: "Write the three probabilities, then add F and S. Eight different numbers, eight twenty-fifths.",
          rule: "5/25 + 3/25 = 8/25. Listing the eight numbers is a good check.",
          quizQ: "What is P(F or S)?",
          quizA: "8/25.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "text", x: 400, y: 40, text: "Check by listing: 5, 10, 15, 20, 25, 7, 14, 21", color: "#334155", size: 16 },
            { type: "rect", x: 70, y: 72, width: 200, height: 150, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 300, y: 72, width: 200, height: 150, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 530, y: 72, width: 200, height: 150, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "text", x: 170, y: 120, text: "P(F)", color: "#1d4ed8", size: 16 },
            { type: "text", x: 170, y: 168, text: "5/25 = 1/5", color: "#1e3a8a", size: 20, weight: "bold" },
            { type: "text", x: 400, y: 120, text: "P(S)", color: "#047857", size: 16 },
            { type: "text", x: 400, y: 168, text: "3/25", color: "#065f46", size: 22, weight: "bold" },
            { type: "text", x: 630, y: 120, text: "P(F or S)", color: "#c2410c", size: 16 },
            { type: "text", x: 630, y: 168, text: "8/25", color: "#9a3412", size: 22, weight: "bold" }
          ]
        },
        {
          narration: "F and not-F cover every ball, so they add to 1.",
          rule: "FORMULA: P(not F) = 1 − 1/5 = 4/5",
          quizQ: "What is P(not F)?",
          quizA: "4/5",
          elements: [
            { type: "rect", x: 70, y: 250, width: 660, height: 70, fill: "#f8fafc", stroke: "#94a3b8", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 292, text: "FORMULA: P(not F) = 1 − 1/5 = 4/5", color: "#0f172a", size: 18, weight: "bold" }
          ]
        }
      ],
      card_2: [
        photo(
          "assets/illustrations/m9_12_1_football_labelled.jpg",
          "Win, draw, lose  ·  exclusive and exhaustive",
          "A football match can only be a win, a draw or a lose. Those three results are mutually exclusive and they cover every match, so they add to 1.",
          "Win + draw + lose = 1. The leftover is P(lose).",
          "P(win) = 60% and P(draw) = 15%. What is P(lose)?",
          "1 − 0.60 − 0.15 = 0.25, or 25%.",
          "#eff6ff", "#2563eb", "#1d4ed8"
        ),
        {
          clear: true,
          narration: "Change 60% and 15% to decimals, subtract from 1. The missing result is lose.",
          rule: "FORMULA: P(lose) = 1 − 0.60 − 0.15 = 0.25",
          quizQ: "What is P(lose)?",
          quizA: "0.25 or 25%.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 40, y: 50, width: 220, height: 160, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 290, y: 50, width: 220, height: 160, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 540, y: 50, width: 220, height: 160, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 2, rx: 12 },
            { type: "text", x: 150, y: 100, text: "WIN", color: "#047857", size: 18 },
            { type: "text", x: 150, y: 148, text: "0.60", color: "#065f46", size: 28, weight: "bold" },
            { type: "text", x: 400, y: 100, text: "DRAW", color: "#c2410c", size: 18 },
            { type: "text", x: 400, y: 148, text: "0.15", color: "#9a3412", size: 28, weight: "bold" },
            { type: "text", x: 650, y: 100, text: "LOSE", color: "#b91c1c", size: 18 },
            { type: "text", x: 650, y: 148, text: "?", color: "#991b1b", size: 28, weight: "bold" }
          ]
        },
        {
          narration: "The three results cover every match, so they add to 1. The leftover is lose.",
          rule: "FORMULA: 0.60 + 0.15 + P(lose) = 1",
          quizQ: "Write P(lose) as a percentage.",
          quizA: "25%",
          elements: [
            { type: "rect", x: 80, y: 250, width: 640, height: 130, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 12 },
            { type: "text", x: 400, y: 290, text: "FORMULA: 0.60 + 0.15 + P(lose) = 1", color: "#0f172a", size: 18 },
            { type: "text", x: 400, y: 338, text: "P(lose) = 0.25   =   25%", color: "#b91c1c", size: 24, weight: "bold" }
          ]
        }
      ],
      card_3: [
        photo(
          "assets/illustrations/m9_12_1_spinner_labelled.jpg",
          "Red 0.35  ·  Blue 0.2  ·  Gold 0.1",
          "Worked example 12.1. The spinner lands on red, blue, gold or another colour. Red, blue and gold cannot happen together.",
          "Add the colours you want. Use 1 minus for ‘neither’.",
          "P(red) = 0.35, P(blue) = 0.2, P(gold) = 0.1. Find P(red or blue) and P(neither blue nor gold).",
          "P(red or blue) = 0.55. P(neither blue nor gold) = 0.7.",
          "#fdf4ff", "#7c3aed", "#6d28d9"
        ),
        {
          clear: true,
          narration: "Red or blue means add.",
          rule: "0.35 + 0.2 = 0.55",
          quizQ: "What is P(red or blue)?",
          quizA: "0.55",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 50, y: 40, width: 700, height: 150, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "text", x: 400, y: 78, text: "a)  P(red or blue)", color: "#c2410c", size: 16 },
            { type: "text", x: 400, y: 128, text: "0.35 + 0.2 = 0.55", color: "#9a3412", size: 26, weight: "bold" }
          ]
        },
        {
          narration: "Neither blue nor gold means add blue and gold first, then subtract from 1.",
          rule: "1 − 0.3 = 0.7",
          quizQ: "What is P(neither blue nor gold)?",
          quizA: "0.7",
          elements: [
            { type: "rect", x: 50, y: 210, width: 700, height: 180, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "text", x: 400, y: 248, text: "b)  P(blue or gold) = 0.2 + 0.1 = 0.3", color: "#1d4ed8", size: 16 },
            { type: "text", x: 400, y: 300, text: "P(neither) = 1 − 0.3 = 0.7", color: "#1e3a8a", size: 24, weight: "bold" },
            { type: "text", x: 400, y: 350, text: "KEYWORD: neither  →  1 minus the ones you named", color: "#334155", size: 14 }
          ]
        }
      ],
      card_4: [
        {
          clear: true,
          narration: "The leftover rule works because A and not-A cannot both happen, and one of them must happen. Ten cards: four 2s and three 5s.",
          rule: "FORMULA: P(not A) = 1 − P(A)",
          quizQ: "Ten cards: 2, 2, 2, 2, 3, 3, 4, 5, 5, 5. Find P(2 or 5) and P(neither).",
          quizA: "7/10 and 3/10.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "text", x: 400, y: 36, text: "Ten cards  ·  leftover rule", color: "#0f172a", size: 18 },
            { type: "rect", x: 40, y: 60, width: 230, height: 140, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 285, y: 60, width: 230, height: 140, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 530, y: 60, width: 230, height: 140, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "text", x: 155, y: 104, text: "P(2) = 4/10", color: "#1d4ed8", size: 16, weight: "bold" },
            { type: "text", x: 400, y: 104, text: "P(5) = 3/10", color: "#047857", size: 16, weight: "bold" },
            { type: "text", x: 645, y: 104, text: "or → add", color: "#c2410c", size: 16, weight: "bold" },
            { type: "text", x: 155, y: 156, text: "four 2s", color: "#334155", size: 14 },
            { type: "text", x: 400, y: 156, text: "three 5s", color: "#334155", size: 14 },
            { type: "text", x: 645, y: 156, text: "7/10", color: "#9a3412", size: 22, weight: "bold" }
          ]
        },
        {
          narration: "Neither 2 nor 5 is 1 minus 7/10. The same leftover idea finds a missing colour in a table.",
          rule: "FORMULA: P(neither) = 1 − 7/10 = 3/10",
          quizQ: "Gold 0.05, silver 0.15, bronze 0.55. What is P(white)?",
          quizA: "1 − 0.75 = 0.25",
          elements: [
            { type: "rect", x: 80, y: 230, width: 640, height: 70, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 272, text: "FORMULA: P(neither 2 nor 5) = 1 − 7/10 = 3/10", color: "#0f172a", size: 17, weight: "bold" },
            { type: "rect", x: 80, y: 320, width: 640, height: 70, fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 362, text: "Missing white: 1 − 0.05 − 0.15 − 0.55 = 0.25", color: "#6d28d9", size: 16, weight: "bold" }
          ]
        }
      ]
    }
  },

  "m9_12.2": {
    title: "12.2 Independent events",
    watermark: "Section 12.2: Does the first change the second?",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" },
      { id: "card_3", label: "Example" },
      { id: "card_4", label: "Replace?" }
    ],
    scenes: {
      card_0: [
        photo(
          "assets/illustrations/m9_12_2_independent_labelled.jpg",
          "KEYWORD: independent — the second chance does not change",
          "Flip a coin, then roll a dice. A head does not change the chance of a 4. A tail does not change it either. P(4) stays 1/6. Those events are independent.",
          "Independent: P(B) is the same whether A happens or not.",
          "What are independent events?",
          "Events that do not change each other’s probability. The second chance stays the same whether the first happens or not.",
          "#eff6ff", "#2563eb", "#1d4ed8"
        ),
        {
          clear: true,
          narration: "Test both cases. After a head, P(4) = 1/6. After a tail, P(4) = 1/6. Same number both times, so independent.",
          rule: "Same P(B) in both cases  →  independent.",
          quizQ: "Does a head change P(rolling a 4)?",
          quizA: "No. P(4) is still 1/6.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 40, y: 40, width: 340, height: 220, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 14 },
            { type: "rect", x: 420, y: 40, width: 340, height: 220, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 14 },
            { type: "text", x: 210, y: 84, text: "If A happens", color: "#c2410c", size: 16 },
            { type: "text", x: 210, y: 130, text: "coin = Head", color: "#9a3412", size: 18, weight: "bold" },
            { type: "text", x: 210, y: 186, text: "P(4) = 1/6", color: "#7c2d12", size: 24, weight: "bold" },
            { type: "text", x: 590, y: 84, text: "If A does not happen", color: "#047857", size: 16 },
            { type: "text", x: 590, y: 130, text: "coin = Tail", color: "#065f46", size: 18, weight: "bold" },
            { type: "text", x: 590, y: 186, text: "P(4) = 1/6", color: "#064e3b", size: 24, weight: "bold" }
          ]
        },
        {
          narration: "The two values match, so the coin and the dice are independent.",
          rule: "1/6  =  1/6   →   independent",
          quizQ: "Are a coin flip and a dice roll independent?",
          quizA: "Yes. P(4) stays 1/6 either way.",
          elements: [
            { type: "rect", x: 80, y: 290, width: 640, height: 90, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 336, text: "1/6  =  1/6   →   A and B are independent", color: "#0f172a", size: 18, weight: "bold" }
          ]
        }
      ],
      card_1: [
        photo(
          "assets/illustrations/m9_12_2_not_independent_labelled.jpg",
          "Odd?  Then two of five are small.  Even?  Only one of five.",
          "Balls 1 to 10. C is ‘odd’. D is ‘less than 4’. This time the first result does change the second chance.",
          "If P(D) changes, the events are not independent.",
          "Balls 1–10. C is odd, D is less than 4. Are C and D independent?",
          "No. P(D) is 2/5 if C happens and 1/5 if C does not.",
          "#fef2f2", "#dc2626", "#b91c1c"
        ),
        {
          clear: true,
          narration: "If the number is odd you have 1, 3, 5, 7, 9. Two of those are less than 4, so P(D) = 2/5.",
          rule: "If C happens, P(D) = 2/5.",
          quizQ: "If the number is odd, what is P(less than 4)?",
          quizA: "2/5",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 36, y: 36, width: 350, height: 250, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 14 },
            { type: "text", x: 211, y: 74, text: "C happens  ·  odd", color: "#1d4ed8", size: 16 },
            { type: "text", x: 211, y: 120, text: "1  3  5  7  9", color: "#1e3a8a", size: 20, weight: "bold" },
            { type: "text", x: 211, y: 168, text: "less than 4:  1 and 3", color: "#334155", size: 15 },
            { type: "text", x: 211, y: 226, text: "P(D) = 2/5", color: "#1d4ed8", size: 24, weight: "bold" }
          ]
        },
        {
          narration: "If it is even you have 2, 4, 6, 8, 10 and only 2 is less than 4, so P(D) = 1/5. Different answers, so not independent.",
          rule: "2/5 is not 1/5, so C and D are not independent.",
          quizQ: "What are the two values of P(D)?",
          quizA: "2/5 if odd, 1/5 if even.",
          elements: [
            { type: "rect", x: 414, y: 36, width: 350, height: 250, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 14 },
            { type: "text", x: 589, y: 74, text: "C fails  ·  even", color: "#c2410c", size: 16 },
            { type: "text", x: 589, y: 120, text: "2  4  6  8  10", color: "#9a3412", size: 20, weight: "bold" },
            { type: "text", x: 589, y: 168, text: "less than 4:  only 2", color: "#334155", size: 15 },
            { type: "text", x: 589, y: 226, text: "P(D) = 1/5", color: "#c2410c", size: 24, weight: "bold" },
            { type: "rect", x: 80, y: 312, width: 640, height: 72, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 354, text: "2/5  ≠  1/5   →   not independent", color: "#991b1b", size: 20, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "Worked example 12.2. Fair dice. X is even, Y is more than 2. Check P(Y) in both cases.",
          rule: "If X happens or not, P(Y) is still 2/3. Independent.",
          quizQ: "A fair dice. X is even, Y is more than 2. Show that X and Y are independent.",
          quizA: "If X happens, P(Y) = 2/3. If X does not, P(Y) is still 2/3. P(Y) has not changed.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "text", x: 400, y: 36, text: "Dice  ·  X even  ·  Y more than 2", color: "#0f172a", size: 18 },
            { type: "rect", x: 40, y: 60, width: 350, height: 210, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 410, y: 60, width: 350, height: 210, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "text", x: 215, y: 96, text: "X happens:  2, 4, 6", color: "#047857", size: 16 },
            { type: "text", x: 215, y: 146, text: "more than 2:  4 and 6", color: "#065f46", size: 15 },
            { type: "text", x: 215, y: 206, text: "P(Y) = 2/3", color: "#064e3b", size: 24, weight: "bold" },
            { type: "text", x: 585, y: 96, text: "X fails:  1, 3, 5", color: "#047857", size: 16 },
            { type: "text", x: 585, y: 146, text: "more than 2:  3 and 5", color: "#065f46", size: 15 },
            { type: "text", x: 585, y: 206, text: "P(Y) = 2/3", color: "#064e3b", size: 24, weight: "bold" },
            { type: "rect", x: 80, y: 300, width: 640, height: 80, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 346, text: "Same 2/3 both times  →  X and Y independent", color: "#065f46", size: 18, weight: "bold" }
          ]
        }
      ],
      card_3: [
        {
          clear: true,
          narration: "Same dice, now Z is prime. If the number is even, only 2 is prime, so P(Z) = 1/3. If it is odd, 3 and 5 are prime, so P(Z) = 2/3.",
          rule: "P(Z) changed  →  even and prime are not independent.",
          quizQ: "Show that even and prime on a dice are not independent.",
          quizA: "If even, P(prime) = 1/3. If odd, P(prime) = 2/3. Different, so not independent.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 40, y: 36, width: 350, height: 200, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 410, y: 36, width: 350, height: 200, fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 2, rx: 12 },
            { type: "text", x: 215, y: 78, text: "Even:  2, 4, 6", color: "#1d4ed8", size: 16 },
            { type: "text", x: 215, y: 130, text: "prime:  only 2", color: "#334155", size: 15 },
            { type: "text", x: 215, y: 186, text: "P(Z) = 1/3", color: "#1e3a8a", size: 24, weight: "bold" },
            { type: "text", x: 585, y: 78, text: "Not even:  1, 3, 5", color: "#6d28d9", size: 16 },
            { type: "text", x: 585, y: 130, text: "prime:  3 and 5", color: "#334155", size: 15 },
            { type: "text", x: 585, y: 186, text: "P(Z) = 2/3", color: "#5b21b6", size: 24, weight: "bold" },
            { type: "rect", x: 50, y: 258, width: 700, height: 80, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 304, text: "1/3  ≠  2/3   →   not independent", color: "#991b1b", size: 20, weight: "bold" }
          ]
        }
      ],
      card_4: [
        photo(
          "assets/illustrations/m9_12_2_replacement_labelled.jpg",
          "Replace the ball  →  independent.  Keep it out  →  not independent.",
          "Ten balls, three black. Put the first ball back and the bag is restored. Do not put it back and the second chance has changed.",
          "Replacement restores the bag. That is the independence test.",
          "You draw a ball and do not put it back. Are the two draws independent?",
          "No. The bag has changed, so the second probability depends on the first.",
          "#ecfdf5", "#059669", "#065f46"
        ),
        {
          clear: true,
          narration: "With replacement, P(second black) stays 3/10. Without replacement a black first leaves 2 out of 9, and a white first leaves 3 out of 9.",
          rule: "Same second chance  →  independent. Changed second chance  →  not.",
          quizQ: "Without replacement, what is P(second black) after a black first?",
          quizA: "2/9",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 40, y: 50, width: 350, height: 200, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 410, y: 50, width: 350, height: 200, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 2, rx: 12 },
            { type: "text", x: 215, y: 96, text: "Replace", color: "#047857", size: 18, weight: "bold" },
            { type: "text", x: 215, y: 150, text: "P(2nd black) = 3/10", color: "#065f46", size: 16 },
            { type: "text", x: 215, y: 200, text: "independent", color: "#064e3b", size: 18, weight: "bold" },
            { type: "text", x: 585, y: 96, text: "Do not replace", color: "#b91c1c", size: 18, weight: "bold" },
            { type: "text", x: 585, y: 150, text: "2/9  or  3/9", color: "#991b1b", size: 16 },
            { type: "text", x: 585, y: 200, text: "not independent", color: "#7f1d1d", size: 18, weight: "bold" },
            { type: "rect", x: 80, y: 290, width: 640, height: 90, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 342, text: "Fog and an on-time flight are not independent either", color: "#0f172a", size: 16, weight: "bold" }
          ]
        }
      ]
    }
  },

  "m9_12.3": {
    title: "12.3 Combined events",
    watermark: "Section 12.3: Multiply on a tree",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" },
      { id: "card_3", label: "Example" }
    ],
    scenes: {
      card_0: [
        photo(
          "assets/illustrations/m9_12_2_coin_and_dice.jpg",
          "AND  →  multiply     OR  →  add exclusive paths",
          "If two events are independent, the chance that both happen is the product. Head on the coin and more than 2 on the dice: 1/2 times 2/3.",
          "FORMULA: P(A and B) = P(A) × P(B)   when independent",
          "P(head) = 1/2 and P(more than 2) = 2/3. What is P(both)?",
          "1/2 × 2/3 = 1/3."
        ),
        {
          clear: true,
          narration: "P(head) is 1/2. More than 2 on a dice is 3, 4, 5, 6 so 4/6 = 2/3. Multiply because the coin does not change the dice.",
          rule: "1/2 × 2/3 = 1/3",
          quizQ: "Why multiply, not add?",
          quizA: "You want both events together, and they are independent. Add is for exclusive ‘or’.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 50, y: 40, width: 210, height: 140, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 295, y: 40, width: 210, height: 140, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 540, y: 40, width: 210, height: 140, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "text", x: 155, y: 84, text: "P(head)", color: "#1d4ed8", size: 15 },
            { type: "text", x: 155, y: 132, text: "1/2", color: "#1e3a8a", size: 28, weight: "bold" },
            { type: "text", x: 400, y: 84, text: "P(more than 2)", color: "#047857", size: 14 },
            { type: "text", x: 400, y: 132, text: "2/3", color: "#065f46", size: 28, weight: "bold" },
            { type: "text", x: 645, y: 84, text: "P(both)", color: "#c2410c", size: 15 },
            { type: "text", x: 645, y: 132, text: "1/3", color: "#9a3412", size: 28, weight: "bold" }
          ]
        },
        {
          narration: "Write the product, then remember the tree rule: multiply along a path, add winning paths.",
          rule: "FORMULA:  1/2  ×  2/3  =  1/3",
          quizQ: "What is P(head and more than 2)?",
          quizA: "1/3",
          elements: [
            { type: "text", x: 400, y: 230, text: "FORMULA:  1/2  ×  2/3  =  1/3", color: "#0f172a", size: 22, weight: "bold" },
            { type: "rect", x: 80, y: 280, width: 640, height: 90, fill: "#f8fafc", stroke: "#94a3b8", strokeWidth: 1.5, rx: 10 },
            { type: "text", x: 400, y: 332, text: "KEYWORD: tree — multiply along a path, add winning paths", color: "#334155", size: 15 }
          ]
        }
      ],
      card_1: [
        photo(
          "assets/illustrations/m9_12_3_tree_labelled.jpg",
          "Odd: 1, 3, 5     A: one of four letters",
          "Worked example 12.3. Two spinners: 1 to 5, and A B C D. Find the chance of an odd number and the letter A.",
          "P(odd) = 3/5.  P(A) = 1/4.  Multiply.",
          "Find P(odd and A).",
          "3/5 × 1/4 = 3/20.",
          "#ecfdf5", "#059669", "#065f46"
        ),
        {
          clear: true,
          narration: "Draw the tree. First split odd / even.",
          rule: "P(odd) = 3/5.  P(even) = 2/5.  Those two branches add to 1.",
          quizQ: "What is P(even)?",
          quizA: "2/5",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "circle", cx: 70, cy: 200, r: 18, fill: "#1d4ed8", stroke: "#1e3a8a", width: 2 },
            { type: "path", d: "M 88 188 L 200 90", stroke: "#2563eb", width: 3, fill: "none" },
            { type: "path", d: "M 88 212 L 200 310", stroke: "#059669", width: 3, fill: "none" },
            { type: "text", x: 150, y: 118, text: "odd  3/5", color: "#1d4ed8", size: 14 },
            { type: "text", x: 154, y: 292, text: "even  2/5", color: "#047857", size: 14 },
            { type: "circle", cx: 230, cy: 84, r: 16, fill: "#93c5fd", stroke: "#1d4ed8", width: 2 },
            { type: "circle", cx: 230, cy: 316, r: 16, fill: "#6ee7b7", stroke: "#047857", width: 2 }
          ]
        },
        {
          narration: "From each of those, split A / not A. This highlighted path is odd then A.",
          rule: "3/5 × 1/4 = 3/20",
          quizQ: "What is P(odd and A)?",
          quizA: "3/20",
          elements: [
            { type: "path", d: "M 246 74 L 400 40", stroke: "#ea580c", width: 3, fill: "none" },
            { type: "path", d: "M 246 94 L 400 128", stroke: "#7c3aed", width: 3, fill: "none" },
            { type: "text", x: 330, y: 36, text: "A  1/4", color: "#c2410c", size: 14 },
            { type: "text", x: 338, y: 148, text: "not A  3/4", color: "#6d28d9", size: 13 },
            { type: "rect", x: 430, y: 20, width: 330, height: 70, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 8 },
            { type: "text", x: 595, y: 62, text: "odd and A   3/20", color: "#9a3412", size: 18, weight: "bold" },
            { type: "rect", x: 80, y: 360, width: 640, height: 56, fill: "#f8fafc", stroke: "#94a3b8", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 394, text: "FORMULA:  3/5 × 1/4 = 3/20", color: "#0f172a", size: 18, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "Finish the tree. The four products must add to 1, because every spin lands on one of those four outcomes.",
          rule: "3/20 + 9/20 + 2/20 + 6/20 = 1.  P(even and not A) = 3/10.",
          quizQ: "What is P(even and not A), and why do the four paths add to 1?",
          quizA: "2/5 × 3/4 = 6/20 = 3/10. The four outcomes cover every spin, so they add to 1.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "text", x: 400, y: 32, text: "Four paths on the spinner tree", color: "#0f172a", size: 17 },
            { type: "rect", x: 40, y: 56, width: 350, height: 70, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "rect", x: 410, y: 56, width: 350, height: 70, fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 1.5, rx: 8 },
            { type: "rect", x: 40, y: 140, width: 350, height: 70, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "rect", x: 410, y: 140, width: 350, height: 70, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 215, y: 98, text: "odd, A          3/20", color: "#9a3412", size: 16, weight: "bold" },
            { type: "text", x: 585, y: 98, text: "odd, not A      9/20", color: "#6d28d9", size: 16, weight: "bold" },
            { type: "text", x: 215, y: 182, text: "even, A         2/20", color: "#047857", size: 16, weight: "bold" },
            { type: "text", x: 585, y: 182, text: "even, not A     6/20", color: "#1d4ed8", size: 16, weight: "bold" }
          ]
        },
        {
          narration: "Add the four path probabilities. They must make 1. That is how you check a tree.",
          rule: "P(even and not A) = 2/5 × 3/4 = 3/10",
          quizQ: "Do the four paths add to 1?",
          quizA: "Yes. 3/20 + 9/20 + 2/20 + 6/20 = 1.",
          elements: [
            { type: "rect", x: 80, y: 236, width: 640, height: 64, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 274, text: "3/20 + 9/20 + 2/20 + 6/20  =  20/20  =  1", color: "#0f172a", size: 17, weight: "bold" },
            { type: "rect", x: 80, y: 320, width: 640, height: 64, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 358, text: "P(even and not A) = 2/5 × 3/4 = 3/10", color: "#065f46", size: 17, weight: "bold" }
          ]
        }
      ],
      card_3: [
        photo(
          "assets/illustrations/m9_12_3_lights_labelled.jpg",
          "KEYWORD: at least one  =  1  −  P(none)",
          "Two traffic lights. First red with probability 0.3, second red with 0.6. They do not affect each other, so multiply along each path.",
          "P(neither red) = 0.7 × 0.4 = 0.28.  At least one = 1 − 0.28 = 0.72.",
          "First light red 0.3, second red 0.6. What is P(at least one red)?",
          "1 − (0.7 × 0.4) = 0.72.",
          "#fef2f2", "#dc2626", "#b91c1c"
        ),
        {
          clear: true,
          narration: "City 0.8 and United 0.6 are the same idea: independent matches, multiply. Both win 0.48. Neither wins 0.08. The four outcomes add to 1.",
          rule: "Both 0.48 · City only 0.32 · United only 0.12 · neither 0.08",
          quizQ: "City 0.8, United 0.6, not playing each other. P(both win)?",
          quizA: "0.8 × 0.6 = 0.48.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 30, y: 36, width: 360, height: 88, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 10 },
            { type: "rect", x: 410, y: 36, width: 360, height: 88, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 10 },
            { type: "text", x: 210, y: 86, text: "both win   0.8 × 0.6 = 0.48", color: "#065f46", size: 15, weight: "bold" },
            { type: "text", x: 590, y: 86, text: "neither    0.2 × 0.4 = 0.08", color: "#1d4ed8", size: 15, weight: "bold" },
            { type: "rect", x: 30, y: 140, width: 360, height: 88, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 10 },
            { type: "rect", x: 410, y: 140, width: 360, height: 88, fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 2, rx: 10 },
            { type: "text", x: 210, y: 190, text: "City only   0.8 × 0.4 = 0.32", color: "#9a3412", size: 15, weight: "bold" },
            { type: "text", x: 590, y: 190, text: "United only  0.2 × 0.6 = 0.12", color: "#6d28d9", size: 15, weight: "bold" }
          ]
        },
        {
          narration: "Check the four football outcomes add to 1. Then use the leftover idea for the lights: at least one red is 1 minus neither red.",
          rule: "Lights: P(at least one red) = 1 − 0.28 = 0.72",
          quizQ: "P(neither red) = 0.28. What is P(at least one red)?",
          quizA: "0.72",
          elements: [
            { type: "rect", x: 80, y: 256, width: 640, height: 56, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 290, text: "0.48 + 0.32 + 0.12 + 0.08  =  1", color: "#0f172a", size: 18, weight: "bold" },
            { type: "rect", x: 80, y: 332, width: 640, height: 56, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 366, text: "Lights: P(at least one red) = 1 − 0.28 = 0.72", color: "#991b1b", size: 16, weight: "bold" }
          ]
        }
      ]
    }
  },

  "m9_12.4": {
    title: "12.4 Chance experiments",
    watermark: "Section 12.4: Relative frequency",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" },
      { id: "card_3", label: "Example" }
    ],
    scenes: {
      card_0: [
        photo(
          "assets/illustrations/m9_12_4_relative_freq_labelled.jpg",
          "KEYWORD: relative frequency — successes ÷ trials",
          "Zara rolls a dice 50 times looking for sixes. Relative frequency is how often it happened, divided by how many times she rolled. That is the experimental probability.",
          "FORMULA: relative frequency = frequency ÷ trials",
          "What is relative frequency?",
          "Frequency divided by the number of trials. It is the experimental probability."
        ),
        {
          clear: true,
          narration: "After the first ten rolls she has two sixes, so 2/10 = 0.2. Theoretical P(6) is 1/6, which is 0.167 to 3 decimal places. Early results wobble.",
          rule: "2/10 = 0.2   ·   theory = 0.167   ·   not the same yet",
          quizQ: "Zara gets 2 sixes in 10 rolls. What is the relative frequency?",
          quizA: "0.2",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 40, y: 40, width: 350, height: 160, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 410, y: 40, width: 350, height: 160, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "text", x: 215, y: 84, text: "After 10 rolls", color: "#c2410c", size: 16 },
            { type: "text", x: 215, y: 140, text: "2 ÷ 10 = 0.2", color: "#9a3412", size: 24, weight: "bold" },
            { type: "text", x: 585, y: 84, text: "Theoretical P(6)", color: "#1d4ed8", size: 16 },
            { type: "text", x: 585, y: 140, text: "1/6 = 0.167", color: "#1e3a8a", size: 24, weight: "bold" }
          ]
        },
        {
          narration: "The experimental value will keep changing. More rolls usually sit closer to 0.167.",
          rule: "More rolls  →  usually closer to 0.167",
          quizQ: "What is the theoretical probability of a 6, to 3 d.p.?",
          quizA: "0.167",
          elements: [
            { type: "rect", x: 80, y: 230, width: 640, height: 140, fill: "#f8fafc", stroke: "#64748b", strokeWidth: 1.5, rx: 10 },
            { type: "text", x: 400, y: 282, text: "The experimental value will keep changing", color: "#334155", size: 16 },
            { type: "text", x: 400, y: 328, text: "More rolls  →  usually closer to 0.167", color: "#0f172a", size: 18, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "Copy the book table. Running totals of sixes: 2, 5, 7, 10, 11 after every ten rolls. Divide each total by the number of rolls so far.",
          rule: "0.2 , 0.25 , 0.233 , 0.25 , 0.22   and a dashed line at 0.167",
          quizQ: "Write the relative frequencies after 10, 20, 30, 40 and 50 rolls.",
          quizA: "0.2, 0.25, 0.233, 0.25, 0.22.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "text", x: 400, y: 28, text: "Zara’s running relative frequency of a 6", color: "#0f172a", size: 16 },
            { type: "rect", x: 50, y: 48, width: 700, height: 86, fill: "#f8fafc", stroke: "#94a3b8", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 80, text: "Rolls   10     20     30      40     50", color: "#334155", size: 15 },
            { type: "text", x: 400, y: 114, text: "RF      0.2    0.25   0.233   0.25   0.22", color: "#0f172a", size: 15, weight: "bold" }
          ]
        },
        {
          narration: "Plot the five relative frequencies. The dashed line is theoretical 1/6. The dots bounce around it.",
          rule: "Dots bounce. Dashed line is theoretical 0.167",
          quizQ: "Does the graph sit exactly on 1/6 after 50 rolls?",
          quizA: "No. 0.22 is still a little high, but the wobble is smaller than after 10 rolls.",
          elements: [
            { type: "path", d: "M 80 360 L 740 360", stroke: "#94a3b8", width: 2, fill: "none" },
            { type: "path", d: "M 80 160 L 80 360", stroke: "#94a3b8", width: 2, fill: "none" },
            { type: "path", d: "M 80 300 L 740 300", stroke: "#2563eb", width: 2, fill: "none", dash: "8 6" },
            { type: "text", x: 700, y: 288, text: "1/6", color: "#1d4ed8", size: 13 },
            { type: "path", d: "M 180 248 L 300 200 L 420 214 L 540 200 L 660 224", stroke: "#ea580c", width: 3, fill: "none" },
            { type: "circle", cx: 180, cy: 248, r: 6, fill: "#ea580c", stroke: "#9a3412", width: 2 },
            { type: "circle", cx: 300, cy: 200, r: 6, fill: "#ea580c", stroke: "#9a3412", width: 2 },
            { type: "circle", cx: 420, cy: 214, r: 6, fill: "#ea580c", stroke: "#9a3412", width: 2 },
            { type: "circle", cx: 540, cy: 200, r: 6, fill: "#ea580c", stroke: "#9a3412", width: 2 },
            { type: "circle", cx: 660, cy: 224, r: 6, fill: "#ea580c", stroke: "#9a3412", width: 2 },
            { type: "text", x: 400, y: 400, text: "Dots bounce. Dashed line is theoretical 0.167", color: "#475569", size: 14 }
          ]
        }
      ],
      card_2: [
        photo(
          "assets/illustrations/m9_12_4_spinner200_labelled.jpg",
          "200 spins is a large sample  ·  expect near 1/3, not exact",
          "A fair three-colour spinner is spun 200 times. Each colour should be about 1/3. Compare the experimental decimals with 0.333.",
          "Red 0.39  ·  white 0.27  ·  blue 0.34  ·  theory 0.333",
          "Frequencies 78, 54, 68 in 200 spins. Compare each relative frequency with 1/3.",
          "0.39, 0.27 and 0.34. Theory is 0.333. Red a little high, white a little low, blue close.",
          "#eff6ff", "#2563eb", "#1d4ed8"
        ),
        {
          clear: true,
          narration: "78/200 = 0.39, 54/200 = 0.27, 68/200 = 0.34. Theoretical is 1/3. The experiment is close, not identical. That is what a large sample looks like.",
          rule: "FORMULA: relative frequency = frequency ÷ 200",
          quizQ: "What is the relative frequency of red?",
          quizA: "78/200 = 0.39",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 36, y: 40, width: 232, height: 180, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 284, y: 40, width: 232, height: 180, fill: "#f8fafc", stroke: "#64748b", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 532, y: 40, width: 232, height: 180, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "text", x: 152, y: 84, text: "Red 78", color: "#b91c1c", size: 16 },
            { type: "text", x: 152, y: 140, text: "0.39", color: "#991b1b", size: 28, weight: "bold" },
            { type: "text", x: 400, y: 84, text: "White 54", color: "#475569", size: 16 },
            { type: "text", x: 400, y: 140, text: "0.27", color: "#334155", size: 28, weight: "bold" },
            { type: "text", x: 648, y: 84, text: "Blue 68", color: "#1d4ed8", size: 16 },
            { type: "text", x: 648, y: 140, text: "0.34", color: "#1e3a8a", size: 28, weight: "bold" }
          ]
        },
        {
          narration: "Theoretical is 1/3. Close, not exact. 200 trials still bounce a little.",
          rule: "Theoretical P(each colour) = 1/3 ≈ 0.333",
          quizQ: "Should 200 spins give exactly 1/3 each?",
          quizA: "No. A large sample sits near 1/3, not exactly on it.",
          elements: [
            { type: "rect", x: 80, y: 250, width: 640, height: 120, fill: "#f8fafc", stroke: "#334155", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 296, text: "Theoretical P(each colour) = 1/3 ≈ 0.333", color: "#0f172a", size: 17, weight: "bold" },
            { type: "text", x: 400, y: 338, text: "Close, not exact  ·  200 trials still bounce a little", color: "#475569", size: 15 }
          ]
        }
      ],
      card_3: [
        {
          clear: true,
          narration: "Two coin experiments: 3 double-tails in 25 flips, then 7 in another 25. Combine them by adding frequencies and adding trials.",
          rule: "3/25 = 0.12,  7/25 = 0.28,  together 10/50 = 0.2.  Theory 0.25.",
          quizQ: "Two tails 3 times in 25, then 7 times in 25. Combined relative frequency?",
          quizA: "10/50 = 0.2. Theoretical P(TT) = 0.25.",
          elements: [
            { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
            { type: "rect", x: 40, y: 36, width: 230, height: 150, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 285, y: 36, width: 230, height: 150, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 12 },
            { type: "rect", x: 530, y: 36, width: 230, height: 150, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 12 },
            { type: "text", x: 155, y: 80, text: "First 25", color: "#c2410c", size: 15 },
            { type: "text", x: 155, y: 130, text: "3/25 = 0.12", color: "#9a3412", size: 18, weight: "bold" },
            { type: "text", x: 400, y: 80, text: "Second 25", color: "#047857", size: 15 },
            { type: "text", x: 400, y: 130, text: "7/25 = 0.28", color: "#065f46", size: 18, weight: "bold" },
            { type: "text", x: 645, y: 80, text: "Combined", color: "#1d4ed8", size: 15 },
            { type: "text", x: 645, y: 130, text: "10/50 = 0.2", color: "#1e3a8a", size: 18, weight: "bold" }
          ]
        },
        {
          narration: "Theoretical P(two tails) is 1/4. Combining the two experiments gives a better estimate because n is larger. Small samples wobble. Large samples settle.",
          rule: "Small n wobbles. Large n settles. That is the long run.",
          quizQ: "Why is a large sample a better estimate than 10 trials?",
          quizA: "Relative frequency usually settles closer to the theoretical probability when n is large.",
          elements: [
            { type: "rect", x: 80, y: 214, width: 640, height: 70, fill: "#f8fafc", stroke: "#64748b", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 256, text: "Theoretical P(two tails) = 1/4 = 0.25", color: "#0f172a", size: 17, weight: "bold" },
            { type: "rect", x: 80, y: 306, width: 640, height: 80, fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 352, text: "Small n wobbles. Large n settles. That is the long run.", color: "#5b21b6", size: 16, weight: "bold" }
          ]
        }
      ]
    }
  }

  });
})();
