import { resolve } from "node:path";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import turbo from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Config[]} */
export default [
  js.configs.recommended,
  prettier,
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
    ignores: [".*.js", "node_modules/", "dist/"], // ✅ Flat-config syntax
  },
];
