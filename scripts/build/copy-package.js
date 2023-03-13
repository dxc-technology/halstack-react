const fs = require("fs");
const { Transform } = require("stream");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    const content = JSON.parse(chunk);
    content.main = "./main.js";
    content.types = "./main.d.ts";
    callback(null, JSON.stringify(content, null, 2));
  },
});

fs.createReadStream("./package.json")
  .pipe(uppercase)
  .pipe(fs.createWriteStream("../../dist/package.json"));
