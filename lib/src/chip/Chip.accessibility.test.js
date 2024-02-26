import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcChip from "./Chip.tsx";

describe("Chip component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcChip label="Chip" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
