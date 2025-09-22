import { DxcAccordion, DxcFlex, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAccordion>
          <DxcAccordion.AccordionItem label="How to edit your profile?" icon="filled_info"
            assistiveText="Ref — 123645" subLabel="Jan, 23 2025">
            <DxcInset space="var(--spacing-padding-l)">
              <DxcParagraph>To edit your profile you need to go to Settings and click on
              Profile.</DxcParagraph>
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
  DxcParagraph,
  useState,
};

export default { code, scope };
