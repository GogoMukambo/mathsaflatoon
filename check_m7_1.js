const fs = require('fs');
const content = fs.readFileSync('restored_whiteboard_data_c6d5398.js', 'utf16le');
console.log("Has m7_1.1?", content.includes('"m7_1.1"'));
