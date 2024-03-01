import { injectAxe, checkA11y } from "axe-playwright";

import type { TestRunnerConfig } from "@storybook/test-runner";

const a11yConfig: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

module.exports = a11yConfig;

// // UNCOMMENT TO EXPORT RESULTS AS JSON IN __ACCESSIBILITY
// const { injectAxe, getViolations } = require("axe-playwright");
// const fs = require("fs");

// module.exports = {
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
