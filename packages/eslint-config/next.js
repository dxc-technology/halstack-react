import reactInternal from "./react-internal.js";
import vercelNext from "@vercel/style-guide/eslint/next";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

/** @type {import("eslint").Config[]} */
export default [...reactInternal, ...compat.config(vercelNext)];
