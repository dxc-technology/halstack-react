import { DxcTabs } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };
  const iconSVG = () => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  };
  return (
    <DxcTabs
      onTabClick={onTabClick}
      tabs={[
        {
          label: "Tab 1",
          icon: iconSVG,
          notificationNumber: 30,
        },
        {
          label: "Tab 2",
          icon: iconSVG,
          notificationNumber: 152,
        },
        {
          label: "Tab 3",
          icon: iconSVG,
          notificationNumber: true,
        },
        {
          label: "Tab 4",
          icon: iconSVG,
          notificationNumber: false,
        },
      ]}
    ></DxcTabs>
  );
}`;

const scope = {
  DxcTabs,
  useState,
};

export default { code, scope };
