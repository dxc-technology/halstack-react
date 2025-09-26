import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcTextarea from "./Textarea";

describe("Textarea component tests", () => {
  test("Renders with correct label", () => {
    const { getByText } = render(<DxcTextarea label="Example label" />);
    expect(getByText("Example label")).toBeTruthy();
  });

  test("Renders with correct label and helper text", () => {
    const { getByText } = render(<DxcTextarea label="Example label" helperText="Example helper text" />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });

  test("Renders with correct label and optional", () => {
    const { getByText, getByRole } = render(
      <DxcTextarea label="Example label" helperText="Example helper text" optional />
    );
    const textarea = getByRole("textbox");
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
    expect(textarea.getAttribute("aria-required")).toBe("false");
  });

  test("Renders with correct placeholder", () => {
    const { getByRole } = render(<DxcTextarea placeholder="Placeholder" />);
    const textarea = getByRole("textbox");
    expect(textarea.getAttribute("placeholder")).toBe("Placeholder");
  });

  test("Renders with error message and correct aria attributes", () => {
    const { getByText, getByLabelText } = render(<DxcTextarea label="Example label" error="Error message." />);
    const textarea = getByLabelText("Example label");
    const errorMessage = getByText("Error message.");
    expect(errorMessage).toBeTruthy();
    expect(textarea.getAttribute("aria-errormessage")).toBe(errorMessage.id);
    expect(textarea.getAttribute("aria-invalid")).toBe("true");
    expect(errorMessage.getAttribute("aria-live")).toBe("assertive");
  });

  test("Renders with correct default rows", () => {
    const { getByLabelText } = render(<DxcTextarea label="Example label" rows={10} />);
    const textarea = getByLabelText("Example label") as HTMLTextAreaElement;
    expect(textarea.rows).toBe(10);
  });

  test("Renders with correct accessibility attributes", () => {
    const { getByLabelText } = render(<DxcTextarea label="Example label" ariaLabel="Example aria label" />);
    const textarea = getByLabelText("Example label");
    expect(textarea.getAttribute("aria-invalid")).toBe("false");
    expect(textarea.getAttribute("aria-describedBy")).toBeNull();
    expect(textarea.getAttribute("aria-required")).toBe("true");
    expect(textarea.getAttribute("aria-label")).toBeNull();
  });

  test("Renders with correct aria-label", () => {
    const { getByRole } = render(<DxcTextarea ariaLabel="Example aria label" />);
    const textarea = getByRole("textbox");
    expect(textarea.getAttribute("aria-label")).toBe("Example aria label");
  });

  test("Renders with correct initial value", () => {
    const { getByLabelText } = render(
      <DxcTextarea label="Example label" placeholder="Placeholder" defaultValue="Example text" />
    );
    const textarea = getByLabelText("Example label") as HTMLTextAreaElement;
    expect(textarea.value).toBe("Example text");
  });

  test("Disabled textarea can not be modified", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcTextarea label="Example label" onChange={onChange} disabled />);
    const textarea = getByLabelText("Example label");
    userEvent.type(textarea, "Test");
    expect(onChange).not.toHaveBeenCalled();
  });

  test("Read-only textarea does not trigger onChange function", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcTextarea label="Example label" onChange={onChange} readOnly />);
    const textarea = getByLabelText("Example label");
    userEvent.type(textarea, "Test");
    expect(onChange).not.toHaveBeenCalled();
  });

  test("Read-only textarea sends its value on submit", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ data: "Comments" });
    });
    const { getByText } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcTextarea label="Example label" name="data" defaultValue="Comments" readOnly />
        <button type="submit">Submit</button>
      </form>
    );
    const submit = getByText("Submit");
    userEvent.click(submit);
    expect(handlerOnSubmit).toHaveBeenCalled();
  });

  test("Not optional constraint (onBlur)", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcTextarea label="Example label" placeholder="Placeholder" onChange={onChange} onBlur={onBlur} />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
    fireEvent.change(textarea, { target: { value: "Test" } });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test" });
  });

  test("Not optional constraint (onChange)", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DxcTextarea label="Example label" placeholder="Placeholder" onChange={onChange} />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.focus(textarea);
    fireEvent.change(textarea, { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Test" });
    userEvent.clear(textarea);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
  });

  test("Pattern constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "pattern test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "pattern test",
      error: "Please match the format requested.",
    });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "pattern test",
      error: "Please match the format requested.",
    });
    userEvent.clear(textarea);
    fireEvent.change(textarea, { target: { value: "pattern4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "pattern4&" });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "pattern4&" });
  });

  test("Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        minLength={5}
        maxLength={10}
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    userEvent.clear(textarea);
    fireEvent.change(textarea, { target: { value: "length" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "length" });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "length" });
  });

  test("Pattern and length constraints", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        minLength={5}
        maxLength={10}
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    fireEvent.change(textarea, { target: { value: "tests" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "tests",
      error: "Please match the format requested.",
    });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "tests",
      error: "Please match the format requested.",
    });
    fireEvent.change(textarea, { target: { value: "tests4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "tests4&" });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "tests4&" });
  });

  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const { getByLabelText } = render(<DxcTextarea label="Example label" onBlur={onBlur} />);
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Blur test" } });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Blur test" });
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcTextarea label="Example label" value="Test value" onChange={onChange} />);
    const textarea = getByLabelText("Example label") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "Controlled test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Controlled test" });
    expect(textarea.value).toBe("Test value");
  });
});
