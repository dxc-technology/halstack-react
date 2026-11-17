import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HalstackProvider } from "../HalstackContext";
import MockDOMRect from "../../test/mocks/domRectMock";
import AmountInput from "./AmountInput";

global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Amount input component", () => {
  test("renders its label, helper text, and placeholder", () => {
    const { getByLabelText, getByText } = render(
      <AmountInput label="Amount" helperText="Enter an amount" placeholder="Amount placeholder" />
    );
    const input = getByLabelText("Amount") as HTMLInputElement;

    expect(getByText("Enter an amount")).toBeTruthy();
    expect(input.placeholder).toBe("Amount placeholder");
  });

  test("formats a default value as currency", () => {
    const { getByLabelText } = render(
      <HalstackProvider localeTag="en-US">
        <AmountInput label="Amount" defaultValue="1234.5" config={{ currencyConfig: { currency: "USD" } }} />
      </HalstackProvider>
    );

    expect((getByLabelText("Amount") as HTMLInputElement).value).toBe("$1,234.50");
  });

  test("sanitizes input and formats the value on blur", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <HalstackProvider localeTag="en-US">
        <AmountInput label="Amount" onChange={onChange} onBlur={onBlur} />
      </HalstackProvider>
    );
    const input = getByLabelText("Amount") as HTMLInputElement;

    await user.type(input, "1234.5");
    expect(onChange).toHaveBeenLastCalledWith({ value: "1234.5", error: undefined });
    expect(input.value).toBe("1234.5");

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenLastCalledWith({ value: "1,234.5", error: undefined });
    expect(input.value).toBe("1,234.5");
  });

  test("reports an error when the value exceeds the maximum", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <HalstackProvider localeTag="en-US">
        <AmountInput label="Amount" maxValue={10} onChange={onChange} />
      </HalstackProvider>
    );

    await user.type(getByLabelText("Amount"), "121234.34");
    expect(onChange).toHaveBeenLastCalledWith({
      value: "121234.34",
      error: "Value must be less than or equal to 10.",
    });
  });
});
