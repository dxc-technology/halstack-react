import React from "react";
import { render, fireEvent, waitFor, screen, act, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import icon from "../../app/src/images/invision.svg";

import DxcInput from "../src/input-text/InputText";

const countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];

//Mock of popper.js because of an issue with createRange function
//(https://github.com/popperjs/popper-core/issues/478)
jest.mock("popper.js", () => {
  const PopperJS = jest.requireActual("popper.js");

  return class {
    constructor() {
      this.placements = PopperJS.placements;
      return {
        destroy: () => {},
        scheduleUpdate: () => {},
        update: () => {},
      };
    }
  };
});

describe("InputText component tests", () => {
  test("Input renders with correct label", () => {
    const { getByText } = render(<DxcInput label="Input label" />);
    expect(getByText("Input label")).toBeTruthy();
  });

  test("onChange function is called correctly", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcInput label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");
    userEvent.type(input, "20000");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("20000");
  });
  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();

    const { getByRole } = render(<DxcInput label="Input label" onChange={onChange} onBlur={onBlur} />);
    const input = getByRole("textbox");
    userEvent.type(input, "Test value");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith("Test value");
  });

  test("Uncontrolled component", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcInput label="Input label" onChange={onChange} />);
    const input = getByRole("textbox");
    userEvent.type(input, "20000");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("20000");
    expect(input.value).toBe("20000");
  });

  test("Controlled component", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByRole } = render(
      <DxcInput label="Input label" value="Test value" onChange={onChange} onBlur={onBlur} />
    );
    const input = getByRole("textbox");
    userEvent.type(input, "20000");
    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe("Test value");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith("Test value");
  });
  test("Prefix icon onClick", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<DxcInput label="Input label" prefixIconSrc={icon} onClickPrefix={onClick} />);
    const prefixIcon = getByRole("img");
    userEvent.click(prefixIcon);
    expect(onClick).toHaveBeenCalled();
  });
  test("Suffix icon onClick", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<DxcInput label="Input label" suffixIconSrc={icon} onClickSuffix={onClick} />);
    const suffixIcon = getByRole("img");
    userEvent.click(suffixIcon);
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Autocomplete component Synchronous tests", () => {
  test("Autocomplete no matches found is shown", async () => {
    const onChangeAtocomplete = jest.fn();
    render(<DxcInput label="Autocomplete Countries" autocompleteOptions={countries} onChange={onChangeAtocomplete} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(screen.getByText("Andorra")).toBeTruthy();
    userEvent.type(input, "X");
    expect(screen.getByText("No matches found.")).toBeTruthy();
  });

  test("Autocomplete suggestions are shown", async () => {
    const onChangeAtocomplete = jest.fn();
    render(<DxcInput label="Autocomplete Countries" autocompleteOptions={countries} onChange={onChangeAtocomplete} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(screen.getByText("Andorra")).toBeTruthy();
  });

  test("Autocomplete UNCONTROLLED suggestion selected", async () => {
    const onChangeAtocomplete = jest.fn();
    render(<DxcInput label="Autocomplete Countries" autocompleteOptions={countries} onChange={onChangeAtocomplete} />);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(screen.getByText("Andorra")).toBeTruthy();
    userEvent.type(screen.getByRole("textbox"), "Alb");
    expect(onChangeAtocomplete).toHaveBeenCalled();
    expect(screen.getByText("Albania")).toBeTruthy();
    const suggestion1 = screen.getByText("Albania");
    act(() => {
      userEvent.click(suggestion1);
    });

    // expect(onChangeAtocomplete).toHaveBeenCalledWith("Albania");
    expect(screen.getByRole("textbox").value).toBe("Albania");
  });

  test("Autocomplete CONTROLLED suggestions selected", async () => {
    const onChangeAtocomplete = jest.fn();
    render(
      <DxcInput
        label="Autocomplete Countries"
        value="Andorra"
        autocompleteOptions={countries}
        onChange={onChangeAtocomplete}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(screen.getByText("Andorra")).toBeTruthy();

    expect(screen.getByText("Andorra")).toBeTruthy();
    const suggestion1 = screen.getByText("Andorra");
    act(() => {
      userEvent.click(suggestion1);
    });

    expect(onChangeAtocomplete).toHaveBeenCalledWith("Andorra");
  });
});

describe("InputText component Asynchronous Autocomplete tests", () => {
  test("Autocomplete Searching is shown", async () => {
    const callbackFunc = jest.fn(() => new Promise((resolve) => setTimeout(resolve(["Italy", "Spain"]), 1000)));

    const onChangeAtocomplete = jest.fn();
    render(
      <DxcInput label="Autocomplete Countries" autocompleteOptions={callbackFunc} onChange={onChangeAtocomplete} />
    );
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    await waitForElementToBeRemoved(() => screen.getByText(/Searching.../i));
    expect(screen.getByText("Italy")).toBeTruthy();
    expect(screen.getByText("Spain")).toBeTruthy();
  });

  test("Asynchronous UNCONTROLLED autocomplete tests", async () => {
    const callbackFunc = jest.fn(() => new Promise((resolve) => setTimeout(resolve(["Italy", "Spain"]), 1000)));
    const onChangeAtocomplete = jest.fn();
    render(
      <DxcInput label="Autocomplete Countries" onChange={onChangeAtocomplete} autocompleteOptions={callbackFunc} />
    );
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    userEvent.type(input, "And");
    await waitForElementToBeRemoved(() => screen.getByText(/Searching.../i));
    expect(screen.getByText("Italy")).toBeTruthy();
    expect(screen.getByText("Spain")).toBeTruthy();
    const suggestion1 = screen.getByText("Spain");
    act(() => {
      userEvent.click(suggestion1);
    });
    expect(onChangeAtocomplete).toHaveBeenCalledWith("Spain");
    expect(screen.getByRole("textbox").value).toBe("Spain");
  });

  test("Asynchronous CONTROLLED autocomplete tests", async () => {
    const callbackFunc = jest.fn(() => new Promise((resolve) => setTimeout(resolve(["Italy", "Spain"]), 3000)));
    const onChangeAtocomplete = jest.fn();
    render(
      <DxcInput
        label="Autocomplete Countries"
        value="test value"
        onChange={onChangeAtocomplete}
        autocompleteOptions={callbackFunc}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    userEvent.type(input, "And");
    await waitForElementToBeRemoved(() => screen.getByText(/Searching.../i));
    expect(screen.getByText("Italy")).toBeTruthy();
    expect(screen.getByText("Spain")).toBeTruthy();
    const suggestion1 = screen.getByText("Spain");
    act(() => {
      userEvent.click(suggestion1);
    });
    expect(onChangeAtocomplete).toHaveBeenCalledWith("Spain");
    expect(screen.getByRole("textbox").value).toBe("test value");
  });

  test("Asynchronous autocomplete request failed", async () => {
    const errorCallbackFunc = jest.fn(() => new Promise((resolve, reject) => setTimeout(reject("E"), 3000)));
    const onChangeAtocomplete = jest.fn();

    render(
      <DxcInput
        label="Autocomplete Countries"
        value="test value"
        onChange={onChangeAtocomplete}
        autocompleteOptions={errorCallbackFunc}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    await waitForElementToBeRemoved(() => screen.getByText(/Searching.../i));
    expect(screen.getByText("Error fetching data")).toBeTruthy();
  });
});
