import { DxcAccordion, DxcInset, DxcBadge, DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcAccordion defaultIndexActive={0} independent>
        <DxcAccordion.AccordionItem
          label="Parent"
        >
          <DxcInset space="var(--spacing-padding-l)">
            <DxcAccordion>
              <DxcAccordion.AccordionItem
                label="Child"
              >
                <DxcInset space="var(--spacing-padding-l)">
                  Details
                </DxcInset>
              </DxcAccordion.AccordionItem>
            </DxcAccordion>
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
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
