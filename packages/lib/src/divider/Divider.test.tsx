import { render } from "@testing-library/react";
import DxcDivider from "./Divider";

describe("Divider Component", () => {
  test("Default renders horizontal divider correctly", () => {
    const { container } = render(<DxcDivider />);
    const divider = container.querySelector("hr");

    expect(divider.getAttribute("aria-orientation")).toBe("horizontal");
  });

  test("Renders vertical divider correctly", () => {
    const { container } = render(<DxcDivider orientation="vertical" />);
    const divider = container.querySelector("hr");
    expect(divider.getAttribute("aria-orientation")).toBe("vertical");
  });

  test("Renders divider as a decorative resource by default", () => {
    const { container } = render(<DxcDivider />);
    const divider = container.querySelector("hr");
    expect(divider).toBeTruthy();
    expect(divider.getAttribute("aria-hidden")).toBe("true");
  });

  test("Renders divider as a separator if it is not decorative", () => {
    const { getByRole } = render(<DxcDivider decorative={false} />);
    const divider = getByRole("separator");
    expect(divider).toBeTruthy();
    expect(divider.getAttribute("aria-hidden")).toBe("false");
  });
});
