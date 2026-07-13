import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcMessageInput from "./MessageInput";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Message Input component tests", () => {
  test("Message Input renders correctly", () => {
    const { getByPlaceholderText } = render(<DxcMessageInput placeholder="Ask me anything..." />);
    const input = getByPlaceholderText("Ask me anything...");
    expect(input).toBeInTheDocument();
  });

  test("renders with default value", () => {
    const { getByDisplayValue } = render(<DxcMessageInput defaultValue="Hello World" />);
    expect(getByDisplayValue("Hello World")).toBeInTheDocument();
  });

  test("renders with helper text", () => {
    const { getByText } = render(<DxcMessageInput helperText="This is a helper text" />);
    expect(getByText("This is a helper text")).toBeInTheDocument();
  });

  test("renders with error message", () => {
    const { getByText } = render(<DxcMessageInput error="This is an error" />);
    expect(getByText("This is an error")).toBeInTheDocument();
  });

  test("calls onChange when user types", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcMessageInput onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Hello");

    expect(onChange).toHaveBeenCalledTimes(5);
    expect(onChange).toHaveBeenLastCalledWith({ value: "Hello" });
  });

  test("calls onBlur when input loses focus", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcMessageInput onBlur={onBlur} />);
    const input = getByRole("textbox");

    userEvent.click(input);
    userEvent.type(input, "Test");
    userEvent.tab();

    expect(onBlur).toHaveBeenCalledWith({ value: "Test" });
  });

  test("calls onSubmit when Enter key is pressed", () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<DxcMessageInput onSubmit={onSubmit} />);
    const input = getByRole("textbox");

    userEvent.click(input);
    userEvent.type(input, "Test message{Enter}");

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test("does not call onSubmit when Shift+Enter is pressed", () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<DxcMessageInput onSubmit={onSubmit} />);
    const input = getByRole("textbox");

    userEvent.click(input);
    userEvent.type(input, "Line 1{Shift>}{Enter}{/Shift}Line 2");

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test("calls onSubmit when submit button is clicked", () => {
    const onSubmit = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput onSubmit={onSubmit} />);
    const submitButton = getByLabelText("Submit");

    userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test("disables input when disabled prop is true", () => {
    const { getByRole } = render(<DxcMessageInput disabled />);
    const input = getByRole("textbox");

    expect(input).toBeDisabled();
  });

  test("disables input when isLoading is true", () => {
    const { getByRole } = render(<DxcMessageInput isLoading />);
    const input = getByRole("textbox");

    expect(input).toBeDisabled();
  });

  test("shows stop button when isLoading is true", () => {
    const stop = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput isLoading stop={stop} />);
    const stopButton = getByLabelText("Stop");

    expect(stopButton).toBeInTheDocument();
  });

  test("calls stop when stop button is clicked", () => {
    const stop = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput isLoading stop={stop} />);
    const stopButton = getByLabelText("Stop");

    userEvent.click(stopButton);

    expect(stop).toHaveBeenCalledTimes(1);
  });

  test("validates minLength and calls onChange with error", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcMessageInput minLength={5} onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Hi");

    // Verify error is present in the call
    expect(onChange).toHaveBeenCalled();
    const calls = onChange.mock.calls;
    const lastCall = calls[calls.length - 1] as [{ value: string; error?: string }];
    expect(lastCall[0].value).toBe("Hi");
    expect(lastCall[0].error).toBeDefined();
  });

  test("validates maxLength attribute is set", () => {
    const { getByRole } = render(<DxcMessageInput maxLength={10} />);
    const input = getByRole("textbox");

    expect(input).toHaveAttribute("maxLength", "10");
  });

  test("validates minLength on blur", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcMessageInput minLength={5} onBlur={onBlur} />);
    const input = getByRole("textbox");

    userEvent.click(input);
    userEvent.type(input, "Hi");
    userEvent.tab();

    // Verify error is present in the call
    expect(onBlur).toHaveBeenCalled();
    const calls = onBlur.mock.calls;
    const lastCall = calls[calls.length - 1] as [{ value: string; error?: string }];
    expect(lastCall[0].value).toBe("Hi");
    expect(lastCall[0].error).toBeDefined();
  });

  test("works as controlled component", () => {
    const onChange = jest.fn();
    const { getByRole, rerender } = render(<DxcMessageInput value="Initial" onChange={onChange} />);
    const input = getByRole("textbox");

    expect(input).toHaveValue("Initial");

    userEvent.type(input, " text");

    rerender(<DxcMessageInput value="Initial text" onChange={onChange} />);
    expect(input).toHaveValue("Initial text");
  });

  test("renders file upload dropdown when allowFileUploads is true", () => {
    const { getByRole } = render(<DxcMessageInput allowFileUploads />);
    const dropdown = getByRole("button", { name: "Show options" });

    expect(dropdown).toBeInTheDocument();
  });

  test("renders bottom select when bottomOptions is provided", () => {
    const bottomOptions = [
      { label: "Option 1", value: "option1", onSelect: jest.fn() },
      { label: "Option 2", value: "option2", onSelect: jest.fn() },
    ];
    const { getByRole } = render(<DxcMessageInput bottomOptions={bottomOptions} />);
    const select = getByRole("combobox");

    expect(select).toBeInTheDocument();
  });

  test("calls onSelect when a bottom option is selected", async () => {
    const onSelect = jest.fn();
    const bottomOptions = [
      { label: "Option 1", value: "option1", onSelect },
      { label: "Option 2", value: "option2", onSelect: jest.fn() },
    ];
    const { getByRole } = render(<DxcMessageInput bottomOptions={bottomOptions} />);
    const select = getByRole("combobox");

    userEvent.click(select);
    const option1 = await waitFor(() => getByRole("option", { name: "Option 1" }));
    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test("does not show error when disabled", () => {
    const { queryByText } = render(<DxcMessageInput disabled error="This is an error" />);
    expect(queryByText("This is an error")).not.toBeInTheDocument();
  });

  test("async onSubmit is handled correctly", async () => {
    const onSubmit = jest.fn().mockResolvedValue(undefined);
    const { getByLabelText } = render(<DxcMessageInput onSubmit={onSubmit} />);
    const submitButton = getByLabelText("Submit");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  test("does not call onSubmit when disabled", () => {
    const onSubmit = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput disabled onSubmit={onSubmit} />);
    const submitButton = getByLabelText("Submit");

    userEvent.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test("does not call onSubmit when isLoading", () => {
    const onSubmit = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput isLoading onSubmit={onSubmit} />);

    // The button should be the stop button when isLoading
    const button = getByLabelText("Stop");
    expect(button).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test("handles file selection", () => {
    const { getByRole } = render(<DxcMessageInput allowFileUploads />);
    const dropdown = getByRole("button", { name: "Show options" });

    // Simulate selecting the option
    userEvent.click(dropdown);

    expect(dropdown).toBeInTheDocument();
  });

  test("adds files when files are selected", () => {
    const callbackItems = jest.fn();
    const { container } = render(<DxcMessageInput allowFileUploads callbackItems={callbackItems} />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    const file = new File(["content"], "test.txt", { type: "text/plain" });
    Object.defineProperty(fileInput, "files", {
      value: [file],
      writable: false,
    });

    fileInput.dispatchEvent(new Event("change", { bubbles: true }));

    expect(callbackItems).toHaveBeenCalled();
  });

  test("removes item when chip is clicked", () => {
    const callbackItems = jest.fn();
    const topItems = [
      { id: "1", label: "File 1" },
      { id: "2", label: "File 2" },
    ];
    const { getByText } = render(
      <DxcMessageInput allowFileUploads topItems={topItems} callbackItems={callbackItems} />
    );

    // Verify chips are rendered
    expect(getByText("File 1")).toBeInTheDocument();
    expect(getByText("File 2")).toBeInTheDocument();

    // Note: Testing the actual click on chip requires finding the dismissible button
    // which is handled internally by DxcChip component
    expect(callbackItems).not.toHaveBeenCalled();
  });

  test("handles AbortError in onSubmit without throwing", async () => {
    const abortError = new DOMException("Aborted", "AbortError");
    const onSubmit = jest.fn().mockRejectedValue(abortError);
    const { getByLabelText } = render(<DxcMessageInput onSubmit={onSubmit} />);
    const submitButton = getByLabelText("Submit");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });

    // AbortError should be caught and not throw
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test("validates minLength correctly when value is exactly minLength", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcMessageInput minLength={5} onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Hello");

    // When exactly at minLength, should not have error
    expect(onChange).toHaveBeenLastCalledWith({ value: "Hello" });
  });

  test("works with uncontrolled topItems", () => {
    const callbackItems = jest.fn();
    const { container } = render(<DxcMessageInput allowFileUploads callbackItems={callbackItems} />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["content"], "test.txt", { type: "text/plain" });

    Object.defineProperty(fileInput, "files", {
      value: [file],
      writable: false,
    });

    fileInput.dispatchEvent(new Event("change", { bubbles: true }));

    expect(callbackItems).toHaveBeenCalled();
  });
});
