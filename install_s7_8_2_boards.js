const fs = require("fs");

function scene(img, narration, rule, quizQ, quizA, footerText, footerFill, footerStroke, footerColor) {
  return {
    clear: true,
    narration,
    rule,
    quizQ,
    quizA,
    elements: [
      { type: "image", src: img, x: 90, y: 12, width: 620, height: 340 },
      {
        type: "rect",
        x: 40,
        y: 362,
        width: 720,
        height: 48,
        fill: footerFill,
        stroke: footerStroke,
        strokeWidth: 1.5,
        rx: 8,
      },
      { type: "text", x: 400, y: 391, text: footerText, color: footerColor, size: 14, weight: "bold" },
    ],
  };
}

const pills = [
  { id: "card_0", label: "Key idea" },
  { id: "card_1", label: "Recall" },
  { id: "card_2", label: "Check" },
];

const boards = {
  "s7_8.2": {
    title: "8.2 Endothermic reactions",
    watermark: "Section 8.2: Energy taken in",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_8_2_citric_bicarb_cooling.jpg",
          "Endothermic means energy enters the reaction from the surroundings. Thermal energy is stored in new chemical bonds, so the temperature at the end is lower than at the start. In the book practical you add sodium hydrogen carbonate (bicarbonate) to citric acid or lemon juice. The tube fizzes (carbon dioxide) and feels cooler. ΔT = T final minus T initial. A negative ΔT means endothermic. Do not stir with the thermometer.",
          "Endo = enter. Temperature of surroundings goes down.",
          "What is an endothermic reaction?",
          "A chemical change that takes in thermal energy from the surroundings and stores it in chemical bonds, so the temperature falls.",
          "citric acid + sodium hydrogen carbonate → cooler + CO₂ bubbles",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_8_2_sherbet_sweets.jpg",
          "Sherbet sweets are dry citric acid mixed with sodium hydrogen carbonate. Your saliva wets them so they react in your mouth — the same reaction as the test tube. That is why sherbet feels cool and fizzy: energy is taken from your mouth (the surroundings) and carbon dioxide bubbles form. Reactants: citric acid and sodium hydrogen carbonate. Products: sodium citrate, water and carbon dioxide.",
          "Sherbet = the school reaction happening on your tongue.",
          "Why does sherbet make your mouth feel cooler?",
          "The acid and bicarbonate react. The reaction is endothermic, so it takes thermal energy from your mouth. The fizz is carbon dioxide gas.",
          "Word equation: bicarbonate + citric acid → citrate + water + CO₂",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_8_2_cold_pack_ice.jpg",
          "Not every cool-down is a chemical reaction. Dissolving potassium chloride or ammonium nitrate in water makes the beaker cold, but no new substance forms — that is an endothermic process. Ice melting is the same idea: particles take in energy, vibrate more, and slide as a liquid. A freezer ice pack works that way. An instant cold pack has two compartments: break the seal and ammonium nitrate dissolves in water. A self-heating can is the opposite: calcium oxide + water → calcium hydroxide, and heat is given out.",
          "Reaction = new substances. Process = same substance, energy still moves.",
          "Is every temperature drop a chemical reaction?",
          "No. Melting ice or dissolving a salt can take in energy without making a new substance. That is an endothermic process, not an endothermic reaction.",
          "Ice pack / dissolving = process · citric + bicarb = reaction",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
};

function replaceBoard(src, key, obj) {
  const start = src.indexOf(`  "${key}": {`);
  if (start < 0) throw new Error("missing " + key);
  let i = src.indexOf("{", start);
  let depth = 0;
  let j = i;
  for (; j < src.length; j++) {
    if (src[j] === "{") depth++;
    else if (src[j] === "}") {
      depth--;
      if (depth === 0) {
        j++;
        break;
      }
    }
  }
  while (src[j] === ",") j++;
  const json = JSON.stringify(obj, null, 2)
    .split("\n")
    .map((line, n) => (n === 0 ? "  " + `"${key}": ` + line : "  " + line))
    .join("\n");
  return src.slice(0, start) + json + "," + src.slice(j);
}

for (const file of ["iwb-y7-science-enhanced.js", "interactive-whiteboard-data.js"]) {
  let src = fs.readFileSync(file, "utf8");
  src = replaceBoard(src, "s7_8.2", boards["s7_8.2"]);
  fs.writeFileSync(file, src);
  console.log("updated", file);
}
