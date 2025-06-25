import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];

    // Inject Emotion support into the Vite build via @vitejs/plugin-react
    config.plugins.push(
      react({
        jsxImportSource: "@emotion/react",         // Enables css/ styled props
        babel: {
          plugins: ["@emotion/babel-plugin"],     // Enables component selectors
        },
      })
    );

    return config;
  },
};

export default config;
