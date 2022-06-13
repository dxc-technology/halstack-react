import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <DxcInset space="large">
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
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  useState,
  DxcInset,
};

export default { code, scope };
