const fs = require('fs');
const y7 = fs.readFileSync('content-y7-maths.js', 'utf8');
const matches = y7.match(/intro:\s*"([^"]+)"/g);
console.log("Y7 Intros:");
if (matches) {
    matches.forEach(m => console.log(m));
}
const y8 = fs.readFileSync('content-y8-maths.js', 'utf8');
const matches8 = y8.match(/intro:\s*"([^"]+)"/g);
console.log("\nY8 Intros:");
if (matches8) {
    matches8.forEach(m => console.log(m));
}
