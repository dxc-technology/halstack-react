import { DxcAccordionGroup, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [indexAccordion, setIndexAccordion] = useState(0);
  const onActiveChange = (index) => {
    setIndexAccordion((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <DxcInset space="2rem">
      <DxcAccordionGroup
        indexActive={indexAccordion}
        onActiveChange={onActiveChange}
      >
        <DxcAccordionGroup.Accordion
          label="Expanded"
          assistiveText="Additional information"
        >
          <DxcInset space="2rem">
            <DxcFlex direction="column" gap="1rem">
              <DxcHeading level={3} text="Content header" />
              <DxcInset space="0.125rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </DxcInset>
            </DxcFlex>
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion
          label="Collapsed"
          assistiveText="Additional information"
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion
          label="Collapsed"
          assistiveText="Additional information"
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordionGroup,
  DxcInset,
  DxcFlex,
  DxcHeading,
  useState,
};

export default { code, scope };
