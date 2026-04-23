import { render } from "@testing-library/react";
import DxcTimeInput from "./TimeInput";
import MockDOMRect from "../../test/mocks/domRectMock";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

beforeEach(() => jest.clearAllMocks());

beforeEach(() => jest.clearAllMocks());

describe("DxcTimeInput rendering", () => {
  it("renders label", () => {
    const { getByText } = render(<DxcTimeInput label="Time input" helperText="Pick a time" />);
    expect(getByText("Time input")).toBeTruthy();
    expect(getByText("Pick a time")).toBeTruthy();
  });

  it("renders hour, minute spinbuttons by default", () => {
    const { getAllByRole } = render(<DxcTimeInput label="Time input" timeFormat="24" />);
    const spinbuttons = getAllByRole("spinbutton");
    expect(spinbuttons).toHaveLength(2); // hour + minute
  });

  it("renders seconds spinbutton when showSeconds is true", () => {
    const { getAllByRole } = render(<DxcTimeInput label="Time input" timeFormat="24" showSeconds />);
    const spinbuttons = getAllByRole("spinbutton");
    expect(spinbuttons).toHaveLength(3); // hour + minute + second
  });

  it("renders AM/PM spinbutton in 12h format", () => {
    const { getAllByRole } = render(<DxcTimeInput label="Time input" timeFormat="12" />);
    const spinbuttons = getAllByRole("spinbutton");
    expect(spinbuttons).toHaveLength(3); // hour + minute + dayPeriod
  });

  it("renders all spinbuttons in 12h format with seconds", () => {
    const { getAllByRole } = render(<DxcTimeInput label="Time input" timeFormat="12" showSeconds />);
    const spinbuttons = getAllByRole("spinbutton");
    expect(spinbuttons).toHaveLength(4); // hour + minute + second + dayPeriod
  });

  it("renders clear button when clearable is true", () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(<DxcTimeInput clearable value="05:05 AM" onChange={mockOnChange} />);
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(2);
    if (buttons[0]) userEvent.click(buttons[0]);
    expect(mockOnChange).toHaveBeenCalledWith("");
  });

  it("renders time picker and values are selected", () => {
    const mockOnChange = jest.fn();
    const { getByRole, getAllByRole } = render(<DxcTimeInput value="05:30 AM" onChange={mockOnChange} />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    userEvent.click(button);
    const hourButton = getAllByRole("button", { name: "05" }).find((hourButton) => hourButton.id.includes("hour"));
    const minuteButton = getAllByRole("button", { name: "30" }).find((minuteButton) =>
      minuteButton.id.includes("minute")
    );
    const amButton = getByRole("button", { name: "AM" });
    expect(hourButton?.getAttribute("aria-selected")).toBe("true");
    expect(minuteButton?.getAttribute("aria-selected")).toBe("true");
    expect(amButton?.getAttribute("aria-selected")).toBe("true");

    const newHourButton = getAllByRole("button", { name: "10" }).find((hourButton) => hourButton.id.includes("hour"));
    if (newHourButton) userEvent.click(newHourButton);
    expect(mockOnChange).toHaveBeenCalledWith("10:30 AM");
  });

  it("renders error message", () => {
    const { getByText } = render(<DxcTimeInput error="Invalid time" />);
    expect(getByText("Invalid time")).toBeTruthy();
  });

  it("Calls onBlur with the correct value", () => {
    const mockOnBlur = jest.fn();
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(<DxcTimeInput label="Time input" onBlur={mockOnBlur} onChange={mockOnChange} />);
    const inputs = getAllByRole("spinbutton");
    expect(inputs).toHaveLength(3); // hour + minute + dayPeriod
    userEvent.tab();
    expect(inputs[0]).toHaveFocus();
    userEvent.keyboard("{ArrowUp}");
    expect(mockOnChange).toHaveBeenCalledWith("01:undefined undefined");
    userEvent.tab();
    expect(inputs[1]).toHaveFocus();
    userEvent.keyboard("{ArrowDown}");
    expect(mockOnChange).toHaveBeenCalledWith("01:59 undefined");
    userEvent.tab();
    expect(inputs[2]).toHaveFocus();
    userEvent.keyboard("{A}");
    expect(mockOnChange).toHaveBeenCalledWith("01:59 AM");
    userEvent.tab();
    expect(mockOnBlur).toHaveBeenCalledWith({ value: "01:59 AM", error: undefined });
  });

  it("TimePicker keyboard interaction", () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText, getAllByText } = render(<DxcTimeInput label="Time input" onChange={mockOnChange} />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    userEvent.click(button);
    expect(getByText("AM")).toBeTruthy();
    const hourbutton = getAllByText("07");
    if (hourbutton[0]) userEvent.click(hourbutton[0]);
    expect(mockOnChange).toHaveBeenCalledWith("07:undefined undefined");
    const minuteButton = getAllByText("30");
    if (minuteButton[0]) userEvent.click(minuteButton[0]);
    expect(mockOnChange).toHaveBeenCalledWith("07:30 undefined");
    const amButton = getByText("AM");
    expect(amButton).toBeTruthy();
    userEvent.click(amButton);
    expect(mockOnChange).toHaveBeenCalledWith("07:30 AM");
  });
});
