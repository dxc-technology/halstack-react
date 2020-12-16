import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import DxcSlider from "../src/slider/Slider";

describe("Slider component tests", () => {
  test("Slider renders with correct text", () => {
    const { getByText } = render(<DxcSlider minValue={0} maxValue={100} showLimitsValues></DxcSlider>);
    expect(getByText("0")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
  });

  test("Calls correct function onChange in controlled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues value={13} showInput></DxcSlider>
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith("25");
  });

  test("Calls correct function onChange in uncontrolled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues showInput></DxcSlider>
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith("25");
  });

  test("Disabled slider have disabled input", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider
        minValue={0}
        maxValue={100}
        onChange={onChange}
        showLimitsValues
        disabled
        showInput
        value={13}
      ></DxcSlider>
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(getByRole("textbox").hasAttribute("disabled")).toBeTruthy();
    expect(getByRole("textbox").value).toBe("13");
  });

  test("Calls correct function onDragEnd", () => {
    const onDragEnd = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} showLimitsValues showInput onDragEnd={onDragEnd} value={25}></DxcSlider>
    );
    act(() => {
      fireEvent.mouseDown(getByRole("slider"));
      fireEvent.mouseUp(getByRole("slider"));
    });
    expect(onDragEnd).toHaveBeenCalled();
  });

  test("Calls correct function labelFormatCallback", () => {
    const labelFormatCallback = jest.fn(x => `${x}$`);
    const { getByText } = render(
      <DxcSlider
        minValue={0}
        maxValue={100}
        showLimitsValues
        showInput
        value={25}
        labelFormatCallback={labelFormatCallback}
      ></DxcSlider>
    );
    expect(getByText("0$")).toBeTruthy();
    expect(getByText("100$")).toBeTruthy();
    expect(labelFormatCallback).toHaveBeenCalledTimes(2);
  });
});
