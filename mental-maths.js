(function () {
  function bank(prefix) {
    const out = [];
    const seen = new Set();
    function push(source, prompt, answer, extra) {
      if (!prompt || seen.has(prompt)) return;
      seen.add(prompt);
      const row = {
        id: prefix + (out.length + 1),
        source: source,
        prompt: prompt,
        answer: String(answer),
      };
      if (typeof answer === "number" && Number.isFinite(answer)) row.numeric = answer;
      if (extra && extra.acceptAny) row.acceptAny = extra.acceptAny;
      out.push(row);
    }
    return { push: push, list: out };
  }

  function clock(h, m) {
    return h + ":" + String(m).padStart(2, "0");
  }

  function buildYear7() {
    const box = bank("y7m");
    const push = box.push;

    const stories = [
      function (a, b) {
        return "There are " + a + " boxes with " + b + " pencils in each box. How many pencils are there?";
      },
      function (a, b) {
        return "A hall has " + a + " rows with " + b + " chairs in each row. How many chairs are there?";
      },
      function (a, b) {
        return a + " children each have " + b + " stickers. How many stickers are there altogether?";
      },
      function (a, b) {
        return "A baker fills " + a + " trays with " + b + " buns on each tray. How many buns is that?";
      },
      function (a, b) {
        return "There are " + a + " weeks, with " + b + " lessons each week. How many lessons is that?";
      },
    ];
    let story = 0;
    for (let a = 4; a <= 12; a += 1) {
      for (let b = a; b <= 12; b += 1) {
        push("Mental maths — multiplication", stories[story % stories.length](a, b), a * b);
        story += 1;
      }
    }

    for (let i = 0; i < 18; i += 1) {
      const a = 17 + i * 3;
      const b = 14 + (i % 6) * 4;
      const prompt =
        i % 2 === 0
          ? "A shelf holds " + a + " books and " + b + " more are added. How many books are there now?"
          : "Work out " + a + " + " + b + ".";
      push("Mental maths — addition", prompt, a + b);
    }

    for (let i = 0; i < 16; i += 1) {
      const total = 55 + ((i * 7) % 40);
      const sold = 8 + ((i * 3) % 20);
      const prompt =
        i % 2 === 0
          ? "A shop had " + total + " bottles and sold " + sold + ". How many bottles are left?"
          : "Work out " + total + " - " + sold + ".";
      push("Mental maths — subtraction", prompt, total - sold);
    }

    [28, 36, 42, 54, 68, 74, 86, 92, 48, 64, 76, 58].forEach(function (n) {
      push("Mental maths — halving", "What is half of " + n + "?", n / 2);
    });
    [17, 19, 24, 28, 33, 37, 41, 46].forEach(function (n) {
      push("Mental maths — doubling", "What is double " + n + "?", n * 2);
    });

    [20, 30, 40, 50, 60, 70, 80, 90, 120, 150, 200, 250].forEach(function (n) {
      push("Mental maths — percentage", "What is 10% of " + n + "?", n / 10);
    });
    [20, 24, 36, 40, 48, 60, 80, 100].forEach(function (n) {
      push("Mental maths — percentage", "What is 25% of " + n + "?", n / 4);
    });
    [18, 26, 34, 46, 52, 70, 88, 96].forEach(function (n) {
      push("Mental maths — percentage", "What is 50% of " + n + "?", n / 2);
    });

    [
      [24, 6],
      [36, 4],
      [40, 5],
      [42, 7],
      [48, 6],
      [54, 9],
      [56, 8],
      [63, 7],
      [32, 4],
      [45, 5],
    ].forEach(function (pair) {
      push(
        "Mental maths — sharing",
        pair[0] + " sweets are shared equally among " + pair[1] + " friends. How many sweets does each friend get?",
        pair[0] / pair[1]
      );
    });

    [
      [1, 10, 40],
      [2, 20, 25],
      [3, 15, 40],
      [4, 5, 50],
      [5, 40, 15],
      [6, 25, 30],
      [7, 35, 20],
      [8, 10, 45],
      [9, 20, 35],
      [10, 5, 50],
      [2, 50, 25],
      [4, 40, 35],
    ].forEach(function (row) {
      const total = row[0] * 60 + row[1] + row[2];
      const label = clock(Math.floor(total / 60), total % 60);
      const start = clock(row[0], row[1]);
      push(
        "Mental maths — time",
        "A film starts at " + start + " and lasts " + row[2] + " minutes. Write the time it ends.",
        label,
        { acceptAny: [label, label.replace(":", ".")] }
      );
    });

    [
      [2, 3],
      [5, 4],
      [1, 5],
      [4, 6],
      [8, 3],
      [7, 4],
      [10, 5],
      [3, 7],
      [6, 8],
      [9, 6],
    ].forEach(function (row) {
      const nums = [];
      for (let i = 0; i < 4; i += 1) nums.push(row[0] + i * row[1]);
      push(
        "Mental maths — pattern",
        "The pattern is " + nums.join(", ") + ". What is the next number?",
        row[0] + 4 * row[1]
      );
    });

    [
      [3, 45, 6],
      [4, 60, 8],
      [2, 50, 6],
      [5, 40, 10],
      [3, 36, 9],
      [4, 28, 12],
      [2, 35, 8],
      [6, 30, 12],
    ].forEach(function (row) {
      push(
        "Mental maths — money",
        "Pencils are sold at " + row[0] + " for " + row[1] + " pence. How many pence do " + row[2] + " pencils cost?",
        (row[1] * row[2]) / row[0]
      );
    });

    [5, 7, 8, 9, 11, 12, 13, 15].forEach(function (side) {
      push(
        "Mental maths — perimeter",
        "A square has sides of " + side + " cm. What is the perimeter in centimetres?",
        side * 4
      );
    });
    [
      [8, 5],
      [7, 4],
      [9, 6],
      [10, 3],
      [12, 5],
      [11, 4],
      [9, 8],
      [7, 6],
    ].forEach(function (pair) {
      push(
        "Mental maths — perimeter",
        "A rectangle is " + pair[0] + " cm long and " + pair[1] + " cm wide. What is the perimeter in centimetres?",
        2 * (pair[0] + pair[1])
      );
    });

    [
      [1, 2, 18],
      [1, 2, 46],
      [1, 4, 24],
      [1, 4, 36],
      [3, 4, 20],
      [3, 4, 32],
      [2, 3, 18],
      [2, 3, 24],
      [3, 5, 20],
      [2, 5, 25],
      [1, 3, 27],
      [1, 5, 40],
    ].forEach(function (row) {
      push(
        "Mental maths — fractions",
        "What is " + row[0] + "/" + row[1] + " of " + row[2] + "?",
        (row[2] / row[1]) * row[0]
      );
    });

    [
      [3, 4, 2],
      [5, 3, 4],
      [2, 6, 5],
      [7, 2, 8],
      [4, 5, 3],
      [8, 3, 6],
      [6, 4, 5],
      [9, 2, 7],
      [5, 6, 3],
      [4, 7, 6],
    ].forEach(function (row) {
      push(
        "Mental maths — order of operations",
        "Work out " + row[0] + " + " + row[1] + " × " + row[2] + ". Multiply before you add.",
        row[0] + row[1] * row[2]
      );
    });

    function larger(leftLabel, left, rightLabel, right) {
      if (left === right) return;
      push(
        "Mental maths — comparing",
        "Which result is larger: " + leftLabel + ", or " + rightLabel + "? Write the larger number.",
        Math.max(left, right)
      );
    }
    larger("3/4 of 20", 15, "2/3 of 18", 12);
    larger("6 × 7", 42, "5 × 8", 40);
    larger("50% of 30", 15, "10% of 200", 20);
    larger("half of 50", 25, "3 × 9", 27);
    larger("4 × 8", 32, "5 × 6", 30);
    larger("25% of 80", 20, "2 × 9", 18);
    larger("double 16", 32, "3 × 11", 33);
    larger("8 × 6", 48, "7 × 7", 49);

    [
      [3, 19],
      [4, 22],
      [5, 25],
      [2, 18],
      [6, 30],
      [3, 27],
      [4, 36],
      [5, 31],
      [7, 29],
      [6, 22],
    ].forEach(function (row) {
      push(
        "Mental maths — puzzle",
        "I think of a number, double it, then add " + row[0] + ". The result is " + row[1] + ". What was my number?",
        (row[1] - row[0]) / 2
      );
    });

    [347, 162, 218, 474, 531, 86, 109, 255, 673, 941].forEach(function (n) {
      const rest = n % 10;
      const nearest = rest < 5 ? n - rest : n + (10 - rest);
      push("Mental maths — rounding", "Round " + n + " to the nearest ten.", nearest);
    });

    [35, 40, 55, 65, 70, 85, 25, 48].forEach(function (cost) {
      push(
        "Mental maths — change",
        "A snack costs " + cost + " pence. You pay with a £1 coin. How many pence change do you get?",
        100 - cost
      );
    });

    [
      [28, 75],
      [36, 80],
      [19, 50],
      [47, 90],
      [23, 60],
      [54, 100],
      [18, 45],
      [62, 85],
    ].forEach(function (pair) {
      push(
        "Mental maths — missing number",
        "What number must be added to " + pair[0] + " to make " + pair[1] + "?",
        pair[1] - pair[0]
      );
    });

    push(
      "Mental maths — number riddle",
      "I am a two-digit number. My tens digit is 4 and my ones digit is double the tens digit. What number am I?",
      48
    );
    push("Mental maths — squares", "Work out 5 squared plus 4 squared.", 41);
    push(
      "Mental maths — seats",
      "A bus has 36 seats and 19 are taken. How many seats are free?",
      17
    );

    return box.list;
  }

  function buildYear8() {
    const box = bank("y8m");
    const push = box.push;

    [20, 40, 60, 80, 100, 120, 140, 160, 180, 200].forEach(function (n) {
      push("Mental maths — percentage", "What is 15% of " + n + "?", (n * 15) / 100);
    });
    [15, 25, 35, 45, 55, 65, 75, 85, 30, 50].forEach(function (n) {
      push("Mental maths — percentage", "What is 20% of " + n + "?", n / 5);
    });
    [20, 30, 40, 50, 60, 70, 80, 90, 100, 110].forEach(function (n) {
      push("Mental maths — percentage", "What is 30% of " + n + "?", (n * 3) / 10);
    });

    for (let a = 2; a <= 6; a += 1) {
      for (let b = 3; b <= 6; b += 1) {
        if ((a + b) % 2 === 0) {
          push("Mental maths — negatives", "Work out (−" + a + ") × (−" + b + ").", a * b);
        } else {
          push("Mental maths — negatives", "Work out (−" + a + ") × " + b + ".", -(a * b));
        }
      }
    }

    for (let x = 2; x <= 9; x += 1) {
      for (let a = 2; a <= 4; a += 1) {
        const extra = (x % 4) + 1;
        const total = a * x + extra;
        push(
          "Mental maths — equation",
          "Solve " + a + "x + " + extra + " = " + total + ". Write the value of x.",
          x
        );
      }
    }

    for (let n = 11; n <= 20; n += 1) {
      push("Mental maths — squares", "What is " + n + " squared?", n * n);
    }
    [12, 14, 16, 18].forEach(function (n) {
      push(
        "Mental maths — squares",
        "You know that " + n + " squared is " + n * n + ". What is " + (n + 1) + " squared?",
        (n + 1) * (n + 1)
      );
    });

    [16, 25, 36, 49, 64, 81, 100, 121, 144, 169].forEach(function (n) {
      push("Mental maths — roots", "What is the square root of " + n + "?", Math.round(Math.sqrt(n)));
    });
    [
      [36, 64],
      [49, 16],
      [100, 25],
      [81, 9],
      [121, 4],
      [144, 36],
    ].forEach(function (pair) {
      push(
        "Mental maths — roots",
        "Work out the square root of " + pair[0] + " plus the square root of " + pair[1] + ".",
        Math.round(Math.sqrt(pair[0]) + Math.sqrt(pair[1]))
      );
    });

    [
      [40, 1, 3],
      [48, 1, 3],
      [36, 1, 2],
      [50, 1, 4],
      [60, 1, 4],
      [72, 1, 5],
      [45, 2, 3],
      [56, 1, 6],
      [64, 1, 7],
      [80, 1, 3],
      [42, 1, 5],
      [54, 1, 2],
      [28, 1, 3],
      [100, 1, 4],
    ].forEach(function (row) {
      const smaller = (row[0] * row[1]) / (row[1] + row[2]);
      push(
        "Mental maths — ratio",
        "£" + row[0] + " is shared in the ratio " + row[1] + " : " + row[2] + ". How many pounds is the smaller share?",
        smaller
      );
    });

    const travellers = ["cyclist", "car", "train", "bus"];
    [
      [90, 2],
      [120, 3],
      [80, 2],
      [150, 3],
      [60, 2],
      [100, 4],
      [180, 3],
      [70, 2],
      [96, 3],
      [140, 4],
      [200, 5],
      [48, 2],
    ].forEach(function (row, i) {
      push(
        "Mental maths — speed",
        "A " +
          travellers[i % travellers.length] +
          " travels " +
          row[0] +
          " km in " +
          row[1] +
          " hours at a steady speed. What is the speed in km/h?",
        row[0] / row[1]
      );
    });

    [
      [50, 60],
      [40, 70],
      [30, 80],
      [45, 45],
      [55, 65],
      [35, 75],
      [20, 90],
      [25, 65],
      [48, 62],
      [36, 54],
      [42, 58],
      [40, 55],
      [65, 40],
      [33, 77],
    ].forEach(function (pair) {
      push(
        "Mental maths — angles",
        "Two angles in a triangle are " + pair[0] + "° and " + pair[1] + "°. What is the third angle in degrees?",
        180 - pair[0] - pair[1]
      );
    });

    [18, 24, 33, 42, 51, 60, 27, 36, 45, 54].forEach(function (sum) {
      push(
        "Mental maths — consecutive numbers",
        "Three consecutive whole numbers add up to " + sum + ". What is the middle number?",
        sum / 3
      );
    });

    const goods = ["coat", "bag", "ticket", "lamp"];
    [16, 24, 32, 40, 48, 56, 64, 80].forEach(function (sale, i) {
      push(
        "Mental maths — reverse percentage",
        "A " +
          goods[i % goods.length] +
          " costs £" +
          sale +
          " after a 20% reduction. How many pounds did it cost before the reduction?",
        (sale * 5) / 4
      );
    });
    [18, 27, 36, 45, 54, 63, 72, 90].forEach(function (sale, i) {
      push(
        "Mental maths — reverse percentage",
        "A " +
          goods[i % goods.length] +
          " costs £" +
          sale +
          " after a 10% reduction. How many pounds did it cost before the reduction?",
        (sale * 10) / 9
      );
    });

    function fraction(prompt, answer, accepted) {
      push("Mental maths — fractions", prompt, answer, { acceptAny: accepted });
    }
    fraction("Work out 1/2 + 1/4. Give the answer as a fraction in its simplest form.", "3/4", ["3/4", "0.75"]);
    fraction("Work out 1/3 + 1/6. Give the answer as a fraction in its simplest form.", "1/2", ["1/2", "0.5"]);
    fraction("Work out 3/4 - 1/4.", "1/2", ["1/2", "0.5"]);
    fraction("Work out 2/3 + 1/6. Give the answer as a fraction in its simplest form.", "5/6", ["5/6"]);
    fraction("Work out 3/4 - 1/2. Give the answer as a fraction in its simplest form.", "1/4", ["1/4", "0.25"]);
    fraction("Work out 1/2 + 1/6. Give the answer as a fraction in its simplest form.", "2/3", ["2/3"]);
    fraction("Work out 5/6 - 1/2. Give the answer as a fraction in its simplest form.", "1/3", ["1/3"]);
    fraction("Work out 3/8 + 1/8. Give the answer as a fraction in its simplest form.", "1/2", ["1/2", "0.5"]);
    fraction("Work out 2/5 + 1/5. Give the answer as a fraction in its simplest form.", "3/5", ["3/5", "0.6"]);
    fraction("Work out 3/10 + 1/10. Give the answer as a fraction in its simplest form.", "2/5", ["2/5", "0.4"]);
    fraction("Work out 7/8 - 1/8. Give the answer as a fraction in its simplest form.", "3/4", ["3/4", "0.75"]);
    fraction("Work out 1/2 + 1/3. Give the answer as a fraction in its simplest form.", "5/6", ["5/6"]);

    [
      [6, 7, 8, 2],
      [4, 5, 3, 6],
      [9, 2, 4, 7],
      [5, 5, 6, 3],
      [8, 3, 5, 4],
      [7, 4, 9, 2],
      [3, 8, 6, 5],
      [4, 9, 2, 8],
      [6, 6, 7, 3],
      [5, 8, 4, 4],
      [9, 3, 8, 4],
      [2, 9, 7, 6],
    ].forEach(function (row) {
      push(
        "Mental maths — order of operations",
        "Work out " + row[0] + " × " + row[1] + " + " + row[2] + " × " + row[3] + ".",
        row[0] * row[1] + row[2] * row[3]
      );
    });

    for (let a = 2; a <= 4; a += 1) {
      for (let x = 2; x <= 5; x += 1) {
        const minus = a % 2 === 0;
        const y = minus ? a * x - 1 : a * x + 3;
        const rule = minus ? a + "x - 1" : a + "x + 3";
        push("Mental maths — substitution", "y = " + rule + ". Find y when x = " + x + ".", y);
      }
    }

    [
      [4, 7, 10],
      [5, 8, 11],
      [6, 9, 12],
      [2, 5, 11],
      [8, 11, 14],
      [3, 6, 15],
      [7, 10, 13],
      [9, 12, 15],
    ].forEach(function (row) {
      push(
        "Mental maths — mean",
        "What is the mean of " + row[0] + ", " + row[1] + " and " + row[2] + "?",
        (row[0] + row[1] + row[2]) / 3
      );
    });

    [
      [6, 4],
      [7, 5],
      [8, 3],
      [9, 4],
      [8, 6],
      [7, 8],
      [9, 6],
      [5, 12],
      [11, 4],
      [7, 6],
    ].forEach(function (pair) {
      push(
        "Mental maths — area",
        "A rectangle is " + pair[0] + " cm by " + pair[1] + " cm. What is its area in square centimetres?",
        pair[0] * pair[1]
      );
    });

    [
      [6, 9],
      [4, 7],
      [2, 8],
      [3, 10],
      [8, 12],
      [1, 6],
      [7, 4],
      [9, 15],
      [12, 5],
      [5, 11],
    ].forEach(function (pair) {
      const next = pair[0] - pair[1];
      push(
        "Mental maths — temperature",
        "The temperature is " +
          pair[0] +
          "°C and falls by " +
          pair[1] +
          " degrees. Write the new temperature, using a minus sign if it is below zero.",
        next
      );
    });

    [2, 3, 4, 5, 6, 7, 8, 10].forEach(function (n) {
      push("Mental maths — cubes", "What is " + n + " cubed?", n * n * n);
    });

    function larger(leftLabel, left, rightLabel, right) {
      push(
        "Mental maths — comparing",
        "Which result is larger: " + leftLabel + ", or " + rightLabel + "? Write the larger number.",
        Math.max(left, right)
      );
    }
    larger("2/5 of 50", 20, "30% of 40", 12);
    larger("15% of 80", 12, "1/4 of 40", 10);
    larger("3/4 of 40", 30, "20% of 120", 24);
    larger("the square root of 64", 8, "15% of 60", 9);
    larger("2 cubed plus 3", 11, "half of 24", 12);
    larger("(−3) × (−8)", 24, "5 × 5", 25);
    larger("40% of 50", 20, "3/5 of 30", 18);

    [
      [7, 3, 24],
      [4, 2, 18],
      [5, 4, 20],
      [6, 3, 27],
      [8, 2, 16],
      [3, 5, 30],
      [9, 2, 22],
      [4, 6, 36],
      [5, 3, 21],
      [2, 8, 32],
    ].forEach(function (row) {
      push(
        "Mental maths — puzzle",
        "I think of a number, subtract " + row[0] + ", then multiply by " + row[1] + ". The result is " + row[2] + ". What was my number?",
        row[2] / row[1] + row[0]
      );
    });

    return box.list;
  }

  window.MENTAL_MATHS = {
    7: buildYear7(),
    9: buildYear8(),
  };
})();
