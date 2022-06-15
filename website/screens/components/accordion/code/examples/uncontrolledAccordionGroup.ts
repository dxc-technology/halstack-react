import { DxcAccordionGroup, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcAccordionGroup defaultIndexActive={0}>
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
