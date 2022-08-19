import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcPasswordInput from "./PasswordInput";

// setup function
const setup = (jsx) => ({
  user: userEvent.setup(),
  ...render(jsx),
});

describe("Password input component tests", () => {
  test("Password input renders with label", () => {
    const { getByText } = render(<DxcPasswordInput label="Password input label" />);
    expect(getByText("Password input label")).toBeTruthy();
  });

  test("Password input renders with helper text", () => {
    const { getByText } = render(<DxcPasswordInput helperText="Helper text" />);
    expect(getByText("Helper text")).toBeTruthy();
  });

  test("Password input renders error", () => {
    const { getByText } = render(<DxcPasswordInput error="Error message." />);
    expect(getByText("Error message.")).toBeTruthy();
  });

  test("onChange function is called correctly", async () => {
    const onChange = jest.fn();
    const { getByRole, user } = setup(<DxcPasswordInput label="Password input" onChange={onChange} />);
    const passwordInput = getByRole("textbox");
    await user.type(passwordInput, "Pa$$w0rd");
    expect(onChange).toHaveBeenCalledWith({ value: "P" });
    expect(passwordInput.value).toBe("Pa$$w0rd");
  });

  test("onBlur function is called correctly", async () => {
    const onBlur = jest.fn();
    const { getByRole, user } = setup(<DxcPasswordInput label="Password input" onBlur={onBlur} />);
    const passwordInput = getByRole("textbox");
    await user.type(passwordInput, "Pa$$w0rd");
    fireEvent.blur(passwordInput);
    expect(onBlur).toHaveBeenCalledWith({ value: "Pa$$w0rd" });
    expect(passwordInput.value).toBe("Pa$$w0rd");
  });

  test("Clear password input value", async () => {
    const { getAllByRole, getByRole, user } = setup(<DxcPasswordInput label="Password input" clearable />);
    const passwordInput = getByRole("textbox");
    await user.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    const clearButton = getAllByRole("button")[0];
    await user.click(clearButton);
    expect(passwordInput.value).toBe("");
  });

  test("Non clearable password input has no clear icon", async () => {
    const { getAllByRole, getByRole, user } = setup(<DxcPasswordInput label="Password input" />);
    const passwordInput = getByRole("textbox");
    await user.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  test("Show/hide password input button works correctly", async () => {
    const { getAllByRole, getByRole, user } = setup(<DxcPasswordInput label="Password input" clearable />);
    const passwordInput = getByRole("textbox");
    await user.type(passwordInput, "Pa$$w0rd");
    expect(passwordInput.value).toBe("Pa$$w0rd");
    expect(passwordInput.type).toBe("password");
    const showButton = getAllByRole("button")[1];
    await user.click(showButton);
    expect(passwordInput.type).toBe("text");
  });

  test("Password tooltip is correct", async () => {
    const { getAllByRole, getByTitle, queryByTitle, user } = setup(
      <DxcPasswordInput label="Password input" clearable value="Password" />
    );
    const showButton = getAllByRole("button")[1];
    await user.hover(showButton);
    expect(getByTitle("Show password")).toBeTruthy();
    await user.unhover(showButton);
    expect(queryByTitle("Hide password")).toBeFalsy();
  });

  test("Password input has correct accesibility attributes", async () => {
    const { getByRole, user } = setup(<DxcPasswordInput label="Password input" />);
    const passwordInput = getByRole("textbox");
    expect(passwordInput.getAttribute("aria-autocomplete")).toBeNull();
    expect(passwordInput.getAttribute("aria-controls")).toBeNull();
    expect(passwordInput.getAttribute("aria-expanded")).toBeNull();
    const showButton = getByRole("button");
    expect(showButton.getAttribute("aria-label")).toBe("Show password");
    await user.click(showButton);
    expect(showButton.getAttribute("aria-label")).toBe("Hide password");
  });
});
