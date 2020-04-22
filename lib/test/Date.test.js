import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcDate from "../src/date/Date";

describe("Date component general tests", () => {
  test("Date renders correctly", () => {
    const { getByText } = render(<DxcDate label="Birthdate" />);
    expect(getByText("Birthdate")).toBeTruthy();
  });
});

describe("Controlled Date Component", () => {
  const date = new Date("2020-02-10 00:00:00");

  test("The input´s value is the same as the one received as a parameter (Without format)", () => {
    const { getByLabelText } = render(<DxcDate label="Birthdate" value="30/03/1981" />);
    const input = getByLabelText("Birthdate");//Separar test con default format.
    expect(input.value).toBe("30/03/1981");
  });

  test("Calendar´s value is the same as the input´s date if it´s right (Depending on the format)", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("10-02-2020");
    });

    const component = render(<DxcDate label="Birthdate" value="1981/03/30" />);
    const input = component.getByLabelText("Birthdate");
    fireEvent.change(input, { target: { value: "10/04/2020" } });
    const calendarButton = component.getByRole("button");
    fireEvent.click(calendarButton);
    const monthName = component.getByText("April");
    console.log(monthName);
    expect(onChange).not.toHaveBeenCalled();
  });
  test("onChange function is called when the user types in the input", () => {

  });
  test("onChange function is called when the user types in the input, the date is a right one", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("10-02-2020");
    });

    const { getByLabelText } = render(<DxcDate label="Birthdate" value="30-03-1981" onInputChange={onChange} />);
    const input = getByLabelText("Birthdate");
    fireEvent.change(input, { target: { value: "10-02-2020" } });
    expect(onChange).toHaveBeenCalled();

  });
  test("onChange function is called when the user types in the input, the date is not right", () => {
    const onChangeCustomInvalid = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("10/02/2_");
    });
    const { getByLabelText } = render(
      <DxcDate label="Birthdate" value="1981/03/30" format="dd/MM/yy" onInputChange={onChangeCustomInvalid} />
    );
    const input = getByLabelText("Birthdate");
    fireEvent.change(input, { target: { value: "10/02/2" } });
    expect(onChangeCustomInvalid).toHaveBeenCalled();

  });

  test("onChange function is called when the user selects from the calendar", () => {
    const onChange = jest.fn();

    const component = render(<DxcDate label="Birthdate" value="01-02-2020" onInputChange={onChange} />);
    const calendarButton = component.getByRole("button");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called when the user selects from the calendar, the dateValue received by the function is the selected date", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
    });

    const component = render(<DxcDate label="Birthdate" value="01-02-2020" onInputChange={onChange} />);
    const calendarButton = component.getByRole("button");
    console.log('jairo1');
    console.log(component);
    console.log(calendarButton);
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();

  });

  test("onChange function is called when the user selects from the calendar, the stringValue received by the function is the date with the correct format", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.stringValue).toBe("10-02-2020");
    });

    const component = render(<DxcDate label="Birthdate" value="01-02-2020" onInputChange={onChange} />);
    const calendarButton = component.getByRole("button");
    console.log('jairo2');
    console.log(component);
    console.log(calendarButton);
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();

  });
//PENDIENTE
  test("If the user types something, if controlled and without onChange, the value doesn´t change", () => {});





  //VIEJOS
  test("onChange function is called (Valid date - default format) ", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("10-02-2020");
    });

    const { getByPlaceholderText } = render(<DxcDate label="Birthdate" value="1981/03/30" onInputChange={onChange} />);
    const input = getByPlaceholderText("dd-MM-yyyy");
    fireEvent.change(input, { target: { value: "10/02/2020" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("onChange function is called(Valid date - custom format)", () => {
    const onChangeCustom = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("10/02/20");
    });
    const { getByPlaceholderText } = render(
      <DxcDate label="Birthdate" format="dd/MM/yy" value="1981/03/30" onInputChange={onChangeCustom} />
    );
    const input = getByPlaceholderText("dd/MM/yy");
    fireEvent.change(input, { target: { value: "10/02/20" } });
    expect(onChangeCustom).toHaveBeenCalled();
  });

  test("onChange function is called (Invalid date) - custom format", () => {
    const onChangeCustomInvalid = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue).toBeNull();
      expect(returnedValue.stringValue).toBe("10/02/2_");
    });
    const { getByPlaceholderText } = render(
      <DxcDate label="Birthdate" value="1981/03/30" format="dd/MM/yy" onInputChange={onChangeCustomInvalid} />
    );
    const input = getByPlaceholderText("dd/MM/yy");
    fireEvent.change(input, { target: { value: "10-02-2_" } });
    expect(onChangeCustomInvalid).toHaveBeenCalled();
  });

  test("click calendar icon renders calendar", () => {
    const component = render(<DxcDate label="Birthdate" value="2020/02/01" />);
    const calendarButton = component.getByRole("button");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });

    expect(dayButton).toBeTruthy();
  });

  test("Select day using calendar - default format", () => {
    const onChange = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime()); //chequear que el date sea el que le pasé (DONE)
      expect(returnedValue.stringValue).toBe("10-02-2020");
    });

    const component = render(<DxcDate label="Birthdate" value="2020/02/01" onInputChange={onChange} />);
    const calendarButton = component.getByRole("button");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
  });

  test("Select day using calendar - custom format", () => {
    const onChangeMocked = jest.fn((returnedValue) => {
      expect(returnedValue.dateValue.getTime()).toBe(date.getTime());
      expect(returnedValue.stringValue).toBe("10/02/20");
    });
    const component = render(
      <DxcDate label="Birthdate" value="2020/02/01" format="dd/MM/yy" onInputChange={onChangeMocked} />
    );
    const calendarButton = component.getByRole("button");
    fireEvent.click(calendarButton);
    const dayButton = component.getByRole("button", { name: "10" });
    fireEvent.click(dayButton);
    expect(dayButton).toBeTruthy();
  });
});
