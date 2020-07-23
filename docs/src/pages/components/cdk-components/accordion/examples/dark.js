import { DxcAccordion } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(false);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };

  return (
    <div style={{ paddingTop: "15px", paddingBottom: "15px", background: "#000000" }}>
      <DxcAccordion
        theme="light"
        label="Dark theme Accordion"
        isExpanded={isExpanded}
        onChange={onChange}
        margin="medium"
        padding="medium"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </DxcAccordion>
    </div>
  );
}`;

const scope = {
  DxcAccordion,
  useState
};

export default { code, scope };
