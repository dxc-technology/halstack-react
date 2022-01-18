import { ThemeProvider } from "../src/ThemeContext";
import { componentTokens } from "../src/common/variables.js";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={componentTokens}>
      <Story />
    </ThemeProvider>
  ),
];
