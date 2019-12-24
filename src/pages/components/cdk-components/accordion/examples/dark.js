import { DxcAccordion } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(false);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };

  return (
    <div style={{ padding: "15px", background: "#000000" }}>
      <DxcAccordion
        theme="light"
        label="Dark theme Accordion"
        isExpanded={isExpanded}
        onChange={onChange}
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
