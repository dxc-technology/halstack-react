import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DxcInputText from "../dist/input-text/InputText";

describe("InputText component tests", () => {
  test("Input renders with correct label", () => {
    const { getByText } = render(<DxcInputText label="Input label" />);

    expect(getByText("Input label")).toBeTruthy();
  });

  test("Uncontrolled component", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcInputText label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "20000" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("20000");
    expect(input.value).toBe("20000");
  });
  
  test("Controlled component", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcInputText label="Input label" value="Test value" onChange={onChange} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "20000" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("20000");
    expect(input.value).toBe("Test value");
  });
});
