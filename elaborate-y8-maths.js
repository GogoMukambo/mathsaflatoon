addNotes("maths", "1.1", [
  "A rational number can be written as a fraction of two integers, such as 3/4, −7 or 0.25. An irrational number cannot. Its decimal never stops and never settles into a repeating block. π, √2 and √5 are the usual examples at this stage.\n\nIntegers, terminating decimals and recurring decimals are all rational. √9 looks like a root, but it equals 3, so it is rational. Always simplify first before you decide.",
  "√9 = 3, which is an integer, so it is rational. A square root is irrational only when the number inside is not a perfect square (and you cannot rewrite it as a rational).\n\n√16 = 4 and √25 = 5 are rational. √2, √3, √5, √7, √8 and √10 are irrational. √8 is 2√2: the 2 is rational, but √2 is not, so the product is still irrational.",
  "√16 = 4 because 16 is a perfect square. √8 is not a whole number. You can write √8 = √(4 × 2) = 2√2. Multiplying a non-zero rational by an irrational number still gives an irrational number.\n\nIn a calculation, leave exact irrationals as surds or π unless the question asks for a rounded decimal. Rounding turns an exact value into an approximation.",
]);

addNotes("maths", "1.2", [
  "Standard form (scientific notation) writes a number as A × 10ⁿ, where A is at least 1 and less than 10, and n is an integer. Large numbers have a positive index; numbers between 0 and 1 have a negative index.\n\nThis is how scientists write masses of planets, sizes of atoms and answers from a calculator that shows 4.5E4. The E just means ‘times ten to the power’.",
  "45 000 = 4.5 × 10 000 = 4.5 × 10⁴. The point moves 4 places left until only one non-zero digit sits in front of it. That count of places is the index.\n\nCheck: 4.5 × 10 000 really is 45 000. If A is 45 or 0.45, the number is not yet in standard form.",
  "0.0036 = 3.6 × 0.001 = 3.6 × 10⁻³. The point moves 3 places right to sit after the 3. A negative index means you are making a number smaller than 1.\n\nTo multiply numbers in standard form, multiply the A parts and add the indices, then tidy A back into the range 1 ≤ A < 10 if needed.",
]);

addNotes("maths", "1.3", [
  "Index laws let you work with powers without writing out huge multiplications. Same base: multiply by adding indices, divide by subtracting them, and raise a power to a power by multiplying the indices. Anything (except 0) to the power 0 is 1. A negative index means a reciprocal.\n\nThese laws are the reason standard form calculations stay short, and they carry straight into algebra.",
  "2³ × 2⁵ = 2⁸ because you add the indices: 3 + 5 = 8. 2⁸ = 256. You can only add indices when the bases are the same. 2³ × 5² cannot be written as a single power of 2.\n\nA common slip is to multiply the bases as well. Keep the base and only change the index.",
  "5⁻² = 1/5² = 1/25. A negative index does not make the answer negative; it turns the power upside down. 2⁻³ = 1/8, not −8.\n\nIf you see 1/aⁿ you may write a⁻ⁿ. If you see a⁻ⁿ, write 1/aⁿ before you substitute a value.",
]);

addNotes("maths", "2.1", [
  "To substitute, replace every letter with the number it stands for, then calculate. Use brackets around negatives so 2 × (−3) does not become 2 − 3 by accident. Follow BIDMAS: brackets, indices, multiply and divide, then add and subtract.\n\nA formula is just an expression that has a meaning, such as distance or area. The same substitution rules apply.",
  "If a = 3 and b = −2, then 2a − b = 2×3 − (−2) = 6 + 2 = 8. Subtracting a negative is the same as adding. Write the substitution line before you simplify so you can check it.\n\nIf the expression is 2(a − b), that is different: 2(3 − (−2)) = 2×5 = 10.",
  "If x = 4, 3x² means 3 × (x²), not (3x)². Square first: 4² = 16, then 3 × 16 = 48. (3x)² would be 9 × 16 = 144.\n\nThe small 2 sits only on the x unless there are brackets. That one detail causes many wrong answers.",
]);

addNotes("maths", "2.2", [
  "An expression is a collection of terms with no equals sign. To build one from words, pick a letter for the unknown, then turn ‘more than’ into +, ‘less than’ or ‘difference’ into −, ‘product’ or ‘of’ into ×, and ‘squared’ into a power.\n\n‘Then’ often means you need brackets: ‘add 7, then multiply by 3’ is 3(n + 7), not 3n + 7.",
  "n plus 7, then multiplied by 3, is 3(n + 7). If you write 3n + 7 you have only added 7 after tripling n, which is a different calculation.\n\nExpand later if you need to: 3(n + 7) = 3n + 21. Keep the factored form when the question asks for an expression, not a simplified expansion.",
  "A rectangle 2 cm longer than it is wide has sides w and w + 2. Perimeter is two of each side: 2(w + w + 2) = 2(2w + 2) = 4w + 4.\n\nArea would be w(w + 2) = w² + 2w. Read the question: perimeter and area use the same sides but different formulae.",
]);

addNotes("maths", "2.3", [
  "Index laws work with letters exactly as they do with numbers, provided the bases match. x² × x⁵ = x⁷. Different letters stay separate: x²y³ is already as simple as it gets. Coefficients multiply as ordinary numbers: 3x² × 4x⁵ = 12x⁷.\n\nA power outside a bracket multiplies every index inside: (2a³)² = 2² × a⁶ = 4a⁶.",
  "3x² × 4x⁵: multiply 3 × 4 to get 12, add the indices 2 + 5 to get x⁷, so 12x⁷. You do not add the 3 and 4, and you do not multiply the indices.\n\nIf a term has no visible index, the index is 1: 5x × x³ = 5x⁴.",
  "(2a³)² means 2a³ × 2a³. That is 4a⁶. The 2 is squared as well as the a³. A frequent error is to leave the 2 unchanged and write 2a⁶.\n\n(2a³)² is not 2a⁹. The 2 on the outside multiplies the index 3; it does not add to it.",
]);

addNotes("maths", "2.4", [
  "To expand two brackets, multiply every term in the first by every term in the second. A 2-by-2 grid (or FOIL) gives four products. Then collect like terms. (x + a)(x + b) = x² + (a + b)x + ab.\n\nWatch signs. A negative in either bracket changes the sign of two of the four products.",
  "(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15. The middle terms add because both signs are positive. Check by substituting a number, such as x = 1: both sides should equal 24.\n\nThe constant term is the product of the two numbers. The x coefficient is their sum.",
  "(2x − 1)(x + 4) = 2x·x + 2x·4 + (−1)·x + (−1)·4 = 2x² + 8x − x − 4 = 2x² + 7x − 4.\n\nDo not stop after the four products. Combining 8x and −x is part of the expansion. If a question says ‘expand and simplify’, that collection is required.",
]);

addNotes("maths", "2.5", [
  "You may cancel only common factors of the whole numerator and the whole denominator. Factor first if needed. You cannot cancel a letter that is added to something else.\n\n6x / 3 = 2x because 3 is a factor of the whole top. (x + 2)/x does not cancel to 2, or to 1 + 2/x without care: the x is not a factor of the sum x + 2.",
  "6x / 3 = (6/3) × x = 2x. You can think of 6x as 3 × 2x, so the 3 cancels. Keep the x; only the 3 has gone.\n\n6x / 3x would cancel both 3 and x (x ≠ 0) and leave 2.",
  "In (x + 2)/x the x on top is added to 2, so it is not a factor of the whole numerator. Cancelling it is like claiming (5 + 2)/5 = 2, which is false.\n\nYou may split the fraction: (x + 2)/x = x/x + 2/x = 1 + 2/x. That is simplification by dividing each term, not by cancelling through a sum.",
]);

addNotes("maths", "2.6", [
  "A formula links quantities with an equals sign, such as A = πr² or v = u + at. You can substitute numbers to find one value, or rearrange to make a different letter the subject.\n\nRearranging uses the same moves as solving an equation: do the same to both sides, inverse operations in reverse order.",
  "v = u + at. To make u the subject, subtract at from both sides: u = v − at. The term you want stands alone.\n\nIf you needed a instead: v − u = at, then a = (v − u)/t. Division is the inverse of the remaining multiplication.",
  "A = πr². Divide both sides by π: A/π = r². Then square root, and take the positive root because a length is positive: r = √(A/π).\n\nDo not write r = √A / π unless you also put π under the root. The π is inside the square root because it was with r² before you rooted.",
]);

addNotes("maths", "3.1", [
  "Multiplying by 10, 100 or 1000 moves digits to the left (the number gets larger). Dividing moves them to the right. Zeros hold empty place-value columns so 3.47 × 100 is 347, not 3.47 with the point forgotten.\n\nEach factor of 10 is one place. ×1000 is three places; ÷100 is two places the other way.",
  "3.47 × 100: the point jumps two places right, giving 347. If you run out of digits, add zeros: 3.47 × 1000 = 3470.\n\nThink place value: 3 ones become 3 hundreds, 4 tenths become 4 tens, 7 hundredths become 7 ones.",
  "0.6 ÷ 1000: the point jumps three places left. You need two zeros in front of the 6, so 0.0006.\n\nA useful check: dividing by 1000 should make the number one-thousandth as large. 0.6 ÷ 1000 is far smaller than 0.6, so 0.06 would be too big.",
]);

addNotes("maths", "3.2", [
  "To multiply decimals, ignore the points, multiply the integers, then put the point back so the total number of decimal places matches the factors. 0.6 × 0.4 has two decimal places altogether, and 6 × 4 = 24, so the product is 0.24.\n\nTo divide, you can multiply both numbers by the same power of 10 until the divisor is an integer, then divide as usual.",
  "0.6 × 0.4 = 0.24. 0.6 is 6 tenths and 0.4 is 4 tenths, and tenths × tenths are hundredths: 24 hundredths = 0.24.\n\nA size check: both factors are less than 1, so the product must be smaller than each of them.",
  "1.2 ÷ 0.3: multiply both by 10 to get 12 ÷ 3 = 4. Equivalently, how many 0.3s fit into 1.2? Four of them.\n\nIf you forget to move both points, you might do 1.2 ÷ 3 = 0.4, which is ten times too small. Always scale numerator and denominator together.",
]);

addNotes("maths", "3.3", [
  "A compound percentage is a change applied to an amount that has already changed. Use a multiplier: increase by 8% is ×1.08; decrease by 15% is ×0.85. Two changes in a row means two multipliers, in order.\n\nAdding the percentages first (10% + 10% = 20%) only works for a single change on the original amount, not for a change on a change.",
  "£200 increased by 10% becomes £220. Another 10% of £220 is £22, so the new amount is £242. In one line: 200 × 1.1 × 1.1 = 200 × 1.21 = £242.\n\nA single 20% increase would be £240. Compound growth is larger when both changes are increases.",
  "A 20% fall then a 20% rise is ×0.8 × 1.2 = ×0.96, so you finish 4% down, not back at the start. The second percentage is of a smaller amount, so it cannot fully undo the first.\n\nThe same idea works in reverse: ×1.2 × 0.8 is also ×0.96. Order of these two particular multipliers does not matter, but in general you should keep the order given in the question.",
]);

addNotes("maths", "3.4", [
  "A rounded measurement is not exact. The true value lies in a range called the error interval. If a length is 3.6 cm to 1 decimal place, it is at least 3.55 cm and less than 3.65 cm. The lower bound is halfway down to the next possible rounding; the upper bound is halfway up.\n\nNearest centimetre, nearest ten, 2 significant figures — each has its own halfway points.",
  "12 cm to the nearest centimetre means 11.5 cm ≤ length < 12.5 cm. Anything from 11.5 up to (but not including) 12.5 would round to 12.\n\nSome courses write the upper bound as 12.5 with a less-than sign, because 12.5 exactly would usually round to 13. Follow the notation your paper uses, but understand the halfway idea.",
  "When you divide two rounded measurements, the maximum possible answer uses the largest numerator and the smallest denominator. The minimum uses the smallest numerator and the largest denominator. Errors grow; a calculated speed or density is less precise than the raw readings.\n\nFor a product, maximum × maximum gives the maximum. Do not mix the rules for + − × and ÷.",
]);

addNotes("maths", "4.1", [
  "A linear equation has the unknown to the power 1. Solve it by doing the same to both sides until the unknown is alone. Expand brackets and collect like terms first if they are in the way.\n\nCheck by substituting your answer back. If both sides match, the solution is correct.",
  "3x − 7 = 11. Add 7: 3x = 18. Divide by 3: x = 6. Check: 3×6 − 7 = 11.\n\nThe inverse of −7 is +7, and the inverse of ×3 is ÷3. Undo the operations in reverse order: the −7 was applied after the ×3, so add 7 first.",
  "2(x + 4) = 18. Divide both sides by 2 first: x + 4 = 9, so x = 5. Or expand: 2x + 8 = 18, 2x = 10, x = 5. Same answer.\n\nDividing first is quicker when a single bracket sits on one side. Expanding is safer when there are terms outside the bracket as well.",
]);

addNotes("maths", "4.2", [
  "Simultaneous equations are two equations with two unknowns. The solution is the pair (x, y) that works in both. On a graph that pair is where the two lines cross.\n\nElimination: make one coefficient match, then add or subtract to remove that letter. Substitution: rearrange one equation and put it into the other.",
  "Elimination and substitution both work. Elimination is neat when adding or subtracting cancels a letter at once. Substitution is neat when one equation already says x = … or y = ….\n\nAlways find the second unknown, and check both values in the equation you have not just used.",
  "x + y = 10 and x − y = 2. Add: 2x = 12, so x = 6. Then 6 + y = 10, so y = 4. Check the second equation: 6 − 4 = 2.\n\nAdding works here because the y terms are +y and −y. If both were +y you would subtract the equations instead.",
]);

addNotes("maths", "4.3", [
  "An inequality is a range, not a single value. x < 4 means every number smaller than 4. You solve it with the same steps as an equation, with one extra rule: if you multiply or divide by a negative, reverse the inequality sign.\n\nOn a number line, an open circle means the end point is not included (< or >). A filled circle means it is included (≤ or ≥).",
  "2x + 3 < 11. Subtract 3: 2x < 8. Divide by 2: x < 4. You divided by a positive number, so the sign stays the same.\n\nx = 4 is not a solution of a strict inequality. x = 3.9 is.",
  "−x > 4. Divide by −1 (or multiply by −1) and reverse the sign: x < −4. Think of numbers: if the opposite of x is greater than 4, x itself is less than −4, for example x = −5 because −(−5) = 5 > 4.\n\nForgetting to flip the sign is the standard error on this topic.",
]);

addNotes("maths", "5.1", [
  "Keep a short list of facts you can use without a diagram reminder: angles on a straight line add to 180°; angles around a point add to 360°; angles in a triangle add to 180°; vertically opposite angles are equal. On parallel lines, corresponding angles are equal, alternate angles are equal, and co-interior (allied) angles add to 180°.\n\nWrite the fact you used beside each step. That is what the mark scheme is looking for.",
  "Alternate angles are the pair on opposite sides of a transversal, between two parallel lines — the ‘Z’ shape. They are equal. Corresponding angles make an ‘F’ shape and are also equal.\n\nIf the lines are not marked parallel, you may not use those facts. Parallel marks on the diagram are your licence.",
  "A triangle with angles 50° and 60° has a third angle of 180° − 110° = 70°. That is true for any triangle, not only right-angled ones.\n\nIf the triangle is isosceles, two angles (or two sides) are equal, which often gives you the extra fact you need.",
]);

addNotes("maths", "5.2", [
  "Any n-sided polygon can be split into n − 2 triangles from one vertex. Each triangle contributes 180°, so the interior angle sum is (n − 2) × 180°.\n\nA regular polygon has all sides equal and all interior angles equal, so each interior angle is the sum divided by n.",
  "A hexagon has 6 sides, so the sum is (6 − 2) × 180° = 720°. That is for any hexagon, regular or not.\n\nA regular hexagon then has each interior angle 720° ÷ 6 = 120°.",
  "A pentagon has sum (5 − 2) × 180° = 540°. Regular: 540° ÷ 5 = 108° each.\n\nYou can also find an interior angle of a regular polygon from the exterior angle: interior = 180° − exterior, and exterior = 360°/n.",
]);

addNotes("maths", "5.3", [
  "If you walk around a polygon, the total turning is one full turn, 360°. That is why the exterior angles of any convex polygon add to 360°, whether it is regular or not.\n\nFor a regular n-gon each exterior angle is 360°/n. At each vertex the interior and exterior angles sit on a straight line, so they add to 180°.",
  "A regular octagon has 8 equal exterior angles: 360° ÷ 8 = 45°. Then each interior angle is 180° − 45° = 135°.\n\nThis is often faster than (8 − 2) × 180° ÷ 8.",
  "Interior and exterior at the same vertex add to 180° because they form a straight line (you extend one side to make the exterior angle).\n\nIf an interior angle is 108°, the exterior is 72°. That is how you can work backwards to n: 360° ÷ 72° = 5, a regular pentagon.",
]);

addNotes("maths", "5.4", [
  "Standard constructions use only a compass and an unmarked ruler: perpendicular bisector of a segment; bisector of an angle; a perpendicular from a point to a line; and triangles given SSS, SAS or ASA.\n\nLeave the construction arcs visible. They are the evidence that you used a correct method, not a guessed line.",
  "Every point on the perpendicular bisector of AB is the same distance from A as from B. That is why the two equal-radius arcs from A and B meet on that line, and why the line is used in loci questions.\n\nThe angle bisector is the set of points equidistant from the two arms of the angle.",
  "You keep the same compass width for both arcs of a perpendicular bisector so that the crossing points are equally far from both endpoints. Different widths would not guarantee a true midpoint or a right angle.\n\nA good habit: open the compass to more than half the segment, or the arcs will not meet.",
]);

addNotes("maths", "5.5", [
  "Pythagoras’ theorem: in a right-angled triangle, the squares of the two shorter sides add to the square of the hypotenuse. a² + b² = c², where c is opposite the right angle and is the longest side.\n\nThe theorem only applies when there is a right angle. If you are given three sides, you can test whether a triangle is right-angled by checking whether the squares fit.",
  "Legs 3 and 4: 3² + 4² = 9 + 16 = 25 = 5², so the hypotenuse is 5. This 3-4-5 triangle (and its multiples 6-8-10, 9-12-15, 5-12-13) is worth memorising.\n\nUnits stay the same as the sides: if 3 cm and 4 cm, the hypotenuse is 5 cm.",
  "If the hypotenuse is 13 and one leg is 5: other leg = √(13² − 5²) = √(169 − 25) = √144 = 12. You subtract when you already have the longest side.\n\nA common error is to add all three squares, or to add when you should subtract. Sketch the triangle and mark the hypotenuse first.",
]);

addNotes("maths", "6.1", [
  "A population is everyone or everything you want to know about. A census asks the whole population; a sample asks a part and uses it as an estimate. Samples are quicker and cheaper, but they must be chosen so they still represent the population.\n\nA random sample gives every member the same chance of being picked. That reduces one kind of bias, though a small random sample can still be unlucky.",
  "In a simple random sample, names or numbers are drawn so that each person is equally likely. You need a list of the population first (a sampling frame).\n\nPicking the first twenty people you meet is not random. Neither is asking only people who reply to a social-media post.",
  "Stratified sampling keeps the same proportions as groups in the population. If 30% of a school is Year 9, about 30% of the sample should be Year 9.\n\nThat matters when groups might answer differently. A random sample that happens to miss almost all of one year group can mislead you.",
]);

addNotes("maths", "6.2", [
  "Bias is a systematic slant: the method tends to push results away from the true population value. It can come from who is asked, how they are asked, when they are asked, or who chooses to reply.\n\nRandom error averages out with a larger sample. Bias does not: a bigger biased sample is still biased.",
  "Asking only people at a gym about weekly exercise will overestimate activity. Surveying your friends about a school rule will over-represent one social group.\n\nA fairer approach is a random or stratified sample from the whole population the question is about.",
  "A leading question steers the answer: ‘Do you agree that the excellent new canteen should stay open longer?’ already praises the canteen. Neutral wording asks about opening hours without the adjective.\n\nOptions should cover the range of views, and ‘don’t know’ should be allowed if people may not have an opinion.",
]);

addNotes("maths", "7.1", [
  "A circle’s circumference is the distance around it: C = 2πr = πd. Area is the space inside: A = πr². Radius is half the diameter. Use the same units throughout, and state whether you want an exact answer in terms of π or a rounded decimal.\n\nπr² is not (πr)². Only the r is squared.",
  "Radius 7 cm: A = π × 7² = 49π cm². Leave it like that if the question says ‘in terms of π’. If it asks for 1 decimal place, use π = 3.142 or the π button and then round at the end.\n\n7² is 49, not 14. Square the radius before you multiply by π.",
  "Diameter 10 cm means radius 5 cm, but circumference uses diameter directly: C = πd = 10π cm. You do not need to halve first unless you are finding area.\n\nArea would be π × 5² = 25π cm², which is not 10π. Circumference and area have different formulae and different units (cm versus cm²).",
]);

addNotes("maths", "7.2", [
  "A compound shape is made from simpler pieces. Split it into rectangles, triangles and parts of circles. Add the pieces you want; subtract a hole or a cut-out.\n\nLabel every length you use. A missing side is often a difference of two given sides.",
  "Area of a triangle is ½ × base × perpendicular height. The height must be at right angles to the base you chose, not a slanted edge.\n\nA parallelogram is base × perpendicular height. A trapezium is ½(a + b)h, the average of the parallel sides times the distance between them.",
  "A rectangle 8 by 6 has area 48. A 2 by 2 square hole has area 4. What remains is 48 − 4 = 44 square units.\n\nIf the square sits on the edge you still subtract it once. If two shapes overlap when you add, subtract the overlap so it is not counted twice.",
]);

addNotes("maths", "7.3", [
  "Metric length units scale by 10, 100 or 1000: 10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. Area units are those factors squared: 1 m² = 100 × 100 = 10 000 cm². Volume units are cubed: 1 m³ = 1 000 000 cm³.\n\nThis is why converting area is not the same as converting length. 2 m² is not 200 cm².",
  "1 m = 100 cm, so 1 m² = 100 × 100 = 10 000 cm². A square metre is a square with sides 1 m, which is 100 cm by 100 cm.\n\n1 cm² = 100 mm². 1 km² = 1 000 000 m².",
  "2.5 km = 2.5 × 1000 = 2500 m. Moving to a smaller unit gives a larger number of them.\n\n2.5 km in centimetres would be 2500 × 100 = 250 000 cm. Convert in steps if you are unsure.",
]);

addNotes("maths", "8.1", [
  "A fraction in lowest terms becomes a terminating decimal only if the denominator’s prime factors are 2 and/or 5 (because we use a base-10 place-value system). Any other prime factor, such as 3 or 7, produces a recurring decimal: 1/3 = 0.333…, 1/6 = 0.1666…, 1/7 has a six-digit repeat.\n\nRecurring notation uses a dot over the repeating digit, or dots over the first and last of a repeating block.",
  "3/8 = 0.375 because 8 = 2³, so it terminates. Long division: 3.000 ÷ 8 = 0.375. You can also write 3/8 = 375/1000.\n\n1/8 = 0.125, 2/8 = 0.25, 3/8 = 0.375, 4/8 = 0.5. These are worth knowing.",
  "0.222… = 2/9. A single repeating digit d is d/9. Two repeating digits ab are ab/99, so 0.27̇ (0.2727…) = 27/99 = 3/11.\n\nA method: let x = 0.222…, then 10x = 2.222…, subtract: 9x = 2, so x = 2/9.",
]);

addNotes("maths", "8.2", [
  "A fraction bar is a hidden pair of brackets: work out the whole numerator and the whole denominator, then divide. Indices come before multiply and divide. Multiply and divide are equal priority and run left to right; then add and subtract.\n\nWriting a mixed calculation on one line without brackets is how order-of-operations mistakes start. Use a fraction layout or brackets.",
  "1/2 + 1/3 × 6: multiply first, 1/3 × 6 = 2, then 1/2 + 2 = 2½. If you add 1/2 + 1/3 first you get 5/6, then ×6 = 5, which is wrong.\n\nBIDMAS does not mean multiply always before divide; it means both before add.",
  "(1 + 3)/8 = 4/8 = 1/2. 1 + 3/8 = 1 + 0.375 = 1.375. The brackets (or the fraction bar) change which 3 is divided by 8.\n\nIn words: ‘one plus three, all over eight’ is not the same as ‘one, plus three over eight’.",
]);

addNotes("maths", "8.3", [
  "To multiply fractions, multiply the numerators and multiply the denominators, then cancel common factors. Mixed numbers must become improper fractions first. Cancelling before you multiply keeps the numbers small.\n\nOf means multiply: 2/3 of 18 is 2/3 × 18.",
  "2/3 × 5/7 = 10/21. Nothing cancels. Leave 10/21 as it is; 10 and 21 share no common factor.\n\nA size check: both fractions are less than 1, so the product is less than either of them.",
  "1 1/2 = 3/2. Then 3/2 × 2/5 = 6/10 = 3/5, or cancel the 2s first: 3/1 × 1/5 = 3/5.\n\nDo not multiply 1 × 2 and 1/2 × 2/5 separately and add unless you expand (1 + 1/2) × 2/5 carefully. Converting to improper first is safer.",
]);

addNotes("maths", "8.4", [
  "Dividing by a fraction is multiplying by its reciprocal. Flip the second fraction, then multiply. a/b ÷ c/d = a/b × d/c. Whole numbers are fractions with denominator 1, so 6 ÷ 2/3 = 6/1 × 3/2.\n\n‘How many 2/3s fit into 6?’ is the meaning: nine of them.",
  "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2. Half of 3/4 would be 3/8 — that is multiplying by 1/2, the opposite of dividing by 1/2.\n\nDividing by 1/2 makes a number larger. That is a useful sense-check.",
  "6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9. Think of three-thirds in each whole, but you are grouping in two-thirds, so each whole gives 3/2 = 1.5 groups, and six wholes give 9.\n\nKeep, change, flip is a memory aid: keep the first fraction, change ÷ to ×, flip the second.",
]);

addNotes("maths", "8.5", [
  "Make fraction work easier by cancelling before you multiply, using equivalent fractions to get a common denominator, splitting mixed numbers when it helps, and turning friendly decimals into fractions (0.25 = 1/4, 0.5 = 1/2, 0.2 = 1/5).\n\nThe aim is exact answers with small integers, not a long calculator decimal you then have to tidy.",
  "4/9 × 3/8: cancel 4 with 8 to get 1/9 × 3/2, then cancel 3 with 9 to get 1/3 × 1/2 = 1/6. Cross-cancelling is just cancelling a factor that appears on any numerator with one on any denominator.\n\nIf you multiply first, 12/72 = 1/6 after simplifying. Same answer, more work.",
  "0.25 × a number is a quarter of it. Writing 1/4 is exact and often quicker than 0.25, especially when the other factor is a fraction.\n\n0.2 = 1/5, 0.75 = 3/4, 0.125 = 1/8. Those four conversions cover a lot of mental arithmetic.",
]);

addNotes("maths", "9.1", [
  "A sequence is a list in order. A term-to-term rule tells you how to get the next term from the one before: add 4, multiply by 2, and so on. An arithmetic sequence has a constant difference. A geometric sequence has a constant multiplier.\n\nThe first term and the rule together generate the whole list. Changing either one changes the sequence.",
  "First term 5, add 4 each time: 5, 9, 13, 17, 21, … The common difference is +4. The tenth term would be 5 + 9×4 = 41, which is the same idea as the nth-term formula a + (n − 1)d.\n\nWrite the difference between terms to check it really is constant.",
  "A geometric sequence multiplies by the same number each time: 3, 6, 12, 24, … (×2). The multiplier can be a fraction: 80, 40, 20, 10, … (×1/2).\n\nDo not call every growing sequence geometric. 1, 4, 9, 16 is square numbers, not a constant multiplier.",
]);

addNotes("maths", "9.2", [
  "The nth term is a formula that gives the term in position n. For an arithmetic sequence with first term a and common difference d, the nth term is a + (n − 1)d, which simplifies to dn + (a − d).\n\nTo find a formula from a list: find d, then see what you must add or subtract to make the first term match when n = 1.",
  "If the nth term is 3n + 1, the 10th term is 3×10 + 1 = 31. The 1st term is 4, the 2nd is 7, and so on — an arithmetic sequence with difference 3.\n\nTo test whether 40 is in the sequence, solve 3n + 1 = 40: n = 13, an integer, so yes. If n is not a positive integer, that number is not a term.",
  "5, 8, 11, 14 differs by 3, so the formula looks like 3n + k. When n = 1 the term is 5, so 3 + k = 5 and k = 2. nth term = 3n + 2.\n\nCheck n = 4: 3×4 + 2 = 14, which matches the fourth term.",
]);

addNotes("maths", "9.3", [
  "A function maps each allowed input to exactly one output. You can show it as a machine (input → rule → output), a table, an equation y = … or f(x) = …, or a graph of those pairs.\n\nf(4) means ‘the output when the input is 4’. It is not f times 4.",
  "A machine that multiplies by 3 then subtracts 2 has output 3x − 2. Order matters: subtract 2 then multiply by 3 is 3(x − 2) = 3x − 6.\n\nTo reverse a function, undo the steps in reverse order. That is the inverse function, used later for solving.",
  "f(x) = 2x + 5, so f(4) = 2×4 + 5 = 13. f(0) = 5, which is also the y-intercept of the graph y = 2x + 5.\n\nIf f(x) = 13, then 2x + 5 = 13 and x = 4. Finding the input from an output is solving an equation.",
]);

addNotes("maths", "10.1", [
  "y = mx + c is a function of x: each x gives one y. The graph is the set of points (x, y) that fit the equation. A vertical line x = 4 is not y as a function of x, because one x would have to give every y.\n\nStraight-line graphs are the graphs of linear functions. Quadratics such as y = x² curve.",
  "On y = 2x − 1, when x = 3, y = 6 − 1 = 5. The point (3, 5) lies on the line. When x = 0, y = −1, the y-intercept.\n\nYou only need two correct points to draw a straight line, but a third point catches arithmetic slips.",
  "x = 4 is a vertical line through 4 on the x-axis. y can be anything, so it does not define y as a function of x. Horizontal lines y = k are functions: every x gives the same y.\n\nFunction machines and y = … language both need ‘one output per input’.",
]);

addNotes("maths", "10.2", [
  "To plot a straight line, choose three x values (including a negative and zero if the scale allows), calculate y, plot the points, and join them with a ruler. If the third point is off the line, recalculate.\n\nUse a sensible scale. Label the axes and the equation of the line.",
  "Two distinct points determine a unique straight line. A third point is a check, not a decoration. If you only plot two points and one is wrong, the whole line is wrong.\n\nIntercepts are useful points: x = 0 gives the y-intercept; y = 0 gives the x-intercept.",
  "y = x² is a parabola, a U-shape, symmetric in the y-axis. It is not straight. Plot x = −2, −1, 0, 1, 2 to see 4, 1, 0, 1, 4.\n\nDo not join a quadratic with a ruler as if it were linear. Sketch a smooth curve through the points.",
]);

addNotes("maths", "10.3", [
  "In y = mx + c, m is the gradient: rise over run, how much y increases when x increases by 1. c is the y-intercept, where the line crosses the y-axis (the value of y when x = 0).\n\nA positive gradient slopes up to the right. A negative gradient slopes down. A zero gradient is horizontal.",
  "Through (0, 1) and (4, 9): gradient = (9 − 1)/(4 − 0) = 8/4 = 2. The line rises 2 for every 1 across. Because it passes through (0, 1), the equation is y = 2x + 1.\n\nGradient = (y₂ − y₁)/(x₂ − x₁). Keep the same order on top and bottom.",
  "Gradient −3 and y-intercept 5 means y = −3x + 5. When x increases by 1, y falls by 3. When x = 0, y = 5.\n\nYou can read m and c straight from the equation only when it is in the form y = mx + c. 2y = 6x + 4 must be divided by 2 first: y = 3x + 2.",
]);

addNotes("maths", "10.4", [
  "On a real graph, read the axis labels and units first. Gradient is a rate of change: metres per second, pounds per hour, and so on. A horizontal section means that quantity is not changing. Where two graphs meet, both rules give the same value.\n\nA story in words should match the shape: start, stop, faster, slower, back again.",
  "On a distance–time graph the gradient is speed. Steeper means faster. Flat means stationary. A straight diagonal means constant speed. Coming down towards the time axis means returning towards the start if distance is from home.\n\nSpeed–time graphs are different: the gradient is acceleration, and the area under the graph is distance.",
  "If two conversion lines or two cost lines cross, the x-value is where both give the same y: a break-even point, a matching currency amount, or the solution of two simultaneous equations.\n\nAlways say what the intersection means in the context, not only ‘they cross’.",
]);

addNotes("maths", "11.1", [
  "A ratio compares parts. To share an amount in the ratio a : b, add the parts to get a + b, then each person gets (their part / total parts) × the amount. Simplify a ratio by dividing both sides by the same number, like a fraction.\n\n2 : 3 is the same as 4 : 6. Keep whole numbers where you can.",
  "£60 in the ratio 2 : 3. Parts = 5, so one part is £12. 2 parts = £24, 3 parts = £36. Check: 24 + 36 = 60.\n\nIf the question says ‘2 : 3’ and ‘the larger share’, that is the 3 parts.",
  "12 : 18 divide by 6 to get 2 : 3. You have cancelled a common factor, just as 12/18 = 2/3.\n\nTo write a ratio as a fraction of the whole, 2 : 3 means 2/5 and 3/5. To write one part compared with the other, 2/3 of the second equals the first.",
]);

addNotes("maths", "11.2", [
  "Direct proportion: y = kx. If x doubles, y doubles. The graph is a straight line through the origin. Inverse proportion: y = k/x. If x doubles, y halves. The graph is a curve that gets closer to the axes but does not meet them.\n\nFind k from one pair (x, y), then use it for any other pair.",
  "y is directly proportional to x, and y = 10 when x = 4, so k = 10/4 = 2.5. When x = 6, y = 2.5 × 6 = 15.\n\nA unitary method works too: 1 of x corresponds to 2.5 of y, so 6 of x corresponds to 15 of y.",
  "8 workers take 6 days for a job. The amount of work is 8 × 6 = 48 worker-days. 12 workers take 48 ÷ 12 = 4 days. That is inverse proportion: more workers, fewer days, product constant.\n\nThis assumes they all work at the same rate and do not get in each other’s way — the usual school model.",
]);

addNotes("maths", "12.1", [
  "Mutually exclusive events cannot happen at the same time. Then P(A or B) = P(A) + P(B). If they can overlap, adding counts the overlap twice; you must subtract P(A and B).\n\nOn a fair die, even and 5 are mutually exclusive. Even and prime are not, because 2 is both.",
  "P(even) on a fair die is 3/6. P(5) is 1/6. Even or 5: 4/6 = 2/3, because 5 is not even.\n\nList the faces if you are unsure: 2, 4, 5, 6. Four faces out of six.",
  "Even faces: 2, 4, 6. Prime faces: 2, 3, 5. The overlap is 2. P(even or prime) = 3/6 + 3/6 − 1/6 = 5/6, not 1.\n\nA Venn diagram makes the overlap visible. Mutually exclusive sets do not overlap.",
]);

addNotes("maths", "12.2", [
  "Independent events do not affect each other. Then P(A and B) = P(A) × P(B). Coin tosses and separate dice rolls are the usual examples. Drawing without replacement is not independent, because the second probability changes.\n\n‘And’ multiplies for independent events. ‘Or’ adds for mutually exclusive events. Those are different rules for different words.",
  "Two fair coins: P(two heads) = 1/2 × 1/2 = 1/4. The four equally likely outcomes are HH, HT, TH, TT.\n\nP(at least one head) is 3/4, not 1/2. Listing the sample space stops that mistake.",
  "If you draw a card and do not put it back, the pack is smaller and the mix has changed, so the second draw depends on the first. With replacement, the draws are independent.\n\nTree diagrams handle both cases: the second-branch probabilities stay the same if you replace, and change if you do not.",
]);

addNotes("maths", "12.3", [
  "Combined events need a sample space: a table, a list, or a tree. Each complete path on a tree is one combined outcome. Multiply along a path for ‘and’. Add the probabilities of different paths for ‘or’.\n\nIf every outcome is equally likely, you can also count successes ÷ total outcomes.",
  "A 1–4 spinner and a coin give 4 × 2 = 8 outcomes if both are fair: 1H, 1T, 2H, 2T, 3H, 3T, 4H, 4T. P(even and heads) = 2/8 = 1/4 (2H and 4H).\n\nThe product rule for counting is the same idea as independent probabilities.",
  "Each branch of a tree is labelled with the probability of that step. After two steps, a path such as ‘red then blue’ has probability P(red) × P(blue after red).\n\nThe probabilities on branches that leave the same point must add to 1. That is a useful check before you multiply.",
]);

addNotes("maths", "12.4", [
  "Theoretical probability comes from equally likely outcomes or a known model. Experimental (relative frequency) is number of successes ÷ number of trials. In the long run, experimental values usually get closer to the theoretical one, but a short experiment can be a long way off.\n\nAn estimate from 50 trials is more stable than one from 10, but it is still an estimate.",
  "18 reds in 50 spins: relative frequency = 18/50 = 0.36. If the spinner is fair with 4 equal sectors and one is red, theory says 0.25. 0.36 is higher, which may be chance or a biased spinner.\n\nMore spins would help you decide.",
  "Ten trials can easily land on 0.2 or 0.7 even if the true probability is 0.5. Random variation is large when n is small. That is why you should not trust a conclusion from a tiny experiment.\n\nSaying ‘it will happen next because it is due’ is the gambler’s fallacy: independent trials have no memory.",
]);

addNotes("maths", "13.1", [
  "A bearing is the angle measured from north, clockwise, written with three figures: 045°, 180°, 270°. North is 000° (or 360°), east 090°, south 180°, west 270°.\n\nOn a scale drawing, measure with a protractor from a north line at the starting point. Use the scale to convert map centimetres to real kilometres.",
  "South-east is halfway from south to east? No: from north, clockwise, south-east is 135° (halfway between 090° east and 180° south). North-east is 045°, south-west 225°, north-west 315°.\n\nSketch a compass rose if the wording is ‘north-east of the harbour’.",
  "The reverse bearing, from B back to A, differs by 180°. If B is on 070° from A, A is on 250° from B. Add 180° if the first bearing is less than 180°; subtract 180° if it is more, so the answer stays between 000° and 360°.\n\nCheck that both bearings sit on a straight line through A and B.",
]);

addNotes("maths", "13.2", [
  "The midpoint of a segment is the average of the x-coordinates and the average of the y-coordinates: ((x₁ + x₂)/2, (y₁ + y₂)/2). You are finding the point halfway along in both directions.\n\nThe same idea extends to a point that divides a segment in a ratio, using a weighted average.",
  "Midpoint of (2, 5) and (8, 1): x = (2+8)/2 = 5, y = (5+1)/2 = 3, so (5, 3). Plot them if it helps: you should sit in the middle of the line.\n\nThe vector from A to B is (6, −4). Half of that added to A is (2, 5) + (3, −2) = (5, 3), the same midpoint.",
  "A is (0, 0) and the midpoint is (3, 4), so B is twice as far from A as the midpoint is: (6, 8). In general B = 2M − A.\n\nCheck: midpoint of (0, 0) and (6, 8) is (3, 4).",
]);

addNotes("maths", "13.3", [
  "The four transformations you must describe fully are translation (a vector), rotation (centre, angle and direction), reflection (mirror line) and enlargement (centre and scale factor).\n\nTranslation, rotation and reflection keep lengths and angles: the image is congruent. Enlargement keeps angles and the ratio of lengths: the image is similar.",
  "A translation by vector (3, −2) moves every point 3 right and 2 down. The image is the same way up; it does not flip or turn.\n\nColumn vectors are written (x move on top, y move underneath). Left and down are negative.",
  "Congruent images: translation, rotation, reflection. Enlargement with scale factor 1 is a special case that does not change size; any other scale factor changes lengths. Area is multiplied by the square of the scale factor.\n\nA rotation of 180° about a point can look like a half-turn; say the centre and 180°, not ‘it just looks flipped’.",
]);

addNotes("maths", "13.4", [
  "To enlarge from a centre, draw a ray from the centre through each vertex. Measure the distance from the centre to the vertex and multiply by the scale factor to place the image vertex on the same ray. Scale factor 2 doubles distances; 1/2 halves them (a reduction); a negative scale factor goes through the centre and out the other side.\n\nThe image is similar to the original. Corresponding angles stay equal.",
  "Scale factor 1/2 pulls the shape closer to the centre, with every length half as long. The shape does not flip. A scale factor of 1 leaves it unchanged.\n\nIf the centre is a vertex of the shape, that vertex stays fixed and the other vertices move along rays from it.",
  "Lengths scale by k. Areas scale by k². Volumes (later) scale by k³. Scale factor 3 means area ×9, not ×3.\n\nThat is why a pizza with twice the diameter has four times the area: the scale factor for length is 2.",
]);

addNotes("maths", "14.1", [
  "A prism has the same cross-section all the way along. Volume = area of that cross-section × length. A cuboid is the special case l × w × h. A cylinder is a circular prism: πr²h.\n\nVolume is in cubic units. If you use cm for every length, the volume is cm³.",
  "Triangular cross-section 6 cm² and length 10 cm: volume = 6 × 10 = 60 cm³. You do not need the triangle’s base and height if the area is already given.\n\nIf you are given base 4 cm, height 3 cm and length 10 cm, the triangle area is ½×4×3 = 6 cm² first, then ×10.",
  "Cylinder volume is πr²h because the cross-section is a circle of area πr² and the ‘length’ is the height. Leave answers in terms of π unless you are told to round.\n\nDiameter 10 cm means r = 5 cm. Using 10 by mistake squares to four times the true area.",
]);

addNotes("maths", "14.2", [
  "Surface area is the total area of the net: every face added once. A cube has 6 equal squares. A cuboid has three pairs of rectangles. A cylinder has two circles and a rectangle of width 2πr (the circumference) and height h, so 2πr² + 2πrh.\n\nA pyramid adds triangular faces to the base. Sketch the net so you do not miss a face or count one twice.",
  "A cube of side 4 cm has one face 16 cm² and six faces 96 cm². Volume would be 64 cm³ — different quantity, different unit.\n\nIf a question says ‘open box’, drop the missing face.",
  "A net shows every face flat. You can check that edges which will join have the same length. For a cylinder, the curved face unrolls to a rectangle whose one side is the circumference.\n\nPainting or wrapping questions are surface-area questions, even if they never use that name.",
]);

addNotes("maths", "14.3", [
  "A plane of symmetry cuts a 3D shape into two mirror-image halves. An axis of rotational symmetry is a line you can turn the shape around so it looks the same before a full turn.\n\nA cube is rich in both. A scalene triangular pyramid may have none.",
  "A cube has 9 planes of symmetry: three that cut parallel to a pair of faces through the centre, and six that slice diagonally through opposite edges.\n\nIt also has axes through opposite faces, opposite edges and opposite vertices, with different orders of rotation.",
  "A square-based pyramid with the apex above the centre of the base has four planes of symmetry, each through the apex and a line of symmetry of the square base (through midpoints of opposite sides, or through opposite vertices).\n\nIf the apex is not above the centre, some or all of those planes disappear.",
]);

addNotes("maths", "15.1", [
  "A frequency polygon shows grouped continuous data as points plotted at class midpoints, joined with straight lines. It is not a bar chart; the height is frequency (or frequency density in later work), and the x-value is the middle of the class.\n\nTwo polygons on the same axes make comparison easy: which distribution sits further right, which is more spread out.",
  "Class 10–20 with frequency 8 is plotted at (15, 8). If classes are 10–20, 20–30, use 15 and 25. Be consistent about whether 20 sits in the first class or the second; the midpoint rule stays the same once the classes are fixed.\n\nDo not plot at the end of the class unless a textbook specifically uses that (unusual at this stage).",
  "Overlap two polygons to compare, for example boys’ and girls’ times, or this year and last year. Look at the peak (modal class), the general shift left or right, and the spread.\n\nA frequency polygon is a drawing of the distribution, not a graph of an algebraic function.",
]);

addNotes("maths", "15.2", [
  "A scatter graph plots two variables for the same items. Positive correlation: as one increases, the other tends to increase. Negative: one up, the other down. No correlation: a cloud with no trend. A line of best fit is a straight line through the body of the points, used to estimate.\n\nCorrelation is not proof that one variable causes the other.",
  "An outlier sits far from the pattern. It might be a recording error, or a genuine unusual case. Decide whether to use it in a line of best fit; say what you did.\n\nA line of best fit does not have to pass through the origin unless the context forces y = 0 when x = 0.",
  "Ice-cream sales and sunglasses sales may rise together because both follow hot weather — a third factor. The scatter graph can look strongly correlated and still not mean that ice cream causes people to buy sunglasses.\n\nUse the language ‘associated with’ or ‘tends to’ unless a controlled experiment is described.",
]);

addNotes("maths", "15.3", [
  "A back-to-back stem-and-leaf diagram shares one stem down the middle, with leaves for set A on one side and set B on the other. It keeps the raw values, so you can still find median, mode and range exactly, and you can see both shapes at once.\n\nAlways include a key. 3 | 2 might mean 32 or 3.2; only the key tells you.",
  "The key is part of the diagram, not an optional extra. Without it, 4 | 7 could be 47 minutes or 4.7 seconds.\n\nLeaves should be in order, usually increasing as they leave the stem, and aligned so the shape is readable.",
  "To find a median, count how many values are on that side, then walk in from the smallest to the middle position. For 21 values the median is the 11th. For 20 values it is halfway between the 10th and 11th.\n\nDo each side separately. The two medians are a fair comparison of typical value.",
]);

addNotes("maths", "15.4", [
  "Grouped data hides the exact values, so the mean can only be estimated. Use the midpoint of each class as a stand-in: estimated mean = Σ(midpoint × frequency) / Σ frequency.\n\nThe modal class is the class with the highest frequency. The median lies in the class where the running total passes n/2.",
  "If there are 40 values, the median is between the 20th and 21st. Add frequencies until you pass 20; that class is the median class. You cannot name the exact median without the raw list.\n\nCumulative frequency graphs (later) estimate the median more finely.",
  "The mode of raw data is the single most common value. Grouped data only gives a modal class — an interval, not one number. Saying ‘the mode is 10–20’ is the accurate statement.\n\nA class can have high frequency because it is wider, not only because the data pile up. Compare classes of equal width when you can.",
]);

addNotes("maths", "15.5", [
  "Choose a chart that matches the data. Bar or pie: categories. Histogram or frequency polygon: grouped continuous measurements. Scatter: two variables for the same items. Line / time series: change over time.\n\nEvery chart needs a title, labelled axes or a key, and units. A pretty picture that cannot be read is not a good chart.",
  "Title, axis labels, units and a key (if there is more than one data set) are required. Scale should start at zero for bar charts unless you clearly mark a break — and even then, be ready to say that it can mislead.\n\nPie charts need a total that you can split into 360°.",
  "A vertical axis that starts at 90 instead of 0 can make two bars of 92 and 98 look dramatically different. The true difference is small. That is why exam questions ask you to comment on a misleading graph.\n\n3D effects, missing units and pictograms with poorly scaled pictures cause the same kind of distortion.",
]);
