import { act, fireEvent, render, waitForElementToBeRemoved } from "@testing-library/react";
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
    expect(onBlur).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test" });
  });

  test("Not optional constraint (onChange)", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcTextInput label="Input label" placeholder="Placeholder" onChange={onChange} clearable />
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Test" });
    userEvent.clear(input);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "",
      error: "This field is required. Please, enter a value.",
    });
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
    expect(onChange).toHaveBeenCalledWith({
      value: "pattern test",
      error: "Please match the format requested.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "pattern test",
      error: "Please match the format requested.",
    });
    userEvent.clear(input);
    fireEvent.change(input, { target: { value: "pattern4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "pattern4&" });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
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
        margin={{ left: "medium", right: "medium" }}
        clearable
        minLength={5}
        maxLength={10}
      />
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    userEvent.clear(input);
    fireEvent.change(input, { target: { value: "length" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "length" });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "length" });
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
        minLength={5}
        maxLength={10}
      />
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "test",
      error: "Min length 5, max length 10.",
    });
    fireEvent.change(input, { target: { value: "tests" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({
      value: "tests",
      error: "Please match the format requested.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({
      value: "tests",
      error: "Please match the format requested.",
    });
    fireEvent.change(input, { target: { value: "tests4&" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "tests4&" });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "tests4&" });
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} />);
    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "onchange event test");
    expect(input.value).toBe("onchange event test");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "onchange event test" });
  });

  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Blur test" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Blur test" });
  });

  test("Clear action onClick cleans the input", () => {
    const { getByRole } = render(<DxcTextInput label="Input label" clearable />);
    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "Test");
    const closeAction = getByRole("button");
    userEvent.click(closeAction);
    expect(input.value).toBe("");
  });

  test("Disabled text input renders with correct aria and can not be modified", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcTextInput label="Input label" onChange={onChange} disabled />);
    const input = getByRole("textbox");
    userEvent.type(input, "Test");
    expect(onChange).not.toHaveBeenCalled();
  });

  test("Disabled text input (action must be shown but not clickable)", () => {
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
    const { getByRole } = render(<DxcTextInput label="Disabled input label" action={action} disabled />);
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.disabled).toBeTruthy();
    userEvent.click(getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  test("Disabled text input (clear default action should not be displayed, even with text written on the input)", () => {
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Disabled input label" value="Sample text" disabled clearable />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.disabled).toBeTruthy();
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Disabled text input (suffix and prefix must be displayed)", () => {
    const { getByRole, getByText } = render(
      <DxcTextInput label="Disabled input label" value="Sample text" prefix="+34" suffix="USD" disabled />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.disabled).toBeTruthy();
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });

  test("Read-only text input doesn't render the clear action", () => {
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Disabled input label" defaultValue="Sample text" readOnly clearable />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.readOnly).toBeTruthy();
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Read-only text input does not trigger onChange function", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcTextInput label="Example label" onChange={onChange} readOnly />);
    const textInput = getByLabelText("Example label");
    userEvent.type(textInput, "Test");
    expect(onChange).not.toHaveBeenCalled();
  });

  test("Read-only text input sends its value on submit", () => {
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ data: "Text" });
    });
    const { getByText } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcTextInput label="Example label" name="data" defaultValue="Text" readOnly />
        <button type="submit">Submit</button>
      </form>
    );
    const submit = getByText("Submit");
    userEvent.click(submit);
    expect(handlerOnSubmit).toHaveBeenCalled();
  });

  test("Read-only text input doesn't trigger custom action's onClick event", () => {
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
    const { getByTestId, queryByRole } = render(<DxcTextInput label="Input label" action={action} readOnly />);
    // When readOnly is true, the action should not render as a clickable button
    expect(queryByRole("button")).toBeFalsy();
    // The action icon should still be visible but not clickable
    const actionIcon = getByTestId("image");
    expect(actionIcon).toBeTruthy();
    userEvent.click(actionIcon);
    expect(onClick).not.toHaveBeenCalled();
  });

  test("Action prop: image displayed and onClick event", () => {
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
    const { getByRole, getByTestId } = render(<DxcTextInput label="Input label" action={action} />);
    expect(getByTestId("image")).toBeTruthy();
    userEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  test("Text input submit correctly value in form", () => {
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
    const handlerOnSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      expect(formProps).toStrictEqual({ data: "test" });
    });
    const { getByText, getAllByRole, getByRole } = render(
      <form onSubmit={handlerOnSubmit}>
        <DxcTextInput label="Input label" name="data" action={action} />
        <button type="submit">Submit</button>
      </form>
    );
    const search = getAllByRole("button")[0];
    const submit = getByText("Submit");
    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "test");
    expect(input.value).toBe("test");
    if (search) {
      userEvent.click(search);
    }
    expect(handlerOnSubmit).not.toHaveBeenCalled();
    userEvent.click(submit);
    expect(handlerOnSubmit).toHaveBeenCalled();
  });

  test("Renders with correct prefix and suffix", () => {
    const { getByText } = render(<DxcTextInput label="Input label" prefix="+34" suffix="USD" />);
    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });

  test("Text Input has correct aria accessibility attributes", () => {
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
    userEvent.type(input, "Text");
    const clear = getAllByRole("button")[0];
    expect(clear?.getAttribute("aria-label")).toBe("Clear field");
    const search = getAllByRole("button")[1];
    expect(search?.getAttribute("aria-label")).toBe("Search");
  });

  test("Autosuggest has correct accessibility attributes", () => {
    const { getByRole, getAllByRole } = render(
      <DxcTextInput label="Autocomplete Countries" optional suggestions={countries} />
    );
    const input = getByRole("combobox");
    expect(input.getAttribute("aria-autocomplete")).toBe("list");
    expect(input.getAttribute("aria-expanded")).toBe("false");
    expect(input.getAttribute("aria-haspopup")).toBe("listbox");
    expect(input.getAttribute("aria-required")).toBe("false");
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(input.getAttribute("aria-controls")).toBe(list.id);
    expect(input.getAttribute("aria-expanded")).toBe("true");
    const options = getAllByRole("option");
    expect(options[0]?.getAttribute("aria-selected")).toBeNull();
  });

  test("Mouse wheel interaction does not affect the text value", () => {
    const { getByRole } = render(
      <DxcTextInput label="Default label" placeholder="Placeholder" defaultValue="Example text" />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.wheel(input, { deltaY: -100 });
    expect(input.value).toBe("Example text");
    fireEvent.wheel(input, { deltaY: 100 });
    expect(input.value).toBe("Example text");
  });
});

describe("TextInput component synchronous autosuggest tests", () => {
  test("Autosuggest is displayed when the input gains focus", () => {
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

  test("Autosuggest is displayed when the user clicks the input", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    userEvent.click(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
  });

  test("Autosuggest is displayed while the user is writing (if closed previously, if it is open stays open)", () => {
    const { getByRole, getByText, getAllByText } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} />
    );
    const input = getByRole("combobox");
    userEvent.type(input, "Bah");
    expect(getByRole("listbox")).toBeTruthy();
    expect(getAllByText("Bah").length).toBe(2);
    expect(getByText("amas")).toBeTruthy();
    expect(getByText("rain")).toBeTruthy();
  });

  test("Read-only text input does not open the suggestions list", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} readOnly />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
    userEvent.click(input);
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest displays filtered when the input has a default value", () => {
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

  test("Autosuggest is not displayed when prop suggestions is an empty array", () => {
    const onChange = jest.fn();
    const { queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={[]} onChange={onChange} />
    );
    const input = queryByRole("textbox");
    if (input) {
      fireEvent.focus(input);
    }
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest closes the listbox when there are no matches for the user's input", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    act(() => {
      userEvent.type(input, "x");
    });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest with no matches founded doesn't let the listbox to be opened", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox");
    act(() => {
      userEvent.type(input, "x");
    });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.focus(input);
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest uncontrolled — Suggestion selected by click", () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    act(() => {
      userEvent.type(input, "Alba");
    });
    expect(onChange).toHaveBeenCalled();
    expect(getByText("Alba")).toBeTruthy();
    expect(getByText("nia")).toBeTruthy();
    act(() => {
      userEvent.click(getByRole("option"));
    });
    expect(input.value).toBe("Albania");
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest controlled — Suggestion selected by click", () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" value="Andor" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    userEvent.click(getByText("Autocomplete Countries"));
    expect(input.value).toBe("Andor");
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Andorra" });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Autosuggest — Pattern constraint", () => {
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
    act(() => {
      userEvent.type(input, "Andor");
    });
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    act(() => {
      userEvent.click(getByRole("option"));
    });
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

  test("Autosuggest — Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByText, getByRole } = render(
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
    act(() => {
      userEvent.type(input, "Cha");
    });
    expect(getByText("Cha")).toBeTruthy();
    expect(getByText("d")).toBeTruthy();
    act(() => {
      userEvent.click(getByRole("option"));
    });
    expect(onChange).toHaveBeenCalledWith({
      value: "Cha",
      error: "Min length 5, max length 10.",
    });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({
      value: "Chad",
      error: "Min length 5, max length 10.",
    });
  });

  test("Autosuggest keys: arrow down key opens autosuggest, active first option is selected with Enter and closes the autosuggest", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(input.value).toBe("Afghanistan");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest keys: arrow up key opens autosuggest, active last option is selected with Enter and closes the autosuggest", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(input.value).toBe("Djibouti");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest keys: Esc key closes the autosuggest and cleans the input", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    userEvent.type(input, "Bangla");
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

  test("Autosuggest keys: Enter, if no active suggestion closes the autosuggest", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    const list = getByRole("listbox");
    expect(list).toBeTruthy();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 27,
      charCode: 27,
    });
    expect(input.value).toBe("");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest complex key sequence: write, arrow up two times, arrow down and select with Enter. Then, clean with Esc.", () => {
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcTextInput label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    act(() => {
      userEvent.type(input, "Ba");
    });
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUpp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(input.value).toBe("Barbados");
    expect(queryByRole("listbox")).toBeFalsy();
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
});

describe("TextInput component asynchronous autosuggest tests", () => {
  test("Autosuggest 'Searching...' message is shown", async () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    expect(getByText("Searching...")).toBeTruthy();
    expect(getByText("Searching...").getAttribute("aria-live")).toBe("polite");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByRole("listbox")).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
    act(() => {
      userEvent.type(input, "Ab");
    });
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Cabo Verde")).toBeTruthy();
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(input.value).toBe("Cabo Verde");
  });

  test("Autosuggest Esc key works while 'Searching...' message is shown", () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
    const onChange = jest.fn();
    const { getByRole, getByText, queryByText, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    expect(getByText("Searching...")).toBeTruthy();
    userEvent.type(input, "Ab");
    fireEvent.keyDown(input, {
      key: "Esc",
      code: "Esc",
      keyCode: 27,
      charCode: 27,
    });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(queryByText("Searching...")).toBeFalsy();
    expect(input.value).toBe("");
  });

  test("Autosuggest Esc + arrow down working while 'Searching...' message is shown", async () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
    const onChange = jest.fn();
    const { getByRole, getByText, queryByText, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    expect(getByText("Searching...")).toBeTruthy();
    userEvent.type(input, "Ab");
    fireEvent.keyDown(input, {
      key: "Esc",
      code: "Esc",
      keyCode: 27,
      charCode: 27,
    });
    expect(queryByRole("listbox")).toBeFalsy();
    expect(queryByText("Searching...")).toBeFalsy();
    expect(input.value).toBe("");
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByRole("listbox")).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
  });

  test("Asynchronous uncontrolled autosuggest test", async () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.focus(input);
    userEvent.type(input, "Den");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Denmark")).toBeTruthy();
    userEvent.click(getByRole("option"));
    expect(onChange).toHaveBeenCalledWith({ value: "Denmark" });
    expect(input.value).toBe("Denmark");
  });

  test("Asynchronous controlled autosuggest test", async () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" value="Denm" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    expect(input.value).toBe("Denm");
    userEvent.click(getByText("Autosuggest Countries"));
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Denmark")).toBeTruthy();
    fireEvent.focus(getByRole("option"));
    userEvent.click(getByText("Denmark"));
    expect(onChange).toHaveBeenCalledWith({ value: "Denmark" });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Asynchronous autosuggest closes the listbox after finishing no matches search", async () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
    const onChange = jest.fn();
    const { getByText, getByRole, queryByRole } = render(
      <DxcTextInput label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    const input = getByRole("combobox");
    fireEvent.focus(input);
    act(() => {
      userEvent.type(input, "Example text");
    });
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Asynchronous autosuggest with no matches founded doesn't let the listbox to be opened", async () => {
    const callbackFunc = jest.fn(
      (newValue: string) =>
        new Promise<string[]>((resolve) => {
          setTimeout(() => {
            resolve(
              newValue ? countries.filter((option) => option.toUpperCase().includes(newValue.toUpperCase())) : countries
            );
          }, 100);
        })
    );
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
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });
    expect(queryByRole("listbox")).toBeFalsy();
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });
    expect(queryByRole("listbox")).toBeFalsy();
  });

  test("Asynchronous autosuggest request failed, shows 'Error fetching data' message", async () => {
    const errorCallbackFunc = jest.fn(
      () =>
        new Promise<string[]>((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("err"));
          }, 100);
        })
    );
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
