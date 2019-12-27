import React, { useState } from "react";
import { DxcTabs } from "@diaas/dxc-react-cdk";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = i => {
    setActiveTab(i);
  };

  return (
    <DxcTabs
      activeTabIndex={activeTab}
      onTabClick={onTabClick}
      mode="underlined"
      margin="medium"
      tabs={[
        {
          label: "Tab 1"
        },
        {
          label: "Tab 2"
        },
        {
          label: "Tab 3"
        }
      ]}
    ></DxcTabs>
  );
}

export default Tabs;
