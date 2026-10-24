// Year 6 Mathematics Chapter 1 — Integers
// Year 7 Science 8.1 style: Key idea / Recall / Check only
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};

(function () {
  function step(narration, rule, quizQ, quizA, src, footer, theme) {
    var t =
      theme === "blue"
        ? { fill: "#eff6ff", stroke: "#2563eb", color: "#1d4ed8" }
        : theme === "green"
        ? { fill: "#ecfdf5", stroke: "#059669", color: "#065f46" }
        : { fill: "#fff7ed", stroke: "#ea580c", color: "#c2410c" };
    return {
      clear: true,
      narration: narration,
      rule: rule,
      quizQ: quizQ,
      quizA: quizA,
      elements: [
        { type: "image", src: src, x: 110, y: 18, width: 580, height: 326 },
        { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: t.fill, stroke: t.stroke, strokeWidth: 1.5, rx: 8 },
        { type: "text", x: 400, y: 389, text: footer, color: t.color, size: 14, weight: "bold" },
      ],
    };
  }

  function board(title, watermark, cards) {
    return {
      title: title,
      watermark: watermark,
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Recall" },
        { id: "card_2", label: "Check" },
      ],
      scenes: { card_0: [cards[0]], card_1: [cards[1]], card_2: [cards[2]] },
    };
  }

  Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, {
    "m6_1.1": board("1.1 Adding and subtracting integers", "Section 1.1: Number line", [
      step(
        "Integers are whole numbers: +, − or 0. Put them on a number line. To add, start at the first number. Hop right for + and left for −. 8 + −3: start at 8, hop 3 left, land on 5. −4 + 6: start at −4, hop 6 right, land on 2. −3 + −5: start at −3, hop 5 left, land on −8.",
        "Add: hop right for +, left for −.",
        "What are 8 + −3, −4 + 6 and −3 + −5?",
        "5, 2 and −8.",
        "assets/illustrations/m6_1_1_number_line_add.svg",
        "8 + −3 = 5   ·   −4 + 6 = 2   ·   −3 + −5 = −8",
        "orange"
      ),
      step(
        "Subtracting is adding the opposite. Flip the sign: 6 becomes −6, and −3 becomes 3. 2 − 6 = 2 + −6 = −4. −4 − −3 = −4 + 3 = −1. 2 − −4 = 2 + 4 = 6. Two minuses hug and turn into a plus!",
        "Take away = add the flip.",
        "What are 2 − 6, −4 − −3 and 2 − −4?",
        "−4, −1 and 6.",
        "assets/illustrations/m6_1_1_subtract_inverse.svg",
        "2 − 6 = 2 + −6 = −4   ·   −4 − −3 = −4 + 3 = −1",
        "blue"
      ),
      step(
        "Round first, then hop or flip. −48 + −73 is about −50 + −70 = −120. 123 − 393 is about 100 − 400 = −300. 6.15 − −4.87 is about 6 − −5 = 6 + 5 = 11.",
        "Round, then add or subtract.",
        "About what is −48 + −73? And 6.15 − −4.87?",
        "About −120 and about 11.",
        "assets/illustrations/m6_1_1_estimate_round.svg",
        "−50 + −70 = −120   ·   100 − 400 = −300   ·   6 + 5 = 11",
        "green"
      ),
    ]),
    "m6_1.2": board("1.2 Multiplying and dividing integers", "Section 1.2: Products", [
      step(
        "A product is the answer to a multiply. Different signs make a minus. Always! 6 × 4 = 24, so 6 × −4 = −24. 9 × 3 = 27, so −9 × 3 = −27.",
        "Different signs → minus.",
        "What are 6 × −4 and −9 × 3?",
        "−24 and −27.",
        "assets/illustrations/m6_1_2_negative_product.svg",
        "6 × −4 = −24   ·   −9 × 3 = −27",
        "orange"
      ),
      step(
        "÷ is just × played backwards. Mixed signs still make a minus. −3 × 4 = −12, so −12 ÷ 4 = −3. −20 ÷ 5 = −4. 20 ÷ −10 = −2.",
        "÷ undoes ×. Mixed signs → minus.",
        "What are −20 ÷ 5 and 20 ÷ −10?",
        "−4 and −2.",
        "assets/illustrations/m6_1_2_divide_inverse.svg",
        "−12 ÷ 4 = −3   ·   −20 ÷ 5 = −4   ·   20 ÷ −10 = −2",
        "blue"
      ),
      step(
        "Brackets are the boss! Tidy 1 + −4 first: that is −3. Then 5 × −3 = −15. Mixed signs keep the minus.",
        "Brackets first, then ×.",
        "What is 5 × (1 + −4)?",
        "1 + −4 = −3, then 5 × −3 = −15.",
        "assets/illustrations/m6_1_2_brackets_first.svg",
        "5 × (1 + −4) = 5 × −3 = −15",
        "green"
      ),
    ]),
    "m6_1.3": board("1.3 Lowest common multiples", "Section 1.3: LCM", [
      step(
        "Multiples are the times-table list. 4s: 4, 8, 12, 16…  6s: 6, 12, 18, 24… They first high-five at 12. That first shared number is the LCM. So LCM(4, 6) = 12.",
        "LCM = first shared multiple.",
        "What is the LCM of 4 and 6?",
        "12.",
        "assets/illustrations/m6_1_3_lcm_4_and_6.svg",
        "4: 4, 8, 12, …   ·   6: 6, 12, 18, …   ·   LCM = 12",
        "orange"
      ),
      step(
        "Write the 6s: 6, 12, 18, 24, 30… A 10 always ends in 0. 30 is the first 6 that ends in 0, so LCM(6, 10) = 30.",
        "List until the lists meet.",
        "What is the LCM of 6 and 10?",
        "30.",
        "assets/illustrations/m6_1_3_lcm_6_and_10.svg",
        "6, 12, 18, 24, 30   ·   30 ends in 0   ·   LCM = 30",
        "blue"
      ),
      step(
        "8s and 12s first meet at 24. 3, 4 and 6 all meet at 12. Watch out: 4 × 6 = 24 is shared, but the LCM is the first meet — 12, not 24.",
        "Times-them-together is shared — not always the LCM.",
        "What are LCM(8, 12) and LCM(3, 4, 6)?",
        "24 and 12.",
        "assets/illustrations/m6_1_3_lcm_check.svg",
        "LCM(8, 12) = 24   ·   LCM(3, 4, 6) = 12",
        "green"
      ),
    ]),
    "m6_1.4": board("1.4 Highest common factors", "Section 1.4: HCF", [
      step(
        "A factor splits a number with nothing left over. 18 splits as 1, 2, 3, 6, 9, 18. 27 splits as 1, 3, 9, 27. They share 1, 3 and 9. The biggest shared one is the HCF: 9.",
        "HCF = biggest shared factor.",
        "What is the HCF of 18 and 27?",
        "9.",
        "assets/illustrations/m6_1_4_hcf_18_and_27.svg",
        "18: 1, 2, 3, 6, 9, 18   ·   27: 1, 3, 9, 27   ·   HCF = 9",
        "orange"
      ),
      step(
        "Write the pairs. 28 = 1×28, 2×14, 4×7. 42 = 1×42, 2×21, 3×14, 6×7. They share 1, 2, 7 and 14. Biggest twin: 14.",
        "List pairs. Pick the largest twin.",
        "What is the HCF of 28 and 42?",
        "14.",
        "assets/illustrations/m6_1_4_hcf_28_and_42.svg",
        "28: 1, 2, 4, 7, 14, 28   ·   42: … 7, 14 …   ·   HCF = 14",
        "blue"
      ),
      step(
        "Use the HCF to shrink a fraction. 8 is the biggest factor of 16 that also fits 40. Divide top and bottom by 8: 16/40 becomes 2/5.",
        "Divide top and bottom by the HCF.",
        "Shrink 16/40 using the HCF.",
        "HCF is 8, so 16/40 = 2/5.",
        "assets/illustrations/m6_1_4_simplify_fraction.svg",
        "HCF(16, 40) = 8   ·   16/40 = 2/5",
        "green"
      ),
    ]),
    "m6_1.5": board("1.5 Tests for divisibility", "Section 1.5: Divisibility", [
      step(
        "Cheat codes! Even last digit → ÷ 2. Digit sum a 3-times number → ÷ 3. Last two digits ÷ 4 → ÷ 4. Last digit 0 or 5 → ÷ 5. 87654 ends in 4, so yes for 2, no for 5. Digit sum 30, so yes for 3. 54 leaves 2 when ÷ 4, so no.",
        "Last digits and digit sums are the cheat codes.",
        "Does 87654 split by 2, 3, 4 or 5?",
        "Yes for 2 and 3. No for 4 or 5.",
        "assets/illustrations/m6_1_5_tests_2_to_5.svg",
        "87654: yes 2, yes 3, no 4, no 5",
        "orange"
      ),
      step(
        "÷ 6 needs both 2 and 3 — 87654 has both. Last three digits 654 leave 6 when ÷ 8, so no. Digit sum 30 is not a 9. Last digit is not 0, so no for 10. Odd digits 18 minus even digits 12 is 6, so no for 11.",
        "6 needs 2 and 3. 11 uses odd minus even.",
        "Which of 6, 8, 9, 10, 11 split 87654?",
        "Only 6.",
        "assets/illustrations/m6_1_5_tests_6_to_11.svg",
        "87654: yes 6   ·   no 8, 9, 10, 11",
        "blue"
      ),
      step(
        "Be a detective. *7258 is missing a digit. For 11, * = 2 makes the odd and even digits match, so 27258 works. For 6, last digit 8 is even, and * is 2, 5 or 8. 66 needs both, so only * = 2.",
        "66 needs both the 6 test and the 11 test.",
        "When does *7258 pass 11, 6 and 66?",
        "11 when * = 2. 6 when * = 2, 5 or 8. 66 only when * = 2.",
        "assets/illustrations/m6_1_5_missing_digit.svg",
        "* = 2 for 11 and 66   ·   * = 2, 5 or 8 for 6",
        "green"
      ),
    ]),
    "m6_1.6": board("1.6 Square roots and cube roots", "Section 1.6: Roots", [
      step(
        "A square is a number times itself: 1, 4, 9, 16, 25… The little 2 means squared. 4² = 16, so √16 = 4. The root undoes the square. √100 is 10 and √81 is 9, so 10 − 9 = 1.",
        "A square root undoes a square.",
        "What is √100 − √81?",
        "10 − 9 = 1.",
        "assets/illustrations/m6_1_6_square_roots.svg",
        "√100 = 10   ·   √81 = 9   ·   10 − 9 = 1",
        "orange"
      ),
      step(
        "A cube is a number times itself three times: 1, 8, 27, 64… 2³ = 8, so ∛8 = 2. √64 is 8 and ∛64 is 4, so 8 ÷ 4 = 2.",
        "A cube root undoes a cube.",
        "What is √64 ÷ ∛64?",
        "8 ÷ 4 = 2.",
        "assets/illustrations/m6_1_6_cube_roots.svg",
        "√64 = 8   ·   ∛64 = 4   ·   8 ÷ 4 = 2",
        "blue"
      ),
      step(
        "Squeeze the number between two square neighbours. 8² = 64 and 9² = 81. 79 is almost 81, so √79 is almost 9. 14² = 196 and 15² = 225. 215 sits in the gap, so √215 is between 14 and 15.",
        "Squeeze it between two squares.",
        "What whole number is closest to √79? Where does √215 sit?",
        "9. Between 14 and 15.",
        "assets/illustrations/m6_1_6_estimate_roots.svg",
        "√79 ≈ 9   ·   14 < √215 < 15",
        "green"
      ),
    ]),
  });
})();
