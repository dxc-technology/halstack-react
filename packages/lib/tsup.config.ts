  import { defineConfig } from "tsup";
  import babel from "esbuild-plugin-babel";

  export default defineConfig({
    clean: true,
    dts: true,
    entry: ["src/index.ts"],
    esbuildPlugins: [
      babel({
        configFile: "./babel.config.js",
        filter: /\.[jt]sx?$/,
      }),
    ],
    external: ["react", "react-dom"],
    format: ["cjs", "esm"],
    injectStyle: true,
    splitting: false,
  });
