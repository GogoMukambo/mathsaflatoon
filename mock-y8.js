window.MOCK_DURATION_MS = 60 * 60 * 1000;
window.MOCK_LENGTH = 20;
window.MOCK_API = "http://127.0.0.1:5181";

window.MOCK_BANK = {
  maths: [
    { id: "mm1", source: "Stage 9 mock pack — Number", prompt: "Write 6 400 000 in standard form.", answer: "6.4 × 10⁶", acceptAny: ["6.4 x 10^6", "6.4 × 10^6", "6.4x10^6"] },
    { id: "mm2", source: "Stage 9 mock pack — Number", prompt: "Write 0.00052 in standard form.", answer: "5.2 × 10⁻⁴", acceptAny: ["5.2 x 10^-4", "5.2 × 10^-4", "5.2x10^-4"] },
    { id: "mm3", source: "Stage 9 mock pack — Indices", prompt: "Evaluate 2⁵ × 2⁻².", answer: "8", numeric: 8, acceptAny: ["8", "2^3"] },
    { id: "mm4", source: "Stage 9 mock pack — Indices", prompt: "Evaluate 3⁻² as a fraction.", answer: "1/9", acceptAny: ["1/9"] },
    { id: "mm5", source: "Stage 9 mock pack — Algebra", prompt: "Expand (x + 4)(x − 3).", answer: "x² + x − 12", acceptAny: ["x^2 + x - 12", "x²+x-12"] },
    { id: "mm6", source: "Stage 9 mock pack — Algebra", prompt: "Solve 5x − 9 = 16.", answer: "x = 5", numeric: 5, acceptAny: ["5"] },
    { id: "mm7", source: "Stage 9 mock pack — Simultaneous", prompt: "Solve x + y = 12 and x − y = 4. Give x and y.", answer: "x = 8, y = 4", acceptAll: ["8", "4"] },
    { id: "mm8", source: "Stage 9 mock pack — Inequalities", prompt: "Solve 3x + 2 ≤ 14.", answer: "x ≤ 4", acceptAny: ["x ≤ 4", "x<=4", "x < = 4"] },
    { id: "mm9", source: "Stage 9 mock pack — Percentages", prompt: "A jacket costs £80. It is reduced by 15%. What is the new price?", answer: "£68", numeric: 68, acceptAny: ["68"] },
    { id: "mm10", source: "Stage 9 mock pack — Percentages", prompt: "£250 is increased by 8%, then by another 8%. What is the final amount?", answer: "£291.60", numeric: 291.6, acceptAny: ["291.60", "291.6"] },
    { id: "mm11", source: "Stage 9 mock pack — Pythagoras", prompt: "A right-angled triangle has legs 9 cm and 12 cm. Find the hypotenuse.", answer: "15 cm", numeric: 15, acceptAny: ["15"] },
    { id: "mm12", source: "Stage 9 mock pack — Circles", prompt: "A circle has radius 5 cm. Find the area in terms of π.", answer: "25π cm²", acceptAny: ["25π", "25pi", "25 π"] },
    { id: "mm13", source: "Stage 9 mock pack — Circles", prompt: "A circle has diameter 14 cm. Find the circumference in terms of π.", answer: "14π cm", acceptAny: ["14π", "14pi"] },
    { id: "mm14", source: "Stage 9 mock pack — Fractions", prompt: "Calculate 2/3 ÷ 4/9. Give your answer in its simplest form.", answer: "3/2", acceptAny: ["3/2", "1.5", "1 1/2"] },
    { id: "mm15", source: "Stage 9 mock pack — Sequences", prompt: "The nth term of a sequence is 4n − 1. Find the 12th term.", answer: "47", numeric: 47 },
    { id: "mm16", source: "Stage 9 mock pack — Sequences", prompt: "Find the nth term of 7, 10, 13, 16, …", answer: "3n + 4", acceptAny: ["3n+4", "3n + 4"] },
    { id: "mm17", source: "Stage 9 mock pack — Graphs", prompt: "A line has gradient 2 and y-intercept −5. Write its equation.", answer: "y = 2x − 5", acceptAny: ["y=2x-5", "y = 2x - 5"] },
    { id: "mm18", source: "Stage 9 mock pack — Ratio", prompt: "Share £90 in the ratio 2 : 7. What is the smaller share?", answer: "£20", numeric: 20, acceptAny: ["20"] },
    { id: "mm19", source: "Stage 9 mock pack — Proportion", prompt: "y is directly proportional to x. When x = 5, y = 20. Find y when x = 8.", answer: "32", numeric: 32 },
    { id: "mm20", source: "Stage 9 mock pack — Probability", prompt: "A fair coin is tossed and a fair six-sided die is rolled. What is P(head and a 6)?", answer: "1/12", acceptAny: ["1/12"] },
    { id: "mm21", source: "Stage 9 mock pack — Probability", prompt: "Events A and B are mutually exclusive. P(A) = 0.3 and P(B) = 0.25. Find P(A or B).", answer: "0.55", numeric: 0.55, acceptAny: ["0.55", "11/20"] },
    { id: "mm22", source: "Stage 9 mock pack — Midpoint", prompt: "Find the midpoint of (2, −4) and (10, 6).", answer: "(6, 1)", acceptAny: ["(6, 1)", "(6,1)", "6,1"] },
    { id: "mm23", source: "Stage 9 mock pack — Volume", prompt: "A cuboid measures 4 cm by 5 cm by 6 cm. Find its volume.", answer: "120 cm³", numeric: 120, acceptAny: ["120"] },
    { id: "mm24", source: "Stage 9 mock pack — Cylinder", prompt: "A cylinder has radius 3 cm and height 10 cm. Write the volume in terms of π.", answer: "90π cm³", acceptAny: ["90π", "90pi"] },
    { id: "mm25", source: "Stage 9 mock pack — Compound area", prompt: "A rectangle 10 cm by 6 cm has a 2 cm by 2 cm square cut from one corner. Find the remaining area.", answer: "56 cm²", numeric: 56, acceptAny: ["56"] },
    { id: "mm26", source: "Stage 9 mock pack — Polygons", prompt: "Find the sum of the interior angles of a regular octagon.", answer: "1080°", numeric: 1080, acceptAny: ["1080"] },
    { id: "mm27", source: "Stage 9 mock pack — Polygons", prompt: "Find one exterior angle of a regular hexagon.", answer: "60°", numeric: 60, acceptAny: ["60"] },
    { id: "mm28", source: "Stage 9 mock pack — Bounds", prompt: "A length is 18 cm to the nearest centimetre. Write the lower bound.", answer: "17.5 cm", numeric: 17.5, acceptAny: ["17.5"] },
    { id: "mm29", source: "Stage 9 mock pack — Formulae", prompt: "Make t the subject of v = u + at.", answer: "t = (v − u)/a", acceptAny: ["(v-u)/a", "(v − u)/a", "t=(v-u)/a"] },
    { id: "mm30", source: "Stage 9 mock pack — Scatter", prompt: "If two variables have a strong negative correlation, what happens to y as x increases?", answer: "y tends to decrease", acceptAny: ["decrease", "falls", "goes down", "reduces"] },
  ],
};

window.MOCK_SUBJECTS = [
  { id: "science", title: "Science", blurb: "1 hour mock from the Science paper folders." },
  { id: "maths", title: "Mathematics", blurb: "1 hour mock from the Mathematics paper folders." },
];

window.QUIZ_BANK = window.QUIZ_BANK || {};
window.QUIZ_BANK.maths = window.MOCK_BANK.maths;
window.QUIZ_SUBJECTS = (window.QUIZ_SUBJECTS || []).concat([
  { id: "maths", title: "Mathematics", blurb: "Number, algebra, geometry and statistics." },
]);

(function tagMathsQuizUnits() {
  const map = {
    mm1: "m1",
    mm2: "m1",
    mm3: "m1",
    mm4: "m1",
    mm5: "m2",
    mm29: "m2",
    mm9: "m3",
    mm10: "m3",
    mm28: "m3",
    mm6: "m4",
    mm7: "m4",
    mm8: "m4",
    mm11: "m5",
    mm26: "m5",
    mm27: "m5",
    mm12: "m7",
    mm13: "m7",
    mm25: "m7",
    mm14: "m8",
    mm15: "m9",
    mm16: "m9",
    mm17: "m10",
    mm18: "m11",
    mm19: "m11",
    mm20: "m12",
    mm21: "m12",
    mm22: "m13",
    mm23: "m14",
    mm24: "m14",
    mm30: "m15",
  };
  ((window.MOCK_BANK && window.MOCK_BANK.maths) || []).forEach((q) => {
    if (map[q.id]) q.unitIds = [map[q.id]];
  });
})();

window.scienceMockPool = function () {
  const bank = window.QUIZ_BANK || {};
  return ["biology", "chemistry", "physics"].flatMap((key) => bank[key] || []);
};
