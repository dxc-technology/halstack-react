import { render } from "@testing-library/react";
import DxcTimeInput from "./TimeInput";
import MockDOMRect from "../../test/mocks/domRectMock";
import userEvent from "@testing-library/user-event";

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

  //   it("renders error message", () => {
  //     render(<DxcTimeInput error="Invalid time" />);
  //     expect(screen.getByText("Invalid time")).toBeInTheDocument();
  //   });
});
