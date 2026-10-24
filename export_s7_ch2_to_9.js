const fs = require("fs");
const path = require("path");
const vm = require("vm");

const C = {
  blue: "#0284c7",
  blueFill: "#f0f9ff",
  blueInk: "#0369a1",
  green: "#059669",
  greenFill: "#ecfdf5",
  greenInk: "#065f46",
  orange: "#ea580c",
  orangeFill: "#fff7ed",
  orangeInk: "#c2410c",
  slate: "#334155",
  red: "#dc2626",
  redFill: "#fef2f2",
};

function img(src, x = 160, y = 40, w = 480, h = 300) {
  return { type: "image", src: "assets/illustrations/" + src, x, y, width: w, height: h };
}
function rect(x, y, w, h, fill, stroke) {
  return { type: "rect", x, y, width: w, height: h, fill, stroke, strokeWidth: 1.5, rx: 8 };
}
function text(x, y, t, color, size = 14, weight = "bold") {
  return { type: "text", x, y, text: t, color, size, weight };
}
function draw(d, stroke, width = 3, dash) {
  const el = { type: "path", d, stroke, width, fill: "none" };
  if (dash) el.strokeDasharray = dash;
  return el;
}
function circle(cx, cy, r, fill) {
  return { type: "circle", cx, cy, r, fill, stroke: "#ffffff", width: 2 };
}
function pin(cx, cy, boxX, boxY, w, h, label, pal) {
  return [
    circle(cx, cy, 6, pal.stroke),
    draw(`M ${cx + 6} ${cy} L ${boxX} ${boxY + h / 2}`, pal.stroke, 2),
    rect(boxX, boxY, w, h, pal.fill, pal.stroke),
    text(boxX + w / 2, boxY + h / 2 + 5, label, pal.ink, 13),
  ];
}
function footer(label, pal = { fill: C.blueFill, stroke: C.blue, ink: C.blueInk }) {
  return [
    rect(80, 360, 640, 50, pal.fill, pal.stroke),
    text(400, 390, label, pal.ink, 15),
  ];
}
function step(clear, narration, rule, quizQ, quizA, elements) {
  const s = { narration, rule, quizQ: quizQ || "", quizA: quizA || "", elements };
  if (clear) s.clear = true;
  return s;
}
function topic(title, watermark, cards) {
  return {
    title,
    watermark,
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" },
    ],
    scenes: {
      card_0: cards[0],
      card_1: cards[1],
      card_2: cards[2],
    },
  };
}

const palB = { fill: C.blueFill, stroke: C.blue, ink: C.blueInk };
const palG = { fill: C.greenFill, stroke: C.green, ink: C.greenInk };
const palO = { fill: C.orangeFill, stroke: C.orange, ink: C.orangeInk };

const boards = {};

boards["s7_2.1"] = topic("2.1 Dissolving", "Section 2.1: Solutions", [
  [
    step(true, "When a solid dissolves, its tiny particles spread out through the liquid. It looks like it has vanished, but it is still there.", "Solute particles mix evenly with the solvent.", "", "", [
      img("dissolving_particle_model.png", 150, 40, 500, 280),
      ...pin(250, 180, 40, 70, 150, 36, "Solute (solid)", palO),
      ...pin(520, 210, 610, 70, 160, 36, "Solvent (liquid)", palB),
    ]),
    step(false, "Together they make a solution. Sugar in tea still tastes sweet because the sugar particles are still in the drink.", "Solute + solvent → solution.", "What happens when a solid dissolves?", "Its particles separate and spread evenly through the solvent. The solid seems to disappear, but it is still there.", [
      ...footer("Nothing is destroyed. Mass stays the same.", palG),
    ]),
  ],
  [
    step(true, "The solute is what dissolves. The solvent does the dissolving. Water is the most common solvent in school chemistry.", "Solute dissolves. Solvent does the dissolving.", "Solute, solvent, solution — which is which?", "The solute dissolves. The solvent does the dissolving. Together they make a solution.", [
      img("salt_crystal_hydration.png", 160, 40, 480, 280),
      ...footer("Salt + water → salt solution", palB),
    ]),
  ],
  [
    step(true, "Warming or stirring speeds dissolving because particles bump into each other more often.", "More collisions → faster dissolving.", "Why does stirring or warming often speed up dissolving?", "Particles collide more often, so the solid breaks up into the solvent faster.", [
      img("kinetic_energy_collisions.png", 150, 40, 500, 270),
      ...footer("Heat and stirring both raise collision rate", palO),
    ]),
  ],
]);

boards["s7_2.2"] = topic("2.2 Solubility", "Section 2.2: How much will dissolve?", [
  [
    step(true, "Solubility is how many grams of solute dissolve in a set amount of solvent at a stated temperature.", "Always say the temperature with a solubility.", "What is solubility?", "The mass of solute that dissolves in a given amount of solvent at a stated temperature.", [
      img("solubility_curve_graph.png", 150, 35, 500, 280),
      ...footer("Measured in g of solute per 100 g of water", palB),
    ]),
  ],
  [
    step(true, "A saturated solution cannot hold any more solute at that temperature. Extra solid sits at the bottom.", "Saturated = full at that temperature.", "What is a saturated solution?", "One that holds as much dissolved solute as it can at that temperature. Extra solute stays undissolved.", [
      img("saturated_beaker_precipitate.png", 170, 40, 460, 280),
      draw("M 400 300 L 400 250", C.orange, 3, [5, 4]),
      text(400, 330, "Undissolved crystals", C.orangeInk, 14),
    ]),
  ],
  [
    step(true, "Most solids dissolve better in hot water. Gases do the opposite — a warm fizzy drink goes flat faster.", "Solids: hotter → more soluble. Gases: hotter → less soluble.", "How does temperature usually affect the solubility of a solid?", "Most solids are more soluble in warmer water. Gases are usually less soluble when the liquid is warmer.", [
      img("gas_vs_solid_solubility.png", 140, 40, 520, 280),
      ...footer("Always name the solute and the solvent", palG),
    ]),
  ],
]);

boards["s7_2.3"] = topic("2.3 Solubility investigation", "Section 2.3: A fair test", [
  [
    step(true, "Change only one thing. If you are testing temperature, keep the volume of water the same every time.", "Only one independent variable.", "What must stay the same in a fair solubility test?", "The volume of solvent, how you decide it is saturated, and the stirring.", [
      img("fair_test_variables_setup.svg", 140, 30, 520, 280),
      ...pin(250, 200, 30, 40, 150, 40, "What you change", palO),
      ...pin(600, 200, 620, 40, 150, 40, "What you keep same", palB),
    ]),
  ],
  [
    step(true, "Weigh the solute that dissolves and record the temperature. A graph of mass against temperature shows the pattern.", "Measure mass of solute and temperature.", "What would you measure?", "The mass of solute that dissolves, and the temperature of the solvent.", [
      img("solubility_data_graphing.svg", 140, 25, 520, 300),
      ...footer("Dependent variable: mass dissolved (g)", palG),
    ]),
  ],
  [
    step(true, "Repeat the test at each temperature. Repeats show if a result is a fluke.", "Repeats check reliability.", "Why repeat the test?", "Repeats show whether a result is reliable. A single odd reading is easier to spot.", [
      img("experimental_anomalies_chart.svg", 160, 30, 480, 280),
      text(560, 140, "Odd reading", C.orangeInk, 14),
    ]),
  ],
]);

boards["s7_2.4"] = topic("2.4 Paper chromatography", "Section 2.4: Separating dyes", [
  [
    step(true, "Paper chromatography separates a mixture of soluble dyes, such as the colours in an ink.", "Different dyes travel different distances.", "What is paper chromatography used for?", "Separating a mixture of soluble substances, such as the dyes in an ink.", [
      img("chromatography_beaker_paper.png", 170, 35, 460, 290),
      ...pin(400, 120, 560, 80, 180, 36, "Solvent soaks up", palB),
    ]),
  ],
  [
    step(true, "Draw the start line in pencil. Ink from a pen would dissolve and run with the dyes.", "Pencil graphite does not dissolve.", "Why must the start line be drawn in pencil?", "Pencil does not dissolve in the solvent. Ink from a pen would run and spoil the result.", [
      img("chromatography_pencil_line.png", 160, 40, 480, 280),
      ...footer("Start line sits above the solvent", palO),
    ]),
  ],
  [
    step(true, "If a spot does not move, that substance does not dissolve in the solvent you chose.", "No movement → insoluble in that solvent.", "A spot does not move. What does that tell you?", "That substance does not dissolve in the solvent you chose.", [
      img("chromatography_insoluble_spot.png", 170, 40, 460, 280),
      ...footer("Choose a different solvent to move it", palG),
    ]),
  ],
]);

boards["s7_3.1"] = topic("3.1 Forces and motion", "Section 3.1: What forces do", [
  [
    step(true, "A force can start, stop, speed up, slow down or turn an object, or change its shape.", "Forces change motion or shape.", "What can a force do?", "A force can start, stop, speed up, slow down or change the direction of motion, or change an object’s shape.", [
      img("force_vector_diagram.png", 150, 40, 500, 280),
      ...footer("Arrows show size and direction of a force", palB),
    ]),
  ],
  [
    step(true, "The resultant force is the one force that has the same effect as all the forces acting together.", "Add forces that help. Subtract forces that oppose.", "What is a resultant force?", "The single force that has the same effect as all the forces acting together.", [
      img("free_body_diagram_resultant.png", 160, 40, 480, 280),
    ]),
  ],
  [
    step(true, "A book sitting still on a table has a resultant force of zero. Weight down is balanced by the support force up.", "Still object → resultant force is zero.", "A book is still on a table. What is the resultant force?", "Zero. The support force from the table balances the weight.", [
      img("normal_force_equilibrium.png", 170, 40, 460, 280),
      ...footer("Balanced forces: no change in motion", palG),
    ]),
  ],
]);

boards["s7_3.2"] = topic("3.2 Speed", "Section 3.2: Distance ÷ time", [
  [
    step(true, "Average speed is how far you go divided by how long it took. Units are often metres per second.", "speed = distance ÷ time", "How do you calculate average speed?", "Average speed = distance travelled ÷ time taken. A common unit is m/s.", [
      img("speed_equation_triangle.svg", 220, 30, 360, 300),
      ...footer("Cover the letter you want to find", palB),
    ]),
  ],
  [
    step(true, "A cyclist travels 120 m in 20 s. Speed = 120 ÷ 20 = 6 m/s.", "Always divide distance by time.", "A cyclist travels 120 m in 20 s. What is the average speed?", "6 m/s.", [
      img("speed_equation_triangle.svg", 220, 30, 360, 260),
      ...footer("120 m ÷ 20 s = 6 m/s", palG),
    ]),
  ],
  [
    step(true, "A speedometer shows speed at one moment. Average speed uses the whole journey, including stops.", "Speedometer = now. Average = whole trip.", "Why is a speedometer not the same as average speed?", "It shows the speed at one moment. Average speed uses the whole journey.", [
      img("speedometer_vs_average_track.png", 140, 40, 520, 280),
    ]),
  ],
]);

boards["s7_3.3"] = topic("3.3 Describing movement", "Section 3.3: Distance–time graphs", [
  [
    step(true, "The steepness of a distance–time graph shows speed. A steeper straight line means a higher constant speed.", "Steeper line → faster. Flat line → still.", "What does the steepness of a distance–time graph show?", "Speed. A steeper straight line means a higher constant speed. A flat line means the object is still.", [
      img("distance_time_graph_axes.png", 150, 35, 500, 290),
      ...pin(520, 160, 560, 60, 200, 36, "Steep = fast", palO),
    ]),
  ],
  [
    step(true, "A curved distance–time graph means the speed is changing — speeding up or slowing down.", "Curve → changing speed.", "What does a curved distance–time graph mean?", "The speed is changing.", [
      img("distance_time_graph_axes.png", 150, 35, 500, 280),
      ...footer("A flat section means stopped", palB),
    ]),
  ],
  [
    step(true, "For a straight section, speed = change in distance ÷ change in time.", "Use that section only, not the whole graph.", "How do you find the speed from a straight section?", "Speed = change in distance ÷ change in time for that section.", [
      img("distance_time_graph_axes.png", 150, 35, 500, 280),
      ...footer("Rise ÷ run on that stretch", palG),
    ]),
  ],
]);

boards["s7_3.4"] = topic("3.4 Turning forces", "Section 3.4: Moments", [
  [
    step(true, "A moment is the turning effect of a force. Moment = force × perpendicular distance from the pivot.", "Use the distance at right angles to the force.", "What is a moment?", "The turning effect of a force. Moment = force × perpendicular distance from the pivot.", [
      img("moment_force_lever_arm.svg", 140, 30, 520, 300),
    ]),
  ],
  [
    step(true, "An object is balanced when the clockwise moment equals the anticlockwise moment.", "Same turning both ways → no rotation.", "When is an object balanced?", "When the clockwise moment equals the anticlockwise moment.", [
      img("principle_of_moments_seesaw.svg", 140, 30, 520, 300),
    ]),
  ],
  [
    step(true, "A 4 N weight sits 0.3 m from a pivot. Moment = 4 × 0.3 = 1.2 N m.", "Multiply force by distance.", "A 4 N weight sits 0.3 m from a pivot. What moment does it produce?", "1.2 N m.", [
      img("principle_of_moments_seesaw.svg", 140, 30, 520, 260),
      ...footer("4 N × 0.3 m = 1.2 N m", palG),
    ]),
  ],
]);

boards["s7_3.5"] = topic("3.5 Pressure between solids", "Section 3.5: Force ÷ area", [
  [
    step(true, "Pressure = force ÷ area. The same force on a smaller area gives a bigger pressure.", "Bigger area → smaller pressure.", "How do you calculate pressure?", "Pressure = force ÷ area. A bigger area gives a smaller pressure for the same force.", [
      img("pressure_area_solid_mechanics.svg", 140, 30, 520, 300),
    ]),
  ],
  [
    step(true, "Snowshoes are wide so they spread your weight. The pressure on the snow is smaller, so you sink less.", "Spread out the force.", "Why are snowshoes wide?", "They spread the weight over a larger area, so the pressure on the snow is smaller.", [
      img("snowshoe_pressure_distribution.png", 140, 40, 520, 280),
    ]),
  ],
  [
    step(true, "A 50 N force acts on 0.02 m². Pressure = 50 ÷ 0.02 = 2500 N/m², also called 2500 Pa.", "Pascal (Pa) is the same as N/m².", "A 50 N force acts on 0.02 m². What is the pressure?", "2500 N/m² (also called 2500 Pa).", [
      img("pressure_area_solid_mechanics.svg", 140, 30, 520, 260),
      ...footer("50 ÷ 0.02 = 2500 Pa", palG),
    ]),
  ],
]);

boards["s7_3.6"] = topic("3.6 Pressure in fluids", "Section 3.6: Liquids and gases", [
  [
    step(true, "Pressure in a liquid increases with depth, because more liquid is pressing down.", "Deeper → higher pressure.", "How does pressure in a liquid change with depth?", "It increases with depth, because more liquid is pressing down.", [
      img("fluid_pressure_depth_gradient.svg", 180, 30, 440, 320),
    ]),
  ],
  [
    step(true, "A gas exerts pressure because its particles collide with the walls of the container.", "Hits on the wall = pressure.", "Why does a gas exert pressure?", "Its particles collide with the walls of the container.", [
      img("gas_particle_container_collisions.svg", 160, 30, 480, 300),
    ]),
  ],
  [
    step(true, "Squeeze the same gas into a smaller volume, at the same temperature, and the pressure rises. Particles hit the walls more often.", "Smaller space → more hits → higher pressure.", "What happens to gas pressure if you squeeze the same gas into a smaller volume, at the same temperature?", "Pressure rises, because particles hit the walls more often.", [
      img("boyles_law_volume_pressure.svg", 140, 30, 520, 300),
    ]),
  ],
]);

boards["s7_3.7"] = topic("3.7 Particles on the move", "Section 3.7: Diffusion", [
  [
    step(true, "Diffusion is particles spreading from where they are crowded to where they are less crowded.", "Net movement: high concentration → low.", "What is diffusion?", "The spreading of particles from a region where they are crowded to one where they are less crowded.", [
      img("diffusion_concentration_gradient.svg", 140, 30, 520, 300),
    ]),
  ],
  [
    step(true, "Diffusion is faster in a gas than in a liquid because gas particles move faster and are further apart.", "Gases spread more quickly.", "Why does diffusion happen faster in a gas than in a liquid?", "Gas particles move faster and are further apart, so they spread more quickly.", [
      img("diffusion_gas_vs_liquid.svg", 140, 30, 520, 300),
    ]),
  ],
  [
    step(true, "Perfume fills a room even with no wind because the perfume particles diffuse through the air by themselves.", "No fan needed — particles move on their own.", "Why does the smell of perfume fill a room even with no wind?", "Perfume particles diffuse through the air by themselves.", [
      img("perfume_diffusion_room_model.png", 140, 40, 520, 280),
    ]),
  ],
]);

boards["s7_4.1"] = topic("4.1 The Sonoran desert", "Section 4.1: Living and non-living", [
  [
    step(true, "An ecosystem is a community of living things plus the non-living parts of their habitat, such as water, soil and climate.", "Living + non-living together.", "What is an ecosystem?", "A community of living things together with the non-living parts of their habitat, such as water, soil and climate.", [
      img("ecosystem_components_biotic_abiotic.png", 140, 35, 520, 290),
      ...pin(220, 90, 30, 40, 140, 36, "Sun & rain", palO),
      ...pin(500, 220, 600, 80, 170, 36, "Plants & animals", palG),
    ]),
  ],
  [
    step(true, "Desert plants survive little water with a waxy skin, deep or wide roots, or fleshy tissue that stores water.", "Adaptations save water.", "Give one way a desert plant survives little water.", "A waxy surface, deep or wide roots, or fleshy tissue that stores water.", [
      img("desert_plant_adaptations_cactus.png", 180, 30, 440, 300),
    ]),
  ],
  [
    step(true, "Desert animals are often active at night because it is cooler, so they lose less water.", "Night-time = less heat, less water lost.", "Why are desert animals often active at night?", "It is cooler, so they lose less water.", [
      img("nocturnal_desert_animal_adaptations.png", 140, 35, 520, 290),
    ]),
  ],
]);

boards["s7_4.2"] = topic("4.2 Different ecosystems", "Section 4.2: Habitat and food webs", [
  [
    step(true, "Two ecosystems differ because of climate, soil, water and the species that can live there.", "Rainforest and desert support different communities.", "What makes two ecosystems different?", "Climate, soil, water and the species that can live there.", [
      img("biome_comparison_split.png", 140, 40, 520, 280),
    ]),
  ],
  [
    step(true, "A habitat is the place where an organism lives, and which provides what it needs.", "Home + food + shelter.", "What is a habitat?", "The place where an organism lives, and which provides what it needs.", [
      img("ecological_niche_habitat.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "A food web is better than one food chain because most organisms eat, or are eaten by, more than one species.", "Many links, not one line.", "Why does a food web describe an ecosystem better than one food chain?", "Most organisms eat, or are eaten by, more than one species.", [
      img("food_web_trophic_levels.png", 150, 40, 500, 280),
    ]),
  ],
]);

boards["s7_4.3"] = topic("4.3 Intruders in an ecosystem", "Section 4.3: Invasive species", [
  [
    step(true, "An invasive species is introduced to a place where it does not naturally live, then spreads and harms the species already there.", "New arrival that takes over.", "What is an invasive species?", "A species introduced to a place where it does not naturally live, and which spreads and harms the species already there.", [
      img("ecosystem_invasive_disruption.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "An intruder can increase very quickly if it has no predators or diseases in the new place, and plenty of food.", "Nothing to keep numbers down.", "Why can an intruder increase very quickly?", "It may have no predators or diseases in the new place, and plenty of food.", [
      img("population_graph_explosion.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Damage can include eating native species, competing for food, or changing the habitat.", "Native species lose out.", "Name one damage an invasive species can cause.", "It can eat native species, compete for food, or change the habitat.", [
      img("ecosystem_native_balance.png", 150, 40, 500, 280),
      ...footer("Balance is easier to lose than to restore", palO),
    ]),
  ],
]);

boards["s7_4.4"] = topic("4.4 Bioaccumulation", "Section 4.4: Poisons in a food chain", [
  [
    step(true, "Bioaccumulation: a poison that is not broken down builds up in a body. Animals higher in the food chain get a larger dose.", "The poison adds up as you go up.", "What is bioaccumulation?", "A poison that is not broken down builds up in a body. Animals higher in the food chain get a larger dose.", [
      img("bioaccumulation_trophic_pyramid.svg", 180, 25, 440, 320),
    ]),
  ],
  [
    step(true, "The top predator is often most affected because it eats many contaminated animals, so the poison adds up.", "Hawk > fish > plankton.", "Why is the top predator often most affected?", "It eats many contaminated animals, so the poison adds up.", [
      img("biomagnification_hawk_fish.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "A chemical that seems harmless in water can still harm birds because it becomes much more concentrated at each step of the food chain.", "Tiny in water, large in the bird.", "Why can a chemical that seems harmless in water still harm birds?", "It becomes much more concentrated at each step of the food chain.", [
      img("pesticide_water_test_vs_bird.png", 140, 40, 520, 280),
    ]),
  ],
]);

boards["s7_5.1"] = topic("5.1 The structure of the atom", "Section 5.1: Inside an atom", [
  [
    step(true, "An atom has a nucleus of protons and neutrons, with electrons in shells around it.", "Tiny nucleus, electrons further out.", "What is inside an atom?", "A nucleus of protons and neutrons, with electrons in shells around it.", [
      img("bohr_atom_model_labeled.png", 180, 30, 440, 300),
    ]),
  ],
  [
    step(true, "The proton decides the element. Every atom of an element has the same number of protons.", "Proton number = which element.", "Which particle decides the element?", "The proton. Every atom of an element has the same number of protons.", [
      img("periodic_table_cell_carbon.png", 200, 40, 400, 280),
      ...footer("Carbon always has 6 protons", palB),
    ]),
  ],
  [
    step(true, "An atom with 8 protons and 8 neutrons has mass number 16. Mass number is protons plus neutrons.", "Mass number = p + n.", "An atom has 8 protons and 8 neutrons. What is its mass number?", "16. Mass number is protons plus neutrons.", [
      img("bohr_atom_model_labeled.png", 180, 30, 440, 260),
      ...footer("8 + 8 = 16", palG),
    ]),
  ],
]);

boards["s7_5.2"] = topic("5.2 Purity", "Section 5.2: One substance or a mix?", [
  [
    step(true, "In chemistry, pure means a single substance, not a mixture. Pure substances melt and boil at fixed temperatures.", "One kind of particle.", "What does pure mean in chemistry?", "A single substance, not a mixture. Pure substances melt and boil at fixed temperatures.", [
      img("pure_substance_vs_mixture_particle.svg", 140, 30, 520, 300),
    ]),
  ],
  [
    step(true, "Impurities usually lower the melting point and make the sample melt over a range of temperatures.", "A range, not a sharp point, means impure.", "How can a melting point show that a sample is impure?", "Impurities usually lower the melting point and make it melt over a range of temperatures.", [
      img("melting_point_graph_pure_impure.svg", 140, 25, 520, 310),
    ]),
  ],
  [
    step(true, "Clean air is not a pure substance. It is a mixture of nitrogen, oxygen, argon, carbon dioxide and other gases.", "Air is a mixture of gases.", "Is clean air a pure substance?", "No. It is a mixture of nitrogen, oxygen, argon, carbon dioxide and other gases.", [
      img("air_composition_mixture_gases.svg", 140, 25, 520, 310),
    ]),
  ],
]);

boards["s7_5.3"] = topic("5.3 Weather and climate", "Section 5.3: Day-to-day vs long-term", [
  [
    step(true, "Weather is the day-to-day conditions. Climate is the average weather of a place over many years.", "Weather = this week. Climate = decades.", "What is the difference between weather and climate?", "Weather is the day-to-day conditions. Climate is the average weather of a place over many years.", [
      img("weather_vs_climate_diagram.png", 140, 35, 520, 290),
    ]),
  ],
  [
    step(true, "A weather report describes temperature, rainfall, wind, cloud and sunshine.", "Instruments collect the data.", "Name three things a weather report describes.", "Temperature, rainfall, wind, cloud and sunshine.", [
      img("meteorology_instruments_data.png", 140, 40, 520, 280),
    ]),
  ],
  [
    step(true, "A cold week cannot, by itself, disprove a warming climate. Climate is a long-term average. One week is weather.", "Look at the trend, not one dip.", "Why can a cold week not, by itself, disprove a warming climate?", "Climate is a long-term average. One week is weather.", [
      img("trend_vs_variation_graph.svg", 140, 25, 520, 310),
    ]),
  ],
]);

boards["s7_5.4"] = topic("5.4 Climate and ice ages", "Section 5.4: Ice in the past", [
  [
    step(true, "An ice age is a long period when large ice sheets cover much more of the Earth than they do today.", "More ice, colder climate.", "What is an ice age?", "A long period when large ice sheets cover much more of the Earth than they do today.", [
      img("global_ice_extent_map.png", 140, 40, 520, 280),
    ]),
  ],
  [
    step(true, "Evidence includes rocks scratched by glaciers, and piles of rock left when ice melted.", "Landforms remember ice ages.", "Give one piece of evidence for past ice ages.", "Rocks scratched by glaciers, or piles of rock left when ice melted.", [
      img("glacial_striations_moraines.png", 150, 35, 500, 290),
      ...pin(280, 280, 40, 40, 180, 36, "Scratches", palB),
      ...pin(520, 200, 580, 40, 180, 36, "Moraine rocks", palO),
    ]),
  ],
  [
    step(true, "Ice ages have happened more than once. Earth has had several cold glacial periods and warmer gaps between them.", "Cycles, not a one-off.", "Have ice ages happened only once?", "No. Earth has had several cold glacial periods and warmer gaps between them.", [
      img("ice_core_temp_cycles.svg", 140, 25, 520, 310),
    ]),
  ],
]);

boards["s7_5.5"] = topic("5.5 Atmosphere and climate", "Section 5.5: Greenhouse gases", [
  [
    step(true, "Greenhouse gases such as carbon dioxide and methane trap some of the heat that Earth radiates, so the surface stays warmer.", "Some heat is kept in.", "How does the atmosphere affect climate?", "Greenhouse gases such as carbon dioxide and methane trap some of the heat that Earth radiates, so the surface stays warmer.", [
      img("greenhouse_effect_radiation_model.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "The two most abundant gases in dry air are nitrogen (about 78%) and oxygen (about 21%).", "CO₂ is only a tiny fraction, but it still matters.", "Name the two most abundant gases in dry air.", "Nitrogen (about 78%) and oxygen (about 21%).", [
      img("atmospheric_gas_composition_pie_chart.png", 180, 40, 440, 280),
    ]),
  ],
  [
    step(true, "Adding carbon dioxide tends to warm the climate because more of the outgoing heat is trapped in the atmosphere.", "More CO₂ → more trapped heat.", "Why does adding carbon dioxide tend to warm the climate?", "More of the outgoing heat is trapped in the atmosphere.", [
      img("climate_warming_trend_graph.png", 150, 40, 500, 280),
    ]),
  ],
]);

boards["s7_6.1"] = topic("6.1 Reflection", "Section 6.1: Bouncing light", [
  [
    step(true, "The law of reflection: the angle of incidence equals the angle of reflection. Both angles are measured from the normal.", "i = r, from the normal.", "State the law of reflection.", "The angle of incidence equals the angle of reflection. Both angles are measured from the normal.", [
      img("law_of_reflection.svg", 160, 20, 480, 300),
      ...pin(280, 200, 40, 40, 160, 36, "Incident ray", palO),
      ...pin(720, 200, 600, 40, 170, 36, "Reflected ray", palB),
    ]),
  ],
  [
    step(true, "The normal is a line at 90° to the surface, drawn where the ray hits.", "Always measure from the dashed line.", "What is the normal?", "A line at 90° to the surface, drawn where the ray hits.", [
      img("law_of_reflection.svg", 160, 20, 480, 300),
      ...footer("Dashed line = the normal", palG),
    ]),
  ],
  [
    step(true, "A flat mirror reflects rays in a regular way, so you see a clear image. Crumpled foil scatters the rays.", "Smooth → clear. Rough → scatter.", "Why can you see a clear image in a flat mirror but not in a crumpled sheet of foil?", "A flat mirror reflects rays in a regular way. A rough surface scatters them.", [
      img("law_of_reflection.svg", 160, 20, 480, 260),
      ...footer("Regular reflection needs a smooth surface", palO),
    ]),
  ],
]);

boards["s7_6.2"] = topic("6.2 Refraction", "Section 6.2: Light changing speed", [
  [
    step(true, "Refraction is the change in direction of light when it passes from one transparent material into another, because its speed changes.", "Speed change → bend.", "What is refraction?", "The change in direction of light when it passes from one transparent material into another, because its speed changes.", [
      img("refraction_glass_block.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "When a ray enters glass from air it bends towards the normal, because it slows down.", "Air → glass: towards the normal.", "Which way does a ray bend when it enters glass from air?", "Towards the normal, because it slows down.", [
      img("refraction_glass_block_exit.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "A straw looks bent in water because light from the straw refracts as it leaves the water, so your eye traces it back to the wrong place.", "Your brain assumes light travelled in a straight line.", "Why does a straw look bent in a glass of water?", "Light from the straw refracts as it leaves the water, so the eye traces it back to the wrong place.", [
      img("refraction_bent_straw_glass.png", 160, 40, 480, 280),
    ]),
  ],
]);

boards["s7_6.3"] = topic("6.3 Making rainbows", "Section 6.3: Splitting white light", [
  [
    step(true, "A prism makes a spectrum because white light is a mixture of colours. Each colour refracts by a slightly different amount.", "Different colours bend by different amounts.", "Why does a prism make a spectrum?", "White light is a mixture of colours. Each colour refracts by a slightly different amount, so they spread out.", [
      img("prism_dispersion_spectrum.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Violet is refracted most by a glass prism. Red is refracted least.", "Red bends least. Violet bends most.", "Which colour is refracted most by a glass prism?", "Violet. Red is refracted least.", [
      img("visible_light_spectrum_wavelengths.png", 140, 50, 520, 240),
      ...footer("ROYGBIV — red on the outside of a rainbow", palB),
    ]),
  ],
  [
    step(true, "Raindrops make a rainbow because sunlight refracts and reflects inside the drops, and the colours leave at different angles.", "Each drop acts like a tiny prism.", "Why do raindrops make a rainbow?", "Sunlight refracts and reflects inside the drops, and the colours leave at different angles.", [
      img("raindrop_internal_reflection_dispersion.png", 160, 40, 480, 280),
    ]),
  ],
]);

boards["s7_6.4"] = topic("6.4 Galaxies", "Section 6.4: Stars in a huge group", [
  [
    step(true, "A galaxy is a huge collection of stars, gas and dust held together by gravity. The Sun is in the Milky Way.", "Billions of stars, not just a few.", "What is a galaxy?", "A huge collection of stars, gas and dust held together by gravity. The Sun is in the Milky Way.", [
      img("milky_way_galaxy_solar_system.png", 140, 35, 520, 290),
    ]),
  ],
  [
    step(true, "The Solar System is one star and its planets, inside the Milky Way galaxy. It is not the same as a galaxy.", "Solar System ⊂ Milky Way.", "Is the Solar System the same thing as a galaxy?", "No. The Solar System is one star and its planets, inside the Milky Way galaxy.", [
      img("milky_way_galaxy_solar_system.png", 140, 35, 520, 260),
      ...footer("Our Sun is one star among billions", palO),
    ]),
  ],
  [
    step(true, "Distant galaxies look like faint smudges because they are extremely far away, so their light is dim and the stars blur together.", "Too far to see as separate stars.", "Why do distant galaxies look like faint smudges?", "They are extremely far away, so their light is dim and the stars blur together.", [
      img("milky_way_galaxy_solar_system.png", 140, 35, 520, 260),
      ...footer("Distance makes the light faint", palG),
    ]),
  ],
]);

boards["s7_6.5"] = topic("6.5 Rocks in space", "Section 6.5: Asteroids and meteors", [
  [
    step(true, "Asteroids are rocky bodies that orbit the Sun, mostly between Mars and Jupiter. Smaller pieces can enter Earth's atmosphere.", "Rocks in orbit around the Sun.", "What are rocks in space?", "Asteroids are rocky bodies that orbit the Sun, mostly between Mars and Jupiter. Smaller pieces can enter Earth's atmosphere.", [
      img("meteor_streak_asteroids.png", 140, 35, 520, 290),
    ]),
  ],
  [
    step(true, "When a small space rock enters the atmosphere you see a streak of light as it heats up. Most pieces burn away before they reach the ground.", "A shooting star is a burning rock.", "What do you see when a small space rock enters the atmosphere?", "A streak of light as it heats up. Most of these pieces burn away before they reach the ground.", [
      img("meteor_streak_asteroids.png", 140, 35, 520, 260),
      ...footer("Heat from friction with the air", palO),
    ]),
  ],
  [
    step(true, "The Solar System is the Sun and the objects that orbit it. A galaxy contains billions of stars.", "Do not mix these two ideas.", "Is the Solar System the same as a galaxy?", "No. The Solar System is the Sun and the objects that orbit it. A galaxy contains billions of stars.", [
      img("milky_way_galaxy_solar_system.png", 140, 35, 520, 260),
      ...footer("Planets around one star ≠ a galaxy", palG),
    ]),
  ],
]);

boards["s7_7.1"] = topic("7.1 Nutrients", "Section 7.1: What food is for", [
  [
    step(true, "The main nutrient groups are carbohydrates, fats, proteins, vitamins, minerals, water and fibre.", "Seven groups to name.", "Name the main nutrient groups.", "Carbohydrates, fats, proteins, vitamins, minerals, water and fibre.", [
      img("nutrient_groups_plate.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "Carbohydrates and fats supply energy. Proteins are used for growth and repair.", "Energy foods vs building foods.", "What is each of carbohydrate, fat and protein mainly for?", "Carbohydrates and fats supply energy. Proteins are used for growth and repair.", [
      img("cell_mitochondrion_energy_flow.png", 150, 40, 500, 240),
      ...footer("Mitochondria release energy from glucose", palO),
    ]),
  ],
  [
    step(true, "You still need tiny amounts of vitamins and minerals for particular jobs, such as vitamin C for healthy tissue and calcium for bones.", "A little goes a long way.", "Why do you still need tiny amounts of vitamins and minerals?", "They are needed for particular jobs, such as vitamin C for healthy tissue and calcium for bones.", [
      img("nutrient_groups_plate.png", 150, 35, 500, 260),
      ...footer("Shortage of one vitamin can still harm health", palG),
    ]),
  ],
]);

boards["s7_7.2"] = topic("7.2 A balanced diet", "Section 7.2: The right amounts", [
  [
    step(true, "A balanced diet is the right amounts of every nutrient and energy for your age, size and activity — not simply ‘eating less’.", "Right mix, not just less food.", "What is a balanced diet?", "The right amounts of every nutrient and energy for your age, size and activity, not simply eating less.", [
      img("nutrient_groups_plate.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "Malnutrition is a diet that is short of a nutrient, or that supplies too much energy, so health is harmed.", "Too little or too much can both harm.", "What is malnutrition?", "A diet that is short of a nutrient, or that supplies too much energy, so health is harmed.", [
      img("exercise_physiology_feedback_loop.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "An athlete needs more energy than someone who sits all day because their muscles do more work, so respiration uses more glucose.", "More work → more energy food.", "Why does an athlete need more energy than someone who sits all day?", "Their muscles do more work, so respiration uses more glucose.", [
      img("exercise_physiology_feedback_loop.png", 150, 40, 500, 260),
      ...footer("Match intake to activity", palO),
    ]),
  ],
]);

boards["s7_7.3"] = topic("7.3 Growth, development and health", "Section 7.3: Building new tissue", [
  [
    step(true, "To grow, the body needs energy, proteins to build new cells, and minerals such as calcium, plus enough sleep and activity.", "Growth is making new tissue.", "What does the body need in order to grow?", "Energy, proteins to build new cells, and minerals such as calcium, plus enough sleep and activity.", [
      img("growth_vs_weight_gain.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "If a diet is missing vitamin C for a long time, health suffers. Too little vitamin C can cause scurvy.", "One missing vitamin can still make you ill.", "What can happen if a diet is missing vitamin C for a long time?", "Health suffers. Too little vitamin C can cause scurvy.", [
      img("nutrient_groups_plate.png", 150, 35, 500, 260),
      ...footer("Fruit and vegetables supply vitamin C", palO),
    ]),
  ],
  [
    step(true, "Growth is not the same as putting on weight. Growth is making new tissue. Weight can rise just from stored fat.", "Taller and stronger ≠ only heavier.", "Why is growth not the same as putting on weight?", "Growth is making new tissue. Weight can rise just from stored fat.", [
      img("growth_vs_weight_gain.png", 150, 35, 500, 260),
      ...footer("New bone and muscle versus stored fat", palG),
    ]),
  ],
]);

boards["s7_7.4"] = topic("7.4 Moving the body", "Section 7.4: Muscles and joints", [
  [
    step(true, "Muscles pull on bones across a joint. They work in pairs, because a muscle can pull but not push.", "Pull only — so you need two.", "How do muscles move a bone?", "Muscles pull on bones across a joint. They work in pairs, because a muscle can pull but not push.", [
      img("muscle_contraction_pull_mechanism.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "An antagonistic pair is two muscles with opposite effects, such as the biceps bending the arm and the triceps straightening it.", "One contracts while the other relaxes.", "What is an antagonistic pair?", "Two muscles with opposite effects, such as the biceps bending the arm and the triceps straightening it.", [
      img("antagonistic_muscle_pair_arm.png", 160, 40, 480, 280),
    ]),
  ],
  [
    step(true, "Ligaments hold bones together at a joint. Tendons join muscle to bone.", "Ligament = bone to bone. Tendon = muscle to bone.", "What do ligaments and tendons do?", "Ligaments hold bones together at a joint. Tendons join muscle to bone.", [
      img("knee_joint_ligaments_tendons.png", 160, 40, 480, 280),
    ]),
  ],
]);

boards["s7_8.1"] = topic("8.1 Exothermic reactions", "Section 8.1: Energy given out", [
  [
    step(true, "An exothermic reaction transfers energy to the surroundings, usually as heat, so the temperature rises.", "Heat goes out. Thermometer goes up.", "What is an exothermic reaction?", "One that transfers energy to the surroundings, usually as heat, so the temperature rises.", [
      img("exothermic_burning_thermometer.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "Everyday examples include burning a fuel, or the setting of some plasters.", "Combustion is exothermic.", "Give one everyday example.", "Burning a fuel, or the setting of some plasters.", [
      img("exothermic_burning_thermometer.png", 150, 35, 500, 260),
      ...footer("You can feel the heat given out", palO),
    ]),
  ],
  [
    step(true, "To show a reaction is exothermic, measure the temperature of the mixture before and after. A rise means energy has been given out.", "Use a thermometer — don’t just guess.", "How would you show a reaction is exothermic?", "Measure the temperature of the mixture before and after. A rise means energy has been given out.", [
      img("exothermic_burning_thermometer.png", 150, 35, 500, 260),
      ...footer("Temperature up = exothermic", palG),
    ]),
  ],
]);

boards["s7_8.2"] = topic("8.2 Endothermic reactions", "Section 8.2: Energy taken in", [
  [
    step(true, "An endothermic reaction takes in energy from the surroundings, so the temperature falls.", "Heat goes in. Thermometer goes down.", "What is an endothermic reaction?", "One that takes in energy from the surroundings, so the temperature falls.", [
      img("endothermic_dissolving_thermometer.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "Dissolving some salts, such as ammonium chloride, in water is an endothermic change.", "The beaker feels colder.", "Give one example.", "Dissolving some salts, such as ammonium chloride, in water.", [
      img("endothermic_dissolving_thermometer.png", 150, 35, 500, 260),
      ...footer("Temperature down = endothermic", palB),
    ]),
  ],
  [
    step(true, "Not every temperature drop is a chemical reaction. Melting ice also takes in energy, but it is a physical change.", "Chemical vs physical.", "Is every temperature drop a chemical reaction?", "No. Melting ice also takes in energy, but it is a physical change.", [
      img("endothermic_dissolving_thermometer.png", 150, 35, 500, 260),
      ...footer("Ice melting is still H₂O — just a different state", palO),
    ]),
  ],
]);

boards["s7_8.3"] = topic("8.3 Metals and oxygen", "Section 8.3: Making oxides", [
  [
    step(true, "When a metal burns or corrodes in air it forms a metal oxide. The metal has been oxidised.", "Metal + oxygen → metal oxide.", "What forms when a metal burns or corrodes in air?", "A metal oxide. The metal has been oxidised.", [
      img("copper_pipe_reactivity.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Reactive metals such as magnesium and sodium react most readily with oxygen. Gold hardly reacts at all.", "Reactivity series: top reacts, bottom does not.", "Which metals react most readily with oxygen?", "The reactive ones, such as magnesium and sodium. Gold hardly reacts at all.", [
      img("reactivity_series_water_comparison.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Word equation: magnesium + oxygen → magnesium oxide.", "Name the oxide after the metal.", "Write a word equation for magnesium burning.", "magnesium + oxygen → magnesium oxide.", [
      img("exothermic_burning_thermometer.png", 150, 35, 500, 260),
      ...footer("magnesium + oxygen → magnesium oxide", palG),
    ]),
  ],
]);

boards["s7_8.4"] = topic("8.4 Metals and water", "Section 8.4: Hydrogen from water", [
  [
    step(true, "The most reactive metals react with water to make a metal hydroxide and hydrogen gas.", "Metal + water → hydroxide + hydrogen.", "What do the most reactive metals do in water?", "They react to make a metal hydroxide and hydrogen gas.", [
      img("alkali_metal_water_reaction.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Potassium is more reactive with water than copper. Potassium reacts vigorously. Copper does not react with water.", "Copper is low in the reactivity series.", "Which is more reactive with water, potassium or copper?", "Potassium. It reacts vigorously. Copper does not react with water.", [
      img("reactivity_series_water_comparison.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Test the gas with a lit splint. A squeaky pop means the gas is hydrogen.", "Pop test = hydrogen.", "How can you test the gas given off?", "A lit splint gives a squeaky pop if the gas is hydrogen.", [
      img("hydrogen_squeaky_pop_test_tube.png", 160, 40, 480, 280),
    ]),
  ],
]);

boards["s7_8.5"] = topic("8.5 Metals and dilute acids", "Section 8.5: A salt and hydrogen", [
  [
    step(true, "A metal reacting with a dilute acid makes a salt and hydrogen. Hydrochloric acid makes chlorides.", "Metal + acid → salt + hydrogen.", "What is made when a metal reacts with a dilute acid?", "A salt and hydrogen. The salt depends on the acid: hydrochloric acid makes chlorides.", [
      img("metal_acid_reaction_beaker.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "zinc + hydrochloric acid → zinc chloride + hydrogen.", "Name the salt from the metal and the acid.", "Write the word equation for zinc and hydrochloric acid.", "zinc + hydrochloric acid → zinc chloride + hydrogen.", [
      img("zinc_hcl_equation.png", 150, 50, 500, 240),
    ]),
  ],
  [
    step(true, "Copper is used for water pipes because it is low in the reactivity series, so it does not react with water or dilute acids in ordinary use. Magnesium would.", "Unreactive metal lasts in pipes.", "Why is copper used for water pipes when magnesium would not be?", "Copper is low in the reactivity series, so it does not react with water or dilute acids in ordinary use.", [
      img("copper_pipe_reactivity.png", 150, 40, 500, 280),
    ]),
  ],
]);

boards["s7_9.1"] = topic("9.1 Magnetic fields", "Section 9.1: Where magnets act", [
  [
    step(true, "A magnetic field is the region around a magnet where it can attract magnetic materials or push and pull other magnets.", "The field is invisible, but it is real.", "What is a magnetic field?", "The region around a magnet where it can attract magnetic materials or push and pull other magnets.", [
      img("bar_magnet_field_lines.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "Iron, steel, nickel and cobalt are magnetic. Aluminium and copper are not.", "Only some metals are magnetic.", "Which materials are magnetic?", "Iron, steel, nickel and cobalt. Most other metals, such as aluminium and copper, are not.", [
      img("bar_magnet_field_lines.png", 150, 35, 500, 260),
      ...footer("Iron · steel · nickel · cobalt", palG),
    ]),
  ],
  [
    step(true, "Field lines show the direction a north pole would move: out from north, round, in to south. Lines never cross.", "Arrows: north → south outside the magnet.", "What do field lines show?", "The direction a north pole would move, from the north pole of a magnet towards the south pole.", [
      img("bar_magnet_field_lines.png", 150, 35, 500, 260),
      ...footer("Closer lines mean a stronger field", palB),
    ]),
  ],
]);

boards["s7_9.2"] = topic("9.2 The Earth as a giant magnet", "Section 9.2: Why a compass works", [
  [
    step(true, "A compass points north because Earth has a magnetic field. The compass needle lines up with it.", "Earth behaves like a giant bar magnet.", "Why does a compass point north?", "Earth has a magnetic field. The compass needle lines up with it.", [
      img("earth_magnetic_field_compass.png", 150, 35, 500, 290),
    ]),
  ],
  [
    step(true, "Magnetic north is not exactly at the geographic North Pole, and it slowly moves.", "Two different ‘norths’.", "Is the magnetic pole exactly at the geographic North Pole?", "No. Magnetic north is in a different place and it slowly moves.", [
      img("earth_magnetic_field_compass.png", 150, 35, 500, 260),
      ...footer("Compass north ≠ map North Pole", palO),
    ]),
  ],
  [
    step(true, "The north-seeking pole of the needle points towards Earth’s magnetic north.", "The needle’s N end is attracted that way.", "Which pole of a compass needle points towards Earth’s magnetic north?", "The north-seeking pole of the needle.", [
      img("earth_magnetic_field_compass.png", 150, 35, 500, 260),
      ...footer("Opposite poles attract", palG),
    ]),
  ],
]);

boards["s7_9.3"] = topic("9.3 Electromagnets", "Section 9.3: A magnet you can switch", [
  [
    step(true, "Make an electromagnet by passing a current through a coil of wire, usually wound on an iron core.", "Coil + current + iron core.", "How do you make an electromagnet?", "Pass a current through a coil of wire, usually wound on an iron core.", [
      img("solenoid_iron_core_circuit.png", 150, 40, 500, 280),
    ]),
  ],
  [
    step(true, "Make it stronger with more turns of wire, or a larger current.", "More turns or more current.", "Name two ways to make an electromagnet stronger.", "More turns of wire, or a larger current.", [
      img("electromagnet_variables_strength.png", 140, 40, 520, 280),
    ]),
  ],
  [
    step(true, "An electromagnet can be switched off by stopping the current, so it can pick up and then drop a load. A permanent magnet cannot do that.", "On for lifting. Off for dropping.", "Why is an electromagnet useful when a permanent magnet is not?", "It can be switched off by stopping the current, so it can pick up and then drop a load.", [
      img("scrapyard_electromagnet_crane.png", 150, 40, 500, 280),
    ]),
  ],
]);

boards["s7_9.4"] = topic("9.4 Investigating electromagnets", "Section 9.4: A fair strength test", [
  [
    step(true, "Compare two electromagnets fairly by counting how many paper clips each picks up, changing only one thing at a time, such as the number of turns.", "One independent variable.", "How could you compare two electromagnets fairly?", "Count how many paper clips each picks up, changing only one thing at a time, such as the number of turns.", [
      img("electromagnet_variables_strength.png", 140, 40, 520, 280),
    ]),
  ],
  [
    step(true, "If you are testing the number of turns, keep the core, the current, and how you count the clips the same.", "Control variables stay fixed.", "What should you keep the same?", "The core, the current, and how you count the clips, if you are testing the number of turns.", [
      img("electromagnet_variables_strength.png", 140, 40, 520, 260),
      ...footer("Change one factor only", palO),
    ]),
  ],
  [
    step(true, "You should expect more turns, or a bigger current, to pick up more clips, up to a limit.", "Stronger field → more clips, then a plateau.", "What pattern should you expect?", "More turns, or a bigger current, lets the electromagnet pick up more clips, up to a limit.", [
      img("scrapyard_electromagnet_crane.png", 150, 40, 500, 260),
      ...footer("Record clips as a number, then plot a graph", palG),
    ]),
  ],
]);

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  return ctx.window.INTERACTIVE_WHITEBOARD_DATA || {};
}

const root = __dirname;
const data = load(path.join(root, "interactive-whiteboard-data.js"));
Object.assign(data, boards);

const missing = [];
Object.values(boards).forEach((board) => {
  Object.values(board.scenes).forEach((steps) =>
    steps.forEach((st) =>
      (st.elements || []).forEach((el) => {
        if (el.type === "image") {
          const p = path.join(root, el.src);
          if (!fs.existsSync(p)) missing.push(el.src);
        }
      })
    )
  );
});
if (missing.length) {
  console.log("MISSING\n" + [...new Set(missing)].join("\n"));
  process.exit(1);
}

fs.writeFileSync(
  path.join(root, "interactive-whiteboard-data.js"),
  "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n"
);

const extra = {};
Object.keys(data)
  .filter((k) => /^s7_[2-9]\./.test(k))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach((k) => {
    extra[k] = data[k];
  });
fs.writeFileSync(
  path.join(root, "iwb-y7-science-enhanced.js"),
  "// Year 7 Science Ch2–9 — Chapter 1 style image boards for 13-year-olds\n" +
    "window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};\n" +
    "Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, " +
    JSON.stringify(extra, null, 2) +
    ");\n"
);

console.log("installed " + Object.keys(boards).length + " topics");
