const fs = require('fs');
const content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
const start = content.indexOf('"m7_4.1"');
console.log(content.substring(start, start + 1000));
