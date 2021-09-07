import React from "react";
import { render, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcNewInputText from "../src/new-input-text/NewInputText";

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

describe("NewInputText component tests", () => {
  test("Renders with correct label", () => {
    const { getByText } = render(<DxcNewInputText label="Example label" />);

    expect(getByText("Example label")).toBeTruthy();
  });

  test("Renders with correct label and helper text", () => {
    const { getByText } = render(<DxcNewInputText label="Example label" helperText="Example helper text" />);

    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });

  test("Renders with correct label and optional", () => {
    const { getByText } = render(<DxcNewInputText label="Example label" helperText="Example helper text" optional />);

    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });

  test("Renders with correct placeholder", () => {
    const { getByRole } = render(<DxcNewInputText label="Example label" placeholder="Placeholder" />);
    const input = getByRole("textbox");

    expect(input.getAttribute("placeholder")).toBe("Placeholder");
  });

  test("Renders with error message", () => {
    const { getByText } = render(
      <DxcNewInputText label="Error label" placeholder="Placeholder" error="Error message" />
    );

    expect(getByText("Error message")).toBeTruthy();
  });

  test("Input Strict - Pattern constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewInputText
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByLabelText("Input label");
    userEvent.type(input, "pattern test");
    fireEvent.blur(input);
    expect(getByText("Constraints not satisfied")).toBeTruthy();
    userEvent.type(input, "pattern4&");
    fireEvent.blur(input);
    expect(queryByText("Constraints not satisfied")).toBeFalsy();
  });

  test("Input Strict - Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewInputText
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        length={{ min: "5", max: "10" }}
      />
    );
    const input = getByLabelText("Input label");
    userEvent.type(input, "test");
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    fireEvent.blur(input);
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    userEvent.type(input, "test ");
    expect(queryByText(/Min length /)).toBeFalsy();
  });

  test("Input Strict - Pattern and length constraints", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewInputText
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        length={{ min: "5", max: "10" }}
      />
    );
    const input = getByLabelText("Input label");
    userEvent.type(input, "test");
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    fireEvent.blur(input);
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    userEvent.type(input, "test ");
    expect(queryByText(/Min length 5/)).toBeFalsy();
    fireEvent.blur(input);
    expect(getByText("Constraints not satisfied")).toBeTruthy();
    userEvent.type(input, "test 4");
    expect(queryByText(/Constraints not satisfied/)).toBeFalsy();
  });

  test("Input Non Strict - Pattern constraint", () => {
    const onChange = jest.fn((info) => {
      expect(info.value).toBe("t");
      expect(info.error).toBe(undefined);
    });

    const onBlur = jest.fn((info) => {
      expect(info.value).toBe("t");
      expect(info.error).toBe("Constraints not satisfied");
    });

    const { getByLabelText } = render(
      <DxcNewInputText
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByLabelText("Input label");
    userEvent.type(input, "t");
    fireEvent.blur(input);
  });

  test("Input Non Strict - Length constraint", () => {
    const onChange = jest.fn((info) => {
      expect(info.value).toBe("t");
      expect(info.error).toBe("Min length 5, Max length 10.");
    });

    const onBlur = jest.fn((info) => {
      expect(info.value).toBe("t");
      expect(info.error).toBe("");
    });

    const { getByLabelText } = render(
      <DxcNewInputText
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        length={{ min: "5", max: "10" }}
      />
    );
    const input = getByLabelText("Input label");
    userEvent.type(input, "t");
    fireEvent.blur(input);
  });

  test("Input Non Strict - Pattern and length constraints", () => {
    const onChange = jest.fn((info) => {
      expect(info.value).toBe("t");
      expect(info.error).toBe("Min length 5, Max length 10.");
    });

    const onBlur = jest.fn((info) => {
      expect(info.value).toBe("t");
      expect(info.error).toBe("");
    });

    const { getByLabelText } = render(
      <DxcNewInputText
        label="Input label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        length={{ min: "5", max: "10" }}
      />
    );
    const input = getByLabelText("Input label");
    userEvent.type(input, "t");
    fireEvent.blur(input);
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcNewInputText label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "onchange event test");
    expect(input.value).toBe("onchange event test");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "o", error: undefined });
  });

  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<DxcNewInputText label="Input label" onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Test string");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test string" });
  });

  test("Uncontrolled input", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcNewInputText label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");

    userEvent.type(input, "Uncontrolled test");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith({ value: "Uncontrolled test", error: undefined });
    expect(input.value).toBe("Uncontrolled test");
  });

  test("Controlled input", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcNewInputText label="Input label" value="Test value" onChange={onChange} onBlur={onBlur} />
    );
    const input = getByRole("textbox");

    userEvent.type(input, "Example text");
    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe("Test value");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test value" });
  });

  test("Clear action onClick cleans the input", () => {
    const { getByRole } = render(<DxcNewInputText label="Input label" clearable />);
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
    const { getByRole } = render(<DxcNewInputText label="Disabled input label" action={action} disabled />);

    expect(getByRole("textbox").disabled).toBeTruthy();
    userEvent.click(getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  test("Disabled input (clear default action should not be displayed, even with text written on the input)", () => {
    const { getByRole, queryByRole } = render(
      <DxcNewInputText label="Disabled input label" value="Sample text" disabled clearable />
    );

    expect(getByRole("textbox").disabled).toBeTruthy();
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Disabled input (suffix and preffix must be displayed)", () => {
    const { getByRole, getByText } = render(
      <DxcNewInputText label="Disabled input label" value="Sample text" prefix="+34" suffix="USD" disabled />
    );

    expect(getByRole("textbox").disabled).toBeTruthy();
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
    const { getByRole, getByTestId } = render(<DxcNewInputText label="Input label" action={action} />);

    expect(getByTestId("image")).toBeTruthy();
    userEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  test("Renders with correct prefix and suffix (text)", () => {
    const { getByText } = render(<DxcNewInputText label="Input label" prefix="+34" suffix="USD" />);

    expect(getByText("+34")).toBeTruthy();
    expect(getByText("USD")).toBeTruthy();
  });

  test("Renders with correct prefix (icon)", () => {
    const { getByTestId } = render(
      <DxcNewInputText
        label="Input label"
        prefix={
          <svg
            data-testid="image"
            version="1.1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
          >
            <g id="Bounding_Box">
              <rect fill="none" width="24" height="24" />
            </g>
            <g id="Master">
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
            </g>
          </svg>
        }
      />
    );
    expect(getByTestId("image")).toBeTruthy();
  });

  test("Renders with correct suffix (icon)", () => {
    const { getByTestId } = render(
      <DxcNewInputText
        label="Input label"
        suffix={
          <svg
            data-testid="image"
            version="1.1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
          >
            <g id="Bounding_Box">
              <rect fill="none" width="24" height="24" />
            </g>
            <g id="Master">
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
            </g>
          </svg>
        }
      />
    );
    expect(getByTestId("image")).toBeTruthy();
  });
});

describe("NewInputText component synchronous autosuggest tests", () => {
  test("Autosuggest is shown when the input gains focus", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    expect(getByRole("list")).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();
  });

  test("Autosuggest is not shown when prop suggestions is an empty array", async () => {
    const onChange = jest.fn();
    const { queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={[]} onChange={onChange} />
    );
    const input = queryByRole("textbox");

    fireEvent.focus(input);
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest shows 'No results found' message when there are no matches with the user's input", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    expect(getByRole("list")).toBeTruthy();
    expect(getByText("Afghanistan")).toBeTruthy();
    userEvent.type(input, "x");
    expect(getByRole("list")).toBeTruthy();
    expect(getByText("No results found")).toBeTruthy();
  });

  test("Autosuggest uncontrolled suggestion selected", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );

    fireEvent.focus(getByRole("textbox"));
    userEvent.type(getByRole("textbox"), "Alba");
    expect(onChange).toHaveBeenCalled();
    expect(getByText("Alba")).toBeTruthy();
    expect(getByText("nia")).toBeTruthy();
    fireEvent.mouseDown(getByRole("listitem"));
    fireEvent.mouseUp(getByRole("listitem"));
    expect(getByRole("textbox").value).toBe("Albania");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest controlled suggestions selected", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" value="Andor" suggestions={countries} onChange={onChange} />
    );

    fireEvent.focus(getByRole("textbox"));
    expect(getByRole("textbox").value).toBe("Andor");
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    fireEvent.mouseDown(getByRole("listitem"));
    fireEvent.mouseUp(getByRole("listitem"));
    expect(onChange).toHaveBeenCalledWith({ value: "Andorra", error: undefined });
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest Strict -  Pattern constraint", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByText } = render(
      <DxcNewInputText
        label="Autocomplete Countries"
        value="Andor"
        suggestions={countries}
        onChange={onChange}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );

    const input = getByRole("textbox");
    userEvent.type(input, "Andor");
    expect(getByText("Andor")).toBeTruthy();
    expect(getByText("ra")).toBeTruthy();
    fireEvent.mouseDown(getByRole("listitem"));
    fireEvent.mouseUp(getByRole("listitem"));
    expect(onChange).toHaveBeenCalledWith({ value: "Andorra", error: undefined });
    fireEvent.blur(input);
    expect(queryByText("Constraints not satisfied")).toBeTruthy();
  });

  test("Autosuggest Strict - Length constraint", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, queryByText } = render(
      <DxcNewInputText
        label="Autocomplete Countries"
        value="Cha"
        suggestions={countries}
        onChange={onChange}
        length={{ min: "5", max: "10" }}
      />
    );

    const input = getByRole("textbox");
    fireEvent.focus(input);
    userEvent.type(input, "d");
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    fireEvent.mouseDown(getByRole("listitem"));
    fireEvent.mouseUp(getByRole("listitem"));
    expect(onChange).toHaveBeenCalledWith({
      value: "Chad",
      error: "Min length 5, Max length 10.",
    });
    fireEvent.blur(input);
    expect(queryByText("Min length 5, Max length 10.")).toBeTruthy();
  });

  test("Autosuggest keys: arrow down key and select with Enter", async () => {
    Element.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );

    fireEvent.focus(getByRole("textbox"));
    fireEvent.keyDown(getByRole("textbox"), { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(getByRole("textbox"), { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByRole("textbox").value).toBe("Afghanistan");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest keys: arrow up key and select with Enter", async () => {
    Element.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );

    fireEvent.focus(getByRole("textbox"));
    fireEvent.keyDown(getByRole("textbox"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(getByRole("textbox"), { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByRole("textbox").value).toBe("Djibouti");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest keys: Esc", async () => {
    Element.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );

    fireEvent.focus(getByRole("textbox"));
    userEvent.type(getByRole("textbox"), "Bangla");
    expect(getByRole("list")).toBeTruthy();
    fireEvent.keyDown(getByRole("textbox"), { key: "Esc", code: "Esp", keyCode: 27, charCode: 27 });
    expect(getByRole("textbox").value).toBe("");
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Autosuggest complex key secuence: write, arrow up two times, arrow down and select with Enter", async () => {
    Element.prototype.scrollTo = () => {};
    const onChange = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcNewInputText label="Autocomplete Countries" suggestions={countries} onChange={onChange} />
    );

    fireEvent.focus(getByRole("textbox"));
    userEvent.type(getByRole("textbox"), "Ba");
    fireEvent.keyDown(getByRole("textbox"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(getByRole("textbox"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(getByRole("textbox"), { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(getByRole("textbox"), { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByRole("textbox").value).toBe("Barbados");
    expect(queryByRole("list")).toBeFalsy();
    fireEvent.keyDown(getByRole("textbox"), { key: "Esc", code: "Esp", keyCode: 27, charCode: 27 });
    expect(getByRole("textbox").value).toBe("");
    expect(queryByRole("list")).toBeFalsy();
  });
});

describe("NewInputText component asynchronous autosuggest tests", () => {
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
      <DxcNewInputText label="Autosuggest Countries" suggestions={callbackFunc} onChange={onChange} />
    );
    fireEvent.focus(getByRole("textbox"));
    expect(getByRole("list")).toBeTruthy();
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Afghanistan")).toBeTruthy();
    expect(getByText("Albania")).toBeTruthy();
    expect(getByText("Algeria")).toBeTruthy();
    expect(getByText("Andorra")).toBeTruthy();

    fireEvent.focus(getByRole("textbox"));
    userEvent.type(getByRole("textbox"), "Ab");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Cabo Verde")).toBeTruthy();
    fireEvent.keyDown(getByRole("textbox"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    fireEvent.keyDown(getByRole("textbox"), { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(getByRole("textbox").value).toBe("Cabo Verde");
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
      <DxcNewInputText label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    fireEvent.focus(getByRole("textbox"));
    userEvent.type(getByRole("textbox"), "Den");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Denmark")).toBeTruthy();
    fireEvent.mouseDown(getByRole("listitem"));
    fireEvent.mouseUp(getByRole("listitem"));
    expect(onChange).toHaveBeenCalledWith({ value: "Denmark", error: undefined });
    expect(getByRole("textbox").value).toBe("Denmark");
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
      <DxcNewInputText label="Autosuggest Countries" value="Denm" onChange={onChange} suggestions={callbackFunc} />
    );
    fireEvent.focus(getByRole("textbox"));
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByRole("textbox").value).toBe("Denm");
    expect(getByText("Denmark")).toBeTruthy();
    fireEvent.mouseDown(getByRole("listitem"));
    fireEvent.mouseUp(getByRole("listitem"));
    expect(onChange).toHaveBeenCalledWith({ value: "Denmark", error: undefined });
    expect(queryByRole("list")).toBeFalsy();
  });

  test("Asynchronous autosuggest shows 'No results found' after finishing no matches search", async () => {
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
      <DxcNewInputText label="Autosuggest Countries" onChange={onChange} suggestions={callbackFunc} />
    );
    fireEvent.focus(getByRole("textbox"));
    userEvent.type(getByRole("textbox"), "Example text");
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("No results found")).toBeTruthy();
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
      <DxcNewInputText label="Autosuggest Countries" onChange={onChange} suggestions={errorCallbackFunc} />
    );
    fireEvent.focus(getByRole("textbox"));
    await waitForElementToBeRemoved(() => getByText("Searching..."));
    expect(getByText("Error fetching data")).toBeTruthy();
  });
});
