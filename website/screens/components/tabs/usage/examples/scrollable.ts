import { DxcTabs, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center">
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
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  useState,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
