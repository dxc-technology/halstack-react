import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcPasswordInput from "./PasswordInput";

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Password input component tests", () => {
  test("Password input renders with label and helper text", () => {
    const { getByText } = render(<DxcPasswordInput label="Password input label" helperText="Helper text" />);
    expect(getByText("Password input label")).toBeTruthy();
    expect(getByText("Helper text")).toBeTruthy();
  });

  test("Password input renders error", () => {
    const { getByText } = render(<DxcPasswordInput error="Error message." />);
    expect(getByText("Error message.")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcPasswordInput label="Password input" onChange={onChange} />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    userEvent.type(passwordInput, "Pa$$w0rd");
    expect(onChange).toHaveBeenCalledWith({ value: "P" });
    expect(passwordInput.value).toBe("Pa$$w0rd");
  });

  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const { getByLabelText } = render(<DxcPasswordInput label="Password input" onBlur={onBlur} />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    userEvent.type(passwordInput, "Pa$$w0rd");
    fireEvent.blur(passwordInput);
    expect(onBlur).toHaveBeenCalledWith({ value: "Pa$$w0rd" });
    expect(passwordInput.value).toBe("Pa$$w0rd");
  });

  test("Clear password input value", async () => {
    const { getAllByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" clearable />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    userEvent.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    const clearButton = getAllByRole("button")[0];
    await userEvent.click(clearButton);
    expect(passwordInput.value).toBe("");
  });

  test("Non clearable password input has no clear icon", async () => {
    const { getAllByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    userEvent.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  test("Show/hide password input button works correctly", async () => {
    const { getAllByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" clearable />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    userEvent.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    expect(passwordInput.type).toBe("password");
    const showButton = getAllByRole("button")[1];
    await userEvent.click(showButton);
    expect(passwordInput.type).toBe("text");
  });

  test("Password input has correct accessibility attributes", async () => {
    const { getByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" />);
    const showButton = getByRole("button");
    expect(getByLabelText("Password input")).toBeTruthy();
    expect(showButton.getAttribute("aria-expanded")).toBe("false");
    expect(showButton.getAttribute("aria-label")).toBe("Show password");
    await userEvent.click(showButton);
    expect(showButton.getAttribute("aria-expanded")).toBe("true");
    expect(showButton.getAttribute("aria-label")).toBe("Hide password");
  });
});
