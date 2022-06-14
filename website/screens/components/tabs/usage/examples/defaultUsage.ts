import { DxcTabs, DxcInset, DxcRow } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <DxcInset space="large">
      <div>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
          ]}
        ></DxcTabs>
      </div>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  useState,
  DxcInset,
  DxcRow,
};

export default { code, scope };
