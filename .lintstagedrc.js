module.exports = {
  "(apps|packages)/**/*.(ts|tsx|js)": (filenames) => {
    return [
      `npx eslint --fix --max-warnings 0 ${filenames.map((file) => `"${file}"`).join(" ")}`,
      // `npx prettier --write ${filenames.map((file) => `"${file}"`).join(" ")}`
    ];
  },
};
