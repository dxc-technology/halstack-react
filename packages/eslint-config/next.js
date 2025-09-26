import reactInternal from "./react-internal.js";
import onlyWarn from "eslint-plugin-only-warn";
import vercelNext from "@vercel/style-guide/eslint/next";

/** @type {import("eslint").Config[]} */
export default [
  ...reactInternal,
  ...vercelNext,
  {
    plugins: { "only-warn": onlyWarn },
    languageOptions: { globals: { React: true, JSX: true } },
    files: ["**/*.{js,jsx,ts,tsx}"],
    linterOptions: { ignorePatterns: [".*.js", "node_modules/", "out/"] },
  },
];
