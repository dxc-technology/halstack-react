import { configureAxe } from "vitest-axe";
import disabledRules from "./rules/common/disabledRules";

export const formatRules = (rules: string[]) =>
  rules.reduce(
    (rulesObj, rule) => ({
      ...rulesObj,
      [rule]: { enabled: false },
    }),
    {}
  );

export const axe = configureAxe({
  rules: formatRules(disabledRules),
});
