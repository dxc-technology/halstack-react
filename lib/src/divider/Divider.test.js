import React from "react";
import { render } from "@testing-library/react";
import DxcDivider from "./Divider";

describe("Divider Component", () => {
  test("Default renders horizontal divider correctly", () => {
    const { getByRole } = render(<DxcDivider />);
    const divider = getByRole("separator");
    expect(divider.getAttribute("aria-orientation")).toBe("horizontal");
  });

  test("Renders vertical divider correctly", () => {
    const { getByRole } = render(<DxcDivider orientation="vertical" />);
    const divider = getByRole("separator");
    expect(divider.getAttribute("aria-orientation")).toBe("vertical");
  });
});
