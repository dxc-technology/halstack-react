import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcToggleGroup from "../src/toggle-group/ToggleGroup";

const options = [
  {
    value: 1,
    label: "Amazon",
  },
  {
    value: 2,
    label: "Ebay",
  },
  {
    value: 3,
    label: "Apple",
  },
  {
    value: 4,
    label: "Google",
  },
];

describe("Toggle group component tests", () => {
  test("Toggle group renders with correct labels", () => {
    const { getByText } = render(<DxcToggleGroup label="Toggle group" options={options} />);
    expect(getByText("Toggle group")).toBeTruthy();
    expect(getByText("Amazon")).toBeTruthy();
    expect(getByText("Ebay")).toBeTruthy();
    expect(getByText("Apple")).toBeTruthy();
    expect(getByText("Google")).toBeTruthy();
  });

  test("Calls correct function on change with value", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup label="Toggle group" options={options} onChange={onChange} />);

    const option = getByText("Ebay");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledWith(2);
  });
  
  test("Calls correct function on change with value when is multiple", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcToggleGroup label="Toggle group" options={options} onChange={onChange} multiple />);

    const option = getByText("Ebay");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
