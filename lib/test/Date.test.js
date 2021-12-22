import React from "react";
import { render, fireEvent } from "@testing-library/react";
import V3DxcDate from "../src/date/Date";

const defaultFormat = "DD-MM-YYYY";

describe("Date component general tests", () => {
  test("Date renders correctly", () => {
    const { getByPlaceholderText } = render(<V3DxcDate label="Birthdate" placeholder />);
    // const input = getByPlaceholderText('DD-MM-YYYY');
    expect(getByPlaceholderText(defaultFormat)).toBeTruthy();
  });
});

describe("Controlled Date Component", () => {
  const date = new Date("2020-10-16 00:00:00");

  test("Changing the input value and after this deleting its content input´s value should be ''", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("something");
    });

    const { getByRole, getByPlaceholderText, rerender } = render(
      <V3DxcDate label="Birthdate" value="30-03-1981" onChange={onChange} placeholder />
    );
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "something" } });
    expect(onChange).toHaveBeenCalled();
    fireEvent.blur(input);
    rerender(<V3DxcDate label="Birthdate" value="" placeholder />);
    // expect(getByRole("textbox").value).toBe('');
  });

  test("The input´s value is the same as the one received as a parameter (Default format)", () => {
    const { getByRole, getByPlaceholderText } = render(<V3DxcDate label="Birthdate" value="30/03/1981" placeholder />);
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);
    expect(input.value).toBe("30/03/1981");
  });

  test("The input´s value is the same as the one received as a parameter (Custom format)", () => {
    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" format="dd/MM/yy" value="30/03/81" placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("DD/MM/YY");
    expect(input.value).toBe("30/03/81");
  });

  test("Calendar´s value is the same as the input´s date if it´s right (Depending on the format)", () => {
    const { getByRole, getByText, getByTestId } = render(<V3DxcDate label="Birthdate" value="16-10-2020" />);
    fireEvent.click(getByTestId("calendarIcon"));
    expect(getByText("Fri, Oct 16")).toBeTruthy();
  });

  test("Calendar´s value is the same as the input´s date if it´s right after changing the input value", () => {
    const { getByRole, getByText, rerender, getByPlaceholderText, getByTestId } = render(
      <V3DxcDate label="Birthdate" value="30-03-1981" placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);
    fireEvent.change(input, { target: { value: "10-02-2020" } });

    rerender(<V3DxcDate label="Birthdate" value="10-02-2020" />);
    const calendarButton = getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    expect(getByText("Mon, Feb 10")).toBeTruthy();
  });

  test("onChange function is called when the user types something in the input", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("something");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" value="30-03-1981" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "something" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user types in the input a valid date(based on its format), the object received as a parameter in the onChange function is what should be(DEFAULT FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("16-10-2020");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" value="30-03-1981" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);
    fireEvent.change(input, { target: { value: "16-10-2020" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user types in the input a valid date(based on its format), the object received as a parameter in the onChange function is what should be(CUSTOM FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("16-10-20");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" format="dd-MM-yy" value="30-03-81" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("DD-MM-YY");

    fireEvent.change(input, { target: { value: "16-10-20" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user types in the input an invalid date(based on its format), the object received as a parameter in the onChange function is what should be(stringValue with the written string, and null as dateValue)(DEFAULT FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("11-15-2020");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" value="30-03-1981" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "11-15-2020" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user types in the input an invalid date(based on its format), the object received as a parameter in the onChange function is what should be(stringValue with the written string, and null as dateValue)(CUSTOM FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("15/11/2020");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" value="03/30/1981" format="MM/dd/yyyy" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("MM/DD/YYYY");

    fireEvent.change(input, { target: { value: "15/11/2020" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user selects from the calendar", () => {
    const onChange = jest.fn();

    const component = render(<V3DxcDate label="Birthdate" value="01-02-2020" onChange={onChange} />);
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user selects from the calendar, the dateValue received by the onChange function is the selected date", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
    });

    const component = render(<V3DxcDate label="Birthdate" value="30-10-2020" onChange={onChange} />);
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "16" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
  });

  test("onChange function is called when the user selects from the calendar, the stringValue received by the onChange function is the date with the correct format (DEFAULT FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.stringValue).toBe("16-10-2020");
    });

    const component = render(<V3DxcDate label="Birthdate" value="01-10-2020" onChange={onChange} />);
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "16" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
  });

  test("onChange function is called when the user selects from the calendar, the stringValue received by the onChange function is the date with the correct format (CUSTOM FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.stringValue).toBe("2020/10/16");
    });

    const component = render(
      <V3DxcDate label="Birthdate" format="yyyy/MM/dd" value="2020/10/01" onChange={onChange} />
    );
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "16" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
  });

  test("Check selected date on calendar is the same date as the one on the input", () => {
    const component = render(<V3DxcDate label="Birthdate" value="01-10-2020" />);
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "1" });
    expect(dayButton.classList.contains("MuiPickersDay-daySelected")).toBe(true);
  });
  test("onBlur function is called", () => {
    const onBlur = jest.fn();
    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" value="30-03-81" onBlur={onBlur} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
  test("onBlur function is called and the parameter received  is what should be(DEFAULT FORMAT)", () => {
    const onBlur = jest.fn((returnedValue) => {
      expect(returnedValue).toBe("30-03-81");
    });
    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" value="30-03-81" onBlur={onBlur} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
  test("onBlur function is called and the parameter received  is what should be(CUSTOM FORMAT)", () => {
    const onBlur = jest.fn((returnedValue) => {
      expect(returnedValue).toBe("30/03/81");
    });
    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" format="dd/MM/yy" value="30/03/81" onBlur={onBlur} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("DD/MM/YY");

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
});

describe("Uncontrolled Date Component", () => {
  const date = new Date("2020-10-16 00:00:00");

  test("Calendar´s value is the same as the input´s date if it´s right after changing the input value", () => {
    const { getByRole, getByText, rerender, getByPlaceholderText, getByTestId } = render(
      <V3DxcDate label="Birthdate" placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "10-02-2020" } });

    rerender(<V3DxcDate label="Birthdate" value="10-02-2020" />);
    const calendarButton = getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    expect(getByText("Mon, Feb 10")).toBeTruthy();
  });

  test("onChange function is called when the user types something in the input", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("something");
    });

    const { getByRole, getByPlaceholderText } = render(<V3DxcDate label="Birthdate" onChange={onChange} placeholder />);
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "something" } });
    expect(onChange).toHaveBeenCalled();
  });
  test("onChange function is called when the user types in the input a valid date(based on its format), the object received as a parameter in the onChange function is what should be(DEFAULT FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("16-10-2020");
    });

    const { getByRole, getByPlaceholderText } = render(<V3DxcDate label="Birthdate" onChange={onChange} placeholder />);
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "16-10-2020" } });
    expect(onChange).toHaveBeenCalled();
  });
  test("onChange function is called when the user types in the input a valid date(based on its format), the object received as a parameter in the onChange function is what should be(CUSTOM FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("16-10-20");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" format="dd-MM-yy" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("DD-MM-YY");

    fireEvent.change(input, { target: { value: "16-10-20" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user types in the input an invalid date(based on its format), the object received as a parameter in the onChange function is what should be(stringValue with the written string, and null as dateValue)(DEFAULT FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("11-15-2020");
    });

    const { getByRole, getByPlaceholderText } = render(<V3DxcDate label="Birthdate" onChange={onChange} placeholder />);
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "11-15-2020" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user types in the input an invalid date(based on its format), the object received as a parameter in the onChange function is what should be(stringValue with the written string, and null as dateValue)(CUSTOM FORMAT)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("15/11/2020");
    });

    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" format="MM/dd/yyyy" onChange={onChange} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("MM/DD/YYYY");

    fireEvent.change(input, { target: { value: "15/11/2020" } });
    expect(onChange).toHaveBeenCalled();
  });
  test("onChange function is called when the user selects from the calendar", () => {
    const onChange = jest.fn();

    const component = render(<V3DxcDate label="Birthdate" onChange={onChange} />);
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
  });

  test("Check selected date on calendar is the same date as the one on the input", () => {
    const component = render(<V3DxcDate label="Birthdate" placeholder />);
    // const input = component.getByRole("textbox");
    const input = component.getByPlaceholderText(defaultFormat);

    fireEvent.change(input, { target: { value: "10-02-2020" } });
    const calendarButton = component.getByTestId("calendarIcon");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    expect(dayButton.classList.contains("MuiPickersDay-daySelected")).toBe(true);
  });
  test("onBlur function is called", () => {
    const onBlur = jest.fn();
    const { getByRole, getByPlaceholderText } = render(<V3DxcDate label="Birthdate" onBlur={onBlur} placeholder />);
    // const input = getByRole("textbox");
    const input = getByPlaceholderText(defaultFormat);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
  test("onBlur function is called and the parameter received  is what should be(DEFAULT FORMAT)", () => {
    const onBlur = jest.fn((returnedValue) => {
      expect(returnedValue).toBe("10-02-2020");
    });
    const { getByRole, getByPlaceholderText } = render(<V3DxcDate label="Birthdate" onBlur={onBlur} placeholder />);
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("DD-MM-YYYY");

    fireEvent.change(input, { target: { value: "10-02-2020" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
  test("onBlur function is called and the parameter received  is what should be(CUSTOM FORMAT)", () => {
    const onBlur = jest.fn((returnedValue) => {
      expect(returnedValue).toBe("10/02/20");
    });
    const { getByRole, getByPlaceholderText } = render(
      <V3DxcDate label="Birthdate" format="dd/MM/yy" onBlur={onBlur} placeholder />
    );
    // const input = getByRole("textbox");
    const input = getByPlaceholderText("DD/MM/YY");

    fireEvent.change(input, { target: { value: "10/02/20" } });
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });
});
