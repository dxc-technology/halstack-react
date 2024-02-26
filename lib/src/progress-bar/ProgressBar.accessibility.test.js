import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcProgressBar from "./ProgressBar.tsx";

describe("ProgressBar component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcProgressBar label="test-label" helperText="helper-text"></DxcProgressBar>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
