import { render } from "@testing-library/react";
import DxcSpinner from "./Spinner";

describe("Spinner component", () => {
  test("Spinner renders with correct default props", () => {
    const { getByRole } = render(<DxcSpinner />);
    const spinner = getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute("aria-label", "Loading");
  });

  test("Spinner renders with custom label", () => {
    const { getByRole, getByText } = render(<DxcSpinner label="Processing..." />);
    const spinner = getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
    expect(getByText("Processing...")).toBeInTheDocument();
  });

  test("Spinner renders as determinate when value is provided", () => {
    const { getByRole } = render(<DxcSpinner value={50} />);
    const spinner = getByRole("progressbar");
    expect(spinner).toHaveAttribute("aria-valuenow", "50");
    expect(spinner).toHaveAttribute("aria-valuemin", "0");
    expect(spinner).toHaveAttribute("aria-valuemax", "100");
  });

  test("Spinner shows value when showValue is true", () => {
    const { getByText } = render(<DxcSpinner value={75} showValue />);
    expect(getByText("75%")).toBeInTheDocument();
  });

  test("Spinner renders in different sizes", () => {
    const sizes = ["small", "medium", "large"] as const;
    
    sizes.forEach((size) => {
      const { getByRole } = render(<DxcSpinner size={size} ariaLabel={`${size} spinner`} />);
      expect(getByRole("progressbar")).toHaveAttribute("aria-label", `${size} spinner`);
    });
  });

  test("Spinner renders as overlay", () => {
    const { container } = render(<DxcSpinner overlay />);
    const overlayElement = container.querySelector("div[style*='position: fixed']");
    expect(overlayElement).toBeInTheDocument();
  });

  test("Spinner clamps value between 0 and 100", () => {
    const { getByRole: getByRoleNegative } = render(<DxcSpinner value={-10} />);
    expect(getByRoleNegative("progressbar")).toHaveAttribute("aria-valuenow", "0");

    const { getByRole: getByRoleOver } = render(<DxcSpinner value={150} />);
    expect(getByRoleOver("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  test("Spinner renders with custom aria-label", () => {
    const { getByRole } = render(<DxcSpinner ariaLabel="Custom loading message" />);
    expect(getByRole("progressbar")).toHaveAttribute("aria-label", "Custom loading message");
  });

  test("Spinner in small size doesn't show content", () => {
    const { queryByText } = render(<DxcSpinner size="small" label="Loading..." showValue value={50} />);
    expect(queryByText("Loading...")).not.toBeInTheDocument();
    expect(queryByText("50%")).not.toBeInTheDocument();
  });

  test("Spinner renders indeterminate by default", () => {
    const { getByRole } = render(<DxcSpinner />);
    const spinner = getByRole("progressbar");
    expect(spinner).not.toHaveAttribute("aria-valuenow");
    expect(spinner).not.toHaveAttribute("aria-valuemin");
    expect(spinner).not.toHaveAttribute("aria-valuemax");
  });
});
