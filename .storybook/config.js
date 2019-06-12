import { addParameters, addDecorator, configure } from "@storybook/react";
import dxcTheme from "./dxc-theme.js";
import { withA11y } from "@storybook/addon-a11y";
import { jsxDecorator } from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(jsxDecorator);

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: dxcTheme
  }
});

configure(loadStories, module);
