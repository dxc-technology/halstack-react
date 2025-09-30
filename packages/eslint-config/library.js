import reactInternal from "./react-internal.js";
import storybook from "eslint-plugin-storybook";
import jest from "eslint-plugin-jest";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import { join } from "path";

/**
 * @param {{ tsconfigRootDir: string, tsconfigName?: string }} options
 * @returns {import("eslint").Config[]}
 */
export default function libraryConfig({ tsconfigRootDir, tsconfigName = "tsconfig.lint.json" } = {}) {
  return [
    ...reactInternal,
    {
      files: ["**/*.{ts,tsx}"],
      plugins: { "@typescript-eslint": tsPlugin },
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: join(tsconfigRootDir, tsconfigName),
          tsconfigRootDir,
        },
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      rules: {
        ...tsPlugin.configs.recommended.rules,
        ...tsPlugin.configs["recommended-requiring-type-checking"].rules,
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "no-unused-vars": "off",
      },
    },
    {
      files: ["**/*.{stories}.{ts,tsx,js,jsx}"],
      plugins: { storybook },
      rules: { ...storybook.configs.recommended.rules },
    },
    {
      files: ["**/*.test.{ts,tsx,js,jsx}"],
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
  ];
}
