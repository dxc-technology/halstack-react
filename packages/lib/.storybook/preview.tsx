import type { Preview } from "@storybook/react";
import disabledRules from "../test/accessibility/rules/common/disabledRules";
import "../src/styles/variables.css";

// Define typed a11y config
interface A11yRule {
  id: string;
  enabled: boolean;
}

interface A11yParameters {
  config: {
    rules: A11yRule[];
  };
  options?: Record<string, unknown>;
}

// Define fixed parameters type
interface StorybookParameters {
  controls: {
    matchers: {
      color: RegExp;
      date: RegExp;
    };
  };
  a11y: A11yParameters;
}

// Extend Preview to use fixed parameters
interface PreviewExtended extends Omit<Preview, "parameters"> {
  parameters: StorybookParameters;
}

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
