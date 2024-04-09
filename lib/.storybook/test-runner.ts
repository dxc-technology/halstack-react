import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner";
import { ViewportParameters, ViewportStyles } from "./types";

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

const a11yConfig: TestRunnerConfig = {
  async preVisit(page, context) {
    await injectAxe(page);

    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
    // Apply viewport handle support
    const viewPortParams: ViewportParameters = storyContext.parameters?.viewport;
    const defaultViewport = viewPortParams?.defaultViewport;
    const viewport = defaultViewport && viewPortParams.viewports[defaultViewport].styles;
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
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default a11yConfig;

// // UNCOMMENT TO EXPORT RESULTS AS JSON IN __ACCESSIBILITY
// const { injectAxe, getViolations } = require("axe-playwright");
// const fs = require("fs");

// const a11yConfig: TestRunnerConfig = {
//   setup() {
//     fs.mkdir(process.cwd() + "/src/__accessibility__/", { recursive: true }, (err) => {
//       if (err) throw err;
//     });
//   },
//   async preVisit(page, context) {
//     await injectAxe(page);
//   },
//   async postVisit(page, context) {
//     const violations = await getViolations(page, "#storybook-root", {
//       detailedReport: true,
//     });

//     await new Promise((resolve, reject) => {
//       fs.writeFile(
//         process.cwd() + `/src/__accessibility__/${context.id}.json`,
//         JSON.stringify(violations, null, 2),
//         (err) => {
//           if (err) reject(err);
//           resolve();
//         }
//       );
//     });
//   },
// };
// 
// export default a11yConfig;
