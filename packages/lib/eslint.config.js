import libraryConfig from "@dxc-technology/eslint-config/library.js";

/** @type {import("eslint").Config[]} */
export default [
  ...libraryConfig,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
