import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcTextarea from "../src/textarea/Textarea";

describe("TextArea component tests", () => {
  test("TextArea renders with correct text", () => {
    const { getByText } = render(<DxcTextarea label="TextArea label" />);
    expect(getByText("TextArea label")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();

    const { getByRole } = render(<DxcTextarea label="TextArea label" onChange={onChange} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Testing..." } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("Testing...");
  });

  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();

    const { getByRole } = render(<DxcTextarea label="TextArea label" onBlur={onBlur} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Testing..." } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith("Testing...");
  });

  test("Controlled component", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextarea label="TextArea label" value="TextArea Value" onChange={onChange} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Tests" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("Tests");
    expect(input.value).toBe("TextArea Value");
  });

  test("Uncontrolled component", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextarea label="TextArea label" onChange={onChange} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Tests" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("Tests");
    expect(input.value).toBe("Tests");
  });

});
