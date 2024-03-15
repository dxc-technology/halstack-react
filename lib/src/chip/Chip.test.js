import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcChip from "./Chip.tsx";

describe("Chip component tests", () => {
  test("Chip renders with correct text", () => {
    const { getByText } = render(<DxcChip label="Chip" />);
    expect(getByText("Chip")).toBeTruthy();
  });

  test("Calls correct function when clicking on prefix icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" prefixIcon="nutrition" onClickPrefix={onClick} />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  test("Calls correct function when clicking on suffix icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" suffixIcon="nutrition" onClickSuffix={onClick} />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
