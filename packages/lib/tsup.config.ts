import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  injectStyle: true,
  splitting: false,
  // esbuildOptions(options) {
  //   options.alias = {
  //     "styled-system/recipes": path.resolve(__dirname, "styled-system/recipes"),
  //     "styled-system/css": path.resolve(__dirname, "styled-system/css"),
  //   };
  // },
});
