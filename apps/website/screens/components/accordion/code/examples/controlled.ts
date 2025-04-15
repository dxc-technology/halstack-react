import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [indexAccordion, setIndexAccordion] = useState(0);
  const onActiveChange = (index) => {
    setIndexAccordion((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <DxcInset space="2rem">
      <DxcAccordion indexActive={indexAccordion}
        onActiveChange={onActiveChange} independent={true}>
        <DxcAccordion.AccordionItem
          label="How to edit your profile?"
        >
          <DxcInset space="var(--spacing-padding-l)">
            To edit your profile you need to go to Settings and click on Profile.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  useState,
};

export default { code, scope };
