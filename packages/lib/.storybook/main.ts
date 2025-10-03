import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);

const getAbsolutePath = (value: string) => dirname(require.resolve(join(value, "package.json")));

const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-a11y"),
    // getAbsolutePath("@storybook/addon-docs"),
    // getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-links"),
    // getAbsolutePath("@storybook/addon-viewport"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@vitest/coverage-v8"),
    // getAbsolutePath("storybook-addon-performance"),
    getAbsolutePath("storybook-addon-pseudo-states"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      // Workaround to prevent fail during first text execution (https://github.com/storybookjs/storybook/issues/32049)
      // optimizeDeps: {
      //   include: [
      //     "react",
      //     "react-dom",
      //     "react/jsx-runtime",
      //     "react/jsx-dev-runtime",
      //     "@emotion/react",
      //     "@emotion/styled",
      //   ],
      // },
      plugins: [
        react({
          jsxImportSource: "@emotion/react",
          babel: {
            plugins: ["@emotion/babel-plugin"],
          },
        }),
      ],
    });
  },
};

export default config;
