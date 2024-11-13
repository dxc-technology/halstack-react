import { render, fireEvent } from "@testing-library/react";
import DxcAlert from "./Alert";

describe("Alert component tests", () => {
  test("Info alert renders with correct text", () => {
    const { getByText } = render(
      <DxcAlert title="Info" semantic="info" message={{ messageText: "info-alert-text" }} />
    );
    expect(getByText("information")).toBeTruthy();
    expect(getByText("info-alert-text")).toBeTruthy();
  });

  test("Confirm alert renders with correct text", () => {
    const { getByText } = render(
      <DxcAlert title="Success" semantic="success" message={{ messageText: "success-alert-text" }} />
    );
    expect(getByText("success")).toBeTruthy();
    expect(getByText("confirm-alert-text")).toBeTruthy();
  });

  test("Warning alert renders with correct text", () => {
    const { getByText } = render(
      <DxcAlert title="Warning" semantic="warning" message={{ messageText: "warning-alert-text" }} />
    );
    expect(getByText("warning")).toBeTruthy();
    expect(getByText("warning-alert-text")).toBeTruthy();
  });

  test("Error alert renders with correct text", () => {
    const { getByText } = render(
      <DxcAlert title="Error" semantic="error" message={{ messageText: "error-alert-text" }} />
    );
    expect(getByText("error")).toBeTruthy();
    expect(getByText("error-alert-text")).toBeTruthy();
  });

  test("Alert renders with correct children", () => {
    const { getByText } = render(<DxcAlert title="Info" message={{ messageText: "alert-text" }} />);
    expect(getByText("alert-text")).toBeTruthy();
    expect(getByText("sample-children")).toBeTruthy();
  });

  test("Calls correct function on close", () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <DxcAlert title="Info" message={{ messageText: "info-alert-text", onClose: () => onClose }} />
    );

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  test("Modal alert calls correct function on close", () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <DxcAlert title="Info" message={{ messageText: "info-alert-text", onClose: () => onClose }} mode="modal" />
    );

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
