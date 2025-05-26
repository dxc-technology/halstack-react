import { DxcAccordion, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAccordion>
          <DxcAccordion.AccordionItem label="How to edit your profile?" icon="filled_info"
            assistiveText="Ref - 123645" subLabel="Jan, 23 2025">
            <DxcInset space="var(--spacing-padding-l)">
              To edit your profile you need to go to Settings and click on
              Profile.
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };
