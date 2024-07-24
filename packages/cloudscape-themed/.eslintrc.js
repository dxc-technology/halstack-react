/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
};
