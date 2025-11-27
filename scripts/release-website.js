const { exec } = require("child_process");
const AWS = require("aws-sdk");

const BUCKET_NAME = "design-system-react-cdk-site";
const DIRECTORY = "halstack/";
const PREVDIRECTORY = "tools/react/";

const processListObjectsResponse = (response, directory) => {
  return response.CommonPrefixes.map((commonPrefix) => {
    const prefix = commonPrefix.Prefix;
    return prefix.substring(prefix.lastIndexOf(directory) + directory.length, prefix.length - 1);
  })
    .filter((version) => version !== "latest")
    .map((version) => Number(version));
};

const getVersionsInS3Bucket = async () => {
  const params = {
    Bucket: BUCKET_NAME,
    Delimiter: "/",
  };

  const versionsFromPrevDirectory = await new Promise((resolve, reject) => {
    new AWS.S3().listObjectsV2({ ...params, Prefix: PREVDIRECTORY }, (error, data) => {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(processListObjectsResponse(data, PREVDIRECTORY));
      }
    });
  });

  const versions = await new Promise((resolve, reject) => {
    new AWS.S3().listObjectsV2({ ...params, Prefix: DIRECTORY }, (error, data) => {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(processListObjectsResponse(data, DIRECTORY));
      }
    });
  });

  return versionsFromPrevDirectory.concat(versions);
};

const buildSite = (version) => {
  return new Promise((resolve, reject) => {
    console.log(`Building site with version ${version}`);
    exec(`cd apps/website && NEXT_PUBLIC_SITE_VERSION=${version} npm run build`, (error, stdout, stderr) => {
      if (error) {
        throw new Error(error.message);
      }
      if (stderr) {
        throw new Error(stderr);
      }
      resolve(stdout);
    });
  });
};

const removeBucket = (version) => {
  return new Promise((resolve, reject) => {
    console.log(`Removing s3://${BUCKET_NAME}/${DIRECTORY}${version}/`);
    exec(`aws s3 rm s3://${BUCKET_NAME}/${DIRECTORY}${version}/ --recursive`, (error, stdout, stderr) => {
      if (error) {
        throw new Error(error.message);
      }
      if (stderr) {
        throw new Error(stderr);
      }
      resolve(stdout);
    });
  });
};

const moveToBucket = (version) => {
  return new Promise((resolve, reject) => {
    exec(
      `aws s3 rm s3://${BUCKET_NAME}/${DIRECTORY}${version}/ --recursive &&
        aws s3 cp ./apps/website/out/ s3://${BUCKET_NAME}/${DIRECTORY}${version}/ --recursive`,
      (error, stdout, stderr) => {
        if (error) {
          throw new Error(error.message);
        }
        if (stderr) {
          throw new Error(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

const updateRedirectionToLatest = (version) => {
  const redirection = `window.location.replace("https://developer.assure.dxc.com/halstack/${version}/");`;
  return new Promise((resolve, reject) => {
    exec(`echo '${redirection}' | aws s3 cp - s3://${BUCKET_NAME}/${DIRECTORY}redirect.js`, (error, stdout, stderr) => {
      if (error) {
        throw new Error(error.message);
      }
      if (stderr) {
        throw new Error(stderr);
      }
      resolve(stdout);
    });
  });
};

const deploy = async () => {
  const versionToDeploy = process.argv[2];
  const majorVersionToDeploy = Number(versionToDeploy.split(".")[0]);
  const existingVersionsInBucket = await getVersionsInS3Bucket();
  const isNewLatest = !existingVersionsInBucket.includes(majorVersionToDeploy);
  await buildSite(versionToDeploy);
  await removeBucket(majorVersionToDeploy);
  await moveToBucket(majorVersionToDeploy);
  const listAvailableVersions = await getVersionsInS3Bucket();
  await updateAvailableVersions(listAvailableVersions, majorVersionToDeploy);
  if (isNewLatest) {
    await updateRedirectionToLatest(majorVersionToDeploy);
  }
};

const updateAvailableVersions = async (versions, currentVersion) => {
  const versionItems = versions.map((version) => {
    const currentItem = isNaN(version) ? "next" : version;
    return {
      versionNumber: currentItem,
      versionURL: `https://developer.assure.dxc.com/${
        isNaN(currentItem) && currentItem <= 5 ? "tools/react" : "halstack"
      }/${currentItem}/`,
      current: currentItem === currentVersion,
    };
  });
  return new Promise((resolve, reject) => {
    exec(
      `echo '${JSON.stringify(versionItems)}' | aws s3 cp - s3://${BUCKET_NAME}/${DIRECTORY}versions.json`,
      (error, stdout, stderr) => {
        if (error) {
          throw new Error(error.message);
        }
        if (stderr) {
          throw new Error(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

deploy();
