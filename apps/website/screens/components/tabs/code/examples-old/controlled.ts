import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
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
