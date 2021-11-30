import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    const { getByText, getByRole } = render(
      <DxcNewTextarea label="Example label" helperText="Example helper text" optional />
    );
    const textarea = getByRole("textbox");
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
    expect(textarea.getAttribute("aria-required")).toBe("false");
  });
  test("Renders with correct placeholder", () => {
    const { getByRole } = render(<DxcNewTextarea placeholder="Placeholder" />);
    const textarea = getByRole("textbox");
    expect(textarea.getAttribute("placeholder")).toBe("Placeholder");
  });
  test("Renders with error message", () => {
    const { getByText, getByRole } = render(<DxcNewTextarea error="Error message." />);
    const textarea = getByRole("textbox");
    expect(getByText("Error message.")).toBeTruthy();
    expect(textarea.getAttribute("aria-invalid")).toBe("true");
    expect(textarea.getAttribute("aria-describedBy")).not.toBeNull();
  });
  test("Renders with correct default rows", () => {
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" rows={10} />);
    const textarea = getByLabelText("Example label");
    expect(textarea.rows).toBe(10);
  });
  test("Renders with correct accesibility attributes", () => {
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" />);
    const textarea = getByLabelText("Example label");
    expect(textarea.getAttribute("aria-invalid")).toBe("false");
    expect(textarea.getAttribute("aria-describedBy")).toBeNull();
    expect(textarea.getAttribute("aria-required")).toBe("true");
  });
  test("Not optional constraint (onBlur)", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcNewTextarea label="Example label" placeholder="Placeholder" onChange={onChange} onBlur={onBlur} />
    );
    const textarea = getByLabelText("Example label");

    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
    fireEvent.change(textarea, { target: { value: "Test" } });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test", error: null });
  });
  test("Not optional constraint (onChange)", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DxcNewTextarea label="Example label" placeholder="Placeholder" onChange={onChange} />
    );
    const textarea = getByLabelText("Example label");

    fireEvent.focus(textarea);
    fireEvent.change(textarea, { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Test", error: null });
    userEvent.clear(textarea);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
  });
  test("Pattern constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
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

    fireEvent.change(textarea, { target: { value: "pattern test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "pattern test", error: "Please match the format requested." });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "pattern test", error: "Please match the format requested." });
    userEvent.clear(textarea);
    fireEvent.change(textarea, { target: { value: "pattern4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "pattern4&", error: null });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "pattern4&", error: null });
  });
  test("Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
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

    fireEvent.change(textarea, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    userEvent.clear(textarea);
    fireEvent.change(textarea, { target: { value: "length" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "length", error: null });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "length", error: null });
  });
  test("Pattern and length constraints", () => {
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
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    fireEvent.change(textarea, { target: { value: "tests" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "tests", error: "Please match the format requested." });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "tests", error: "Please match the format requested." });
    fireEvent.change(textarea, { target: { value: "tests4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "tests4&", error: null });
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "tests4&", error: null });
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
  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DxcNewTextarea label="Example label" value="Test value" onChange={onChange} />
    );
    const textarea = getByLabelText("Example label");
    fireEvent.change(textarea, { target: { value: "Controlled test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Controlled test", error: null });
    expect(textarea.value).toBe("Test value");
  });
});
