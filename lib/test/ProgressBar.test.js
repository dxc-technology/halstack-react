import React from "react";
import { render } from "@testing-library/react";
import DxcProgressBar from "../src/progress-bar/ProgressBar";

describe("ProgressBar component tests", () => {
  test("ProgressBar renders with label", () => {
    const { getByText } = render(<DxcProgressBar label="test-label"></DxcProgressBar>);
    expect(getByText("test-label")).toBeTruthy();
  });

  test("Overlay progressBar renders with label", () => {
    const { getByText } = render(<DxcProgressBar label="test-label" overlay></DxcProgressBar>);
    expect(getByText("test-label")).toBeTruthy();
  });

  test("ProgressBar renders with default value", () => {
    const { getByText } = render(<DxcProgressBar showValue></DxcProgressBar>);
    expect(getByText("0 %")).toBeTruthy();
  });

  test("Overlay progressBar renders with default value", () => {
    const { getByText } = render(<DxcProgressBar showValue overlay></DxcProgressBar>);
    expect(getByText("0 %")).toBeTruthy();
  });

  test("ProgressBar renders with value", () => {
    const { getByText } = render(<DxcProgressBar showValue value={25}></DxcProgressBar>);
    expect(getByText("25 %")).toBeTruthy();
  });

  test("Overlay progressBar renders with value", () => {
    const { getByText } = render(<DxcProgressBar showValue value={25} overlay></DxcProgressBar>);
    expect(getByText("25 %")).toBeTruthy();
  });
});
