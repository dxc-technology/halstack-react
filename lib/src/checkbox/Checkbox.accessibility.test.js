import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcCheckbox from "./Checkbox.tsx";

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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
  });
});
