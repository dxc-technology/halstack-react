import { fireEvent, render } from "@testing-library/react";
import DxcToggleGroup from "./ToggleGroup";

const options = [
  { value: 1, label: "Amazon" },
  { value: 2, label: "Ebay" },
  { value: 3, label: "Apple" },
  { value: 4, label: "Google" },
];

const optionsWithDisabled = [
  { value: 1, label: "Amazon" },
  { value: 2, label: "Ebay", disabled: true },
];

describe("Toggle group component tests", () => {
  test("Toggle group renders with correct labels", () => {
    const { getByText, getByRole } = render(<DxcToggleGroup options={options} />);
    const toggleGroup = getByRole("toolbar");
    expect(getByText("Amazon")).toBeTruthy();
    expect(getByText("Ebay")).toBeTruthy();
    expect(getByText("Apple")).toBeTruthy();
    expect(getByText("Google")).toBeTruthy();
    expect(toggleGroup.getAttribute("aria-orientation")).toBe("horizontal");
  });
  test("Toggle group renders with correct aria-label in only-icon scenario", () => {
    const { getByRole } = render(
      <DxcToggleGroup
        options={[
          { value: 1, icon: "https://cdn.icon-icons.com/icons2/2645/PNG/512/mic_mute_icon_159965.png", title: "Mute" },
        ]}
      />
    );
    expect(getByRole("button").getAttribute("aria-label")).toBe("Mute");
  });
  test("Uncontrolled toggle group calls correct function on change with value", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={options} onChange={onChange} />);
    const option = getByText("Ebay");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledWith(2);
  });
  test("Controlled toggle group calls correct function on change with value", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={options} onChange={onChange} value={1} />);
    const option = getByText("Ebay");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledWith(2);
  });
  test("Uncontrolled multiple toggle group calls correct function on change with value when is multiple", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(<DxcToggleGroup options={options} onChange={onChange} multiple />);
    const toggleOptions = getAllByRole("button");
    toggleOptions[0] && fireEvent.click(toggleOptions[0]);
    expect(onChange).toHaveBeenCalledWith([1]);
    toggleOptions[1] && fireEvent.click(toggleOptions[1]);
    toggleOptions[3] && fireEvent.click(toggleOptions[3]);
    expect(onChange).toHaveBeenCalledWith([1, 2, 4]);
    expect(toggleOptions[0]?.getAttribute("aria-pressed")).toBe("true");
    expect(toggleOptions[1]?.getAttribute("aria-pressed")).toBe("true");
    expect(toggleOptions[3]?.getAttribute("aria-pressed")).toBe("true");
  });
  test("Controlled multiple toggle returns always same values", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={options} onChange={onChange} value={[1]} multiple />);
    const option = getByText("Ebay");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledWith([1, 2]);
    const option2 = getByText("Google");
    fireEvent.click(option2);
    expect(onChange).toHaveBeenNthCalledWith(2, [1, 4]);
  });
  test("Single selection: Renders with correct default value", () => {
    const { getAllByRole } = render(<DxcToggleGroup options={options} defaultValue={2} />);
    const toggleOptions = getAllByRole("button");
    expect(toggleOptions[1]?.getAttribute("aria-pressed")).toBe("true");
  });
  test("Multiple selection: Renders with correct default value", () => {
    const { getAllByRole } = render(<DxcToggleGroup options={options} defaultValue={[2, 4]} multiple />);
    const toggleOptions = getAllByRole("button");
    expect(toggleOptions[1]?.getAttribute("aria-pressed")).toBe("true");
    expect(toggleOptions[3]?.getAttribute("aria-pressed")).toBe("true");
  });
  test("Aria orientation is set correctly", () => {
    const { getByRole } = render(<DxcToggleGroup options={options} orientation="vertical" />);
    const toggleGroup = getByRole("toolbar");
    expect(toggleGroup.getAttribute("aria-orientation")).toBe("vertical");
  });
  test("Keyboard 'Enter' triggers onChange", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={options} onChange={onChange} />);
    const option = getByText("Amazon");
    option.focus();
    fireEvent.keyDown(option, { key: "Enter" });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test("Keyboard 'Space' triggers onChange", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={options} onChange={onChange} />);
    const option = getByText("Amazon");
    option.focus();
    fireEvent.keyDown(option, { key: " " });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test("Clicking a disabled button does not call onChange", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={optionsWithDisabled} onChange={onChange} />);
    const disabledOption = getByText("Ebay");
    fireEvent.click(disabledOption);
    expect(onChange).not.toHaveBeenCalled();
  });
  test("Button only renders icon if label is missing", () => {
    const icon = (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    );
    const iconOnlyOption = [{ value: 1, icon: icon, title: "Icon only" }];
    const { container, queryByText } = render(<DxcToggleGroup options={iconOnlyOption} />);
    expect(container.querySelector("svg")).toBeTruthy();
    expect(queryByText("Icon only")).toBeFalsy();
  });
  test("Disabled buttons have tabIndex -1", () => {
    const { getAllByRole } = render(<DxcToggleGroup options={optionsWithDisabled} />);
    const buttons = getAllByRole("button");
    expect(buttons[0]?.getAttribute("tabindex")).toBe("0");
    expect(buttons[1]?.getAttribute("tabindex")).toBe("-1");
  });
  test("Removes selected value when multiple is true and value is controlled", () => {
    const handleChange = jest.fn();
    const options = [
      { value: 1, label: "Amazon" },
      { value: 2, label: "Ebay" },
    ];
    const { getByRole } = render(<DxcToggleGroup options={options} value={[1, 2]} multiple onChange={handleChange} />);

    fireEvent.click(getByRole("button", { name: "Ebay" }));
    expect(handleChange).toHaveBeenCalledWith([1]);
  });

  test("Adds value when multiple is true and value is controlled", () => {
    const handleChange = jest.fn();
    const options = [
      { value: 1, label: "Amazon" },
      { value: 2, label: "Ebay" },
    ];
    const { getByRole } = render(<DxcToggleGroup options={options} value={[1]} multiple onChange={handleChange} />);

    fireEvent.click(getByRole("button", { name: "Ebay" }));
    expect(handleChange).toHaveBeenCalledWith([1, 2]);
  });
});
