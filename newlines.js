var fs = require('fs');

var file = fs.readFileSync(process.argv[2], 'utf-8');

newLines = file.split('\n');

console.log(newLines.length - 1);