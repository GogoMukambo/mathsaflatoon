(function () {
  function work(id, unit, prompt, answer, accept, source) {
    const item = {
      id: id,
      unitIds: [unit],
      source:
        source ||
        (unit === "m13"
          ? "Stage 9 Chapter 13 — Position and transformation"
          : "Stage 9 Chapter 12 — Probability"),
      prompt: prompt,
      answer: answer,
    };
    if (accept) item.acceptAny = accept;
    return item;
  }

  function sci(id, prompt, answer, accept) {
    return work(id, "3", prompt, answer, accept, "Stage 9 Chapter 3 — Forces and energy");
  }

  window.QUIZ_BANK_Y9 = {
    maths: [
      work("m12a", "m12", "Events that cannot happen at the same time are called what?", "mutually exclusive", ["mutually exclusive", "exclusive"]),
      work("m12b", "m12", "For mutually exclusive events, how do you find P(A or B)?", "Add: P(A) + P(B)", ["add", "P(A) + P(B)"]),
      work("m12c", "m12", "Balls 1 to 25. F is a multiple of 5. What is P(F)?", "5/25 = 1/5", ["1/5", "5/25"]),
      work("m12d", "m12", "P(F) = 1/5. What is P(not F)?", "4/5", ["4/5"]),
      work("m12e", "m12", "P(win) = 60% and P(draw) = 15%. What is P(lose)?", "25% or 0.25", ["0.25", "25", "1/4"]),
      work("m12f", "m12", "Spinner: P(red) = 0.35, P(blue) = 0.2. What is P(red or blue)?", "0.55", ["0.55"]),
      work("m12g", "m12", "P(blue) = 0.2 and P(gold) = 0.1. What is P(neither blue nor gold)?", "0.7", ["0.7"]),
      work("m12h", "m12", "Two events are independent if what stays the same?", "The probability of the second event, whether or not the first happens", ["same", "does not change", "not affect"]),
      work("m12i", "m12", "A coin then a dice. Does a head change P(rolling a 4)?", "No. P(4) is still 1/6.", ["no", "1/6", "still"]),
      work("m12j", "m12", "Balls 1–10. C is odd, D is less than 4. Are C and D independent?", "No. P(D) is 2/5 if C happens and 1/5 if C does not.", ["no", "2/5", "1/5"]),
      work("m12k", "m12", "Fair dice. X is even, Y is more than 2. What is P(Y) if X happens?", "2/3", ["2/3"]),
      work("m12l", "m12", "You draw a ball and do not put it back. Are the two draws independent?", "No. The bag has changed, so the second probability depends on the first.", ["no", "not replace", "changed"]),
      work("m12m", "m12", "For independent events, how do you find P(A and B)?", "Multiply: P(A) × P(B)", ["multiply", "×", "times"]),
      work("m12n", "m12", "P(head) = 1/2 and P(more than 2) = 2/3. What is P(both)?", "1/3", ["1/3"]),
      work("m12o", "m12", "P(odd) = 3/5 and P(A) = 1/4. What is P(odd and A)?", "3/20", ["3/20"]),
      work("m12p", "m12", "On a tree, what do you do along one path?", "Multiply the branch probabilities", ["multiply"]),
      work("m12q", "m12", "City wins with probability 0.8, United with 0.6, not playing each other. P(both win)?", "0.48", ["0.48"]),
      work("m12r", "m12", "First light red 0.3, second red 0.6. What is P(neither red)?", "0.28", ["0.28"]),
      work("m12s", "m12", "P(neither) = 0.28. What is P(at least one red)?", "0.72", ["0.72"]),
      work("m12t", "m12", "Relative frequency is calculated how?", "Frequency ÷ number of trials", ["frequency", "trials", "÷"]),
      work("m12u", "m12", "Zara gets 2 sixes in 10 rolls. What is the relative frequency?", "0.2", ["0.2", "2/10", "1/5"]),
      work("m12v", "m12", "What is the theoretical probability of a 6 on a fair dice, to 3 d.p.?", "0.167", ["0.167", "1/6"]),
      work("m12w", "m12", "A spinner lands on black 4 times in 20 spins, then 7 more times in 30 spins. Relative frequency for all 50 spins?", "11/50 = 0.22", ["0.22", "11/50"]),
      work("m12x", "m12", "Why is a large sample a better estimate than 10 trials?", "Relative frequency usually settles closer to the theoretical probability when n is large.", ["large", "closer", "settle", "long run"]),
      work("m13a", "m13", "A bearing is measured from which direction, and which way do you turn?", "From north, clockwise", ["north", "clockwise"]),
      work("m13b", "m13", "How do you write a bearing of 45°?", "045°", ["045"]),
      work("m13c", "m13", "Tia rides 20 km. Scale 1 cm represents 5 km. How long is the line?", "4 cm", ["4"]),
      work("m13d", "m13", "A ship sails 120 km then 90 km. Scale 1 cm represents 10 km. How long are the two legs?", "12 cm and 9 cm", ["12", "9"]),
      work("m13e", "m13", "On a 1 : 2 000 000 map, what real distance does 1 cm represent?", "20 km", ["20"]),
      work("m13f", "m13", "One third of the way from L(0, 5) to M(6, 5) is which point?", "(2, 5)", ["(2, 5)", "2, 5"]),
      work("m13g", "m13", "One quarter of the way from P(0, 0) to Q(8, 4) is which point?", "(2, 1)", ["(2, 1)", "2, 1"]),
      work("m13h", "m13", "C is one fifth of the way from A(3, 2) to B(8, 12). What are the coordinates of C?", "(4, 4)", ["(4, 4)", "4, 4"]),
      work("m13i", "m13", "What three facts must you give for a rotation?", "Centre, angle and direction", ["centre", "angle", "direction"]),
      work("m13j", "m13", "After a reflection then a rotation, are the object and image congruent?", "Yes. Lengths and angles stay the same.", ["yes", "congruent"]),
      work("m13k", "m13", "What is the column vector for a slide 2 left and 3 up?", "(-2, 3)", ["-2", "3"]),
      work("m13l", "m13", "Does the order of two different transformations usually matter?", "Yes. The final image is often different.", ["yes"]),
      work("m13m", "m13", "What two facts describe an enlargement?", "Scale factor and centre of enlargement", ["scale factor", "centre"]),
      work("m13n", "m13", "Matching sides are 2 squares and 4 squares. What is the scale factor?", "2", ["2"]),
      work("m13o", "m13", "A rectangle has perimeter 14 cm and area 10 cm². After scale factor 3, what are the new perimeter and area?", "42 cm and 90 cm²", ["42", "90"]),
      work("m13p", "m13", "Firash walks 800 m. Scale 1 cm represents 100 m. How long is the line?", "8 cm", ["8"]),
      work("m13q", "m13", "One quarter of the way from O(0, 0) to M(16, 12) is which point?", "(4, 3)", ["(4, 3)", "4, 3"]),
      work("m13r", "m13", "D is one quarter of the way from O to E. Is OD:DE equal to 1:4?", "No. OD:OE is 1:4, so OD:DE is 1:3.", ["no", "1:3", "1 : 3"]),
      work("m13s", "m13", "After flip, slide or spin, are the object and image congruent?", "Yes. Enlargement is the one that is not congruent.", ["yes", "congruent"]),
      work("m13t", "m13", "A triangle has perimeter 12 cm and area 6 cm². After scale factor 5, what are the new perimeter and area?", "60 cm and 150 cm²", ["60", "150"]),
    ],
    science: [
      sci("s3a", "What is density?", "Mass per unit volume", ["mass", "volume"]),
      sci("s3b", "Write the equation for density.", "density = mass ÷ volume", ["mass/volume", "mass ÷ volume"]),
      sci("s3c", "Water has density 1.0 g/cm³. Will wood at 0.6 g/cm³ float or sink?", "Float", ["float"]),
      sci("s3d", "Displacement: water level 40 cm³ to 56 cm³. Volume of object?", "16 cm³", ["16"]),
      sci("s3e", "Iron density about 7.9 g/cm³. Why can a steel ship float?", "Air spaces make average density of the whole ship less than water", ["average", "air", "less dense"]),
      sci("s3f", "Unit of heat (thermal energy)?", "Joule or J", ["j", "joule"]),
      sci("s3g", "Unit of temperature?", "°C or degrees Celsius", ["celsius", "°c"]),
      sci("s3h", "Heat is the ___ energy of all particles; temperature is the ___ energy.", "Total; average", ["total", "average"]),
      sci("s3i", "Two beakers same temperature, different volume — which has more heat?", "The larger volume (more particles)", ["larger", "more particles"]),
      sci("s3j", "State the law of conservation of energy.", "Energy cannot be created or destroyed, only transferred or changed", ["conserved", "created", "destroyed"]),
      sci("s3k", "Lamp: 100 J in, 10 J light. How much thermal energy?", "90 J", ["90"]),
      sci("s3l", "Which way does thermal energy transfer?", "From hotter to colder places", ["hot", "cold"]),
      sci("s3m", "Does cold flow from ice into your hand?", "No — thermal energy leaves your hand into the ice", ["no", "leaves"]),
      sci("s3n", "Name the three ways thermal energy transfers.", "Conduction, convection, radiation", ["conduction", "convection", "radiation"]),
      sci("s3o", "Which transfer works through a vacuum?", "Radiation", ["radiation"]),
      sci("s3p", "Which surfaces are best at absorbing thermal radiation?", "Dull black with large surface area", ["black", "dull"]),
      sci("s3q", "Why does warm air rise?", "It expands, becomes less dense, and floats on cooler air", ["less dense", "convection"]),
      sci("s3r", "Why does evaporation cool a liquid?", "Fastest particles escape, lowering average particle energy", ["average", "fastest"]),
      sci("s3s", "How is evaporation different from boiling?", "Evaporation at the surface below boiling point; boiling throughout liquid at boiling temperature", ["surface", "100"]),
      sci("s3t", "Why is sweat useful on a hot day?", "Evaporation removes energy from skin and cools you", ["evapor", "cool"]),
      sci("s3u", "Mass 13.5 g, volume 5.0 cm³. Density?", "2.7 g/cm³", ["2.7"]),
      sci("s3v", "Compress a gas into smaller volume. What happens to density?", "It increases", ["increase", "higher"]),
      sci("s3w", "Helium balloon floats in air because helium is ___ dense than air.", "Less", ["less"]),
      sci("s3x", "What is dissipation?", "Energy spreading out into surroundings and becoming less useful", ["spread", "surroundings"]),
      sci("s3y", "Wood 6 cm × 3 cm × 4 cm. What is its volume?", "72 cm³", ["72"]),
      sci("s3z", "Wood volume 72 cm³, mass 54 g. Density? Will it float in water?", "0.75 g/cm³ — floats", ["0.75", "float"]),
      sci("s3aa", "Sea water mass 10 300 kg, volume 10 m³. Density?", "1030 kg/m³", ["1030"]),
      sci("s3ab", "Copper density 8.96 g/cm³. Mass of 20 cm³?", "179.2 g", ["179.2", "179"]),
      sci("s3ac", "What is absolute zero in °C?", "About −273 °C", ["-273", "273"]),
      sci("s3ad", "Wood fire: 70% of chemical energy becomes thermal. What percentage becomes light and waste chemicals?", "30%", ["30"]),
      sci("s3ae", "LED uses 18 J and wastes 7 J as thermal. How much becomes light?", "11 J", ["11"]),
      sci("s3af", "Which two thermal transfers cannot happen in a vacuum?", "Conduction and convection", ["conduction", "convection"]),
      sci("s3ag", "Why does a vacuum flask have silvered walls?", "To reflect radiation back into the drink", ["reflect", "radiation"]),
      sci("s3ah", "Why does perfume feel colder on skin than liquid soap?", "It evaporates faster, so it removes thermal energy faster", ["faster", "evapor"]),
    ],
  };
})();
