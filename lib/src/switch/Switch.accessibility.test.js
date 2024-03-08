import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSwitch from "./Switch.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("Switch component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
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
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
