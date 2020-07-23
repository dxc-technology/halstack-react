import { DxcAccordion } from "@dxc-technology/halstack-react";
import { useState } from "react";
import homeLogo from "./images/home.svg";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(false);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };

  return (
    <div>
      <DxcAccordion
        label="Accordion with icon"
        onChange={onChange}
        iconSrc={homeLogo}
        isExpanded={isExpanded}
        iconPosition="before"
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
  useState,
  homeLogo
};

export default { code, scope };
