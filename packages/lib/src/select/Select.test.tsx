import { fireEvent, render, waitFor } from "@testing-library/react";
import DxcSelect from "./Select";
import MockDOMRect from "../../test/mocks/domRectMock";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const reducedSingleOptions = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
];

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

const reducedGroupedOptions = [
  {
    label: "Colores",
    options: [
      { label: "Azul", value: "azul" },
      { label: "Rojo", value: "rojo" },
      { label: "Rosa", value: "rosa" },
    ],
  },
  {
    label: "Ciudades españolas",
    options: [
      { label: "Madrid", value: "madrid" },
      { label: "Oviedo", value: "oviedo" },
      { label: "Sevilla", value: "sevilla" },
    ],
  },
  {
    label: "Ríos españoles",
    options: [
      { label: "Miño", value: "miño" },
      { label: "Duero", value: "duero" },
      { label: "Tajo", value: "tajo" },
    ],
  },
];

const groupedOptions = [
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

describe("Select component tests", () => {
  test("When clicking the label, the focus goes to the select", () => {
    const { getByText, getByRole } = render(
      <DxcSelect
        label="test-select-label"
        helperText="test-select-helper-text"
        placeholder="Example text"
        options={singleOptions}
      />
    );
    const select = getByRole("combobox");
    const label = getByText("test-select-label");
    fireEvent.click(label);
    expect(document.activeElement).toEqual(select);
  });

  test("Renders with correct aria attributes when is in error state", () => {
    const { getByText, getByRole } = render(
      <DxcSelect label="Error label" error="Error message." options={singleOptions} />
    );
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

    fireEvent.click(select);
    const list = await waitFor(() => getByRole("listbox"));
    expect(select.getAttribute("aria-controls")).toBe(list.id);
    expect(list.getAttribute("aria-multiselectable")).toBe("false");
  });

  test("Single selection: Renders with correct default value", async () => {
    const { getByText, getByRole, queryByRole, container } = render(
      <DxcSelect label="test-select-label" name="test" defaultValue="4" options={singleOptions} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 04")).toBeTruthy();
    expect(submitInput?.value).toBe("4");
    fireEvent.click(select);
    const list = await waitFor(() => getByRole("listbox"));
    expect(list).toBeTruthy();
    const option04 = getByRole("option", { name: "Option 04" });
    expect(option04.getAttribute("aria-selected")).toBe("true");
    const option03 = getByRole("option", { name: "Option 03" });
    expect(option03.getAttribute("aria-selected")).toBe("false");
    fireEvent.click(option03);
    expect(getByText("Option 03")).toBeTruthy();
  });

  test("Multiple selection: Renders with correct default value", () => {
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
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 02, Option 04, Option 06")).toBeTruthy();
    expect(submitInput?.value).toBe("4,2,6");
    fireEvent.click(select);
    const options = getAllByRole("option");
    if (options[2]) {
      fireEvent.click(options[2]);
    }
    expect(getByText("Option 02, Option 03, Option 04, Option 06")).toBeTruthy();
    expect(submitInput?.value).toBe("4,2,6,3");
  });

  test("Sends its value when submitted", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
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
    fireEvent.click(select);
    const options = getAllByRole("option");
    if (options[2]) {
      fireEvent.click(options[2]);
    }
    fireEvent.click(submit);
  });

  test("Searching for a value with an empty list of options passed doesn't open the listbox", () => {
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={[]} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    fireEvent.click(select);
    if (searchInput) {
      fireEvent.change(searchInput, { target: { value: "test" } });
    }
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Disabled select — Cannot gain focus or open the listbox via click", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} multiple disabled />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-disabled")).toBe("true");
    fireEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(document.activeElement === select).toBeFalsy();
  });

  test("Disabled select — Clear all options action must be shown but not clickable", () => {
    const { getByRole, getByText } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled searchable multiple />
    );
    fireEvent.click(getByRole("button"));
    expect(getByText("Option 01, Option 02")).toBeTruthy();
  });

  test("Disabled select — When the component gains focus, the listbox does not open", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled searchable multiple />
    );
    const select = getByRole("combobox");
    fireEvent.focus(select);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(document.activeElement === select).toBeFalsy();
  });

  test("Controlled (Single selection) Not optional constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} onBlur={onBlur} />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
    fireEvent.click(select);
    const options = getAllByRole("option");
    if (options[0]) {
      fireEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "1" });
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });

  test("Controlled — Multiple selection — Not optional constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} onBlur={onBlur} multiple />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalledWith({
      value: [],
      error: "This field is required. Please, enter a value.",
    });
    fireEvent.click(select);
    await waitFor(() => {
      expect(getByRole("listbox")).toBeTruthy();
    });
    const options = getAllByRole("option");
    if (options[0] && options[1]) {
      fireEvent.click(options[0]);
      fireEvent.click(options[1]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["1", "2"] });
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalledWith({ value: ["1", "2"] });
  });

  test("Controlled — Optional constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} onBlur={onBlur} optional />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(select);
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
    expect(select.getAttribute("aria-invalid")).toBe("false");
  });

  test("Non-Grouped Options — Opens listbox and renders correctly or closes it with a click on select", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
    );
    const select = getByRole("combobox");
    fireEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Option 01")).toBeTruthy();
    expect(getByText("Option 02")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(20);
    fireEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });

  test("Non-Grouped Options — Click in an option selects it and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={singleOptions} onChange={onChange} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    fireEvent.click(select);
    let options = getAllByRole("option");
    if (options[2]) {
      fireEvent.click(options[2]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "3" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 03")).toBeTruthy();
    fireEvent.click(select);
    options = getAllByRole("option");
    expect(options[2]?.getAttribute("aria-selected")).toBe("true");
    expect(submitInput?.value).toBe("3");
  });

  test("Non-Grouped Options — Optional renders an empty first option (selected by default) with placeholder label", () => {
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
    fireEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(2);
    const options = getAllByRole("option");
    expect(options[0]?.getAttribute("aria-selected")).toBe("true");
    if (options[0]) {
      fireEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Choose an option").length).toBe(1);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown" });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });

  test("Non-Grouped Options — Filtering options never affects the optional item until there are no coincidences", () => {
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
    if (searchInput) {
      fireEvent.change(searchInput, { target: { value: "1" } });
    }
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(12);
    if (searchInput) {
      fireEvent.change(searchInput, { target: { value: "123" } });
    }
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });

  test("Non-Grouped Options: Arrow up/down keyboard navigation works correctly", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp" });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");

    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown" });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });

  test("Non-Grouped Options: Enter key — Selects the visually focused option and closes the listbox", async () => {
    const onChange = jest.fn();
    const { getByText, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} optional />
    );
    const select = getByRole("combobox");
    fireEvent.focus(select);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp" });
    await waitFor(() => expect(getByRole("listbox")).toBeTruthy());
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp" });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter" });
    expect(onChange).toHaveBeenCalledWith({ value: "20" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 20")).toBeTruthy();
  });

  test("Non-Grouped Options: Searchable — Displays input for filtering, clears search, and esc closes option list", async () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    fireEvent.click(select);
    await waitFor(() => expect(getByRole("listbox")).toBeTruthy());
    if (searchInput) {
      fireEvent.change(searchInput, { target: { value: "08" } });
    }
    expect(getAllByRole("option").length).toBe(1);
    expect(getByText("Option 08")).toBeTruthy();

    const clearSearchButton = getByRole("button");
    fireEvent.click(clearSearchButton);
    expect(getAllByRole("option").length).toBe(20);

    fireEvent.keyDown(select, { key: "Esc", code: "Esc" });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Non-Grouped Options: Multiple selection — Selection, indicator, and clear action work", () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    fireEvent.click(select);
    const options = getAllByRole("option");
    if (options[5] && options[8]) {
      fireEvent.click(options[5]);
      fireEvent.click(options[8]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9"] });
    expect(getByText("Option 06, Option 09")).toBeTruthy();
    expect(getByText("2", { exact: true })).toBeTruthy();

    const clearSelectionButton = getByRole("button");
    fireEvent.click(clearSelectionButton);
    expect(onChange).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
    expect(queryByText("Option 06, Option 09")).toBeFalsy();
  });

  test("Grouped Options — Opens listbox and renders groups correctly", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} />
    );
    const select = getByRole("combobox");
    fireEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Ciudades españolas")).toBeTruthy();
    expect(getAllByRole("group").length).toBe(3);
    expect(getAllByRole("option").length).toBe(18);
    fireEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Grouped Options — Click in an option selects it and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect name="test" label="test-select-label" options={groupedOptions} onChange={onChange} />
    );
    const select = getByRole("combobox");
    fireEvent.click(select);
    const options = getAllByRole("option");
    if (options[8]) {
      fireEvent.click(options[8]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "oviedo" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Oviedo")).toBeTruthy();
  });

  test("Grouped Options: Searchable — Displays an input for filtering grouped options", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    fireEvent.click(select);
    if (searchInput) {
      fireEvent.change(searchInput, { target: { value: "ro" } });
    }
    expect(getAllByRole("group").length).toBe(2);
    expect(getAllByRole("option").length).toBe(5);
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Ríos españoles")).toBeTruthy();
  });

  test("Select all (single) — 'Select all' option selects and unselects all available options", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcSelect
        enableSelectAll
        label="Select an option"
        multiple
        options={reducedSingleOptions}
        placeholder="Select an available option"
        onChange={onChange}
        optional
      />
    );
    const select = getByRole("combobox");
    fireEvent.click(select);
    const selectAllOption = getByText("Select all");
    fireEvent.click(selectAllOption);
    expect(onChange).toHaveBeenCalledWith({ value: ["1", "2", "3", "4"] });
    fireEvent.click(selectAllOption);
    expect(onChange).toHaveBeenCalledWith({ value: [] });
  });

  test("Select all options from a group — Group header click selects/unselects all options from group", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcSelect
        enableSelectAll
        label="Select an option"
        multiple
        options={reducedGroupedOptions}
        placeholder="Select an available option"
        onChange={onChange}
      />
    );
    const select = getByRole("combobox");
    fireEvent.click(select);
    const thirdGroupHeader = getByText("Ríos españoles");
    fireEvent.click(thirdGroupHeader);
    expect(onChange).toHaveBeenCalledWith({
      value: ["miño", "duero", "tajo"],
    });
    fireEvent.click(thirdGroupHeader);
    expect(onChange).toHaveBeenCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
});
