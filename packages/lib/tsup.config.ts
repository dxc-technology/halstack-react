import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  loader: {
    ".woff2": "dataurl",
  },
  format: ["cjs", "esm"],
  injectStyle: true,
  splitting: false,
});
