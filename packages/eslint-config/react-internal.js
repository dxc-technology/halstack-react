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
      globals: { 
        React: "readonly", 
        JSX: "readonly" 
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: { project },
      },
    },
    rules: {
      // Basic React rules that don't require a plugin
      "no-unused-vars": "warn",
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [".*.js", "node_modules/", "dist/"],
  },
];
