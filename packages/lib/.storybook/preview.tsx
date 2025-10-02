import "../src/styles/fonts.css";
import "../src/styles/variables.css";
import disabledRules from "../test/accessibility/rules/common/disabledRules";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import type { StoryFn } from "@storybook/react-vite";

const emotionCache = createCache({ key: "css", prepend: true });

// Prevent ResizeObserver loop limit exceeded errors from failing tests
const resizeObserverErr = /ResizeObserver loop (completed|limit exceeded)/;

window.addEventListener("error", (event) => {
  if (resizeObserverErr.test(event.message)) {
    event.stopImmediatePropagation();
  }
});

window.addEventListener("unhandledrejection", (event) => {
  if (resizeObserverErr.test(String(event.reason))) {
    event.preventDefault();
  }
});

const origError = console.error;
console.error = (...args) => {
  if (args[0] && resizeObserverErr.test(args[0] as string)) {
    return;
  }
  origError(...args);
};
// End ResizeObserver loop limit exceeded errors

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
