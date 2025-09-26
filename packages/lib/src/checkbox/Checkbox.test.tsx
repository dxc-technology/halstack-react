import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcCheckbox from "./Checkbox";

describe("Checkbox component tests", () => {
  test("Checkbox renders with correct aria-labelledby and aria-required", () => {
    const { getByText, getByRole } = render(<DxcCheckbox label="Checkbox" />);
    const labelId = getByText("Checkbox").getAttribute("id");
    expect(getByRole("checkbox").getAttribute("aria-labelledby")).toBe(labelId);
    expect(getByRole("checkbox").getAttribute("aria-required")).toBe("true");
    expect(getByRole("checkbox").getAttribute("aria-readonly")).toBe("false");
    expect(getByRole("checkbox").getAttribute("aria-disabled")).toBe("false");
    expect(getByRole("checkbox").getAttribute("aria-label")).toBeNull();
  });
  test("Renders with correct aria-label", () => {
    const { getByRole } = render(<DxcCheckbox ariaLabel="Example aria label" />);
    const checkbox = getByRole("checkbox");
    expect(checkbox.getAttribute("aria-label")).toBe("Example aria label");
  });
  test("Optional checkbox renders with correct aria-required", () => {
    const { getByRole } = render(<DxcCheckbox label="Checkbox" optional />);
    expect(getByRole("checkbox").getAttribute("aria-required")).toBe("false");
  });
  test("Calls correct function onChange", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcCheckbox label="Checkbox" onChange={onChange} />);
    fireEvent.click(getByText("Checkbox"));
    expect(onChange).toHaveBeenCalled();
  });
  test("Read-only checkbox does not trigger onChange function", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcCheckbox label="Checkbox" onChange={onChange} readOnly />);
    const checkbox = getByRole("checkbox");
    expect(checkbox.getAttribute("aria-readonly")).toBe("true");
    fireEvent.click(checkbox);
    expect(onChange).not.toHaveBeenCalled();
  });
  test("Read-only checkbox sends its value on submit", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ data: "checked" });
    });
    const { getByText } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcCheckbox label="Checkbox" name="data" value="checked" readOnly defaultChecked />
        <button type="submit">Submit</button>
      </form>
    );
    const submit = getByText("Submit");
    userEvent.click(submit);
    expect(handlerOnSubmit).toHaveBeenCalled();
  });
  test("Read-only checkbox doesn't change its value with Space key", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcCheckbox label="Checkbox" onChange={onChange} readOnly />);
    const checkbox = getByRole("checkbox");
    userEvent.tab();
    expect(document.activeElement === checkbox).toBeTruthy();
    fireEvent.keyDown(checkbox, {
      key: " ",
      code: "Space",
      keyCode: 32,
      charCode: 32,
    });
    expect(onChange).not.toHaveBeenCalled();
  });
  test("Uncontrolled checkbox", () => {
    const onChange = jest.fn();
    const component = render(<DxcCheckbox label="Checkbox" onChange={onChange} name="test" />);
    const visibleCheckbox = component.getByText("Checkbox");
    const input = component.getByRole("checkbox");
    const submitInput = component.container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(input.getAttribute("aria-checked")).toBe("false");
    expect(submitInput?.checked).toBe(false);
    fireEvent.click(visibleCheckbox);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(true);
    expect(input.getAttribute("aria-checked")).toBe("true");
    expect(submitInput?.checked).toBe(true);
  });
  test("Controlled checkbox", () => {
    const onChange = jest.fn();
    const component = render(<DxcCheckbox label="Checkbox" checked={false} onChange={onChange} name="test" />);
    const input = component.getByRole("checkbox");
    const visibleCheckbox = component.getByText("Checkbox");
    const submitInput = component.container.querySelector<HTMLInputElement>(`input[name="test"]`);
    fireEvent.click(visibleCheckbox);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(true);
    expect(input.getAttribute("aria-checked")).toBe("false");
    expect(submitInput?.checked).toBe(false);
  });
  test("Renders with correct initial value and initial state when it is uncontrolled", () => {
    const { getByRole, container } = render(
      <DxcCheckbox label="Default label" defaultChecked value="test-defaultChecked" name="test" />
    );
    const checkbox = getByRole("checkbox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(submitInput?.value).toBe("test-defaultChecked");
    expect(checkbox.getAttribute("aria-checked")).toBe("true");
    expect(submitInput?.checked).toBe(true);
  });
  test("Disable keyboard and mouse interactions", () => {
    const onChange = jest.fn();
    const { getByRole, getByText, container } = render(
      <DxcCheckbox label="Checkbox" onChange={onChange} disabled name="test" />
    );
    const input = getByRole("checkbox");
    const visibleCheckbox = getByText("Checkbox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    fireEvent.click(visibleCheckbox);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(input.getAttribute("aria-checked")).toBe("false");
    expect(input.getAttribute("aria-disabled")).toBe("true");
    expect(submitInput?.checked).toBe(false);
    userEvent.tab();
    expect(document.activeElement === input).toBeFalsy();
  });
  test("Keyboard interactions", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcCheckbox label="Checkbox" name="test" onChange={onChange} />);
    const checkbox = getByRole("checkbox");
    userEvent.tab();
    expect(document.activeElement === checkbox).toBeTruthy();
    fireEvent.keyDown(checkbox, {
      key: " ",
      code: "Space",
      keyCode: 32,
      charCode: 32,
    });
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
