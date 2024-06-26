import React, { useState } from "react";
import styled from "styled-components";
import { DxcFlex, DxcTabs } from "@repo/ui";
import Mode from "../Mode";
import xIcon from "../../images/XIcon";
import PreviewContainer from "./PreviewContainer";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i: number) => {
    setActiveTab(i);
  };
  const [disabledActiveTab, setDisabledActiveTab] = useState(0);
  const onDisabledTabClick = (i: number) => {
    setDisabledActiveTab(i);
  };
  const [notificationActiveTab, setNotificationActiveTab] = useState(0);
  const onNotificationActiveTab = (i: number) => {
    setNotificationActiveTab(i);
  };
  const [largeActiveTab, setLargeActiveTab] = useState(0);
  const onLargeActiveTab = (i: number) => {
    setLargeActiveTab(i);
  };

  return (
    <PreviewContainer>
      <Mode text="Default with content">
        <DxcFlex direction="column">
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
          />
          {activeTab === 0 && <TabContentContainer backgroundColor="#fabada">Content 1</TabContentContainer>}
          {activeTab === 1 && <TabContentContainer backgroundColor="#7ce3ff">Content 2</TabContentContainer>}
          {activeTab === 2 && <TabContentContainer backgroundColor="#beffa4">Content 3</TabContentContainer>}
        </DxcFlex>
      </Mode>
      <Mode text="Disabled">
        <DxcTabs
          activeTabIndex={disabledActiveTab}
          onTabClick={onDisabledTabClick}
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
              icon: xIcon,
              isDisabled: true,
            },
            {
              label: "Tab 3",
            },
          ]}
        />
      </Mode>
      <Mode text="With notifications">
        <DxcTabs
          activeTabIndex={notificationActiveTab}
          onTabClick={onNotificationActiveTab}
          tabs={[
            {
              label: "Tab 1",
              icon: xIcon,
              notificationNumber: 30,
            },
            {
              label: "Tab 2",
              icon: xIcon,
              notificationNumber: 152,
            },
            {
              label: "Tab 3",
              icon: xIcon,
              notificationNumber: true,
            },
            {
              label: "Tab 4",
              icon: xIcon,
              notificationNumber: false,
            },
            {
              label: "Tab 5",
              icon: xIcon,
              isDisabled: true,
              notificationNumber: true,
            },
          ]}
        />
      </Mode>
      <Mode text="With scroll buttons">
        <LargeTabsContainer>
          <DxcTabs
            activeTabIndex={largeActiveTab}
            onTabClick={onLargeActiveTab}
            tabs={[
              { label: "Tab 1" },
              { label: "Tab 2" },
              { label: "Tab 3" },
              { label: "Tab 4" },
              { label: "Tab 5" },
              { label: "Tab 6" },
              { label: "Tab 7" },
              { label: "Tab 8" },
              { label: "Tab 9" },
              { label: "Tab 10" },
              { label: "Tab 11" },
              { label: "Tab 12" },
              { label: "Tab 13" },
              { label: "Tab 14" },
              { label: "Tab 15" },
              { label: "Tab 16" },
              { label: "Tab 17" },
              { label: "Tab 18" },
              { label: "Tab 19" },
              { label: "Tab 20" },
            ]}
          />
        </LargeTabsContainer>
      </Mode>
    </PreviewContainer>
  );
};

const LargeTabsContainer = styled.div`
  width: 900px;
`;

const TabContentContainer = styled.div<{ backgroundColor: string }>`
  height: 150px;
  background: ${(props) => props.backgroundColor};
  margin: 15px;
  padding: 10px;
`;

export default Tabs;
