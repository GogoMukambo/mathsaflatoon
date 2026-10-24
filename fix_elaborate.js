const fs = require('fs');
let c = fs.readFileSync('elaborate-y8.js', 'utf8');
c = c.replace(/addNotes\("9",/g, 'addNotes("8",');
fs.writeFileSync('elaborate-y8.js', c);
