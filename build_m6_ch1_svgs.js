const fs = require("fs");
const path = require("path");
const F = "Segoe UI, Arial, sans-serif";

function poster(title, sub, body, foot, subColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
<rect width="1600" height="900" fill="#ffffff"/>
<rect width="1600" height="92" fill="#0f172a"/>
<text x="800" y="62" text-anchor="middle" fill="#ffffff" font-family="${F}" font-size="40" font-weight="700" letter-spacing="2">${title}</text>
<text x="800" y="148" text-anchor="middle" fill="${subColor || "#ea580c"}" font-family="${F}" font-size="24" font-weight="600">${sub}</text>
${body}
<rect y="808" width="1600" height="92" fill="#0f172a"/>
<text x="800" y="864" text-anchor="middle" fill="#ffffff" font-family="${F}" font-size="22" font-weight="600">${foot}</text>
</svg>`;
}

function card(x, y, w, h, fill, stroke, title, lines, titleFill) {
  const rows = lines
    .map((line, i) => `<text x="${x + w / 2}" y="${y + 88 + i * 42}" text-anchor="middle" fill="#0f172a" font-family="${F}" font-size="${line.size || 26}" font-weight="${line.w || 700}">${line.t}</text>`)
    .join("\n");
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
<text x="${x + w / 2}" y="${y + 42}" text-anchor="middle" fill="${titleFill}" font-family="${F}" font-size="22" font-weight="700">${title}</text>
${rows}`;
}

function ticks(x0, y, from, to, stepPx) {
  let s = `<line x1="${x0}" y1="${y}" x2="${x0 + (to - from) * stepPx}" y2="${y}" stroke="#0f172a" stroke-width="4"/>`;
  for (let n = from; n <= to; n++) {
    const x = x0 + (n - from) * stepPx;
    s += `<line x1="${x}" y1="${y - 12}" x2="${x}" y2="${y + 12}" stroke="#0f172a" stroke-width="3"/>`;
    s += `<text x="${x}" y="${y + 38}" text-anchor="middle" fill="#334155" font-family="${F}" font-size="18" font-weight="700">${n}</text>`;
  }
  return s;
}

function hop(x0, from, to, y, stepPx, min, color, label) {
  const x1 = x0 + (from - min) * stepPx;
  const x2 = x0 + (to - min) * stepPx;
  const mid = (x1 + x2) / 2;
  return `<path d="M ${x1} ${y} Q ${mid} ${y - 70} ${x2} ${y}" fill="none" stroke="${color}" stroke-width="4"/>
<circle cx="${x1}" cy="${y}" r="8" fill="${color}"/>
<circle cx="${x2}" cy="${y}" r="10" fill="${color}"/>
<text x="${mid}" y="${y - 80}" text-anchor="middle" fill="${color}" font-family="${F}" font-size="22" font-weight="700">${label}</text>`;
}

const files = {};

files["m6_1_1_number_line_add.svg"] = poster(
  "ADDING INTEGERS",
  "Start at the first integer. Move right for +, left for −.",
  `${card(60, 180, 480, 590, "#fff7ed", "#ea580c", "8 + −3", [{ t: "Start at 8" }, { t: "Move 3 left → 5", size: 28 }], "#c2410c")}
  ${ticks(90, 600, 3, 10, 52)}
  ${hop(90, 8, 5, 600, 52, 3, "#ea580c", "−3")}
  ${card(560, 180, 480, 590, "#eff6ff", "#2563eb", "−4 + 6", [{ t: "Start at −4" }, { t: "Move 6 right → 2", size: 28 }], "#1d4ed8")}
  ${ticks(590, 600, -5, 3, 52)}
  ${hop(590, -4, 2, 600, 52, -5, "#2563eb", "+6")}
  ${card(1060, 180, 480, 590, "#ecfdf5", "#059669", "−3 + −5", [{ t: "Start at −3" }, { t: "Move 5 left → −8", size: 28 }], "#065f46")}
  ${ticks(1090, 600, -9, -2, 52)}
  ${hop(1090, -3, -8, 600, 52, -9, "#059669", "−5")}`,
  "KEY IDEA  |  Integers live on a number line  |  + right   − left"
);

files["m6_1_1_subtract_inverse.svg"] = poster(
  "SUBTRACT BY ADDING THE INVERSE",
  "The inverse of 6 is −6. The inverse of −3 is 3.",
  `${card(60, 186, 480, 580, "#eff6ff", "#2563eb", "2 − 6", [{ t: "Inverse of 6 is −6" }, { t: "2 − 6 = 2 + −6" }, { t: "2 + −6 = −4", size: 34 }], "#1d4ed8")}
  ${card(560, 186, 480, 580, "#fff7ed", "#ea580c", "−4 − −3", [{ t: "Inverse of −3 is 3" }, { t: "−4 − −3 = −4 + 3" }, { t: "−4 + 3 = −1", size: 34 }], "#c2410c")}
  ${card(1060, 186, 480, 580, "#ecfdf5", "#059669", "2 − −4", [{ t: "Inverse of −4 is 4" }, { t: "2 − −4 = 2 + 4" }, { t: "2 + 4 = 6", size: 34 }], "#065f46")}`,
  "RECALL  |  a − b = a + (inverse of b)",
  "#2563eb"
);

files["m6_1_1_estimate_round.svg"] = poster(
  "ESTIMATE BY ROUNDING",
  "Round first, then use the same add and inverse rules.",
  `${card(60, 186, 480, 580, "#fff7ed", "#ea580c", "Nearest 10", [{ t: "−48 + −73" }, { t: "≈ −50 + −70" }, { t: "= −120", size: 40 }], "#c2410c")}
  ${card(560, 186, 480, 580, "#eff6ff", "#2563eb", "Nearest 100", [{ t: "123 − 393" }, { t: "≈ 100 − 400" }, { t: "= −300", size: 40 }], "#1d4ed8")}
  ${card(1060, 186, 480, 580, "#ecfdf5", "#059669", "Nearest whole", [{ t: "6.15 − −4.87" }, { t: "≈ 6 − −5 = 6 + 5" }, { t: "= 11", size: 40 }], "#065f46")}`,
  "CHECK  |  −120   ·   −300   ·   11",
  "#059669"
);

files["m6_1_2_negative_product.svg"] = poster(
  "NEGATIVE PRODUCTS",
  "A positive times a negative is always negative.",
  `${card(80, 186, 680, 580, "#fff7ed", "#ea580c", "6 × −4", [{ t: "6 × 4 = 24" }, { t: "so 6 × −4 = −24", size: 36 }, { t: "Different signs → negative" }], "#c2410c")}
  ${card(840, 186, 680, 580, "#ecfdf5", "#059669", "−9 × 3", [{ t: "9 × 3 = 27" }, { t: "so −9 × 3 = −27", size: 36 }, { t: "−12 is the product of −3 and 4" }], "#065f46")}`,
  "KEY IDEA  |  Product of + and − is negative"
);

files["m6_1_2_divide_inverse.svg"] = poster(
  "DIVISION UNDOES MULTIPLICATION",
  "If one integer is + and the other is −, the answer is negative.",
  `${card(60, 186, 480, 580, "#eff6ff", "#2563eb", "Fact family", [{ t: "−3 × 4 = −12" }, { t: "so −12 ÷ 4 = −3", size: 30 }, { t: "12 ÷ 4 = 3" }], "#1d4ed8")}
  ${card(560, 186, 480, 580, "#fff7ed", "#ea580c", "−20 ÷ 5", [{ t: "20 ÷ 5 = 4" }, { t: "so −20 ÷ 5 = −4", size: 34 }], "#c2410c")}
  ${card(1060, 186, 480, 580, "#ecfdf5", "#059669", "20 ÷ −10", [{ t: "20 ÷ 10 = 2" }, { t: "so 20 ÷ −10 = −2", size: 34 }], "#065f46")}`,
  "RECALL  |  −12 ÷ 4 = −3   ·   −20 ÷ 5 = −4   ·   20 ÷ −10 = −2",
  "#2563eb"
);

files["m6_1_2_brackets_first.svg"] = poster(
  "BRACKETS FIRST",
  "Tidy the bracket, then multiply.",
  `${card(120, 186, 1360, 580, "#ecfdf5", "#059669", "5 × (1 + −4)", [{ t: "1 + −4 = −3", size: 36 }, { t: "5 × −3 = −15", size: 48 }, { t: "Mixed signs keep the product negative" }], "#065f46")}`,
  "CHECK  |  5 × (1 + −4) = −15",
  "#059669"
);

function chips(items, x, y, fill, stroke, color) {
  return items
    .map((n, i) => {
      const cx = x + (i % 5) * 88;
      const cy = y + Math.floor(i / 5) * 70;
      return `<rect x="${cx}" y="${cy}" width="76" height="56" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/><text x="${cx + 38}" y="${cy + 36}" text-anchor="middle" fill="${color}" font-family="${F}" font-size="22" font-weight="700">${n}</text>`;
    })
    .join("\n");
}

files["m6_1_3_lcm_4_and_6.svg"] = poster(
  "LOWEST COMMON MULTIPLE",
  "12 is the smallest number that is a multiple of both 4 and 6.",
  `<rect x="70" y="186" width="700" height="280" rx="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="420" y="232" text-anchor="middle" fill="#1d4ed8" font-family="${F}" font-size="24" font-weight="700">Multiples of 4</text>
  ${chips([4, 8, 12, 16, 20, 24, 28, 32, 36, 40], 110, 260, "#dbeafe", "#2563eb", "#1e3a8a")}
  <rect x="830" y="186" width="700" height="280" rx="18" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="1180" y="232" text-anchor="middle" fill="#c2410c" font-family="${F}" font-size="24" font-weight="700">Multiples of 6</text>
  ${chips([6, 12, 18, 24, 30, 36, 42], 870, 260, "#ffedd5", "#ea580c", "#9a3412")}
  <rect x="70" y="490" width="1460" height="280" rx="18" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
  <text x="800" y="548" text-anchor="middle" fill="#065f46" font-family="${F}" font-size="24" font-weight="700">Common multiples  12, 24, 36, …</text>
  <text x="800" y="640" text-anchor="middle" fill="#047857" font-family="${F}" font-size="48" font-weight="700">LCM(4, 6) = 12</text>
  <text x="800" y="720" text-anchor="middle" fill="#334155" font-family="${F}" font-size="22">4 × 1, 4 × 2, 4 × 3, …</text>`,
  "KEY IDEA  |  LCM is the first shared multiple"
);

files["m6_1_3_lcm_6_and_10.svg"] = poster(
  "LCM OF 6 AND 10",
  "A multiple of 10 ends in 0. The first multiple of 6 that ends in 0 is 30.",
  `${card(80, 186, 1440, 580, "#eff6ff", "#2563eb", "Multiples of 6", [{ t: "6,  12,  18,  24,  30,  36, …", size: 36 }, { t: "30 ends in 0, so it is a multiple of 10", size: 28 }, { t: "LCM(6, 10) = 30", size: 48 }], "#1d4ed8")}`,
  "RECALL  |  30 is the lowest common multiple",
  "#2563eb"
);

files["m6_1_3_lcm_check.svg"] = poster(
  "MORE LCM EXAMPLES",
  "A × B is a common multiple — not always the lowest.",
  `${card(60, 186, 720, 580, "#ecfdf5", "#059669", "LCM(8, 12)", [{ t: "8: 8, 16, 24, 32, …" }, { t: "12: 12, 24, 36, …" }, { t: "LCM = 24", size: 40 }], "#065f46")}
  ${card(820, 186, 720, 580, "#fff7ed", "#ea580c", "LCM(3, 4, 6)", [{ t: "First shared by all three" }, { t: "3, 4 and 6 all divide 12" }, { t: "LCM = 12", size: 40 }], "#c2410c")}`,
  "CHECK  |  LCM(8, 12) = 24   ·   LCM(3, 4, 6) = 12   ·   4 × 6 = 24 is not the LCM",
  "#059669"
);

files["m6_1_4_hcf_18_and_27.svg"] = poster(
  "HIGHEST COMMON FACTOR",
  "9 is the largest factor of both 18 and 27.",
  `<rect x="70" y="186" width="700" height="280" rx="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="420" y="232" text-anchor="middle" fill="#1d4ed8" font-family="${F}" font-size="24" font-weight="700">Factors of 18</text>
  ${chips([1, 2, 3, 6, 9, 18], 140, 280, "#dbeafe", "#2563eb", "#1e3a8a")}
  <text x="420" y="430" text-anchor="middle" fill="#334155" font-family="${F}" font-size="20">18 = 1×18 or 2×9 or 3×6</text>
  <rect x="830" y="186" width="700" height="280" rx="18" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="1180" y="232" text-anchor="middle" fill="#c2410c" font-family="${F}" font-size="24" font-weight="700">Factors of 27</text>
  ${chips([1, 3, 9, 27], 900, 280, "#ffedd5", "#ea580c", "#9a3412")}
  <rect x="70" y="490" width="1460" height="280" rx="18" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
  <text x="800" y="548" text-anchor="middle" fill="#065f46" font-family="${F}" font-size="24" font-weight="700">Common factors  1, 3, 9</text>
  <text x="800" y="660" text-anchor="middle" fill="#047857" font-family="${F}" font-size="48" font-weight="700">HCF(18, 27) = 9</text>`,
  "KEY IDEA  |  HCF is the largest shared factor"
);

files["m6_1_4_hcf_28_and_42.svg"] = poster(
  "HCF OF 28 AND 42",
  "List factor pairs, then pick the largest number in both lists.",
  `${card(60, 186, 720, 580, "#eff6ff", "#2563eb", "28", [{ t: "1 × 28   2 × 14   4 × 7", size: 24 }, { t: "1, 2, 4, 7, 14, 28", size: 28 }], "#1d4ed8")}
  ${card(820, 186, 720, 580, "#ecfdf5", "#059669", "42", [{ t: "1 × 42   2 × 21   3 × 14   6 × 7", size: 22 }, { t: "1, 2, 3, 6, 7, 14, 21, 42", size: 26 }, { t: "Common: 1, 2, 7, 14", size: 26 }, { t: "HCF = 14", size: 40 }], "#065f46")}`,
  "RECALL  |  HCF(28, 42) = 14",
  "#2563eb"
);

files["m6_1_4_simplify_fraction.svg"] = poster(
  "SIMPLIFY WITH THE HCF",
  "Divide the top and the bottom by the HCF.",
  `${card(80, 186, 700, 580, "#fff7ed", "#ea580c", "HCF(16, 40)", [{ t: "16: 1, 2, 4, 8, 16" }, { t: "8 × 5 = 40" }, { t: "HCF = 8", size: 40 }], "#c2410c")}
  ${card(820, 186, 700, 580, "#ecfdf5", "#059669", "16 / 40", [{ t: "16 ÷ 8 = 2" }, { t: "40 ÷ 8 = 5" }, { t: "16/40 = 2/5", size: 40 }], "#065f46")}`,
  "CHECK  |  HCF 8   ·   16/40 = 2/5",
  "#059669"
);

function row(y, label, ok, why) {
  const bg = ok ? "#ecfdf5" : "#fef2f2";
  const st = ok ? "#059669" : "#dc2626";
  const tag = ok ? "YES" : "NO";
  const tc = ok ? "#065f46" : "#991b1b";
  return `<rect x="80" y="${y}" width="1440" height="88" rx="14" fill="${bg}" stroke="${st}" stroke-width="2"/>
  <text x="180" y="${y + 54}" text-anchor="middle" fill="${tc}" font-family="${F}" font-size="28" font-weight="700">${label}</text>
  <text x="360" y="${y + 54}" fill="${tc}" font-family="${F}" font-size="26" font-weight="700">${tag}</text>
  <text x="500" y="${y + 54}" fill="#334155" font-family="${F}" font-size="24">${why}</text>`;
}

files["m6_1_5_tests_2_to_5.svg"] = poster(
  "TESTS FOR 2, 3, 4 AND 5",
  "Try 87654. A number is divisible when there is no remainder.",
  `${row(186, "÷ 2", true, "Last digit 4 is even")}
  ${row(294, "÷ 3", true, "Digit sum 8+7+6+5+4 = 30 = 10 × 3")}
  ${row(402, "÷ 4", false, "Last two digits 54 ÷ 4 = 13 r 2")}
  ${row(510, "÷ 5", false, "Last digit is 4, not 0 or 5")}
  <text x="800" y="680" text-anchor="middle" fill="#0f172a" font-family="${F}" font-size="26" font-weight="700">30 is divisible by 2, 3 and 5. 30 ÷ 4 = 7 r 2.</text>`,
  "KEY IDEA  |  87654 is divisible by 2 and 3, not by 4 or 5"
);

files["m6_1_5_tests_6_to_11.svg"] = poster(
  "TESTS FOR 6, 8, 9, 10 AND 11",
  "Keep using 87654.",
  `${row(180, "÷ 6", true, "Divisible by 2 and by 3")}
  ${row(276, "÷ 8", false, "Last three digits 654 ÷ 8 = 81 r 6")}
  ${row(372, "÷ 9", false, "Digit sum 30 is not divisible by 9")}
  ${row(468, "÷10", false, "Last digit is not 0")}
  ${row(564, "÷11", false, "Odd digits 18 − even digits 12 = 6")}`,
  "RECALL  |  Only the test for 6 passes",
  "#2563eb"
);

files["m6_1_5_missing_digit.svg"] = poster(
  "MISSING DIGIT  *7258",
  "Combine the tests for 6, 11 and 66.",
  `${card(60, 186, 480, 580, "#eff6ff", "#2563eb", "÷ 11", [{ t: "Odd: 8+2+* = 10+*" , size: 22 }, { t: "Even: 5+7 = 12", size: 22 }, { t: "* = 2 → difference 0", size: 22 }, { t: "27258 works", size: 28 }], "#1d4ed8")}
  ${card(560, 186, 480, 580, "#fff7ed", "#ea580c", "÷ 6", [{ t: "Last digit 8 → ÷ 2", size: 22 }, { t: "* + 22 is a multiple of 3", size: 20 }, { t: "* = 2, 5 or 8", size: 28 }], "#c2410c")}
  ${card(1060, 186, 480, 580, "#ecfdf5", "#059669", "÷ 66", [{ t: "Needs ÷ 6 and ÷ 11" }, { t: "Only * = 2", size: 36 }], "#065f46")}`,
  "CHECK  |  11 and 66 when * = 2   ·   6 when * = 2, 5 or 8",
  "#059669"
);

files["m6_1_6_square_roots.svg"] = poster(
  "SQUARE NUMBERS AND SQUARE ROOTS",
  "4² = 16 is equivalent to 4 = √16.",
  `${card(60, 186, 720, 580, "#fff7ed", "#ea580c", "Squares", [{ t: "1² = 1    2² = 4    3² = 9", size: 26 }, { t: "4² = 16    5² = 25", size: 26 }, { t: "Square numbers: 1, 4, 9, 16, 25, …", size: 22 }], "#c2410c")}
  ${card(820, 186, 720, 580, "#ecfdf5", "#059669", "√100 − √81", [{ t: "10² = 100 so √100 = 10" }, { t: "9² = 81 so √81 = 9" }, { t: "10 − 9 = 1", size: 44 }], "#065f46")}`,
  "KEY IDEA  |  A square root undoes a square"
);

files["m6_1_6_cube_roots.svg"] = poster(
  "CUBE NUMBERS AND CUBE ROOTS",
  "2³ = 8, so 2 is the cube root of 8.",
  `${card(60, 186, 720, 580, "#eff6ff", "#2563eb", "Cubes", [{ t: "1³ = 1" }, { t: "2³ = 8" }, { t: "3³ = 27" }, { t: "4³ = 64" }], "#1d4ed8")}
  ${card(820, 186, 720, 580, "#ecfdf5", "#059669", "√64 ÷ ∛64", [{ t: "8² = 64 so √64 = 8" }, { t: "4³ = 64 so ∛64 = 4" }, { t: "8 ÷ 4 = 2", size: 44 }], "#065f46")}`,
  "RECALL  |  √64 ÷ ∛64 = 2",
  "#2563eb"
);

files["m6_1_6_estimate_roots.svg"] = poster(
  "ESTIMATE A SQUARE ROOT",
  "Trap the number between two neighbouring squares.",
  `${card(60, 186, 720, 580, "#fff7ed", "#ea580c", "√79", [{ t: "8² = 64    9² = 81" }, { t: "79 is much closer to 81" }, { t: "closest integer is 9", size: 30 }], "#c2410c")}
  ${card(820, 186, 720, 580, "#eff6ff", "#2563eb", "√215", [{ t: "14² = 196    15² = 225" }, { t: "215 sits between them" }, { t: "14 < √215 < 15", size: 30 }], "#1d4ed8")}`,
  "CHECK  |  √79 ≈ 9   ·   14 < √215 < 15",
  "#059669"
);

const ill = path.join(__dirname, "assets", "illustrations");
const chap = path.join(__dirname, "images", "reader", "y6");
fs.mkdirSync(ill, { recursive: true });
fs.mkdirSync(chap, { recursive: true });
Object.entries(files).forEach(([name, svg]) => fs.writeFileSync(path.join(ill, name), svg));

fs.writeFileSync(
  path.join(chap, "chapter-m1.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" width="1200" height="720">
<rect width="1200" height="720" fill="#f8fafc"/>
<text x="72" y="92" fill="#0f172a" font-family="${F}" font-size="48" font-weight="700">1 Integers</text>
<text x="72" y="148" fill="#ea580c" font-family="${F}" font-size="24" font-weight="600">Positive and negative whole numbers, together with zero</text>
<line x1="80" y1="360" x2="1120" y2="360" stroke="#0f172a" stroke-width="5"/>
${[-8, -6, -4, -2, 0, 2, 4, 6, 8]
    .map((n) => {
      const x = 600 + n * 56;
      return `<line x1="${x}" y1="344" x2="${x}" y2="376" stroke="#0f172a" stroke-width="3"/><text x="${x}" y="416" text-anchor="middle" fill="#334155" font-family="${F}" font-size="22" font-weight="700">${n}</text>`;
    })
    .join("")}
<circle cx="600" cy="360" r="10" fill="#ea580c"/>
<rect x="80" y="500" width="320" height="140" rx="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="240" y="560" text-anchor="middle" fill="#1d4ed8" font-family="${F}" font-size="22" font-weight="700">Add on a number line</text>
<text x="240" y="604" text-anchor="middle" fill="#0f172a" font-family="${F}" font-size="20">−4 + 6 = 2</text>
<rect x="440" y="500" width="320" height="140" rx="18" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
<text x="600" y="560" text-anchor="middle" fill="#c2410c" font-family="${F}" font-size="22" font-weight="700">LCM and HCF</text>
<text x="600" y="604" text-anchor="middle" fill="#0f172a" font-family="${F}" font-size="20">LCM 12   ·   HCF 9</text>
<rect x="800" y="500" width="320" height="140" rx="18" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
<text x="960" y="560" text-anchor="middle" fill="#065f46" font-family="${F}" font-size="22" font-weight="700">Roots</text>
<text x="960" y="604" text-anchor="middle" fill="#0f172a" font-family="${F}" font-size="20">√100 − √81 = 1</text>
</svg>`
);

console.log("wrote", Object.keys(files).length + 1, "svgs");
