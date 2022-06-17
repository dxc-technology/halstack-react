import { DxcAccordionGroup, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcAccordionGroup defaultIndexActive={0}>
        <DxcAccordionGroup.Accordion label="How to edit your profile?">
          <DxcInset space="medium">
            To edit your profile you need to go to Settings and click on
            Profile.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="How to log out?">
          <DxcInset space="medium">
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
