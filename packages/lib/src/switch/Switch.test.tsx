import { fireEvent, render } from "@testing-library/react";
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
  test("Calls correct function on key down", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    fireEvent.focus(getByText("SwitchComponent"));
    fireEvent.keyDown(getByText("SwitchComponent"), { key: "Enter" });
    expect(onChange).toHaveBeenCalled();
    fireEvent.keyDown(getByText("SwitchComponent"), { key: " " });
    expect(onChange).toHaveBeenCalled();
  });
  test("Every time the user clicks the component the onchange function is called with the correct value CONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    fireEvent.click(getByText("SwitchComponent"));
    fireEvent.click(getByText("SwitchComponent"));

    const firstCall = onChange.mock.calls[0] as [boolean];
    const secondCall = onChange.mock.calls[1] as [boolean];

    expect(firstCall[0]).toBe(true);
    expect(secondCall[0]).toBe(true);
  });
  test("Every time the user use enter in the component, the onchange function is called with the correct value CONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    fireEvent.focus(getByText("SwitchComponent"));
    fireEvent.keyDown(getByText("SwitchComponent"), { key: "Enter" });
    fireEvent.keyDown(getByText("SwitchComponent"), { key: "Enter" });

    const firstCall = onChange.mock.calls[0] as [boolean];
    const secondCall = onChange.mock.calls[1] as [boolean];

    expect(firstCall[0]).toBe(true);
    expect(secondCall[0]).toBe(true);
  });
  test("Every time the user use space in the component, the onchange function is called with the correct value CONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" checked={false} onChange={onChange} />);
    fireEvent.focus(getByText("SwitchComponent"));
    fireEvent.keyDown(getByText("SwitchComponent"), { key: " " });
    fireEvent.keyDown(getByText("SwitchComponent"), { key: " " });

    const firstCall = onChange.mock.calls[0] as [boolean];
    const secondCall = onChange.mock.calls[1] as [boolean];

    expect(firstCall[0]).toBe(true);
    expect(secondCall[0]).toBe(true);
  });
  test("Every time the user clicks the component the onchange function is called with the correct value UNCONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" onChange={onChange} />);
    fireEvent.click(getByText("SwitchComponent"));
    fireEvent.click(getByText("SwitchComponent"));

    const firstCall = onChange.mock.calls[0] as [boolean];
    const secondCall = onChange.mock.calls[1] as [boolean];

    expect(firstCall[0]).toBe(true);
    expect(secondCall[0]).toBe(false);
  });
  test("Every time the user use enter in the component, the onchange function is called with the correct value UNCONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" onChange={onChange} />);
    fireEvent.focus(getByText("SwitchComponent"));
    fireEvent.keyDown(getByText("SwitchComponent"), { key: "Enter" });
    fireEvent.keyDown(getByText("SwitchComponent"), { key: "Enter" });

    const firstCall = onChange.mock.calls[0] as [boolean];
    const secondCall = onChange.mock.calls[1] as [boolean];

    expect(firstCall[0]).toBe(true);
    expect(secondCall[0]).toBe(false);
  });
  test("Every time the user use space in the component, the onchange function is called with the correct value UNCONTROLLED COMPONENT", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcSwitch label="SwitchComponent" onChange={onChange} />);
    fireEvent.focus(getByText("SwitchComponent"));
    fireEvent.keyDown(getByText("SwitchComponent"), { key: " " });
    fireEvent.keyDown(getByText("SwitchComponent"), { key: " " });

    const firstCall = onChange.mock.calls[0] as [boolean];
    const secondCall = onChange.mock.calls[1] as [boolean];

    expect(firstCall[0]).toBe(true);
    expect(secondCall[0]).toBe(false);
  });
  test("Renders with correct initial value and initial state when it is uncontrolled", () => {
    const component = render(
      <DxcSwitch label="Default label" defaultChecked value="test-defaultChecked" name="test" />
    );
    const switchEl = component.getByRole("switch");
    const inputEl = component.container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(inputEl?.value).toBe("test-defaultChecked");
    expect(switchEl.getAttribute("aria-checked")).toBe("true");
  });
  test("Renders with correct aria attributes", () => {
    const { getByRole } = render(<DxcSwitch label="Default label" />);
    const switchEl = getByRole("switch");
    expect(switchEl.getAttribute("aria-checked")).toBe("false");
    expect(switchEl.getAttribute("aria-label")).toBeNull();
    expect(switchEl.getAttribute("aria-disabled")).toBeNull();
  });
  test("Renders with correct aria-label", () => {
    const { getByRole } = render(<DxcSwitch ariaLabel="Example aria label" />);
    const switchEl = getByRole("switch");
    expect(switchEl.getAttribute("aria-label")).toBe("Example aria label");
  });
  test("Renders disabled switch correctly", () => {
    const { getByRole } = render(<DxcSwitch label="Default label" disabled />);
    const switchEl = getByRole("switch");
    expect(switchEl.getAttribute("aria-checked")).toBe("false");
    expect(switchEl.getAttribute("aria-label")).toBeNull();
    expect(switchEl.getAttribute("aria-disabled")).toBe("true");
  });
});
