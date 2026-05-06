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

  it("renders time picker and values are correctly selected", () => {
    const mockOnChange = jest.fn();
    const { getByRole, getAllByRole } = render(<DxcTimeInput value="05:30 AM" onChange={mockOnChange} />);
    const pickerButton = getByRole("button");
    expect(pickerButton).toBeTruthy();
    userEvent.click(pickerButton);
    const hourButton = getAllByRole("option", { name: "05" }).find((hourButton) => hourButton.id.includes("hour"));
    const minuteButton = getAllByRole("option", { name: "30" }).find((minuteButton) =>
      minuteButton.id.includes("minute")
    );
    const amButton = getByRole("option", { name: "AM" });
    expect(hourButton?.getAttribute("aria-selected")).toBe("true");
    expect(minuteButton?.getAttribute("aria-selected")).toBe("true");
    expect(amButton?.getAttribute("aria-selected")).toBe("true");

    const newHourButton = getAllByRole("option", { name: "10" }).find((hourButton) => hourButton.id.includes("hour"));
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
    expect(mockOnChange).toHaveBeenCalledWith("01: ");
    userEvent.tab();
    expect(inputs[1]).toHaveFocus();
    userEvent.keyboard("{ArrowDown}");
    expect(mockOnChange).toHaveBeenCalledWith("01:59 ");
    userEvent.tab();
    expect(inputs[2]).toHaveFocus();
    userEvent.keyboard("{A}");
    expect(mockOnChange).toHaveBeenCalledWith("01:59 AM");
    userEvent.tab();
    expect(mockOnBlur).toHaveBeenCalledWith({ value: "01:59 AM", error: undefined });
  });

  it("TimePicker click interaction", () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText, getAllByText } = render(<DxcTimeInput label="Time input" onChange={mockOnChange} />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    userEvent.click(button);
    expect(getByText("AM")).toBeTruthy();
    const hourbutton = getAllByText("07");
    if (hourbutton[0]) userEvent.click(hourbutton[0]);
    expect(mockOnChange).toHaveBeenCalledWith("07:00 AM");
    const minuteButton = getAllByText("30");
    if (minuteButton[0]) userEvent.click(minuteButton[0]);
    expect(mockOnChange).toHaveBeenCalledWith("07:30 AM");
    const amButton = getAllByText("AM")[0];
    expect(amButton).toBeTruthy();
    if (amButton) userEvent.click(amButton);
    expect(mockOnChange).toHaveBeenCalledWith("07:30 AM");
  });

  it("TimePicker keyboard interaction", () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText } = render(<DxcTimeInput label="Time input" onChange={mockOnChange} />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    userEvent.click(button);
    expect(getByText("AM")).toBeTruthy();
    userEvent.keyboard("{ArrowDown}");
    userEvent.keyboard("{ArrowDown}");
    userEvent.keyboard("{Enter}");
    expect(mockOnChange).toHaveBeenCalledWith("03:00 AM");
    userEvent.tab();
    userEvent.keyboard("{ArrowUp}");
    userEvent.keyboard("{Enter}");
    expect(mockOnChange).toHaveBeenCalledWith("03:55 AM");
    userEvent.keyboard("{ArrowDown}");
    userEvent.keyboard(" ");
    expect(mockOnChange).toHaveBeenCalledWith("03:00 AM");
    userEvent.tab();
    userEvent.keyboard("{ArrowDown}");
    userEvent.keyboard("{Enter}");
    expect(mockOnChange).toHaveBeenCalledWith("03:00 PM");
  });

  it("TimeInput correctly move focus when each spinbutton is completed", () => {
    const mockOnChange = jest.fn();
    const { getAllByRole, getByText } = render(
      <DxcTimeInput
        label="Time input"
        timeFormat="24"
        clearable
        defaultValue="23:30:00"
        showSeconds
        onChange={mockOnChange}
      />
    );
    const inputs = getAllByRole("spinbutton");
    expect(inputs).toHaveLength(3);
    expect(inputs[0]).toHaveValue(23);
    expect(inputs[1]).toHaveValue(30);
    expect(inputs[2]).toHaveValue(0);
    userEvent.click(getByText("23"));
    expect(inputs[0]).toHaveFocus();
    userEvent.keyboard("1");
    userEvent.keyboard("0");
    expect(mockOnChange).toHaveBeenCalledWith("10:30:00");
    expect(inputs[1]).toHaveFocus();
    userEvent.keyboard("{ArrowUp}");
    expect(mockOnChange).toHaveBeenCalledWith("10:31:00");
    userEvent.keyboard("{ArrowDown}");
    userEvent.keyboard("{ArrowDown}");
    expect(mockOnChange).toHaveBeenCalledWith("10:29:00");
    userEvent.keyboard("4");
    userEvent.keyboard("5");
    expect(mockOnChange).toHaveBeenCalledWith("10:45:00");
    expect(inputs[2]).toHaveFocus();
    userEvent.keyboard("{ArrowDown}");
    userEvent.keyboard("{ArrowUp}");
    userEvent.keyboard("{ArrowUp}");
    expect(mockOnChange).toHaveBeenCalledWith("10:45:01");
    userEvent.keyboard("3");
    userEvent.keyboard("0");
    expect(mockOnChange).toHaveBeenCalledWith("10:45:30");
    expect(inputs[2]).toHaveFocus();
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(2);
    if (buttons[0]) userEvent.click(buttons[0]);
    expect(mockOnChange).toHaveBeenCalledWith("");
    expect(inputs[0]?.getAttribute("aria-valuenow")).toBeNull();
    expect(inputs[1]?.getAttribute("aria-valuenow")).toBeNull();
    expect(inputs[2]?.getAttribute("aria-valuenow")).toBeNull();
  });

  it("Navigate timeInput using the keyboard", () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(
      <DxcTimeInput
        label="Time input"
        timeFormat="12"
        clearable
        defaultValue="10:30:00"
        showSeconds
        onChange={mockOnChange}
      />
    );
    const inputs = getAllByRole("spinbutton");
    expect(inputs).toHaveLength(4);
    expect(inputs[0]).toHaveValue(10);
    expect(inputs[1]).toHaveValue(30);
    expect(inputs[2]).toHaveValue(0);
    expect(inputs[3]).toHaveValue(0); // AM
    userEvent.tab();
    expect(inputs[0]).toHaveFocus();
    userEvent.keyboard("{ArrowRight}");
    expect(inputs[1]).toHaveFocus();
    userEvent.keyboard("{ArrowRight}");
    expect(inputs[2]).toHaveFocus();
    userEvent.keyboard("{ArrowRight}");
    expect(inputs[3]).toHaveFocus();
    userEvent.keyboard("{ArrowLeft}");
    expect(inputs[2]).toHaveFocus();
    userEvent.keyboard("{ArrowLeft}");
    expect(inputs[1]).toHaveFocus();
    userEvent.keyboard("{ArrowLeft}");
    expect(inputs[0]).toHaveFocus();
    userEvent.tab();
    userEvent.tab();
    userEvent.tab();
    expect(inputs[3]).toHaveFocus();
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(2);
    userEvent.tab();
    expect(buttons[0]).toHaveFocus();
    userEvent.tab();
    expect(buttons[1]).toHaveFocus();
  });

  it("Mixing keyboard inputs", () => {
    const mockOnChange = jest.fn();
    const { getAllByRole } = render(
      <DxcTimeInput
        label="Time input"
        timeFormat="12"
        clearable
        defaultValue="10:30:00 AM"
        showSeconds
        onChange={mockOnChange}
      />
    );
    const inputs = getAllByRole("spinbutton");
    expect(inputs).toHaveLength(4);
    expect(inputs[0]).toHaveValue(10);
    expect(inputs[1]).toHaveValue(30);
    expect(inputs[2]).toHaveValue(0);
    expect(inputs[3]).toHaveValue(0); // AM
    userEvent.tab();
    expect(inputs[0]).toHaveFocus();
    userEvent.keyboard("1");
    userEvent.keyboard("2");
    expect(mockOnChange).toHaveBeenCalledWith("12:30:00 AM");
    expect(inputs[1]).toHaveFocus();
    userEvent.keyboard("{ArrowUp}");
    userEvent.keyboard("{5}");
    expect(mockOnChange).toHaveBeenCalledWith("12:05:00 AM");
  });
});
