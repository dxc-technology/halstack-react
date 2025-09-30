import "../src/styles/fonts.css";
import "../src/styles/variables.css";
import disabledRules from "../test/accessibility/rules/common/disabledRules";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import type { StoryFn } from "@storybook/react-vite";

const emotionCache = createCache({ key: "css", prepend: true });

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      context: "body",
      config: {
        rules: disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
      },
      options: {},
      test: "error",
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <CacheProvider value={emotionCache}>
        <Story />
      </CacheProvider>
    ),
  ],
};

export default preview;
