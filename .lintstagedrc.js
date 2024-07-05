const micromatch = require("micromatch");

module.exports = {
  "(apps|packages)/**/*.(ts|tsx|js)": (filenames) => {
    const filteredFilenames = micromatch.not(filenames, "**/packages/eslint-config/**");
    return [`npx eslint --fix --max-warnings 0 ${filteredFilenames.join(" ")}`, `npx prettier --write ${filteredFilenames.join(" ")}`];
  },
};
