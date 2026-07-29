import "@testing-library/jest-dom";
import { act, fireEvent, render, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcMessageInput from "./MessageInput";
import {
  ISpeechRecognition,
  SpeechRecognitionAlternative,
  SpeechRecognitionErrorEvent,
  SpeechRecognitionEvent,
  SpeechRecognitionResultItem,
  SpeechRecognitionResultList,
  useVoiceTranscription,
  WindowWithSpeechRecognition,
} from "./useVoiceTranscription";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock Speech Recognition
class MockSpeechRecognition extends EventTarget implements ISpeechRecognition {
  lang = "";
  continuous = false;
  interimResults = false;
  onresult: ((event: SpeechRecognitionEvent) => void) | null = null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null = null;
  onend: (() => void) | null = null;

  start = jest.fn();
  stop = jest.fn(() => {
    this.onend?.();
  });

  emitResult(transcript: string, confidence: number) {
    const alternative: SpeechRecognitionAlternative = { transcript, confidence };
    const resultItem: SpeechRecognitionResultItem = { length: 1, 0: alternative };
    const results: SpeechRecognitionResultList = { length: 1, 0: resultItem };

    this.onresult?.(Object.assign(new Event("result"), { results }));
  }

  emitEnd() {
    this.onend?.();
  }

  emitError(error: string) {
    this.onerror?.(Object.assign(new Event("error"), { error }));
  }
}

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

    expect(onButtonClick).toHaveBeenCalledWith({ type: "submit", value: "Test message" });
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

    expect(onButtonClick).toHaveBeenCalledWith({ type: "submit", value: "" });
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

    expect(onButtonClick).toHaveBeenCalledWith({ type: "stop" });
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  test("Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcMessageInput onChange={onChange} onBlur={onBlur} minLength={5} maxLength={10} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "test",
      error: "The minimum length is 5.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "The minimum length is 5.",
    });

    fireEvent.change(input, { target: { value: "test-maximum-length" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "test-maximum-length",
      error: "The maximum length is 10.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "test-maximum-length",
      error: "The maximum length is 10.",
    });

    fireEvent.change(input, { target: { value: "length" } });
    expect(onChange).toHaveBeenCalledWith({ value: "length" });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "length" });
  });

  test("validates maxLength attribute is set", () => {
    const { getByRole } = render(<DxcMessageInput maxLength={10} />);
    const input = getByRole("textbox");

    expect(input).toHaveAttribute("maxLength", "10");
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
    const { getByRole } = render(<DxcMessageInput files={[]} callbackFile={() => console.log("")} />);
    const dropdown = getByRole("button", { name: "Show options" });

    expect(dropdown).toBeInTheDocument();
  });

  test("renders bottom select when selectOptions is provided", () => {
    const selectOptions = [
      { label: "Option 1", value: "option1", onSelect: jest.fn() },
      { label: "Option 2", value: "option2", onSelect: jest.fn() },
    ];
    const { getByRole } = render(<DxcMessageInput selectOptions={selectOptions} />);
    const select = getByRole("combobox");

    expect(select).toBeInTheDocument();
  });

  test("calls onSelect when a select option is selected", () => {
    const onSelect = jest.fn();
    const selectOptions = [
      { label: "Option 1", value: "option1", onSelect },
      { label: "Option 2", value: "option2", onSelect: jest.fn() },
    ];
    const { getByRole } = render(<DxcMessageInput selectOptions={selectOptions} />);
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
    const { getByRole } = render(<DxcMessageInput files={[]} callbackFile={() => console.log("")} />);
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
    expect(onButtonClick).toHaveBeenCalledWith({ type: "submit", value: "" });
    expect(onButtonClick).toHaveBeenCalledTimes(1);
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

  let mockInstance: MockSpeechRecognition;

  beforeEach(() => {
    mockInstance = new MockSpeechRecognition();
    (window as WindowWithSpeechRecognition).SpeechRecognition = jest.fn(() => mockInstance);
  });

  afterEach(() => {
    delete (window as WindowWithSpeechRecognition).SpeechRecognition;
    jest.clearAllMocks();
  });

  test("starts and stops recording when button is clicked", () => {
    const { container } = render(<DxcMessageInput allowRecording value="Initial text" />);
    const recordButton = container.querySelector('[aria-label="Record audio"]') as HTMLButtonElement;

    // Start recording
    fireEvent.click(recordButton);
    expect(mockInstance.start).toHaveBeenCalled();

    // Emit some transcript
    act(() => {
      mockInstance.emitResult("Test transcript", 0.9);
    });

    // Stop recording by clicking button again
    const stopButton = container.querySelector('[aria-label="Stop recording"]') as HTMLButtonElement;
    fireEvent.click(stopButton);
    expect(mockInstance.stop).toHaveBeenCalled();
  });
});

describe("useVoiceTranscription", () => {
  let mockInstance: MockSpeechRecognition;

  beforeEach(() => {
    mockInstance = new MockSpeechRecognition();
    (window as WindowWithSpeechRecognition).SpeechRecognition = jest.fn(() => mockInstance);
  });

  afterEach(() => {
    delete (window as WindowWithSpeechRecognition).SpeechRecognition;
    jest.clearAllMocks();
  });

  test("detects support when SpeechRecognition exists", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "es-ES" }));
    expect(result.current.isSupported).toBe(true);
  });

  test("starts recording and sets isRecording to true", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "es-ES" }));

    act(() => {
      result.current.startRecording();
    });

    expect(mockInstance.start).toHaveBeenCalled();
    expect(result.current.isRecording).toBe(true);
  });

  test("updates transcript when confidence is high enough", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "en-US" }));

    act(() => {
      result.current.startRecording();
    });

    act(() => {
      mockInstance.emitResult("hello world", 0.8);
    });

    expect(result.current.transcript).toBe("hello world");
  });

  test("ignores transcript when confidence is below 0.5", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "en-US" }));

    act(() => {
      result.current.startRecording();
    });

    act(() => {
      mockInstance.emitResult("text with low confidence", 0.2);
    });

    expect(result.current.transcript).toBe("");
  });

  test("resets transcript and isRecording when recognition ends automatically", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "eb-US" }));

    act(() => {
      result.current.startRecording();
    });

    act(() => {
      mockInstance.emitResult("hello", 0.9);
    });

    expect(result.current.transcript).toBe("hello");

    act(() => {
      mockInstance.emitEnd();
    });

    expect(result.current.isRecording).toBe(false);
    expect(result.current.transcript).toBe("");
  });

  test("resets transcript on error", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "en-US" }));

    act(() => {
      result.current.startRecording();
    });

    act(() => {
      mockInstance.emitResult("hello", 0.9);
    });

    act(() => {
      mockInstance.emitError("no-speech");
    });

    expect(result.current.isRecording).toBe(false);
    expect(result.current.transcript).toBe("");
  });

  test("stopRecording calls recognition.stop", () => {
    const { result } = renderHook(() => useVoiceTranscription({ lang: "en-US" }));

    act(() => {
      result.current.startRecording();
    });

    act(() => {
      result.current.stopRecording();
    });

    expect(mockInstance.stop).toHaveBeenCalled();
  });

  test("isSupported is false when SpeechRecognition is not available", () => {
    delete (window as WindowWithSpeechRecognition).SpeechRecognition;
    const { result } = renderHook(() => useVoiceTranscription({ lang: "en-US" }));
    expect(result.current.isSupported).toBe(false);
  });
});
