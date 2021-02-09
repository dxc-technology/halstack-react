import { DxcAccordionGroup } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [indexAccordion, setIndexAccordion] = useState(0);

  const onActiveChange = (i) => {
    setIndexAccordion(i);
  };

  return (
    <div>
      <DxcAccordionGroup
        indexActive={indexAccordion}
        onActiveChange={onActiveChange}
        margin="medium"
      >
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
  useState
};

export default { code, scope };
