import { DxcTabs } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = i => {
    setActiveTab(i);
  };

  return (
    <div>
      <DxcTabs
        activeTabIndex={activeTab}
        onTabClick={onTabClick}
        tabs={[
          {
            label: "Tab 1"
          },
          {
            label: "Tab 2"
          }
        ]}
      ></DxcTabs>

      {activeTab === 0 && (
        <div
          style={{ height: "200px", background: "#666666", margin: "15px" }}
        ></div>
      )}

      {activeTab === 1 && (
        <div
          style={{ height: "200px", background: "#00C9FF", margin: "15px" }}
        ></div>
      )}

    </div>
  );
}`;

const scope = {
  DxcTabs,
  useState
};

export default { code, scope };
