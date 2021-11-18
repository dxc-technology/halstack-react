import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcPassword from "../src/password/Password";

describe("Password component tests", () => {
  test("Password renders with label", () => {
    const { getByText } = render(<DxcPassword label="Password label" />);
    expect(getByText("Password label")).toBeTruthy();
  });

  test("Password renders with helper text", () => {
    const { getByText } = render(<DxcPassword helperText="Helper text" />);
    expect(getByText("Helper text")).toBeTruthy();
  });

  test("Password renders error", () => {
    const { getByText } = render(<DxcPassword error="Error message." />);
    expect(getByText("Error message.")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcPassword label="Password" onChange={onChange} />);
    const password = getByRole("textbox");
    userEvent.type(password, "Pa$$w0rd");
    expect(onChange).toHaveBeenCalledWith({ value: "P", error: null });
    expect(password.value).toBe("Pa$$w0rd");
  });

  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcPassword label="Password" onBlur={onBlur} />);
    const password = getByRole("textbox");
    userEvent.type(password, "Pa$$w0rd");    
    fireEvent.blur(password);
    expect(onBlur).toHaveBeenCalledWith({ value: "Pa$$w0rd", error: null });
    expect(password.value).toBe("Pa$$w0rd");
  });

  test("Clear password value", () => {
    const { getAllByRole, getByRole } = render(<DxcPassword label="Password" clearable />);
    const password = getByRole("textbox");
    userEvent.type(password, "Pa$$w0rd");
    expect(password.value).toBe("Pa$$w0rd");
    const clearButton = getAllByRole("button")[0];
    userEvent.click(clearButton);
    expect(password.value).toBe("");
  });

  test("Non clearable password has no clear icon", () => {
    const { getAllByRole, getByRole } = render(<DxcPassword label="Password" />);
    const password = getByRole("textbox");
    userEvent.type(password, "Pa$$w0rd");
    expect(password.value).toBe("Pa$$w0rd");
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  test("Show/hide password button works correctly", () => {
    const { getAllByRole, getByRole } = render(<DxcPassword label="Password" clearable />);
    const password = getByRole("textbox");
    userEvent.type(password, "Pa$$w0rd");
    expect(password.value).toBe("Pa$$w0rd");
    expect(password.type).toBe("password");
    const showButton = getAllByRole("button")[1];
    userEvent.click(showButton);
    expect(password.type).toBe("text");
  });

  test("Password has correct accesibility attributes", () => {
    const { getByRole } = render(<DxcPassword label="Password" />);
    const password = getByRole("textbox");
    expect(password.getAttribute("aria-autocomplete")).toBeNull();
    expect(password.getAttribute("aria-controls")).toBeNull();
    const showButton = getByRole("button");
    expect(showButton.getAttribute("aria-expanded")).toBe("false");
    expect(showButton.getAttribute("aria-label")).toBe("Show");
    userEvent.click(showButton);
    expect(showButton.getAttribute("aria-expanded")).toBe("true");
    expect(showButton.getAttribute("aria-label")).toBe("Hide");
  });
});
