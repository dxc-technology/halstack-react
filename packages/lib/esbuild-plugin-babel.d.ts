declare module "esbuild-plugin-babel" {
  import type { Plugin } from "esbuild";

  interface BabelPluginOptions {
    configFile?: string;
    filter?: RegExp;
    // Puedes añadir otras opciones según lo que uses
  }

  function babel(options?: BabelPluginOptions): Plugin;

  export default babel;
}
