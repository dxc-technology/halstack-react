import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcAlert from "./Alert";

describe("Alert component tests", () => {
  test("Info alert renders with correct text", () => {
    const { getByText } = render(<DxcAlert type="info" inlineText="info-alert-text" />);
    expect(getByText("information")).toBeTruthy();
    expect(getByText("info-alert-text")).toBeTruthy();
  });

  test("Confirm alert renders with correct text", () => {
    const { getByText } = render(<DxcAlert type="confirm" inlineText="confirm-alert-text" />);
    expect(getByText("success")).toBeTruthy();
    expect(getByText("confirm-alert-text")).toBeTruthy();
  });

  test("Warning alert renders with correct text", () => {
    const { getByText } = render(<DxcAlert type="warning" inlineText="warning-alert-text" />);
    expect(getByText("warning")).toBeTruthy();
    expect(getByText("warning-alert-text")).toBeTruthy();
  });

  test("Error alert renders with correct text", () => {
    const { getByText } = render(<DxcAlert type="error" inlineText="error-alert-text" />);
    expect(getByText("error")).toBeTruthy();
    expect(getByText("error-alert-text")).toBeTruthy();
  });

  test("Alert renders with correct children", () => {
    const { getByText } = render(
      <DxcAlert inlineText="alert-text">
        <p>sample-children</p>
      </DxcAlert>
    );
    expect(getByText("alert-text")).toBeTruthy();
    expect(getByText("sample-children")).toBeTruthy();
  });

  test("Calls correct function on close", () => {
    const onClose = jest.fn();
    const { getByRole } = render(<DxcAlert onClose={onClose} inlineText="info-alert-text" />);

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  test("Modal alert calls correct function on close", () => {
    const onClose = jest.fn();
    const { getByRole } = render(<DxcAlert onClose={onClose} mode="modal" inlineText="info-alert-text" />);

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
