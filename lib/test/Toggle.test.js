import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcToggle from "../src/toggle/Toggle";

describe("Toggle component tests", () => {
  test("Toggle renders with correct text", () => {
    const { getByText } = render(<DxcToggle label="Toggle" />);
    expect(getByText("Toggle")).toBeTruthy();
  });

  test("Calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText} = render(<DxcToggle label="ToggleTest" onClick={onClick} />);
    fireEvent.click(getByText("ToggleTest"));
    expect(onClick).toHaveBeenCalled();
  });

  test("Calls correct function on click with the correct value.", () => {
    const onClick = jest.fn();
    const { getByText, rerender } = render(<DxcToggle label="ToggleTest" onClick={onClick} />);

    fireEvent.click(getByText("ToggleTest"));
    rerender(<DxcToggle label="ToggleTest" onClick={onClick} selected={true} />);
    fireEvent.click(getByText("ToggleTest"));
    expect(onClick.mock.calls[0][0]).toBe(true);
    expect(onClick.mock.calls[1][0]).toBe(false);
  });


  test("Calls correct function on click with the correct value, if it´s controlled and the user doesn´t change the value the function always receives the same", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcToggle label="ToggleTest" selected={true} onClick={onClick} />);

    fireEvent.click(getByText("ToggleTest"));
    fireEvent.click(getByText("ToggleTest"));
    fireEvent.click(getByText("ToggleTest"));
    expect(onClick).toHaveBeenCalledTimes(3);
    expect(onClick.mock.calls[0][0]).toBe(false);
    expect(onClick.mock.calls[1][0]).toBe(false);
    expect(onClick.mock.calls[2][0]).toBe(false);
  });

});
