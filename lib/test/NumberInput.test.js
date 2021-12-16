import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcNumberInput from "../src/number-input/NumberInput";

describe("Number input component tests", () => {
  test("Number input renders with label", () => {
    const { getByText } = render(<DxcNumberInput label="Number input label" />);
    expect(getByText("Number input label")).toBeTruthy();
  });

  test("Number input renders with helper text", () => {
    const { getByText } = render(<DxcNumberInput helperText="Helper text" />);
    expect(getByText("Helper text")).toBeTruthy();
  });

  test("Number input renders with placeholder", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number label" placeholder="Placeholder" />);
    const number = getByLabelText("Number label");
    expect(number.getAttribute("placeholder")).toBe("Placeholder");
  });

  test("Number input renders increment and decrement buttons", () => {
    const { queryAllByRole } = render(<DxcNumberInput label="Number label" />);
    expect(queryAllByRole("button").length).toBe(2);
  });

  test("Number input is disabled", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number label" disabled />);
    const number = getByLabelText("Number label");
    expect(number.disabled).toBeTruthy();
  });

  test("Number input is optional", () => {
    const { getByText } = render(<DxcNumberInput label="Number label" optional />);
    expect(getByText("(Optional)")).toBeTruthy();
  });

  test("Number input is not optional: required field, displays error if not filled in", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcNumberInput onBlur={onBlur} onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "1");
    userEvent.clear(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
  });

  test("Suffix and prefix must be shown)", () => {
    const { getByText } = render(<DxcNumberInput label="Number input label" prefix="+34" suffix="USD" />);
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });

  test("Invalid number input renders error", () => {
    const { getByText } = render(<DxcNumberInput error="Error message." />);
    expect(getByText("Error message.")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcNumberInput label="Number input label" onChange={onChange} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "t");
    expect(onChange).not.toHaveBeenCalledWith({ value: "t", error: null });
    expect(number.value).toBe("");
    userEvent.type(number, "1");
    expect(onChange).toHaveBeenCalledWith({ value: "1", error: null });
    expect(number.value).toBe("1");
  });

  test("Error message is shown if the value is less than the min value", () => {
    const onChange = jest.fn(({ value, error }) => {
      expect(value).toBe("1");
      expect(error).toBe("Value must be greater than or equal to 5.");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("1");
      expect(error).toBe("Value must be greater than or equal to 5.");
    });
    const { getByLabelText } = render(
      <DxcNumberInput label="Number input label" min={5} onBlur={onBlur} onChange={onChange} />
    );
    const number = getByLabelText("Number input label");

    userEvent.type(number, "1");
    fireEvent.blur(number);
  });

  test("Cannot decrement the value if it is less than the min value", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" min={5} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(number.value).toBe("1");
    const decrement = getAllByRole("button")[0];
    userEvent.click(decrement);
    expect(number.value).toBe("1");
  });

  test("Increment the value when it is less than the min value", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" min={5} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(number.value).toBe("1");
    const increment = getAllByRole("button")[1];
    userEvent.click(increment);
    expect(number.value).toBe("5");
  });

  test("Error message is shown if the value is greater than the max value", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcNumberInput label="Number input label" max={10} onBlur={onBlur} onChange={onChange} />
    );
    const number = getByLabelText("Number input label");

    userEvent.type(number, "12");
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith({ value: "12", error: "Value must be less than or equal to 10." });
    fireEvent.blur(number);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "12", error: "Value must be less than or equal to 10." });
  });

  test("Cannot increment the value if it is greater than the max value", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" max={10} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "12");
    fireEvent.blur(number);
    expect(number.value).toBe("12");
    const decrement = getAllByRole("button")[1];
    userEvent.click(decrement);
    expect(number.value).toBe("12");
  });

  test("Decrement the value when it is greater than the max value", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" max={10} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "12");
    fireEvent.blur(number);
    expect(number.value).toBe("12");
    const decrement = getAllByRole("button")[0];
    userEvent.click(decrement);
    expect(number.value).toBe("10");
  });

  test("Increment and decrement the value with min and max values", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" min={5} max={10} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(number.value).toBe("1");
    const decrement = getAllByRole("button")[0];
    userEvent.click(decrement);
    expect(number.value).toBe("1");
    const increment = getAllByRole("button")[1];
    userEvent.click(increment);
    expect(number.value).toBe("5");
    userEvent.click(increment);
    userEvent.click(increment);
    userEvent.click(increment);
    userEvent.click(increment);
    userEvent.click(increment);
    expect(number.value).toBe("10");
    userEvent.click(increment);
    expect(number.value).toBe("10");
  });

  test("Increment and decrement the value with step", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" step={5} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "10");
    fireEvent.blur(number);
    expect(number.value).toBe("10");
    const increment = getAllByRole("button")[1];
    userEvent.click(increment);
    expect(number.value).toBe("15");
    userEvent.click(increment);
    expect(number.value).toBe("20");
    const decrement = getAllByRole("button")[0];
    userEvent.click(decrement);
    expect(number.value).toBe("15");
    userEvent.click(decrement);
    expect(number.value).toBe("10");
  });

  test("Increment and decrement the value with min, max and step", () => {
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("1");
      expect(error).toBe("Value must be greater than or equal to 5.");
    });
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={5} max={20} step={8} onBlur={onBlur} />
    );
    const number = getByLabelText("Number input label");
    userEvent.type(number, "1");
    fireEvent.blur(number);
    const increment = getAllByRole("button")[1];
    userEvent.click(increment);
    expect(number.value).toBe("5");
    userEvent.click(increment);
    expect(number.value).toBe("13");
    userEvent.click(increment);
    expect(number.value).toBe("20");
    userEvent.click(increment);
    expect(number.value).toBe("20");
    const decrement = getAllByRole("button")[0];
    userEvent.click(decrement);
    expect(number.value).toBe("12");
    userEvent.click(decrement);
    expect(number.value).toBe("5");
    userEvent.click(decrement);
    expect(number.value).toBe("5");
  });

  test("Increment and decrement the value with min, max and step using the arrows in keyboard", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number input label" min={5} max={20} step={5} />);
    const number = getByLabelText("Number input label");
    userEvent.type(number, "1");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("5");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("15");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("20");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("20");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("15");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("5");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("5");
  });

  test("Number has correct accesibility attributes", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" />);
    const number = getByLabelText("Number input label");
    expect(number.getAttribute("aria-autocomplete")).toBeNull();
    expect(number.getAttribute("aria-controls")).toBeNull();
    expect(number.getAttribute("aria-expanded")).toBeNull();
    const decrement = getAllByRole("button")[0];
    expect(decrement.getAttribute("aria-label")).toBe("Decrement");
    const increment = getAllByRole("button")[1];
    expect(increment.getAttribute("aria-label")).toBe("Increment");
  });
});
