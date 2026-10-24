(function () {
  function topic(id, title, rows) {
    return {
      id: id,
      title: title,
      cards: rows.map(function (row) {
        return { kind: row[0], front: row[1], back: row[2] };
      }),
    };
  }

  window.STUDY_YEARS.push({
    id: "7",
    title: "Year 7",
    stage: "Cambridge Stage 8",
    book: "Learner’s Book 8",
    intro: "Stage 8 science: respiration, materials, forces, ecosystems, atoms and climate, light, diet, reactions and magnetism.",
    units: [
      {
        id: "1",
        title: "1 Respiration",
        strand: "Biology",
        intro: "How air gets into the lungs, how gases are exchanged, how breathing is controlled, and how cells release energy.",
        topics: [
          topic("1.1", "The human respiratory system", [
            ["Key idea", "Which organs make up the respiratory system?", "Nose and mouth, larynx (voice box, with the vocal cords), trachea (windpipe), bronchi, bronchioles and air sacs (alveoli), plus the diaphragm and rib muscles that move air."],
            ["Recall", "What do the rings of cartilage do?", "They keep the trachea and bronchi open so air can always pass."],
            ["Check", "Why is the lining of the airways moist and covered in mucus?", "Dust and microbes stick to the mucus. Cilia sweep it up and out of the lungs."],
          ]),
          topic("1.2", "Gas exchange", [
            ["Key idea", "Where does gas exchange happen?", "In the alveoli. Oxygen diffuses into the blood and carbon dioxide diffuses out."],
            ["Recall", "Name three features that make alveoli efficient.", "A huge surface area, walls one cell thick, and a rich blood supply."],
            ["Check", "Why is oxygen still able to enter the blood when you are resting?", "Blood arriving at the lungs has a lower oxygen concentration than the air in the alveoli, so oxygen diffuses in."],
          ]),
          topic("1.3", "Breathing", [
            ["Key idea", "How does air get into the lungs?", "The diaphragm contracts and flattens, the ribcage lifts, lung volume rises and air is drawn in."],
            ["Recall", "What happens when you breathe out?", "The diaphragm and rib muscles relax, the chest gets smaller, and air is pushed out."],
            ["Check", "Why does exercise make you breathe faster and deeper?", "Muscles need more oxygen and produce more carbon dioxide, so gas exchange has to speed up."],
          ]),
          topic("1.4", "Respiration", [
            ["Key idea", "What is respiration?", "A chemical reaction in cells that releases energy from glucose. It is not the same thing as breathing."],
            ["Recall", "Write the word equation for aerobic respiration.", "glucose + oxygen → carbon dioxide + water (+ energy)."],
            ["Check", "Where does respiration happen?", "Inside cells. Breathing only moves air; respiration is the reaction that releases energy."],
          ]),
        ],
      },
      {
        id: "2",
        title: "2 Properties of materials",
        strand: "Chemistry",
        intro: "Dissolving, how much solute a solvent can hold, how to plan a fair solubility test, and how chromatography separates mixtures.",
        topics: [
          topic("2.1", "Dissolving", [
            ["Key idea", "What happens when a solid dissolves?", "Its particles separate and spread evenly through the solvent. The solute seems to disappear, but it is still there."],
            ["Recall", "Solute, solvent, solution — which is which?", "The solute dissolves. The solvent does the dissolving. Together they make a solution."],
            ["Check", "Why does stirring or warming often speed up dissolving?", "Particles collide more often, so the solid breaks up into the solvent faster."],
          ]),
          topic("2.2", "Solutions and solubility", [
            ["Key idea", "What is solubility?", "The mass of solute that dissolves in a given amount of solvent at a stated temperature, until no more will dissolve."],
            ["Recall", "What is a saturated solution?", "One that holds as much dissolved solute as it can at that temperature. Extra solute stays undissolved."],
            ["Check", "How does temperature usually affect the solubility of a solid?", "Most solids are more soluble in warmer water. Gases are usually less soluble when the liquid is warmer."],
          ]),
          topic("2.3", "Planning a solubility investigation", [
            ["Key idea", "What must stay the same in a fair solubility test?", "The volume of solvent, how you decide the solution is saturated, and the method of stirring. Only temperature (or the solute) should change."],
            ["Recall", "What would you measure?", "The mass of solute that dissolves, and the temperature of the solvent."],
            ["Check", "Why repeat the test?", "Repeats show whether a result is reliable. A single odd reading is easier to spot."],
          ]),
          topic("2.4", "Paper chromatography", [
            ["Key idea", "What is paper chromatography used for?", "Separating a mixture of soluble substances, such as the dyes in an ink."],
            ["Recall", "Why must the start line be drawn in pencil?", "Pencil does not dissolve in the solvent. Ink from a pen would run and spoil the result."],
            ["Check", "A spot does not move. What does that tell you?", "That substance does not dissolve in the solvent you chose."],
          ]),
        ],
      },
      {
        id: "3",
        title: "3 Forces and energy",
        strand: "Physics",
        intro: "How forces change motion, how to calculate speed, moments, pressure, and how particle movement explains diffusion.",
        topics: [
          topic("3.1", "Forces and motion", [
            ["Key idea", "What can a force do?", "A force can start, stop, speed up, slow down or change the direction of motion, or change an object’s shape."],
            ["Recall", "What is a resultant force?", "The single force that has the same effect as all the forces acting together."],
            ["Check", "A book is still on a table. What is the resultant force?", "Zero. The support force from the table balances the weight."],
          ]),
          topic("3.2", "Speed", [
            ["Key idea", "How do you calculate average speed?", "Average speed = distance travelled ÷ time taken. A common unit is m/s."],
            ["Recall", "A cyclist travels 120 m in 20 s. What is the average speed?", "6 m/s."],
            ["Check", "Why is a speedometer not the same as average speed?", "It shows the speed at one moment. Average speed uses the whole journey."],
          ]),
          topic("3.3", "Describing movement", [
            ["Key idea", "What does the steepness of a distance–time graph show?", "Speed. A steeper straight line means a higher constant speed. A flat line means the object is still."],
            ["Recall", "What does a curved distance–time graph mean?", "The speed is changing."],
            ["Check", "How do you find the speed from a straight section?", "Speed = change in distance ÷ change in time for that section."],
          ]),
          topic("3.4", "Turning forces", [
            ["Key idea", "What is a moment?", "The turning effect of a force. Moment = force × perpendicular distance from the pivot."],
            ["Recall", "When is an object balanced?", "When the clockwise moment equals the anticlockwise moment."],
            ["Check", "A 4 N weight sits 0.3 m from a pivot. What moment does it produce?", "1.2 N m."],
          ]),
          topic("3.5", "Pressure between solids", [
            ["Key idea", "How do you calculate pressure?", "Pressure = force ÷ area. A bigger area gives a smaller pressure for the same force."],
            ["Recall", "Why are snowshoes wide?", "They spread the weight over a larger area, so the pressure on the snow is smaller."],
            ["Check", "A 50 N force acts on 0.02 m². What is the pressure?", "2500 N/m² (also called 2500 Pa)."],
          ]),
          topic("3.6", "Pressure in liquids and gases", [
            ["Key idea", "How does pressure in a liquid change with depth?", "It increases with depth, because more liquid is pressing down."],
            ["Recall", "Why does a gas exert pressure?", "Its particles collide with the walls of the container."],
            ["Check", "What happens to gas pressure if you squeeze the same gas into a smaller volume, at the same temperature?", "Pressure rises, because particles hit the walls more often."],
          ]),
          topic("3.7", "Particles on the move", [
            ["Key idea", "What is diffusion?", "The spreading of particles from a region where they are crowded to one where they are less crowded."],
            ["Recall", "Why does diffusion happen faster in a gas than in a liquid?", "Gas particles move faster and are further apart, so they spread more quickly."],
            ["Check", "Why does the smell of perfume fill a room even with no wind?", "Perfume particles diffuse through the air by themselves."],
          ]),
        ],
      },
      {
        id: "4",
        title: "4 Ecosystems",
        strand: "Biology",
        intro: "The Sonoran Desert food web, other ecosystems (mangrove, Arctic ice, rice paddy), invasive species in New Zealand, and how DDT builds up along a food chain.",
        topics: [
          topic("4.1", "The Sonoran desert", [
            ["Key idea", "What is an ecosystem?", "A network of interactions between living organisms and the non-living things around them (light, water, soil, air, temperature)."],
            ["Recall", "Why are many desert animals nocturnal?", "Night is cooler, so they lose less water and do not overheat."],
            ["Check", "What do the arrows in a food web represent?", "The flow of energy / who eats whom. The arrow points to the eater."],
          ]),
          topic("4.2", "Different ecosystems", [
            ["Key idea", "Is an ecosystem only a place?", "No. It is the living and non-living parts and how they interact."],
            ["Recall", "What are the producers under Arctic sea ice?", "Tiny algae (single-celled plants) growing on the underside of the ice."],
            ["Check", "Name one habitat inside a rice-paddy ecosystem.", "Any of: shallow flood water, muddy banks, rice plants, irrigation canals, air above the field."],
          ]),
          topic("4.3", "Intruders in an ecosystem", [
            ["Key idea", "What is a native species?", "A species that belongs in an ecosystem naturally — it was not brought by people."],
            ["Recall", "Why are stoats a problem in New Zealand but not in Europe?", "In Europe they evolved with prey that can cope. In New Zealand flightless birds and ground nests had no mammal predators."],
            ["Check", "What kind of species is buffelgrass in Arizona?", "An introduced / invasive species — it is growing where it does not belong."],
          ]),
          topic("4.4", "Bioaccumulation", [
            ["Key idea", "What is DDT?", "An insecticide (a chemical that kills insects). It was used against mosquitoes and crop pests."],
            ["Recall", "Why do eggs fail to hatch after DDT?", "DDT is stored in the female bird. It makes the shells thin, so eggs break."],
            ["Check", "Why is a cormorant more poisoned than a minnow?", "It eats many contaminated minnows, so all their DDT adds together in one bird."],
          ]),
        ],
      },
      {
        id: "5",
        title: "5 Materials and their structure",
        strand: "Chemistry · Earth",
        intro: "Atoms and how scientists modelled them, what ‘pure’ means (gold carat, seawater, diamonds), weather versus climate, ice ages, and how the atmosphere traps heat.",
        topics: [
          topic("5.1", "The structure of the atom", [
            ["Key idea", "What is inside an atom?", "A tiny nucleus of protons (+) and neutrons (0), with electrons (−) moving around it. Almost all the mass is in the nucleus. Opposite charges attract, so electrostatic attraction holds the atom together. Most of an atom is empty space."],
            ["Recall", "What did Rutherford’s gold foil experiment show?", "Most particles went straight through (empty space). A few bounced back (tiny dense nucleus). Thomson found the electron; Chadwick found the neutron (1932)."],
            ["Check", "An atom has 8 protons and 8 neutrons. What is its mass number?", "16. Mass number = protons + neutrons. Proton number decides the element (carbon always has 6 protons)."],
          ]),
          topic("5.2", "Purity", [
            ["Key idea", "What does pure mean, and how is gold purity given?", "Pure means one substance (a pure element has only one type of atom). Pure gold is 24 carat. 18 carat is 18/24 × 100 = 75% gold. Silver 925 is 92.5% silver."],
            ["Recall", "Why is sea salt not pure sodium chloride?", "Seawater is about 96.5% water and 3.5% mixed salts. Only about 68% of those salts is sodium chloride. Medicines need extra purification so other products do not stay mixed in."],
            ["Check", "Is clean air a pure substance?", "No. It is a mixture of nitrogen, oxygen, argon, carbon dioxide and other gases. Pure diamond is only carbon; other atoms change its colour."],
          ]),
          topic("5.3", "Weather and climate", [
            ["Key idea", "What is the difference between weather and climate?", "Weather is the atmosphere now (minutes to days). Climate is the average weather of a place over many years, usually more than 30. Meteorology studies weather; climatology studies climate."],
            ["Recall", "Name weather measurements and how to take them.", "Temperature, humidity, precipitation, wind, cloud, visibility. Same time each day; temperature in the shade."],
            ["Check", "Why can a cold week not disprove a warming climate?", "Climate is a long-term average. One week is weather. Climate zones include polar, temperate, arid, tropical and Mediterranean."],
          ]),
          topic("5.4", "Climate and ice ages", [
            ["Key idea", "What is an ice age, and what is a glacial period?", "An ice age is a long cold chapter in Earth’s past. Inside it, glacial periods have ice far from the poles; interglacials (like now) have ice mainly at the poles. About 25 000 years ago ice covered much more land."],
            ["Recall", "Give evidence that Earth was colder.", "Glacial boulders dumped when ice melted, scratches on rock, pollen in peat-bog cores, frozen mammoths, fossils of cold-climate species in places that are warm now."],
            ["Check", "Have ice ages happened only once? Are we in a glacial now?", "No — several ice ages. Today is an interglacial (not a glacial): ice is mostly near the poles, not a full glacial sheet over Europe and Canada."],
          ]),
          topic("5.5", "Atmosphere and climate", [
            ["Key idea", "How has the atmosphere changed?", "Early air from volcanoes was mostly CO₂ with almost no oxygen. Plants and microbes used CO₂ and made oxygen. Today dry air is about 78% nitrogen and 21% oxygen."],
            ["Recall", "How is extra carbon dioxide added today?", "Burning fossil fuels (carbon + oxygen → CO₂), deforestation, and making cement from limestone. Carbon was locked in coal, oil and shells until we release it."],
            ["Check", "Why does adding CO₂ tend to warm the climate?", "CO₂ and methane are greenhouse gases. They act like a blanket (or greenhouse glass) and trap more of the heat Earth radiates."],
          ]),
        ],
      },
      {
        id: "6",
        title: "6 Light",
        strand: "Physics · Earth and space",
        intro: "How light reflects from a plane mirror, refracts in glass and water, splits into a rainbow, mixes as colours on a screen, and what galaxies and leftover space rocks tell us about the Universe.",
        topics: [
          topic("6.1", "Reflection", [
            ["Key idea", "State the law of reflection.", "The angle of incidence equals the angle of reflection (i = r). Measure both from the normal, not from the mirror surface. A plane mirror is flat."],
            ["Recall", "What kit does the book use to test reflection?", "A ray box, a plane mirror, a protractor and a set square to draw the normal at 90° (perpendicular) to the mirror."],
            ["Check", "How do motorcycle wing mirrors help a rider, and why is crumpled foil a poor mirror?", "Light from a car behind reflects from the plane mirror into the rider’s eyes. Foil is shiny but crumpled, so rays scatter and you do not get a sharp image."],
          ]),
          topic("6.2", "Refraction", [
            ["Key idea", "What is refraction?", "Light changes speed between materials and can change direction. Air about 300 000 km/s, water 225 000 km/s, glass 200 000 km/s."],
            ["Recall", "Which way does a ray bend, and where do we use refraction?", "Air into glass or water: towards the normal. Glass or water into air: away from the normal. Glasses, phone cameras and wet windows all use or show this."],
            ["Check", "Why does a pencil look broken, and how can a hidden coin appear?", "Rays leaving water bend away from the normal so the underwater part looks shifted. Pouring water into a bowl refracts rays from the coin so they reach your eye."],
          ]),
          topic("6.3", "Making rainbows", [
            ["Key idea", "How did Newton show white light is mixed?", "In 1666 he used a triangular glass prism. White light dispersed into a spectrum: red, orange, yellow, green, blue, indigo, violet."],
            ["Recall", "Which colour bends most, and which least?", "Violet is refracted through the largest angle. Red is refracted through the smallest."],
            ["Check", "What three things do you need to see a rainbow?", "The Sun shining, drops of water in the air, and the Sun behind you so the drops can reflect light towards you. A hose spray on a sunny day works the same way."],
          ]),
          topic("6.4", "Colours of light", [
            ["Key idea", "What are the primary colours of light?", "Red, green and blue. Adding: R+G=yellow, R+B=magenta, B+G=cyan, RGB=white. Phone and TV pixels work this way."],
            ["Recall", "How does a coloured filter work?", "It transmits its colour and absorbs the rest (subtraction). Traffic lights use white lamps plus red, yellow or green filters."],
            ["Check", "Why can a red cube look black in green light?", "It reflects only red. Green is absorbed, so almost no light comes back. A yellow flower looks yellow because it reflects yellow."],
          ]),
          topic("6.5", "Galaxies", [
            ["Key idea", "What is a galaxy?", "Dust, gas, stars and solar systems held by gravity. The milky band at night is our spiral galaxy, the Milky Way, seen from inside."],
            ["Recall", "Name the three galaxy shapes.", "Spiral, elliptical and irregular. The closest known neighbour is the Canis Major Dwarf Galaxy (elliptical)."],
            ["Check", "How do scientists estimate how many galaxies there are?", "They count galaxies in one patch of sky and scale up, like counting sand grains in a cup then estimating a whole bucket. One estimate is about 100 billion galaxies."],
          ]),
          topic("6.6", "Rocks in space", [
            ["Key idea", "What is an asteroid?", "A rock that orbits the Sun. Most sit in the asteroid belt between Mars and Jupiter. They are leftover from the formation of the Solar System."],
            ["Recall", "What is special about Ceres and Itokawa?", "Ceres (1801) is the largest, about 975 km, round and cratered. Itokawa is a small potato-shaped rubble pile that a spacecraft sampled in 2005."],
            ["Check", "Why do asteroids hit Earth, and how often is a large impact?", "Earth’s gravity pulls them, and many orbits pass nearby. A large impact is thought to happen about every 130 000 years. Smaller ones often break up before they reach the ground."],
          ]),
        ],
      },
      {
        id: "7",
        title: "7 Diet and growth",
        strand: "Biology",
        intro: "The six nutrients in food, a balanced diet and fibre, how the body grows and develops, why smoking harms health, and how bones, joints and muscles move you.",
        topics: [
          topic("7.1", "Nutrients", [
            ["Key idea", "Name the six types of nutrient.", "Carbohydrate, fat (and oil), protein, vitamins, minerals and water. Fibre is useful but is not one of the six nutrients."],
            ["Recall", "What are starch, protein and fat for, and how do you test for starch?", "Starch is a carbohydrate; the body breaks it down to glucose for energy. Protein builds and repairs cells. Fats give energy and make cell membranes. Iodine is orange-brown and turns blue-black on starch."],
            ["Check", "Why do you need vitamins, minerals and water in small or large amounts?", "Vitamin A for night vision; vitamin C for skin and gums (too little → scurvy); vitamin D and calcium for bones (too little vitamin D → rickets); iron for haemoglobin (too little → anaemia). Water lets chemicals dissolve and blood flow."],
          ]),
          topic("7.2", "A balanced diet", [
            ["Key idea", "What is a balanced diet?", "The food you eat each day that gives all six nutrients and the right amount of energy. Energy is often compared in megajoules (1 MJ = 1 000 000 J)."],
            ["Recall", "What is fibre, and what should you not eat too much of?", "Fibre is mostly cellulose. It is not digested; it prevents constipation. Too much sugar risks tooth decay and diabetes. Too much fat can increase weight and heart-disease risk."],
            ["Check", "Why do different people need different diets?", "Growing children and athletes need more energy and protein. A desk job needs less. A pregnant woman needs extra protein, iron and calcium. Everyone still needs vitamins and minerals."],
          ]),
          topic("7.3", "Growth, development and health", [
            ["Key idea", "What is the difference between growth and development?", "Growth is getting bigger by making more cells (needs protein and energy). Development is new organs, stronger muscles and new skills. An embryo is the early ball of cells."],
            ["Recall", "How does exercise help health?", "It uses energy so less fat is stored, strengthens the heart and muscles, and can improve mood."],
            ["Check", "How does smoking damage health?", "Nicotine is addictive and narrows vessels. Tar can cause cancer. Carbon monoxide blocks haemoglobin. Particulates damage alveoli. Smoking in pregnancy is linked with more low-birthweight babies."],
          ]),
          topic("7.4", "Moving the body", [
            ["Key idea", "How do joints allow movement?", "Bones meet at joints. A hinge joint (elbow) moves one way like a door. A ball-and-socket joint (shoulder) allows circular movement. Muscles pull across the joint; they cannot push."],
            ["Recall", "What is an antagonistic pair?", "Two muscles with opposite effects. To bend the arm the biceps contracts and the triceps relaxes. To straighten it the triceps contracts and the biceps relaxes."],
            ["Check", "What do tendons and ligaments do?", "Tendons join muscle to bone (they must not stretch). Ligaments hold bones together at a joint. Contraction uses glucose from respiration."],
          ]),
        ],
      },
      {
        id: "8",
        title: "8 Chemical reactions",
        strand: "Chemistry",
        intro: "Reactions that give out or take in heat, and how metals react with oxygen, water and acids.",
        topics: [
          topic("8.1", "Exothermic reactions", [
            ["Key idea", "What is an exothermic reaction?", "A chemical change that transfers energy to the surroundings, usually as heat (sometimes light or sound). The mixture and the air around it get warmer, so a thermometer reading rises."],
            ["Recall", "Give everyday examples of exothermic reactions.", "Combustion: a campfire, a candle, or hydrogen burning in a model bottle rocket (hydrogen + oxygen → water, energy given out as heat, light and sound). Also acid + alkali neutralisation, hand warmers, and some plasters setting."],
            ["Check", "How would you show a reaction is exothermic?", "Measure the temperature of the mixture before and after (same thermometer, same volume). A rise means energy has been given out. Record ΔT = T_final − T_initial."],
            ["Example", "Write a word equation for carbon burning in oxygen.", "carbon + oxygen → carbon dioxide, and energy is given out as heat and light. New substances form — it is a chemical change, not just a temperature change."],
            ["Check", "Does ‘exo’ mean heat going in or out?", "Out. Exo = exit. Energy leaves the reaction and warms the surroundings. (Endo is the opposite: energy enters and the surroundings cool.)"],
          ]),
          topic("8.2", "Endothermic reactions", [
            ["Key idea", "What is an endothermic reaction?", "A chemical change that takes in thermal energy from the surroundings and stores it in chemical bonds. The temperature at the end is lower than at the start (negative ΔT)."],
            ["Recall", "Why does sherbet make your mouth feel cooler?", "Sherbet is citric acid plus sodium hydrogen carbonate. Saliva starts the same reaction as in the test tube. Energy is taken from your mouth and carbon dioxide makes the fizz."],
            ["Check", "Is every temperature drop a chemical reaction?", "No. Melting ice or dissolving potassium chloride / ammonium nitrate takes in energy but makes no new substance. That is an endothermic process."],
            ["Example", "How are cold packs and self-heating cans used?", "A freezer ice pack cools as ice melts (process). An instant pack dissolves ammonium nitrate in water. A self-heating can mixes calcium oxide and water and gives heat out (exothermic)."],
          ]),
          topic("8.3", "Metals and their reactions with oxygen", [
            ["Key idea", "What forms when a metal burns or corrodes in air?", "A metal oxide. The metal has been oxidised."],
            ["Recall", "Which metals react most readily with oxygen?", "The reactive ones, such as magnesium and sodium. Gold hardly reacts at all."],
            ["Check", "Write a word equation for magnesium burning.", "magnesium + oxygen → magnesium oxide."],
          ]),
          topic("8.4", "Reactions of metals with water", [
            ["Key idea", "What do the most reactive metals do in water?", "They react to make a metal hydroxide and hydrogen gas."],
            ["Recall", "Which is more reactive with water, potassium or copper?", "Potassium. It reacts vigorously. Copper does not react with water."],
            ["Check", "How can you test the gas given off?", "A lit splint gives a squeaky pop if the gas is hydrogen."],
          ]),
          topic("8.5", "Reactions of metals with dilute acids", [
            ["Key idea", "What is made when a metal reacts with a dilute acid?", "A salt and hydrogen. The salt depends on the acid: hydrochloric acid makes chlorides."],
            ["Recall", "Write the word equation for zinc and hydrochloric acid.", "zinc + hydrochloric acid → zinc chloride + hydrogen."],
            ["Check", "Why is copper used for water pipes when magnesium would not be?", "Copper is low in the reactivity series, so it does not react with water or dilute acids in ordinary use."],
          ]),
        ],
      },
      {
        id: "9",
        title: "9 Magnetism",
        strand: "Physics",
        intro: "Magnetic fields around magnets, how Earth acts like a giant magnet, electromagnets you can switch, and fair tests of their strength.",
        topics: [
          topic("9.1", "Magnetic fields", [
            ["Key idea", "What is a magnetic field?", "The space around a magnet where its effects can be detected — for example a steel paperclip is attracted. The field is strongest at the poles and weaker further away."],
            ["Recall", "Which materials are magnetic, and how do we draw field lines?", "Magnetic: iron, steel, nickel and cobalt (not copper, aluminium, silver or tin). Field lines join opposite poles, arrows point N → S, they must not touch or cross, and closer lines mean a stronger field. A compass needle lines up with the lines."],
            ["Check", "How do two magnets interact?", "Opposite poles attract: field lines between them run the same way. Like poles (N–N or S–S) repel: field lines between them run opposite ways and bulge out."],
          ]),
          topic("9.2", "The Earth as a giant magnet", [
            ["Key idea", "Why does a compass point north?", "Earth has a magnetic field, similar to a bar magnet, made in the iron-rich core. A compass is a magnetised needle that lines up with the field. Geographic north is on the spin axis; magnetic north is nearby in the Arctic and slowly moves (about 60 km a year)."],
            ["Recall", "Why does the north-seeking end of a compass point toward geographic north?", "Field lines go from magnetic north to magnetic south outside a magnet. They enter Earth near the geographic North Pole, so that region acts like a magnetic south pole. Opposite poles attract, so the needle’s north-seeking end points north. Aurorae form when solar particles follow the strong polar field."],
            ["Check", "How can you show Earth’s magnetic field in the lab?", "Hang a bar magnet so it can turn, or float a magnetised needle on cork in water, away from other magnets. Both settle north–south. Lodestone (magnetite) is a naturally occurring magnet — the first compasses."],
          ]),
          topic("9.3", "Electromagnets", [
            ["Key idea", "How do you make an electromagnet?", "Wrap insulated wire into a coil around an iron core (a nail). Pass a current from a cell when a switch is closed. The core becomes magnetised. Switch off and it loses most of its magnetism. Reverse the coil or the cell to swap the poles."],
            ["Recall", "What is the difference between magnetic, magnetised, permanent and electro?", "Magnetic = attracted to a magnet. Magnetised = turned into a magnet. A permanent magnet keeps its field. An electromagnet’s field can be switched on and off with the current."],
            ["Check", "Give uses that need a magnet you can switch off.", "Scrapyard crane (lift steel, drop it, leave copper and aluminium); toaster pop-up; fire door that closes when the alarm cuts the electromagnet; electric bell; motors; MRI scanners."],
          ]),
          topic("9.4", "Investigating electromagnets", [
            ["Key idea", "Which factors affect the strength of an electromagnet?", "Number of turns on the coil, size of the current, and the core material (soft iron is easily magnetised and demagnetised). Measure strength by how many paperclips it can hold."],
            ["Recall", "How do you make this a fair test?", "Change only one factor. If you change turns, keep core, current, paperclips and counting method the same. Switch on briefly so the wire does not overheat. Repeat and average. Line graph for turns; bar chart for core materials."],
            ["Check", "What pattern should you expect?", "More turns or a bigger current holds more clips, up to a limit. An iron or nickel core beats wood, rubber or aluminium. Scrapyard magnets must be far stronger than a toaster magnet."],
          ]),
        ],
      },
    ],
  });
})();
