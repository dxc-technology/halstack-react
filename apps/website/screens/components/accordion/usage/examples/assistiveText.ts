import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(false);
  const onChange = (newValue) => {
    changeIsExpanded(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcAccordion
        label="Collapsed accordion"
        assistiveText="Additional information"
        isExpanded={isExpanded}
        onChange={onChange}
      >
        <DxcInset space="2rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
