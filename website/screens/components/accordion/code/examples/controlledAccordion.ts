import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(true);
  const onChange = (newValue) => {
    changeIsExpanded(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcAccordion
        label="Controlled"
        isExpanded={isExpanded}
        assistiveText="Additional information"
        onChange={onChange}
      >
        <DxcInset space="large">
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
