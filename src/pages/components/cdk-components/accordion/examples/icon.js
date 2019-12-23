import { DxcAccordion } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import homeLogo from "./images/home.svg";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(false);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };

  return (
    <div style={{ margin: "15px" }}>
      <DxcAccordion
        label="Accordion with icon"
        onChange={onChange}
        iconSrc={homeLogo}
        isExpanded={isExpanded}
        iconPosition="before"
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
  useState,
  homeLogo
};

export default { code, scope };
