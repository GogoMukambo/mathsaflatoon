const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "interactive-whiteboard-data.js");
const raw = fs.readFileSync(file, "utf8");
const jsonStr = raw.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const data = eval("(" + jsonStr + ")");

const INK = "#0f172a";
const SUB = "#475569";
const GREEN = "#059669";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PURPLE = "#7c3aed";
const PALE_G = "#d1fae5";
const PALE_B = "#e0f2fe";
const PALE_O = "#ffedd5";
const PALE_R = "#fee2e2";
const PALE_P = "#ede9fe";

function T(x, y, text, color, size) {
  return { type: "text", x, y, text, color: color || INK, size: size || 16 };
}
function R(x, y, w, h, fill, stroke) {
  return { type: "rect", x, y, width: w, height: h, fill, stroke: stroke || "#cbd5e1", strokeWidth: 2, rx: 8 };
}
function P(d, stroke, width, dash) {
  const el = { type: "path", d, stroke, width: width || 3, fill: "none" };
  if (dash) el.dash = dash;
  return el;
}
function C(cx, cy, r, fill, stroke) {
  return { type: "circle", cx, cy, r, fill: fill || "#ffffff", stroke: stroke || INK, width: 3 };
}
function frame(title) {
  const size = title.length > 36 ? 16 : 18;
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
    R(50, 40, 700, 403, "#f8fafc", "#cbd5e1"),
    T(400, 74, title, INK, size),
  ];
}
function lesson(title, watermark, sections) {
  const subtopics = [];
  const scenes = {};
  sections.forEach((sec, i) => {
    const id = "card_" + i;
    subtopics.push({ id, label: sec.label });
    scenes[id] = sec.steps.map((st, n) => ({
      clear: n > 0 ? true : undefined,
      narration: st.narration,
      rule: st.rule,
      quizQ: st.quizQ || "",
      quizA: st.quizA || "",
      elements: frame(st.heading || title).concat(st.draw),
    }));
  });
  return { title, watermark, subtopics, scenes };
}

data["s8_6.1"] = lesson("6.1 Loudness and pitch of sound", "Section 6.1: Sound", [
  {
    label: "Key idea",
    steps: [{
      heading: "Amplitude and Frequency",
      narration: "Amplitude controls loudness. Frequency controls pitch. Sound is a longitudinal wave that needs a medium.",
      rule: "Amplitude = loudness. Frequency = pitch.",
      draw: [
        P("M 150 200 Q 200 150 250 200 T 350 200", BLUE, 3),
        P("M 450 200 Q 500 100 550 200 T 650 200", RED, 3),
        T(250, 260, "quiet", BLUE, 16),
        T(550, 260, "loud (big amplitude)", RED, 16),
        P("M 150 350 Q 175 300 200 350 T 250 350 T 300 350 T 350 350", GREEN, 3),
        T(250, 400, "high pitch (high frequency)", GREEN, 16),
      ],
    }],
  }
]);

data["s8_6.2"] = lesson("6.2 Interference of sound", "Section 6.2: Interference", [
  {
    label: "Key idea",
    steps: [{
      heading: "Adding and cancelling",
      narration: "When waves overlap, they interfere. If they are in phase, they add up. If they are out of phase, they cancel.",
      rule: "In phase = louder. Out of phase = quieter.",
      draw: [
        P("M 200 150 Q 250 100 300 150 T 400 150", BLUE, 2),
        P("M 200 150 Q 250 100 300 150 T 400 150", GREEN, 2),
        P("M 200 220 Q 250 120 300 220 T 400 220", RED, 4),
        T(300, 260, "Constructive (louder)", RED, 16),
        P("M 500 150 Q 550 100 600 150 T 700 150", BLUE, 2),
        P("M 500 150 Q 550 200 600 150 T 700 150", GREEN, 2),
        P("M 500 220 L 700 220", INK, 4),
        T(600, 260, "Destructive (quieter)", INK, 16),
      ],
    }],
  }
]);

data["s8_6.3"] = lesson("6.3 Formation of the Moon", "Section 6.3: The Moon", [
  {
    label: "Key idea",
    steps: [{
      heading: "Giant impact hypothesis",
      narration: "A Mars-sized body struck the young Earth. Debris went into orbit and clumped together to form the Moon.",
      rule: "Moon formed from impact debris.",
      draw: [
        C(300, 250, 60, PALE_B, BLUE),
        C(200, 150, 30, PALE_R, RED),
        P("M 220 170 L 260 210", RED, 4),
        T(300, 330, "Earth", BLUE, 16),
        T(180, 110, "Impactor", RED, 16),
        P("M 400 250 L 450 250", INK, 4),
        C(550, 250, 60, PALE_B, BLUE),
        C(650, 200, 20, "#cbd5e1", INK),
        P("M 650 200 A 100 100 0 0 0 550 150", INK, 2, "5,5"),
        T(680, 180, "Moon", INK, 16),
      ],
    }],
  }
]);

data["s8_6.4"] = lesson("6.4 Nebulae", "Section 6.4: Nebulae", [
  {
    label: "Key idea",
    steps: [{
      heading: "Clouds of gas and dust",
      narration: "A nebula is a huge interstellar cloud. Gravity can pull denser clumps together to form new stars.",
      rule: "Nebulae are stellar nurseries.",
      draw: [
        P("M 300 200 Q 350 150 400 200 T 500 250 T 450 350 T 350 300 Z", PALE_P, PURPLE),
        C(400, 250, 10, PALE_O, ORANGE),
        C(350, 220, 5, PALE_O, ORANGE),
        C(450, 280, 8, PALE_O, ORANGE),
        T(400, 380, "Gravity pulls gas together to form stars", INK, 18),
      ],
    }],
  }
]);

data["s8_6.5"] = lesson("6.5 Tectonics", "Section 6.5: Tectonics", [
  {
    label: "Key idea",
    steps: [{
      heading: "Moving plates",
      narration: "Earth's outer shell is broken into plates that move slowly. Earthquakes and volcanoes happen at the boundaries.",
      rule: "Plates move, causing quakes and volcanoes.",
      draw: [
        P("M 200 250 L 350 250", ORANGE, 6),
        P("M 450 250 L 600 250", ORANGE, 6),
        P("M 250 220 L 200 220", RED, 4),
        P("M 550 220 L 600 220", RED, 4),
        P("M 400 350 L 400 250", RED, 4),
        T(400, 200, "magma rises", RED, 16),
        T(400, 380, "Plates moving apart at a ridge", INK, 18),
      ],
    }],
  }
]);

data["s8_7.1"] = lesson("7.1 Chromosomes, genes and DNA", "Section 7.1: DNA", [
  {
    label: "Key idea",
    steps: [{
      heading: "Genetic instructions",
      narration: "DNA stores genetic info. A gene is a section of DNA that codes for a protein. Chromosomes are packaged DNA.",
      rule: "Gene = DNA section for a protein.",
      draw: [
        P("M 200 150 Q 250 200 200 250 Q 150 300 200 350", BLUE, 4),
        P("M 250 150 Q 200 200 250 250 Q 300 300 250 350", RED, 4),
        P("M 215 180 L 235 180", INK, 2),
        P("M 215 220 L 235 220", INK, 2),
        P("M 215 280 L 235 280", INK, 2),
        P("M 215 320 L 235 320", INK, 2),
        R(400, 200, 100, 100, "none", GREEN),
        T(450, 250, "Gene", GREEN, 16),
        T(450, 320, "Codes for a protein", INK, 16),
      ],
    }],
  }
]);

data["s8_7.2"] = lesson("7.2 Gametes and inheritance", "Section 7.2: Inheritance", [
  {
    label: "Key idea",
    steps: [{
      heading: "Mixing alleles",
      narration: "You inherit half your chromosomes from each parent. A dominant allele shows even if there is only one copy.",
      rule: "Dominant shows with one copy.",
      draw: [
        R(300, 150, 50, 50, PALE_B, BLUE),
        T(325, 175, "B", BLUE, 20),
        R(350, 150, 50, 50, PALE_B, BLUE),
        T(375, 175, "b", BLUE, 20),
        R(300, 200, 50, 50, PALE_R, RED),
        T(325, 225, "b", RED, 20),
        R(350, 200, 50, 50, PALE_R, RED),
        T(375, 225, "b", RED, 20),
        T(250, 175, "B", INK, 20),
        T(250, 225, "b", INK, 20),
        T(325, 110, "b", INK, 20),
        T(375, 110, "b", INK, 20),
        T(400, 300, "Punnett square shows probabilities", INK, 18),
      ],
    }],
  }
]);

data["s8_7.3"] = lesson("7.3 Variation", "Section 7.3: Variation", [
  {
    label: "Key idea",
    steps: [{
      heading: "Genetic and environmental",
      narration: "Variation is caused by genes and the environment. Height is continuous; blood group is discontinuous.",
      rule: "Variation = genes + environment.",
      draw: [
        R(200, 250, 40, 100, PALE_B, BLUE),
        R(250, 200, 40, 150, PALE_B, BLUE),
        R(300, 150, 40, 200, PALE_B, BLUE),
        R(350, 200, 40, 150, PALE_B, BLUE),
        R(400, 250, 40, 100, PALE_B, BLUE),
        T(320, 380, "Continuous variation (e.g. height)", INK, 16),
        C(550, 250, 30, PALE_R, RED),
        C(650, 250, 30, PALE_R, RED),
        T(580, 380, "Discontinuous (e.g. blood group)", INK, 16),
      ],
    }],
  }
]);

data["s8_7.4"] = lesson("7.4 Natural selection", "Section 7.4: Selection", [
  {
    label: "Key idea",
    steps: [{
      heading: "Survival of the fittest",
      narration: "Individuals with advantageous variations survive and reproduce, passing on those alleles.",
      rule: "Advantageous alleles are passed on.",
      draw: [
        R(200, 200, 100, 100, INK, INK),
        C(230, 230, 15, "#fff", "#fff"),
        C(270, 270, 15, SUB, SUB),
        T(250, 330, "Sooty tree", INK, 16),
        T(400, 250, "Dark moth is camouflaged", INK, 16),
        T(400, 280, "Light moth gets eaten", RED, 16),
      ],
    }],
  }
]);

data["s8_8.1"] = lesson("8.1 Measuring the rate of reaction", "Section 8.1: Rate", [
  {
    label: "Key idea",
    steps: [{
      heading: "How fast products form",
      narration: "Rate is how quickly reactants are used up or products form. A steeper graph means a faster reaction.",
      rule: "Steeper gradient = faster rate.",
      draw: [
        P("M 200 350 L 200 150", INK, 3),
        P("M 200 350 L 500 350", INK, 3),
        P("M 200 350 Q 250 200 450 200", RED, 3),
        P("M 200 350 Q 300 250 450 250", BLUE, 3),
        T(150, 250, "Gas", INK, 16),
        T(350, 380, "Time", INK, 16),
        T(300, 180, "Fast", RED, 16),
        T(400, 280, "Slow", BLUE, 16),
      ],
    }],
  }
]);

data["s8_8.2"] = lesson("8.2 Surface area and the rate of reaction", "Section 8.2: Surface area", [
  {
    label: "Key idea",
    steps: [{
      heading: "Powders vs lumps",
      narration: "Smaller pieces have a larger surface area, so more collisions happen per second.",
      rule: "More surface area = faster rate.",
      draw: [
        R(200, 200, 80, 80, PALE_B, BLUE),
        T(240, 300, "Lump", INK, 16),
        R(400, 200, 30, 30, PALE_B, BLUE),
        R(440, 200, 30, 30, PALE_B, BLUE),
        R(400, 240, 30, 30, PALE_B, BLUE),
        R(440, 240, 30, 30, PALE_B, BLUE),
        T(440, 300, "Powder", INK, 16),
        T(400, 350, "More area exposed for collisions", RED, 18),
      ],
    }],
  }
]);

data["s8_8.3"] = lesson("8.3 Temperature and the rate of reaction", "Section 8.3: Temperature", [
  {
    label: "Key idea",
    steps: [{
      heading: "More energy, more collisions",
      narration: "Heating makes particles move faster and collide more often, with more energy than the activation energy.",
      rule: "Higher temp = faster rate.",
      draw: [
        C(300, 200, 15, PALE_B, BLUE),
        P("M 320 200 L 350 200", INK, 2),
        T(300, 250, "Cold (slow)", BLUE, 16),
        C(500, 200, 15, PALE_R, RED),
        P("M 520 200 L 580 200", RED, 4),
        T(500, 250, "Hot (fast)", RED, 16),
        T(400, 320, "More successful collisions per second", INK, 18),
      ],
    }],
  }
]);

data["s8_8.4"] = lesson("8.4 Concentration and the rate of reaction", "Section 8.4: Concentration", [
  {
    label: "Key idea",
    steps: [{
      heading: "Crowded particles",
      narration: "A more concentrated solution has more particles in the same volume, so collisions are more frequent.",
      rule: "Higher concentration = faster rate.",
      draw: [
        R(200, 150, 100, 100, PALE_B, BLUE),
        C(230, 180, 5, BLUE, BLUE),
        C(270, 220, 5, BLUE, BLUE),
        T(250, 280, "Dilute", BLUE, 16),
        R(400, 150, 100, 100, PALE_R, RED),
        C(420, 170, 5, RED, RED),
        C(450, 190, 5, RED, RED),
        C(480, 170, 5, RED, RED),
        C(430, 220, 5, RED, RED),
        C(470, 230, 5, RED, RED),
        T(450, 280, "Concentrated", RED, 16),
        T(400, 350, "More crowded = more collisions", INK, 18),
      ],
    }],
  }
]);

data["s8_9.1"] = lesson("9.1 Parallel circuits", "Section 9.1: Parallel", [
  {
    label: "Key idea",
    steps: [{
      heading: "Separate branches",
      narration: "In a parallel circuit, components are on separate branches. If one breaks, the others still work.",
      rule: "Parallel = separate paths.",
      draw: [
        P("M 200 250 L 200 150 L 300 150", INK, 3),
        P("M 350 150 L 400 150 L 400 250", INK, 3),
        R(300, 130, 50, 40, PALE_O, ORANGE),
        T(325, 150, "Cell", INK, 14),
        P("M 200 250 L 300 250", INK, 3),
        P("M 350 250 L 400 250", INK, 3),
        C(325, 250, 20, PALE_R, RED),
        T(325, 250, "X", RED, 16),
        P("M 200 250 L 200 350 L 300 350", INK, 3),
        P("M 400 250 L 400 350 L 350 350", INK, 3),
        C(325, 350, 20, PALE_R, RED),
        T(325, 350, "X", RED, 16),
        T(550, 250, "Independent branches", BLUE, 18),
      ],
    }],
  }
]);

data["s8_9.2"] = lesson("9.2 Current and voltage in parallel circuits", "Section 9.2: Current & Voltage", [
  {
    label: "Key idea",
    steps: [{
      heading: "Splitting current",
      narration: "Current splits between branches and adds up again. Each branch gets the full supply voltage.",
      rule: "Current splits. Voltage is the same.",
      draw: [
        P("M 200 250 L 300 250", INK, 3),
        P("M 300 250 L 300 200 L 400 200", INK, 3),
        P("M 300 250 L 300 300 L 400 300", INK, 3),
        T(250, 230, "3 A", RED, 16),
        T(350, 180, "1 A", RED, 16),
        T(350, 280, "2 A", RED, 16),
        T(550, 250, "Current adds up: 1 + 2 = 3", INK, 18),
      ],
    }],
  }
]);

data["s8_9.3"] = lesson("9.3 Resistance", "Section 9.3: Resistance", [
  {
    label: "Key idea",
    steps: [{
      heading: "Opposing current",
      narration: "Resistance is how much a component opposes current. Resistance = Voltage / Current.",
      rule: "R = V / I.",
      draw: [
        R(300, 200, 100, 40, PALE_G, GREEN),
        T(350, 220, "Resistor", GREEN, 16),
        T(350, 150, "6 V", BLUE, 16),
        T(250, 220, "0.3 A", RED, 16),
        T(400, 300, "R = 6 / 0.3 = 20 Ω", INK, 20),
      ],
    }],
  }
]);

data["s8_9.4"] = lesson("9.4 Practical circuits", "Section 9.4: Practical", [
  {
    label: "Key idea",
    steps: [{
      heading: "Safety",
      narration: "Fuses and circuit breakers cut the circuit if current gets too high. The earth wire protects from live faults.",
      rule: "Fuses prevent overheating.",
      draw: [
        P("M 200 200 L 300 200", RED, 3),
        R(300, 180, 60, 40, PALE_R, RED),
        P("M 360 200 L 450 200", RED, 3),
        T(330, 200, "Fuse", INK, 14),
        T(400, 280, "Melts if current is too high", INK, 16),
      ],
    }],
  }
]);

data["s8_skills9"] = lesson("Science skills", "Section SS.1: Equations", [
  {
    label: "Key idea",
    steps: [{
      heading: "Rearranging equations",
      narration: "Use triangles or algebra to rearrange equations like Density = Mass / Volume.",
      rule: "Multiply or divide both sides.",
      draw: [
        P("M 400 150 L 300 250 L 500 250 Z", PALE_B, BLUE),
        P("M 300 250 L 500 250", BLUE, 3),
        P("M 400 150 L 400 250", BLUE, 3),
        T(400, 190, "m", INK, 24),
        T(360, 230, "D", INK, 24),
        T(440, 230, "V", INK, 24),
        T(400, 320, "Mass = Density × Volume", INK, 18),
      ],
    }],
  }
]);

const problems = audit(Object.keys(data).filter(k => k.startsWith('s8_')));
if (problems.length) {
  console.log(problems.slice(0, 80).join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 8 Science boards 6 to 9");

function audit(keys) {
  const issues = [];
  keys.forEach((key) => {
    const topic = data[key];
    if (!topic) return;
    topic.subtopics.forEach((sub) => {
      let stack = [];
      (topic.scenes[sub.id] || []).forEach((step, index) => {
        if (step.clear || index === 0) stack = [];
        stack = stack.concat(step.elements || []);
        const texts = stack.filter((e) => e.type === "text");
        const boxes = texts.map((e) => {
          const w = e.size * 0.62 * String(e.text).length;
          const h = e.size;
          return { t: e.text, l: e.x - w / 2, r: e.x + w / 2, top: e.y - h / 2, bot: e.y + h / 2 };
        });
        boxes.forEach((b) => {
          if (b.l < 58 || b.r > 745 || b.top < 46 || b.bot > 438) {
            issues.push(key + " " + sub.id + " step " + index + " outside: " + b.t);
          }
        });
      });
    });
  });
  return issues;
}
