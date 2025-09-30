import { resolve } from "node:path";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import turbo from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Config[]} */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: { turbo },
    rules: { ...turbo.configs.recommended.rules },
  },
  {
    plugins: { "only-warn": onlyWarn },
    languageOptions: {
      globals: { React: true, JSX: true },
    },
    settings: {
      "import/resolver": {
        typescript: { project },
      },
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [".*.js", "node_modules/", "dist/"],
  },
];
