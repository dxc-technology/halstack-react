const { disabledRules } = require("./rules/common/disabledRules");

const { configureAxe } = require("jest-axe");

export const axe = configureAxe({
  rules: disabledRules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
});
