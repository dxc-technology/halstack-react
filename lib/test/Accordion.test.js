import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcAccordion from "../src/accordion/Accordion";

describe("Accordion component tests", () => {
  test("Accordion renders with correct text", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcAccordion label="Accordion" onChange={onChange} />);

    expect(getByText("Accordion")).toBeTruthy();
  });

  test("Calls correct function on click", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcAccordion label="Accordion" onChange={onChange} />);

    fireEvent.click(getByText("Accordion"));
    expect(onChange).toHaveBeenCalled();
  });

  test("Controlled accordion", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcAccordion label="Accordion" onChange={onChange} isExpanded={true} />);

    fireEvent.click(getByText("Accordion"));
    fireEvent.click(getByText("Accordion"));
    fireEvent.click(getByText("Accordion"));
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[0][0]).toBe(false);
    expect(onChange.mock.calls[1][0]).toBe(false);
    expect(onChange.mock.calls[2][0]).toBe(false);
  });
});
