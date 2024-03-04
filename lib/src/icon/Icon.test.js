import React from "react";
import { render } from "@testing-library/react";
import DxcIcon from "./Icon.tsx";

describe("Icon component tests", () => {
  test("Icon renders correctly", () => {
    const { getByRole } = render(<DxcIcon icon="home" />);
    const icon = getByRole("img");
    expect(icon).toBeTruthy();
    expect(icon.getAttribute("aria-label")).toBe("home");
  });
});
