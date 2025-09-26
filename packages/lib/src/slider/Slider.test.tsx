import { act, fireEvent, render } from "@testing-library/react";
import DxcSlider from "./Slider";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Slider component tests", () => {
  test("Slider renders with correct text and label id", () => {
    const { getByText, getByRole } = render(<DxcSlider label="label" showLimitsValues />);
    expect(getByText("0")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
    const sliderId = getByText("label").getAttribute("id");
    expect(getByRole("slider").getAttribute("aria-labelledby")).toBe(sliderId);
    expect(getByRole("slider").getAttribute("aria-orientation")).toBe("horizontal");
    expect(getByRole("slider").getAttribute("aria-label")).toBeNull();
  });
  test("Renders with correct error aria label", () => {
    const { getByRole } = render(<DxcSlider ariaLabel="Example aria label" showLimitsValues />);
    const slider = getByRole("slider");
    expect(slider.getAttribute("aria-label")).toBe("Example aria label");
  });
  test("Slider renders with correct initial value when it is uncontrolled", () => {
    const { getByRole } = render(<DxcSlider defaultValue={30} showLimitsValues showInput />);
    const slider = getByRole("slider");
    const input = getByRole("spinbutton") as HTMLInputElement;
    expect(slider.getAttribute("aria-valuenow")).toBe("30");
    expect(input.value).toBe("30");
  });
  test("Slider correct limit values", async () => {
    const { getByRole, getByText } = render(
      <DxcSlider defaultValue={-30} minValue={-30} maxValue={125} showLimitsValues />
    );
    const slider = getByRole("slider");
    expect(slider.getAttribute("aria-valuemin")).toBe("-30");
    expect(slider.getAttribute("aria-valuemax")).toBe("125");
    expect(getByText("-30")).toBeTruthy();
    expect(getByText("125")).toBeTruthy();
    expect(slider.getAttribute("aria-valuenow")).toBe("-30");
    fireEvent.input(slider, { target: { value: "-29" } });
    expect(slider.getAttribute("aria-valuenow")).toBe("-29");
  });
  test("Slider applies correct limit values and never surpasses them", () => {
    const { getByRole, getByText } = render(
      <DxcSlider defaultValue={-100} minValue={-100} maxValue={100} showLimitsValues step={100} />
    );
    const slider = getByRole("slider") as HTMLInputElement;
    expect(slider.getAttribute("aria-valuemin")).toBe("-100");
    expect(slider.getAttribute("aria-valuemax")).toBe("100");
    expect(getByText("-100")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
    expect(slider.value).toBe("-100");
    fireEvent.input(slider, { target: { value: "-101" } });
    expect(slider.value).toBe("-100");
    fireEvent.input(slider, { target: { value: "101" } });
    expect(slider.value).toBe("100");
  });
  test("Calls correct function onChange in controlled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcSlider onChange={onChange} showLimitsValues value={13} showInput />);
    const input = getByRole("spinbutton") as HTMLInputElement;
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("13");
    expect(input.value).toBe("13");
    act(() => {
      fireEvent.change(input, { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith(25);
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("13");
    expect(input.value).toBe("25");
  });
  test("Calls correct function onChange in uncontrolled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcSlider onChange={onChange} showLimitsValues showInput />);
    const textInput = getByRole("spinbutton") as HTMLInputElement;
    act(() => {
      fireEvent.change(textInput, { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith(25);
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("25");
    expect(textInput.value).toBe("25");
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
    expect(onDragEnd).toHaveBeenCalledWith(120);
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
    expect(onDragEnd).toHaveBeenCalledWith(120);
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
  test("Non-valid values in the number input do not update the slider value: special characters", () => {
    const { getByRole } = render(<DxcSlider showLimitsValues showInput defaultValue={23} />);
    const input = getByRole("spinbutton") as HTMLInputElement;
    const slider = getByRole("slider");
    act(() => {
      fireEvent.change(input, { target: { value: "-" } });
    });
    expect(slider.getAttribute("aria-valuenow")).toBe("0");
    fireEvent.blur(input);
    expect(slider.getAttribute("aria-valuenow")).toBe("0");
    expect(input.value).toBe("0");
  });
  test("Non-valid values in the number input: values which do not respect the step are rounded up", () => {
    const { getByRole } = render(<DxcSlider showLimitsValues showInput step={0.1} minValue={-1} maxValue={1} />);
    const input = getByRole("spinbutton") as HTMLInputElement;
    const slider = getByRole("slider");
    act(() => {
      fireEvent.change(input, { target: { value: "-0.15" } });
    });
    expect(slider.getAttribute("aria-valuenow")).toBe("-0.15");
    fireEvent.blur(input);
    expect(slider.getAttribute("aria-valuenow")).toBe("-0.2");
    expect(input.value).toBe("-0.2");
  });
  test("Non-valid values in the number input: values that surpass the maximum limit are set to the maximum possible value", () => {
    const { getByRole } = render(<DxcSlider showLimitsValues showInput step={5} minValue={-10} maxValue={10} />);
    const input = getByRole("spinbutton") as HTMLInputElement;
    const slider = getByRole("slider");
    act(() => {
      fireEvent.change(input, { target: { value: "15" } });
    });
    expect(slider.getAttribute("aria-valuenow")).toBe("15");
    fireEvent.blur(input);
    expect(slider.getAttribute("aria-valuenow")).toBe("10");
    expect(input.value).toBe("10");
  });
  test("Non-valid values in the number input: values that surpass the minimum limit are set to the minimum possible value", () => {
    const { getByRole } = render(<DxcSlider showLimitsValues showInput step={5} minValue={-10} maxValue={10} />);
    const input = getByRole("spinbutton") as HTMLInputElement;
    const slider = getByRole("slider");
    act(() => {
      fireEvent.change(input, { target: { value: "-200" } });
    });
    expect(slider.getAttribute("aria-valuenow")).toBe("-200");
    fireEvent.blur(input);
    expect(slider.getAttribute("aria-valuenow")).toBe("-10");
    expect(input.value).toBe("-10");
  });
});
