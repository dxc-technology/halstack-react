import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcDateInput from "./DateInput";

// setup function
const setup = (jsx) => ({
  user: userEvent.setup(),
  ...render(jsx),
});

describe("DateInput component tests", () => {
  test("Renders with correct label, helper text, optional, placeholder and clearable action", async () => {
    const { getByText, getByRole, getAllByRole, user } = setup(
      <DxcDateInput label="Example label" helperText="Example of helper text" placeholder optional clearable />
    );
    const input = getByRole("textbox");
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example of helper text")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(input.getAttribute("placeholder")).toBe("DD-MM-YYYY");
    await user.type(input, "10/10/2010");
    const closeAction = getAllByRole("button")[0];
    await user.click(closeAction);
    expect(input.value).toBe("");
  });
  test("Renders with custom error", async () => {
    const { getByText, user } = setup(<DxcDateInput error="Personalized error." />);
    expect(getByText("Personalized error.")).toBeTruthy();
  });
  test("Renders with an initial value when it is uncontrolled", async () => {
    const { getByText, getByRole, user } = setup(
      <DxcDateInput label="Default label" placeholder="Placeholder" defaultValue="21-10-2015" />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("button");
    const d = new Date(2015, 9, 21);
    const options = { weekday: "short", month: "short", day: "numeric" };

    expect(input.value).toBe("21-10-2015");
    await user.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });
  test("Renders with correct format: user typed date but it's invalid, onBlur error", async () => {
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("10/90/2010");
      expect(error).toBe("Invalid date.");
    });
    const { getByRole, user } = setup(
      <DxcDateInput label="With format MM/dd/yyyy" format="MM/dd/yyyy" onBlur={onBlur} />
    );
    const input = getByRole("textbox");

    await user.type(input, "10/90/2010");
    fireEvent.blur(input);
  });
  test("Renders with correct format: user typed date but it's invalid, onChange error", async () => {
    const onChange = jest.fn();
    const { getByRole, user } = setup(
      <DxcDateInput label="With format MM/dd/yyyy" format="MM/dd/yyyy" onChange={onChange} />
    );
    const input = getByRole("textbox");

    await user.type(input, "10/90/2010");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({ value: "10/90/2010", error: "Invalid date." });
  });
  test("Calendar renders with correct date: today's date", async () => {
    const { getByText, getByRole, user } = setup(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };

    await user.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });
  test("Calendar renders with correct date: value prop", async () => {
    const { getByText, getByRole, user } = setup(<DxcDateInput value="20-10-2019" />);
    const calendarAction = getByRole("button");
    const d = new Date(2019, 9, 20);
    const options = { weekday: "short", month: "short", day: "numeric" };

    await user.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });
  test("Calendar renders with correct date: user typed value", async () => {
    const { getByText, getByRole, user } = setup(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const d = new Date(2010, 0, 1);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const input = getByRole("textbox");

    await user.type(input, "01-01-2010");
    await user.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });
  test("Calendar renders with correct date: invalid date, renders with today's date", async () => {
    const onBlur = jest.fn();
    const { getByText, getByRole, user } = setup(<DxcDateInput onBlur={onBlur} />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    const input = getByRole("textbox");

    await user.type(input, "01-01-xxxx");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "01-01-xxxx", error: "Invalid date." });
    await user.click(calendarAction);
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
  });
  test("Selecting a date from the calendar with an specific format", async () => {
    const { getByText, getByRole, user } = setup(<DxcDateInput label="With format M-dd-yyyy" format="M-dd-yyyy" />);
    const input = getByRole("textbox");
    const calendarAction = getByRole("button");
    await user.click(calendarAction);
    const dayButton = getByText("10").closest("button");
    fireEvent.click(dayButton);
    const d = new Date();
    d.setDate(10);
    const options = { weekday: "short", month: "short", day: "numeric" };
    expect(getByText(d.toLocaleString("en-US", options))).toBeTruthy();
    fireEvent.keyDown(document, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe(`${d.getMonth() + 1}-10-${d.getFullYear()}`);
  });
  test("Selecting a date from the calendar (using keyboard presses)", async () => {
    const { getByRole, user } = setup(<DxcDateInput />);
    const calendarAction = getByRole("button");
    const input = getByRole("textbox");

    await user.type(input, "01-01-2010");
    await user.click(calendarAction);
    fireEvent.keyDown(document, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    fireEvent.keyDown(document, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    fireEvent.keyDown(document, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    fireEvent.keyDown(document, { key: "ArrowLeft", code: "ArrowLeft", keyCode: 37, charCode: 37 });
    fireEvent.keyDown(document, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("03-01-2010");
  });
  test("onChange & onBlur functions are called correctly", async () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole, user } = setup(<DxcDateInput onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2011, 9, 10);

    await user.type(input, "10-10-2011");
    expect(input.value).toBe("10-10-2011");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({ value: "10-10-2011", date: d });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "10-10-2011", date: d });
  });
  test("onChange & onBlur functions are called correctly, also with errors", async () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole, user } = setup(<DxcDateInput onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");

    await user.type(input, "10-10-");
    expect(input.value).toBe("10-10-");
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(onChange).toHaveBeenCalledWith({ value: "10-10-", error: "Invalid date." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "10-10-", error: "Invalid date." });
  });
  test("onBlur function removes the error when it is fixed", async () => {
    const onBlur = jest.fn();
    const { getByRole, user } = setup(<DxcDateInput onBlur={onBlur} />);
    const input = getByRole("textbox");
    const d = new Date(2002, 1, 20);

    await user.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Invalid date." });
    await user.clear(input);
    await user.type(input, "20-02-2002");
    expect(input.value).toBe("20-02-2002");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "20-02-2002", date: d });
  });
  test("onBlur function removes the error when the input is empty", async () => {
    const onBlur = jest.fn();
    const { getByRole, user } = setup(<DxcDateInput onBlur={onBlur} optional />);
    const input = getByRole("textbox");

    await user.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Invalid date." });
    await user.clear(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
  });
  test("onBlur & onChange functions error: required field (not optional)", async () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole, user } = setup(<DxcDateInput onBlur={onBlur} onChange={onChange} />);
    const date = getByRole("textbox");

    await user.type(date, "t");
    expect(date.value).toBe("t");
    await user.clear(date);
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
  test("Disabled date input (calendar action must be shown but not clickable)", async () => {
    const { getByRole, queryByText, user } = setup(<DxcDateInput disabled />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };

    expect(getByRole("textbox").disabled).toBeTruthy();
    await user.click(calendarAction);
    expect(queryByText(d.toLocaleString("en-US", options))).toBeFalsy();
  });
  test("Input has correct accesibility attributes", async () => {
    const { getByRole, user } = setup(<DxcDateInput label="Date input label" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-autocomplete")).toBeNull();
    expect(input.getAttribute("aria-controls")).toBeNull();
    expect(input.getAttribute("aria-expanded")).toBeNull();
    const calendarAction = getByRole("button");
    await user.click(calendarAction);
    const datePicker = getByRole("dialog");
    expect(datePicker.getAttribute("aria-modal")).toBe("true");
  });
});
