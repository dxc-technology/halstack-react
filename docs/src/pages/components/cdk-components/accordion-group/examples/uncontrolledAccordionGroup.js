import { DxcAccordionGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div>
      <DxcAccordionGroup margin="medium" defaultIndexActive={0}>
        <DxcAccordionGroup.Accordion label="Accordion1" padding="medium">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" padding="medium">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </div>
        </DxcAccordionGroup.Accordion>
    </DxcAccordionGroup>
    </div>
  );
}`;

const scope = {
  DxcAccordionGroup,
};

export default { code, scope };
