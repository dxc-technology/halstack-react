import { HalstackProvider } from "../src/HalstackContext";
import styled from "styled-components";
import type { Preview } from "@storybook/react";
import React from "react";

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
        rules: [
          {
            // Disable heading order rule to prevent errors from using h2 and h4 in the titles of the stories
            id: "heading-order",
            enabled: false,
          },
          {
            // Disable autocomplete valid rule to prevent errors from "nope" which is used on purpose as an invalid autocomplete value
            id: "autocomplete-valid",
            enabled: false,
          },
        ],
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
`;

export default preview;
