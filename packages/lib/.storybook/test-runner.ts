import { injectAxe, checkA11y, configureAxe } from "axe-playwright";
import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner";
import { PreviewExtended, ViewportStyles } from "./types";

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

const a11yConfig: TestRunnerConfig = {
  async preVisit(page, context) {
    await injectAxe(page);

    try {
      // Get the entire context of a story, including parameters, args, argTypes, etc.
      const storyContext = await getStoryContext(page, context);
      // Apply viewport handle support
      const parameters = storyContext.parameters as Partial<PreviewExtended["parameters"]> | undefined;
      const viewPortParams = parameters?.viewport;
      const defaultViewport = viewPortParams?.defaultViewport;
      const viewport = defaultViewport ? viewPortParams.viewports?.[defaultViewport]?.styles : undefined;

      const parsedViewportSizes: ViewportStyles = viewport
        ? Object.entries(viewport).reduce((acc, [screen, size]) => {
            const safeSize = typeof size === "string" ? parseInt(size, 10) : undefined;
            if (safeSize) acc[screen as keyof ViewportStyles] = safeSize;
            return acc;
          }, {} as ViewportStyles)
        : DEFAULT_VIEWPORT_SIZE;

      if (parsedViewportSizes && Object.keys(parsedViewportSizes).length) {
        await page.setViewportSize(parsedViewportSizes);
      }
    } catch (err) {
      console.error("Problem when loading the Story Context -> ", err);
    }
  },

  async postVisit(page, context) {
    try {
      // Get the entire context of a story, including parameters, args, argTypes, etc.
      const storyContext = await getStoryContext(page, context);
      const parameters = storyContext.parameters as Partial<PreviewExtended["parameters"]> | undefined;

      if (parameters?.a11y?.disable) return;

      await configureAxe(page, {
        rules: parameters?.a11y?.config?.rules,
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

export default a11yConfig;
