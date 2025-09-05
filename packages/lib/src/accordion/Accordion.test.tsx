import { render, fireEvent } from "@testing-library/react";
import DxcAccordion from "./Accordion";

describe("Accordion component tests", () => {
  test("Renders with correct aria accessibility attributes", () => {
    const { getByRole } = render(
      <DxcAccordion defaultIndexActive={0} independent>
        <DxcAccordion.AccordionItem label="Accordion">
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    const accordion = getByRole("button");
    const panel = getByRole("region");
    expect(accordion.getAttribute("aria-controls")).toBe(panel.id);
    expect(panel.getAttribute("aria-labelledby")).toBe(accordion.id);
  });
  test("Renders expanded by default when it is uncontrolled", () => {
    const { getAllByRole } = render(
      <DxcAccordion defaultIndexActive={[0, 2]}>
        <DxcAccordion.AccordionItem label="Accordion 1">
          <div>test-expanded-1</div>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem label="Accordion 2">
          <div>test-expanded-2</div>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem label="Accordion 3">
          <div>test-expanded-3</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    const accordion1 = getAllByRole("button")[0];
    expect(accordion1?.getAttribute("aria-expanded")).toBe("true");
    const accordion2 = getAllByRole("button")[1];
    expect(accordion2?.getAttribute("aria-expanded")).toBe("false");
    const accordion3 = getAllByRole("button")[2];
    expect(accordion3?.getAttribute("aria-expanded")).toBe("true");
  });
  test("Calls correct function on click", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <DxcAccordion onActiveChange={onChange} independent>
        <DxcAccordion.AccordionItem label="Accordion">
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    fireEvent.click(getByText("Accordion"));
    expect(onChange).toHaveBeenCalled();
  });
  test("Controlled accordion", () => {
    const onChange = jest.fn();
    const { getByText, getByRole, rerender } = render(
      <DxcAccordion onActiveChange={onChange} indexActive={0} independent>
        <DxcAccordion.AccordionItem label="Accordion">
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    expect(getByRole("button").getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(getByText("Accordion"));
    rerender(
      <DxcAccordion onActiveChange={onChange} indexActive={-1} independent>
        <DxcAccordion.AccordionItem label="Accordion">
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    expect(getByRole("button").getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(getByText("Accordion"));
    rerender(
      <DxcAccordion onActiveChange={onChange} indexActive={0} independent>
        <DxcAccordion.AccordionItem label="Accordion">
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    expect(getByRole("button").getAttribute("aria-expanded")).toBe("true");
    expect(onChange).toHaveBeenCalledTimes(2);
  });
  test("Independent accordion items behave independently", () => {
    const { getAllByRole, getByText } = render(
      <DxcAccordion independent defaultIndexActive={0}>
        <DxcAccordion.AccordionItem label="Accordion 1">
          <div>test-expanded-1</div>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem label="Accordion 2">
          <div>test-expanded-2</div>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem label="Accordion 3">
          <div>test-expanded-3</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );

    const accordion1 = getAllByRole("button")[0];
    const accordion2 = getAllByRole("button")[1];
    const accordion3 = getAllByRole("button")[2];

    expect(accordion1?.getAttribute("aria-expanded")).toBe("true");
    expect(accordion2?.getAttribute("aria-expanded")).toBe("false");
    expect(accordion3?.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(getByText("Accordion 2"));
    expect(accordion1?.getAttribute("aria-expanded")).toBe("false");
    expect(accordion2?.getAttribute("aria-expanded")).toBe("true");
    expect(accordion3?.getAttribute("aria-expanded")).toBe("false");
  });
  test("Accordion item is disabled", () => {
    const { getByText, getByRole } = render(
      <DxcAccordion defaultIndexActive={0} independent>
        <DxcAccordion.AccordionItem label="Accordion" disabled>
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    const accordion = getByRole("button");
    expect(accordion.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(getByText("Accordion"));
    expect(accordion.getAttribute("aria-expanded")).toBe("true");
  });
  test("Does not call onActiveChange when disabled", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <DxcAccordion onActiveChange={onChange}>
        <DxcAccordion.AccordionItem label="Accordion" disabled>
          <div>test-expanded</div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    );
    fireEvent.click(getByText("Accordion"));
    expect(onChange).not.toHaveBeenCalled();
  });
});
