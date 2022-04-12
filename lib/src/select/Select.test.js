import React from "react";
import DxcSelect from "./Select";
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
const svg_icon_options = [
  {
    label: "3G Mobile",
    value: "1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <g>
            <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    label: "Ethernet",
    value: "2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
      </svg>
    ),
  },
  {
    label: "Wi-fi",
    value: "3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
  },
  {
    label: "Settings backup restore (just for previous configuration)",
    value: "4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
      </svg>
    ),
  },
  {
    label: "Regular",
    value: "Regular",
  },
];
const url_icon_options = [
  {
    label: "Instagram",
    value: "1",
    icon: "https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png",
  },
  {
    label: "Twitter",
    value: "2",
    icon: "https://cdn-icons-png.flaticon.com/512/81/81609.png",
  },
  {
    label: "Snapchat",
    value: "3",
  },
  {
    label: "Facebook",
    value: "4",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
  },
  {
    label: "Pinterest",
    value: "5",
    icon: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
  },
];
const group_options = [
  {
    label: "Colores",
    options: [
      { label: "Azul", value: "azul" },
      { label: "Rojo", value: "rojo" },
      { label: "Rosa", value: "rosa" },
      { label: "Verde", value: "verde" },
      { label: "Amarillo", value: "amarillo" },
      { label: "Blanco", value: "blanco" },
      { label: "Negro", value: "negro" },
    ],
  },
  {
    label: "Ciudades españolas",
    options: [
      { label: "Madrid", value: "madrid" },
      { label: "Oviedo", value: "oviedo" },
      { label: "Sevilla", value: "sevilla" },
      { label: "Bilbao", value: "bilbao" },
      { label: "Barcelona", value: "barcelona" },
    ],
  },
  {
    label: "Ríos españoles",
    options: [
      { label: "Miño", value: "miño" },
      { label: "Duero", value: "duero" },
      { label: "Tajo", value: "tajo" },
      { label: "Guadiana", value: "guadiana" },
      { label: "Guadalquivir", value: "guadalquivir" },
      { label: "Ebro", value: "ebro" },
    ],
  },
];
const grouped_icon_options = [
  {
    label: "Social Media",
    options: [
      {
        label: "Instagram",
        value: "1",
        icon: "https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png",
      },
      {
        label: "Twitter",
        value: "2",
        icon: "https://cdn-icons-png.flaticon.com/512/81/81609.png",
      },
      {
        label: "Facebook",
        value: "3",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
      },
      {
        label: "Pinterest",
        value: "4",
        icon: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
      },
    ],
  },
  {
    label: "Group 2",
    options: [
      { label: "Option 4", value: "5" },
      { label: "Option 5", value: "6" },
      { label: "Option 6", value: "7" },
    ],
  },
  {
    label: "Group 3",
    options: [
      { label: "Option 7", value: "8" },
      { label: "Option 8", value: "9" },
      { label: "Option 9", value: "10" },
    ],
  },
];

describe("Select component tests", () => {
  test("Renders with correct label", () => {
    const { getByText, getByRole } = render(
      <DxcSelect label="test-select-label" helperText="test-select-helper-text" placeholder="Example text" />
    );
    const select = getByRole("combobox");
    const label = getByText("test-select-label");

    expect(label).toBeTruthy();
    userEvent.click(label);
    expect(document.activeElement).toEqual(select);
  });
  test("Renders with correct helper text and placeholder", () => {
    const { getByText } = render(
      <DxcSelect label="test-select-label" helperText="test-select-helper-text" placeholder="Example text" />
    );

    expect(getByText("test-select-helper-text")).toBeTruthy();
    expect(getByText("Example text")).toBeTruthy();
  });
  test("Renders with correct optional label", () => {
    const { getByText } = render(<DxcSelect label="test-select-label" optional />);

    expect(getByText("test-select-label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
  });
  test("Renders with error message and correct aria attributes", () => {
    const { getByText, getByRole } = render(<DxcSelect label="Error label" error="Error message." />);
    const select = getByRole("combobox");
    const errorMessage = getByText("Error message.");

    expect(errorMessage).toBeTruthy();
    expect(select.getAttribute("aria-errormessage")).toBe(errorMessage.id);
    expect(select.getAttribute("aria-invalid")).toBe("true");
    expect(errorMessage.getAttribute("aria-live")).toBe("assertive");
  });
  test("Renders with correct aria attributes", () => {
    const { getByText, getByRole } = render(
      <DxcSelect label="test-select-label" placeholder="Example" options={single_options} />
    );
    const select = getByRole("combobox");
    const label = getByText("test-select-label");

    expect(select.getAttribute("aria-disabled")).toBe("false");
    expect(select.getAttribute("aria-haspopup")).toBe("listbox");
    expect(select.getAttribute("aria-expanded")).toBe("false");
    expect(select.getAttribute("aria-required")).toBe("true");
    expect(select.getAttribute("aria-labelledby")).toBe(label.id);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    expect(select.getAttribute("aria-invalid")).toBe("false");
    userEvent.click(select);
    const list = getByRole("listbox");
    expect(select.getAttribute("aria-controls")).toBe(list.id);
    expect(list.getAttribute("aria-multiselectable")).toBe("false");
  });
  test("Single selection: Renders with correct default value", () => {
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect label="test-select-label" name="test" defaultValue="4" options={single_options} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);

    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 04")).toBeTruthy();
    expect(submitInput.value).toBe("4");
    userEvent.click(select);
    expect(getAllByRole("option")[3].getAttribute("aria-selected")).toBe("true");
    userEvent.click(getAllByRole("option")[7]);
    expect(getByText("Option 08")).toBeTruthy();
    expect(submitInput.value).toBe("8");
  });
  test("Multiple selection: Renders with correct default value", () => {
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect
        label="test-select-label"
        name="test"
        defaultValue={["4", "2", "6"]}
        options={single_options}
        multiple
      />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);

    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 02, Option 04, Option 06")).toBeTruthy();
    expect(submitInput.value).toBe("4,2,6");
    userEvent.click(select);
    expect(getAllByRole("option")[3].getAttribute("aria-selected")).toBe("true");
    expect(getAllByRole("option")[1].getAttribute("aria-selected")).toBe("true");
    expect(getAllByRole("option")[5].getAttribute("aria-selected")).toBe("true");
    userEvent.click(getAllByRole("option")[2]);
    expect(getByText("Option 02, Option 03, Option 04, Option 06")).toBeTruthy();
    expect(submitInput.value).toBe("4,2,6,3");
  });
  test("Disabled select - Clear all options action must be shown but not clickable", () => {
    const { getByRole, getByText, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={single_options} disabled searchable multiple />
    );
    const select = getByRole("combobox");

    expect(select.getAttribute("aria-disabled")).toBe("true");
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
    expect(onChange).toHaveBeenCalledWith({ value: "1" });
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });
  test("Controlled - Optional constraint", () => {
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
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
    expect(select.getAttribute("aria-invalid")).toBe("false");
  });
  test("Non-Grouped Options - Opens listbox and renders correctly or closes it with a click on select", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
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
    expect(getAllByRole("option").length).toBe(20);
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Non-Grouped Options - If an empty list of options is passed, the select is rendered but doestn't open the listbox", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={[]} />);
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Non-Grouped Options - Click in an option selects it and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={single_options} onChange={onChange} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[2]);
    expect(onChange).toHaveBeenCalledWith({ value: "3" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 03")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByRole("option")[2].getAttribute("aria-selected")).toBe("true");
    expect(submitInput.value).toBe("3");
  });
  test("Non-Grouped Options - Optional renders an empty first option (selected by default) with the placeholder as its label", () => {
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
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Choose an option").length).toBe(1);

    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Choose an option").length).toBe(1);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options - Filtering options never affects the optional item until there are no coincidence", () => {
    const { getByRole, getAllByRole, getByText, queryByText, container } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={single_options}
        optional
        searchable
      />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    userEvent.type(searchInput, "1");
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(12);
    userEvent.type(searchInput, "123");
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Non-Grouped Options - Renders SVG icons correctly when passed with options", () => {
    const { getByRole, getAllByRole } = render(<DxcSelect label="test-select-label" options={svg_icon_options} />);
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(getByRole("listbox").querySelectorAll("[role='img']").length).toBe(4);
    expect(getAllByRole("option").length).toBe(5);
  });
  test("Non-Grouped Options - Renders string url icons correctly when passed with options", () => {
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={url_icon_options} optional />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(getByRole("listbox").querySelectorAll("img").length).toBe(4);
    expect(getAllByRole("option").length).toBe(6);
  });
  test("Non-Grouped Options: Arrow up key - Opens the listbox and visually focus the last option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={single_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });
  test("Non-Grouped Options: Arrow up key - Puts the focus in last option when the first one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={single_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });
  test("Non-Grouped Options: Arrow down key - Opens the listbox and visually focus the first option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={single_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options: Arrow down key - Puts the focus in the first option when the last one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={single_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options: Enter key - Selects the visually focused option and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} optional />
    );
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: "20" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 20")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByRole("option")[20].getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options: Searchable - Displays an input for filtering the list of options", () => {
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
    expect(onChange).toHaveBeenCalledWith({ value: "8" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 08")).toBeTruthy();
    expect(searchInput.value).toBe("");
    userEvent.click(select);
    expect(getAllByRole("option")[7].getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options: Searchable - Displays 'No matches found' when there are no filtering results", () => {
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
  test("Non-Grouped Options: Searchable - Writing displays the listbox, if it was not open", () => {
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
    const onChange = jest.fn();
    const { container, getByRole, getAllByRole, queryByTitle } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} searchable />
    );
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.type(searchInput, "Option 02");
    expect(getAllByRole("option").length).toBe(1);
    expect(queryByTitle("Clear search")).toBeTruthy();
    const clearAction = getByRole("button");
    expect(clearAction).toBeTruthy();
    userEvent.click(clearAction);
    expect(getByRole("listbox")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(20);
    expect(queryByTitle("Clear search")).toBeFalsy();
  });
  test("Non-Grouped Options: Multiple selection - Displays a checkbox per option and enables the multi-selection", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={single_options} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);

    userEvent.click(select);
    expect(getByRole("listbox").getAttribute("aria-multiselectable")).toBe("true");
    userEvent.click(getAllByRole("option")[10]);
    expect(onChange).toHaveBeenCalledWith({ value: ["11"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getAllByText("Option 11").length).toBe(2);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: ["11", "19"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Option 11, Option 19")).toBeTruthy();
    expect(getAllByRole("option")[10].getAttribute("aria-selected")).toBe("true");
    expect(getAllByRole("option")[18].getAttribute("aria-selected")).toBe("true");
    expect(submitInput.value).toBe("11,19");
  });
  test("Non-Grouped Options: Multiple selection - Clear action and selection indicator", () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole, queryByRole, getByTitle, queryByTitle } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[5]);
    userEvent.click(getAllByRole("option")[8]);
    userEvent.click(getAllByRole("option")[13]);
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9", "14"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Option 06, Option 09, Option 14")).toBeTruthy();
    expect(getByText("3", { exact: true })).toBeTruthy();
    userEvent.click(getByTitle("Clear selection"));
    expect(onChange).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(queryByText("Option 06, Option 09, Option 14")).toBeFalsy();
    expect(queryByText("3")).toBeFalsy();
    expect(queryByTitle("Clear selection")).toBeFalsy();
  });
  test("Non-Grouped Options: Multiple selection - Optional option should not be added when the select is marked as multiple", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={single_options}
        onChange={onChange}
        multiple
        optional
      />
    );
    const select = getByRole("combobox");

    expect(getByText("(Optional)")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(1);
    expect(getAllByRole("option")[0].getAttribute("aria-selected")).toBe("false");
    userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalledWith({ value: ["1"] });
    expect(getAllByText("Option 01").length).toBe(2);
  });
  test("Non-Grouped Options - If an options was previously selected when its opened (by key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[4]);
    expect(getByText("Option 05")).toBeTruthy();
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-4");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Option 04")).toBeTruthy();
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-3");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Option 06")).toBeTruthy();
  });
  test("Non-Grouped Options - If an options was previously selected when its opened (by click and key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={single_options} />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[15]);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 16")).toBeTruthy();
    userEvent.click(select);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-15");
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-15");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Option 17")).toBeTruthy();
  });
  test("Grouped Options - Opens listbox and renders it correctly or closes it with a click on select", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={group_options} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const listbox = getByRole("listbox");
    expect(listbox).toBeTruthy();
    expect(select.getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Azul")).toBeTruthy();
    expect(getByText("Negro")).toBeTruthy();
    expect(getByText("Ciudades españolas")).toBeTruthy();
    expect(getByText("Madrid")).toBeTruthy();

    const groups = getAllByRole("group");
    expect(groups.length).toBe(3);
    const groupLabels = getAllByRole("presentation");
    expect(groups[0].getAttribute("aria-labelledby")).toBe(groupLabels[0].id);
    expect(groups[1].getAttribute("aria-labelledby")).toBe(groupLabels[1].id);
    expect(groups[2].getAttribute("aria-labelledby")).toBe(groupLabels[2].id);
    expect(getAllByRole("option").length).toBe(18);
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Grouped Options - If an empty list of options in a group is passed, the select is rendered but doestn't open the listbox", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect
        label="test-select-label"
        options={[
          {
            label: "Group 1",
            options: [],
          },
        ]}
      />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Grouped Options - Click in an option selects it and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={group_options} onChange={onChange} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[8]);
    expect(onChange).toHaveBeenCalledWith({ value: "oviedo" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Oviedo")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByRole("option")[8].getAttribute("aria-selected")).toBe("true");
    expect(submitInput.value).toBe("oviedo");
  });
  test("Grouped Options - Optional renders an empty first option (out of any group) with the placeholder as its label", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getAllByText } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={group_options}
        onChange={onChange}
        optional
      />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(getAllByText("Placeholder example").length).toBe(2);
    expect(getAllByRole("option")[0].getAttribute("aria-selected")).toBe("true");
    userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Placeholder example").length).toBe(1);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Placeholder example").length).toBe(1);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Grouped Options - Filtering options never affects the optional item until there are no coincidence", () => {
    const { getByRole, getAllByRole, getByText, queryByText, container } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={group_options}
        optional
        searchable
      />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    userEvent.type(searchInput, "ro");
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(6);
    userEvent.type(searchInput, "roro");
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Grouped Options - Renders icons correctly when passed with group options", () => {
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={grouped_icon_options} optional />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    expect(getByRole("listbox").querySelectorAll("img").length).toBe(4);
    expect(getAllByRole("option").length).toBe(11);
  });
  test("Grouped Options: Arrow up key - Opens the listbox and visually focus the last option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={group_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
  });
  test("Grouped Options: Arrow up key - Puts the focus in last option when the first one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={group_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
  });
  test("Grouped Options: Arrow down key - Opens the listbox and visually focus the first option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={group_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Grouped Options: Arrow down key - Puts the focus in the first option when the last one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={group_options} />);
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Grouped Options: Enter key - Selects the visually focused option and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={group_options} onChange={onChange} optional />
    );
    const select = getByRole("combobox");

    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: "ebro" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Ebro")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByRole("option")[18].getAttribute("aria-selected")).toBe("true");
  });
  test("Grouped Options: Searchable - Displays an input for filtering the list of options", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={group_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    userEvent.type(searchInput, "ro");
    expect(getAllByRole("group").length).toBe(2);
    expect(getAllByRole("presentation").length).toBe(2);
    expect(getAllByRole("option").length).toBe(5);
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Ríos españoles")).toBeTruthy();
    userEvent.click(getAllByRole("option")[4]);
    expect(onChange).toHaveBeenCalledWith({ value: "ebro" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Ebro")).toBeTruthy();
    expect(searchInput.value).toBe("");
    userEvent.click(select);
    expect(getAllByRole("option")[17].getAttribute("aria-selected")).toBe("true");
  });
  test("Grouped Options: Searchable - Displays 'No matches found' when there are no filtering results", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole } = render(
      <DxcSelect label="test-select-label" options={group_options} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];

    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    userEvent.type(searchInput, "very long string");
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Grouped Options: Multiple selection - Displays a checkbox per option and enables the multi-selection", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={group_options} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);

    userEvent.click(select);
    expect(getByRole("listbox").getAttribute("aria-multiselectable")).toBe("true");
    userEvent.click(getAllByRole("option")[10]);
    expect(onChange).toHaveBeenCalledWith({ value: ["bilbao"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getAllByText("Bilbao").length).toBe(2);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: ["bilbao", "guadalquivir"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Bilbao, Guadalquivir")).toBeTruthy();
    expect(getAllByRole("option")[10].getAttribute("aria-selected")).toBe("true");
    expect(getAllByRole("option")[16].getAttribute("aria-selected")).toBe("true");
    expect(submitInput.value).toBe("bilbao,guadalquivir");
  });
  test("Grouped Options: Multiple selection - Clear action and selection indicator", () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole, queryByRole, getByTitle, queryByTitle } = render(
      <DxcSelect label="test-select-label" options={group_options} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[5]);
    userEvent.click(getAllByRole("option")[8]);
    userEvent.click(getAllByRole("option")[13]);
    userEvent.click(getAllByRole("option")[17]);
    expect(onChange).toHaveBeenCalledWith({ value: ["blanco", "oviedo", "duero", "ebro"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Blanco, Oviedo, Duero, Ebro")).toBeTruthy();
    expect(getByText("4", { exact: true })).toBeTruthy();
    userEvent.click(getByTitle("Clear selection"));
    expect(queryByRole("listbox")).toBeTruthy();
    expect(queryByText("Blanco, Oviedo, Duero, Ebro")).toBeFalsy();
    expect(queryByText("4")).toBeFalsy();
    expect(queryByTitle("Clear selection")).toBeFalsy();
  });
  test("Grouped Options: Multiple selection - Optional option should not be added when the select is marked as multiple", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={group_options}
        onChange={onChange}
        multiple
        optional
      />
    );
    const select = getByRole("combobox");

    expect(getByText("(Optional)")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(1);
    expect(getAllByRole("option")[0].getAttribute("aria-selected")).toBe("false");
    userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalledWith({ value: ["azul"] });
    expect(getAllByText("Azul").length).toBe(2);
  });
  test("Grouped Options - If an options was previously selected when its opened (by key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={group_options} />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[2]);
    expect(getByText("Rosa")).toBeTruthy();
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-2");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Rojo")).toBeTruthy();
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-1");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Verde")).toBeTruthy();
  });
  test("Grouped Options - If an options was previously selected when its opened (by click and key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={group_options} />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[17]);
    expect(getByText("Ebro")).toBeTruthy();
    userEvent.click(select);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
    userEvent.click(select);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Azul")).toBeTruthy();
  });
  test("Multiple selection and optional - Clear action cleans every selected option but does not display an error", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getByTitle } = render(
      <DxcSelect label="test-select-label" options={single_options} onChange={onChange} multiple optional />
    );
    const select = getByRole("combobox");

    userEvent.click(select);
    userEvent.click(getAllByRole("option")[5]);
    userEvent.click(getAllByRole("option")[8]);
    userEvent.click(getAllByRole("option")[13]);
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9", "14"] });
    userEvent.click(getByTitle("Clear selection"));
    expect(onChange).toHaveBeenCalledWith({ value: [] });
  });
});
