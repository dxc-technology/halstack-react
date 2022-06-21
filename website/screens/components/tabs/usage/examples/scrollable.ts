import { DxcTabs, DxcInset, DxcRow } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <DxcInset space="large">
      <DxcRow justify="center">
        <div style={{ width: "400px" }}>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "Mail",
              },
              {
                label: "Calendar",
              },
              {
                label: "Contacts",
              },
              {
                label: "Facebook",
              },
            ]}
          ></DxcTabs>
        </div>
      </DxcRow>
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
