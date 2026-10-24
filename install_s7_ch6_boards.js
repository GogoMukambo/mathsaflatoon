const fs = require("fs");
const path = require("path");

const srcDir = path.join("assets");
const destDir = path.join("assets", "illustrations");
const copies = [
  "s7_6_1_motorcycle_mirrors.jpg",
  "s7_6_1_raybox_protractor.jpg",
  "s7_6_1_mirror_vs_foil.jpg",
  "s7_6_2_pencil_water.jpg",
  "s7_6_2_coin_bowl.jpg",
  "s7_6_2_glasses_phone.jpg",
  "s7_6_3_prism_spectrum.jpg",
  "s7_6_3_hose_rainbow.jpg",
  "s7_6_3_raindrop_sky.jpg",
  "s7_6_4_phone_pixels.jpg",
  "s7_6_4_traffic_filters.jpg",
  "s7_6_4_coloured_cubes.jpg",
  "s7_6_5_milky_way_night.jpg",
  "s7_6_5_galaxy_shapes.jpg",
  "s7_6_5_spiral_faraway.jpg",
  "s7_6_6_ceres_round.jpg",
  "s7_6_6_potato_asteroid.jpg",
  "s7_6_6_asteroid_belt.jpg",
];
for (const name of copies) {
  const from = path.join(srcDir, name);
  const to = path.join(destDir, name);
  if (fs.existsSync(from)) fs.copyFileSync(from, to);
}

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
  "s7_6.1": {
    title: "6.1 Reflection",
    watermark: "Section 6.1: Bouncing light",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_6_1_raybox_protractor.jpg",
          "Light travels in straight lines called rays. When a ray hits a plane (flat) mirror it bounces. Draw a dashed normal at 90° to the mirror at the bounce point. Measure both angles from that normal with a protractor, not from the glass. The book practical uses a ray box, a plane mirror and a set square to keep the normal perpendicular.",
          "Law of reflection: angle of incidence = angle of reflection.",
          "State the law of reflection. Where do you measure the angles from?",
          "The angle of incidence equals the angle of reflection. Both angles are measured from the normal, the line drawn at 90° to the mirror.",
          "FORMULA: i = r   ·   measure from the normal",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_6_1_motorcycle_mirrors.jpg",
          "A plane mirror is flat and smooth. Motorcycle and car wing mirrors use that idea so you can see traffic behind you. Light from the yellow car hits the mirror and reflects into the rider’s eyes. If the ray hits along the normal, i = 0°, so r = 0° and it bounces straight back.",
          "Plane = flat. Smooth glass gives a sharp image.",
          "Why can a rider see a car behind in a wing mirror?",
          "Light from the car reflects from the plane mirror into the rider’s eyes. The angles from the normal are equal.",
          "KEYWORD: plane mirror — a flat reflecting surface",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_6_1_mirror_vs_foil.jpg",
          "A bathroom plane mirror is smooth, so parallel rays stay parallel and you see a clear face. Crumpled foil is still shiny, but each crease has a different normal, so rays scatter. That is why you do not see a sharp image in foil even though light is still reflecting.",
          "Smooth = clear image. Bumpy = scattered sparkle.",
          "Why is a bathroom mirror clearer than crumpled foil?",
          "The mirror is smooth so rays reflect regularly. Foil is crumpled so each bump sends light a different way.",
          "Smooth plane mirror vs crumpled shiny foil",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_6.2": {
    title: "6.2 Refraction",
    watermark: "Section 6.2: Bending light",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_6_2_glasses_phone.jpg",
          "Light changes speed when it goes from air into glass or water. In air it is about 300 000 km/s, in water about 225 000 km/s, in glass about 200 000 km/s. That speed change can change direction. Lenses in glasses and phone cameras use refraction to bend rays and form a clear image.",
          "Refraction = change of speed, which can change direction.",
          "Why does light change direction in glass?",
          "It changes speed. If it meets the surface at an angle, the beam bends.",
          "FORMULA: air 300 000 · water 225 000 · glass 200 000 km/s",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_6_2_pencil_water.jpg",
          "A straight pencil in a glass of water looks broken at the water line. Rays from the underwater part leave water (slower) into air (faster) and bend away from the normal. Your brain traces those rays as straight lines, so the underwater part looks shifted. A wet window can look wavy for the same reason: water and glass slow light.",
          "Air into glass or water: bend towards the normal.",
          "Which way does a ray bend from air into glass?",
          "Towards the normal, because light slows down.",
          "FORMULA: faster → slower: towards the normal",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_6_2_coin_bowl.jpg",
          "The appearing-coin trick: a coin sits on the bottom of a bowl, just hidden by the rim. Pour in water and the coin seems to rise into view. Rays from the coin refract at the water surface, so they now reach your eye. Oil on water makes a second bend because light changes speed again.",
          "Your eye assumes light travelled in a straight line.",
          "Why does water make a hidden coin appear?",
          "Rays from the coin refract at the water surface and reach your eye. The coin looks higher than it is.",
          "Coin + water: refraction brings the rays to your eye",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_6.3": {
    title: "6.3 Making rainbows",
    watermark: "Section 6.3: Dispersion",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_6_3_prism_spectrum.jpg",
          "In 1666 Newton shone sunlight through a triangular glass prism. White light split into a spectrum. Each colour travels at a slightly different speed in glass, so each colour refracts by a different amount. That spreading is called dispersion. Keep your eye about a metre from a bright prism — the beam is dazzling.",
          "White light is a mixture of colours.",
          "What is dispersion?",
          "White light splitting into its spectrum of colours because they refract by different amounts.",
          "KEYWORD: dispersion — white light splits into a spectrum",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_6_3_raindrop_sky.jpg",
          "The spectrum order is red, orange, yellow, green, blue, indigo, violet. Red is refracted through the smallest angle. Violet is refracted through the largest. Some people see indigo and violet as one colour, so they count six instead of seven.",
          "Red least bend. Violet most bend.",
          "Which colour bends most in a triangular prism?",
          "Violet. Red bends the least.",
          "ROYGBIV · red least · violet most",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_6_3_hose_rainbow.jpg",
          "A rainbow needs the Sun shining, rain or spray in the air, and the Sun behind you. Each drop refracts light, reflects inside, then refracts again as light leaves. A hose on a sunny day can make the same arch because the spray is millions of tiny drops.",
          "Sun behind you. Drops in front of you.",
          "Can you see a rainbow at night with no rain?",
          "You need bright sunlight and drops of water. At night there is no Sun, so you do not see a rainbow.",
          "Sun behind · rain in front · reflection inside the drop",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_6.4": {
    title: "6.4 Colours of light",
    watermark: "Section 6.4: Adding and subtracting",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_6_4_phone_pixels.jpg",
          "The three primary colours of light are red, green and blue. They cannot be made by mixing other colours of light. Adding them: red + green = yellow, red + blue = magenta, blue + green = cyan, and all three make white. A phone or TV screen mixes tiny red, green and blue sources. Paint primaries are different — light mixes by adding.",
          "Light primaries: red, green, blue.",
          "What colour do red and green light make together?",
          "Yellow. All three primaries together make white.",
          "FORMULA: R+G=yellow · R+B=magenta · B+G=cyan · RGB=white",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_6_4_traffic_filters.jpg",
          "A coloured filter transmits its own colour and absorbs the rest. Traffic lights use three white lamps with red, yellow or green filters. White light is the seven spectrum colours; a red filter lets red through and subtracts the other six. A green filter then a red filter lets nothing through — green is absorbed by the red filter.",
          "Filter = subtraction. Only matching colour is transmitted.",
          "What does a red filter do to white light?",
          "It transmits red and absorbs the other colours. That is subtraction of light.",
          "KEYWORD: transmit — get through · absorb — taken in",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_6_4_coloured_cubes.jpg",
          "A yellow flower looks yellow because it reflects yellow and absorbs other colours. A red cube in white light looks red. In green light that cube looks black — it absorbs green and has no red to reflect. A blue cube in red light also looks black. A white T-shirt reflects whatever colour shines on it. A black object absorbs all the colours that reach it.",
          "You see the colour that is reflected into your eyes.",
          "Why can a red cube look black in green light?",
          "It reflects only red. Green is absorbed, so almost no light comes back.",
          "See reflected colour · absorb the rest",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_6.5": {
    title: "6.5 Galaxies",
    watermark: "Section 6.5: Stars in families",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_6_5_milky_way_night.jpg",
          "On a clear night away from street lights you can see a milky band. That band is our galaxy, the Milky Way, seen from the inside. The word galaxy comes from a Greek word for milk. A galaxy holds dust, gas, stars and solar systems together by gravity.",
          "We live inside a spiral. We see one arm as a band.",
          "What is the milky band across a dark night sky?",
          "Part of our own galaxy, the Milky Way, seen edge-on from inside.",
          "KEYWORD: galaxy — stars, gas, dust and solar systems held by gravity",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_6_5_galaxy_shapes.jpg",
          "Galaxies are classed by shape: spiral (like the Milky Way from far away), elliptical (smooth oval), or irregular (patchy). The closest known neighbour is the Canis Major Dwarf Galaxy, which is elliptical. Order of size: moon, planet, star, solar system, galaxy, universe.",
          "Three shapes: spiral, elliptical, irregular.",
          "Name the three shapes of galaxies.",
          "Spiral, elliptical and irregular.",
          "KEYWORD: universe — all of space and everything in it",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_6_5_spiral_faraway.jpg",
          "Galaxies contain stellar dust, gas, stars and solar systems. Space is almost empty: about one dust particle in every million cubic metres. Even at 300 000 km/s it would take more than 100 000 years to cross the Milky Way. Its mass is about 1 500 000 000 000 times the Sun. Scientists counted galaxies in a patch of sky and estimated about 100 000 000 000 in the universe — an estimate, like counting sand grains in a cup then scaling up.",
          "Gravity holds a huge mass together.",
          "What are galaxies made of?",
          "Stellar dust, gas, stars and solar systems, held by gravity.",
          "KEYWORD: stellar dust — dust found in space",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_6.6": {
    title: "6.6 Rocks in space",
    watermark: "Section 6.6: Asteroids",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_6_6_asteroid_belt.jpg",
          "Asteroids are rocks that orbit the Sun. Most sit in the asteroid belt between Mars and Jupiter. They are leftover pieces from when the Solar System formed. They are smaller than planets. Millions of them orbit there.",
          "Asteroid belt: between Mars and Jupiter.",
          "Where do most asteroids orbit?",
          "In the asteroid belt between the orbits of Mars and Jupiter.",
          "KEYWORD: asteroid — a rock that orbits the Sun",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_6_6_ceres_round.jpg",
          "The largest asteroid is Ceres, found in 1801. It is about 975 km across, almost round, and has craters. It has a core, mantle and crust, like a small planet that never finished growing. The smallest asteroid studied is only about 2 m across. Most others look more like lumpy potatoes than balls.",
          "Ceres is unusually large and round.",
          "Why did scientists once think Ceres was a planet?",
          "It looked small but round, like a planet. Later the asteroid class was used.",
          "Ceres ≈ 975 km · found 1801 · craters",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_6_6_potato_asteroid.jpg",
          "Itokawa is a small potato-shaped asteroid, about 530 m long and 250 m wide. A spacecraft visited in 2005 and collected surface samples. It looks like lumps of rock stuck together after impacts smashed older bodies. Gravity is weak, so a close pass by a planet can change its shape. Earth pulls passing asteroids; many orbits come close. Large impacts are rare — about one every 130 000 years. Smaller ones break up in the air.",
          "Many small asteroids are rubble piles, not solid balls.",
          "What are craters on Ceres evidence of?",
          "Impacts — other rocks hitting the surface.",
          "KEYWORD: impact — a collision · crater — the scar it leaves",
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
  if (start < 0) return null;
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

function insertAfter(src, afterKey, newKey, obj) {
  const marker = `  "${afterKey}": {`;
  const start = src.indexOf(marker);
  if (start < 0) throw new Error("missing " + afterKey);
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
  const json = JSON.stringify(obj, null, 2)
    .split("\n")
    .map((line, n) => (n === 0 ? "  " + `"${newKey}": ` + line : "  " + line))
    .join("\n");
  return src.slice(0, j) + ",\n" + json + src.slice(j);
}

for (const file of ["iwb-y7-science-enhanced.js", "interactive-whiteboard-data.js"]) {
  let src = fs.readFileSync(file, "utf8");
  for (const key of ["s7_6.1", "s7_6.2", "s7_6.3", "s7_6.4", "s7_6.5"]) {
    const next = replaceBoard(src, key, boards[key]);
    if (!next) throw new Error(file + " missing " + key);
    src = next;
  }
  if (src.indexOf(`  "s7_6.6": {`) >= 0) {
    src = replaceBoard(src, "s7_6.6", boards["s7_6.6"]);
  } else {
    src = insertAfter(src, "s7_6.5", "s7_6.6", boards["s7_6.6"]);
  }
  fs.writeFileSync(file, src);
  console.log("updated", file);
}
