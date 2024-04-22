import { HalstackProvider } from "../src/HalstackContext";
import styled from "styled-components";
import type { Preview } from "@storybook/react";
import React from "react";
import disabledRules from "../test/accessibility/rules/common/disabledRules";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
  decorators: [
    (Story) => (
      <HalstackProvider>
        <Container>
          <Story />
        </Container>
      </HalstackProvider>
    ),
  ],
};

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1");
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
`;

export default preview;
