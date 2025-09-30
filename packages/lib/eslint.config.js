import libraryConfig from "@dxc-technology/eslint-config/library.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("eslint").Config[]} */
export default [
  { ignores: ["dist/**", "coverage/**", "eslint.config.js"] },
  ...libraryConfig({ tsconfigRootDir: __dirname }),
];
