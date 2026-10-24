const fs = require('fs');
const y7 = fs.readFileSync('content-y7-maths.js', 'utf8');
const match = y7.match(/id:\s*"m12"[\s\S]*?intro:\s*"([^"]+)"/);
console.log(match ? match[1] : 'Not found');
