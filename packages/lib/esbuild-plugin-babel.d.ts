declare module "esbuild-plugin-babel" {
  import type { Plugin } from "esbuild";

  interface BabelPluginOptions {
    configFile?: string;
    filter?: RegExp;
  }

  function babel(options?: BabelPluginOptions): Plugin;

  export default babel;
}
