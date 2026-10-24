const fs = require("fs");
const path = require("path");

const dir = path.join("images", "reader", "y8");
fs.mkdirSync(dir, { recursive: true });

const BG = "#f6f1e6";
const INK = "#1e293b";
const BLUE = "#2563eb";
const TEAL = "#0f766e";
const GOLD = "#d97706";
const RED = "#dc2626";
const GREEN = "#059669";
const PALE_BLUE = "#dbeafe";
const PALE_GOLD = "#fde68a";
const PALE_TEAL = "#ccfbf1";

function svg(body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" width="1200" height="720">
  <rect width="1200" height="720" fill="${BG}"/>
  ${body}
</svg>
`;
}

function title(text) {
  return `<text x="72" y="108" fill="${INK}" font-family="Plus Jakarta Sans, Segoe UI, sans-serif" font-size="54" font-weight="700">${text}</text>`;
}

function caption(text) {
  return `<text x="600" y="640" text-anchor="middle" fill="${INK}" font-family="Plus Jakarta Sans, Segoe UI, sans-serif" font-size="36" font-weight="700">${text}</text>`;
}

function t(x, y, text, fill, size, anchor) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor || "middle"}" fill="${fill}" font-family="Plus Jakarta Sans, Segoe UI, sans-serif" font-size="${size}" font-weight="700">${text}</text>`;
}

const chapters = {
  m1: svg(`
    ${title("1 Number")}
    <circle cx="300" cy="340" r="78" fill="none" stroke="${RED}" stroke-width="8"/>
    ${t(300, 354, "π", RED, 64)}
    <circle cx="520" cy="340" r="78" fill="none" stroke="${TEAL}" stroke-width="8"/>
    ${t(520, 354, "√2", TEAL, 52)}
    <rect x="680" y="270" width="420" height="140" rx="28" fill="${PALE_GOLD}"/>
    ${t(890, 354, "4.5 × 10⁴", INK, 42)}
    ${caption("standard form and surds")}
  `),
  m2: svg(`
    ${title("2 Expressions")}
    <rect x="220" y="230" width="760" height="250" rx="32" fill="${PALE_BLUE}"/>
    ${t(600, 330, "(x + 3)(x + 5)", BLUE, 48)}
    ${t(600, 410, "= x² + 8x + 15", TEAL, 42)}
    ${caption("expand two brackets")}
  `),
  m3: svg(`
    ${title("3 Decimals")}
    ${t(430, 300, "0.307", INK, 52)}
    ${t(430, 390, "0.320", TEAL, 52)}
    <rect x="700" y="280" width="360" height="100" rx="24" fill="${PALE_GOLD}"/>
    ${t(880, 342, "× 1.10", GOLD, 40)}
    ${caption("line up the decimal point")}
  `),
  m4: svg(`
    ${title("4 Equations")}
    <rect x="150" y="250" width="340" height="140" rx="28" fill="${PALE_BLUE}"/>
    ${t(320, 332, "2x + 3", BLUE, 46)}
    ${t(580, 332, "=", INK, 56)}
    <rect x="680" y="250" width="340" height="140" rx="28" fill="${PALE_TEAL}"/>
    ${t(850, 332, "11", TEAL, 56)}
    <line x1="260" y1="500" x2="940" y2="500" stroke="${INK}" stroke-width="6"/>
    <circle cx="620" cy="500" r="12" fill="${RED}"/>
    ${t(620, 460, "x &gt; 2", RED, 28)}
    ${caption("keep both sides equal")}
  `),
  m5: svg(`
    ${title("5 Angles")}
    <line x1="180" y1="280" x2="1020" y2="280" stroke="${BLUE}" stroke-width="8"/>
    <line x1="180" y1="460" x2="1020" y2="460" stroke="${BLUE}" stroke-width="8"/>
    <line x1="420" y1="180" x2="780" y2="560" stroke="${GOLD}" stroke-width="8"/>
    <path d="M 560 280 A 36 36 0 0 1 590 312" fill="none" stroke="${RED}" stroke-width="6"/>
    <path d="M 690 460 A 36 36 0 0 0 658 424" fill="none" stroke="${RED}" stroke-width="6"/>
    ${caption("equal angles on parallel lines")}
  `),
  m6: svg(`
    ${title("6 Statistics")}
    ${dots()}
    ${caption("ask a fair sample")}
  `),
  m7: svg(`
    ${title("7 Shapes")}
    <circle cx="430" cy="360" r="130" fill="none" stroke="${BLUE}" stroke-width="8"/>
    <line x1="300" y1="360" x2="560" y2="360" stroke="${RED}" stroke-width="6"/>
    ${t(430, 336, "d", RED, 32)}
    <rect x="680" y="270" width="400" height="180" rx="28" fill="${PALE_GOLD}"/>
    ${t(880, 345, "A = πr²", INK, 48)}
    ${t(880, 405, "C = πd", TEAL, 32)}
    ${caption("circumference and area")}
  `),
  m8: svg(`
    ${title("8 Fractions")}
    <rect x="180" y="280" width="150" height="150" rx="18" fill="${TEAL}"/>
    <rect x="346" y="280" width="150" height="150" rx="18" fill="${TEAL}"/>
    <rect x="512" y="280" width="150" height="150" rx="18" fill="${TEAL}"/>
    <rect x="678" y="280" width="150" height="150" rx="18" fill="#e7e0d2"/>
    ${t(560, 500, "3 / 4", INK, 40)}
    ${caption("parts of a whole")}
  `),
  m9: svg(`
    ${title("9 Sequences")}
    ${seqBox(180, "4")}
    ${seqBox(400, "7")}
    ${seqBox(620, "10")}
    ${seqBox(840, "13")}
    ${t(320, 300, "+3", GOLD, 28)}
    ${t(540, 300, "+3", GOLD, 28)}
    ${t(760, 300, "+3", GOLD, 28)}
    ${caption("find the nth term")}
  `),
  m10: svg(`
    ${title("10 Graphs")}
    <line x1="280" y1="540" x2="280" y2="200" stroke="${INK}" stroke-width="6"/>
    <line x1="280" y1="540" x2="980" y2="540" stroke="${INK}" stroke-width="6"/>
    <line x1="280" y1="480" x2="860" y2="220" stroke="${BLUE}" stroke-width="8"/>
    <circle cx="280" cy="480" r="10" fill="${RED}"/>
    ${t(720, 180, "y = 2x + 1", BLUE, 32)}
    ${caption("gradient and intercept")}
  `),
  m11: svg(`
    ${title("11 Ratio")}
    ${blocks(250, 3, GOLD)}
    ${blocks(560, 5, TEAL)}
    ${t(355, 500, "3 parts", GOLD, 32)}
    ${t(760, 500, "5 parts", TEAL, 32)}
    ${caption("share in a ratio")}
  `),
  m12: svg(`
    ${title("12 Probability")}
    <line x1="180" y1="360" x2="1020" y2="360" stroke="${INK}" stroke-width="8"/>
    <circle cx="180" cy="360" r="14" fill="${INK}"/>
    <circle cx="1020" cy="360" r="14" fill="${INK}"/>
    <circle cx="390" cy="360" r="16" fill="${RED}"/>
    ${t(180, 430, "0", INK, 32)}
    ${t(1020, 430, "1", INK, 32)}
    ${t(390, 300, "1/6", RED, 36)}
    ${caption("equally likely outcomes")}
  `),
  m13: svg(`
    ${title("13 Position")}
    <polygon points="280,460 280,280 420,280 420,360 520,360 520,460" fill="${PALE_BLUE}" stroke="${BLUE}" stroke-width="6"/>
    <polygon points="920,460 920,280 780,280 780,360 680,360 680,460" fill="${PALE_GOLD}" stroke="${GOLD}" stroke-width="6"/>
    ${t(400, 520, "shape", BLUE, 28)}
    ${t(800, 520, "reflection", GOLD, 28)}
    ${caption("reflect and rotate")}
  `),
  m14: svg(`
    ${title("14 Volume")}
    <polygon points="300,420 620,420 620,240 300,240" fill="${PALE_BLUE}" stroke="${BLUE}" stroke-width="6"/>
    <polygon points="620,420 820,340 820,160 620,240" fill="${PALE_TEAL}" stroke="${TEAL}" stroke-width="6"/>
    <polygon points="300,240 620,240 820,160 500,160" fill="${PALE_GOLD}" stroke="${GOLD}" stroke-width="6"/>
    ${t(460, 340, "V = area × length", INK, 28)}
    ${caption("volume of a prism")}
  `),
  m15: svg(`
    ${title("15 Results")}
    <line x1="240" y1="520" x2="980" y2="520" stroke="${INK}" stroke-width="6"/>
    <rect x="320" y="360" width="90" height="160" rx="12" fill="${BLUE}"/>
    <rect x="500" y="250" width="90" height="270" rx="12" fill="${TEAL}"/>
    <rect x="680" y="300" width="90" height="220" rx="12" fill="${GOLD}"/>
    ${t(365, 560, "A", INK, 28)}
    ${t(545, 560, "B", INK, 28)}
    ${t(725, 560, "C", INK, 28)}
    ${caption("compare the data")}
  `),
};

function dots() {
  let out = "";
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 8; col++) {
      const i = row * 8 + col;
      const hot = [2, 5, 9, 14, 20, 27].includes(i);
      const cx = 280 + col * 80;
      const cy = 230 + row * 80;
      out += `<circle cx="${cx}" cy="${cy}" r="22" fill="${hot ? GOLD : BLUE}"/>`;
    }
  }
  return out;
}

function seqBox(x, label) {
  return `<rect x="${x}" y="330" width="140" height="110" rx="22" fill="${PALE_BLUE}" stroke="${BLUE}" stroke-width="4"/>${t(x + 70, 398, label, BLUE, 40)}`;
}

function blocks(x, count, fill) {
  let out = "";
  for (let i = 0; i < count; i++) {
    out += `<rect x="${x + i * 78}" y="280" width="64" height="140" rx="14" fill="${fill}"/>`;
  }
  return out;
}

for (const [id, markup] of Object.entries(chapters)) {
  fs.writeFileSync(path.join(dir, `chapter-${id}.svg`), markup, "utf8");
}
console.log("wrote", Object.keys(chapters).length, "chapter pictures");
