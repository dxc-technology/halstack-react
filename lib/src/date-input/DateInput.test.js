import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcDateInput from "./DateInput.tsx";
import dayjs from "dayjs";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
};

global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};

describe("DateInput component tests", () => {
  test("Renders with correct label, helper text, optional, placeholder and clearable action", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcDateInput label="Example label" helperText="Example of helper text" placeholder optional clearable />
    );
    const input = getByRole("textbox");
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example of helper text")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(input.getAttribute("placeholder")).toBe("DD-MM-YYYY");
    userEvent.type(input, "10/10/2010");
    const closeAction = getAllByRole("button")[0];
    userEvent.click(closeAction);
    expect(input.value).toBe("");
  });
  test("Renders with custom error", () => {
    const { getByText } = render(<DxcDateInput error="Personalized error." />);
    expect(getByText("Personalized error.")).toBeTruthy();
  });
  test("Renders with an initial value when it is uncontrolled", () => {
    const { getByText, getByRole } = render(
      <DxcDateInput label="Default label" placeholder="Placeholder" defaultValue="21-10-2015" />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("button");

    expect(input.value).toBe("21-10-2015");
    userEvent.click(calendarAction);
    expect(getByText("21").getAttribute("aria-selected")).toBeTruthy();
    expect(getByText("October 2015")).toBeTruthy();
  });
  test("Renders with correct format: user typed date but it's invalid, onBlur error", () => {
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("10/90/2010");
      expect(error).toBe("Invalid date.");
    });
    const { getByRole } = render(<DxcDateInput label="With format MM/dd/yyyy" format="MM/dd/yyyy" onBlur={onBlur} />);
    const input = getByRole("textbox");

    userEvent.type(input, "10/90/2010");
    fireEvent.blur(input);
  });
  test("Renders with correct format: user typed date but it's invalid, onChange error", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcDateInput label="With format MM/dd/yyyy" format="MM/dd/yyyy" onChange={onChange} />
    );
    const input = getByRole("textbox");

    userEvent.type(input, "10/90/2010");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({ value: "10/90/2010", error: "Invalid date." });
  });
  test("Calendar renders with correct date: today's date", () => {
    const { getByText, getByRole } = render(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const d = dayjs();

    userEvent.click(calendarAction);
    expect(getByText(d.get("date")).getAttribute("aria-selected")).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Calendar renders with correct date: value prop", () => {
    const { getByText, getByRole } = render(<DxcDateInput value="20-10-2019" />);
    const calendarAction = getByRole("button");
    const d = dayjs("2019-10-20");

    userEvent.click(calendarAction);
    expect(getByText(d.get("date")).getAttribute("aria-selected")).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Calendar renders with correct date: user typed value", () => {
    const { getByText, getByRole } = render(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const d = dayjs("2010-1-1");
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-2010");
    userEvent.click(calendarAction);
    expect(getByText(d.get("date")).getAttribute("aria-selected")).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Calendar renders with correct date: invalid date, renders with today's date", () => {
    const onBlur = jest.fn();
    const { getByText, getByRole } = render(<DxcDateInput onBlur={onBlur} />);
    const calendarAction = getByRole("button");
    const d = dayjs();
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-xxxx");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "01-01-xxxx", error: "Invalid date." });
    userEvent.click(calendarAction);
    expect(getByText(d.get("date")).getAttribute("aria-selected")).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Selecting a date from the calendar with an specific format", () => {
    const { getByText, getByRole } = render(<DxcDateInput label="With format M-dd-yyyy" format="M-dd-yyyy" />);
    const input = getByRole("textbox");
    const calendarAction = getByRole("button");
    userEvent.click(calendarAction);
    const dayButton = getByText("10").closest("button");
    fireEvent.click(dayButton);
    let d = dayjs();
    d = d.set("date", 10);
    expect(getByText(d.get("date")).getAttribute("aria-selected")).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
    fireEvent.keyDown(document, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe(d.format("M-DD-YYYY"));
  });

  test("Selecting a date from the calendar (using keyboard presses)", () => {
    const { getByRole, getByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-2010");
    expect(input.value).toBe("01-01-2010");
    userEvent.click(calendarAction);
    expect(document.activeElement === getByText("1").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("1").closest("button"), {
      key: "ArrowRight",
      code: "ArrowRight",
      keyCode: 39,
      charCode: 39,
    });
    expect(document.activeElement === getByText("2").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("2").closest("button"), { key: "PageUp", code: "PageUp", keyCode: 33, charCode: 33 });
    expect(document.activeElement === getByText("2").closest("button")).toBeTruthy();
    expect(getByText("December 2009")).toBeTruthy();
    fireEvent.keyDown(getByText("2").closest("button"), {
      key: "PageDown",
      code: "PageDown",
      keyCode: 34,
      charCode: 34,
    });
    expect(document.activeElement === getByText("2").closest("button")).toBeTruthy();
    expect(getByText("January 2010")).toBeTruthy();
    fireEvent.keyDown(getByText("2").closest("button"), {
      key: "PageDown",
      code: "PageDown",
      keyCode: 34,
      charCode: 34,
      shiftKey: true,
    });
    expect(getByText("January 2011")).toBeTruthy();
    fireEvent.keyDown(getByText("2").closest("button"), {
      key: "PageUp",
      code: "PageUp",
      keyCode: 33,
      charCode: 33,
      shiftKey: true,
    });
    expect(getByText("January 2010")).toBeTruthy();
    expect(document.activeElement === getByText("2").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("2").closest("button"), { key: " ", code: "Space", keyCode: 32, charCode: 32 });
    expect(getByText("2").closest("button").getAttribute("aria-selected")).toBeTruthy();
    fireEvent.keyDown(document, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("02-01-2010");
  });

  test("Selecting a date from the calendar (using keyboard presses) part II", () => {
    const { getByRole, getByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-2010");
    expect(input.value).toBe("01-01-2010");
    userEvent.click(calendarAction);
    expect(document.activeElement === getByText("1").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("1").closest("button"), {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(document.activeElement === getByText("8").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("8").closest("button"), {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(document.activeElement === getByText("15").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("15").closest("button"), {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(document.activeElement === getByText("8").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("8").closest("button"), {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35,
    });
    expect(document.activeElement === getByText("10").closest("button")).toBeTruthy();
    fireEvent.keyDown(getByText("10").closest("button"), {
      key: "Home",
      code: "Home",
      keyCode: 36,
      charCode: 36,
    });
    fireEvent.keyDown(getByText("10").closest("button"), { key: " ", code: "Space", keyCode: 32, charCode: 32 });
    expect(input.value).toBe("10-01-2010");
  });

  test("onChange & onBlur functions are called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcDateInput onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2011, 9, 10);

    userEvent.type(input, "10-10-2011");
    expect(input.value).toBe("10-10-2011");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({ value: "10-10-2011", date: d });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "10-10-2011", date: d });
  });
  test("onChange & onBlur functions are called correctly, also with errors", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcDateInput onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");

    userEvent.type(input, "10-10-");
    expect(input.value).toBe("10-10-");
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(onChange).toHaveBeenCalledWith({ value: "10-10-", error: "Invalid date." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "10-10-", error: "Invalid date." });
  });
  test("onBlur function removes the error when it is fixed", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcDateInput onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2002, 1, 20);

    userEvent.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Invalid date." });
    userEvent.clear(input);
    userEvent.type(input, "20-02-2002");
    expect(input.value).toBe("20-02-2002");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "20-02-2002", date: d });
  });
  test("onBlur function removes the error when the input is empty", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcDateInput onBlur={onBlur} optional />);
    const input = getByRole("textbox");

    userEvent.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Invalid date." });
    userEvent.clear(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
  });
  test("onBlur & onChange functions error: required field (not optional)", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcDateInput onBlur={onBlur} onChange={onChange} />);
    const date = getByRole("textbox");

    userEvent.type(date, "t");
    expect(date.value).toBe("t");
    userEvent.clear(date);
    fireEvent.blur(date);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
  });
  test("Disabled date input (calendar action must be shown but not clickable)", () => {
    const { getByRole, queryByText } = render(<DxcDateInput disabled />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };

    expect(getByRole("textbox").disabled).toBeTruthy();
    userEvent.click(calendarAction);
    expect(queryByText(d.toLocaleString("en-US", options))).toBeFalsy();
  });
  test("Input has correct accesibility attributes", () => {
    const { getByRole } = render(<DxcDateInput label="Date input label" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-autocomplete")).toBeNull();
    expect(input.getAttribute("aria-controls")).toBeNull();
    expect(input.getAttribute("aria-expanded")).toBeNull();
    const calendarAction = getByRole("button");
    userEvent.click(calendarAction);
    const datePicker = getByRole("dialog");
    expect(datePicker.getAttribute("aria-modal")).toBe("true");
  });
});
