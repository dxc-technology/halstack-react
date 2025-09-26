import { act, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcSelect from "./Select";
import MockDOMRect from "../../test/mocks/domRectMock";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect
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
    userEvent.click(label);
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
  test("Renders with correct aria attributes", () => {
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
    expect(select.getAttribute("aria-label")).toBeNull();
    userEvent.click(select);
    const list = getByRole("listbox");
    expect(select.getAttribute("aria-controls")).toBe(list.id);
    expect(list.getAttribute("aria-multiselectable")).toBe("false");
  });
  test("Renders with correct error aria label", () => {
    const { getByRole } = render(
      <DxcSelect ariaLabel="Example aria label" placeholder="Example" options={singleOptions} />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-label")).toBe("Example aria label");
  });
  test("Single selection: Renders with correct default value", () => {
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect label="test-select-label" name="test" defaultValue="4" options={singleOptions} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 04")).toBeTruthy();
    expect(submitInput?.value).toBe("4");
    userEvent.click(select);
    const options = getAllByRole("option");
    expect(options[3]?.getAttribute("aria-selected")).toBe("true");
    if (options[7]) {
      userEvent.click(options[7]);
    }
    expect(getByText("Option 08")).toBeTruthy();
    expect(submitInput?.value).toBe("8");
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
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[2]) {
      userEvent.click(options[2]);
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
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[2]) {
      userEvent.click(options[2]);
    }
    userEvent.click(submit);
  });
  test("Searching for a value with an empty list of options passed doesn't open the listbox", () => {
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={[]} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    act(() => {
      if (searchInput) {
        userEvent.type(searchInput, "test");
      }
    });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Disabled select — Cannot gain focus or open the listbox via click", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} multiple disabled />
    );
    const select = getByRole("combobox");
    expect(select.getAttribute("aria-disabled")).toBe("true");
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(document.activeElement === select).toBeFalsy();
  });
  test("Disabled select — Clear all options action must be shown but not clickable", () => {
    const { getByRole, getByText } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled searchable multiple />
    );
    userEvent.click(getByRole("button"));
    expect(getByText("Option 01, Option 02")).toBeTruthy();
  });
  test("Disabled select — Does not call onBlur event", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} disabled onBlur={onBlur} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    fireEvent.keyDown(getByRole("combobox"), { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    expect(onBlur).not.toHaveBeenCalled();
  });
  test("Disabled select — When the component gains the focus, the listbox does not open", () => {
    const { getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" value={["1", "2"]} options={singleOptions} disabled searchable multiple />
    );
    const select = getByRole("combobox");
    fireEvent.focus(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(document.activeElement === select).toBeFalsy();
  });
  test("Disabled select — Doesn't send its value when submitted", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
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
    userEvent.click(submit);
  });
  test("Controlled — Single selection — Not optional constraint", () => {
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
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "1" });
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });
  test("Controlled — Multiple selection — Not optional constraint", () => {
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
    expect(onBlur).toHaveBeenCalledWith({
      value: [],
      error: "This field is required. Please, enter a value.",
    });
    userEvent.click(select);
    let options = getAllByRole("option");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    if (options[1]) {
      userEvent.click(options[1]);
    }
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: ["1", "2"] });
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: ["1", "2"] });
    userEvent.click(select);
    options = getAllByRole("option");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    if (options[1]) {
      userEvent.click(options[1]);
    }
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: [],
      error: "This field is required. Please, enter a value.",
    });
    fireEvent.blur(select);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: [],
      error: "This field is required. Please, enter a value.",
    });
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
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "" });
    expect(select.getAttribute("aria-invalid")).toBe("false");
  });
  test("Non-Grouped Options — Opens listbox and renders correctly or closes it with a click on select", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
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
  test("Non-Grouped Options — If an empty list of options is passed, the select is rendered but doesn't open the listbox", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={[]} />);
    const select = getByRole("combobox");
    userEvent.click(select);
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
    userEvent.click(select);
    let options = getAllByRole("option");
    if (options[2]) {
      userEvent.click(options[2]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "3" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 03")).toBeTruthy();
    userEvent.click(select);
    options = getAllByRole("option");
    expect(options[2]?.getAttribute("aria-selected")).toBe("true");
    expect(submitInput?.value).toBe("3");
  });
  test("Non-Grouped Options — Optional renders an empty first option (selected by default) with the placeholder as its label", () => {
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
    userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(2);
    const options = getAllByRole("option");
    expect(options[0]?.getAttribute("aria-selected")).toBe("true");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Choose an option").length).toBe(1);
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Choose an option").length).toBe(1);
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
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
    act(() => {
      if (searchInput) {
        userEvent.type(searchInput, "1");
      }
    });
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(12);
    act(() => {
      if (searchInput) {
        userEvent.type(searchInput, "123");
      }
    });
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Non-Grouped Options: Arrow up key — Opens the listbox and visually focus the last option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });
  test("Non-Grouped Options: Arrow up key — Puts the focus in last option when the first one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-19");
  });
  test("Non-Grouped Options: Arrow down key — Opens the listbox and visually focus the first option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options: Arrow down key — Puts the focus in the first option when the last one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={singleOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Non-Grouped Options: Enter key — Selects the visually focused option and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} optional />
    );
    const select = getByRole("combobox");
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledWith({ value: "20" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 20")).toBeTruthy();
    userEvent.click(select);
    const options = getAllByRole("option");
    expect(options[20]?.getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options: Searchable — Displays an input for filtering the list of options", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    if (searchInput) {
      userEvent.type(searchInput, "08");
    }
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "8" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 08")).toBeTruthy();
    expect(searchInput?.value).toBe("");
    userEvent.click(select);
    const options = getAllByRole("option");
    expect(options[7]?.getAttribute("aria-selected")).toBe("true");
  });
  test("Non-Grouped Options: Searchable — Displays 'No matches found' when there are no filtering results", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    if (searchInput) {
      userEvent.type(searchInput, "abc");
    }
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Non-Grouped Options: Searchable — Clicking the select, when the list is open, clears the search value", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    act(() => {
      if (searchInput) {
        userEvent.type(searchInput, "2");
      }
    });
    expect(getByRole("listbox")).toBeTruthy();
    expect(getByText("Option 02")).toBeTruthy();
    expect(getByText("Option 12")).toBeTruthy();
    expect(getByText("Option 20")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(3);
    act(() => {
      userEvent.click(select);
    });
    expect(searchInput?.value).toBe("");
  });
  test("Non-Grouped Options: Searchable — Writing displays the listbox, if it was not open", () => {
    const onChange = jest.fn();
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    if (searchInput) {
      userEvent.type(searchInput, "2");
    }
    expect(getByRole("listbox")).toBeTruthy();
  });
  test("Non-Grouped Options: Searchable — Key Esc cleans the search value and closes the options", () => {
    const onChange = jest.fn();
    const { container, getByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    if (searchInput) {
      userEvent.type(searchInput, "Option 02");
    }
    fireEvent.keyDown(select, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(searchInput?.value).toBe("");
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Non-Grouped Options: Searchable — While user types, a clear action is displayed for cleaning the search value", () => {
    const onChange = jest.fn();
    const { container, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} searchable />
    );
    const searchInput = container.querySelectorAll("input")[1];
    if (searchInput) {
      userEvent.type(searchInput, "Option 02");
    }
    expect(getAllByRole("option").length).toBe(1);
    const clearSearchButton = getByRole("button");
    expect(clearSearchButton.getAttribute("aria-label")).toBe("Clear search");
    userEvent.click(clearSearchButton);
    expect(getByRole("listbox")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(20);
    expect(queryByRole("button")).toBeFalsy();
  });
  test("Non-Grouped Options: Multiple selection — Displays a checkbox per option and enables the multi-selection", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={singleOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    userEvent.click(select);
    expect(getByRole("listbox").getAttribute("aria-multiselectable")).toBe("true");
    const options = getAllByRole("option");
    if (options[10]) {
      userEvent.click(options[10]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["11"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getAllByText("Option 11").length).toBe(2);
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledWith({ value: ["11", "19"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Option 11, Option 19")).toBeTruthy();
    expect(submitInput?.value).toBe("11,19");
  });
  test("Non-Grouped Options: Multiple selection — Clear action and selection indicator", () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[5]) {
      userEvent.click(options[5]);
    }
    if (options[8]) {
      userEvent.click(options[8]);
    }
    if (options[13]) {
      userEvent.click(options[13]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9", "14"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Option 06, Option 09, Option 14")).toBeTruthy();
    expect(getByText("3", { exact: true })).toBeTruthy();
    const clearSelectionButton = getByRole("button");
    expect(clearSelectionButton.getAttribute("aria-label")).toBe("Clear selection");
    userEvent.click(clearSelectionButton);
    expect(onChange).toHaveBeenCalledWith({ value: [], error: "This field is required. Please, enter a value." });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(queryByText("Option 06, Option 09, Option 14")).toBeFalsy();
    expect(queryByText("3")).toBeFalsy();
    expect(queryByRole("button")).toBeFalsy();
  });
  test("Non-Grouped Options: Multiple selection — Optional option should not be added when the select is marked as multiple", () => {
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
    userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(1);
    const options = getAllByRole("option");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["1"] });
    expect(getAllByText("Option 01").length).toBe(2);
  });
  test("Non-Grouped Options — If an options was previously selected when its opened (by key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[4]) {
      userEvent.click(options[4]);
    }
    expect(getByText("Option 05")).toBeTruthy();
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-4");
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(getByText("Option 04")).toBeTruthy();
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-3");
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(getByText("Option 06")).toBeTruthy();
  });
  test("Non-Grouped Options — If an options was previously selected when its opened (by click and key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[15]) {
      userEvent.click(options[15]);
    }
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Option 16")).toBeTruthy();
    userEvent.click(select);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-15");
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-15");
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(getByText("Option 17")).toBeTruthy();
  });
  test("Grouped Options — Opens listbox and renders it correctly or closes it with a click on select", () => {
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} />
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
    expect(groups[0]?.getAttribute("aria-labelledby")).toBe(groupLabels[0]?.id);
    expect(groups[1]?.getAttribute("aria-labelledby")).toBe(groupLabels[1]?.id);
    expect(groups[2]?.getAttribute("aria-labelledby")).toBe(groupLabels[2]?.id);
    expect(getAllByRole("option").length).toBe(18);
    userEvent.click(select);
    expect(queryByRole("listbox")).toBeFalsy();
    expect(select.getAttribute("aria-expanded")).toBe("false");
  });
  test("Grouped Options — If an empty list of options in a group is passed, the select is rendered but doesn't open the listbox", () => {
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
  test("Grouped Options — Click in an option selects it and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={groupedOptions} onChange={onChange} />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    userEvent.click(select);
    let options = getAllByRole("option");
    if (options[8]) {
      userEvent.click(options[8]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "oviedo" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Oviedo")).toBeTruthy();
    userEvent.click(select);
    options = getAllByRole("option");
    expect(options[8]?.getAttribute("aria-selected")).toBe("true");
    expect(submitInput?.value).toBe("oviedo");
  });
  test("Grouped Options — Optional renders an empty first option (out of any group) with the placeholder as its label", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, getAllByText } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={groupedOptions}
        onChange={onChange}
        optional
      />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    expect(getAllByText("Placeholder example").length).toBe(2);
    const options = getAllByRole("option");
    expect(options[0]?.getAttribute("aria-selected")).toBe("true");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Placeholder example").length).toBe(1);
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledWith({ value: "" });
    expect(getAllByText("Placeholder example").length).toBe(1);
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Grouped Options — Filtering options never affects the optional item until there are no coincidence", () => {
    const { getByRole, getAllByRole, getByText, queryByText, container } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Placeholder example"
        options={groupedOptions}
        optional
        searchable
      />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    if (searchInput) {
      userEvent.type(searchInput, "ro");
    }
    expect(getByText("Placeholder example")).toBeTruthy();
    expect(getAllByRole("option").length).toBe(6);
    if (searchInput) {
      userEvent.type(searchInput, "roro");
    }
    expect(queryByText("Placeholder example")).toBeFalsy();
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Grouped Options: Arrow up key — Opens the listbox and visually focus the last option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupedOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
  });
  test("Grouped Options: Arrow up key — Puts the focus in last option when the first one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupedOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
  });
  test("Grouped Options: Arrow down key — Opens the listbox and visually focus the first option", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupedOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Grouped Options: Arrow down key — Puts the focus in the first option when the last one is visually focused", () => {
    const { getByRole, queryByRole } = render(<DxcSelect label="test-select-label" options={groupedOptions} />);
    const select = getByRole("combobox");
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(select.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Grouped Options: Enter key — Selects the visually focused option and closes the listbox", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} onChange={onChange} optional />
    );
    const select = getByRole("combobox");
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledWith({ value: "ebro" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Ebro")).toBeTruthy();
    userEvent.click(select);
    const options = getAllByRole("option");
    expect(options[18]?.getAttribute("aria-selected")).toBe("true");
  });
  test("Grouped Options: Searchable — Displays an input for filtering the list of options", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    if (searchInput) {
      userEvent.type(searchInput, "ro");
    }
    expect(getAllByRole("presentation").length).toBe(2);
    expect(getAllByRole("option").length).toBe(5);
    expect(getByText("Colores")).toBeTruthy();
    expect(getByText("Ríos españoles")).toBeTruthy();
    let options = getAllByRole("option");
    if (options[4]) {
      userEvent.click(options[4]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: "ebro" });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(getByText("Ebro")).toBeTruthy();
    expect(searchInput?.value).toBe("");
    userEvent.click(select);
    options = getAllByRole("option");
    expect(options[17]?.getAttribute("aria-selected")).toBe("true");
  });
  test("Grouped Options: Searchable — Displays 'No matches found' when there are no filtering results", () => {
    const onChange = jest.fn();
    const { container, getByText, getByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} onChange={onChange} searchable />
    );
    const select = getByRole("combobox");
    const searchInput = container.querySelectorAll("input")[1];
    userEvent.click(select);
    expect(getByRole("listbox")).toBeTruthy();
    if (searchInput) {
      userEvent.type(searchInput, "very long string");
    }
    expect(getByText("No matches found")).toBeTruthy();
  });
  test("Grouped Options: Multiple selection — Displays a checkbox per option and enables the multi-selection", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole, queryByRole, container } = render(
      <DxcSelect name="test" label="test-select-label" options={groupedOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[10]) {
      userEvent.click(options[10]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["bilbao"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getAllByText("Bilbao").length).toBe(2);
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ value: ["bilbao", "guadalquivir"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Bilbao, Guadalquivir")).toBeTruthy();
    expect(submitInput?.value).toBe("bilbao,guadalquivir");
  });
  test("Grouped Options: Multiple selection — Clear action and selection indicator", () => {
    const onChange = jest.fn();
    const { getByText, queryByText, getByRole, getAllByRole, queryByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} onChange={onChange} multiple />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[5]) {
      userEvent.click(options[5]);
    }
    if (options[8]) {
      userEvent.click(options[8]);
    }
    if (options[13]) {
      userEvent.click(options[13]);
    }
    if (options[17]) {
      userEvent.click(options[17]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["blanco", "oviedo", "duero", "ebro"] });
    expect(queryByRole("listbox")).toBeTruthy();
    expect(getByText("Blanco, Oviedo, Duero, Ebro")).toBeTruthy();
    expect(getByText("4", { exact: true })).toBeTruthy();
    const clearSelectionButton = getByRole("button");
    expect(clearSelectionButton.getAttribute("aria-label")).toBe("Clear selection");
    userEvent.click(clearSelectionButton);
    expect(queryByRole("listbox")).toBeTruthy();
    expect(queryByText("Blanco, Oviedo, Duero, Ebro")).toBeFalsy();
    expect(queryByText("4")).toBeFalsy();
    expect(queryByRole("button")).toBeFalsy();
  });
  test("Grouped Options: Multiple selection — Optional option should not be added when the select is marked as multiple", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText, getByRole, getAllByRole } = render(
      <DxcSelect
        label="test-select-label"
        placeholder="Choose an option"
        options={groupedOptions}
        onChange={onChange}
        multiple
        optional
      />
    );
    const select = getByRole("combobox");
    expect(getByText("(Optional)")).toBeTruthy();
    userEvent.click(select);
    expect(getAllByText("Choose an option").length).toBe(1);
    const options = getAllByRole("option");
    if (options[0]) {
      userEvent.click(options[0]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["azul"] });
    expect(getAllByText("Azul").length).toBe(2);
  });
  test("Grouped Options — If an options was previously selected when its opened (by key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[2]) {
      userEvent.click(options[2]);
    }
    expect(getByText("Rosa")).toBeTruthy();
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-2");
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(getByText("Rojo")).toBeTruthy();
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-1");
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(getByText("Verde")).toBeTruthy();
  });
  test("Grouped Options — If an options was previously selected when its opened (by click and key press), the visual focus appears always in the selected option", () => {
    const { getByText, getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={groupedOptions} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[17]) {
      userEvent.click(options[17]);
    }
    expect(getByText("Ebro")).toBeTruthy();
    userEvent.click(select);
    expect(select.getAttribute("aria-activedescendant")).toBeNull();
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
    userEvent.click(select);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(select.getAttribute("aria-activedescendant")).toBe("option-17");
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(select, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(select, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(getByText("Azul")).toBeTruthy();
  });
  test("Multiple selection and optional — Clear action cleans every selected option but does not display an error", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-label" options={singleOptions} onChange={onChange} multiple optional />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const options = getAllByRole("option");
    if (options[5]) {
      userEvent.click(options[5]);
    }
    if (options[8]) {
      userEvent.click(options[8]);
    }
    if (options[13]) {
      userEvent.click(options[13]);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["6", "9", "14"] });
    const clearSelectionButton = getByRole("button");
    expect(clearSelectionButton.getAttribute("aria-label")).toBe("Clear selection");
    userEvent.click(clearSelectionButton);
    expect(onChange).toHaveBeenCalledWith({ value: [] });
  });
  test("Select all (single) — 'Select all' option is included and (un)selects all the options available", () => {
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
    userEvent.click(select);
    const selectAllOption = getByText("Select all");
    if (selectAllOption) {
      userEvent.click(selectAllOption);
    }
    expect(onChange).toHaveBeenCalledWith({ value: ["1", "2", "3", "4"] });
    if (selectAllOption) {
      userEvent.click(selectAllOption);
    }
    expect(onChange).toHaveBeenCalledWith({ value: [] });
  });
  test("Select all (groups) — 'Select all' option is included and (un)selects all the options available", () => {
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
    userEvent.click(select);
    const selectAllOption = getByText("Select all");
    selectAllOption && userEvent.click(selectAllOption);
    expect(onChange).toHaveBeenCalledWith({
      value: ["azul", "rojo", "rosa", "madrid", "oviedo", "sevilla", "miño", "duero", "tajo"],
    });
    selectAllOption && userEvent.click(selectAllOption);
    expect(onChange).toHaveBeenCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
  test("Select all — Keyboard navigation is correct", () => {
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
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(getByText("Select all")).toBeTruthy();
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({
      value: ["azul", "rojo", "rosa", "madrid", "oviedo", "sevilla", "miño", "duero", "tajo"],
    });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
  test("Select all (groups) — 'Select all' option selects all the options when there's a partial selection", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcSelect
        enableSelectAll
        label="Select an option"
        multiple
        options={reducedGroupedOptions}
        placeholder="Select an available option"
        onChange={onChange}
        defaultValue={["azul", "rojo", "rosa"]}
      />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const selectAllOption = getByText("Select all");
    if (selectAllOption) {
      userEvent.click(selectAllOption);
    }
    expect(onChange).toHaveBeenCalledWith({
      value: ["azul", "rojo", "rosa", "madrid", "oviedo", "sevilla", "miño", "duero", "tajo"],
    });
    if (selectAllOption) {
      userEvent.click(selectAllOption);
    }
    expect(onChange).toHaveBeenCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
  test("Select all options from a group — The header of a group is selectable and (un)selects all the options from its group", () => {
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
    userEvent.click(select);
    const thirdGroupHeader = getByText("Ríos españoles");
    thirdGroupHeader && userEvent.click(thirdGroupHeader);
    expect(onChange).toHaveBeenCalledWith({
      value: ["miño", "duero", "tajo"],
    });
    thirdGroupHeader && userEvent.click(thirdGroupHeader);
    expect(onChange).toHaveBeenCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
  test("Select all options from a group — The header of a group selects all the options when there's a partial selection", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcSelect
        enableSelectAll
        label="Select an option"
        multiple
        options={reducedGroupedOptions}
        placeholder="Select an available option"
        onChange={onChange}
        defaultValue={["miño", "duero"]}
      />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    const thirdGroupHeader = getByText("Ríos españoles");
    thirdGroupHeader && userEvent.click(thirdGroupHeader);
    expect(onChange).toHaveBeenCalledWith({
      value: ["miño", "duero", "tajo"],
    });
    thirdGroupHeader && userEvent.click(thirdGroupHeader);
    expect(onChange).toHaveBeenCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
  test("Select all options from a group — Keyboard navigation is correct", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
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
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenLastCalledWith({
      value: ["azul", "rojo", "rosa"],
    });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenLastCalledWith({
      value: ["rojo", "rosa"],
    });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenLastCalledWith({
      value: ["rojo", "rosa", "azul"],
    });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenLastCalledWith({
      value: ["rojo", "rosa", "azul", "miño", "duero", "tajo"],
    });
    fireEvent.keyDown(select, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenLastCalledWith({
      value: ["azul", "rojo", "rosa", "madrid", "oviedo", "sevilla", "miño", "duero", "tajo"],
    });
    fireEvent.keyDown(select, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenLastCalledWith({ error: "This field is required. Please, enter a value.", value: [] });
  });
});
