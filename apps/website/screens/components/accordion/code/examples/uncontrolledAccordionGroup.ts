import { DxcAccordionGroup, DxcInset } from "@repo/ui";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordionGroup defaultIndexActive={0}>
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
