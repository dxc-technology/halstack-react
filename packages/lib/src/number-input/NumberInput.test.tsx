import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcNumberInput from "./NumberInput";

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Number input component tests", () => {
  test("Number input renders with label, helper text, placeholder and increment/decrement action buttons", () => {
    const { getByLabelText, getByText, queryAllByRole } = render(
      <DxcNumberInput label="Number input label" helperText="Helper text" placeholder="Placeholder" />
    );
    const number = getByLabelText("Number input label");
    expect(getByText("Number input label")).toBeTruthy();
    expect(getByText("Helper text")).toBeTruthy();
    expect(number.getAttribute("placeholder")).toBe("Placeholder");
    expect(queryAllByRole("button").length).toBe(2);
  });
  test("Number input is disabled", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number label" disabled />);
    const number = getByLabelText("Number label") as HTMLInputElement;
    expect(number.disabled).toBeTruthy();
  });
  test("Number input is read only and cannot be incremented or decremented using the actions", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number label" readOnly />);
    const number = getByLabelText("Number label") as HTMLInputElement;
    expect(number.readOnly).toBeTruthy();
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("");
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("");
  });
  test("Number input is read only and cannot be incremented or decremented using the arrow keys", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number label" readOnly />);
    const number = getByLabelText("Number label") as HTMLInputElement;
    expect(number.readOnly).toBeTruthy();
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("");
  });
  test("Number input is optional", () => {
    const { getByText } = render(<DxcNumberInput label="Number label" optional />);
    expect(getByText("(Optional)")).toBeTruthy();
  });
  test("Number input is not optional: required field, displays error if not filled in", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DxcNumberInput label="Number input label" onBlur={onBlur} onChange={onChange} />
    );
    const number = getByLabelText("Number input label");
    userEvent.type(number, "1");
    userEvent.clear(number);
    fireEvent.blur(number);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
  });
  test("Hiding number input controls", () => {
    const { queryByRole } = render(<DxcNumberInput label="Number label" showControls={false} />);
    expect(queryByRole("button")).toBeFalsy();
  });
  test("Suffix and prefix must be shown", () => {
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
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "t");
    expect(onChange).not.toHaveBeenCalledWith({ value: "t" });
    expect(number.value).toBe("");
    userEvent.type(number, "1");
    expect(onChange).toHaveBeenCalledWith({ value: "1" });
    expect(number.value).toBe("1");
  });
  test("Error message is shown if the typed value is less than the min value", () => {
    const onChange = jest.fn(({ value, error }) => {
      expect(value).toBe("-1");
      expect(error).toBe("Value must be greater than or equal to 0.");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("-1");
      expect(error).toBe("Value must be greater than or equal to 0.");
    });
    const { getByLabelText } = render(
      <DxcNumberInput label="Number input label" min={0} onBlur={onBlur} onChange={onChange} />
    );
    const number = getByLabelText("Number input label");
    userEvent.type(number, "-1");
    fireEvent.blur(number);
  });
  test("Cannot decrement the value if it is less than the min value", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" min={5} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(number.value).toBe("1");
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("1");
  });
  test("Increment the value when it is less than the min value", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" min={5} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(number.value).toBe("1");
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("5");
  });
  test("Error message is shown if the typed value is greater than the max value", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcNumberInput label="Number input label" max={10} onBlur={onBlur} onChange={onChange} />
    );
    const number = getByLabelText("Number input label");
    userEvent.type(number, "12");
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith({
      value: "12",
      error: "Value must be less than or equal to 10.",
    });
    fireEvent.blur(number);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "12",
      error: "Value must be less than or equal to 10.",
    });
  });
  test("Cannot increment the value if it is greater than the max value", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" max={10} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "12");
    fireEvent.blur(number);
    expect(number.value).toBe("12");
    const decrement = getAllByRole("button")[1];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("12");
  });
  test("Decrement the value when it is greater than the max value", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" max={10} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "120");
    fireEvent.blur(number);
    expect(number.value).toBe("120");
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("10");
  });
  test("Increment and decrement the value with min and max values", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" min={5} max={10} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(number.value).toBe("1");
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("1");
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("5");
    if (increment) {
      userEvent.click(increment);
      userEvent.click(increment);
      userEvent.click(increment);
      userEvent.click(increment);
      userEvent.click(increment);
    }
    expect(number.value).toBe("10");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("10");
  });
  test("Increment and decrement the value with an integer step", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" step={5} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "10");
    fireEvent.blur(number);
    expect(number.value).toBe("10");
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("15");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("20");
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("15");
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("10");
  });
  test("Increment and decrement the value with a decimal step", async () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" step={0.5} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "-9");
    fireEvent.blur(number);
    expect(number.value).toBe("-9");
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("-8.5");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("-8");
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
      userEvent.click(decrement);
      userEvent.click(decrement);
    }
    expect(number.value).toBe("-9.5");
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("-10");
  });
  test("Increment and decrement the value with min, max and step", async () => {
    const onBlur = jest.fn();
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={5} max={20} step={8} onBlur={onBlur} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "1");
    fireEvent.blur(number);
    expect(onBlur).toHaveBeenCalledWith({
      value: "1",
      error: "Value must be greater than or equal to 5.",
    });
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("5");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("13");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("13");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("13");
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("5");
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("5");
    if (decrement) {
      userEvent.click(decrement);
    }
  });
  test("Start incrementing from 0 when the min value is less than 0 and the max value is bigger than 0", async () => {
    const onBlur = jest.fn();
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={-10} max={10} step={1} onBlur={onBlur} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("1");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("2");
  });
  test("Start incrementing from 0 when the min value is less than 0 and the max is 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={-10} max={0} step={1} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("0");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("0");
  });
  test("Start incrementing from the min value when it is bigger than 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={2} max={10} step={0.5} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("2");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("2.5");
  });
  test("Start incrementing from the max value when it is less than 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={-10} max={-1} step={0.5} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const increment = getAllByRole("button")[1];
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("-1");
    if (increment) {
      userEvent.click(increment);
    }
    expect(number.value).toBe("-1");
  });
  test("Start decrementing from 0 when the min value is less than 0 and the max value is bigger than 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={-10} max={10} step={1} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("-1");
  });
  test("Start decrementing from 0 when the min value is 0 and the max value is bigger than 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={0} max={10} step={1} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("0");
  });
  test("Start decrementing from the min value when it is bigger than 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={2} max={10} step={0.5} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("2");
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("2");
  });
  test("Start decrementing from the max value when it is less than 0", async () => {
    const { getByLabelText, getAllByRole } = render(
      <DxcNumberInput label="Number input label" min={-10} max={-1} step={0.5} />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    const decrement = getAllByRole("button")[0];
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("-1");
    if (decrement) {
      userEvent.click(decrement);
    }
    expect(number.value).toBe("-1.5");
  });
  test("Increment and decrement the value with min, max and step using the arrows in keyboard", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number input label" min={5} max={20} step={5} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
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
  test("Value is unchanged when using the scroll wheel in mouse in a disabled input", () => {
    const { getByLabelText } = render(
      <DxcNumberInput disabled label="Number input label" min={5} max={20} step={5} defaultValue="10" />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("10");
  });
  test("Value is unchanged when using the arrows in keyboard in a disabled input", () => {
    const { getByLabelText } = render(
      <DxcNumberInput disabled label="Number input label" min={5} max={20} step={5} defaultValue="10" />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("10");
  });
  test("Value is unchanged when using the scroll wheel in mouse in a read-only input", () => {
    const { getByLabelText } = render(
      <DxcNumberInput readOnly label="Number input label" min={5} max={20} step={5} defaultValue="10" />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("10");
  });
  test("Value is unchanged when using the arrows in keyboard in a read-only input", () => {
    const { getByLabelText } = render(
      <DxcNumberInput readOnly label="Number input label" min={5} max={20} step={5} defaultValue="10" />
    );
    const number = getByLabelText("Number input label") as HTMLInputElement;
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 38 });
    expect(number.value).toBe("10");
    fireEvent.keyDown(number, { keyCode: 40 });
    expect(number.value).toBe("10");
  });
  test("Increment and decrement the value with min, max and step using the scroll wheel in mouse", () => {
    const { getByLabelText } = render(<DxcNumberInput label="Number input label" min={5} max={20} step={5} />);
    const number = getByLabelText("Number input label") as HTMLInputElement;
    userEvent.type(number, "1");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("5");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("15");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("20");
    fireEvent.wheel(number, { deltaY: -100 });
    expect(number.value).toBe("20");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("15");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("10");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("5");
    fireEvent.wheel(number, { deltaY: 100 });
    expect(number.value).toBe("5");
  });
  test("Number has correct accessibility attributes", () => {
    const { getByLabelText, getAllByRole } = render(<DxcNumberInput label="Number input label" />);
    const number = getByLabelText("Number input label");
    expect(number.getAttribute("type")).toBe("number");
    expect(number.getAttribute("aria-autocomplete")).toBeNull();
    expect(number.getAttribute("aria-controls")).toBeNull();
    expect(number.getAttribute("aria-expanded")).toBeNull();
    const decrement = getAllByRole("button")[0];
    expect(decrement?.getAttribute("aria-label")).toBe("Decrement value");
    const increment = getAllByRole("button")[1];
    expect(increment?.getAttribute("aria-label")).toBe("Increment value");
  });
  test("Number input submits correct values inside a form and actions don't trigger the submit event", async () => {
    const handlerOnSubmit = jest.fn((e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ data: "0" });
    });
    const { getByText, getAllByRole } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcNumberInput label="Number input label" name="data" />
        <button type="submit">Submit</button>
      </form>
    );
    const less = getAllByRole("button")[0];
    const more = getAllByRole("button")[1];
    const submit = getByText("Submit");
    if (more) {
      userEvent.click(more);
    }
    expect(handlerOnSubmit).not.toHaveBeenCalled();
    if (less) {
      userEvent.click(less);
    }
    expect(handlerOnSubmit).not.toHaveBeenCalled();
    if (submit) {
      userEvent.click(submit);
    }
    expect(handlerOnSubmit).toHaveBeenCalled();
  });
});
