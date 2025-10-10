import { setProjectAnnotations } from "@storybook/react-vite";
import * as addonA11y from "@storybook/addon-a11y/preview";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([addonA11y, projectAnnotations]);
