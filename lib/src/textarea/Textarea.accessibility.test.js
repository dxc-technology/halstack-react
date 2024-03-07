import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcTextarea from "./Textarea.tsx";

describe("Textarea component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
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
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
