import nextConfig from "@dxc-technology/eslint-config/next.js";

/** @type {import("eslint").Config[]} */
export default [
  ...nextConfig,
  {
    files: ["apps/website/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
