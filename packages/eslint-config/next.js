import reactInternal from "./react-internal.js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import { join } from "path";

/**
 * @param {{ tsconfigRootDir: string, tsconfigName?: string }} options
 * @returns {import("eslint").Config[]}
 */
export default function nextConfig({ tsconfigRootDir, tsconfigName = "tsconfig.lint.json" } = {}) {
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
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
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
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ];
}
