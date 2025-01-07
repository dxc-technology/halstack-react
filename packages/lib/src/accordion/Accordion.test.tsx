import { render, fireEvent } from "@testing-library/react";
import DxcAccordion from "./Accordion";

describe("Accordion component tests", () => {
  test("Renders with correct aria accessibility attributes", () => {
    const { getByRole } = render(
      <DxcAccordion label="Accordion" defaultIsExpanded>
        <div>test-expanded</div>
      </DxcAccordion>
    );
    const accordion = getByRole("button");
    const panel = getByRole("region");
    expect(accordion.getAttribute("aria-controls")).toBe(panel.id);
    expect(panel.getAttribute("aria-labelledby")).toBe(accordion.id);
  });
  test("Renders expanded by default when it is uncontrolled", () => {
    const { getByRole } = render(
      <DxcAccordion label="Accordion" defaultIsExpanded>
        <div>test-expanded</div>
      </DxcAccordion>
    );
    const accordion = getByRole("button");
    expect(accordion.getAttribute("aria-expanded")).toBe("true");
  });
  test("Calls correct function on click", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <DxcAccordion label="Accordion" onChange={onChange}>
        <div>test-expanded</div>
      </DxcAccordion>
    );
    fireEvent.click(getByText("Accordion"));
    expect(onChange).toHaveBeenCalled();
  });
  test("Controlled accordion", () => {
    const onChange = jest.fn();
    const { getByText, getByRole } = render(
      <DxcAccordion label="Accordion" onChange={onChange} isExpanded>
        <div>test-expanded</div>
      </DxcAccordion>
    );
    expect(getByRole("button").getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(getByText("Accordion"));
    fireEvent.click(getByText("Accordion"));
    fireEvent.click(getByText("Accordion"));
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[0][0]).toBe(false);
    expect(onChange.mock.calls[1][0]).toBe(false);
    expect(onChange.mock.calls[2][0]).toBe(false);
  });
});
