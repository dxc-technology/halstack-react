const AWS = require("aws-sdk");
const fs = require('fs');

const BUCKET_NAME = "design.site.test";
const DIRECTORY = "tools/react/";
const versionToDeploy = process.argv[2];
const majorVersionToDeploy = Number(
  versionToDeploy.substring(0, versionToDeploy.indexOf("."))
);

const processListObjectsResponse = (response) => {
  return response.CommonPrefixes.map((commonPrefix) => {
    const prefix = commonPrefix.Prefix;
    return prefix.substring(
      prefix.lastIndexOf(DIRECTORY) + DIRECTORY.length,
      prefix.length - 1
    );
  })
    .filter((version) => version !== "next" && version !== "latest")
    .map((version) => Number(version));
};

const getVersionsInS3Bucket = async () => {
  const params = {
    Bucket: BUCKET_NAME,
    Prefix: DIRECTORY,
    Delimiter: "/",
  };

  return new Promise((resolve, reject) => {
    new AWS.S3().listObjectsV2(params, (error, data) => {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(processListObjectsResponse(data));
      }
    });
  });
};
const deployToExistingVersion = () => {
    var files = fs.readdirSync('./docs/build');
    console.log(files)
};

const deployToLatest = () => {};

const moveLatestToPreviousVersion = () => {};

const releaseDocs = async () => {
  const versionsInBucket = await getVersionsInS3Bucket();
  if (versionsInBucket.includes(majorVersionToDeploy)) {
    deployToExistingVersion();
  } else if (versionsInBucket.includes(majorVersionToDeploy - 1)) {
    deployToLatest();
  } else {
    moveLatestToPreviousVersion();
    deployToLatest();
  }
};

releaseDocs();
