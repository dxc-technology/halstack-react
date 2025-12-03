import nextConfig from "@dxc-technology/eslint-config/next.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("eslint").Config[]} */
export default [
  { ignores: ["out/**", ".next/**", "eslint.config.mjs"] },
  ...nextConfig({ tsconfigRootDir: __dirname }),
];
