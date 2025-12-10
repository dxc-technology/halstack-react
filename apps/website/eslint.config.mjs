import nextPlugin from "@next/eslint-plugin-next";
import nextConfig from "@dxc-technology/eslint-config/next.js";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  js.configs.recommended,
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
  ...nextConfig({
    tsconfigRootDir: __dirname,
    tsconfigName: "tsconfig.lint.json",
  }),
  {
    ignores: ["out/**", ".next/**"],
  },
];
