import { render } from "@testing-library/react";
import DxcIcon from "./Icon";

describe("Icon component tests", () => {
  test("Icon renders correctly", () => {
    const { getByRole } = render(<DxcIcon icon="home" />);
    const icon = getByRole("img", { hidden: true });
    expect(icon).toBeTruthy();
    expect(icon.getAttribute("aria-hidden")).toBe("true");
  });

  test("Icon ariaLabel is set correctly", () => {
    const { getByRole } = render(<DxcIcon icon="home" ariaLabel="Home" />);
    const icon = getByRole("img", { name: "Home" });
    expect(icon.getAttribute("aria-hidden")).toBeNull();
  });

  test("Icon renders the SVG element passed as icon instead of the icon container", () => {
    const { container, getByTestId } = render(<DxcIcon icon={<svg data-testid="custom-svg" />} />);
    expect(getByTestId("custom-svg")).toBeTruthy();
    expect(container.querySelector('[role="img"]')).toBeNull();
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull();
  });
});
