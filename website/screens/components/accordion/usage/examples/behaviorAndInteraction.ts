import {
  DxcAccordion,
  DxcInset,
  DxcStack,
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
      <DxcStack gutter="large">
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
            <DxcStack gutter="small">
              <DxcHeading level={3} text="Content header" />
              <DxcInset space="0.125rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </DxcInset>
            </DxcStack>
          </DxcInset>
        </DxcAccordion>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  DxcStack,
  DxcHeading,
  useState,
};

export default { code, scope };
