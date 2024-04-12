import React from "react";
import { render } from "@testing-library/react";
import DxcProgressBar from "./ProgressBar";

describe("ProgressBar component tests", () => {
  test("ProgressBar renders with label and helperText", () => {
    const { getByText } = render(
      <DxcProgressBar
        label="test-label"
        helperText="helper-text"
      ></DxcProgressBar>
    );
    expect(getByText("test-label")).toBeTruthy();
    expect(getByText("helper-text")).toBeTruthy();
  });

  test("ProgressBar renders with default value", () => {
    const value = 0;
    const { getByText, getByRole } = render(
      <DxcProgressBar showValue></DxcProgressBar>
    );
    const progressBar = getByRole("progressbar");
    expect(getByText("0 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual(value.toString());
  });

  test("ProgressBar renders with value", () => {
    const value = 25;
    const { getByText, getByRole } = render(
      <DxcProgressBar showValue value={value}></DxcProgressBar>
    );
    const progressBar = getByRole("progressbar");
    expect(getByText("25 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual(value.toString());
  });

  test("ProgressBar renders with negative value", () => {
    const value = 0;
    const { getByText, getByRole } = render(
      <DxcProgressBar showValue value={-20}></DxcProgressBar>
    );
    const progressBar = getByRole("progressbar");
    expect(getByText("0 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual(value.toString());
  });

  test("ProgressBar renders as indeterminate", () => {
    const { getByRole } = render(<DxcProgressBar></DxcProgressBar>);
    const progressBar = getByRole("progressbar");
    expect(progressBar.getAttribute("aria-valuenow")).toBe(null);
  });

  test("Overlay progressBar renders with label and helperText", () => {
    const { getByText } = render(
      <DxcProgressBar
        label="test-label"
        helperText="helper-text"
        overlay
      ></DxcProgressBar>
    );
    expect(getByText("test-label")).toBeTruthy();
    expect(getByText("helper-text")).toBeTruthy();
  });

  test("Overlay progressBar renders with default value", () => {
    const value = 0;
    const { getByText, getByRole } = render(
      <DxcProgressBar showValue overlay></DxcProgressBar>
    );
    const progressBar = getByRole("progressbar");
    expect(getByText("0 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual(value.toString());
  });

  test("Overlay progressBar renders with value", () => {
    const value = 25;
    const { getByText, getByRole } = render(
      <DxcProgressBar showValue value={value} overlay></DxcProgressBar>
    );
    const progressBar = getByRole("progressbar");
    expect(getByText("25 %")).toBeTruthy();
    expect(progressBar.getAttribute("aria-valuenow")).toEqual(value.toString());
  });
});
