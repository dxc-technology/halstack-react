const fs = require("fs");

const setVersion = () => {
  const versionToDeploy = process.argv[2];
  const object = [
    {
      version: versionToDeploy,
    },
  ];
  console.log(object);
  const jsonData = JSON.stringify(object);
  fs.writeFile("catalog/version/version.json", jsonData, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
};

setVersion();
