import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcSelect from "./Select.tsx";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const singleOptions = [
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
const svgIconOptions = [
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

const groupOptions = [
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

const groupedIconOptions = [
  {
    label: "Transport",
    options: [
      {
        label: "Electric Car",
        value: "car",
        icon: "electric_car",
      },
      {
        label: "Motorcycle",
        value: "motorcycle",
        icon: "Motorcycle",
      },
      {
        label: "Train",
        value: "train",
        icon: "train",
      },
      {
        label: "Bike",
        value: "bike",
        icon: "pedal_bike",
      },
    ],
  },
  {
    label: "Entertainment",
    options: [
      {
        label: "Movie",
        value: "movie",
        icon: "movie",
      },
      {
        label: "Music",
        value: "music",
        icon: "music_note",
      },
      {
        label: "Games",
        value: "games",
        icon: "joystick",
      },
    ],
  },
];

describe("Select component tests", () => {
  test("When clicking the label, the focus goes to the select", async () => {
    const { getByText, getByRole } = render(
      <DxcSelect label="test-select-label" helperText="test-select-helper-text" placeholder="Example text" />
    );
    const select = getByRole("combobox");
    const label = getByText("test-select-label");
    await userEvent.click(label);
    expect(document.activeElement).toEqual(select);
  });

  test("Renders with correct aria attributes when is in error state", () => {
    const { getByText, getByRole } = render(<DxcSelect label="Error label" error="Error message." />);
    const select = getByRole("combobox");
    const errorMessage = getByText("Error message.");

    expect(errorMessage).toBeTruthy();
    expect(select.getAttribute("aria-errormessage")).toBe(errorMessage.id);
    expect(select.getAttribute("aria-invalid")).toBe("true");
    expect(errorMessage.getAttribute("aria-live")).toBe("assertive");
  });

  test("Renders with correct aria attributes", async () => {
    const { getByText, getByRole } = render(
      <DxcSelect label="test-select-label" placeholder="Example" options={singleOptions} />
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
    await userEvent.click(select);
    const list = getByRole("listbox");
    expect(select.getAttribute("aria-controls")).toBe(list.id);
    expect(list.getAttribute("aria-multiselectable")).toBe("false");
  });

  test("Single selection: Renders with correct default value", async () => {
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect label="test-select-label" name="test" defaultValue="4" options={singleOptions} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 04")).toBeTruthy();
    expect(submitInput.value).toBe("4");
    await userEvent.click(select);
    expect(getAllByRole("option")[3].getAttribute("aria-selected")).toBe("true");
    await userEvent.click(getAllByRole("option")[7]);
    expect(getByText("Option 08")).toBeTruthy();
    expect(submitInput.value).toBe("8");
  });

  test("Multiple selection: Renders with correct default value", async () => {
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect
        label="test-select-label"
        name="test"
        defaultValue={["4", "2", "6"]}
        options={singleOptions}
        multiple
      />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 02, Option 04, Option 06")).toBeTruthy();
    expect(submitInput.value).toBe("4,2,6");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[2]);
    expect(getByText("Option 02, Option 03, Option 04, Option 06")).toBeTruthy();
    expect(submitInput.value).toBe("4,2,6,3");
  });

  test("Sends its value when submitted", async () => {
    const handlerOnSubmit = jest.fn((e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ options: "1,5,3" });
    });
    const { getByText, getByRole, getAllByRole } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcSelect
          name="options"
          label="test-select-label"
          defaultValue={["1", "5"]}
          options={singleOptions}
          multiple
        />
        <button type="submit">Submit</button>
      </form>
    );
    const select = getByRole("combobox");
    const submit = getByText("Submit");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[2]);
    await userEvent.click(submit);
  });

  test("Searching for a value with an empty list of options passed doesn't open the listbox", async () => {
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={[]} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    await act(async () => {
      userEvent.type(searchInput, "test");
    });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Disabled select - Cannot gain focus or open the listbox via click", async () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-disabled")).toBe("true");
    await userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(document.activeElement === select).toBeFalsy();
  });

  test("Disabled select - Clear all options action must be shown but not clickable", async () => {
    const { getByRole, getByText } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled searchable multiple />
    );
    await userEvent.click(getByRole("button"));
    expect(getByText("Option 01, Option 02")).toBeTruthy();
  });

  test("Disabled select - Does not call onBlur event", async () => {
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} disabled onBlur={onBlur} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    fireEvent.keyDown(getByRole("combobox"), { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    expect(onBlur).not.toHaveBeenCalled();
  });

  test("Disabled select - When the component gains the focus, the listbox does not open", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled searchable multiple />
    );
    const select = getByRole("combobox");
    fireEvent.focus(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(document.activeElement === select).toBeFalsy();
  });

  test("Disabled select - Doesn't send its value when submitted", async () => {
    const handlerOnSubmit = jest.fn((e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({});
    });
    const { getByText } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcSelect label="test-select-label" defaultValue="1" options={singleOptions} disabled />
        <button type="submit">Submit</button>
      </form>
    );
    const submit = getByText("Submit");
    await userEvent.click(submit);
  });

  test("Controlled - Single selection - Not optional constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} onBlur={onBlur} />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "1" });
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });

  test("Controlled - Multiple selection - Not optional constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} onBlur={onBlur} multiple />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[0]);
    await userEvent.click(getAllByRole("option")[1]);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: ["1", "2"] });
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: ["1", "2"] });
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[0]);
    await userEvent.click(getAllByRole("option")[1]);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
  });

  test("Controlled - Optional constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} onBlur={onBlur} optional />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
    expect(select.getAttribute("aria-invalid")).toBe("false");
  });

  test("Non-Grouped Options - Opens listbox and renders correctly or closes it with a click on select", async () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Option 01")).toBeTruthy();
    expect(getByText("Option 02")).toBeTruthy();
    expect(getByText("Option 08")).toBeTruthy();
    expect(getByText("Option 09")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(20);
    await userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Non-Grouped Options - If an empty list of options is passed, the select is rendered but doesn't open the listbox", async () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={[]} />);
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Non-Grouped Options - Click in an option selects it and closes the listbox", async () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={singleOptions} onChange={onChange} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[2]);
    expect(onChange).toHaveBeenCalledWith({ value: "3" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 03")).toBeTruthy();
    await userEvent.click(select);
    expect(getAllByRole("option")[2].getAttribute("aria-selected")).toBe("true");
    expect(submitInput.value).toBe("3");
  });

  test("Non-Grouped Options - Optional renders an empty first option (selected by default) with the placeholder as its label", async () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getAllByText } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={singleOptions}
        onChange={onChange}
        optional
      />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(2);
    expect(getAllByRole("option")[0].getAttribute("aria-selected")).toBe("true");
    await userEvent.click(getAllByRole("option")[0]);
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

  test("Non-Grouped Options - Filtering options never affects the optional item until there are no coincidences", async () => {
    const { getAllByRole, getByText, queryByText, container } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={singleOptions}
        optional
        searchable
      />
    );
    const searchInput = container.querySelectorAll("input")[1];
    await act(async () => {
      userEvent.type(searchInput, "1");
    });
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(12);
    await act(async () => {
      userEvent.type(searchInput, "123");
    });
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });

  test("Non-Grouped Options: Arrow up key - Opens the listbox and visually focus the last option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });

  test("Non-Grouped Options: Arrow up key - Puts the focus in last option when the first one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });

  test("Non-Grouped Options: Arrow down key - Opens the listbox and visually focus the first option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });

  test("Non-Grouped Options: Arrow down key - Puts the focus in the first option when the last one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });

  test("Non-Grouped Options: Enter key - Selects the visually focused option and closes the listbox", async () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} optional />
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
    await userEvent.click(select);
    expect(getAllByRole("option")[20].getAttribute("aria-selected")).toBe("true");
  });

  test("Non-Grouped Options: Searchable - Displays an input for filtering the list of options", async () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    await userEvent.type(searchInput, "08");
    await userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "8" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 08")).toBeTruthy();
    expect(searchInput.value).toBe("");
    await userEvent.click(select);
    expect(getAllByRole("option")[7].getAttribute("aria-selected")).toBe("true");
  });

  test("Non-Grouped Options: Searchable - Displays 'No matches found' when there are no filtering results", async () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    await userEvent.type(searchInput, "abc");
    expect(getByText("No matches found")).toBeTruthy();
  });

  test("Non-Grouped Options: Searchable - Clicking the select, when the list is open, clears the search value", async () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await act(async () => {
      userEvent.type(searchInput, "2");
    });
    expect(getByRole("listbox")).toBeTruthy();
    expect(getByText("Option 02")).toBeTruthy();
    expect(getByText("Option 12")).toBeTruthy();
    expect(getByText("Option 20")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(3);
    await act(async () => {
      userEvent.click(select);
    });
    expect(searchInput.value).toBe("");
  });

  test("Non-Grouped Options: Searchable - Writing displays the listbox, if it was not open", async () => {
    const onChange = jest.fn();
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    await userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    await userEvent.type(searchInput, "2");
    expect(getByRole("listbox")).toBeTruthy();
  });

  test("Non-Grouped Options: Searchable - Key Esc cleans the search value and closes the options", async () => {
    const onChange = jest.fn();
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.type(searchInput, "Option 02");
    fireEvent.keyDown(select, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(searchInput.value).toBe("");
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Non-Grouped Options: Searchable - While user types, a clear action is displayed for cleaning the search value", async () => {
    const onChange = jest.fn();
    const { container, getByRole, getAllByRole, queryByTitle } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.type(searchInput, "Option 02");
    expect(getAllByRole("option").length).toBe(1);
    expect(queryByTitle("Clear search")).toBeTruthy();
    const clearAction = getByRole("button");
    expect(clearAction).toBeTruthy();
    await userEvent.click(clearAction);
    expect(getByRole("listbox")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(20);
    expect(queryByTitle("Clear search")).toBeFalsy();
  });

  test("Non-Grouped Options: Multiple selection - Displays a checkbox per option and enables the multi-selection", async () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={singleOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);
    await userEvent.click(select);
    expect(getByRole("listbox").getAttribute("aria-multiselectable")).toBe("true");
    await userEvent.click(getAllByRole("option")[10]);
    expect(onChange).toHaveBeenCalledWith({ value: ["11"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getAllByText("Option 11").length).toBe(2);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: ["11", "19"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Option 11, Option 19")).toBeTruthy();
    expect(submitInput.value).toBe("11,19");
  });

  test("Non-Grouped Options: Multiple selection - Clear action and selection indicator", async () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole, queryByRole, getByTitle, queryByTitle } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[5]);
    await userEvent.click(getAllByRole("option")[8]);
    await userEvent.click(getAllByRole("option")[13]);
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9", "14"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Option 06, Option 09, Option 14")).toBeTruthy();
    expect(getByText("3", { exact: true })).toBeTruthy();
    await userEvent.click(getByTitle("Clear selection"));
    expect(onChange).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(queryByText("Option 06, Option 09, Option 14")).toBeFalsy();
    expect(queryByText("3")).toBeFalsy();
    expect(queryByTitle("Clear selection")).toBeFalsy();
  });

  test("Non-Grouped Options: Multiple selection - Optional option should not be added when the select is marked as multiple", async () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={singleOptions}
        onChange={onChange}
        multiple
        optional
      />
    );
    const select = getByRole("combobox");
    expect(getByText("(Optional)")).toBeTruthy();
    await userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(1);
    await userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalledWith({ value: ["1"] });
    expect(getAllByText("Option 01").length).toBe(2);
  });

  test("Non-Grouped Options - If an options was previously selected when its opened (by key press), the visual focus appears always in the selected option", async () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[4]);
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

  test("Non-Grouped Options - If an options was previously selected when its opened (by click and key press), the visual focus appears always in the selected option", async () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[15]);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 16")).toBeTruthy();
    await userEvent.click(select);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-15");
    await userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-15");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Option 17")).toBeTruthy();
  });

  test("Grouped Options - Opens listbox and renders it correctly or closes it with a click on select", async () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    const listbox = getByRole("list");
    expect(listbox).toBeTruthy();
    expect(select.getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Azul")).toBeTruthy();
    expect(getByText("Negro")).toBeTruthy();
    expect(getByText("Ciudades españolas")).toBeTruthy();
    expect(getByText("Madrid")).toBeTruthy();
    const groups = getAllByRole("listbox");
    expect(groups.length).toBe(3);
    const groupLabels = getAllByRole("presentation");
    expect(groups[0].getAttribute("aria-labelledby")).toBe(groupLabels[0].id);
    expect(groups[1].getAttribute("aria-labelledby")).toBe(groupLabels[1].id);
    expect(groups[2].getAttribute("aria-labelledby")).toBe(groupLabels[2].id);
    expect(getAllByRole("option").length).toBe(18);
    await userEvent.click(select);
    expect(queryByRole("list")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Grouped Options - If an empty list of options in a group is passed, the select is rendered but doesn't open the listbox", async () => {
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
    await userEvent.click(select);
    expect(queryByRole("list")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Grouped Options - Click in an option selects it and closes the listbox", async () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={groupOptions} onChange={onChange} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[8]);
    expect(onChange).toHaveBeenCalledWith({ value: "oviedo" });
    expect(queryByRole("list")).toBeFalsy();
    expect(getByText("Oviedo")).toBeTruthy();
    await userEvent.click(select);
    expect(getAllByRole("option")[8].getAttribute("aria-selected")).toBe("true");
    expect(submitInput.value).toBe("oviedo");
  });

  test("Grouped Options - Optional renders an empty first option (out of any group) with the placeholder as its label", async () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getAllByText } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={groupOptions}
        onChange={onChange}
        optional
      />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getAllByText("Placeholder example").length).toBe(2);
    expect(getAllByRole("option")[0].getAttribute("aria-selected")).toBe("true");
    await userEvent.click(getAllByRole("option")[0]);
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

  test("Grouped Options - Filtering options never affects the optional item until there are no coincidence", async () => {
    const { getByRole, getAllByRole, getByText, queryByText, container } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={groupOptions}
        optional
        searchable
      />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    await userEvent.type(searchInput, "ro");
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(6);
    await userEvent.type(searchInput, "roro");
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });

  test("Grouped Options: Arrow up key - Opens the listbox and visually focus the last option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("list")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
  });

  test("Grouped Options: Arrow up key - Puts the focus in last option when the first one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("list")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
  });

  test("Grouped Options: Arrow down key - Opens the listbox and visually focus the first option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("list")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });

  test("Grouped Options: Arrow down key - Puts the focus in the first option when the last one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("list")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });

  test("Grouped Options: Enter key - Selects the visually focused option and closes the listbox", async () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupOptions} onChange={onChange} optional />
    );
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: "ebro" });
    expect(queryByRole("list")).toBeFalsy();
    expect(getByText("Ebro")).toBeTruthy();
    await userEvent.click(select);
    expect(getAllByRole("option")[18].getAttribute("aria-selected")).toBe("true");
  });

  test("Grouped Options: Searchable - Displays an input for filtering the list of options", async () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    expect(getByRole("list")).toBeTruthy();
    await userEvent.type(searchInput, "ro");
    expect(getAllByRole("presentation").length).toBe(2);
    expect(getAllByRole("option").length).toBe(5);
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Ríos españoles")).toBeTruthy();
    await userEvent.click(getAllByRole("option")[4]);
    expect(onChange).toHaveBeenCalledWith({ value: "ebro" });
    expect(queryByRole("list")).toBeFalsy();
    expect(getByText("Ebro")).toBeTruthy();
    expect(searchInput.value).toBe("");
    await userEvent.click(select);
    expect(getAllByRole("option")[17].getAttribute("aria-selected")).toBe("true");
  });

  test("Grouped Options: Searchable - Displays 'No matches found' when there are no filtering results", async () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole } = render(
      <DxcSelect label="test-select-label" options={groupOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    await userEvent.click(select);
    expect(getByRole("list")).toBeTruthy();
    await userEvent.type(searchInput, "very long string");
    expect(getByText("No matches found")).toBeTruthy();
  });

  test("Grouped Options: Multiple selection - Displays a checkbox per option and enables the multi-selection", async () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={groupOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector(`input[name="test"]`);
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[10]);
    expect(onChange).toHaveBeenCalledWith({ value: ["bilbao"] });
    expect(queryByRole("list")).toBeTruthy();
    expect(getAllByText("Bilbao").length).toBe(2);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: ["bilbao", "guadalquivir"] });
    expect(queryByRole("list")).toBeTruthy();
    expect(getByText("Bilbao, Guadalquivir")).toBeTruthy();
    expect(submitInput.value).toBe("bilbao,guadalquivir");
  });

  test("Grouped Options: Multiple selection - Clear action and selection indicator", async () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole, queryByRole, getByTitle, queryByTitle } = render(
      <DxcSelect label="test-select-label" options={groupOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[5]);
    await userEvent.click(getAllByRole("option")[8]);
    await userEvent.click(getAllByRole("option")[13]);
    await userEvent.click(getAllByRole("option")[17]);
    expect(onChange).toHaveBeenCalledWith({ value: ["blanco", "oviedo", "duero", "ebro"] });
    expect(queryByRole("list")).toBeTruthy();
    expect(getByText("Blanco, Oviedo, Duero, Ebro")).toBeTruthy();
    expect(getByText("4", { exact: true })).toBeTruthy();
    await userEvent.click(getByTitle("Clear selection"));
    expect(queryByRole("list")).toBeTruthy();
    expect(queryByText("Blanco, Oviedo, Duero, Ebro")).toBeFalsy();
    expect(queryByText("4")).toBeFalsy();
    expect(queryByTitle("Clear selection")).toBeFalsy();
  });

  test("Grouped Options: Multiple selection - Optional option should not be added when the select is marked as multiple", async () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={groupOptions}
        onChange={onChange}
        multiple
        optional
      />
    );
    const select = getByRole("combobox");
    expect(getByText("(Optional)")).toBeTruthy();
    await userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(1);
    await userEvent.click(getAllByRole("option")[0]);
    expect(onChange).toHaveBeenCalledWith({ value: ["azul"] });
    expect(getAllByText("Azul").length).toBe(2);
  });

  test("Grouped Options - If an options was previously selected when its opened (by key press), the visual focus appears always in the selected option", async () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={groupOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[2]);
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

  test("Grouped Options - If an options was previously selected when its opened (by click and key press), the visual focus appears always in the selected option", async () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={groupOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[17]);
    expect(getByText("Ebro")).toBeTruthy();
    await userEvent.click(select);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
    await userEvent.click(select);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByText("Azul")).toBeTruthy();
  });

  test("Multiple selection and optional - Clear action cleans every selected option but does not display an error", async () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getByTitle } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} multiple optional />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getAllByRole("option")[5]);
    await userEvent.click(getAllByRole("option")[8]);
    await userEvent.click(getAllByRole("option")[13]);
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9", "14"] });
    await userEvent.click(getByTitle("Clear selection"));
    expect(onChange).toHaveBeenCalledWith({ value: [] });
  });
});
