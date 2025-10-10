import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcCheckbox from "./Checkbox";

describe("Checkbox component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcCheckbox
        label="Checkbox"
        labelPosition="after"
        name="name"
        size="fitContent"
        value="checkboxValue"
        margin="small"
        defaultChecked
        optional
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for read-only mode", async () => {
    const { container } = render(
      <DxcCheckbox
        label="Checkbox"
        labelPosition="after"
        name="name"
        size="fitContent"
        value="checkboxValue"
        margin="small"
        readOnly
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcCheckbox
        label="Checkbox"
        labelPosition="after"
        name="name"
        size="fitContent"
        value="checkboxValue"
        margin="small"
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
