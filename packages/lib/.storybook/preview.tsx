import disabledRules from "../test/accessibility/rules/common/disabledRules";
import "../src/styles/variables.css";
import { PreviewExtended } from "./types";

const preview: PreviewExtended = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
