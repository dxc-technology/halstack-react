import { DxcAccordion, DxcInset, DxcBadge, DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordion defaultIndexActive={0} independent>
        <DxcAccordion.AccordionItem
          label="Parent"
        >
          <DxcInset space="1.5rem">
            <DxcAccordion>
              <DxcAccordion.AccordionItem
                label="Child"
              >
                <DxcInset space="1.5rem">
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
