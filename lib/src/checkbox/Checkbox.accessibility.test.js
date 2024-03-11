import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcCheckbox from "./Checkbox.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("Checkbox component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
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
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
