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

  window.MATHS_Y9 = {
    id: "maths",
    title: "Mathematics",
    stage: "Year 9",
    book: "Learner’s Book Stage 9",
    intro: "Stage 9 mathematics from the Cambridge Learner’s Book, written for a 13-year-old: probability, then position and transformation.",
    units: [
      {
        id: "m12",
        title: "12 Probability",
        strand: "Statistics",
        intro: "The book opens with the 2012 Thames Jubilee pageant: an 80% chance of rain. In this chapter you add exclusive events, test independence, multiply on a tree, and compare relative frequency with a theoretical probability.",
        topics: [
          topic("12.1", "Mutually exclusive events", [
            ["Key idea", "What does mutually exclusive mean?", "Two events that cannot happen at the same time. A ball cannot be both a multiple of 5 and a multiple of 7. For exclusive events you add: P(A or B) = P(A) + P(B). All exclusive outcomes together add to 1."],
            ["Recall", "Balls 1 to 25. F is a multiple of 5, S a multiple of 7. Find P(F), P(S) and P(F or S).", "F = {5, 10, 15, 20, 25} so P(F) = 5/25 = 1/5. S = {7, 14, 21} so P(S) = 3/25. They do not overlap, so P(F or S) = 5/25 + 3/25 = 8/25."],
            ["Check", "A football team has P(win) = 60% and P(draw) = 15%. What is P(lose)?", "Win, draw and lose are mutually exclusive and cover every result, so they add to 1. P(lose) = 1 − 0.60 − 0.15 = 0.25, or 25%."],
            ["Example", "A spinner: P(red) = 0.35, P(blue) = 0.2, P(gold) = 0.1. Find P(red or blue) and P(neither blue nor gold).", "P(red or blue) = 0.35 + 0.2 = 0.55. P(blue or gold) = 0.3, so P(neither blue nor gold) = 1 − 0.3 = 0.7."],
            ["Check", "Ten cards: 2, 2, 2, 2, 3, 3, 4, 5, 5, 5. Find P(2 or 5) and P(neither).", "P(2) = 4/10 and P(5) = 3/10, so P(2 or 5) = 7/10. Then P(neither) = 1 − 7/10 = 3/10."],
          ]),
          topic("12.2", "Independent events", [
            ["Key idea", "What are independent events?", "Events that do not change each other’s probability. Flip a coin then roll a dice: P(4) is still 1/6 whether the coin was a head or a tail. You test independence by checking that P(B) stays the same when A happens and when A does not."],
            ["Recall", "Balls 1 to 10. C is odd, D is less than 4. Are C and D independent?", "If C happens the numbers are 1, 3, 5, 7, 9 and two of those are less than 4, so P(D) = 2/5. If C does not happen the numbers are 2, 4, 6, 8, 10 and only one is less than 4, so P(D) = 1/5. The probabilities are different, so C and D are not independent."],
            ["Check", "A fair dice. X is even, Y is more than 2. Show that X and Y are independent.", "If X happens you have 2, 4, 6 and two of those are more than 2, so P(Y) = 2/3. If X does not happen you have 1, 3, 5 and two are more than 2, so P(Y) is still 2/3. P(Y) has not changed, so X and Y are independent."],
            ["Example", "Same dice. Z is prime. Show that X (even) and Z are not independent.", "If X happens you have 2, 4, 6 and only 2 is prime, so P(Z) = 1/3. If X does not happen you have 1, 3, 5 and two of those (3 and 5) are prime, so P(Z) = 2/3. P(Z) changed, so they are not independent."],
            ["Check", "Ten balls, 3 black. When is a second black draw independent?", "Only if you replace the first ball. Then P(second black) stays 3/10. Without replacement the bag has changed: 2/9 after a black, 3/9 after a white."],
          ]),
          topic("12.3", "Combined events", [
            ["Key idea", "How do you find P(A and B) for independent events?", "Multiply: P(A and B) = P(A) × P(B). A coin and a dice: P(head) = 1/2 and P(more than 2) = 4/6 = 2/3, so P(both) = 1/2 × 2/3 = 1/3. A tree diagram shows every path. Multiply along a path. Add different winning paths."],
            ["Recall", "Two spinners: numbers 1–5 and letters A, B, C, D. Find P(odd and A).", "P(odd) = 3/5 and P(A) = 1/4. The spinners do not affect each other, so P(odd and A) = 3/5 × 1/4 = 3/20."],
            ["Check", "On that tree, what is P(even and not A)? Why do the four path probabilities add to 1?", "P(even) = 2/5 and P(not A) = 3/4, so 2/5 × 3/4 = 6/20 = 3/10. The four outcomes (odd A, odd not-A, even A, even not-A) cover every spin, so 3/20 + 9/20 + 2/20 + 6/20 = 1."],
            ["Example", "City 0.8, United 0.6, not playing each other. Find P(both win) and P(neither).", "Independent, so both win: 0.8 × 0.6 = 0.48. Neither: 0.2 × 0.4 = 0.08. Check: 0.48 + 0.32 + 0.12 + 0.08 = 1."],
            ["Check", "Traffic lights: first red 0.3, second red 0.6. What is P(at least one red)?", "Easier as 1 − P(neither red) = 1 − (0.7 × 0.4) = 1 − 0.28 = 0.72. Or add the three paths that have a red: 0.18 + 0.12 + 0.42 = 0.72."],
          ]),
          topic("12.4", "Chance experiments", [
            ["Key idea", "What is relative frequency?", "Successes ÷ trials from a real experiment. After 10 dice rolls Zara had two sixes, so the relative frequency was 2/10 = 0.2. Theoretical P(6) is 1/6 ≈ 0.167. The experimental value wobbles at first, then usually settles nearer the theoretical probability as you do more trials."],
            ["Recall", "Zara’s running totals of sixes: 2, 5, 7, 10, 11 after 10, 20, 30, 40, 50 rolls. Write the relative frequencies.", "0.2, 0.25, 0.233, 0.25, 0.22. Plot them against number of rolls and draw a horizontal line at 0.167 to compare with theory."],
            ["Check", "A fair three-colour spinner is spun 200 times: red 78, white 54, blue 68. Compare each relative frequency with 1/3.", "Relative frequencies: 0.39, 0.27, 0.34. Theoretical is 1/3 ≈ 0.333. Red is a little high, white a little low, blue close. 200 spins is a large sample, so you expect them near 0.333, not exact."],
            ["Example", "Two coins land on two tails 3 times in 25 flips, then 7 times in another 25. Combined relative frequency?", "First 3/25 = 0.12. Second 7/25 = 0.28. Together add frequencies and trials: 10/50 = 0.2. Theoretical P(TT) = 1/4 = 0.25."],
            ["Check", "Arun draws with replacement from 20 black and white balls. After 200 draws the relative frequency of black is 79/200 = 0.395. Estimate the mix.", "About 0.4 of the bag is black, so a sensible estimate is 8 black and 12 white. A small sample (20 draws) could easily have been 0.5 and would have been a poorer estimate."],
          ]),
        ],
      },
      {
        id: "m13",
        title: "13 Position and transformation",
        strand: "Geometry and measure",
        intro: "The wallpaper on page 271 only changes position: flip, slide or spin and the flowers stay congruent. In this chapter you use three-figure bearings on a scale drawing, find points one third or two fifths along a line, combine two transformations, and enlarge from a centre inside the shape.",
        topics: [
          topic("13.1", "Bearings and scale drawings", [
            ["Key idea", "What is a bearing, and how must you write one?", "A bearing is the direction of one object from another. Measure the angle from north, clockwise, from 0° to 360°, and always use three figures: 045°, not 45°. North 000°, east 090°, south 180°, west 270°."],
            ["Recall", "Tia cycles 20 km on a bearing of 280°. Scale: 1 cm represents 5 km. How do you draw her journey?", "20 ÷ 5 = 4, so draw a 4 cm line. Draw a north arrow first, measure 280° clockwise from north (10° past west), then draw the 4 cm line. That line is every place she could be."],
            ["Example", "A ship sails 120 km on 085°, then 90 km on 135°. Scale: 1 cm represents 10 km. How long are the legs, and what extra arrow do you need?", "120 ÷ 10 = 12 cm and 90 ÷ 10 = 9 cm. Draw north at the harbour for 085°. Then draw a new north arrow at the end of the first leg before you measure 135°. The second bearing is from the ship, not the harbour."],
            ["Check", "Two lighthouses are 160 km apart. Scale 1 : 2 000 000. What does 1 cm represent, and how long is 160 km on the drawing?", "1 : 2 000 000 means 1 cm represents 2 000 000 cm = 20 km. So 160 ÷ 20 = 8 cm. A ship on 152° from A and 042° from B is where those two bearing lines cross."],
          ]),
          topic("13.2", "Points on a line segment", [
            ["Key idea", "How do you find a point a fraction k of the way from A to B?", "In Stage 8 the midpoint of AB was (3, 3). Now you want one third, two thirds, one quarter. Work out B minus A, multiply that change by k, then add it onto A. If A is (0, 0) you can just multiply the coordinates of B by k."],
            ["Recall", "Worked example 13.2. LM from L(0, 5) to M(6, 5). PQ from P(0, 0) to Q(8, 4). What points are one third along LM and one quarter along PQ?", "LM is horizontal, so y stays 5 and x is 6 ÷ 3 = 2: the point is (2, 5). PQ: x is 8 ÷ 4 = 2 and y is 4 ÷ 4 = 1: the point is (2, 1)."],
            ["Example", "Chesa and Tefo find the point two fifths of the way from S(0, 0) to T(10, 5). What do they get, and when is Tefo’s shortcut unsafe?", "Both get (4, 2). Chesa draws run 10 and rise 5, then (2/5)×10 = 4 and (2/5)×5 = 2. Tefo multiplies (2/5)×(10, 5). That multiply-the-end method only works when the start is the origin. One quarter of OM from O(0, 0) to M(16, 12) is (4, 3), not (3, 4)."],
            ["Check", "Briana had A(3, 2), B(8, 12) and C one fifth of the way. She wrote C = (1, 2). What did she miss?", "Look at the diagram: (1, 2) is not on AB. Difference is (5, 10), one fifth is (1, 2), then add onto A: (3 + 1, 2 + 2) = (4, 4). AC : AB = 1 : 5 and AC : BC = 1 : 4."],
          ]),
          topic("13.3", "Transformations", [
            ["Key idea", "What must you write for a reflection, a translation or a rotation?", "Reflection: the equation of the mirror line, such as y = 1. Translation: the column vector. Rotation: the centre, the angle, and clockwise or anticlockwise. A 180° turn needs no direction. After any mix of those three, the object and image are congruent."],
            ["Recall", "Worked example 13.3. Reflect triangle A in the y-axis, then rotate 90° clockwise about (−1, 1) to get E. Are A and E congruent?", "Yes. First flip A over x = 0. Then spin that image 90° clockwise about the orange centre (−1, 1). Lengths and angles do not change, so A and E are congruent."],
            ["Example", "On the same grid, describe A to B, B to C and C to D.", "A to B is a reflection in y = 1. B to C is a rotation 90° anticlockwise, centre (1, −3). C to D is a translation two left and three up, column vector (−2, 3). Write the word and the facts every time."],
            ["Check", "You reflect X in y = 1 then rotate 90° anticlockwise about (2, −3). If you swap the order, is the finish the same?", "Usually not. Order matters. Draw both and compare. After any single or combined reflection, translation or rotation, corresponding lengths are equal, corresponding angles are equal, and the shapes are congruent. Enlargement is the one that changes size."],
          ]),
          topic("13.4", "Enlarging shapes", [
            ["Key idea", "What two facts describe an enlargement, and where can the centre sit?", "Give the scale factor and the centre of enlargement. In Stage 8 the centre was outside or on the shape. Now it can sit inside. Ray lines through matching vertices still meet at that centre."],
            ["Recall", "Worked example 13.4a. A trapezium is enlarged by scale factor 2 from a centre inside it. How do you draw the image?", "The closest vertex is 1 left and 1 down from the centre, so the image vertex is 2 left and 2 down. Double every other step, then join. Each side is twice as long. Leave space — it grows in every direction."],
            ["Example", "Triangle B is an enlargement of triangle A. Matching sides 2 squares and 4 squares. Where is the centre?", "Scale factor = 4 ÷ 2 = 2. Draw ray lines through corresponding vertices. They meet at (4, 3). Write: enlargement, scale factor 2, centre (4, 3). Ray lines still work when the centre is inside both shapes."],
            ["Check", "Rectangle R has perimeter 14 cm and area 10 cm². Enlarge by scale factor 3 to make T. What are the new perimeter and area?", "Perimeter multiplies by k, so 14 × 3 = 42 cm. Area multiplies by k², so 10 × 3² = 90 cm². A triangle of 12 cm and 6 cm², scale factor 5, becomes 60 cm and 150 cm². The same rules work for any shape."],
          ]),
        ],
      },
    ],
  };
})();
