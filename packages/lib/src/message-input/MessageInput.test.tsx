import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
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

  test("calls onButtonClick when Enter key is pressed", () => {
    const onButtonClick = jest.fn();
    const { getByRole } = render(<DxcMessageInput onButtonClick={onButtonClick} />);
    const input = getByRole("textbox");

    userEvent.click(input);
    userEvent.type(input, "Test message{Enter}");

    expect(onButtonClick).toHaveBeenCalledWith("submit");
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onButtonClick when Shift+Enter is pressed", () => {
    const onButtonClick = jest.fn();
    const { getByRole } = render(<DxcMessageInput onButtonClick={onButtonClick} />);
    const input = getByRole("textbox");

    userEvent.click(input);
    userEvent.type(input, "Line 1{Shift>}{Enter}{/Shift}Line 2");

    expect(onButtonClick).not.toHaveBeenCalled();
  });

  test("does not call onButtonClick when Enter is pressed and component is disabled", () => {
    const onButtonClick = jest.fn();
    const { getByRole } = render(<DxcMessageInput disabled onButtonClick={onButtonClick} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Test message{Enter}");

    expect(onButtonClick).not.toHaveBeenCalled();
  });

  test("does not call onButtonClick when Enter is pressed and isGenerating is true", () => {
    const onButtonClick = jest.fn();
    const { getByRole } = render(<DxcMessageInput isGenerating onButtonClick={onButtonClick} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Test message{Enter}");

    expect(onButtonClick).not.toHaveBeenCalled();
  });

  test("calls onButtonClick when submit button is clicked", () => {
    const onButtonClick = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput onButtonClick={onButtonClick} />);
    const submitButton = getByLabelText("Send message");

    userEvent.click(submitButton);

    expect(onButtonClick).toHaveBeenCalledWith("submit");
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  test("disables input when disabled prop is true", () => {
    const { getByRole } = render(<DxcMessageInput disabled />);
    const input = getByRole("textbox");

    expect(input).toBeDisabled();
  });

  test("disables input when isGenerating is true", () => {
    const { getByRole } = render(<DxcMessageInput isGenerating />);
    const input = getByRole("textbox");

    expect(input).toBeDisabled();
  });

  test("shows stop button when isGenerating is true", () => {
    const onButtonClick = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput isGenerating onButtonClick={onButtonClick} />);
    const stopButton = getByLabelText("Stop request");

    expect(stopButton).toBeInTheDocument();
  });

  test("calls onButtonClick with 'stop' when stop button is clicked", () => {
    const onButtonClick = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput isGenerating onButtonClick={onButtonClick} />);
    const stopButton = getByLabelText("Stop request");

    userEvent.click(stopButton);

    expect(onButtonClick).toHaveBeenCalledWith("stop");
    expect(onButtonClick).toHaveBeenCalledTimes(1);
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

  test("renders file upload dropdown when files prop is provided", () => {
    const { getByRole } = render(<DxcMessageInput files={[]} />);
    const dropdown = getByRole("button", { name: "Show options" });

    expect(dropdown).toBeInTheDocument();
  });

  test("renders bottom select when modelList is provided", () => {
    const modelList = [
      { label: "Option 1", value: "option1", onSelect: jest.fn() },
      { label: "Option 2", value: "option2", onSelect: jest.fn() },
    ];
    const { getByRole } = render(<DxcMessageInput modelList={modelList} />);
    const select = getByRole("combobox");

    expect(select).toBeInTheDocument();
  });

  test("calls onSelect when a bottom option is selected", () => {
    const onSelect = jest.fn();
    const modelList = [
      { label: "Option 1", value: "option1", onSelect },
      { label: "Option 2", value: "option2", onSelect: jest.fn() },
    ];
    const { getByRole } = render(<DxcMessageInput modelList={modelList} />);
    const select = getByRole("combobox");

    userEvent.click(select);
    const option1 = getByRole("option", { name: "Option 1" });
    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("option1");
  });

  test("does not show error when disabled", () => {
    const { queryByText } = render(<DxcMessageInput disabled error="This is an error" />);
    expect(queryByText("This is an error")).not.toBeInTheDocument();
  });

  test("does not call onButtonClick when disabled", () => {
    const onButtonClick = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput disabled onButtonClick={onButtonClick} />);
    const submitButton = getByLabelText("Send message");

    userEvent.click(submitButton);

    expect(onButtonClick).not.toHaveBeenCalled();
  });

  test("shows stop button instead of submit when isGenerating", () => {
    const onButtonClick = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput isGenerating onButtonClick={onButtonClick} />);

    // The button should be the stop button when isGenerating
    const button = getByLabelText("Stop request");
    expect(button).toBeInTheDocument();
  });

  test("handles file selection", () => {
    const { getByRole } = render(<DxcMessageInput files={[]} />);
    const dropdown = getByRole("button", { name: "Show options" });

    // Simulate selecting the option
    userEvent.click(dropdown);

    expect(dropdown).toBeInTheDocument();
  });

  test("adds files when files are selected", () => {
    const callbackFile = jest.fn();
    const { container } = render(<DxcMessageInput files={[]} callbackFile={callbackFile} />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    const file = new File(["content"], "test.txt", { type: "text/plain" });
    Object.defineProperty(fileInput, "files", {
      value: [file],
      writable: false,
    });

    fileInput.dispatchEvent(new Event("change", { bubbles: true }));

    expect(callbackFile).toHaveBeenCalled();
  });

  test("calls onButtonClick with submit when submit button is clicked", () => {
    const onButtonClick = jest.fn();
    const { getByLabelText } = render(<DxcMessageInput onButtonClick={onButtonClick} />);
    const submitButton = getByLabelText("Send message");

    userEvent.click(submitButton);
    expect(onButtonClick).toHaveBeenCalledWith("submit");
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  test("validates minLength correctly when value is exactly minLength", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcMessageInput minLength={5} onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Hello");

    // When exactly at minLength, should not have error
    expect(onChange).toHaveBeenLastCalledWith({ value: "Hello" });
  });

  test("works with file uploads", () => {
    const callbackFile = jest.fn();
    const { container } = render(<DxcMessageInput files={[]} callbackFile={callbackFile} />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["content"], "test.txt", { type: "text/plain" });

    Object.defineProperty(fileInput, "files", {
      value: [file],
      writable: false,
    });

    fileInput.dispatchEvent(new Event("change", { bubbles: true }));

    expect(callbackFile).toHaveBeenCalled();
  });
});
