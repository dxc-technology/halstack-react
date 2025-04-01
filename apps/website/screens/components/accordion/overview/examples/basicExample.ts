import { DxcAccordion, DxcInset, DxcBadge, DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1rem">
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            label="Hello world">
            <DxcInset space="1.5rem">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            label="Hello world"
            icon="filled_mail"
            subLabel="Jan, 09 2025"
          >
            <DxcInset space="1.5rem">
              Details
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcBadge,
  DxcFlex,
  DxcStatusLight,
  useState,
};

export default { code, scope };
