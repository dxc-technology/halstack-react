/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@dxc-technology/eslint-config/react-internal.js", "@dxc-technology/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
