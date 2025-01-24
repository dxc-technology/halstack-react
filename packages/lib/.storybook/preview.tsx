import type { Preview } from "@storybook/react";
import { disabledRules } from "../test/accessibility/rules/common/disabledRules";
import "../src/styles/fonts.css";
import "../src/styles/variables.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "reset",
    },
    a11y: {
      config: {
        rules: disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
      },
      options: {},
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
