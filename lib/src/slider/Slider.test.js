import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcSlider from "./Slider.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Slider component tests", () => {
  test("Slider renders with correct text and label id", () => {
    const { getByText, getByRole } = render(<DxcSlider label="label" minValue={0} maxValue={100} showLimitsValues />);
    expect(getByText("0")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
    const sliderId = getByText("label").getAttribute("id");
    expect(getByRole("slider").getAttribute("aria-labelledby")).toBe(sliderId);
    expect(getByRole("slider").getAttribute("aria-orientation")).toBe("horizontal");
  });

  test("Slider renders with correct initial value when it is uncontrolled", () => {
    const { getByRole } = render(
      <DxcSlider defaultValue={30} minValue={0} maxValue={100} showLimitsValues showInput />
    );
    const slider = getByRole("slider");
    const input = getByRole("textbox");
    expect(slider.getAttribute("aria-valuenow")).toBe("30");
    expect(input.value).toBe("30");
  });

  test("Slider correct limit values", () => {
    const { getByRole, getByText } = render(
      <DxcSlider defaultValue={125} minValue={30} maxValue={125} showLimitsValues />
    );
    const slider = getByRole("slider");
    expect(slider.getAttribute("aria-valuemin")).toBe("30");
    expect(slider.getAttribute("aria-valuemax")).toBe("125");
    userEvent.tab();
    fireEvent.keyDown(slider, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    expect(slider.getAttribute("aria-valuenow")).toBe("125");
    expect(getByText("30")).toBeTruthy();
    expect(getByText("125")).toBeTruthy();
  });

  test("Calls correct function onChange in controlled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues value={13} showInput />
    );
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("13");
    expect(getByRole("textbox").value).toBe("13");
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith(25);
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("13");
    expect(getByRole("textbox").value).toBe("13");
  });

  test("Calls correct function onChange in uncontrolled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues showInput />
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith(25);
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("25");
    expect(getByRole("textbox").value).toBe("25");
  });

  test("Disabled slider have disabled input and slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues disabled showInput value={13} />
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(getByRole("textbox").hasAttribute("disabled")).toBeTruthy();
    expect(getByRole("textbox").value).toBe("13");
    expect(getByRole("slider").hasAttribute("disabled")).toBeTruthy();
  });

  test("Calls correct function onDragEnd when it is uncontrolled", () => {
    const onDragEnd = jest.fn();
    const { getByRole } = render(<DxcSlider minValue={0} maxValue={150} onDragEnd={onDragEnd} showInput />);
    const slider = getByRole("slider");
    act(() => {
      fireEvent.mouseDown(slider);
    });
    act(() => {
      fireEvent.mouseUp(slider, { target: { value: 120 } });
    });
    expect(onDragEnd).toHaveBeenCalledWith("120");
  });

  test("Calls correct function onDragEnd when it is controlled", () => {
    const onDragEnd = jest.fn();
    const { getByRole } = render(<DxcSlider minValue={0} maxValue={150} value={50} onDragEnd={onDragEnd} showInput />);
    const slider = getByRole("slider");
    act(() => {
      fireEvent.mouseDown(slider);
    });
    act(() => {
      fireEvent.mouseUp(slider, { target: { value: 120 } });
    });
    expect(onDragEnd).toHaveBeenCalledWith("120");
    expect(slider.getAttribute("aria-valuenow")).toBe("50");
  });

  test("Calls correct function labelFormatCallback", () => {
    const labelFormatCallback = jest.fn((x) => `${x}$`);
    const { getByText } = render(
      <DxcSlider
        minValue={0}
        maxValue={100}
        showLimitsValues
        showInput
        value={25}
        labelFormatCallback={labelFormatCallback}
      />
    );
    expect(getByText("0$")).toBeTruthy();
    expect(getByText("100$")).toBeTruthy();
    expect(labelFormatCallback).toHaveBeenCalledTimes(2);
  });

  test("Change value correctly to 0 from external function", () => {
    const onChange = jest.fn();
    const { rerender, getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues value={13} showInput />
    );
    const slider = getByRole("slider");
    userEvent.tab();
    fireEvent.keyDown(slider, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    rerender(<DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues value={0} showInput />);
    expect(slider.getAttribute("aria-valuenow")).toBe("0");
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(<DxcSlider label="label" minValue={0} maxValue={100} showLimitsValues />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
