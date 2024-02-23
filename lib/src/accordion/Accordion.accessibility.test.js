import React from "react";
import { render } from "@testing-library/react";
import DxcAccordion from "./Accordion.tsx";
import { axe } from "jest-axe";

describe("Accordion component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcAccordion label="Accordion" defaultIsExpanded>
        <div>test-expanded</div>
      </DxcAccordion>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
