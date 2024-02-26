import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcFileInput from "./FileInput.tsx";

describe("FileInput component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcFileInput label="File input label" helperText="File input helper text" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
