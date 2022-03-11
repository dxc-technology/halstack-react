import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcTabs from "./Tabs";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Tabs",
  component: DxcTabs,
};

const iconSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

const tabs: any = [
  {
    label: "Tab 1",
  },
  {
    label: "Tab 2",
  },
  {
    label: "Tab 3",
    isDisabled: true,
  },
  {
    label: "Tab 4",
  },
];

const tabsNotification = tabs.map((tab, index) => ({
  ...tab,
  notificationNumber: (index === 0 && true) || (index === 1 && 5) || (index === 2 && 200),
}));

const tabsIcon = tabs.map((tab) => ({ ...tab, icon: iconSVG }));

const tabsNotificationIcon = tabsNotification.map((tab) => ({ ...tab, icon: iconSVG }));

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Only label" theme="light" level={4} />
      <DxcTabs tabs={tabs} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered tabs" theme="light" level={4} />
      <DxcTabs tabs={tabs} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused tabs" theme="light" level={4} />
      <DxcTabs tabs={tabs} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived tabs" theme="light" level={4} />
      <DxcTabs tabs={tabs} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With notification number" theme="light" level={4} />
      <DxcTabs tabs={tabsNotification} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position top" theme="light" level={4} />
      <DxcTabs tabs={tabsIcon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position left" theme="light" level={4} />
      <DxcTabs tabs={tabsIcon} iconPosition="left" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon and notification number" theme="light" level={4} />
      <DxcTabs tabs={tabsNotificationIcon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon on the left and notification number" theme="light" level={4} />
      <DxcTabs tabs={tabsNotificationIcon} iconPosition="left" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Scrollable" theme="light" level={4} />
      <div style={{ width: "400px" }}>
        <DxcTabs tabs={tabsNotificationIcon} iconPosition="left" activeTabIndex={1} />
      </div>
    </ExampleContainer>

    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcTabs tabs={tabs} margin="xxlarge" />
      <hr />
    </ExampleContainer>
  </>
);
