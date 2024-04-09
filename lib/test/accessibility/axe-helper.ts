// const { configureAxe } = require("jest-axe");
// const { disabledRules } = require("./rules/common/disabledRules");

import { configureAxe } from "jest-axe";
import { disabledRules } from "./rules/common/disabledRules";

export const axe = configureAxe({
  rules: disabledRules.reduce((rulesObj, rule) => ({
    ...rulesObj,
    [rule]: { enabled: false }
  }), {}),
});
