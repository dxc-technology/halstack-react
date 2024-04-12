import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import DxcDateInput from "./DateInput.tsx";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("DateInput component tests", () => {
  test("Renders with correct label, helper text, optional, placeholder and clearable action", async () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcDateInput
        label="Example label"
        helperText="Example of helper text"
        placeholder
        optional
        clearable
      />
    );
    const input = getByRole("textbox");
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example of helper text")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(input.getAttribute("placeholder")).toBe("DD-MM-YYYY");
    userEvent.type(input, "10/10/2010");
    const closeAction = getAllByRole("button")[0];
    await userEvent.click(closeAction);
    expect(input.value).toBe("");
  });

  test("Renders with custom error", () => {
    const { getByText } = render(<DxcDateInput error="Personalized error." />);
    expect(getByText("Personalized error.")).toBeTruthy();
  });

  test("Read-only variant doesn't open the calendar", async () => {
    const { getByRole, queryByRole } = render(
      <DxcDateInput value="20-10-2019" readOnly />
    );
    const calendarAction = getByRole("combobox");
    await userEvent.click(calendarAction);
    expect(queryByRole("dialog")).toBeFalsy();
  });

  test("Renders with an initial value when it is uncontrolled", async () => {
    const { getByText, getByRole } = render(
      <DxcDateInput label="Default label" defaultValue="21-10-2015" />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("combobox");
    expect(input.value).toBe("21-10-2015");
    await userEvent.click(calendarAction);
    expect(getByText("21").getAttribute("aria-selected")).toBe("true");
    expect(getByText("October 2015")).toBeTruthy();
  });

  test("Renders with correct format: user typed date but it's invalid, onBlur error", async () => {
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("10/90/2010");
      expect(error).toBe("Invalid date.");
    });
    const { getByRole } = render(
      <DxcDateInput
        label="With format MM/dd/yyyy"
        format="MM/dd/yyyy"
        onBlur={onBlur}
      />
    );
    const input = getByRole("textbox");
    await userEvent.click(input);
    await userEvent.keyboard("10");
    await userEvent.keyboard("/");
    await userEvent.keyboard("90");
    await userEvent.keyboard("/");
    await userEvent.keyboard("2010");
    fireEvent.blur(input);
  });

  test("Renders with correct format: user typed date but it's invalid, onChange error", async () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcDateInput
        label="With format MM/dd/yyyy"
        format="MM/dd/yyyy"
        onChange={onChange}
      />
    );
    const input = getByRole("textbox");
    await userEvent.click(input);
    await userEvent.keyboard("10");
    await userEvent.keyboard("/");
    await userEvent.keyboard("90");
    await userEvent.keyboard("/");
    await userEvent.keyboard("2010");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({
      value: "10/90/2010",
      error: "Invalid date.",
    });
  });

  test("Calendar renders with correct date: today's date", async () => {
    const { getByText, getByRole, getAllByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const d = dayjs();
    await userEvent.click(calendarAction);
    expect(
      (document.activeElement === getAllByText(d.get("date")).length) === 2 &&
        +d.get("date") > 20
        ? getAllByText(d.get("date"))[1]
        : getAllByText(d.get("date"))[0]
    ).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Calendar renders with correct date: value prop", async () => {
    const { getByText, getByRole, getAllByText } = render(
      <DxcDateInput value="20-10-2019" />
    );
    const calendarAction = getByRole("combobox");
    const d = dayjs("2019-10-20");
    await userEvent.click(calendarAction);
    expect(getAllByText(d.get("date"))[0].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Calendar renders with correct date: user typed value", async () => {
    const { getByText, getByRole, getAllByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const d = dayjs("2010-1-1");
    const input = getByRole("textbox");
    userEvent.type(input, "01-01-2010");
    await userEvent.click(calendarAction);
    expect(getAllByText(d.get("date"))[0].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Calendar renders with correct date: invalid date, renders with today's date", async () => {
    const onBlur = jest.fn();
    const { getByText, getByRole, getAllByText } = render(
      <DxcDateInput onBlur={onBlur} />
    );
    const calendarAction = getByRole("combobox");
    const d = dayjs();
    const input = getByRole("textbox");
    userEvent.type(input, "01-01-xxxx");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "01-01-xxxx",
      error: "Invalid date.",
    });
    await userEvent.click(calendarAction);
    expect(
      (document.activeElement === getAllByText(d.get("date")).length) === 2 &&
        +d.get("date") > 20
        ? getAllByText(d.get("date"))[1]
        : getAllByText(d.get("date"))[0]
    ).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Selecting a date from the calendar with an specific format", async () => {
    const { getAllByText, getByText, getByRole } = render(
      <DxcDateInput label="With format M-dd-yyyy" format="M-dd-yyyy" />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("combobox");
    await userEvent.click(calendarAction);
    const dayButton = getAllByText("10")[0].closest("button");
    fireEvent.click(dayButton);
    let d = dayjs();
    d = d.set("date", 10);
    expect(getAllByText(d.get("date"))[0].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe(d.format("M-DD-YYYY"));
  });

  test("Changing months using the arrows", async () => {
    const { getByText, getByRole, getByTitle } = render(
      <DxcDateInput
        label="label"
        format="dd-mm-yyyy"
        defaultValue="10-10-2000"
      />
    );
    const calendarAction = getByRole("combobox");
    await userEvent.click(calendarAction);
    let d = dayjs("10-10-2000", "DD-MM-YYYY", true);
    d = d.set("date", 10);
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
    const previousMonth = getByTitle("Previous month");
    await userEvent.click(previousMonth);
    expect(
      getByText(d.set("month", d.get("month") - 1).format("MMMM YYYY"))
    ).toBeTruthy();
    const nextMonth = getByTitle("Next month");
    await userEvent.click(nextMonth);
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });

  test("Selecting a date from the calendar from another month", async () => {
    const { getAllByText, getByText, getByRole } = render(
      <DxcDateInput format="dd-mm-yyyy" defaultValue="10-08-2021" />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("combobox");
    await userEvent.click(calendarAction);
    const dayButton = getAllByText("31")[0].closest("button");
    fireEvent.click(dayButton);
    let d = dayjs("10-08-2021", "DD-MM-YYYY", true);
    d = d.set("date", 31).set("month", 6);
    expect(getAllByText(d.get("date"))[0].getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe(d.format("DD-MM-YYYY"));
  });

  test("Selecting a year from the calendar year picker", async () => {
    const { getByText, getByRole } = render(
      <DxcDateInput format="dd-mm-yyyy" defaultValue="10-08-2021" />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("combobox");
    await userEvent.click(calendarAction);
    const d = dayjs("10-08-2021", "DD-MM-YYYY", true);
    await userEvent.click(getByText(d.format("MMMM YYYY")));
    expect(getByText("2024")).toBeTruthy();
    await userEvent.click(getByText("2024"));
    await userEvent.click(getByText(d.set("year", 2024).format("MMMM YYYY")));
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe(d.format("DD-MM-YYYY"));
  });

  test("Selecting a date from the calendar (using keyboard presses)", async () => {
    const { getByRole, getAllByText, getByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const input = getByRole("textbox");
    userEvent.type(input, "01-01-2010");
    expect(input.value).toBe("01-01-2010");
    await userEvent.click(calendarAction);
    expect(
      document.activeElement === getAllByText("1")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("1")[0].closest("button"), {
      key: "ArrowRight",
      code: "ArrowRight",
      keyCode: 39,
      charCode: 39,
    });
    expect(
      document.activeElement === getAllByText("2")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("2")[0].closest("button"), {
      key: "PageUp",
      code: "PageUp",
      keyCode: 33,
      charCode: 33,
    });
    expect(
      document.activeElement === getAllByText("2")[0].closest("button")
    ).toBeTruthy();
    expect(getByText("December 2009")).toBeTruthy();
    fireEvent.keyDown(getAllByText("2")[0].closest("button"), {
      key: "PageDown",
      code: "PageDown",
      keyCode: 34,
      charCode: 34,
    });
    expect(
      document.activeElement === getAllByText("2")[0].closest("button")
    ).toBeTruthy();
    expect(getByText("January 2010")).toBeTruthy();
    fireEvent.keyDown(getAllByText("2")[0].closest("button"), {
      key: "PageDown",
      code: "PageDown",
      keyCode: 34,
      charCode: 34,
      shiftKey: true,
    });
    expect(getByText("January 2011")).toBeTruthy();
    fireEvent.keyDown(getAllByText("2")[0].closest("button"), {
      key: "PageUp",
      code: "PageUp",
      keyCode: 33,
      charCode: 33,
      shiftKey: true,
    });
    expect(getByText("January 2010")).toBeTruthy();
    expect(
      document.activeElement === getAllByText("2")[0].closest("button")
    ).toBeTruthy();
    fireEvent.click(getAllByText("2")[0].closest("button"), {
      key: " ",
      code: "Space",
      keyCode: 32,
      charCode: 32,
    });
    expect(
      getAllByText("2")[0].closest("button").getAttribute("aria-selected")
    ).toBe("true");
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe("02-01-2010");
  });

  test("Selecting a date from the calendar (using keyboard presses) part II", async () => {
    const { getByRole, getAllByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const input = getByRole("textbox");
    userEvent.type(input, "01-01-2010");
    expect(input.value).toBe("01-01-2010");
    await userEvent.click(calendarAction);
    expect(
      document.activeElement === getAllByText("1")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("1")[0].closest("button"), {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(
      document.activeElement === getAllByText("8")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("8")[0].closest("button"), {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(
      document.activeElement === getAllByText("15")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("15")[0].closest("button"), {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(
      document.activeElement === getAllByText("8")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("8")[0].closest("button"), {
      key: "End",
      code: "End",
      keyCode: 35,
      charCode: 35,
    });
    expect(
      document.activeElement === getAllByText("10")[0].closest("button")
    ).toBeTruthy();
    fireEvent.keyDown(getAllByText("10")[0].closest("button"), {
      key: "Home",
      code: "Home",
      keyCode: 36,
      charCode: 36,
    });
    fireEvent.keyDown(getAllByText("10")[0].closest("button"), {
      key: " ",
      code: "Space",
      keyCode: 32,
      charCode: 32,
    });
    expect(input.value).toBe("10-01-2010");
  });

  test("onChange & onBlur functions are called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcDateInput onChange={onChange} onBlur={onBlur} />
    );
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
    const { getByRole } = render(
      <DxcDateInput onChange={onChange} onBlur={onBlur} />
    );
    const input = getByRole("textbox");
    userEvent.type(input, "10-10-");
    expect(input.value).toBe("10-10-");
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(onChange).toHaveBeenCalledWith({
      value: "10-10-",
      error: "Invalid date.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "10-10-",
      error: "Invalid date.",
    });
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
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Invalid date.",
    });
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
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Invalid date.",
    });
    userEvent.clear(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
  });

  test("onBlur & onChange functions error: required field (not optional)", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcDateInput onBlur={onBlur} onChange={onChange} />
    );
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

  test("Disabled date input (calendar action must be shown but not clickable)", async () => {
    const { getByRole, queryByText } = render(<DxcDateInput disabled />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    expect(getByRole("textbox").disabled).toBeTruthy();
    await userEvent.click(calendarAction);
    expect(queryByText(d.toLocaleString("en-US", options))).toBeFalsy();
  });

  test("Input has correct accessibility attributes", async () => {
    const { getByRole } = render(<DxcDateInput label="Date input label" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-autocomplete")).toBeNull();
    expect(input.getAttribute("aria-controls")).toBeNull();
    expect(input.getAttribute("aria-expanded")).toBeNull();
    const calendarAction = getByRole("combobox");
    expect(calendarAction.getAttribute("aria-autocomplete")).toBeNull();
    expect(calendarAction.getAttribute("aria-controls")).toBeTruthy();
    expect(calendarAction.getAttribute("aria-describedby")).toBeTruthy();
    expect(
      calendarAction.getAttribute("aria-describedby") ===
        calendarAction.getAttribute("aria-controls")
    ).toBeTruthy();
    expect(calendarAction.getAttribute("aria-expanded")).toBe("false");
    await userEvent.click(calendarAction);
    const datePicker = getByRole("dialog");
    expect(datePicker.getAttribute("aria-modal")).toBe("true");
    expect(calendarAction.getAttribute("aria-expanded")).toBe("true");
    expect(
      document.getElementById(calendarAction.getAttribute("aria-describedby"))
    ).toBeTruthy();
    await userEvent.type(calendarAction, "{esc}");
    expect(calendarAction.getAttribute("aria-expanded")).toBe("false");
  });

  test("Chooses the correct year when two digit format", async () => {
    const { getByText, getByRole, getAllByText } = render(
      <DxcDateInput
        label="Default label"
        format="dd-mm-yy"
        defaultValue="21-10-80"
      />
    );
    const input = getByRole("textbox");
    const calendarAction = getByRole("combobox");
    expect(input.value).toBe("21-10-80");
    await userEvent.click(calendarAction);
    expect(getByText("21").getAttribute("aria-selected")).toBe("true");
    expect(getByText("October 1980")).toBeTruthy();
    await userEvent.type(calendarAction, "{esc}");
    fireEvent.change(input, { target: { value: "21-10-10" } });
    await userEvent.click(calendarAction);
    expect(getByText("October 1910")).toBeTruthy();
    await userEvent.click(getByText("October 1910"));
    await userEvent.click(getByText("2010"));
    await userEvent.click(getAllByText("1")[0]);
    expect(input.value).toBe("01-10-10");
    await userEvent.type(calendarAction, "{esc}");
    fireEvent.change(input, { target: { value: "21-10-80" } });
    await userEvent.click(calendarAction);
    expect(getByText("October 2080")).toBeTruthy();
  });
});
