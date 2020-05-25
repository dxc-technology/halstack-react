import React from "react";
import { render } from "@testing-library/react";
import DxcSpinner from "../src/spinner/Spinner";

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
    const { queryByText } = render(<DxcSpinner mode="small" label="test-loading" value={75} showValue></DxcSpinner>);
    expect(queryByText("test-loading")).toBeFalsy();
    expect(queryByText("75%")).toBeFalsy();
  });

  test("Overlay spinner shows value and label correctly", () => {
    const { getByText } = render(<DxcSpinner mode="overlay" label="test-loading" value={75} showValue></DxcSpinner>);
    expect(getByText("test-loading")).toBeTruthy();
    expect(getByText("75%")).toBeTruthy();
  });
});
