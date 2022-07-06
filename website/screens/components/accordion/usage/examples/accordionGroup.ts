import {
  DxcAccordionGroup,
  DxcInset,
  DxcStack,
  DxcHeading,
} from "@dxc-technology/halstack-react";
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
            <DxcStack gutter="1rem">
              <DxcHeading level={3} text="Content header" />
              <DxcInset space="0.125rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </DxcInset>
            </DxcStack>
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
  DxcStack,
  DxcHeading,
  useState,
};

export default { code, scope };
