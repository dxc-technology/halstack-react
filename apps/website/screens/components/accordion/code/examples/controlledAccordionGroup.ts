import { DxcAccordionGroup, DxcInset } from "@dxc-technology/halstack-react";
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
        <DxcAccordionGroup.Accordion label="How to edit your profile?">
          <DxcInset space="1.5rem">
            To edit your profile you need to go to Settings and click on
            Profile.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="How to log out?">
          <DxcInset space="1.5rem">
            To edit your profile you need to go to Settings and click on Log
            out.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordionGroup,
  DxcInset,
  useState,
};

export default { code, scope };
