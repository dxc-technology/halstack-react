import React, { useState } from "react";
import styled from "styled-components";
import { DxcTabs } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import twitterIcon from "../../images/TwitterIcon";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };
  return (
    <TabsContainer>
      <Mode text="Default">
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
              icon: twitterIcon,
            },
            {
              label: "Tab 3",
              icon: twitterIcon,
              notificationNumber: 10,
            },
          ]}
        ></DxcTabs>
      </Mode>
      <Mode text="Disabled">
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
              isDisabled: "true",
            },
            {
              label: "Tab 3",
            },
          ]}
        ></DxcTabs>
      </Mode>
    </TabsContainer>
  );
};

const TabsContainer = styled.div``;

export default Tabs;
