import "../src/styles/fonts.css";
import "../src/styles/variables.css";

import type { Preview } from "@storybook/react-vite";
import { disabledRules } from "../test/accessibility/rules/common/disabledRules";
import { INITIAL_VIEWPORTS } from "storybook/internal/viewport";

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
};

export default preview;
