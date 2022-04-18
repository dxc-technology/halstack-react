import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcSwitch from "./Switch";

describe("Switch component tests", () => {
  test("Switch renders with correct text", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue).toBe(true);
    });
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    expect(getByText("SwitchComponent")).toBeTruthy();
  });
  test("Calls correct function on click", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    fireEvent.click(getByText("SwitchComponent"));
    expect(onChange).toHaveBeenCalled();
  });
  test("Everytime the user clicks the component the onchange function is called with the correct value CONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    fireEvent.click(getByText("SwitchComponent"));
    fireEvent.click(getByText("SwitchComponent"));
    expect(onChange.mock.calls[0][0]).toBe(true);
    expect(onChange.mock.calls[1][0]).toBe(true);
  });
  test("Everytime the user clicks the component the onchange function is called with the correct value UNCONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" onChange={onChange} />);
    fireEvent.click(getByText("SwitchComponent"));
    fireEvent.click(getByText("SwitchComponent"));
    expect(onChange.mock.calls[0][0]).toBe(true);
    expect(onChange.mock.calls[1][0]).toBe(false);
  });
  test("Renders with correct initial value and initial state when it is uncontrolled", () => {
    const { getByRole } = render(
      <DxcSwitch label="Default label" defaultChecked value="test-defaultChecked" />
    );
    const inputEl = getByRole("switch");
    expect(inputEl.checked).toBe(true);
    expect(inputEl.value).toBe("test-defaultChecked");
    expect(inputEl.getAttribute("aria-checked")).toBe("true");
  });
  test("Renders with correct aria attributes", () => {
    const { getByRole, getByText } = render(
      <DxcSwitch label="Default label" />
    );
    const inputEl = getByRole("switch");
    const label = getByText("Default label");
    expect(inputEl.getAttribute("aria-labelledby")).toBe(label.id);
    expect(inputEl.getAttribute("aria-checked")).toBe("false");
  });
});
