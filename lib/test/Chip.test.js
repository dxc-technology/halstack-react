import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcChip from "../src/chip/Chip";
import icon from "../../app/src/images/invision.svg";

describe("Chip component tests", () => {
  test("Chip renders with correct text", () => {
    const { getByText } = render(<DxcChip label="Chip" />);
    expect(getByText("Chip")).toBeTruthy();
  });
  test("Calls correct function when clicking on prefix icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" prefixIconSrc={icon} onClickPrefix={onClick} />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("img"));
    expect(onClick).toHaveBeenCalled();
  });
  test("Calls correct function when clicking on suffix icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" suffixIconSrc={icon} onClickSuffix={onClick} />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("img"));
    expect(onClick).toHaveBeenCalled();
  });
});
