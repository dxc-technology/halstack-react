import reactInternal from "./react-internal.js";
import storybook from "eslint-plugin-storybook";
import jest from "eslint-plugin-jest";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

/** @type {import("eslint").Config[]} */
export default [
  ...reactInternal,
  { ignores: ["dist/**", "coverage/**", "eslint.config.js"] },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.lint.json",
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs["recommended-requiring-type-checking"].rules,
    },
  },
  {
    files: ["**/*.{stories}.{ts,tsx,js,jsx}", "setupJestAxe.[jt]s"],
    plugins: { storybook },
    rules: { ...storybook.configs.recommended.rules },
  },
  {
    files: ["**/*.test.{ts,tsx,js,jsx}"],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },
];
