import {
  DxcAccordion,
  DxcAccordionGroup,
  DxcStack,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const infoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );

  const successIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );

  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcAccordion label="How to edit your profile?" icon={infoIcon}>
          <DxcInset space="medium">
            To edit your profile you need to go to Settings and click on
            Profile.
          </DxcInset>
        </DxcAccordion>
        <DxcAccordionGroup defaultIndexActive={0}>
          <DxcAccordionGroup.Accordion
            label="How to edit your profile?"
            icon={successIcon}
          >
            <DxcInset space="medium">
              To edit your profile you need to go to Settings and click on
              Profile.
            </DxcInset>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion
            label="How to log out?"
            icon={successIcon}
          >
            <DxcInset space="medium">
              To edit your profile you need to go to Settings and click on Log
              out.
            </DxcInset>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcAccordionGroup,
  DxcStack,
  useState,
};

export default { code, scope };
