import { DxcAccordionGroup, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [indexAccordion, setIndexAccordion] = useState(0);
  const onActiveChange = (index) => {
    setIndexAccordion((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <DxcInset space="large">
      <DxcAccordionGroup
        indexActive={indexAccordion}
        onActiveChange={onActiveChange}
      >
        <DxcAccordionGroup.Accordion label="See deployments">
          <DxcInset space="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="See environments">
          <DxcInset space="medium">
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
  useState,
};

export default { code, scope };
