import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import DxcAlert from "./Alert";

(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const messages = [
  { text: "Message 1", onClose: () => {} },
  { text: "Message 2", onClose: () => {} },
  { text: "Message 3", onClose: () => {} },
  { text: "Message 4", onClose: () => {} },
];

describe("Alert component tests", () => {
  test("Banner alert switches between messages correctly", () => {
    const { getByRole } = render(<DxcAlert title="Info" mode="banner" message={messages} />);
    const alert = getByRole("alert");
    const nextButton = getByRole("button", { name: "Next message" });
    const prevButton = getByRole("button", { name: "Previous message" });
    expect(alert).toHaveTextContent("Info — Message 1");
    expect(alert).toHaveTextContent("1 of 4");
    expect(prevButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(alert).toHaveTextContent("Info — Message 2");
    expect(alert).toHaveTextContent("2 of 4");
    fireEvent.click(nextButton);
    expect(alert).toHaveTextContent("Info — Message 3");
    expect(alert).toHaveTextContent("3 of 4");
    fireEvent.click(nextButton);
    expect(alert).toHaveTextContent("Info — Message 4");
    expect(alert).toHaveTextContent("4 of 4");
    expect(nextButton).toBeDisabled();
    fireEvent.click(prevButton);
    expect(alert).toHaveTextContent("Info — Message 3");
    expect(alert).toHaveTextContent("3 of 4");
    fireEvent.click(prevButton);
    expect(alert).toHaveTextContent("Info — Message 2");
    expect(alert).toHaveTextContent("2 of 4");
    fireEvent.click(prevButton);
    expect(alert).toHaveTextContent("Info — Message 1");
    expect(alert).toHaveTextContent("1 of 4");
    expect(prevButton).toBeDisabled();
  });
  test("Inline alert calls correctly the function onClose of several messages", () => {
    const onClose1 = jest.fn();
    const onClose2 = jest.fn();
    const messages = [
      { text: "Message 1", onClose: onClose1 },
      { text: "Message 2", onClose: onClose2 },
    ];
    const { getByRole } = render(<DxcAlert title="Info" message={messages} />);
    const closeButton = getByRole("button", { name: "Close message" });
    const nextButton = getByRole("button", { name: "Next message" });
    fireEvent.click(closeButton);
    expect(onClose1).toHaveBeenCalled();
    fireEvent.click(nextButton);
    fireEvent.click(closeButton);
    expect(onClose2).toHaveBeenCalled();
  });
  test("Modal alert calls correctly the function onClose of a message", () => {
    const onClose = jest.fn();
    const { getByRole } = render(<DxcAlert title="Info" message={{ text: "info-alert-text", onClose }} mode="modal" />);
    const closeButton = getByRole("button", { name: "Close alert" });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
  test("Alert with several messages closes properly each one", () => {
    const { getByRole, getByText } = render(<DxcAlert title="Info" message={messages} />);
    let closeButton = getByRole("button", { name: "Close message" });
    const nextButton = getByRole("button", { name: "Next message" });
    expect(getByText("1 of 4")).toBeTruthy();
    expect(getByText("Message 1")).toBeTruthy();
    fireEvent.click(closeButton);
    expect(getByText("Message 2")).toBeTruthy();
    expect(getByText("1 of 3")).toBeTruthy();
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(getByText("Message 4")).toBeTruthy();
    expect(getByText("3 of 3")).toBeTruthy();
    fireEvent.click(closeButton);
    expect(getByText("Message 3")).toBeTruthy();
    expect(getByText("2 of 2")).toBeTruthy();
    fireEvent.click(closeButton);
    expect(getByRole("button", { name: "Close alert" })).toBeTruthy();
    expect(getByText("Message 2")).toBeTruthy();
  });
  test("Alert actions are correctly called when pressed", () => {
    const primaryAction = jest.fn();
    const secondaryAction = jest.fn();
    const { getByText } = render(
      <DxcAlert
        title="Info"
        mode="banner"
        message={{ text: "info-alert-text", onClose: () => {} }}
        primaryAction={{ label: "Primary", onClick: primaryAction }}
        secondaryAction={{ label: "Secondary", onClick: secondaryAction }}
      />
    );
    const primaryButton = getByText("Primary");
    const secondaryButton = getByText("Secondary");
    fireEvent.click(primaryButton);
    expect(primaryAction).toHaveBeenCalled();
    fireEvent.click(secondaryButton);
    expect(secondaryAction).toHaveBeenCalled();
  });
});
