import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcNewDate from "../src/new-date/NewDate";

describe("NewDate component tests", () => {
  test("Renders with correct label, helper text, optional, placeholder and clearable action", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcNewDate label="Example label" helperText="Example of helper text" placeholder optional clearable />
    );
    const input = getByRole("textbox");
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example of helper text")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(input.getAttribute("placeholder")).toBe("DD-MM-YYYY");
    userEvent.type(input, "10/90/2010");
    const closeAction = getAllByRole("button")[0];
    userEvent.click(closeAction);
    expect(input.value).toBe("");
  });

  test("Renders with personalized error", () => {
    const { getByText } = render(<DxcNewDate error="Personalized error." />);

    expect(getByText("Personalized error.")).toBeTruthy();
  });

  test("Renders with correct format: user typed date but it's invalid", () => {
    const { getByText, getByRole } = render(<DxcNewDate label="With format MM/dd/yyyy" format="MM/dd/yyyy" />);
    const input = getByRole("textbox");

    userEvent.type(input, "10/90/2010");
    fireEvent.blur(input);
    expect(getByText("Invalid date.")).toBeTruthy();
  });

  test("Calendar renders with correct date: today's date", () => {
    const { getByText, getByRole } = render(<DxcNewDate />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };

    userEvent.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });

  test("Calendar renders with correct date: value prop", () => {
    const { getByText, getByRole } = render(<DxcNewDate value="20-10-2019" />);
    const calendarAction = getByRole("button");
    const d = new Date(2019, 9, 20);
    const options = { weekday: "short", month: "short", day: "numeric" };

    userEvent.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });

  test("Calendar renders with correct date: user typed value", () => {
    const { getByText, getByRole } = render(<DxcNewDate />);
    const calendarAction = getByRole("button");
    const d = new Date(2010, 0, 1);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-2010");
    userEvent.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });

  test("Calendar renders with correct date: invalid date, renders with today's date", () => {
    const { getByText, getByRole } = render(<DxcNewDate />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-xxxx");
    fireEvent.blur(input);
    expect(getByText("Invalid date.")).toBeTruthy();
    userEvent.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });

  test("Selecting a date from the calendar with an specific format", () => {
    const { getByText, getByRole } = render(<DxcNewDate label="With format M-dd-yyyy" format="M-dd-yyyy" />);
    const input = getByRole("textbox");
    const calendarAction = getByRole("button");
    userEvent.click(calendarAction);
    const dayButton = getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    const d = new Date();
    d.setDate(10);
    const options = { weekday: "short", month: "short", day: "numeric" };
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
    fireEvent.keyDown(document, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe(`${d.getMonth() + 1}-10-${d.getFullYear()}`);
  });

  test("Selecting a date from the calendar (using keyboard presses)", () => {
    const { getByRole } = render(<DxcNewDate />);
    const calendarAction = getByRole("button");
    const input = getByRole("textbox");

    userEvent.type(input, "01-01-2010");
    userEvent.click(calendarAction);
    fireEvent.keyDown(document, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    fireEvent.keyDown(document, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    fireEvent.keyDown(document, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    fireEvent.keyDown(document, { key: "ArrowLeft", code: "ArrowLeft", keyCode: 37, charCode: 37 });
    fireEvent.keyDown(document, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("03-01-2010");
  });

  test("onChange & onBlur functions are called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcNewDate onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2011, 9, 10);

    userEvent.type(input, "10-10-2011");
    expect(input.value).toBe("10-10-2011");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({ value: "10-10-2011", date: d });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "10-10-2011", error: null, date: d });
  });

  test("onChange & onBlur functions are called correctly, also with errors", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcNewDate onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2011, 9, 10);

    userEvent.type(input, "10-10-");
    expect(input.value).toBe("10-10-");
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(onChange).toHaveBeenCalledWith({ value: "10-10-", date: null });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "10-10-", error: "Invalid date.", date: null });
  });

  test("onBlur function removes the error when it is fixed", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcNewDate onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2002, 1, 20);

    userEvent.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Invalid date.", date: null });
    userEvent.clear(input);
    userEvent.type(input, "20-02-2002");
    expect(input.value).toBe("20-02-2002");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "20-02-2002", error: null, date: d });
  });

  test("onBlur function removes the error when the input is empty", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcNewDate onBlur={onBlur} />);
    const input = getByRole("textbox");

    userEvent.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Invalid date.", date: null });
    userEvent.clear(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: null, date: null });
  });

  test("Disabled date (calendar action must be shown but not clickable)", () => {
    const { getByRole, queryByText } = render(<DxcNewDate disabled />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };

    expect(getByRole("textbox").disabled).toBeTruthy();
    userEvent.click(calendarAction);
    expect(queryByText(d.toLocaleString("en-US", options))).toBeFalsy();
  });

  test("Input has correct accesibility attributes", () => {
    const { getByRole } = render(<DxcNewDate label="Date label" />);
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
