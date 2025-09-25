import { DxcAccordion, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [indexAccordion, setIndexAccordion] = useState(0);
  const onActiveChange = (index) => {
    setIndexAccordion((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAccordion indexActive={indexAccordion}
        onActiveChange={onActiveChange} independent>
        <DxcAccordion.AccordionItem
          label="How to edit your profile?"
        >
          <DxcInset space="var(--spacing-padding-l)">
            <DxcParagraph>To edit your profile you need to go to Settings and click on Profile.</DxcParagraph>
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcParagraph,
  useState,
};

export default { code, scope };
