const fs = require('fs');

fs.createReadStream('../README.md').pipe(fs.createWriteStream('./dist/README.md'));
