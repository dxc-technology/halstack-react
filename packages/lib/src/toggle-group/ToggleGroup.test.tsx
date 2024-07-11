import { fireEvent, render } from "@testing-library/react";
import DxcToggleGroup from "./ToggleGroup";

const options = [
  {
    value: 1,
    label: "Amazon",
  },
  {
    value: 2,
    label: "Ebay",
  },
  {
    value: 3,
    label: "Apple",
  },
  {
    value: 4,
    label: "Google",
  },
];

describe("Toggle group component tests", () => {
  test("Toggle group renders with correct labels", () => {
    const { getByText } = render(
      <DxcToggleGroup label="Toggle group label" helperText="Toggle group helper text" options={options} />
    );
    expect(getByText("Toggle group label")).toBeTruthy();
    expect(getByText("Toggle group helper text")).toBeTruthy();
    expect(getByText("Amazon")).toBeTruthy();
    expect(getByText("Ebay")).toBeTruthy();
    expect(getByText("Apple")).toBeTruthy();
    expect(getByText("Google")).toBeTruthy();
  });

  test("Toggle group renders with correct aria-label in only-icon scenario", () => {
    const { getByRole } = render(
      <DxcToggleGroup
        label="Toggle group label"
        helperText="Toggle group helper text"
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

  test("Function on change is not called when disable", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup options={options} onChange={onChange} disabled />);
    const option = getByText("Ebay");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test("Uncontrolled multiple toggle group calls correct function on change with value when is multiple", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(<DxcToggleGroup options={options} onChange={onChange} multiple />);
    const toggleOptions = getAllByRole("button");
    fireEvent.click(toggleOptions[0]);
    expect(onChange).toHaveBeenCalledWith([1]);
    fireEvent.click(toggleOptions[1]);
    fireEvent.click(toggleOptions[3]);
    expect(onChange).toHaveBeenCalledWith([1, 2, 4]);
    expect(toggleOptions[0].getAttribute("aria-pressed")).toBe("true");
    expect(toggleOptions[1].getAttribute("aria-pressed")).toBe("true");
    expect(toggleOptions[3].getAttribute("aria-pressed")).toBe("true");
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
    expect(toggleOptions[1].getAttribute("aria-pressed")).toBe("true");
  });

  test("Multiple selection: Renders with correct default value", () => {
    const { getAllByRole } = render(<DxcToggleGroup options={options} defaultValue={[2, 4]} multiple />);
    const toggleOptions = getAllByRole("button");
    expect(toggleOptions[1].getAttribute("aria-pressed")).toBe("true");
    expect(toggleOptions[3].getAttribute("aria-pressed")).toBe("true");
  });
});
