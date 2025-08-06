import "../src/styles/fonts.css";
import "../src/styles/variables.css";

import type { Preview } from "@storybook/react-vite";
import { disabledRules } from "../test/accessibility/rules/common/disabledRules";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const emotionCache = createCache({ key: "css", prepend: true });

const preview: Preview = {
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
    (Story) => (
      <CacheProvider value={emotionCache}>
        <Story />
      </CacheProvider>
    ),
  ],
};

export default preview;
