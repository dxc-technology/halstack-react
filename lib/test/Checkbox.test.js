import React from "react";
import { render, fireEvent, getByText, within } from "@testing-library/react";

import DxcCheckbox from "../dist/checkbox/Checkbox";

describe("Checkbox component tests", () => {
  test("Checkbox renders with correct text", () => {
    const { getByText } = render(<DxcCheckbox label="Checkbox" />);

    expect(getByText("Checkbox")).toBeTruthy();
  });

  test("Calls correct function on click", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcCheckbox label="Checkbox" onChange={onChange} />);

    fireEvent.click(getByText("Checkbox"));
    expect(onChange).toHaveBeenCalled();
  });

  test("Not calling on click function if it does not exist", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcCheckbox label="Checkbox" />);

    fireEvent.click(getByText("Checkbox"));
    expect(onClick).not.toHaveBeenCalled();
  });
  test("Uncontrolled checkbox", () => {
    const onChange = jest.fn();
    const component = render(<DxcCheckbox label="Checkbox" onChange={onChange} name="Jairo" />);

    const input = document.querySelector('input[type="checkbox"]');
    expect(input.checked).toBe(false);
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    expect(input.checked).toBe(true);
  });

  test("Controlled checkbox", () => {
    const onChange = jest.fn();
    const component = render(<DxcCheckbox label="Checkbox" name="Jairo" checked={false} onChange={onChange} />);

    const input = document.querySelector('input[type="checkbox"]');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    expect(input.checked).toBe(false);
  });
});
