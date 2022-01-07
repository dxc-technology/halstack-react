const fs = require('fs');

fs.createReadStream('./package.json').pipe(fs.createWriteStream('../dist/package.json'));
