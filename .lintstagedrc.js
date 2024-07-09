module.exports = {
  "(apps|packages)/**/*.(ts|tsx|js)": (filenames) => {
    return [`npx eslint --fix --max-warnings 0 ${filteredFilenames.join(" ")}`, `npx prettier --write ${filteredFilenames.join(" ")}`];
  },
};
