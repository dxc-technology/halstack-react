import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcPasswordInput from "./PasswordInput";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

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

  test("onChange function is called correctly", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcPasswordInput label="Password input" onChange={onChange} />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    await user.type(passwordInput, "Pa$$w0rd");
    expect(onChange).toHaveBeenCalledWith({ value: "P" });
    expect(passwordInput.value).toBe("Pa$$w0rd");
  });

  test("onBlur function is called correctly", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onBlur = jest.fn();
    const { getByLabelText } = render(<DxcPasswordInput label="Password input" onBlur={onBlur} />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    await user.type(passwordInput, "Pa$$w0rd");
    fireEvent.blur(passwordInput);
    expect(onBlur).toHaveBeenCalledWith({ value: "Pa$$w0rd" });
    expect(passwordInput.value).toBe("Pa$$w0rd");
  });

  test("Clear password input value", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { getAllByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" clearable />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    await user.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    const clearButton = getAllByRole("button")[0];
    if (clearButton) {
      await user.click(clearButton);
    }
    expect(passwordInput.value).toBe("");
  });

  test("Non clearable password input has no clear icon", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { getAllByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    await user.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  test("Show/hide password input button works correctly", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { getAllByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" clearable />);
    const passwordInput = getByLabelText("Password input") as HTMLInputElement;
    expect(passwordInput.type).toBe("password");
    await user.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");

    const showButton = getAllByRole("button")[1];
    if (showButton) {
      await user.click(showButton);
    }
    expect(passwordInput.type).toBe("text");
  });

  test("Password input has correct accessibility attributes", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { getByRole, getByLabelText } = render(<DxcPasswordInput label="Password input" />);
    const showButton = getByRole("button");
    expect(getByLabelText("Password input")).toBeTruthy();
    expect(showButton.getAttribute("aria-expanded")).toBe("false");
    expect(showButton.getAttribute("aria-label")).toBe("Show password");
    await user.click(showButton);
    expect(showButton.getAttribute("aria-expanded")).toBe("true");
    expect(showButton.getAttribute("aria-label")).toBe("Hide password");
  });
});
