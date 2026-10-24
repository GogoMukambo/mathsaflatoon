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
    id: "11plus",
    title: "11+ Preparation",
    stage: "11+",
    book: "CEM · GL · Independent",
    intro: "Key Stage 2 mathematics extended for 11+ multi-step problem solving. Mathematics only.",
    subjects: ["maths"],
    units: [],
  });

  window.MATHS_11PLUS = {
    id: "maths",
    title: "Mathematics",
    stage: "11+",
    book: "11+ Maths",
    intro: "Number, operations, fractions, ratio, algebra, measurement, geometry and statistics for 11+ exams.",
    units: [
      {
        id: "p1",
        title: "1 Number and place value",
        strand: "Number",
        intro: "Read, write and compare numbers up to 10,000,000, then round and work with negatives.",
        topics: [
          topic("1.1", "Place value", [
            ["Key idea", "What does place value mean?", "Each digit's value depends on its place: ones, tens, hundreds, thousands, and so on up to millions."],
            ["Recall", "In 4,582,109 what is the 5 worth?", "500,000 — five hundred thousand."],
            ["Check", "Why does 2 in 2,040,000 not mean 2?", "It sits in the millions place, so it means 2,000,000."],
          ]),
          topic("1.2", "Rounding", [
            ["Key idea", "How do you round a number?", "Look at the digit to the right of the place you want. 5 or more → round up. 4 or less → stay the same."],
            ["Recall", "Round 3,472 to the nearest 100.", "The tens digit is 7, so round up: 3,500."],
            ["Check", "Round 6,250 to the nearest 1,000.", "The hundreds digit is 2, so it stays 6,000."],
          ]),
          topic("1.3", "Negative numbers", [
            ["Key idea", "Which way is larger on a number line?", "Right is larger. −1 is greater than −5. Left is colder / smaller."],
            ["Recall", "Temperature is −4°C and drops 5°C. New temperature?", "−4 − 5 = −9°C."],
            ["Check", "What is 3 − 8?", "−5. You crossed zero."],
          ]),
        ],
      },
      {
        id: "p2",
        title: "2 The four operations",
        strand: "Number",
        intro: "Column methods, long division, and BIDMAS so multi-step 11+ questions stay in the right order.",
        topics: [
          topic("2.1", "Column methods and long division", [
            ["Key idea", "How can you multiply 234 × 15 without a calculator?", "Split 15 into 10 and 5: 2340 + 1170 = 3510."],
            ["Recall", "What is 234 × 10 and 234 × 5?", "2340 and 1170."],
            ["Check", "Why is partitioning useful in 11+ papers?", "It turns a hard product into two easier ones you can add."],
          ]),
          topic("2.2", "Order of operations (BIDMAS)", [
            ["Key idea", "What is BIDMAS?", "Brackets, Indices, Division and Multiplication (left to right), Addition and Subtraction (left to right)."],
            ["Recall", "Calculate 12 + 4 × (5 − 2).", "Brackets 3, then 4 × 3 = 12, then 12 + 12 = 24."],
            ["Check", "Why is 12 + 4 × 3 not 48?", "Multiply before add: 12 + 12 = 24, not 16 × 3."],
          ]),
        ],
      },
      {
        id: "p3",
        title: "3 Fractions, decimals and percentages",
        strand: "Number",
        intro: "FDP are the same idea: parts of a whole. Convert, calculate, and find percentages of amounts.",
        topics: [
          topic("3.1", "Equivalence", [
            ["Key idea", "Name three ways to write a half.", "1/2 = 0.5 = 50%."],
            ["Recall", "What is 3/4 as a decimal and a percentage?", "0.75 and 75%."],
            ["Check", "Write 1/10 as a decimal and a percentage.", "0.1 and 10%."],
          ]),
          topic("3.2", "Calculating with fractions", [
            ["Key idea", "How do you add fractions?", "Use a common denominator, then add numerators."],
            ["Recall", "Work out 1/3 + 1/4.", "4/12 + 3/12 = 7/12."],
            ["Check", "Find 3/4 of 40.", "40 ÷ 4 = 10, then × 3 = 30. And 2/5 × 3/4 = 6/20 = 3/10."],
          ]),
          topic("3.3", "Percentages of amounts", [
            ["Key idea", "How can you find 15% without a calculator?", "10% then half of that for 5%, then add."],
            ["Recall", "Find 15% of £80.", "10% = £8, 5% = £4, so 15% = £12."],
            ["Check", "Find 20% of 250.", "10% = 25, so 20% = 50."],
          ]),
        ],
      },
      {
        id: "p4",
        title: "4 Ratio and proportion",
        strand: "Number",
        intro: "Simplify ratios and share amounts fairly using parts.",
        topics: [
          topic("4.1", "Simplifying ratios", [
            ["Key idea", "How do you simplify a ratio?", "Divide both sides by the highest common factor."],
            ["Recall", "Simplify 15:25.", "Divide by 5 → 3:5."],
            ["Check", "Simplify 18:24.", "Divide by 6 → 3:4."],
          ]),
          topic("4.2", "Sharing in a ratio", [
            ["Key idea", "How do you share in a ratio?", "Add the parts, divide the total by that, then multiply each part."],
            ["Recall", "Share £60 in the ratio 2:3.", "5 parts, one part £12, so £24 and £36."],
            ["Check", "Share 40 sweets in the ratio 1:3.", "4 parts → 10 each part → 10 and 30."],
          ]),
        ],
      },
      {
        id: "p5",
        title: "5 Algebra and sequences",
        strand: "Algebra",
        intro: "Solve simple equations and find the nth term of a linear sequence.",
        topics: [
          topic("5.1", "Simple formulae and equations", [
            ["Key idea", "How do you solve 3x + 4 = 19?", "Undo +4 then undo ×3: 3x = 15, x = 5."],
            ["Recall", "Solve 3x + 4 = 19.", "x = 5."],
            ["Check", "Solve 2x − 7 = 9.", "2x = 16, x = 8."],
          ]),
          topic("5.2", "Number sequences (nth term)", [
            ["Key idea", "How do you find a linear nth term?", "The jump is the coefficient of n. Then shift so the first term matches."],
            ["Recall", "nth term of 5, 8, 11, 14, …", "Goes up by 3 → 3n + 2."],
            ["Check", "What is the 10th term of 3n + 2?", "3×10 + 2 = 32."],
          ]),
        ],
      },
      {
        id: "p6",
        title: "6 Measurement",
        strand: "Geometry",
        intro: "Convert metric units and find perimeter, area and volume.",
        topics: [
          topic("6.1", "Unit conversions", [
            ["Key idea", "Name the length conversions you must know.", "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm. Also 1 kg = 1000 g and 1 L = 1000 ml."],
            ["Recall", "How many centimetres in 2.5 m?", "250 cm."],
            ["Check", "How many millilitres in 3.2 L?", "3200 ml."],
          ]),
          topic("6.2", "Perimeter and area", [
            ["Key idea", "What is the difference between perimeter and area?", "Perimeter is the distance around. Area is the space inside. Rectangle: L × W. Triangle: ½ × base × height."],
            ["Recall", "Area of a triangle base 8 cm, height 5 cm.", "½ × 8 × 5 = 20 cm²."],
            ["Check", "Perimeter of a 6 cm by 4 cm rectangle.", "6+4+6+4 = 20 cm."],
          ]),
          topic("6.3", "Volume", [
            ["Key idea", "Volume of a cuboid?", "Length × width × height. Units are cubed (cm³)."],
            ["Recall", "Volume of a 4 cm × 3 cm × 2 cm cuboid.", "24 cm³."],
            ["Check", "Why is volume cubed?", "You fill a 3D box, so three lengths are multiplied."],
          ]),
        ],
      },
      {
        id: "p7",
        title: "7 Geometry",
        strand: "Geometry",
        intro: "Angle facts, coordinates, reflection and translation.",
        topics: [
          topic("7.1", "Angles", [
            ["Key idea", "Which angle facts should you know for 11+?", "Straight line 180°, around a point 360°, triangle 180°, quadrilateral 360°."],
            ["Recall", "Two angles on a straight line. One is 110°. Other?", "70°."],
            ["Check", "Angles in a triangle are 50° and 60°. Third?", "70°."],
          ]),
          topic("7.2", "Coordinates and transformations", [
            ["Key idea", "How do you read a coordinate?", "(x, y) — along first, then up. Reflection flips on a mirror line. Translation slides without turning."],
            ["Recall", "From (2, 1) translate 3 right and 2 up.", "(5, 3)."],
            ["Check", "Does translation change size or angle?", "No. The shape stays congruent; it only moves."],
          ]),
        ],
      },
      {
        id: "p8",
        title: "8 Statistics",
        strand: "Statistics",
        intro: "Read charts and calculate mean, median, mode and range.",
        topics: [
          topic("8.1", "Charts and graphs", [
            ["Key idea", "Which charts appear in 11+ papers?", "Bar charts, line graphs, pie charts and timetables. Read the scale and the question carefully."],
            ["Recall", "What must you check on a bar chart?", "The axis scale — one square is not always 1."],
            ["Check", "What does a pie chart show best?", "How a total is split into parts or percentages."],
          ]),
          topic("8.2", "Averages and range", [
            ["Key idea", "Mean, median, mode, range?", "Mean = total ÷ how many. Median = middle when ordered. Mode = most often. Range = highest − lowest."],
            ["Recall", "Mean of 4, 7, 2, 8, 4.", "Sum 25, mean 5."],
            ["Check", "Median of 4, 7, 2, 8, 4.", "Order 2,4,4,7,8. Median 4. Mode 4. Range 6."],
          ]),
        ],
      },
    ],
  };

  window.QUIZ_BANK_11PLUS = {
    maths: [
      { prompt: "Round 3,472 to the nearest 100.", answer: "3500", unit: "p1" },
      { prompt: "The temperature is −4°C and drops 5°C. What is the new temperature?", answer: "-9", unit: "p1" },
      { prompt: "Calculate 12 + 4 × (5 − 2).", answer: "24", unit: "p2" },
      { prompt: "Work out 234 × 15.", answer: "3510", unit: "p2" },
      { prompt: "Write 3/4 as a percentage.", answer: "75%", unit: "p3" },
      { prompt: "Find 3/4 of 40.", answer: "30", unit: "p3" },
      { prompt: "Find 15% of £80.", answer: "12", unit: "p3" },
      { prompt: "Simplify the ratio 15:25.", answer: "3:5", unit: "p4" },
      { prompt: "Share £60 in the ratio 2:3. What is the larger share?", answer: "36", unit: "p4" },
      { prompt: "Solve 3x + 4 = 19.", answer: "5", unit: "p5" },
      { prompt: "Find the nth term of 5, 8, 11, 14, …", answer: "3n+2", unit: "p5" },
      { prompt: "Area of a triangle with base 8 cm and height 5 cm.", answer: "20", unit: "p6" },
      { prompt: "Volume of a 4 cm × 3 cm × 2 cm cuboid.", answer: "24", unit: "p7" },
      { prompt: "Angles on a straight line. One is 110°. The other?", answer: "70", unit: "p7" },
      { prompt: "Find the mean of 4, 7, 2, 8, 4.", answer: "5", unit: "p8" },
    ],
  };
})();
