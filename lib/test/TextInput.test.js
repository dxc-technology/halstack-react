import React from "react";
import { render, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcTextInput from "../src/text-input/TextInput";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands, The",
  "Central African Republic",
  "Chad",
  "Democratic Republic of the Congo",
  "Dominican Republic",
  "Dominica",
  "Denmark",
  "Djibouti",
];

describe("TextInput component tests", () => {
  test("Renders with correct label", () => {
    const { getByText } = render(<DxcTextInput label="Example label" />);
    expect(getByText("Example label")).toBeTruthy();
  });
  test("Renders with correct label and helper text", () => {
    const { getByText } = render(<DxcTextInput label="Example label" helperText="Example helper text" />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct label and optional", () => {
    const { getByText } = render(<DxcTextInput label="Example label" helperText="Example helper text" optional />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct placeholder", () => {
    const { getByRole } = render(<DxcTextInput label="Example label" placeholder="Placeholder" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("placeholder")).toBe("Placeholder");
  });
  test("Renders with error message", () => {
    const { getByText } = render(<DxcTextInput label="Error label" placeholder="Placeholder" error="Error message." />);
    expect(getByText("Error message.")).toBeTruthy();
  });
  test("Not optional constraint (onBlur)", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcTextInput label="Input label" placeholder="Placeholder" onChange={onChange} onBlur={onBlur} clearable />
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test", error: null });
  });
  test("Not optional constraint (onChange)", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcTextInput label="Input label" placeholder="Placeholder" onChange={onChange} clearable />
    );
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Test", error: null });
    userEvent.clear(input);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "", error: "This field is required. Please, enter a value." });
  });
  test("Pattern constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcTextInput
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "pattern test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "pattern test", error: "Please match the format requested." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "pattern test", error: "Please match the format requested." });
    userEvent.clear(input);
    fireEvent.change(input, { target: { value: "pattern4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "pattern4&", error: null });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "pattern4&", error: null });
  });
  test("Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcTextInput
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    userEvent.clear(input);
    fireEvent.change(input, { target: { value: "length" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "length", error: null });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "length", error: null });
  });
  test("Pattern and length constraints", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcTextInput
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "test", error: "Min length 5, max length 10." });
    fireEvent.change(input, { target: { value: "tests" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "tests", error: "Please match the format requested." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "tests", error: "Please match the format requested." });
    fireEvent.change(input, { target: { value: "tests4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "tests4&", error: null });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "tests4&", error: null });
  });
  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");
    userEvent.type(input, "onchange event test");
    expect(input.value).toBe("onchange event test");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "onchange event test", error: null });
  });
  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Blur test" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Blur test", error: null });
  });
  test("Clear action onClick cleans the input", () => {
    const { getByRole } = render(<DxcTextInput label="Input label" clearable />);
    const input = getByRole("textbox");
    userEvent.type(input, "Test");
    const closeAction = getByRole("button");
    userEvent.click(closeAction);
    expect(input.value).toBe("");
  });
  test("Disabled input (action must be shown but not clickable)", () => {
    const onClick = jest.fn();
    const action = {
      onClick: onClick,
      icon: (
        <svg
          data-testid="image"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
      ),
    };
    const { getByRole } = render(<DxcTextInput label="Disabled input label" action={action} disabled />);
    const input = getByRole("textbox");
    expect(input.disabled).toBeTruthy();
    userEvent.click(getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
  test("Disabled input (clear default action should not be displayed, even with text written on the input)", () => {
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Disabled input label" value="Sample text" disabled clearable />
    );
    const input = getByRole("textbox");
    expect(input.disabled).toBeTruthy();
    expect(queryByRole("button")).toBeFalsy();
  });
  test("Disabled input (suffix and preffix must be displayed)", () => {
    const { getByRole, getByText } = render(
      <DxcTextInput label="Disabled input label" value="Sample text" prefix="+34" suffix="USD" disabled />
    );
    const input = getByRole("textbox");
    expect(input.disabled).toBeTruthy();
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });
  test("Action prop: image displayed and onClick event", () => {
    const onClick = jest.fn();
    const action = {
      onClick: onClick,
      icon: (
        <svg
          data-testid="image"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
      ),
    };
    const { getByRole, getByTestId } = render(<DxcTextInput label="Input label" action={action} />);
    expect(getByTestId("image")).toBeTruthy();
    userEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
  test("Renders with correct prefix and suffix", () => {
    const { getByText } = render(<DxcTextInput label="Input label" prefix="+34" suffix="USD" />);
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });
  test("Input has correct accesibility attributes", () => {
    const onClick = jest.fn();
    const action = {
      onClick: onClick,
      icon: (
        <svg
          data-testid="image"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
      ),
    };
    const { getByRole, getAllByRole } = render(<DxcTextInput label="Example label" clearable action={action} />);
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-autocomplete")).toBeNull();
    expect(input.getAttribute("aria-controls")).toBeNull();
    expect(input.getAttribute("aria-expanded")).toBeNull();
    expect(input.getAttribute("aria-activedescendant")).toBeNull();
    expect(input.getAttribute("aria-invalid")).toBe("false");
    expect(input.getAttribute("aria-describedBy")).toBeNull();
    expect(input.getAttribute("aria-required")).toBe("true");
    userEvent.type(input, "Text");
    const clear = getAllByRole("button")[0];
    expect(clear.getAttribute("aria-label")).toBe("Clear");
  });
  test("Autosuggest has correct accesibility attributes", () => {
    const { getByRole, getAllByRole } = render(
      <DxcTextInput label="Autocomplete Countries" optional suggestions={countries} />
    );
    const input = getByRole("combobox");
    expect(input.getAttribute("aria-autocomplete")).toBe("list");
    expect(input.getAttribute("aria-expanded")).toBe("false");
    expect(input.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(input.getAttribute("aria-controls")).toBe(list.id);
    expect(input.getAttribute("aria-expanded")).toBe("true");
    expect(list.getAttribute("aria-label")).toBe("Autocomplete Countries");
    const options = getAllByRole("option");
    expect(options[0].getAttribute("aria-selected")).toBe("false");
  });
});

describe("TextInput component synchronous autosuggest tests", () => {
  test("Autosuggest is displayed when the input gains focus", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
  });
  test("Autosuggest is displayed when the user clicks the input", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
  });
  test("Autosuggest is displayed while the user is writing (if closed previously, if open stays open)", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole, getByText, getAllByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(queryByRole("listbox")).toBeFalsy();
    userEvent.type(input, "B");
    expect(list).toBeTruthy();
    expect(getAllByText("B").length).toBe(4);
    expect(getByText("ahamas")).toBeTruthy();
    expect(getByText("ahrain")).toBeTruthy();
    expect(getByText("angladesh")).toBeTruthy();
    expect(getByText("arbados")).toBeTruthy();
  });
  test("Autosuggest is not displayed when prop suggestions is an empty array", async () => {
    const onChange = jest.fn();
    const { queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={[]} onChange={onChange} />
    );
    const input = queryByRole("textbox");
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Autosuggest closes the listbox when there are no matches for the user's input", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole, getByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    userEvent.type(input, "x");
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Autosuggest with no matches founded doesn't let the listbox to be opened", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole, getByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    userEvent.type(input, "x");
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Autosuggest uncontrolled - Suggestion selected by click", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Alba");
    expect(onChange).toHaveBeenCalled();
    expect(getByText("Alba")).toBeTruthy();
    expect(getByText("nia")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(input.value).toBe("Albania");
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Autosuggest controlled - Suggestion selected by click", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" value="Andor" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    expect(input.value).toBe("Andor");
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Andorra", error: null });
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Autosuggest - Pattern constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput
        label="Autocomplete Countries"
        suggestions={countries}
        onChange={onChange}
        onBlur={onBlur}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Andor");
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Andorra", error: "Please match the format requested." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "Andorra", error: "Please match the format requested." });
  });
  test("Autosuggest - Length constraint", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByText, getByRole } = render(
      <DxcTextInput
        label="Autocomplete Countries"
        suggestions={countries}
        onChange={onChange}
        onBlur={onBlur}
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Cha");
    expect(getByText("Cha")).toBeTruthy();
    expect(getByText("d")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Cha", error: "Min length 5, max length 10." });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "Chad", error: "Min length 5, max length 10." });
  });
  test("Autosuggest keys: arrow down key opens autosuggest, active first option is selected with Enter and closes the autosuggest", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(input.value).toBe("Afghanistan");
    expect(queryByRole("list")).toBeFalsy();
  });
  test("Autosuggest keys: arrow up key opens autosuggest, active last option is selected with Enter and closes the autosuggest", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(input.value).toBe("Djibouti");
    expect(queryByRole("list")).toBeFalsy();
  });
  test("Autosuggest keys: Esc key closes the autosuggest and cleans the input", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Bangla");
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("");
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Autosuggest keys: Enter, if no active suggestion closes the autosuggest", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("");
    expect(queryByRole("list")).toBeFalsy();
  });
  test("Autosuggest complex key secuence: write, arrow up two times, arrow down and select with Enter. Then, clean with Esc.", async () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Ba");
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUpp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(input.value).toBe("Barbados");
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "Esc", code: "Esp", keyCode: 27, charCode: 27 });
    expect(input.value).toBe("");
    expect(queryByRole("listbox")).toBeFalsy();
  });
});

describe("TextInput component asynchronous autosuggest tests", () => {
  test("Autosuggest 'Searching...' message is shown", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    expect(getByRole("listbox")).toBeTruthy();
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
    userEvent.type(input, "Ab");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Cabo Verde")).toBeTruthy();
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(input.value).toBe("Cabo Verde");
  });
  test("Autosuggest Esc key works while 'Searching...' message is shown", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByRole, queryByText, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    expect(getByRole("listbox")).toBeTruthy();
    userEvent.type(input, "Ab");
    fireEvent.keyDown(input, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(queryByText("Searching...")).toBeFalsy();
    expect(input.value).toBe("");
  });
  test("Autosuggest Esc + arrow down working while 'Searching...' message is shown", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByRole, getByText, queryByText, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    userEvent.type(input, "Ab");
    fireEvent.keyDown(input, { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(queryByText("Searching...")).toBeFalsy();
    expect(input.value).toBe("");
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(list).toBeTruthy();
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
  });
  test("Asynchronous uncontrolled autosuggest test", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Den");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Denmark")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Denmark", error: null });
    expect(input.value).toBe("Denmark");
  });
  test("Asynchronous controlled autosuggest test", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" value="Denm" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(input.value).toBe("Denm");
    expect(getByText("Denmark")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Denmark", error: null });
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Asynchronous autosuggest closes the listbox after finishing no matches search", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByText, getByRole, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "Example text");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Asynchronous autosuggest with no matches founded doesn't let the listbox to be opened", async () => {
    const callbackFunc = jest.fn((newValue) => {
      const result = new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
          );
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByText, getByRole, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    userEvent.type(input, "wrong");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeFalsy();
  });
  test("Asynchronous autosuggest request failed, shows 'Error fetching data' message", async () => {
    const errorCallbackFunc = jest.fn(() => {
      const result = new Promise((resolve, reject) =>
        setTimeout(() => {
          reject("err");
        }, 1000)
      );
      return result;
    });
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={errorCallbackFunc} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Error fetching data")).toBeTruthy();
  });
});
