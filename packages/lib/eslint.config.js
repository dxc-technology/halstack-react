import libraryConfig from "@dxc-technology/eslint-config/library.js";

/** @type {import("eslint").Config[]} */
export default [
  ...libraryConfig,
  {
    files: ["**/*.test.{ts,tsx,js,jsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
