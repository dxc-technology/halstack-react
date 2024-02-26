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
