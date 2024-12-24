/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@dxc-technology/eslint-config/react-internal.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  env: {
    "jest/globals": true,
  },
};
