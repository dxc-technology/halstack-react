import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcRadioGroup from "./RadioGroup";

const options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
  { label: "Option 05", value: "5" },
  { label: "Option 06", value: "6" },
  { label: "Option 07", value: "7" },
  { label: "Option 08", value: "8" },
  { label: "Option 09", value: "9" },
];
const singleDisabledOptions = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3", disabled: true },
];

describe("Radio Group component tests", () => {
  test("Initial render has correct aria attributes and tabIndex", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={options} error="" />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const error = getByRole("alert");
    expect(radioGroup.getAttribute("aria-disabled")).toBe("false");
    expect(radioGroup.getAttribute("aria-labelledby")).toBe(getByText("test-radioGroup-label").id);
    expect(radioGroup.getAttribute("aria-invalid")).toBe("false");
    expect(radioGroup.getAttribute("aria-required")).toBe("true");
    expect(radioGroup.getAttribute("aria-orientation")).toBe("vertical");
    expect(radioGroup.getAttribute("aria-label")).toBeNull();
    expect(error.getAttribute("aria-live")).toBe("off");
    radios.forEach((radio, index) => {
      // if no option was previously selected, first option is the focusable one
      expect(radio.tabIndex).toBe(index === 0 ? 0 : -1);
      expect(radio.getAttribute("aria-checked")).toBe("false");
      expect(radio.getAttribute("aria-disabled")).toBe("false");
    });
  });

  test("Initial render has correct aria-label", () => {
    const { getByRole } = render(<DxcRadioGroup ariaLabel="Example aria label" options={options} error="" />);
    const radioGroup = getByRole("radiogroup");
    expect(radioGroup.getAttribute("aria-label")).toBe("Example aria label");
  });

  test("aria-orientation attribute changes depending on stacking prop value", () => {
    const { getByRole } = render(<DxcRadioGroup label="test-radioGroup-label" options={options} stacking="row" />);
    const radioGroup = getByRole("radiogroup");
    expect(radioGroup.getAttribute("aria-orientation")).toBe("horizontal");
  });

  test("Sends its value when submitted", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ radiogroup: "5" });
    });
    const { getByText, getByRole, getAllByRole } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcRadioGroup name="radiogroup" label="test-radio-group-label" options={options} />
        <button type="submit">Submit</button>
      </form>
    );
    const radioGroup = getByRole("radiogroup");
    const submit = getByText("Submit");
    const radio = getAllByRole("radio")[4];
    userEvent.click(radioGroup);
    if (radio) {
      userEvent.click(radio);
    }
    userEvent.click(submit);
  });

  test("Disabled state renders with correct aria attribute, correct tabIndex values and it is not focusable by keyboard", () => {
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={options} disabled />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    expect(radioGroup.getAttribute("aria-disabled")).toBe("true");
    radios.forEach((radio) => {
      expect(radio.tabIndex).toBe(-1);
    });
    fireEvent.keyDown(radioGroup, {
      key: " ",
      code: "Space",
      keyCode: 13,
      charCode: 13,
    });
    fireEvent.keyDown(radioGroup, {
      key: "ArrowLeft",
      code: "ArrowLeft",
      keyCode: 37,
      charCode: 37,
    });
    fireEvent.keyDown(radioGroup, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    radios.forEach((radio) => {
      expect(radio.tabIndex).toBe(-1);
    });
  });

  test("Disabled option renders with correct aria attribute, correct tabIndex value and it is not focusable by keyboard (focus 'jumps' the disabled option)", () => {
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup name="test" label="test-radioGroup-label" options={singleDisabledOptions} />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    expect(radios[2]?.getAttribute("aria-disabled")).toBe("true");
    expect(radios[0]?.tabIndex).toBe(0);
    expect(radios[1]?.tabIndex).toBe(-1);
    expect(radios[2]?.tabIndex).toBe(-1);
    fireEvent.keyDown(radioGroup, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(radioGroup, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(radios[0]?.tabIndex).toBe(0);
    expect(radios[1]?.tabIndex).toBe(-1);
    expect(radios[2]?.tabIndex).toBe(-1);
  });

  test("Disabled radio group doesn't send its value when submitted", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({});
    });
    const { getByText } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcRadioGroup name="radiogroup" defaultValue="1" disabled label="test-radio-group-label" options={options} />
        <button type="submit">Submit</button>
      </form>
    );
    const submit = getByText("Submit");
    userEvent.click(submit);
  });

  test("Error state renders with correct aria attributes", () => {
    const { getByRole, getByText } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={options} error="Error message" />
    );
    const radioGroup = getByRole("radiogroup");
    const errorMessage = getByText("Error message");
    expect(radioGroup.getAttribute("aria-errormessage")).toBe(errorMessage.id);
    expect(radioGroup.getAttribute("aria-invalid")).toBe("true");
    expect(errorMessage.getAttribute("aria-live")).toBe("assertive");
  });

  test("Radio group with required constraint and 'undefined' as value, sends an error", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={options} onChange={onChange} onBlur={onBlur} />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[0];
    expect(radioGroup.getAttribute("aria-required")).toBe("true");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalledWith({
      error: "This field is required. Please, choose an option.",
    });
    userEvent.click(radioGroup);
    if (radio) {
      userEvent.click(radio);
    }
    expect(onChange).toHaveBeenCalledWith("1");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });

  test("Radio group with required constraint and empty string as value, sends an error", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" value="" options={options} onChange={onChange} onBlur={onBlur} />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[0];
    expect(radioGroup.getAttribute("aria-required")).toBe("true");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, choose an option." });
    if (radio) {
      userEvent.click(radio);
    }
    expect(onChange).toHaveBeenCalledWith("1");
  });

  test("The 'defaultValue' gives the radio group an initial value when it is uncontrolled", () => {
    const onChange = jest.fn();
    const { getAllByRole, container } = render(
      <DxcRadioGroup
        defaultValue="2"
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
      />
    );
    const radio = getAllByRole("radio")[1];
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(radio?.tabIndex).toBe(0);
    expect(radio?.getAttribute("aria-checked")).toBe("true");
    expect(submitInput?.value).toBe("2");
  });

  test("Optional radio group conditions: onBlur event doesn't send an error when no radio was checked, has correct aria attributes, custom label and its value is the empty string", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getByText, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
        onBlur={onBlur}
        optional
        optionalItemLabel="No selection"
      />
    );
    const radioGroup = getByRole("radiogroup");
    expect(radioGroup.getAttribute("aria-required")).toBe("false");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalledWith({});
    expect(radioGroup.getAttribute("aria-invalid")).toBe("false");
    const optionalLabel = getByText("No selection");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    userEvent.click(optionalLabel);
    expect(onChange).toHaveBeenCalledWith("");
    expect(submitInput?.value).toBe("");
  });

  test("Controlled radio group", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        value="2"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(submitInput?.value).toBe("2");
    expect(radios[1]?.tabIndex).toBe(0);
    expect(radios[1]?.getAttribute("aria-checked")).toBe("true");
    if (radios[6]) {
      userEvent.click(radios[6]);
    }
    expect(onChange).toHaveBeenCalledWith("7");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalledWith({ value: "2" });
  });

  test("Select an option by clicking on its label", () => {
    const onChange = jest.fn();
    const { getByText, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
      />
    );
    const radioLabel = getByText("Option 09");
    const checkedRadio = getAllByRole("radio")[8];
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(checkedRadio?.tabIndex).toBe(-1);
    userEvent.click(radioLabel);
    expect(onChange).toHaveBeenCalledWith("9");
    expect(checkedRadio?.getAttribute("aria-checked")).toBe("true");
    expect(checkedRadio?.tabIndex).toBe(0);
    expect(document.activeElement).toEqual(checkedRadio);
    expect(submitInput?.value).toBe("9");
  });

  test("Select an option by clicking on its radio input", () => {
    const onChange = jest.fn();
    const { getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
      />
    );
    const checkedRadio = getAllByRole("radio")[6];
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    expect(checkedRadio?.tabIndex).toBe(-1);
    if (checkedRadio) {
      userEvent.click(checkedRadio);
    }
    expect(onChange).toHaveBeenCalledWith("7");
    expect(checkedRadio?.getAttribute("aria-checked")).toBe("true");
    expect(checkedRadio?.tabIndex).toBe(0);
    expect(document.activeElement).toEqual(checkedRadio);
    expect(submitInput?.value).toBe("7");
  });

  test("Select an option that is already checked does not call onChange event but gives the focus", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(
      <DxcRadioGroup
        defaultValue="2"
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
      />
    );
    const checkedRadio = getAllByRole("radio")[1];
    expect(checkedRadio?.tabIndex).toBe(0);
    expect(checkedRadio?.getAttribute("aria-checked")).toBe("true");
    if (checkedRadio) {
      userEvent.click(checkedRadio);
    }
    expect(onChange).not.toHaveBeenCalled();
    expect(document.activeElement).toEqual(checkedRadio);
  });

  test("The 'space' key checks the current focused option if anyone is checked", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const checkedRadio = getAllByRole("radio")[0];
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    fireEvent.keyDown(radioGroup, {
      key: " ",
      code: "Space",
      keyCode: 32,
      charCode: 32,
    });
    expect(onChange).toHaveBeenCalledWith("1");
    expect(checkedRadio?.getAttribute("aria-checked")).toBe("true");
    expect(checkedRadio?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("1");
  });

  test("When the radio group gains the focus by keyboard ('tab' key), it goes to the first option (if no one was previously selected), without selecting it", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    const checkedRadio = getAllByRole("radio")[0];
    userEvent.tab();
    expect(onChange).not.toHaveBeenCalled();
    expect(submitInput?.value).toBe("");
    expect(checkedRadio?.tabIndex).toBe(0);
    expect(checkedRadio?.getAttribute("aria-checked")).toBe("false");
    expect(document.activeElement).toEqual(checkedRadio);
    fireEvent.keyDown(radioGroup, {
      key: "ArrowRight",
      code: "ArrowRight",
      keyCode: 39,
      charCode: 39,
    });
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(radios[1]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[1]);
    expect(radios[1]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("2");
  });

  test("The 'arrowDown' and 'arrowRight' keys move the selection to the next radio. When the last radio is reached, moves the selection to the first one", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        defaultValue="8"
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    fireEvent.keyDown(radioGroup, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(radios[8]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[8]);
    expect(radios[8]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("9");
    fireEvent.keyDown(radioGroup, { key: "ArrowRight", code: "ArrowRight", keyCode: 39, charCode: 39 });
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(radios[0]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[0]);
    expect(radios[0]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("1");
  });

  test("The 'arrowUp' and 'arrowLeft' keys move the selection to the previous radio. When the first radio is reached, moves the selection to the last one", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        defaultValue="2"
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    fireEvent.keyDown(radioGroup, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(radios[0]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[0]);
    expect(radios[0]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("1");
    fireEvent.keyDown(radioGroup, { key: "ArrowLeft", code: "ArrowLeft", keyCode: 37, charCode: 37 });
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(radios[8]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[8]);
    expect(radios[8]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("9");
  });

  test("Keyboard focus movement continues from the last radio input clicked", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    if (radios[3]) {
      userEvent.click(radios[3]);
    }
    fireEvent.keyDown(radioGroup, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(onChange).toHaveBeenCalledWith("5");
    expect(radios[4]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[4]);
    expect(radios[4]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("5");
    if (radios[8]) {
      userEvent.click(radios[8]);
    }
    fireEvent.keyDown(radioGroup, { key: "ArrowLeft", code: "ArrowLeft", keyCode: 37, charCode: 37 });
    expect(onChange).toHaveBeenCalledWith("8");
    expect(radios[7]?.getAttribute("aria-checked")).toBe("true");
    expect(document.activeElement).toEqual(radios[7]);
    expect(radios[7]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("8");
  });

  test("Read-only radio group lets the user move the focus, but neither click nor keyboard press changes the value", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={options}
        onChange={onChange}
        readOnly
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    const submitInput = container.querySelector<HTMLInputElement>(`input[name="test"]`);
    if (radios[5]) {
      userEvent.click(radios[5]);
    }
    expect(onChange).not.toHaveBeenCalled();
    expect(radios[5]?.getAttribute("aria-checked")).toBe("false");
    expect(document.activeElement).toEqual(radios[5]);
    expect(radios[5]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("");
    fireEvent.keyDown(radioGroup, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(onChange).not.toHaveBeenCalled();
    expect(radios[4]?.getAttribute("aria-checked")).toBe("false");
    expect(document.activeElement).toEqual(radios[4]);
    expect(radios[4]?.tabIndex).toBe(0);
    expect(submitInput?.value).toBe("");
  });

  test("Read-only radio group sends its value on submit", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ radiogroup: "data" });
    });
    const { getByText } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcRadioGroup name="radiogroup" label="test-radio-group-label" value="data" options={options} readOnly />
        <button type="submit">Submit</button>
      </form>
    );
    const submit = getByText("Submit");
    userEvent.click(submit);
  });
});
