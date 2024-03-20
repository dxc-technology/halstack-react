import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcBreadcrumbs from "./Breadcrumbs";
import { disabledRules as rules } from "../../test/accessibility/rules/specific/breadcrumbs/disabledRules.js";

const disabledRules = {
  rules: rules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
};

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "User Menu",
    href: "",
  },
  {
    label: "Preferences",
    href: "",
  },
  {
    label: "Dark Mode",
    href: "",
  },
];

describe("Breadcrumbs component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={3} ariaLabel="example" />);
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues without root", async () => {
    const { container } = render(
      <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} ariaLabel="example" showRoot={false} />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});
