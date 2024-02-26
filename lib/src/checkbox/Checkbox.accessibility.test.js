import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcCheckbox from "./Checkbox.tsx";

describe("Checkbox component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcCheckbox label="Checkbox" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
