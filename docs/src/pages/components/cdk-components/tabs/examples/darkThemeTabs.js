import { DxcTabs } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = i => {
    setActiveTab(i);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcTabs
        activeTabIndex={activeTab}
        onTabClick={onTabClick}
        theme="dark"
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
    </div>
  );
}`;

const scope = {
  DxcTabs,
  useState
};

export default { code, scope };
