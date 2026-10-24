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

  window.MATHS_Y6 = {
    id: "maths",
    title: "Mathematics",
    stage: "Year 6",
    book: "Learner’s Book 6",
    intro: "Integers on a number line—from everyday counting to below-zero temperatures—then LCM, HCF, divisibility tests, and square and cube roots.",
    units: [
              {
          id: "m1",
          title: "1 Integers",
          strand: "Number",
          intro: "When you first learn to count objects, you use the positive whole numbers like 1, 2, 3, and 4. These were actually the very first numbers that humans invented! However, you can use numbers for so much more than just counting objects. For example, if you need to measure temperature, it is super useful to have the number 0 (zero) as well as negative whole numbers like -1, -2, and -3. You can easily picture and put all these numbers on a number line.\n\nCALLOUT keyword|🔑 Key word definition\nIntegers — Positive and negative whole numbers together with zero are called integers.\nPositive Numbers — The numbers 1, 2, 3, 4, ... are called positive numbers to distinguish them from negative ones.\nNegative Numbers — The numbers -1, -2, -3, -4, ... are less than zero and are called negative integers.",
                    chapterObjectives: "Add and subtract with positive and negative integers.\nMultiply and divide with positive and negative integers.\nFind out about lowest common multiples.\nFind out about highest common factors.\nLearn tests of divisibility to find factors of large numbers.\nFind out how square numbers and cube numbers are related to square roots and cube roots.",
          chapterIntroduction: "When you first learn to count objects, you use the positive whole numbers like 1, 2, 3, and 4. These were actually the very first numbers that humans invented! However, you can use numbers for so much more than just counting objects. For example, if you need to measure temperature, it is super useful to have the number 0 (zero) as well as negative whole numbers like -1, -2, and -3. You can easily picture and put all these numbers on a number line.\n\nCALLOUT keyword|🔑 Key word definition\nIntegers — Positive and negative whole numbers together with zero are called integers.\nPositive Numbers — The numbers 1, 2, 3, 4, ... are called positive numbers to distinguish them from negative ones.\nNegative Numbers — The numbers -1, -2, -3, -4, ... are less than zero and are called negative integers.",

          topics: [
          topic("1.1", "Adding and subtracting integers", [
            [
              "Key idea",
              "What are the key ideas in Adding and subtracting integers?",
              "You can use a number line to help you jump back and forth when adding and subtracting integers. Moving to the right adds positive numbers, and moving to the left adds negative numbers.",
            ],
            [
              "Recall",
              "Examples and recall: Adding and subtracting integers",
              "CALLOUT keyword|🔑 Key word definition\nInverse — The opposite value. For example, the inverse of 3 is -3, and the inverse of -5 is 5.\nInverse Operation — Subtraction is the inverse operation of addition.",
            ],
            [
              "Check",
              "Check your understanding: Adding and subtracting integers",
              "CALLOUT rule|🧠 Rule\nTo subtract an integer, you just add the inverse.\n\nCALLOUT fun|🚀 Fun examples\nAdding integers: To work out -4 + 6, start at -4 on your number line and move 6 spaces to the right. -4 + 6 = 2.\nSubtracting integers: To work out 2 - -4, you add the inverse of -4, which is 4! So, 2 - -4 = 2 + 4 = 6.",
            ],
          ]),
          topic("1.2", "Multiplying and dividing integers", [
            [
              "Key idea",
              "What are the key ideas in Multiplying and dividing integers?",
              "Multiplication is just a quick way of doing repeated addition! For example, 3 × 4 is the same as 3 + 3 + 3 + 3 = 12.",
            ],
            [
              "Recall",
              "Examples and recall: Multiplying and dividing integers",
              "CALLOUT keyword|🔑 Key word definition\nProduct — The answer you get when you multiply numbers together. For example, 12 is the product of 3 and 4.",
            ],
            [
              "Check",
              "Check your understanding: Multiplying and dividing integers",
              "🧠 RULES:\nMultiplication: The product of a positive and a negative integer is always negative.\nDivision: Division is the inverse operation of multiplication. Just like multiplication, when one integer is positive and the other is negative, the answer is negative.\n\nCALLOUT fun|🚀 Fun examples\nMultiplication: 6 × -4 = -24 and -4 × 12 = -48.\nDivision: Since 20 ÷ 5 = 4, if we make it negative, -20 ÷ 5 = -4.",
            ],
          ]),
          topic("1.3", "Lowest common multiples", [
            [
              "Key idea",
              "What are the key ideas in Lowest common multiples?",
              "Multiples are like your times tables. The multiples of 4 are 4, 8, 12, 16, 20... and so on.",
            ],
            [
              "Recall",
              "Examples and recall: Lowest common multiples",
              "CALLOUT keyword|🔑 Key word definition\nCommon Multiple — A number that appears in the multiples list for two different numbers.\nLowest Common Multiple (LCM) — The smallest number that is a multiple of both numbers.",
            ],
            [
              "Check",
              "Check your understanding: Lowest common multiples",
              "CALLOUT fun|🚀 Fun examples\nLet's find the LCM of 4 and 6!\nThe multiples of 4 are 4, 8, 12, 16, 20, 24...\nThe multiples of 6 are 6, 12, 18, 24, 30...\nThe common multiples are 12 and 24, but the Lowest Common Multiple (LCM) is 12.",
            ],
          ]),
          topic("1.4", "Highest common factors", [
            [
              "Key idea",
              "What are the key ideas in Highest common factors?",
              "Factors are all the whole numbers that multiply together to make your target number.",
            ],
            [
              "Recall",
              "Examples and recall: Highest common factors",
              "CALLOUT keyword|🔑 Key word definition\nCommon Factor — Numbers that are in both of the lists of factors for two different numbers.\nHighest Common Factor (HCF) — The largest factor that both numbers share.",
            ],
            [
              "Check",
              "Check your understanding: Highest common factors",
              "CALLOUT rule|🧠 Rule\nYou can use a highest common factor to simplify a fraction as much as possible.\n\nCALLOUT fun|🚀 Fun examples\nLet's find the HCF of 18 and 27!\nThe factors of 18 are 1, 2, 3, 6, 9 and 18.\nThe factors of 27 are 1, 3, 9 and 27.\nThe common factors are 1, 3, and 9, making the Highest Common Factor (HCF) 9!",
            ],
          ]),
          topic("1.5", "Tests for divisibility", [
            [
              "Key idea",
              "What are the key ideas in Tests for divisibility?",
              "Want to be a number detective? You can use quick secret tests to see if a massive number can be divided by smaller numbers without leaving any remainder!",
            ],
            [
              "Recall",
              "Examples and recall: Tests for divisibility",
              "CALLOUT keyword|🔑 Key word definition\nDivisible — You say a number is divisible by another number when the division does not have a remainder.",
            ],
            [
              "Check",
              "Check your understanding: Tests for divisibility",
              "CALLOUT rule|🧠 Divisibility rules\nBy 2: A number is divisible by 2 when the last digit is 0, 2, 4, 6 or 8.\nBy 3: A number is divisible by 3 when the sum of the digits is a multiple of 3.\nBy 5: A number is divisible by 5 when the last digit is 0 or 5.\nBy 10: A number is divisible by 10 when the last digit is 0.\n\nCALLOUT fun|🚀 Fun examples\nLet's look at the giant number 87 654!\nIs it divisible by 2? Yes, because the last digit is 4.\nIs it divisible by 3? Let's add the digits: 8 + 7 + 6 + 5 + 4 = 30. Since 30 is a multiple of 3 (10 × 3), yes it is!\nIs it divisible by 5? No, because the last digit is 4, not 0 or 5.",
            ],
          ]),
          topic("1.6", "Square roots and cube roots", [
            [
              "Key idea",
              "What are the key ideas in Square roots and cube roots?",
              "When you multiply a number by itself, you unlock special shape numbers!",
            ],
            [
              "Recall",
              "Examples and recall: Square roots and cube roots",
              "CALLOUT keyword|🔑 Key word definition\nSquare number — The result of multiplying a number by itself (like 2 × 2 = 4).\nCube number — The result of multiplying a number by itself three times (like 2 × 2 × 2 = 8).\nIndex — The small number written at the top right to show how many times to multiply (like the 2 in 3^2 or the 3 in 2^3).",
            ],
            [
              "Check",
              "Check your understanding: Square roots and cube roots",
              "CALLOUT formula|🧠 Formulae & symbols\nSquare Root (\\sqrt{}): This is the reverse of squaring a number.\nCube Root (\\sqrt[3]{}): This is the reverse of cubing a number.\n\nCALLOUT fun|🚀 Fun examples\n4 × 4 = 16. We use an index of 2 to write this as 4^2 = 16, which you read as '4 squared'.\nThe equivalent statement for the square root is \\sqrt{16} = 4, read as '4 is the square root of 16'.\n3 × 3 × 3 = 27, written as 3^3 = 27 ('3 cubed').\nTo go backward, we say \\sqrt[3]{27} = 3.",
            ],
          ]),
          ],
        },
    
              {
                id: "m2",
                title: "2 Expressions, formulae and equations",
                strand: "Number",
                intro: "Algebra is the part of mathematics where you use letters and other symbols to represent numbers. It is like learning a secret code that links geometry, statistics, and number puzzles together.\n\nAlgebra allows you to take a specific situation and make a general rule (a formula) that works every single time! This helps in everyday life, like figuring out the area of your garden, finding the best deals at a supermarket, or even designing video games. Studying algebra trains your brain to think logically and solve tricky problems!",
                          chapterObjectives: "Use letters to represent numbers and use the correct order of operations in algebraic expressions.\nSubstitute numbers into expressions and write and use formulae.\nCollect like terms to simplify expressions.\nExpand brackets in algebraic expressions.\nConstruct and solve equations.\nUse letters to represent a range of numbers using inequalities.",
          chapterIntroduction: "Algebra is the part of mathematics where you use letters and other symbols to represent numbers. It is like learning a secret code that links geometry, statistics, and number puzzles together.\n\nAlgebra allows you to take a specific situation and make a general rule (a formula) that works every single time! This helps in everyday life, like figuring out the area of your garden, finding the best deals at a supermarket, or even designing video games. Studying algebra trains your brain to think logically and solve tricky problems!",

                topics: [
                topic("2.1", "Constructing expressions", [
                  [
                    "Key idea",
                    "What are the key ideas in Constructing expressions?",
                    "In algebra, you can use a letter to represent an unknown number.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Constructing expressions",
                    "CALLOUT keyword|🔑 Key word definition\nExpression — Contains numbers and letters, but NOT an equals sign (e.g., 5n + 4).\nEquation — Contains numbers, letters, AND an equals sign (e.g., 5n + 4 = 19).\nVariable — The letter (like n) that represents an unknown number that can change.\nCoefficient — The number that multiplies the variable (in 5n, 5 is the coefficient).\nConstant — A plain number that doesn't change (like the 4 in 5n + 4).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Constructing expressions",
                    "CALLOUT fun|🚀 Fun examples\nLet's say Mathew is x years old.\nDavid is 4 years older than Mathew, so his age is x + 4.\nKathryn is 3 times Mathew's age, so we multiply 3 by x. We write this simply as 3x.\nElla is half Mathew's age, so we divide by 2. We write this as \\frac{x}{2}.",
                  ],
                ]),
                topic("2.2", "Using expressions and formulae", [
                  [
                    "Key idea",
                    "What are the key ideas in Using expressions and formulae?",
                    "A formula is a mathematical rule that shows the relationship between two quantities.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Using expressions and formulae",
                    "CALLOUT keyword|🔑 Key word definition\nFormula — A rule written using letters or words, like Area of rectangle = length × width, or A = l × w.\nSubstitute — Swapping a letter in a formula for a real number.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Using expressions and formulae",
                    "CALLOUT fun|🚀 Fun examples\nLet's work out the value of the expression 2w - 3v when w = 12 and v = 5.\nSubstitute the numbers in: 2 × 12 - 3 × 5.\nDo the multiplication first: 24 - 15.\nThe answer is 9!",
                  ],
                ]),
                topic("2.3", "Collecting like terms", [
                  [
                    "Key idea",
                    "What are the key ideas in Collecting like terms?",
                    "Imagine you have some red bricks and blue bricks. You can't say a red brick is a blue brick! In algebra, you can only add or subtract terms that have the exact same letters.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Collecting like terms",
                    "CALLOUT keyword|🔑 Key word definition\nLike terms — Terms that have the exact same letters.\nSimplify — Rewriting an expression in the shortest way possible by squishing (collecting) the like terms together.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Collecting like terms",
                    "CALLOUT rule|🧠 Rule\nWrite 2a instead of a + a or 2 × a.\nWrite a^2 instead of a × a.\nAlways write the letters in alphabetical order (e.g., ab instead of ba).\n\nCALLOUT fun|🚀 Fun examples\nSimplify 4p + 3q + 2p - q.\nGroup the p's: 4p + 2p = 6p.\nGroup the q's: 3q - 1q = 2q.\nPut it together: 6p + 2q. (We stop here because p and q are different letters!)",
                  ],
                ]),
                topic("2.4", "Expanding brackets", [
                  [
                    "Key idea",
                    "What are the key ideas in Expanding brackets?",
                    "Sometimes algebraic expressions are trapped inside brackets! To free them, you must multiply everything inside the bracket by the number on the outside.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Expanding brackets",
                    "CALLOUT keyword|🔑 Key word definition\nExpand — Multiplying out the brackets to remove them from the expression.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Expanding brackets",
                    "CALLOUT fun|🚀 Fun examples\nLet's expand 4(n + 3).\nMultiply the 4 by the n: 4 × n = 4n.\nMultiply the 4 by the 3: 4 × 3 = 12.\nAdd them together: 4n + 12.",
                  ],
                ]),
                topic("2.5", "Constructing and solving equations", [
                  [
                    "Key idea",
                    "What are the key ideas in Constructing and solving equations?",
                    "Solving an equation is like being a detective. You have to find the hidden value of the unknown letter!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Constructing and solving equations",
                    "CALLOUT keyword|🔑 Key word definition\nSolve — Finding the exact number value of the unknown letter.\nSolution — The final answer you get after solving.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Constructing and solving equations",
                    "CALLOUT rule|🧠 Rule\nWhatever you do to one side of the equals sign, you MUST do to the other side to keep it balanced.\n\nCALLOUT fun|🚀 Fun examples\nLet's solve x + 5 = 12.\nWe want x all by itself. So, we subtract 5 from both sides.\nx + 5 - 5 = 12 - 5.\nx = 7.",
                  ],
                ]),
                topic("2.6", "Inequalities", [
                  [
                    "Key idea",
                    "What are the key ideas in Inequalities?",
                    "Sometimes a letter doesn't just stand for one number; it can stand for a whole range of numbers!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Inequalities",
                    "CALLOUT keyword|🔑 Key word definition\nInequality symbols — \n< means 'is less than'.\n> means 'is greater than'.\nOpen interval — A range of numbers that doesn't include the starting number itself (we show this with an open circle on a number line).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Inequalities",
                    "CALLOUT fun|🚀 Fun examples\nThe inequality x > 4 means x can be any number bigger than 4, like 5, 6, 7, 8... all the way to infinity!\nIf we draw it on a number line, we draw an open circle at 4 and an arrow pointing to the right.",
                  ],
                ]),
                ],
              },
              {
                id: "m3",
                title: "3 Place value and rounding",
                strand: "Number",
                intro: "Algebra is the part of mathematics where you use letters and other symbols to represent numbers. It is like learning a secret code that links geometry, statistics, and number puzzles together.\n\nAlgebra allows you to take a specific situation and make a general rule (a formula) that works every single time! This helps in everyday life, like figuring out the area of your garden, finding the best deals at a supermarket, or even designing video games. Studying algebra trains your brain to think logically and solve tricky problems!",
                          chapterObjectives: "Use letters to represent numbers and use the correct order of operations in algebraic expressions.\nSubstitute numbers into expressions and write and use formulae.\nCollect like terms to simplify expressions.\nExpand brackets in algebraic expressions.\nConstruct and solve equations.\nUse letters to represent a range of numbers using inequalities.",
          chapterIntroduction: "Algebra is the part of mathematics where you use letters and other symbols to represent numbers. It is like learning a secret code that links geometry, statistics, and number puzzles together.\n\nAlgebra allows you to take a specific situation and make a general rule (a formula) that works every single time! This helps in everyday life, like figuring out the area of your garden, finding the best deals at a supermarket, or even designing video games. Studying algebra trains your brain to think logically and solve tricky problems!",

                topics: [
                topic("2.1", "Constructing expressions", [
                  [
                    "Key idea",
                    "What are the key ideas in Constructing expressions?",
                    "In algebra, you can use a letter to represent an unknown number.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Constructing expressions",
                    "CALLOUT keyword|🔑 Key word definition\nExpression — Contains numbers and letters, but NOT an equals sign (e.g., 5n + 4).\nEquation — Contains numbers, letters, AND an equals sign (e.g., 5n + 4 = 19).\nVariable — The letter (like n) that represents an unknown number that can change.\nCoefficient — The number that multiplies the variable (in 5n, 5 is the coefficient).\nConstant — A plain number that doesn't change (like the 4 in 5n + 4).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Constructing expressions",
                    "CALLOUT fun|🚀 Fun examples\nLet's say Mathew is x years old.\nDavid is 4 years older than Mathew, so his age is x + 4.\nKathryn is 3 times Mathew's age, so we multiply 3 by x. We write this simply as 3x.\nElla is half Mathew's age, so we divide by 2. We write this as \\frac{x}{2}.",
                  ],
                ]),
                topic("2.2", "Using expressions and formulae", [
                  [
                    "Key idea",
                    "What are the key ideas in Using expressions and formulae?",
                    "A formula is a mathematical rule that shows the relationship between two quantities.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Using expressions and formulae",
                    "CALLOUT keyword|🔑 Key word definition\nFormula — A rule written using letters or words, like Area of rectangle = length × width, or A = l × w.\nSubstitute — Swapping a letter in a formula for a real number.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Using expressions and formulae",
                    "CALLOUT fun|🚀 Fun examples\nLet's work out the value of the expression 2w - 3v when w = 12 and v = 5.\nSubstitute the numbers in: 2 × 12 - 3 × 5.\nDo the multiplication first: 24 - 15.\nThe answer is 9!",
                  ],
                ]),
                topic("2.3", "Collecting like terms", [
                  [
                    "Key idea",
                    "What are the key ideas in Collecting like terms?",
                    "Imagine you have some red bricks and blue bricks. You can't say a red brick is a blue brick! In algebra, you can only add or subtract terms that have the exact same letters.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Collecting like terms",
                    "CALLOUT keyword|🔑 Key word definition\nLike terms — Terms that have the exact same letters.\nSimplify — Rewriting an expression in the shortest way possible by squishing (collecting) the like terms together.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Collecting like terms",
                    "CALLOUT rule|🧠 Rule\nWrite 2a instead of a + a or 2 × a.\nWrite a^2 instead of a × a.\nAlways write the letters in alphabetical order (e.g., ab instead of ba).\n\nCALLOUT fun|🚀 Fun examples\nSimplify 4p + 3q + 2p - q.\nGroup the p's: 4p + 2p = 6p.\nGroup the q's: 3q - 1q = 2q.\nPut it together: 6p + 2q. (We stop here because p and q are different letters!)",
                  ],
                ]),
                topic("2.4", "Expanding brackets", [
                  [
                    "Key idea",
                    "What are the key ideas in Expanding brackets?",
                    "Sometimes algebraic expressions are trapped inside brackets! To free them, you must multiply everything inside the bracket by the number on the outside.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Expanding brackets",
                    "CALLOUT keyword|🔑 Key word definition\nExpand — Multiplying out the brackets to remove them from the expression.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Expanding brackets",
                    "CALLOUT fun|🚀 Fun examples\nLet's expand 4(n + 3).\nMultiply the 4 by the n: 4 × n = 4n.\nMultiply the 4 by the 3: 4 × 3 = 12.\nAdd them together: 4n + 12.",
                  ],
                ]),
                topic("2.5", "Constructing and solving equations", [
                  [
                    "Key idea",
                    "What are the key ideas in Constructing and solving equations?",
                    "Solving an equation is like being a detective. You have to find the hidden value of the unknown letter!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Constructing and solving equations",
                    "CALLOUT keyword|🔑 Key word definition\nSolve — Finding the exact number value of the unknown letter.\nSolution — The final answer you get after solving.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Constructing and solving equations",
                    "CALLOUT rule|🧠 Rule\nWhatever you do to one side of the equals sign, you MUST do to the other side to keep it balanced.\n\nCALLOUT fun|🚀 Fun examples\nLet's solve x + 5 = 12.\nWe want x all by itself. So, we subtract 5 from both sides.\nx + 5 - 5 = 12 - 5.\nx = 7.",
                  ],
                ]),
                topic("2.6", "Inequalities", [
                  [
                    "Key idea",
                    "What are the key ideas in Inequalities?",
                    "Sometimes a letter doesn't just stand for one number; it can stand for a whole range of numbers!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Inequalities",
                    "CALLOUT keyword|🔑 Key word definition\nInequality symbols — \n< means 'is less than'.\n> means 'is greater than'.\nOpen interval — A range of numbers that doesn't include the starting number itself (we show this with an open circle on a number line).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Inequalities",
                    "CALLOUT fun|🚀 Fun examples\nThe inequality x > 4 means x can be any number bigger than 4, like 5, 6, 7, 8... all the way to infinity!\nIf we draw it on a number line, we draw an open circle at 4 and an arrow pointing to the right.",
                  ],
                ]),
                ],
              },
                                                {
                    id: "m4",
                    title: "4 Decimals",
                    strand: "Number",
                    intro: "The decimal system is a number system based on 10. You can write all the numbers using just ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.\n\nMany countries in the world use a decimal system for their currency, meaning each unit of money is based on a multiple of 10. For example, in the USA, 1 dollar is equal to 100 cents, and in the UK, 1 pound is equal to 100 pence! It is much easier to understand new currencies when you travel if they are based on the decimal system.",
                              chapterObjectives: "Compare and order decimals.\nAdd and subtract decimals using mental and written methods[cite: 74, 75].\nMultiply decimals by whole numbers.\nDivide decimals by whole numbers.\nSimplify calculations containing decimals.",
          chapterIntroduction: "The decimal system is a number system based on 10. You can write all the numbers using just ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.\n\nMany countries in the world use a decimal system for their currency, meaning each unit of money is based on a multiple of 10. For example, in the USA, 1 dollar is equal to 100 cents, and in the UK, 1 pound is equal to 100 pence! It is much easier to understand new currencies when you travel if they are based on the decimal system.",

                    topics: [
                    topic("4.1", "Ordering decimals", [
                      [
                        "Key idea",
                        "What are the key ideas in Ordering decimals?",
                        "To order decimal numbers, you write them from the smallest to the largest.",
                      ],
                      [
                        "Recall",
                        "Examples and recall: Ordering decimals",
                        "CALLOUT keyword|🔑 Key word definition\nCompare — Looking at numbers to see which is larger or smaller.\nTenths and Hundredths — The place values immediately to the right of the decimal point.",
                      ],
                      [
                        "Check",
                        "Check your understanding: Ordering decimals",
                        "🧠 RULES & SYMBOLS:\nFirst, always compare the whole-number part of the numbers.\nIf the whole-number parts are the same, you must compare the tenths, then the hundredths, and so on.\nThe symbol < means 'is smaller than'.\nThe symbol > means 'is bigger than'.\nThe symbol \\ne means 'is not equal to'.\n\nCALLOUT fun|🚀 Fun examples\nLet's order 2.82, 2.6, and 2.816.\nThey all have the same whole number of 2.\nLook at the tenths: 2.6 has 6 tenths, which is smaller than the 8 tenths in the other numbers, so 2.6 is the smallest.\nCompare the hundredths of the remaining numbers: 2.816 has 1 hundredth, making it smaller than 2.82, which has 2 hundredths.\nThe correct order is 2.6, 2.816, 2.82.",
                      ],
                    ]),
                    topic("4.2", "Adding and subtracting decimals", [
                      [
                        "Key idea",
                        "What are the key ideas in Adding and subtracting decimals?",
                        "You can use mental methods or written columns to add and subtract decimals[cite: 74, 75].",
                      ],
                      [
                        "Recall",
                        "Examples and recall: Adding and subtracting decimals",
                        "🧠 MENTAL MATH TRICKS:\nSeparate: Break the numbers into their whole-number parts and their decimal parts, calculate them separately, and then combine the answers.\nRound & Adjust: If a number is close to a whole number, round it, do the math, and then adjust your answer at the end.",
                      ],
                      [
                        "Check",
                        "Check your understanding: Adding and subtracting decimals",
                        "CALLOUT rule|🧠 Rule\nAlways write the calculation in columns, with the decimal points vertically in line. Add or subtract as normal, and remember to drop the decimal point straight down into your answer.\n\nCALLOUT fun|🚀 Fun examples\nLet's mentally add 6.9 + 12.4.\nRound 6.9 up to 7.\nAdd 7 to 12.4 to get 19.4.\nSubtract the extra 0.1 you added earlier.\nThe final answer is 19.3.",
                      ],
                    ]),
                    topic("4.3", "Multiplying decimals", [
                      [
                        "Key idea",
                        "What are the key ideas in Multiplying decimals?",
                        "Multiplying a decimal by a whole number is just like regular multiplication, with one extra step at the end.",
                      ],
                      [
                        "Recall",
                        "Examples and recall: Multiplying decimals",
                        "🧠 RULES FOR MULTIPLYING:\n1. First, work out the multiplication without the decimal point.\n2. Put the decimal point back into the answer.\n3. There must be the exact same number of digits after the decimal point in the answer as there were in the question.",
                      ],
                      [
                        "Check",
                        "Check your understanding: Multiplying decimals",
                        "CALLOUT fun|🚀 Fun examples\nLet's work out 0.002 × 4.\nDo the multiplication without the decimal: 2 × 4 = 8.\nThe question (0.002) has three digits after the decimal point, so the answer needs three digits after the decimal point.\nThe answer is 0.008.",
                      ],
                    ]),
                    topic("4.4", "Dividing decimals", [
                      [
                        "Key idea",
                        "What are the key ideas in Dividing decimals?",
                        "Dividing a decimal by a whole number uses short division.",
                      ],
                      [
                        "Recall",
                        "Examples and recall: Dividing decimals",
                        "🧠 RULES FOR DIVIDING:\n1. Use short division (or your favorite division method).\n2. Keep the decimal point in the question.\n3. Write the decimal point in the answer directly above the decimal point in the question.",
                      ],
                      [
                        "Check",
                        "Check your understanding: Dividing decimals",
                        "🧠 RULES FOR DIVIDING:\n1. Use short division (or your favorite division method).\n2. Keep the decimal point in the question.\n3. Write the decimal point in the answer directly above the decimal point in the question.",
                      ],
                    ]),
                    topic("4.5", "Making decimal calculations easier", [
                      [
                        "Key idea",
                        "What are the key ideas in Making decimal calculations easier?",
                        "You can make tricky calculations simple by using place value and partitioning.",
                      ],
                      [
                        "Recall",
                        "Examples and recall: Making decimal calculations easier",
                        "CALLOUT keyword|🔑 Key word definition\nEquivalent fraction — Using the place value of the decimal to turn it into a fraction, like turning 0.06 into \\frac{6}{100}.\nPartitioning — Breaking a multiplication down to make it easier to solve.",
                      ],
                      [
                        "Check",
                        "Check your understanding: Making decimal calculations easier",
                        "CALLOUT fun|🚀 Fun examples\nLet's work out 8.2 × 9.\nSwap the 9 for (10 - 1).\nWork out 8.2 × 10 (which is 82) and 8.2 × 1 (which is 8.2).\nSubtract them: 82 - 8.2 = 73.8.",
                      ],
                    ]),
                    ],
                  },
              {
                id: "m5",
                title: "5 Angles and constructions",
                strand: "Number",
                intro: "A length is just the distance between two points, but when you change direction, you actually turn through an angle! You measure the size of these angles in degrees.\n\nDid you know that the Babylonians and ancient Egyptians divided a whole turn into 360 parts as long ago as 1500 BCE? They likely did this because some calendars back then divided the year into exactly 360 days. Plus, 360 is a super useful number because it can be easily divided into simple fractions like halves, thirds, quarters, and fifths!",
                          chapterObjectives: "Use the fact that the sum of the angles around a point is 360°.\nShow and use the fact that the angles of any quadrilateral add up to 360°.\nRecognise the properties of angles on perpendicular lines and intersecting lines.\nRecognise the properties of angles on parallel lines.\nDraw quadrilaterals, perpendicular lines, and parallel lines.",
          chapterIntroduction: "A length is just the distance between two points, but when you change direction, you actually turn through an angle! You measure the size of these angles in degrees.\n\nDid you know that the Babylonians and ancient Egyptians divided a whole turn into 360 parts as long ago as 1500 BCE? They likely did this because some calendars back then divided the year into exactly 360 days. Plus, 360 is a super useful number because it can be easily divided into simple fractions like halves, thirds, quarters, and fifths!",

                topics: [
                topic("5.1", "A sum of 360°", [
                  [
                    "Key idea",
                    "What are the key ideas in A sum of 360°?",
                    "You already know that the angles on a straight line add up to 180°, and the angles of a triangle also add up to 180°. Now let's go all the way around!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: A sum of 360°",
                    "CALLOUT keyword|🔑 Key word definition\nQuadrilateral — A shape that has four straight sides and four angles.\nSum — The total amount when you add numbers together.",
                  ],
                  [
                    "Check",
                    "Check your understanding: A sum of 360°",
                    "🧠 RULES:\nA whole turn is 360°, so the sum of the angles around a single point is always 360°.\nThe sum of the angles of *any* quadrilateral is 360°.\n\nCALLOUT rule|🧠 Rule\nWhy do the angles of a quadrilateral add up to 360°? If you draw a straight line from one corner to the opposite corner, you divide the quadrilateral into two triangles. Since each triangle's angles add up to 180°, the whole shape is 2 × 180° = 360°!",
                  ],
                ]),
                topic("5.2", "Intersecting lines", [
                  [
                    "Key idea",
                    "What are the key ideas in Intersecting lines?",
                    "When two lines cross over each other, they are called intersecting lines, and they create some very special rules for angles.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Intersecting lines",
                    "CALLOUT keyword|🔑 Key word definition\nOpposite angles — The angles that are directly across from each other when two lines intersect.\nPerpendicular — Two lines that intersect exactly at a right angle (90°).\nParallel — Lines that never intersect, no matter how far you draw them. (We use little arrows on the lines to show they are parallel).\nTransversal — A line that crosses through parallel lines.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Intersecting lines",
                    "CALLOUT rule|🧠 Rule\nWhen two lines intersect, their opposite angles are always equal. If one angle is 53°, the angle directly across from it is also 53°!",
                  ],
                ]),
                topic("5.3", "Drawing lines and quadrilaterals", [
                  [
                    "Key idea",
                    "What are the key ideas in Drawing lines and quadrilaterals?",
                    "To make accurate geometrical drawings, you need the right tools.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Drawing lines and quadrilaterals",
                    "CALLOUT keyword|🔑 Key word definition\nProtractor — A semi-circular tool used to measure and draw exact angles in degrees.\nSet square — A triangular tool used to easily draw perfect perpendicular (90°) lines.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Drawing lines and quadrilaterals",
                    "CALLOUT fun|🚀 Fun examples\nTo draw a quadrilateral accurately, you don't actually need to know all of its sides and angles. If you have a ruler and a protractor, you can start by drawing one line of a known length, place your protractor on the end (the vertex), and mark your next angle to build the shape step-by-step[cite: 109, 110]!",
                  ],
                ]),
                ],
              },
                              {
                  id: "m6",
                  title: "6 Collecting data",
                  strand: "Statistics",
                  intro: "Information is everywhere, and people collect it to make important decisions! For example, a company might use a website questionnaire to see if people like their hotels, or teachers might record the speeds of cars to find out if drivers are speeding past their school. In all of these cases, people are asking statistical questions and collecting data to find the answers.",
                            chapterObjectives: "Learn how to collect data to investigate statistical questions.\nUnderstand the different types of data: discrete, continuous, and categorical.\nLearn about taking a sample from a population.\nUnderstand the effect of sample size when collecting data.",
          chapterIntroduction: "Information is everywhere, and people collect it to make important decisions! For example, a company might use a website questionnaire to see if people like their hotels, or teachers might record the speeds of cars to find out if drivers are speeding past their school. In all of these cases, people are asking statistical questions and collecting data to find the answers.",

                  topics: [
                  topic("6.1", "Conducting an investigation", [
                    [
                      "Key idea",
                      "What are the key ideas in Conducting an investigation?",
                      "To answer a statistical question, you need to become a data detective and gather information. Before you start, you have to decide exactly what sort of data you want to collect and how you will collect it.",
                    ],
                    [
                      "Recall",
                      "Examples and recall: Conducting an investigation",
                      "CALLOUT keyword|🔑 Key word definition\nPrediction — A statement or guess you make that you can test by collecting data (e.g., \"Plants in the sun grow taller than plants in the shade\").\nDiscrete data — Number data that can take particular values only, like counting the number of brothers someone has (0, 1, 2...).\nContinuous data — Number data that comes from measurements and can take any value, such as masses, lengths, and times.\nCategorical data — Data that is sorted into categories using words instead of numbers, like people's favorite sports or shoe colors.",
                    ],
                    [
                      "Check",
                      "Check your understanding: Conducting an investigation",
                      "🧠 WAYS TO COLLECT DATA:\nYou can use a questionnaire to ask people questions.\nYou can carry out actual measurements.\nYou can make observations by watching what happens.\nYou can interview people directly to ask about their experiences.\n\nCALLOUT fun|🚀 Fun examples\nLet's test a prediction: \"11-year-old girls can run a distance of 50 metres faster than 11-year-old boys\".\nTo test this, you would choose some girls and boys to run 50 metres and time each one.\nBecause you are measuring time, this is continuous data.",
                    ],
                  ]),
                  topic("6.2", "Taking a sample", [
                    [
                      "Key idea",
                      "What are the key ideas in Taking a sample?",
                      "Sometimes, it is impossible to collect data from every single person or thing in the world.",
                    ],
                    [
                      "Recall",
                      "Examples and recall: Taking a sample",
                      "CALLOUT keyword|🔑 Key word definition\nPopulation — The entire, whole group of people or things you are investigating (e.g., all the newborn babies in the world).\nSample — A smaller chosen group selected from the whole population.\nSample size — The number of people or things you include in your chosen group.",
                    ],
                    [
                      "Check",
                      "Check your understanding: Taking a sample",
                      "🧠 RULES FOR SAMPLING:\nIt is best to get information from the whole population if you can.\nHowever, checking the whole population often takes too long or costs too much money, which is why we use a sample.\nA sample should not be too small, or it will not accurately represent the whole population.\nWhile a large sample size is better for accuracy, it comes with disadvantages like taking more time and effort to analyze.\n\nCALLOUT fun|🚀 Fun examples\nLet's say Arun makes a prediction: \"Boys can hold their breath longer than girls\".\nThe population is all the learners in his school.\nTesting the whole school would take a very long time, so Arun must choose a sample.\nHe could put names in a hat and select 40 learners, or just select one or two classes and test those specific learners.",
                    ],
                  ]),
                  ],
                },
              {
                id: "m7",
                title: "7 Fractions",
                strand: "Number",
                intro: "The word 'fraction' actually originates from the Latin word *fractio*, which means 'breaking into pieces'!\n\nPeople have been using fractions for a very long time. From as early as 1800 BCE, the ancient Egyptians were writing fractions using pictures called hieroglyphs to write words and numbers. The ancient Egyptians wrote all their fractions with a numerator of 1, and to show they were writing a fraction, they drew a mouth picture, which meant 'part', above the number! Today, you see fractions everywhere in everyday life, from signs showing distances, to sale posters in shops, and recipes in cookery books.",
                          chapterObjectives: "Compare and order fractions using common denominators and decimals.\nAdd mixed numbers.\nMultiply two proper fractions together.\nDivide two proper fractions.\nSimplify calculations containing fractions to make them easier.",
          chapterIntroduction: "The word 'fraction' actually originates from the Latin word *fractio*, which means 'breaking into pieces'!\n\nPeople have been using fractions for a very long time. From as early as 1800 BCE, the ancient Egyptians were writing fractions using pictures called hieroglyphs to write words and numbers. The ancient Egyptians wrote all their fractions with a numerator of 1, and to show they were writing a fraction, they drew a mouth picture, which meant 'part', above the number! Today, you see fractions everywhere in everyday life, from signs showing distances, to sale posters in shops, and recipes in cookery books.",

                topics: [
                topic("7.1", "Ordering fractions", [
                  [
                    "Key idea",
                    "What are the key ideas in Ordering fractions?",
                    "When you write fractions in order of size, you must first compare them to see which is bigger.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Ordering fractions",
                    "CALLOUT keyword|🔑 Key word definition\nCompare — Figuring out if a fraction is smaller, larger, or equal to another.\nCommon denominator — Making the bottom numbers (denominators) of fractions the same so they can be easily compared.\nRecurring decimals — Decimals that have repeating numbers that go on forever (e.g., 0.6666..., which can be written as 0.\\dot{6}).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Ordering fractions",
                    "🧠 TWO WAYS TO COMPARE FRACTIONS:\n1. Write them as fractions that have the same denominator.\n2. Use division to write them as decimals.\n\nCALLOUT fun|🚀 Fun examples\nLet's compare 2\\frac{6}{11} and \\frac{23}{9} using decimals!\nFirst, change the improper fraction to a mixed number: \\frac{23}{9} = 2\\frac{5}{9}.\nNow, compare the fractional parts using division:\n\\frac{6}{11} = 6 ÷ 11 = 0.5454...\n\\frac{5}{9} = 5 ÷ 9 = 0.555...\nSince 0.555... is larger than 0.5454..., \\frac{23}{9} is larger than 2\\frac{6}{11}!",
                  ],
                ]),
                topic("7.2", "Adding mixed numbers", [
                  [
                    "Key idea",
                    "What are the key ideas in Adding mixed numbers?",
                    "To add fractions, the denominators must always be the same!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Adding mixed numbers",
                    "CALLOUT keyword|🔑 Key word definition\nMixed number — A whole number combined with a proper fraction (like 3\\frac{1}{7}).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Adding mixed numbers",
                    "🧠 RULES FOR ADDING MIXED NUMBERS:\nStep 1: Add the whole-number parts together. (Use this answer as your estimate!)\nStep 2: Write the fractional parts as equivalent fractions with a common denominator, then add the numerators. If this answer is an improper fraction, write it as a mixed number.\nStep 3: Add your answers from steps 1 and 2 together!",
                  ],
                ]),
                topic("7.3", "Multiplying fractions", [
                  [
                    "Key idea",
                    "What are the key ideas in Multiplying fractions?",
                    "To find a fraction of a fraction, you just multiply the fractions together!",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Multiplying fractions",
                    "🧠 RULES FOR MULTIPLYING FRACTIONS:\n1. Multiply the numerators together.\n2. Multiply the denominators together.\n3. Cancel the final fraction down to its simplest form.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Multiplying fractions",
                    "CALLOUT fun|🚀 Fun examples\nLet's work out \\frac{2}{5} × \\frac{7}{8}.\nMultiply numerators: 2 × 7 = 14.\nMultiply denominators: 5 × 8 = 40.\nSo, \\frac{14}{40}.\nBoth 14 and 40 can be divided by 2, so cancel the answer to its simplest form: \\frac{7}{20}.",
                  ],
                ]),
                topic("7.4", "Dividing fractions", [
                  [
                    "Key idea",
                    "What are the key ideas in Dividing fractions?",
                    "Solving \\frac{2}{3} ÷ \\frac{1}{6} is just asking the question, 'How many \\frac{1}{6}s are there in \\frac{2}{3}?'.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Dividing fractions",
                    "CALLOUT keyword|🔑 Key word definition\nReciprocal — The fraction you get when you turn a fraction upside down (e.g., the reciprocal of \\frac{2}{3} is \\frac{3}{2}).",
                  ],
                  [
                    "Check",
                    "Check your understanding: Dividing fractions",
                    "🧠 RULES FOR DIVIDING FRACTIONS (KFC METHOD):\n1. Keep the first fraction the same.\n2. Flip (turn upside down) the second fraction to get its reciprocal.\n3. Change the divide sign to multiply, and multiply them together as usual.\n4. Write the answer in its simplest form and as a mixed number when possible.\n\nCALLOUT fun|🚀 Fun examples\nLet's work out \\frac{2}{5} ÷ \\frac{3}{10}.\nTurn the second fraction upside down: \\frac{2}{5} × \\frac{10}{3}.\nMultiply them: \\frac{20}{15}.\nCancel to simplest form: \\frac{4}{3}.\nWrite as a mixed number: 1\\frac{1}{3}.",
                  ],
                ]),
                topic("7.5", "Making fraction calculations easier", [
                  [
                    "Key idea",
                    "What are the key ideas in Making fraction calculations easier?",
                    "When you are calculating with fractions, there are clever methods you can use to make a calculation easier.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Making fraction calculations easier",
                    "🧠 CLEVER TRICKS TO SIMPLIFY:\nBreak a fraction into parts using factors.\nFind factors that are the same in the numerator and the denominator so you can easily cancel them out.\nUse partitioning to make whole number multiplication easier.\nInstead of working out a large fraction of a number (like \\frac{9}{10} of a number), work out the corresponding small fraction (like \\frac{1}{10}) and subtract it from the original number.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Making fraction calculations easier",
                    "🧠 CLEVER TRICKS TO SIMPLIFY:\nBreak a fraction into parts using factors.\nFind factors that are the same in the numerator and the denominator so you can easily cancel them out.\nUse partitioning to make whole number multiplication easier.\nInstead of working out a large fraction of a number (like \\frac{9}{10} of a number), work out the corresponding small fraction (like \\frac{1}{10}) and subtract it from the original number.",
                  ],
                ]),
                ],
              },
              {
                id: "m8",
                title: "8 Shapes and symmetry",
                strand: "Number",
                intro: "You use numbers every day, but you do not always need the numbers to be exact. Numbers are often rounded because it makes them much easier to work with and compare.\n\nFor example, imagine a newspaper article about a football game. Instead of saying the exact accurate number of 74,836 fans watched the match, the article might round the number and say 75,000 fans watched. This makes the story easier to read, because the exact accuracy isn't always important!",
                          chapterObjectives: "Multiply and divide whole numbers by powers of 10.\nMultiply and divide decimals by powers of 10.\nRound numbers to a given number of decimal places.",
          chapterIntroduction: "You use numbers every day, but you do not always need the numbers to be exact. Numbers are often rounded because it makes them much easier to work with and compare.\n\nFor example, imagine a newspaper article about a football game. Instead of saying the exact accurate number of 74,836 fans watched the match, the article might round the number and say 75,000 fans watched. This makes the story easier to read, because the exact accuracy isn't always important!",

                topics: [
                topic("3.1", "Multiplying and dividing by powers of 10", [
                  [
                    "Key idea",
                    "What are the key ideas in Multiplying and dividing by powers of 10?",
                    "Did you know you can write numbers like 10, 100, and 1,000 as \"powers of 10\"?.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Multiplying and dividing by powers of 10",
                    "CALLOUT keyword|🔑 Key word definition\nPowers of 10 — Numbers like 10, 100, 1000, and 10000 that are created by multiplying 10 by itself.\nIndex (plural — indices): The little number at the top right that tells you the power of 10. It is exactly the same as the number of zeros that follow the digit 1.",
                  ],
                  [
                    "Check",
                    "Check your understanding: Multiplying and dividing by powers of 10",
                    "🧠 RULES:\nWhen you multiply a number by a power of 10, you move the digits in the number to the left in the place value table.\nWhen you divide a number by a power of 10, you move the digits in the number to the right in the place value table.\nEmpty spaces left behind are filled with zeros.\n\nCALLOUT fun|🚀 Fun examples\nPowers: 100 = 10 × 10 = 10^2 (called '10 squared'). 1000 = 10 × 10 × 10 = 10^3 (called '10 cubed').\nMultiplying: To work out 23 × 10^4, you know 10^4 is the same as 10,000. Move the digits 2 and 3 four places to the left to get 230,000.\nDividing: To work out 45,000 ÷ 10^5, move the digits 4 and 5 five places to the right. Add a zero before the decimal point to get 0.45.",
                  ],
                ]),
                topic("3.2", "Rounding", [
                  [
                    "Key idea",
                    "What are the key ideas in Rounding?",
                    "When you are asked to round a number, you will be told how accurate your answer needs to be.",
                  ],
                  [
                    "Recall",
                    "Examples and recall: Rounding",
                    "CALLOUT keyword|🔑 Key word definition\nDegree of accuracy — The instruction telling you how accurate to make your number, such as rounding to one or two decimal places (d.p.)[cite: 62, 63].",
                  ],
                  [
                    "Check",
                    "Check your understanding: Rounding",
                    "🧠 RULES FOR ROUNDING:\n1. Look at the digit in the position of the required degree of accuracy.\n2. Look at the digit to the right of it.\n3. High Five! If the value of the digit to its right is 5 or more, increase the original digit by 1.\n4. Stay Low! If the value of the digit to the right is less than 5, leave the original digit as it is.\n\nCALLOUT fun|🚀 Fun examples\nLet's round the long number 5.376398!\nTo 1 decimal place (1 d.p.): The first decimal digit is 3. The digit to the right is 7. Because 7 is more than 5, we round the 3 up to 4. The answer is 5.4.\nTo 3 decimal places (3 d.p.): The third decimal digit is 6. The digit to the right is 3. Since 3 is less than 5, the 6 stays exactly the same. The answer is 5.376.",
                  ],
                ]),
                ],
              },
              {
                id: "m9",
                title: "9 Sequences and functions",
                strand: "Algebra",
                intro: "Find rules for number patterns and use function machines.",
                topics: [
                  topic("9.1", "Interactive quest", [
                    [
                      "Key idea",
                      "Open the quest map",
                      "Work through the chapter quest levels for sequences and functions.",
                    ],
                  ]),
                ],
              },
              {
                id: "m10",
                title: "10 Percentages",
                strand: "Number",
                intro: "Find percentages of amounts and solve percentage problems.",
                topics: [
                  topic("10.1", "Interactive quest", [
                    [
                      "Key idea",
                      "Open the quest map",
                      "Work through the chapter quest levels for percentages.",
                    ],
                  ]),
                ],
              },
              {
                id: "m11",
                title: "11 Graphs",
                strand: "Statistics",
                intro: "Plot points, read graphs, and interpret real data.",
                topics: [
                  topic("11.1", "Interactive quest", [
                    [
                      "Key idea",
                      "Open the quest map",
                      "Work through the chapter quest levels for graphs.",
                    ],
                  ]),
                ],
              },
              {
                id: "m12",
                title: "12 Ratio and proportion",
                strand: "Number",
                intro: "Share amounts in a given ratio and solve proportion problems.",
                topics: [
                  topic("12.1", "Interactive quest", [
                    [
                      "Key idea",
                      "Open the quest map",
                      "Work through the chapter quest levels for ratio and proportion.",
                    ],
                  ]),
                ],
              },
              {
                id: "m13",
                title: "13 Probability",
                strand: "Statistics",
                intro: "Describe chance, run experiments, and compare outcomes.",
                topics: [
                  topic("13.1", "Interactive quest", [
                    [
                      "Key idea",
                      "Open the quest map",
                      "Work through the chapter quest levels for probability.",
                    ],
                  ]),
                ],
              },
],
  };
})();
