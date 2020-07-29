const { exec } = require("child_process");

const BUCKET_NAME = "design.site.test";
const DIRECTORY = "tools/react/";
const versionToDeploy = process.argv[2];

const majorVersionToDeploy = Number(
  versionToDeploy.substring(0, versionToDeploy.indexOf("."))
);

exec(
  `aws s3 rm s3://${majorVersionToDeploy}/tools/react/${majorVersionToDeploy}/ --recursive &&
    aws s3 cp ./docs/build/ s3://${majorVersionToDeploy}/tools/react/${majorVersionToDeploy}/ --recursive`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

releaseDocs();
