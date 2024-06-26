import { DxcAccordion, DxcInset } from "@repo/ui";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(true);
  const onChange = (newValue) => {
    changeIsExpanded(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcAccordion
        label="How to edit your profile?"
        isExpanded={isExpanded}
        onChange={onChange}
      >
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
