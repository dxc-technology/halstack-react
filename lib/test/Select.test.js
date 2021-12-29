import React from "react";
import DxcSelect from "../src/select/Select";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const single_options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
  { label: "Option 05", value: "5" },
  { label: "Option 06", value: "6" },
  { label: "Option 07", value: "7" },
  { label: "Option 08", value: "8" },
  { label: "Option 09", value: "9" },
  { label: "Option 10", value: "10" },
  { label: "Option 11", value: "11" },
  { label: "Option 12", value: "12" },
  { label: "Option 13", value: "13" },
  { label: "Option 14", value: "14" },
  { label: "Option 15", value: "15" },
  { label: "Option 16", value: "16" },
  { label: "Option 17", value: "17" },
  { label: "Option 18", value: "18" },
  { label: "Option 19", value: "19" },
  { label: "Option 20", value: "20" },
];

const group_options = [
  {
    label: "Group 1",
    options: [
      { label: "Option 001", value: "1" },
      { label: "Option 002", value: "2" },
      { label: "Option 003", value: "3" },
    ],
  },
  {
    label: "Group 2",
    options: [
      { label: "Option 0004", value: "4" },
      { label: "Option 05", value: "5" },
      { label: "Option 006", value: "6" },
    ],
  },
  {
    label: "Group 3",
    options: [
      { label: "Option 0007", value: "7" },
      { label: "Option 008", value: "8" },
      { label: "Option 9", value: "9" },
    ],
  },
  {
    label: "Group 4",
    options: [
      { label: "Option 10", value: "10" },
      { label: "Option 11", value: "11" },
      { label: "Option 12", value: "12" },
    ],
  },
  {
    label: "Group 5",
    options: [
      { label: "Option x", value: "13" },
      { label: "Option y", value: "14" },
      { label: "Option z", value: "15" },
    ],
  },
  {
    label: "Group 6",
    options: [
      { label: "Option 001", value: "16" },
      { label: "Option 002", value: "17" },
      { label: "Option 003", value: "18" },
    ],
  },
  {
    label: "Group 7",
    options: [
      { label: "Option 001", value: "19" },
      { label: "Option 002", value: "20" },
      { label: "Option 003", value: "21" },
    ],
  },
];

describe("Select component tests", () => {
  test("Renders with correct label, helper text and placeholder", () => {
    const { getByText } = render(
      <DxcSelect label="test-select-label" helperText="test-select-helper-text" placeholder="Example text" />
    );

    expect(getByText("test-select-label")).toBeTruthy();
    expect(getByText("test-select-helper-text")).toBeTruthy();
    expect(getByText("Example text")).toBeTruthy();
  });
  test("Renders with correct optional label", () => {
    const { getByText } = render(<DxcSelect label="test-select-label" optional />);

    expect(getByText("test-select-label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
  });
  test("Renders with error message", () => {
    const { getByText, getByRole } = render(<DxcSelect label="test-select-label" error="Error message." />);
    const select = getByRole("combobox");

    expect(getByText("Error message.")).toBeTruthy();
    expect(select.getAttribute("aria-invalid")).toBe("true");
  });
  test("Disabled select - Clear all options action must be shown but not clickable", () => {
    const { getByRole, getByText, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={single_options} disabled searchable multiple />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    userEvent.click(getByRole("button"));
    expect(getByText("Option 01, Option 02")).toBeTruthy();
  });
  test("Focused select does not open the listbox", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={single_options} disabled searchable multiple />
    );
    const select = getByRole("combobox");
    
    fireEvent.focus(select);
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Controlled - Not optional constraint", () => {
    // scrollIntoView & scrollTo are not implemented in jsdom
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} onBlur={onBlur} />
    );
    const select = getByRole("combobox");

    expect(select.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
    userEvent.click(select);
    userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "1", error: null });
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "1", error: null });
  });
  test("Controlled - Optional constraint", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} onBlur={onBlur} optional />
    );
    const select = getByRole("combobox");

    expect(select.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: null });
    expect(select.getAttribute("aria-invalid")).toBe("false");
  });
  test("Non-Grouped Options - Opens listbox or closes it with a click on select", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByText, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Option 01")).toBeTruthy();
    expect(getByText("Option 02")).toBeTruthy();
    expect(getByText("Option 08")).toBeTruthy();
    expect(getByText("Option 09")).toBeTruthy();
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Non-Grouped Options - If an empty list of options is passed, the select is rendered but doestn't open the listbox", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={[]} />);
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Non-Grouped Options - Click in an option selects it and closes the listbox", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[2]);
    expect(onChange).toHaveBeenCalledWith({ value: "3", error: null });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 03")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByRole("option")[2].getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options - Optional renders an empty first option with the placeholder as its label", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getAllByText } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={single_options}
        onChange={onChange}
        optional
      />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(2);
    expect(getAllByRole("option")[0].getAttribute("aria-selected")).toBe("true");
    userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalledWith({ value: "", error: null });
    expect(getAllByText("Choose an option").length).toBe(1);
  });
  test("Non-Grouped Options: Arrow up key - Opens the listbox and visually focus the last option", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");
    
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });
  test("Non-Grouped Options: Arrow up key - Puts the focus in last option when the first one is visually focused", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");
    
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });
  test("Non-Grouped Options: Arrow down key - Opens the listbox and visually focus the first option", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");
    
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options: Arrow down key - Puts the focus in the first option when the last one is visually focused", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");
    
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options: Enter key - Selects the visually focused option and closes the listbox", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} />
    );
    const select = getByRole("combobox");
    
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: "19", error: null });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 19")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByRole("option")[18].getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options: Searchable - Displays an input for filtering the list of options", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    userEvent.type(searchInput, "08");
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "8", error: null });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 08")).toBeTruthy();
    expect(searchInput.value).toBe("");
    userEvent.click(select);
    expect(getAllByRole("option")[7].getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options: Searchable - Displays 'No matches found' when there are no filtering results", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { container, getByText, getByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    userEvent.type(searchInput, "abc");
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Non-Grouped Options: Searchable - Clicking the select, when the list is open, clears the search value", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    userEvent.type(searchInput, "2");
    expect(getByText("Option 02")).toBeTruthy();
    expect(getByText("Option 12")).toBeTruthy();
    expect(getByText("Option 20")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(3);
    userEvent.click(select);
    expect(searchInput.value).toBe("");
  });
  test("Non-Grouped Options: Searchable - Writing displays the listbox, if was not open", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    userEvent.type(searchInput, "2");
    expect(getByRole("listbox")).toBeTruthy();
  });
  test("Non-Grouped Options: Searchable - Key Esc cleans the search value and closes the options", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.type(searchInput, "Option 02");
    fireEvent.keyDown(select, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(searchInput.value).toBe("");
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Non-Grouped Options: Searchable - While user types, a clear action is displayed for cleaning the search value", () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { container, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.type(searchInput, "Option 02");
    expect(getAllByRole("option").length).toBe(1);
    const clearAction = getByRole("button");
    expect(clearAction).toBeTruthy();
    userEvent.click(clearAction);
    expect(getByRole("listbox")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(20);
  });
});
