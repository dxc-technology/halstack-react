import React from "react";
import DxcRadioGroup from "./RadioGroup";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

const single_disabled_options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3", disabled: true },
];

describe("Radio Group component tests", () => {
  test("Initial render has correct aria attributes and tabIndex", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={options} />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");

    expect(radioGroup.getAttribute("aria-disabled")).toBe("false");
    expect(radioGroup.getAttribute("aria-labelledby")).toBe(getByText("test-radioGroup-label").id);
    expect(radioGroup.getAttribute("aria-invalid")).toBe("false");
    expect(radioGroup.getAttribute("aria-required")).toBe("true");

    radios.forEach((radio, index) => {
      // if no option was previously selected, first option is the focusable one
      index === 0 ? expect(radio.tabIndex).toBe(0) : expect(radio.tabIndex).toBe(-1);
      expect(radio.getAttribute("aria-checked")).toBe("false");
      expect(radio.getAttribute("aria-disabled")).toBe("false");
      expect(radio.getAttribute("aria-labelledby")).toBe(getByText(`Option 0${index + 1}`).id);
    });
  });
  test("Disabled state renders with correct aria attribute, correct tabIndex values and it is not focusable by keyboard", () => {
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={options} disabled />
    );
    const radioGroup = getByRole("radiogroup");
    expect(radioGroup.getAttribute("aria-disabled")).toBe("true");

    const radios = getAllByRole("radio");
    fireEvent.keyDown(radioGroup, { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    fireEvent.keyDown(radioGroup, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    radios.forEach((radio) => {
      expect(radio.tabIndex).toBe(-1);
    });
  });
  test("Disabled option renders with correct aria attribute, correct tabIndex value and it is not focusable by keyboard", () => {
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={single_disabled_options} />
    );
    const radioGroup = getByRole("radiogroup");
    const radios = getAllByRole("radio");
    expect(radios[2].getAttribute("aria-disabled")).toBe("true");
    expect(radios[0].tabIndex).toBe(0);
    expect(radios[1].tabIndex).toBe(-1);
    expect(radios[2].tabIndex).toBe(-1);

    fireEvent.focus(radioGroup);
    fireEvent.keyDown(radioGroup, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(radioGroup, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(radios[0].tabIndex).toBe(0);
    expect(radios[1].tabIndex).toBe(-1);
    expect(radios[2].tabIndex).toBe(-1);
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

    expect(radioGroup.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(radioGroup);
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ error: "This field is required. Please, choose an option." });
    userEvent.click(radioGroup);
    userEvent.click(getAllByRole("radio")[0]);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });
  test("Radio group with required constraint and empty string as value, sends an error", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" value="" options={options} onChange={onChange} onBlur={onBlur} />
    );
    const radioGroup = getByRole("radiogroup");

    expect(radioGroup.getAttribute("aria-required")).toBe("true");
    fireEvent.focus(radioGroup);
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, choose an option." });
    userEvent.click(getAllByRole("radio")[0]);
    expect(onChange).toHaveBeenCalled();
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
    const submitInput = container.querySelector(`input[name="test"]`);
    expect(radio.tabIndex).toBe(0);
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(submitInput.value).toBe("2");
  });
  test("Optional radio group conditions: onBlur event doesn't send an error, has correct aria attributes, custom label and its value is the empty string", () => {
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
    fireEvent.focus(radioGroup);
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({});
    expect(radioGroup.getAttribute("aria-invalid")).toBe("false");

    const optionalLabel = getByText("No selection");
    const submitInput = container.querySelector(`input[name="test"]`);
    userEvent.click(optionalLabel);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("");
    expect(submitInput.value).toBe("");
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
    const submitInput = container.querySelector(`input[name="test"]`);

    expect(submitInput.value).toBe("2");
    expect(radios[1].tabIndex).toBe(0);
    expect(radios[1].getAttribute("aria-checked")).toBe("true");
    userEvent.click(radios[6]);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("7");
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
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
    const radioInput = getAllByRole("radio")[8];
    const submitInput = container.querySelector(`input[name="test"]`);

    expect(radioInput.tabIndex).toBe(-1);
    userEvent.click(radioLabel);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("9");
    expect(radioInput.getAttribute("aria-checked")).toBe("true");
    expect(radioInput.tabIndex).toBe(0);
    expect(submitInput.value).toBe("9");
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
    const radio = getAllByRole("radio")[6];
    const submitInput = container.querySelector(`input[name="test"]`);

    expect(radio.tabIndex).toBe(-1);
    userEvent.click(radio);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("7");
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(radio.tabIndex).toBe(0);
    expect(submitInput.value).toBe("7");
  });
  test("Select an option that is already checked does not call onChange event", () => {
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
    const radio = getAllByRole("radio")[1];
    expect(radio.tabIndex).toBe(0);
    expect(radio.getAttribute("aria-checked")).toBe("true");
    userEvent.click(radio);
    expect(onChange).not.toHaveBeenCalled();
  });
  test("Select an option by keyboard, following the sequence: Tab and Enter keys", () => {
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
    const radio = getAllByRole("radio")[0];
    const submitInput = container.querySelector(`input[name="test"]`);

    fireEvent.focus(radioGroup);
    fireEvent.keyDown(radioGroup, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(radio.tabIndex).toBe(0);
    expect(submitInput.value).toBe("1");
  });
  test("Select an option by keyboard, following the sequence: Tab and Space keys", () => {
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
    const radio = getAllByRole("radio")[0];
    const submitInput = container.querySelector(`input[name="test"]`);

    fireEvent.focus(radioGroup);
    fireEvent.keyDown(radioGroup, { key: "Space", code: "Space", keyCode: 32, charCode: 32 });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(radio.tabIndex).toBe(0);
    expect(submitInput.value).toBe("1");
  });
  test("The 'tab' key moves the focus to the first option, without checking anything", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, container } = render(
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
    const submitInput = container.querySelector(`input[name="test"]`);

    fireEvent.focus(radioGroup);
    expect(onChange).not.toHaveBeenCalled();
    expect(submitInput.value).toBe("");
  });
});
