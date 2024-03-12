const { disabledRules } = require("./disabledRules");

const { configureAxe } = require("jest-axe");

export const axe = configureAxe({
  rules: disabledRules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
});
