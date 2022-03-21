import React from "react";
import DxcRadioGroup from "./RadioGroup";
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
];

describe("Radio Group component tests", () => {
  test("Controlled - Not optional constraint - undefined", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-select-label" options={single_options} onChange={onChange} onBlur={onBlur} />
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
  test("Controlled - Not optional constraint - empty string", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup label="test-select-label" value="" options={single_options} onChange={onChange} onBlur={onBlur} />
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
  test("Controlled - Optional constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcRadioGroup
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
        onBlur={onBlur}
        optional
      />
    );
    const radioGroup = getByRole("radiogroup");

    expect(radioGroup.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(radioGroup);
    fireEvent.blur(radioGroup);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({});
    expect(radioGroup.getAttribute("aria-invalid")).toBe("false");
  });
  test("Select an option - Click on radio input label", () => {
    const onChange = jest.fn();
    const { getByText, getAllByRole } = render(
      <DxcRadioGroup
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radio = getByText("Option 10");

    userEvent.click(radio);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("10");
    expect(getAllByRole("radio")[9].getAttribute("aria-checked")).toBe("true");
  });
  test("Select an option - Click on radio input", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(
      <DxcRadioGroup
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radio = getAllByRole("radio")[6];

    userEvent.click(radio);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("7");
    expect(radio.getAttribute("aria-checked")).toBe("true");
  });
  test("Select an option - Tab and Enter key", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[0];
    
    fireEvent.keyDown(radioGroup, { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    fireEvent.keyDown(radioGroup, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    expect(radio.getAttribute("aria-checked")).toBe("true");
  });
  test("Select an option - Tab and Space key", () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole } = render(
      <DxcRadioGroup
        label="test-radio-group-label"
        helperText="test-radio-group-helper-text"
        options={single_options}
        onChange={onChange}
      />
    );
    const radioGroup = getByRole("radiogroup");
    const radio = getAllByRole("radio")[0];
    
    fireEvent.keyDown(radioGroup, { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    fireEvent.keyDown(radioGroup, { key: "Space", code: "Space", keyCode: 32, charCode: 32 });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("1");
    expect(radio.getAttribute("aria-checked")).toBe("true");
  });
});
