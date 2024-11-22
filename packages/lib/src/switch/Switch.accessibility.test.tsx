import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import { disabledRules as rules } from "../../test/accessibility/rules/specific/switch/disabledRules";
import DxcSwitch from "./Switch";

const disabledRules = {
  rules: rules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
};

describe("Switch component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcSwitch
        label="Default label"
        defaultChecked
        value="test-defaultChecked"
        name="test"
        labelPosition="after"
        margin="medium"
        size="medium"
        checked
      />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for optional mode", async () => {
    const { container } = render(
      <DxcSwitch
        label="Default label"
        defaultChecked
        value="test-defaultChecked"
        name="test"
        labelPosition="after"
        margin="medium"
        size="medium"
        optional
      />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcSwitch
        label="Default label"
        defaultChecked
        value="test-defaultChecked"
        name="test"
        labelPosition="after"
        margin="medium"
        size="medium"
        disabled
      />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});
