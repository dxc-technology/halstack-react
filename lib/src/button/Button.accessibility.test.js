import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcButton from "./Button.tsx";

describe("Button component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcButton label="Button" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
