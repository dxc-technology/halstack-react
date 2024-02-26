import React from "react";
import { render } from "@testing-library/react";
import DxcAccordionGroup from "./AccordionGroup.tsx";
import { axe } from "jest-axe";

describe("Accordion component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcAccordionGroup defaultIndexActive={1}>
        <DxcAccordionGroup.Accordion label="Accordion1">
          <div>First accordion</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2">
          <div>Second accordion</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
