import { injectAxe, checkA11y, configureAxe } from "axe-playwright";
import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner";
import { ViewportParameters, ViewportStyles } from "./types";

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

const a11yConfig: TestRunnerConfig = {
  async preVisit(page, context) {
    await injectAxe(page);

    try {
      // Get the entire context of a story, including parameters, args, argTypes, etc.
      const storyContext = await getStoryContext(page, context);
      // Apply viewport handle support
      const viewPortParams: ViewportParameters = storyContext.parameters?.viewport;
      const defaultViewport = viewPortParams?.defaultViewport;
      const viewport = defaultViewport && viewPortParams?.viewports[defaultViewport]?.styles;
      const parsedViewportSizes: ViewportStyles = viewport
        ? Object.entries(viewport).reduce(
            (acc, [screen, size]) => ({
              ...acc,
              [screen]: parseInt(size),
            }),
            {} as ViewportStyles
          )
        : DEFAULT_VIEWPORT_SIZE;

      if (parsedViewportSizes && Object.keys(parsedViewportSizes)?.length !== 0) {
        page.setViewportSize(parsedViewportSizes);
      }
    } catch (err) {
      console.error("Problem when loading the Story Context -> ", err);
    }
  },
  async postVisit(page, context) {
    try {
      // Get the entire context of a story, including parameters, args, argTypes, etc.
      const storyContext = await getStoryContext(page, context);
      // Do not run a11y tests on disabled stories.
      if (storyContext.parameters?.a11y?.disable) {
        return;
      }

      // Apply story-level a11y rules
      await configureAxe(page, {
        rules: storyContext?.parameters?.a11y?.config?.rules,
      });
    } catch (err) {
      console.error("Problem when loading the Story Context -> ", err);
    }

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
