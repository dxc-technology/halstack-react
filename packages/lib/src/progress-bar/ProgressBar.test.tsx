import { render } from "@testing-library/react";
import DxcProgressBar from "./ProgressBar";

describe("ProgressBar component tests", () => {
  test("ProgressBar renders no value when it is indeterminate", () => {
    const { queryByText, getByRole } = render(<DxcProgressBar showValue />);
    const progressBar = getByRole("progressbar");
    expect(queryByText("0 %")).toBeFalsy();
    expect(progressBar.getAttribute("aria-valuenow")).toBeNull();
  });
  test("ProgressBar renders with value when it is determinate and has the flag showValue set to true", () => {
    const { getByText, getByRole } = render(<DxcProgressBar showValue value={25} />);
    const progressBar = getByRole("progressbar");
    expect(getByText("25 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual("25");
  });
  test("ProgressBar doesn't render with value when it is determinate but has the flag showValue set to false", () => {
    const { queryByText, getByRole } = render(<DxcProgressBar value={25} />);
    const progressBar = getByRole("progressbar");
    expect(queryByText("25 %")).toBeFalsy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual("25");
  });
  test("ProgressBar renders with negative value", () => {
    const { getByText, getByRole } = render(<DxcProgressBar showValue value={-20} />);
    const progressBar = getByRole("progressbar");
    expect(getByText("0 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual("0");
  });
  test("ProgressBar renders as indeterminate", () => {
    const { getByRole } = render(<DxcProgressBar />);
    const progressBar = getByRole("progressbar");
    expect(progressBar.getAttribute("aria-valuenow")).toBeNull();
  });
  test("Overlay progressBar renders with value", () => {
    const value = 25;
    const { getByText, getByRole } = render(<DxcProgressBar showValue value={value} overlay />);
    const progressBar = getByRole("progressbar");
    expect(getByText("25 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual(value.toString());
  });

  test("Overlay progressBar renders with correct aria-label", () => {
    const value = 25;
    const { getByRole } = render(<DxcProgressBar showValue ariaLabel="Example aria label" value={value} overlay />);
    const progressBar = getByRole("progressbar");
    expect(progressBar.getAttribute("aria-label")).toBe("Example aria label");
  });

  test("Overlay progressBar renders with correct label", () => {
    const value = 25;
    const { getByRole, getByText } = render(<DxcProgressBar showValue label="Example label" value={value} overlay />);
    const progressBar = getByRole("progressbar");
    expect(getByText("Example label")).toBeTruthy();
    expect(progressBar.getAttribute("aria-label")).toBeNull();
  });
});
