import {
  DxcAccordion,
  DxcInset,
  DxcFlex,
  DxcHeading,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isExpandedCollapsed, changeIsExpandedCollapsed] = useState(false);
  const onChangeCollapsed = (newValue) => {
    changeIsExpandedCollapsed(newValue);
  };
  const [isExpanded, changeIsExpanded] = useState(true);
  const onChangeExpanded = (newValue) => {
    changeIsExpanded(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcAccordion
          label="Collapsed"
          isExpanded={isExpandedCollapsed}
          onChange={onChangeCollapsed}
        >
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordion>
        <DxcAccordion
          label="Expanded"
          isExpanded={isExpanded}
          onChange={onChangeExpanded}
        >
          <DxcInset space="2rem">
            <DxcFlex direction="column" gap="1rem">
              <DxcHeading level={3} text="Content header" />
              <DxcInset space="0.125rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </DxcInset>
            </DxcFlex>
          </DxcInset>
        </DxcAccordion>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcFlex,
  DxcHeading,
  useState,
};

export default { code, scope };
