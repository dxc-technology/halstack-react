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
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcAccordion
          label="Collapsed"
          isExpanded={isExpandedCollapsed}
          onChange={onChangeCollapsed}
          padding="medium"
        >
          <DxcInset space="xxxsmall">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordion>
        <DxcAccordion
          label="Expanded"
          isExpanded={isExpanded}
          onChange={onChangeExpanded}
        >
          <DxcInset space="large">
            <DxcStack gutter="small">
              <DxcHeading level={3} text="Content header" />
              <DxcInset space="xxxsmall">
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
