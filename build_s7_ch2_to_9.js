const fs = require("fs");
const path = require("path");
const vm = require("vm");

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  return ctx.window.INTERACTIVE_WHITEBOARD_DATA;
}

const IMAGES = {
  "s7_2.3": "assets/illustrations/dissolving_factors_heat_stir.png",
  "s7_3.2": "assets/illustrations/distance_time_graph_axes.png",
  "s7_3.4": "assets/illustrations/free_body_diagram_resultant.png",
  "s7_3.5": "assets/illustrations/normal_force_equilibrium.png",
  "s7_3.6": "assets/illustrations/kinetic_energy_collisions.png",
  "s7_3.7": "assets/illustrations/kinetic_energy_collisions.png",
  "s7_4.1": "assets/illustrations/ecological_niche_habitat.png",
  "s7_4.4": "assets/illustrations/food_web_trophic_levels.png",
  "s7_5.2": "assets/illustrations/periodic_table_cell_carbon.png",
  "s7_5.3": "assets/illustrations/climate_warming_trend_graph.png",
  "s7_5.4": "assets/illustrations/climate_warming_trend_graph.png",
  "s7_6.1": "assets/illustrations/refraction_glass_block.png",
  "s7_6.4": "assets/illustrations/visible_light_spectrum_wavelengths.png",
  "s7_6.5": "assets/illustrations/visible_light_spectrum_wavelengths.png",
  "s7_7.1": "assets/illustrations/cell_mitochondrion_energy_flow.png",
  "s7_7.2": "assets/illustrations/exercise_physiology_feedback_loop.png",
  "s7_7.3": "assets/illustrations/exercise_physiology_feedback_loop.png",
  "s7_8.1": "assets/illustrations/metal_acid_reaction_beaker.png",
  "s7_8.2": "assets/illustrations/salt_crystal_hydration.png",
  "s7_8.3": "assets/illustrations/copper_pipe_reactivity.png",
  "s7_9.1": "assets/illustrations/solenoid_iron_core_circuit.png",
  "s7_9.2": "assets/illustrations/solenoid_iron_core_circuit.png",
  "s7_9.4": "assets/illustrations/scrapyard_electromagnet_crane.png",
};

function hasImage(board) {
  const scenes = board && board.scenes;
  if (!scenes) return false;
  return Object.values(scenes).some((steps) =>
    (steps || []).some((step) => (step.elements || []).some((el) => el.type === "image"))
  );
}

function imageBoard(old, src) {
  const labels = ["Key idea", "Recall", "Check"];
  const subtopics = (old.subtopics || []).slice(0, 3);
  while (subtopics.length < 3) {
    subtopics.push({ id: "card_" + subtopics.length, label: labels[subtopics.length] });
  }
  const scenes = {};
  subtopics.forEach((st, i) => {
    const oldSteps = (old.scenes && old.scenes[st.id]) || [];
    const first = oldSteps[0] || {};
    const last = oldSteps[oldSteps.length - 1] || first;
    scenes[st.id] = [
      {
        clear: true,
        narration: first.narration || old.title,
        rule: first.rule || "",
        quizQ: last.quizQ || "",
        quizA: last.quizA || "",
        elements: [
          { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#f8fafc" },
          { type: "image", src, x: 150, y: 40, width: 500, height: 310 },
          {
            type: "rect",
            x: 80,
            y: 370,
            width: 640,
            height: 90,
            fill: "#eff6ff",
            stroke: "#2d6bff",
            strokeWidth: 2,
            rx: 10,
          },
          {
            type: "text",
            x: 400,
            y: 405,
            text: (first.rule || first.narration || st.label).slice(0, 72),
            color: "#1e3a8a",
            size: 16,
            weight: "bold",
          },
          {
            type: "text",
            x: 400,
            y: 435,
            text: st.label,
            color: "#2563eb",
            size: 13,
          },
        ],
      },
    ];
  });
  return {
    title: old.title,
    watermark: old.watermark || old.title,
    subtopics,
    scenes,
  };
}

const root = __dirname;
const data = load(path.join(root, "interactive-whiteboard-data.js"));
const extra = load(path.join(root, "iwb-y7-science-enhanced.js"));

const out = {};
Object.keys(data)
  .filter((k) => /^s7_[2-9]\./.test(k))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach((k) => {
    if (extra[k] && hasImage(extra[k])) {
      out[k] = extra[k];
      return;
    }
    if (hasImage(data[k]) && !IMAGES[k]) {
      out[k] = data[k];
      return;
    }
    const src = IMAGES[k];
    if (src) out[k] = imageBoard(data[k], src);
    else if (extra[k]) out[k] = extra[k];
    else out[k] = data[k];
  });

const body =
  "// Year 7 Science Ch2+ enhanced boards\n" +
  "window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};\n" +
  "Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, " +
  JSON.stringify(out, null, 2) +
  ");\n";

fs.writeFileSync(path.join(root, "iwb-y7-science-enhanced.js"), body);

const missingImage = Object.keys(out).filter((k) => !hasImage(out[k]));
console.log("boards", Object.keys(out).length);
console.log("withImage", Object.keys(out).filter((k) => hasImage(out[k])).length);
console.log("missingImage", missingImage.join(", ") || "none");
