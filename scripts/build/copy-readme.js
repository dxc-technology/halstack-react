const fs = require('fs');

fs.createReadStream('./README.md').pipe(fs.createWriteStream('./lib/dist/README.md'));
