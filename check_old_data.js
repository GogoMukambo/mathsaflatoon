const fs = require('fs');
const content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
const matches = content.match(/"[a-z0-9_.]+":\s*\{/g);
if (matches) {
    console.log(matches.map(m => m.split('"')[1]));
} else {
    console.log('No matches');
}
