declare module "esbuild-plugin-babel" {
  import type { Plugin } from "esbuild";

  interface BabelPluginOptions {
    configFile?: string;
    filter?: RegExp;
  }

  function babel(_options?: BabelPluginOptions): Plugin;

  export default babel;
}
