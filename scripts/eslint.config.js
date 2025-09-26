import libraryConfig from "@dxc-technology/eslint-config/library.js";

/** @type {import("eslint").Config[]} */
export default [
  ...libraryConfig,
  {
    files: ["scripts/**/*.{js,ts}"],
    languageOptions: {
      parserOptions: { ecmaVersion: "latest" },
    },
    env: { node: true, es6: true },
  },
];
