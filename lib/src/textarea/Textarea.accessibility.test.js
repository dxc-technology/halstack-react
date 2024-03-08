import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcTextarea from "./Textarea.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("Textarea component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcTextarea
          label="Example label"
          helperText="Helper Text"
          defaultValue="Value"
          margin="medium"
          placeholder="Placeholder"
          verticalGrow="manual"
          name="Name"
          autocomplete="on"
          minLength={0}
          maxLength={100}
          optional
        />
        <DxcTextarea
          label="Example label"
          helperText="Helper Text"
          defaultValue="Value"
          margin="medium"
          placeholder="Placeholder"
          verticalGrow="manual"
          name="Name"
          error="Error message."
          minLength={0}
          maxLength={100}
        />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
