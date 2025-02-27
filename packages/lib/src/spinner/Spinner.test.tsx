import { render } from "@testing-library/react";
import DxcSpinner from "./Spinner";

describe("Spinner component tests", () => {
  test("Spinner renders with correct label", () => {
    const { getByText } = render(<DxcSpinner label="test-loading"></DxcSpinner>);
    expect(getByText("test-loading")).toBeTruthy();
  });
  test("Spinner shows value correctly", () => {
    const { getByText } = render(<DxcSpinner label="test-loading" value={75} showValue></DxcSpinner>);
    expect(getByText("75%")).toBeTruthy();
  });
  test("Small spinner hides value and label correctly", () => {
    const { queryByText, getByRole } = render(
      <DxcSpinner mode="small" label="test-loading" value={75} showValue></DxcSpinner>
    );
    expect(queryByText("test-loading")).toBeFalsy();
    expect(queryByText("75%")).toBeFalsy();
    expect(getByRole("progressbar").getAttribute("aria-label")).toBe("Spinner");
  });
  test("Overlay spinner shows value and label correctly", () => {
    const { getByText } = render(<DxcSpinner mode="overlay" label="test-loading" value={75} showValue></DxcSpinner>);
    expect(getByText("test-loading")).toBeTruthy();
    expect(getByText("75%")).toBeTruthy();
  });
  test("Get spinner by role", () => {
    const { getByRole } = render(<DxcSpinner label="test-loading" value={75} showValue></DxcSpinner>);
    expect(getByRole("progressbar")).toBeTruthy();
  });
  test("Test spinner aria-label to be undefined", () => {
    const { getByRole } = render(<DxcSpinner label="test-loading" value={75} showValue></DxcSpinner>);
    const spinner = getByRole("progressbar");
    expect(spinner.getAttribute("aria-label")).toBeNull();
    expect(spinner.getAttribute("aria-labelledby")).toBeTruthy();
  });
  test("Test spinner aria-label to be applied correctly when mode is small", () => {
    const { getByRole } = render(
      <DxcSpinner label="test-loading" ariaLabel="Example aria label" value={75} mode="small" showValue></DxcSpinner>
    );
    const spinner = getByRole("progressbar");
    expect(spinner.getAttribute("aria-label")).toBe("Example aria label");
    expect(spinner.getAttribute("aria-labelledby")).toBeNull();
  });
});
