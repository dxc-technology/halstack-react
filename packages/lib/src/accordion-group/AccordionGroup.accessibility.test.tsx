import { render } from "@testing-library/react";
import DxcAccordionGroup from "./AccordionGroup";
import { axe } from "../../test/accessibility/axe-helper.js";

const folderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M16,16h2v-2h-2v-2 h2v-2h-2V8h4v10h-4V16z M16,16h-2v2H4V6h5.17l2,2H14v2h2v2h-2v2h2V16z" />
    </g>
  </svg>
);

describe("Accordion component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcAccordionGroup defaultIndexActive={1} margin="small">
        <DxcAccordionGroup.Accordion label="Accordion1" assistiveText="Assistive Text1" icon={folderIcon}>
          <div>First accordion</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" assistiveText="Assistive Text2" icon={folderIcon}>
          <div>Second accordion</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcAccordionGroup defaultIndexActive={1} margin="small" disabled>
        <DxcAccordionGroup.Accordion label="Accordion1" assistiveText="Assistive Text1" icon={folderIcon}>
          <div>First accordion</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" assistiveText="Assistive Text2" icon={folderIcon}>
          <div>Second accordion</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
