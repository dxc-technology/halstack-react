import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSpinner from "./Spinner.tsx";

describe("Spinner component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcSpinner label="test-loading"></DxcSpinner>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
