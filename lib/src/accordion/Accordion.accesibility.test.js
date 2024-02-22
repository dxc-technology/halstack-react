import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcAccordion from "./Accordion.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Accordion component accesibility tests", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcAccordion label="Accordion" defaultIsExpanded>
        <div>test-expanded</div>
      </DxcAccordion>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
