module.exports = {
  "(apps|packages)/**/*.(ts|tsx|js)": (filenames) => {
    return [`npx eslint --fix --max-warnings 0 ${filenames.join(" ")}`, `npx prettier --write ${filenames.join(" ")}`];
  },
};
