import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DxcNewTextarea from "../src/new-textarea/NewTextarea";

describe("NewTextarea component tests", () => {
  test("Renders with correct label", () => {
    const { getByText } = render(<DxcNewTextarea label="Example label" />);
    expect(getByText("Example label")).toBeTruthy();
  });
  test("Renders with correct label and helper text", () => {
    const { getByText } = render(<DxcNewTextarea label="Example label" helperText="Example helper text" />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct label and optional", () => {
    const { getByText } = render(<DxcNewTextarea label="Example label" helperText="Example helper text" optional />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct placeholder", () => {
    const { getByRole } = render(<DxcNewTextarea placeholder="Placeholder" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("placeholder")).toBe("Placeholder");
  });
  test("Renders with error message", () => {
    const { getByText } = render(<DxcNewTextarea error="Error message." />);
    expect(getByText("Error message.")).toBeTruthy();
  });
  test("Renders with correct default rows", () => {
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" rows={10} />);
    const textarea = getByLabelText("Example label");
    expect(textarea.rows).toBe(10);
  });
  test("Strict mode - Pattern constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewTextarea
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
    fireEvent.blur(textarea);
    expect(getByText("Please match the format requested.")).toBeTruthy();
    fireEvent.change(textarea, { target: { value: "pattern4&" } });
    fireEvent.blur(textarea);
    expect(queryByText("Please match the format requested.")).toBeFalsy();
  });
  test("Strict mode - Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        length={{ min: 5, max: 10 }}
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "test" } });
    fireEvent.blur(textarea);
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    fireEvent.change(textarea, { target: { value: "test " } });
    fireEvent.blur(textarea);
    expect(queryByText(/Min length /)).toBeFalsy();
  });
  test("Strict mode - Pattern and length constraints", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        length={{ min: 5, max: 10 }}
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "test" } });
    fireEvent.blur(textarea);
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    fireEvent.change(textarea, { target: { value: "test " } });
    fireEvent.blur(textarea);
    expect(getByText("Please match the format requested.")).toBeTruthy();
    fireEvent.change(textarea, { target: { value: "test 4" } });
    fireEvent.blur(textarea);
    expect(queryByText("Please match the format requested.")).toBeFalsy();
  });
  test("Non Strict mode - Pattern constraint", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("Example value");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("Example value");
      expect(error).toBe("Please match the format requested.");
    });
    const { getByLabelText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Example value" } });
    fireEvent.blur(textarea);
  });
  test("Non Strict mode - Length constraint", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("Example value");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("Example value");
      expect(error).toBe("Min length 5, Max length 10.");
    });
    const { getByLabelText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        length={{ min: 5, max: 10 }}
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Example value" } });
    fireEvent.blur(textarea);
  });
  test("Non Strict mode - Pattern and length constraints", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("Example value");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("Example value");
      expect(error).toBe("Min length 5, Max length 10.");
    });
    const { getByLabelText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        length={{ min: 5, max: 10 }}
      />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Example value" } });
    fireEvent.blur(textarea);
  });
  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" onBlur={onBlur} />);
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Blur test" } });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Blur test", error: null });
  });
  test("Controlled textarea", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcNewTextarea label="Example label" value="Test value" onChange={onChange} onBlur={onBlur} />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Controlled test" } });
    expect(onChange).toHaveBeenCalled();
    expect(textarea.value).toBe("Test value");
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test value", error: null });
  });
  test("Uncontrolled input", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" onChange={onChange} />);
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Uncontrolled test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("Uncontrolled test");
    expect(textarea.value).toBe("Uncontrolled test");
  });
});
