import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import DxcDateInput from "./DateInput";
import MockDOMRect from "../../test/mocks/domRectMock";
import { HalstackProvider } from "../HalstackContext";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("DateInput component tests", () => {
  test("Renders with correct label, helper text, optional, placeholder and clearable action", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcDateInput label="Example label" helperText="Example of helper text" placeholder optional clearable />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example of helper text")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(input.getAttribute("placeholder")).toBe("DD-MM-YYYY");
    await user.type(input, "10/10/2010");
    const closeAction = getAllByRole("button")[0];
    if (closeAction != null) {
      await user.click(closeAction);
    }
    expect(input.value).toBe("");
  });
  test("Renders with custom error", () => {
    const { getByText } = render(<DxcDateInput error="Personalized error." />);
    expect(getByText("Personalized error.")).toBeTruthy();
  });
  test("Read-only variant doesn't open the calendar", () => {
    const { queryByRole } = render(<DxcDateInput value="20-10-2019" readOnly />);
    // When readOnly is true, there should be no calendar button (combobox) available
    expect(queryByRole("combobox")).toBeFalsy();
    // And consequently, no calendar dialog should be openable
    expect(queryByRole("dialog")).toBeFalsy();
  });
  test("Renders with an initial value when it is uncontrolled", () => {
    const { getByText, getByRole } = render(<DxcDateInput label="Default label" defaultValue="21-10-2015" />);
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("21-10-2015");
    fireEvent.click(getByRole("combobox"));
    expect(getByText("21").getAttribute("aria-selected")).toBe("true");
    expect(getByText("October 2015")).toBeTruthy();
  });
  test("Renders with correct format: user typed date but it's invalid, onBlur error", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("10/90/2010");
      expect(error).toBe("Invalid date.");
    });
    const { getByRole } = render(<DxcDateInput label="With format MM/dd/yyyy" format="MM/dd/yyyy" onBlur={onBlur} />);
    const input = getByRole("textbox");
    await user.click(input);
    await user.keyboard("10");
    await user.keyboard("/");
    await user.keyboard("90");
    await user.keyboard("/");
    await user.keyboard("2010");
    fireEvent.blur(input);
  });
  test("Renders with correct format: user typed date but it's invalid, onChange error", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcDateInput label="With format MM/dd/yyyy" format="MM/dd/yyyy" onChange={onChange} />
    );
    const input = getByRole("textbox");
    await user.click(input);
    await user.keyboard("10");
    await user.keyboard("/");
    await user.keyboard("90");
    await user.keyboard("/");
    await user.keyboard("2010");
    expect(onChange).toHaveBeenCalledTimes(10);
    expect(onChange).toHaveBeenCalledWith({
      value: "10/90/2010",
      error: "Invalid date.",
    });
  });
  test("Calendar renders with correct date: today's date", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, getAllByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const d = dayjs();
    await user.click(calendarAction);
    expect(
      document.activeElement ===
        (getAllByText(d.get("date")).length === 2 && +d.get("date") > 20
          ? getAllByText(d.get("date"))[1]
          : getAllByText(d.get("date"))[0])
    ).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });
  test("Calendar renders with correct date: value prop", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, getAllByText } = render(<DxcDateInput value="20-10-2019" />);
    const calendarAction = getByRole("combobox");
    const d = dayjs("2019-10-20");
    await user.click(calendarAction);
    expect(getAllByText(d.get("date"))[0]?.getAttribute("aria-selected")).toBe("true");
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });
  test("Calendar renders with correct date: user typed value", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, getAllByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const d = dayjs("2010-1-1");
    const input = getByRole("textbox");
    await user.type(input, "01-01-2010");
    await user.click(calendarAction);
    expect(getAllByText(d.get("date"))[0]?.getAttribute("aria-selected")).toBe("true");
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });
  test("Calendar renders with correct date: invalid date, renders with today's date", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const { getByText, getByRole, getAllByText } = render(<DxcDateInput onBlur={onBlur} />);
    const calendarAction = getByRole("combobox");
    const d = dayjs();
    const input = getByRole("textbox");
    await user.type(input, "01-01-xxxx");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "01-01-xxxx", error: "Invalid date." });
    await user.click(calendarAction);
    expect(
      document.activeElement ===
        (getAllByText(d.get("date")).length === 2 && +d.get("date") > 20
          ? getAllByText(d.get("date"))[1]
          : getAllByText(d.get("date"))[0])
    ).toBeTruthy();
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });
  test("Selecting a date from the calendar with an specific format", async () => {
    const user = userEvent.setup();
    const { getAllByText, getByText, getByRole } = render(
      <DxcDateInput label="With format M-dd-yyyy" format="M-dd-yyyy" />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);
    const dayButton = getAllByText("10")[0];
    if (dayButton != null) {
      fireEvent.click(dayButton);
    }
    let d = dayjs();
    d = d.set("date", 10);
    expect(getAllByText(d.get("date"))[0]?.getAttribute("aria-selected")).toBe("true");
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
    const user = userEvent.setup();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcDateInput label="label" format="dd-mm-yyyy" defaultValue="10-10-2000" />
    );
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);
    let d = dayjs("10-10-2000", "DD-MM-YYYY", true);
    d = d.set("date", 10);
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
    const previousMonthButton = getAllByRole("button")[0];
    expect(previousMonthButton?.getAttribute("aria-label")).toBe("Previous month");
    if (previousMonthButton != null) {
      await user.click(previousMonthButton);
    }
    expect(getByText(d.set("month", d.get("month") - 1).format("MMMM YYYY"))).toBeTruthy();
    const nextMonthButton = getAllByRole("button")[2];
    expect(nextMonthButton?.getAttribute("aria-label")).toBe("Next month");
    if (nextMonthButton != null) {
      await user.click(nextMonthButton);
    }
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
  });
  test("Selecting a date from the calendar from another month", async () => {
    const user = userEvent.setup();
    const { getAllByText, getByText, getByRole } = render(
      <DxcDateInput format="dd-mm-yyyy" defaultValue="10-08-2021" />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);
    const dayButton = getAllByText("31")[0];
    if (dayButton != null) {
      fireEvent.click(dayButton);
    }
    let d = dayjs("10-08-2021", "DD-MM-YYYY", true);
    d = d.set("date", 31).set("month", 6);
    expect(getAllByText(d.get("date"))[0]?.getAttribute("aria-selected")).toBe("true");
    expect(getByText(d.format("MMMM YYYY"))).toBeTruthy();
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe(d.format("DD-MM-YYYY"));
  });
  test("Selecting a year and month from the calendar year picker", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole } = render(<DxcDateInput format="dd-mm-yyyy" defaultValue="10-08-2021" />);
    const input = getByRole("textbox") as HTMLInputElement;
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);
    const d = dayjs("10-08-2021", "DD-MM-YYYY", true);
    await user.click(getByText(d.format("MMMM YYYY")));
    expect(getByText("2024")).toBeTruthy();
    await user.click(getByText("2024"));
    expect(getByText("February")).toBeTruthy();
    await user.click(getByText("February"));
    await user.click(getByText(d.set("year", 2024).set("month", 1).format("MMMM YYYY")));
    fireEvent.keyDown(document, { key: "Escape", code: "Escape", keyCode: 27, charCode: 27 });
    expect(input.value).toBe(d.set("year", 2024).set("month", 1).format("DD-MM-YYYY"));
  });
  test("Selecting a date from the calendar (using keyboard presses)", async () => {
    const user = userEvent.setup();
    const { getByRole, getAllByText, getByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "01-01-2010");
    expect(input.value).toBe("01-01-2010");
    await user.click(calendarAction);
    const day1 = getAllByText("1")[0];
    expect(document.activeElement === day1).toBeTruthy();
    if (day1 != null) {
      fireEvent.keyDown(day1, {
        key: "ArrowRight",
        code: "ArrowRight",
        keyCode: 39,
        charCode: 39,
      });
    }
    let day2 = getAllByText("2")[0];
    expect(document.activeElement === day2).toBeTruthy();
    if (day2 != null) {
      fireEvent.keyDown(day2, {
        key: "PageUp",
        code: "PageUp",
        keyCode: 33,
        charCode: 33,
      });
    }
    day2 = getAllByText("2")[0];
    expect(document.activeElement === day2).toBeTruthy();
    expect(getByText("December 2009")).toBeTruthy();
    if (day2 != null) {
      fireEvent.keyDown(day2, {
        key: "PageDown",
        code: "PageDown",
        keyCode: 34,
        charCode: 34,
      });
    }
    day2 = getAllByText("2")[0];
    expect(document.activeElement === day2).toBeTruthy();
    expect(getByText("January 2010")).toBeTruthy();
    if (day2 != null) {
      fireEvent.keyDown(day2, {
        key: "PageDown",
        code: "PageDown",
        keyCode: 34,
        charCode: 34,
        shiftKey: true,
      });
    }
    day2 = getAllByText("2")[0];
    expect(getByText("January 2011")).toBeTruthy();
    if (day2 != null) {
      fireEvent.keyDown(day2, {
        key: "PageUp",
        code: "PageUp",
        keyCode: 33,
        charCode: 33,
        shiftKey: true,
      });
    }
    day2 = getAllByText("2")[0];
    expect(getByText("January 2010")).toBeTruthy();
    expect(document.activeElement === day2).toBeTruthy();
    if (day2 != null) {
      fireEvent.click(day2, { key: " ", code: "Space", keyCode: 32, charCode: 32 });
    }
    expect(day2?.getAttribute("aria-selected")).toBe("true");
    fireEvent.keyDown(document, { key: "Escape", code: "Escape", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("02-01-2010");
  });
  test("Selecting a date from the calendar (using keyboard presses) part II", async () => {
    const user = userEvent.setup();
    const { getByRole, getAllByText } = render(<DxcDateInput />);
    const calendarAction = getByRole("combobox");
    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "01-01-2010");
    expect(input.value).toBe("01-01-2010");
    await user.click(calendarAction);
    expect(document.activeElement === getAllByText("1")[0]).toBeTruthy();
    const day1 = getAllByText("1")[0];
    const day8 = getAllByText("8")[0];
    const day10 = getAllByText("10")[0];
    const day15 = getAllByText("15")[0];
    if (day1 != null) {
      fireEvent.keyDown(day1, {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        charCode: 40,
      });
    }
    expect(document.activeElement === day8).toBeTruthy();
    if (day8 != null) {
      fireEvent.keyDown(day8, {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        charCode: 40,
      });
    }
    expect(document.activeElement === day15).toBeTruthy();
    if (day15 != null) {
      fireEvent.keyDown(day15, {
        key: "ArrowUp",
        code: "ArrowUp",
        keyCode: 38,
        charCode: 38,
      });
    }
    expect(document.activeElement === day8).toBeTruthy();
    if (day8 != null) {
      fireEvent.keyDown(day8, {
        key: "End",
        code: "End",
        keyCode: 35,
        charCode: 35,
      });
    }
    expect(document.activeElement === day10).toBeTruthy();
    if (day10 != null) {
      fireEvent.keyDown(day10, {
        key: "Home",
        code: "Home",
        keyCode: 36,
        charCode: 36,
      });
      fireEvent.keyDown(day10, { key: " ", code: "Space", keyCode: 32, charCode: 32 });
    }
    expect(input.value).toBe("10-01-2010");
  });
  test("onChange & onBlur functions are called correctly", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcDateInput onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox") as HTMLInputElement;
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
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcDateInput onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "10-10-");
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
  test("onBlur function removes the error when it is fixed", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcDateInput onBlur={onBlur} />);
    const input = getByRole("textbox") as HTMLInputElement;
    const d = new Date(2002, 1, 20);
    await user.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Invalid date.",
    });
    await user.clear(input);
    await user.type(input, "20-02-2002");
    expect(input.value).toBe("20-02-2002");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "20-02-2002", date: d });
  });
  test("onBlur function removes the error when the input is empty", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcDateInput onBlur={onBlur} optional />);
    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "test");
    expect(input.value).toBe("test");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Invalid date.",
    });
    await user.clear(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
  });
  test("onBlur & onChange functions error: required field (not optional)", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcDateInput onBlur={onBlur} onChange={onChange} />);
    const date = getByRole("textbox") as HTMLInputElement;

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
    const user = userEvent.setup();
    const { getByRole, queryByText } = render(<DxcDateInput disabled />);
    const calendarAction = getByRole("button");
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.disabled).toBeTruthy();
    await user.click(calendarAction);
    expect(queryByText(d.toLocaleString("en-US", options))).toBeFalsy();
  });
  test("Input has correct accessibility attributes", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<DxcDateInput label="Date input label" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-autocomplete")).toBeNull();
    expect(input.getAttribute("aria-controls")).toBeNull();
    expect(input.getAttribute("aria-expanded")).toBeNull();
    const calendarAction = getByRole("combobox");
    expect(calendarAction.getAttribute("aria-autocomplete")).toBeNull();
    expect(calendarAction.getAttribute("aria-controls")).toBeTruthy();
    expect(calendarAction.getAttribute("aria-describedby")).toBeFalsy();
    expect(calendarAction.getAttribute("aria-expanded")).toBe("false");
    await user.click(calendarAction);
    expect(calendarAction.getAttribute("aria-expanded")).toBe("true");
    const ariaDescribedBy = calendarAction.getAttribute("aria-describedby") ?? "";
    expect(document.getElementById(ariaDescribedBy)).toBeTruthy();
    expect(
      calendarAction.getAttribute("aria-describedby") === calendarAction.getAttribute("aria-controls")
    ).toBeTruthy();
    await user.type(calendarAction, "{esc}");
    expect(calendarAction.getAttribute("aria-expanded")).toBe("false");
  });
  test("Chooses the correct year when two digit format", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, getAllByText } = render(
      <DxcDateInput label="Default label" format="dd-mm-yy" defaultValue="21-10-80" />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    const calendarAction = getByRole("combobox");
    expect(input.value).toBe("21-10-80");
    await user.click(calendarAction);
    expect(getByText("21").getAttribute("aria-selected")).toBe("true");
    expect(getByText("October 1980")).toBeTruthy();
    await user.type(calendarAction, "{esc}");
    fireEvent.change(input, { target: { value: "21-10-10" } });
    await user.click(calendarAction);
    expect(getByText("October 1910")).toBeTruthy();
    await user.click(getByText("October 1910"));
    await user.click(getByText("2010"));
    await user.click(getByText("October 2010"));
    const day1 = getAllByText("1")[0];
    if (day1 != null) {
      await user.click(day1);
    }
    expect(input.value).toBe("01-10-10");
    await user.type(calendarAction, "{esc}");
    fireEvent.change(input, { target: { value: "21-10-80" } });
    await user.click(calendarAction);
    expect(getByText("October 2080")).toBeTruthy();
  });
  test("German locale date input", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = render(
      <HalstackProvider localeTag="de-DE">
        <DxcDateInput label="Date input label" defaultValue="03.12.1995" />
      </HalstackProvider>
    );
    const input = getByRole("textbox") as HTMLInputElement;
    const calendarAction = getByRole("combobox");
    expect(input.value).toBe("03.12.1995");
    await user.click(calendarAction);
    const day31 = getByText("31");
    if (day31 != null) {
      await user.click(day31);
    }
    expect(input.value).toBe("31.12.1995");
  });
  test("Form onSubmit is not called when interacting with the calendar and pressing enter", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    const { getByRole, getAllByText } = render(
      <form onSubmit={onSubmit}>
        <DxcDateInput label="Default label" format="dd-mm-yy" defaultValue="21-10-80" />
      </form>
    );
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);
    const day1 = getAllByText("1")[0];
    if (day1 != null) {
      await user.click(day1);
    }
    await user.type(calendarAction, "{enter}");
    expect(onSubmit).not.toHaveBeenCalled();
  });
  test("Two listboxes are shown", async () => {
    const user = userEvent.setup();
    const { getByRole, container } = render(<DxcDateInput defaultValue="15-03-2020" />);
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);

    const monthYearButton = getByRole("button", { name: "March 2020" });
    expect(monthYearButton).toBeTruthy();
    await user.click(monthYearButton);

    const listboxes = container.querySelectorAll("[role='listbox']");
    expect(listboxes.length).toBe(2);
  });
  test("Calendar header formatting", async () => {
    const user = userEvent.setup();
    const { getByRole, container } = render(<DxcDateInput defaultValue="2020/03/15" format="yyyy/MM/dd" />);
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);

    const monthYearButton = getByRole("button", { name: "2020 March" });
    expect(monthYearButton).toBeTruthy();
    await user.click(monthYearButton);

    const listboxes = container.querySelectorAll("[role='listbox']");
    expect(listboxes.length).toBe(2);
    expect(listboxes[0]).toHaveTextContent("2019");
    expect(listboxes[1]).toHaveTextContent("February");
  });
  test("Listbox keyboard control", async () => {
    const user = userEvent.setup();
    const { getByRole, getAllByRole } = render(<DxcDateInput defaultValue="15-03-2020" />);
    const calendarAction = getByRole("combobox");
    await user.click(calendarAction);
    expect(getByRole("button", { name: "March 2020" })).toBeTruthy();
    await user.click(getByRole("button", { name: "March 2020" }));
    const yearListbox = getAllByRole("listbox")[1];
    expect(yearListbox).toBeTruthy();
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");
    expect(getByRole("button", { name: "March 2021" })).toBeTruthy();
  });
});
