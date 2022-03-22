import React from "react";
import DxcRadioGroup from "./RadioGroup";
import { render, fireEvent, getByText } from "@testing-library/react";
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
];

const single_disabled_options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3", disabled: true },
];

describe("Radio Group component tests", () => {
  test("Initial render has correct aria attributes", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={single_options} />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[3];

    expect(radioGroup.getAttribute("aria-disabled")).toBe("false");
    expect(radioGroup.getAttribute("aria-labelledby")).toBe(getByText("test-radioGroup-label").id);
    expect(radioGroup.getAttribute("aria-invalid")).toBe("false");
    expect(radioGroup.getAttribute("aria-required")).toBe("true");
    expect(radio.getAttribute("aria-checked")).toBe("false");
    expect(radio.getAttribute("aria-disabled")).toBe("false");
    expect(radio.getAttribute("aria-labelledby")).toBe(getByText("Option 04").id);
  });
  test("Disabled state renders with correct aria attribute", () => {
    const { getByRole } = render(<DxcRadioGroup label="test-radioGroup-label" options={single_options} disabled />);
    const radioGroup = getByRole("radiogroup");
    expect(radioGroup.getAttribute("aria-disabled")).toBe("true");
  });
  test("Disabled option renders with correct aria attribute", () => {
    const { getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={single_disabled_options} disabled />
    );
    const disabledRadio = getAllByRole("radio")[2];
    expect(disabledRadio.getAttribute("aria-disabled")).toBe("true");
  });
  test("Error state renders with correct aria attributes", () => {
    const { getByRole, getByText } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={single_options} error="Error message" />
    );
    const radioGroup = getByRole("radiogroup");
    const errorMessage = getByText("Error message");

    expect(radioGroup.getAttribute("aria-errormessage")).toBe(errorMessage.id);
    expect(radioGroup.getAttribute("aria-invalid")).toBe("true");
    expect(errorMessage.getAttribute("aria-live")).toBe("assertive");
  });
  test("Controlled radio group with required constraint and 'undefined' as value, sends an error", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-radioGroup-label" options={single_options} onChange={onChange} onBlur={onBlur} />
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
    fireEvent.focus(radioGroup);
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "1" });
  });
  test("Controlled radio group with required constraint and empty string as value, sends an error", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup
        label="test-radioGroup-label"
        value=""
        options={single_options}
        onChange={onChange}
        onBlur={onBlur}
      />
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
  test("Optional radio group: onBlur event doesn't send an error, has correct aria attributes, custom label and its value is the empty string", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getByText, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
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
  test("Select an option by clicking on its label", () => {
    const onChange = jest.fn();
    const { getByText, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radio = getByText("Option 10");
    const submitInput = container.querySelector(`input[name="test"]`);

    userEvent.click(radio);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("10");
    expect(getAllByRole("radio")[9].getAttribute("aria-checked")).toBe("true");
    expect(submitInput.value).toBe("10");
  });
  test("Select an option by clicking on its radio input", () => {
    const onChange = jest.fn();
    const { getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radio = getAllByRole("radio")[6];
    const submitInput = container.querySelector(`input[name="test"]`);

    userEvent.click(radio);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("7");
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(submitInput.value).toBe("7");
  });
  test("Select an option by keyboard, following the sequence: Tab and Enter keys", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[0];
    const submitInput = container.querySelector(`input[name="test"]`);

    fireEvent.keyDown(radioGroup, { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    fireEvent.keyDown(radioGroup, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(submitInput.value).toBe("1");
  });
  test("Select an option by keyboard, following the sequence: Tab and Space keys", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole, container } = render(
      <DxcRadioGroup
        name="test"
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[0];
    const submitInput = container.querySelector(`input[name="test"]`);

    fireEvent.keyDown(radioGroup, { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    fireEvent.keyDown(radioGroup, { key: "Space", code: "Space", keyCode: 32, charCode: 32 });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    expect(radio.getAttribute("aria-checked")).toBe("true");
    expect(submitInput.value).toBe("1");
  });
});
