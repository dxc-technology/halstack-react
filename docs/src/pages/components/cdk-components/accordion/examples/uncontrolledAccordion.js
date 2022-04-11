import { DxcAccordion } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div>
      <DxcAccordion
        label="Uncontrolled Accordion"
        assistiveText="Assistive text"
        defaultIsExpanded
        margin="medium"
        padding="medium"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </DxcAccordion>
    </div>
  );
}`;

const scope = {
  DxcAccordion
};

export default { code, scope };
