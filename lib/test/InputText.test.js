import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DxcInputText from "../dist/input-text/InputText";
import icon from "../../app/src/images/invision.svg";

describe("InputText component tests", () => {
  test("Input renders with correct label", () => {
    const { getByText } = render(<DxcInputText label="Input label" />);

    expect(getByText("Input label")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcInputText label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "20000" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("20000");
  });
  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();

    const { getByRole } = render(<DxcInputText label="Input label" onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test value" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith("Test value");
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
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcInputText label="Input label" value="Test value" onChange={onChange} onBlur={onBlur} />
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "20000" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("20000");
    expect(input.value).toBe("Test value");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith("Test value");
  });
  test("Prefix icon onClick", () =>{
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcInputText label="Input label" prefixIconSrc={icon} onClickPrefix={onClick} />
    );
    const prefixIcon = getByRole("img");
    fireEvent.click(prefixIcon);
    expect(onClick).toHaveBeenCalled();
  });
  test("Suffix icon onClick", () =>{
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcInputText label="Input label" suffixIconSrc={icon} onClickSuffix={onClick} />
    );
    const suffixIcon = getByRole("img");
    fireEvent.click(suffixIcon);
    expect(onClick).toHaveBeenCalled();
  });
});
