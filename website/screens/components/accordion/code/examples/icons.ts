import {
  DxcAccordion,
  DxcAccordionGroup,
  DxcFlex,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcAccordion label="How to edit your profile?" icon="filled_info">
          <DxcInset space="1.5rem">
            To edit your profile you need to go to Settings and click on
            Profile.
          </DxcInset>
        </DxcAccordion>
        <DxcAccordionGroup defaultIndexActive={0}>
          <DxcAccordionGroup.Accordion
            label="How to edit your profile?"
            icon="filled_check_circle"
          >
            <DxcInset space="1.5rem">
              To edit your profile you need to go to Settings and click on
              Profile.
            </DxcInset>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion
            label="How to log out?"
            icon="filled_check_circle"
          >
            <DxcInset space="1.5rem">
              To edit your profile you need to go to Settings and click on Log
              out.
            </DxcInset>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcAccordionGroup,
  DxcFlex,
  useState,
};

export default { code, scope };
