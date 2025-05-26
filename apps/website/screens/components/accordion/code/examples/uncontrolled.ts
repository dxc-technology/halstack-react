import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAccordion defaultIndexActive={0} independent={true}>
        <DxcAccordion.AccordionItem label="How to edit your profile?">
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
