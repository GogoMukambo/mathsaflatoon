const fs = require("fs");
const path = require("path");
const vm = require("vm");

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  return ctx.window.INTERACTIVE_WHITEBOARD_DATA || {};
}

// Topics whose boards were filler. Each gets its original narration back, with an
// illustration per card instead of the old box diagram.
const ILLUSTRATED = {
  "s7_2.3": ["dissolving_beaker_setup", "dissolving_factors_heat_stir", "solubility_curve_graph"],
  "s7_3.2": ["distance_time_graph_axes"],
  "s7_3.5": ["normal_force_equilibrium"],
  "s7_3.6": ["kinetic_energy_collisions"],
  "s7_3.7": ["dissolving_particle_model", "kinetic_energy_collisions"],
  "s7_4.1": ["ecological_niche_habitat", "biome_comparison_split"],
  "s7_4.4": ["food_web_trophic_levels", "population_graph_explosion"],
  "s7_5.2": ["salt_water_solution", "atmospheric_gas_composition_pie_chart"],
  "s7_5.3": ["climate_warming_trend_graph"],
  "s7_5.4": ["climate_warming_trend_graph", "greenhouse_effect_radiation_model"],
  "s7_7.1": ["aerobic_respiration_biochemical_cycle", "cell_mitochondrion_energy_flow"],
  "s7_7.2": ["exercise_physiology_feedback_loop"],
  "s7_8.1": ["metal_acid_reaction_beaker"],
  "s7_8.2": ["salt_crystal_hydration"],
  "s7_8.3": ["copper_pipe_reactivity", "reactivity_series_water_comparison"],
  "s7_9.4": ["electromagnet_variables_strength", "scrapyard_electromagnet_crane"],
};

// No illustration in the library matches these, so the original drawn boards are
// better than an unrelated photograph.
const RESTORE_ORIGINAL = ["s7_3.4", "s7_6.1", "s7_6.4", "s7_6.5", "s7_7.3", "s7_9.1", "s7_9.2"];

function wrap(text, limit) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? line + " " + word : word;
    if (next.length > limit && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

function calloutBox(slot, slots, text, isFirst) {
  const top = 336;
  const gap = 6;
  const height = Math.floor((492 - top - gap * (slots - 1)) / slots);
  const y = top + slot * (height + gap);
  const lines = wrap(text, height >= 60 ? 48 : 56);
  const size = lines.length > 1 ? 14 : 16;
  const elements = [
    {
      type: "rect",
      x: 70,
      y,
      width: 660,
      height,
      fill: isFirst ? "#eff6ff" : "#ffffff",
      stroke: isFirst ? "#2d6bff" : "#93c5fd",
      strokeWidth: 2,
      rx: 10,
    },
  ];
  const mid = y + height / 2;
  lines.forEach((line, i) => {
    elements.push({
      type: "text",
      x: 400,
      y: Math.round(lines.length === 1 ? mid : mid - 10 + i * 20),
      text: line,
      color: isFirst ? "#1e3a8a" : "#1d4ed8",
      size,
    });
  });
  return elements;
}

function illustratedBoard(original, images) {
  const scenes = {};
  Object.entries(original.scenes || {}).forEach(([card, steps], cardIndex) => {
    const src = "assets/illustrations/" + images[cardIndex % images.length] + ".png";
    const list = steps || [];
    scenes[card] = list.map((step, i) => {
      const elements = [];
      if (i === 0) {
        elements.push({ type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#f8fafc" });
        elements.push({ type: "image", src, x: 170, y: 32, width: 460, height: 292 });
      }
      elements.push(...calloutBox(i, list.length, step.rule || step.narration, i === 0));
      return {
        ...(i === 0 ? { clear: true } : {}),
        narration: step.narration,
        rule: step.rule || "",
        quizQ: step.quizQ || "",
        quizA: step.quizA || "",
        elements,
      };
    });
  });
  return {
    title: original.title,
    watermark: original.watermark || original.title,
    subtopics: original.subtopics,
    scenes,
  };
}

const root = __dirname;
const data = load(path.join(root, "interactive-whiteboard-data.js"));
const original = load(path.join(root, "original_s7_boards.js"));

const rebuilt = [];
Object.entries(ILLUSTRATED).forEach(([key, images]) => {
  if (!original[key]) throw new Error("no original board for " + key);
  data[key] = illustratedBoard(original[key], images);
  rebuilt.push(key);
});
RESTORE_ORIGINAL.forEach((key) => {
  if (!original[key]) throw new Error("no original board for " + key);
  data[key] = original[key];
  rebuilt.push(key);
});

fs.writeFileSync(
  path.join(root, "interactive-whiteboard-data.js"),
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n"
);

// Keep the Ch2+ override file in step with the data file so it cannot reinstate
// an older version of a board.
const extra = {};
Object.keys(data)
  .filter((k) => /^s7_[2-9]\./.test(k))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach((k) => {
    extra[k] = data[k];
  });
fs.writeFileSync(
  path.join(root, "iwb-y7-science-enhanced.js"),
  "// Year 7 Science Ch2+ enhanced boards\n" +
    "window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};\n" +
    "Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, " +
    JSON.stringify(extra, null, 2) +
    ");\n"
);

console.log("rebuilt " + rebuilt.length + ": " + rebuilt.sort().join(", "));
