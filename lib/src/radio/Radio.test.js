import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcRadio from "./Radio";

describe("Radio component tests", () => {
  test("Radio renders correctly", () => {
    const { getByText } = render(<DxcRadio label="Radio button" />);
    expect(getByText("Radio button")).toBeTruthy();
  });
  test("Calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcRadio label="Radio button" onClick={onClick} />);
    fireEvent.click(getByText("Radio button"));

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(true);
  });
  test("Controlled Radio", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcRadio label="Radio button" checked={false} onClick={onClick} />);
    expect(getByRole("radio").checked).toBe(false);
    fireEvent.click(getByText("Radio button"));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(true);
    expect(getByRole("radio").checked).toBe(false);
  });
  test("Uncontrolled Radio", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcRadio label="Radio button" onClick={onClick} />);
    expect(getByRole("radio").checked).toBe(false);
    fireEvent.click(getByText("Radio button"));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(true);
    expect(getByRole("radio").checked).toBe(false);
  });
});
