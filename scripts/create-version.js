const fs = require("fs");

const setVersion = () => {
  const versionToDeploy = process.argv[2];
  const object = {
    version: versionToDeploy,
  };
  const jsonData = JSON.stringify(object);
  const versionDirectory = "./catalog/version/";
  if (!fs.existsSync(versionDirectory)) fs.mkdirSync(versionDirectory, { recursive: true });
  fs.writeFile(`${versionDirectory}version.json`, jsonData, (err) => {
    if (err) throw err;
  });
};

setVersion();
