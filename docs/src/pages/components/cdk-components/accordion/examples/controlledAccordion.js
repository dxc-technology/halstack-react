import { DxcAccordion } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(true);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };


  return (
    <div>
      <DxcAccordion
        label="Controlled Accordion"
        mode="alternative"
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
