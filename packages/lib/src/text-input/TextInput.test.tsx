import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import DxcTextInput from "./TextInput";
import MockDOMRect from "../../test/mocks/domRectMock";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

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
const specialCharacters = ["/", "\\", "*", "(", ")", "[", "]", "+", "?", "*{[]}|"];

describe("TextInput component tests", () => {
  test("Renders with correct error aria attributes", () => {
    const { getByText, getByRole } = render(
      <DxcTextInput label="Error label" placeholder="Placeholder" error="Error message." />
    );
    const input = getByRole("textbox");
    const errorMessage = getByText("Error message.");
    expect(errorMessage).toBeTruthy();
    expect(input.getAttribute("aria-errormessage")).toBe(errorMessage.id);
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(errorMessage.getAttribute("aria-live")).toBe("assertive");
    expect(input.getAttribute("aria-label")).toBeNull();
  });

  test("Renders with correct error aria label", () => {
    const { getByRole } = render(
      <DxcTextInput placeholder="Placeholder" error="Error message." ariaLabel="Example aria label" />
    );
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-label")).toBe("Example aria label");
  });

  test("Renders with correct initial value", () => {
    const { getByRole } = render(
      <DxcTextInput label="Default label" placeholder="Placeholder" defaultValue="Example text" />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("Example text");
  });

  test("Not optional constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcTextInput label="Input label" placeholder="Placeholder" onChange={onChange} onBlur={onBlur} clearable />
    );
    const input = getByRole("textbox");

    // Test onChange with valid value
    fireEvent.change(input, { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalledWith({ value: "Test" });

    // Test onChange with empty value
    fireEvent.change(input, { target: { value: "" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });

    // Test onBlur with empty value
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });

    // Test onBlur with valid value
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "Test" });
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
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByRole("textbox");

    // Invalid pattern
    fireEvent.change(input, { target: { value: "pattern test" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "pattern test",
      error: "Please match the format requested.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "pattern test",
      error: "Please match the format requested.",
    });

    // Valid pattern
    fireEvent.change(input, { target: { value: "pattern4&" } });
    expect(onChange).toHaveBeenCalledWith({ value: "pattern4&" });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "pattern4&" });
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
        clearable
        minLength={5}
        maxLength={10}
      />
    );
    const input = getByRole("textbox");

    // Min length violation
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "test",
      error: "The minimum length is 5.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "The minimum length is 5.",
    });

    // Max length violation
    fireEvent.change(input, { target: { value: "test-maximum-length" } });
    expect(onChange).toHaveBeenCalledWith({
      value: "test-maximum-length",
      error: "The maximum length is 10.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "test-maximum-length",
      error: "The maximum length is 10.",
    });

    // Valid length
    fireEvent.change(input, { target: { value: "length" } });
    expect(onChange).toHaveBeenCalledWith({ value: "length" });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "length" });
  });

  test("onChange and onBlur callbacks are called correctly", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "Callback test" } });
    expect(onChange).toHaveBeenCalledWith({ value: "Callback test" });

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ value: "Callback test" });
  });

  test("Input value changes correctly with user interaction", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} />);
    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "onchange event test");
    expect(input.value).toBe("onchange event test");
    expect(onChange).toHaveBeenCalledWith({ value: "onchange event test" });
  });

  test("Clear action onClick cleans the input", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { getByRole } = render(<DxcTextInput label="Input label" clearable />);
    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "Test");
    const closeAction = getByRole("button");
    await user.click(closeAction);
    expect(input.value).toBe("");
  });

  test("Disabled text input behavior", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onChange = jest.fn();

    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Input label" onChange={onChange} prefix="+34" suffix="USD" disabled />
    );
    const input = getByRole("textbox");
    await user.type(input, "Test");
    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveAttribute("disabled");
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Disabled text input action behavior", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onClick = jest.fn();
    const action = {
      onClick,
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

    const { getByRole } = render(
      <DxcTextInput label="Input label" action={action} prefix="+34" suffix="USD" disabled />
    );
    const button = getByRole("button");
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  test("Readonly text input behavior", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onChange = jest.fn();
    const onClick = jest.fn();
    const action = {
      onClick,
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

    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Input label" onChange={onChange} action={action} prefix="+34" suffix="USD" readOnly />
    );
    const input = getByRole("textbox");
    await user.type(input, "Test");
    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveAttribute("readonly");
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Action prop: displays icon and handles onClick", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onClick = jest.fn();
    const action = {
      onClick,
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
      title: "Search",
    };
    const { getByRole, getByTestId, getByText } = render(
      <DxcTextInput label="Input label" action={action} prefix="+34" suffix="USD" />
    );
    expect(getByTestId("image")).toBeTruthy();
    await user.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });

  test("Accessibility attributes are correct", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onClick = jest.fn();
    const action = {
      onClick,
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
      title: "Search",
    };

    // Test regular text input aria attributes
    const { getByRole, getAllByRole } = render(<DxcTextInput label="Example label" clearable action={action} />);
    const input = getByRole("textbox");
    expect(input.getAttribute("aria-autocomplete")).toBeNull();
    expect(input.getAttribute("aria-controls")).toBeNull();
    expect(input.getAttribute("aria-expanded")).toBeNull();
    expect(input.getAttribute("aria-haspopup")).toBeNull();
    expect(input.getAttribute("aria-activedescendant")).toBeNull();
    expect(input.getAttribute("aria-invalid")).toBe("false");
    expect(input.getAttribute("aria-errormessage")).toBeNull();
    expect(input.getAttribute("aria-required")).toBe("true");
    await user.type(input, "Text");
    const clear = getAllByRole("button")[0];
    expect(clear?.getAttribute("aria-label")).toBe("Clear field");
    const search = getAllByRole("button")[1];
    expect(search?.getAttribute("aria-label")).toBe("Search");
  });

  test("Correct autocomplete attributes", () => {
    const { getByRole, getAllByRole } = render(
      <DxcTextInput label="Autocomplete Countries" optional suggestions={countries} />
    );
    const input2 = getByRole("combobox");
    expect(input2.getAttribute("aria-autocomplete")).toBe("list");
    expect(input2.getAttribute("aria-expanded")).toBe("false");
    expect(input2.getAttribute("aria-haspopup")).toBe("listbox");
    expect(input2.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(input2);
    const list = getByRole("listbox");
    expect(input2.getAttribute("aria-controls")).toBe(list.id);
    expect(input2.getAttribute("aria-expanded")).toBe("true");
    const options = getAllByRole("option");
    expect(options[0]?.getAttribute("aria-selected")).toBeNull();
  });

  // describe("TextInput component synchronous autosuggest tests", () => {
  test("Autosuggest opens on focus, click, and user input", () => {
    const onChange = jest.fn();
    const { getByRole, getByText, getAllByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );

    let input = getByRole("combobox");
    fireEvent.focus(input);
    let list = getByRole("listbox");
    expect(list).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    fireEvent.change(input, { target: { value: "Bah" } });
    expect(getAllByRole("option").length).toBe(2);
  });

  test("Read-only text input does not open the suggestions list", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} readOnly />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
    await user.click(input);
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest displays filtered list with default value", () => {
    // Test: filtered suggestions with default value
    const { getByRole, getByText, getAllByText } = render(
      <DxcTextInput
        label="Uncontrolled suggestions filtered by default"
        helperText="Example of helper text"
        placeholder="Placeholder"
        margin="medium"
        defaultValue="Suggestion 2"
        suggestions={["Suggestion 11", "Suggestion 12", "Suggestion 23", "Suggestion 24"]}
        clearable
      />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    expect(input.value).toBe("Suggestion 2");
    fireEvent.focus(input);
    expect(getAllByText("Suggestion 2").length).toBe(2);
    expect(getByText("3")).toBeTruthy();
    expect(getByText("4")).toBeTruthy();
  });
  test("Autosuggest displays filtered list handles empty suggestions", () => {
    const { queryByRole } = render(<DxcTextInput label="Autocomplete Countries" suggestions={[]} />);
    const input2 = queryByRole("combobox");
    if (input2) {
      fireEvent.focus(input2);
    }
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest behavior with no matches", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.change(input, { target: { value: "x" } });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest uncontrolled — Suggestion selected by click", () => {
    // const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Alba" } });
    expect(onChange).toHaveBeenCalled();
    expect(getByText("Alba")).toBeTruthy();
    expect(getByText("nia")).toBeTruthy();
    fireEvent.click(getByRole("option"));
    expect(input.value).toBe("Albania");
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest controlled — Suggestion selected by click", () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" value="Andor" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.click(getByText("Autocomplete Countries"));
    expect(input.value).toBe("Andor");
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    fireEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Andorra" });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest selection respects validation constraints", () => {
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
    let input = getByRole("combobox");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Andor" } });

    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    fireEvent.click(getByRole("option"));

    expect(onChange).toHaveBeenCalledWith({
      value: "Andorra",
      error: "Please match the format requested.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "Andorra",
      error: "Please match the format requested.",
    });
  });

  test("Autosuggest selection respects length constraints", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();

    const { getByRole, getByText } = render(
      <DxcTextInput
        label="Autocomplete Countries"
        suggestions={countries}
        onChange={onChange}
        onBlur={onBlur}
        minLength={5}
        maxLength={10}
      />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Cha" } });
    expect(getByText("Cha")).toBeTruthy();
    expect(getByText("d")).toBeTruthy();
    fireEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({
      value: "Chad",
      error: "The minimum length is 5.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "Chad",
      error: "The minimum length is 5.",
    });
  });

  test("Autosuggest keyboard navigation: arrow keys and Enter key", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;

    // Test: arrow down opens listbox, Enter selects first
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(getByRole("listbox")).toBeTruthy();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(input.value).toBe("Djibouti");
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest keyboard: Esc closes and clears, Enter with no selection closes", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;

    // Test: Esc closes and clears
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Bangla" } });
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, {
      key: "Esc",
      code: "Esc",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe("");
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest escapes special characters", () => {
    const onChange = jest.fn();
    const { getAllByText, getByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={specialCharacters} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    fireEvent.change(input, { target: { value: "/" } });
    expect(list).toBeTruthy();
    expect(getAllByText("/").length).toBe(1);
    fireEvent.change(input, { target: { value: "\\" } });
    expect(list).toBeTruthy();
    expect(getAllByText("\\").length).toBe(1);
    fireEvent.change(input, { target: { value: "*" } });
    expect(list).toBeTruthy();
    expect(getAllByText("*").length).toBe(2);
    fireEvent.change(input, { target: { value: "(" } });
    expect(list).toBeTruthy();
    expect(getAllByText("(").length).toBe(1);
    fireEvent.change(input, { target: { value: ")" } });
    expect(list).toBeTruthy();
    expect(getAllByText(")").length).toBe(1);
    fireEvent.change(input, { target: { value: "[" } });
    expect(list).toBeTruthy();
    expect(getAllByText("[").length).toBe(1);
    fireEvent.change(input, { target: { value: "]" } });
    expect(list).toBeTruthy();
    expect(getAllByText("]").length).toBe(1);
    fireEvent.change(input, { target: { value: "+" } });
    expect(list).toBeTruthy();
    expect(getAllByText("+").length).toBe(1);
    fireEvent.change(input, { target: { value: "?" } });
    expect(list).toBeTruthy();
    expect(getAllByText("?").length).toBe(1);
  });

  test("Autosuggest mousedown on suggestions container doesn't close listbox", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();

    const suggestionsContainer = list.parentElement;
    fireEvent.mouseDown(suggestionsContainer!);
    expect(getByRole("listbox")).toBeTruthy();
    fireEvent.blur(input);
    expect(queryByRole("listbox")).toBeFalsy();
  });
});

// describe("TextInput component asynchronous autosuggest tests", () => {
//   test("Autosuggest 'Searching...' message is shown", async () => {
//     const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
//     jest.useFakeTimers();
//     const callbackFunc = jest.fn(
//       (newValue: string) =>
//         new Promise<string[]>((resolve) => {
//           setTimeout(() => {
//             resolve(
//               newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
//             );
//           }, 100);
//         })
//     );
//     const onChange = jest.fn();
//     const { getByRole, getByText, queryByText } = render(
//       <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
//     );
//     const input = getByRole("combobox") as HTMLInputElement;
//     fireEvent.focus(input);
//     expect(getByText("Searching...")).toBeTruthy();
//     expect(getByText("Searching...").getAttribute("aria-live")).toBe("polite");
//     await user.type(input, "Af");
//     expect(queryByText("Searching...")).toBeNull();
// expect(getByRole("listbox")).toBeTruthy();
// expect(getByText("Afghanistan")).toBeTruthy();
// fireEvent.change(input, { target: { value: "Ab" } });
// fireEvent.keyDown(input, {
//   key: "Enter",
//   code: "Enter",
//   keyCode: 13,
//   charCode: 13,
// });
// expect(input.value).toBe("Cabo Verde");
// });

// test("Autosuggest Esc key works while 'Searching...' message is shown", () => {
//   const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
//   const callbackFunc = jest.fn(
//     (newValue: string) =>
//       new Promise<string[]>((resolve) => {
//         setTimeout(() => {
//           resolve(
//             newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
//           );
//         }, 100);
//       })
//   );
//   const onChange = jest.fn();
//   const { getByRole, getByText, queryByText, queryByRole } = render(
//     <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
//   );
//   const input = getByRole("combobox") as HTMLInputElement;
//   fireEvent.focus(input);
//   expect(getByText("Searching...")).toBeTruthy();
//   void user.type(input, "Ab");
//   fireEvent.keyDown(input, {
//     key: "Esc",
//     code: "Esc",
//     keyCode: 27,
//     charCode: 27,
//   });
//   expect(queryByRole("listbox")).toBeFalsy();
//   expect(queryByText("Searching...")).toBeFalsy();
//   expect(input.value).toBe("");
// });

// test("Asynchronous autosuggest: uncontrolled and controlled behaviors", async () => {
//   const callbackFunc = jest.fn(
//     (newValue: string) =>
//       new Promise<string[]>((resolve) => {
//         setTimeout(() => {
//           resolve(
//             newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
//           );
//         }, 100);
//       })
//   );
//   const onChange = jest.fn();

//   // Test: Uncontrolled
//   const { getByRole, getByText, queryByRole, rerender } = render(
//     <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
//   );
//   let input = getByRole("combobox") as HTMLInputElement;
//   fireEvent.focus(input);
//   userEvent.type(input, "Den");
//   await waitForElementToBeRemoved(() => getByText("Searching..."));
//   expect(getByText("Denmark")).toBeTruthy();
//   userEvent.click(getByRole("option"));
//   expect(onChange).toHaveBeenCalledWith({ value: "Denmark" });
//   expect(input.value).toBe("Denmark");

//   // Test: Controlled
//   rerender(
//     <DxcTextInput label="Autosuggest Countries" value="Denm" onChange={onChange} suggestions={callbackFunc} />
//   );
//   input = getByRole("combobox") as HTMLInputElement;
//   expect(input.value).toBe("Denm");
//   userEvent.click(getByText("Autosuggest Countries"));
//   await waitForElementToBeRemoved(() => getByText("Searching..."));
//   expect(getByText("Denmark")).toBeTruthy();
//   fireEvent.focus(getByRole("option"));
//   userEvent.click(getByText("Denmark"));
//   expect(onChange).toHaveBeenCalledWith({ value: "Denmark" });
//   expect(queryByRole("listbox")).toBeFalsy();
// });

// test("Asynchronous autosuggest with no matches: closes listbox and blocks arrow keys", async () => {
//   const callbackFunc = jest.fn(
//     (newValue: string) =>
//       new Promise<string[]>((resolve) => {
//         setTimeout(() => {
//           resolve(
//             newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
//           );
//         }, 100);
//       })
//   );
//   const onChange = jest.fn();
//   const { getByText, getByRole, queryByRole } = render(
//     <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
//   );
//   const input = getByRole("combobox");
//   fireEvent.focus(input);
//   act(() => {
//     userEvent.type(input, "Example text");
//   });
//   await waitForElementToBeRemoved(() => getByText("Searching..."));

//   // Test: listbox closes when no matches
//   expect(queryByRole("listbox")).toBeFalsy();

//   // Test: arrow keys don't open listbox after no matches
//   fireEvent.focus(input);
//   expect(queryByRole("listbox")).toBeFalsy();
//   fireEvent.keyDown(input, {
//     key: "ArrowUp",
//     code: "ArrowUp",
//     keyCode: 38,
//     charCode: 38,
//   });
//   expect(queryByRole("listbox")).toBeFalsy();
//   fireEvent.keyDown(input, {
//     key: "ArrowDown",
//     code: "ArrowDown",
//     keyCode: 40,
//     charCode: 40,
//   });
//   expect(queryByRole("listbox")).toBeFalsy();
// });

// test("Asynchronous autosuggest request failed, shows 'Error fetching data' message", async () => {
//   const errorCallbackFunc = () =>
//     new Promise<string[]>((_, reject) => {
//       setTimeout(() => {
//         reject(new Error("err"));
//       }, 100);
//     });

//   const { getByRole, findByRole } = render(
//     <DxcTextInput label="Autosuggest Countries" onChange={jest.fn()} suggestions={errorCallbackFunc} />
//   );

//   fireEvent.change(getByRole("combobox"), { target: { value: "test" } });
//   const alert = await findByRole("alert");
//   expect(alert).toHaveTextContent("Error fetching data");
// });

// test("Maximum and minimum error messages change within HalstackProvider", () => {
//   const onChange = jest.fn();
//   const onBlur = jest.fn();
//   const { getByRole } = render(
//     <HalstackProvider
//       labels={{
//         formFields: {
//           maxLengthErrorMessage: (maxLength: number) => `Please do not enter more than ${maxLength} characters.`,
//           minLengthErrorMessage: (minLegth: number) => `Please do not enter less than ${minLegth} characters.`,
//         },
//       }}
//     >
//       <DxcTextInput
//         label="Input label"
//         placeholder="Placeholder"
//         onChange={onChange}
//         onBlur={onBlur}
//         margin={{ left: "medium", right: "medium" }}
//         clearable
//         minLength={5}
//         maxLength={10}
//       />
//     </HalstackProvider>
//   );
//   const input = getByRole("textbox");
//   fireEvent.change(input, { target: { value: "test" } });
//   expect(onChange).toHaveBeenCalledWith({
//     value: "test",
//     error: "Please do not enter less than 5 characters.",
//   });
//   fireEvent.blur(input);
//   expect(onBlur).toHaveBeenCalledWith({
//     value: "test",
//     error: "Please do not enter less than 5 characters.",
//   });

//   fireEvent.change(input, { target: { value: "test-maximum-length" } });
//   expect(onChange).toHaveBeenCalledWith({
//     value: "test-maximum-length",
//     error: "Please do not enter more than 10 characters.",
//   });
//   fireEvent.blur(input);
//   expect(onBlur).toHaveBeenCalledWith({
//     value: "test-maximum-length",
//     error: "Please do not enter more than 10 characters.",
//   });
// });
// });
