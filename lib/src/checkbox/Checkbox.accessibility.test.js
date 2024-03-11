import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
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
        readOnly
        defaultChecked
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for optional mode", async () => {
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
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcCheckbox
        label="Checkbox"
        labelPosition="after"
        name="name"
        size="fitContent"
        value="checkboxValue"
        margin="small"
        readOnly
        defaultChecked
        disabled
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
