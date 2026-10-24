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
  "s7_9.1": {
    title: "9.1 Magnetic fields",
    watermark: "Section 9.1: Where magnets act",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_9_1_field_and_paperclips.jpg",
          "A magnet attracts magnetic materials: iron, steel, nickel and cobalt. Paperclips stick at the poles. Move them far enough away and they stop — they have left the magnetic field. The field is the space around a magnet where its effects can be detected. It is strongest at the poles.",
          "Magnetic field = space where a magnet can act. Strongest at the poles.",
          "What is a magnetic field?",
          "The area around a magnet where the magnet’s effects can be detected, for example attracting a steel paperclip. It is strongest at the poles.",
          "Iron · steel · nickel · cobalt are magnetic — copper and aluminium are not",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_9_1_field_lines_compasses.jpg",
          "We draw magnetic field lines to show the field. Rules: they join opposite poles; arrows point N → S; they must not touch or cross. A compass needle lines up with the field. Closer lines mean a stronger field. A horseshoe magnet concentrates the field in the gap between N and S.",
          "Field lines: N to S, never cross, closer = stronger.",
          "What do magnetic field lines show?",
          "The direction a north pole would move (arrows N → S) and where the field is stronger (lines closer together, usually at the poles).",
          "Compass needles follow the field lines",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_9_1_attract_and_repel.jpg",
          "Like poles repel: two norths or two souths. Opposite poles attract. Between opposite poles the field lines run the same way and the magnets pull together. Between like poles the lines point opposite ways and bulge out — the magnets push apart.",
          "Like poles repel. Opposite poles attract.",
          "How do magnetic fields interact?",
          "Opposite poles attract because field lines between them run in the same direction. Like poles repel because the field lines between them run in opposite directions.",
          "N–S attract · N–N or S–S repel",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
    },
  },
  "s7_9.2": {
    title: "9.2 The Earth as a giant magnet",
    watermark: "Section 9.2: Why a compass works",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_9_2_earth_like_bar_magnet.jpg",
          "Earth has a magnetic field, similar to a giant bar magnet, produced in the iron-rich core. A compass needle lines up with that field so we can navigate. Birds also use the field on long journeys. Field lines enter near the geographic North Pole, so that region behaves like a magnetic south pole — that is why a compass’s north-seeking end points north.",
          "Earth’s field is like a bar magnet. Compass needles line up with it.",
          "Why does a compass point north?",
          "Earth has a magnetic field. The magnetised needle lines up with the field. The north-seeking pole points toward magnetic north, near (but not at) the geographic North Pole.",
          "Core (mostly iron, some nickel) is the origin of the field",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_9_2_magnetic_vs_geographic_aurora.jpg",
          "Geographic north is where the spin axis meets the surface. Magnetic north is a different, slowly moving place (about 60 km a year) in the Arctic. Runway numbers sometimes change because of this. Aurorae (northern and southern lights) happen when solar particles spiral into the strong field near the poles.",
          "Magnetic north ≠ geographic North Pole, and it moves.",
          "Is magnetic north at the geographic North Pole?",
          "No. Magnetic north is nearby in the Arctic and slowly moves. Geographic north is on the spin axis.",
          "Aurorae: solar particles guided by the strong polar field",
          "#eef2ff",
          "#4f46e5",
          "#3730a3"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_9_2_hanging_magnet_compass.jpg",
          "You can show Earth’s field in the lab: hang a bar magnet so it can turn, or float a magnetised needle on cork in water. Keep other magnets away. Both settle north–south. A freely turning magnet’s north-seeking pole points toward geographic north. The first compasses used lodestone, a naturally occurring magnet (magnetite).",
          "A free magnet lines up with Earth’s field.",
          "Which pole of a compass points toward Earth’s magnetic north?",
          "The north-seeking pole of the needle. (Opposite poles attract, so that end is attracted toward the magnetic south-type pole near geographic north.)",
          "Hang or float a magnet — keep other magnets away",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
    },
  },
  "s7_9.3": {
    title: "9.3 Electromagnets",
    watermark: "Section 9.3: A magnet you can switch",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_9_3_nail_coil_cell.jpg",
          "Magnetic means attracted to a magnet. Magnetised means turned into a magnet. Wrap insulated wire into a coil around an iron core (a nail), connect a cell and a switch: when current flows the core is magnetised. Switch off and it loses most of its magnetism. Reverse the coil or the cell connections to swap the poles.",
          "Coil + current + iron core = electromagnet.",
          "How do you make an electromagnet?",
          "Wrap a coil of insulated wire around an iron core and pass a current through the coil. Add a switch so you can turn it on and off.",
          "Only the plastic coating of the wire should touch the nail",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_9_3_on_off_vs_permanent.jpg",
          "A permanent magnet keeps its field all the time — you cannot switch it off. An electromagnet is useful because switching the current off drops the load. That is why scrapyard cranes, toaster pop-up, fire doors and electric bells use electromagnets, not fridge magnets.",
          "Permanent = always on. Electromagnet = on/off.",
          "Why use an electromagnet instead of a permanent magnet?",
          "You can switch the field off by stopping the current, so you can pick up a load and then drop it. A permanent magnet cannot do that.",
          "Switch off → most magnetism is lost → load drops",
          "#fef2f2",
          "#dc2626",
          "#991b1b"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_9_3_electromagnet_uses.jpg",
          "Uses: scrapyard magnets lift iron and steel but leave copper, aluminium and zinc; a toaster holds the tray down then switches off so toast pops up; a fire-door electromagnet lets go when the alarm sounds so the door closes; a school bell uses a coil to move a hammer; motors use electromagnets to turn electrical energy into movement. MRI scanners use very strong electromagnets.",
          "Switchable magnets in doors, toasters, cranes, bells and motors.",
          "Give three uses of electromagnets.",
          "Any three from: scrapyard crane, toaster, fire door, electric bell, electric motor, MRI scanner.",
          "Fire door: alarm off magnet → door closes",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_9.4": {
    title: "9.4 Investigating electromagnets",
    watermark: "Section 9.4: Factors that change strength",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_9_4_three_factors_fair_test.jpg",
          "Three factors change strength: more turns on the coil; a larger current (more cells); a magnetic core, especially soft iron. Soft iron is easily magnetised and easily demagnetised — it is not ‘squashy’. Change only one factor at a time. Count paperclips held as a measure of strength.",
          "Factors: turns, current, core material.",
          "Which three factors affect electromagnet strength?",
          "Number of turns on the coil, size of the current, and the material of the core (iron or some steels work; wood, rubber and aluminium do not).",
          "Change one factor; keep the other two the same",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_9_4_three_factors_fair_test.jpg",
          "If you test turns, keep the same core, same current, same paperclips and the same way of counting. Switch on only briefly so the cell lasts and the wire does not overheat. Repeat and take a mean. A line graph suits number of turns (a number). A bar chart suits core materials (categories).",
          "Fair test: control everything except the factor you chose.",
          "What should you keep the same if you change the number of turns?",
          "The core, the current, the paperclips, and how you count them. Only the number of turns should change.",
          "Short bursts of current — wire must not get hot",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_9_4_paperclip_strength_results.jpg",
          "Expect more turns or more current to hold more clips, until you run out of space on the core or the iron is as magnetised as it can be. Nickel cores beat wood or aluminium. Scrapyard magnets need to be far stronger than a toaster magnet. Strength is the force on magnetic material — counting clips is the school version of that measurement.",
          "More turns or more current → more clips, up to a limit.",
          "What pattern should you expect?",
          "More turns, a bigger current, or a soft-iron core should hold more paperclips. Repeat, average, and look for a trend on a graph.",
          "Measure strength by how many clips it can hold",
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
  const nextKeys = ["s7_9.1", "s7_9.2", "s7_9.3", "s7_9.4", "s7_10", "s8_"];
  let end = src.length;
  for (const k of Object.keys(boards)) {
    if (k === key) continue;
    const i = src.indexOf(`  "${k}": {`, start + 4);
    if (i > start && i < end) end = i;
  }
  const after = src.indexOf(`\n  "s8_`, start + 4);
  const after2 = src.indexOf(`\n};`, start + 4);
  if (after > start && after < end) end = after;
  // find next top-level key after this one
  const rest = src.slice(start + 6);
  const m = rest.match(/\n  "(s7_9\.[2-4]|s8_|s7_10)/);
  // simpler: from start, brace match
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
  for (const key of ["s7_9.1", "s7_9.2", "s7_9.3", "s7_9.4"]) {
    src = replaceBoard(src, key, boards[key]);
  }
  fs.writeFileSync(file, src);
  console.log("updated", file);
}
