import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcAccordion from "./Accordion";

describe("Accordion component tests", () => {
  test("Accordion renders with correct text", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcAccordion label="Accordion" assistiveText="Assistive text" onChange={onChange} />);
    expect(getByText("Accordion")).toBeTruthy();
    expect(getByText("Assistive text")).toBeTruthy();
  });
  test("Accordion renders expanded by default when it is uncontrolled", () => {
    const { getByRole } = render(<DxcAccordion label="Accordion" defaultIsExpanded><div>test-expanded</div></DxcAccordion>);
    const accordion = getByRole("button");
    expect(accordion.getAttribute("aria-expanded")).toBe("true");
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
