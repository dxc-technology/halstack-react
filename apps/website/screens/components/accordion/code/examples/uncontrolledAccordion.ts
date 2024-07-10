import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAccordion label="How to edit your profile?" defaultIsExpanded>
        <DxcInset space="1.5rem">
          To edit your profile you need to go to Settings and click on Profile.
        </DxcInset>
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
