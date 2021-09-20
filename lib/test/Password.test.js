import React from "react";
import { render } from "@testing-library/react";
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
    const { getByText } = render(<DxcPassword error="Error message" />);
    expect(getByText("Error message")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcPassword label="Password" onChange={onChange} />);
    const password = getByLabelText("Password");
    userEvent.type(password, "Pa$$w0rd");
    expect(onChange).toHaveBeenCalledWith({ value: "P" });
    expect(password.value).toBe("Pa$$w0rd");
  });

  test("Clear password value", () => {
    const onChange = jest.fn();
    const { getAllByRole, getByLabelText } = render(<DxcPassword label="Password" onChange={onChange} clearable />);
    const password = getByLabelText("Password");
    userEvent.type(password, "Pa$$w0rd");
    expect(password.value).toBe("Pa$$w0rd");
    const clearButton = getAllByRole("button")[0];
    userEvent.click(clearButton);
    expect(password.value).toBe("");
  });

  test("Non clearable password has no clear icon", () => {
    const onChange = jest.fn();
    const { getAllByRole, getByLabelText } = render(<DxcPassword label="Password" onChange={onChange} />);
    const password = getByLabelText("Password");
    userEvent.type(password, "Pa$$w0rd");
    expect(password.value).toBe("Pa$$w0rd");
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(1);
  });

  test("Show/hide password button works correctly", () => {
    const onChange = jest.fn();
    const { getAllByRole, getByLabelText } = render(<DxcPassword label="Password" clearable onChange={onChange} />);
    const password = getByLabelText("Password");
    userEvent.type(password, "Pa$$w0rd");
    expect(password.value).toBe("Pa$$w0rd");
    expect(password.type).toBe("password");
    const showButton = getAllByRole("button")[1];
    userEvent.click(showButton);
    expect(password.type).toBe("text");
  });
});
