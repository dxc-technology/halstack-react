import reactInternal from "./react-internal.js";
import storybook from "eslint-plugin-storybook";
import jest from "eslint-plugin-jest";
import globals from "globals";

/** @type {import("eslint").Config[]} */
export default [
  ...reactInternal,
  {
    files: ["**/*.{stories}.{ts,tsx,js,jsx}"],
    plugins: { storybook },
    rules: { ...storybook.configs.recommended.rules },
  },
  {
    files: ["**/*.test.{ts,tsx,js,jsx}", "setupJestAxe.[jt]s"],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/no-commented-out-tests": "off",
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/types.{ts,js}"],
    plugins: { storybook },
    rules: { "no-unused-vars": "off" },
  },
];
