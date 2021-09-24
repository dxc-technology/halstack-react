import React from "react";
import { render, fireEvent, waitForElementToBeRemoved, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcNewTextarea from "../src/new-textarea/NewTextarea";

describe("NewTextarea component tests", () => {
  test("Renders with correct label", () => {
    const { getByText } = render(<DxcNewTextarea label="Example label" />);
    expect(getByText("Example label")).toBeTruthy();
  });
  test("Renders with correct label and helper text", () => {
    const { getByText } = render(<DxcNewTextarea label="Example label" helperText="Example helper text" />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct label and optional", () => {
    const { getByText } = render(<DxcNewTextarea label="Example label" helperText="Example helper text" optional />);
    expect(getByText("Example label")).toBeTruthy();
    expect(getByText("(Optional)")).toBeTruthy();
    expect(getByText("Example helper text")).toBeTruthy();
  });
  test("Renders with correct placeholder", () => {
    const { getByRole } = render(<DxcNewTextarea placeholder="Placeholder" />);
    const input = getByRole("textbox");
    expect(input.getAttribute("placeholder")).toBe("Placeholder");
  });
  test("Renders with error message", () => {
    const { getByText } = render(<DxcNewTextarea error="Error message" />);
    expect(getByText("Error message")).toBeTruthy();
  });
  test("Strict mode - Pattern constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByLabelText("Example label");
    userEvent.type(input, "pattern test");
    fireEvent.blur(input);
    expect(getByText("Please match the format requested.")).toBeTruthy();
    userEvent.type(input, "pattern4&");
    fireEvent.blur(input);
    expect(queryByText("Please match the format requested.")).toBeFalsy();
  });
  test("Strict mode - Length constraint", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByLabelText("Example label");
    userEvent.type(input, "test");
    fireEvent.blur(input);
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    userEvent.type(input, "test ");
    fireEvent.blur(input);
    expect(queryByText(/Min length /)).toBeFalsy();
  });
  test("Strict mode - Pattern and length constraints", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByLabelText("Example label");
    userEvent.type(input, "test");
    fireEvent.blur(input);
    expect(getByText("Min length 5, Max length 10.")).toBeTruthy();
    userEvent.type(input, "test ");
    fireEvent.blur(input);
    expect(getByText("Please match the format requested.")).toBeTruthy();
    userEvent.type(input, "test 4");
    fireEvent.blur(input);
    expect(queryByText("Please match the format requested.")).toBeFalsy();
  });
  test("Non Strict mode - Pattern constraint", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("t");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("t");
      expect(error).toBe("Please match the format requested.");
    });
    const { getByLabelText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const input = getByLabelText("Example label");
    userEvent.type(input, "t");
    fireEvent.blur(input);
  });
  test("Non Strict mode - Length constraint", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("t");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("t");
      expect(error).toBe("Min length 5, Max length 10.");
    });
    const { getByLabelText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByLabelText("Example label");
    userEvent.type(input, "t");
    fireEvent.blur(input);
  });
  test("Non Strict mode - Pattern and length constraints", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("t");
    });
    const onBlur = jest.fn(({ value, error }) => {
      expect(value).toBe("t");
      expect(error).toBe("Min length 5, Max length 10.");
    });
    const { getByLabelText } = render(
      <DxcNewTextarea
        label="Example label"
        placeholder="Placeholder"
        onChange={onChange}
        onBlur={onBlur}
        margin={{ left: "medium", right: "medium" }}
        clearable
        length={{ min: 5, max: 10 }}
      />
    );
    const input = getByLabelText("Example label");
    userEvent.type(input, "t");
    fireEvent.blur(input);
  });
  test("onChange function is called correctly", () => {
    const onChange = jest.fn((value) => {
      expect(value).toBe("t");
    });
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" onChange={onChange} />);
    const textarea = getByLabelText("Example label");
    userEvent.type(textarea, "t");
    expect(textarea.value).toBe("t");
    expect(onChange).toHaveBeenCalled();
  });
  test("onBlur function is called correctly", () => {
    const onBlur = jest.fn();
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" onBlur={onBlur} />);
    const textarea = getByLabelText("Example label");
    userEvent.type(textarea, "t");
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "t", error: null });
  });
  test("Controlled textarea", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByLabelText } = render(
      <DxcNewTextarea label="Example label" value="Test value" onChange={onChange} onBlur={onBlur} />
    );
    const textarea = getByLabelText("Example label");
    userEvent.type(textarea, "Example text");
    expect(onChange).toHaveBeenCalled();
    expect(textarea.value).toBe("Test value");
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledWith({ value: "Test value", error: null });
  });
  // test("Vertical grow is 'auto' by default: should resize automatically", () => {
  //   const { getByLabelText } = render(
  //     <DxcNewTextarea
  //       label="Example label"
  //       value="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  //     />
  //   );

  //   const textarea = getByLabelText("Example label");
  //   expect(textarea.rows).toBe(6);
  // });
  test("Vertical grow is 'auto' by default: should resize automatically", async () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DxcNewTextarea label="Example label" onChange={onChange} />);
    const textarea = getByLabelText("Example label");

    act(() => {
      fireEvent.change(textarea, {
        target: {
          value:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
      });
    });
    expect(onChange).toHaveBeenCalled();
    await waitFor(() => {
      expect(textarea.rows).toBe(6);
    }, {timeout: 5000});
  });
});
