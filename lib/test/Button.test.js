import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcButton from "../src/button/Button";

describe("Button component tests", () => {
  test("Button renders with correct text", () => {
    const { getByText } = render(<DxcButton label="Button" />);
    expect(getByText("Button")).toBeTruthy();
  });
  test("Calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcButton label="Button" onClick={onClick} />);

    const button = getByText("Button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});