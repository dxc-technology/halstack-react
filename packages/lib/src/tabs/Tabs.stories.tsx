import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { HalstackProvider } from "../HalstackContext";
import DxcTabs from "./Tabs";
import type { Space } from "./types";

export default {
  title: "Tabs",
  component: DxcTabs,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

const iconSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" fill="currentColor">
    <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
  </svg>
);

const tabs = (margin?: Space) => (
  <DxcTabs margin={margin}>
    <DxcTabs.Tab label="Tab 1" title="test tooltip">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 4">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 5">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 6">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 7">
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const disabledTabs = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab 1" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3" disabled>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const disabledTabsFirstActive = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab 1" active disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3" disabled>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const firstDisabledTabs = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab 1" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3">
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const tabsNotification = (iconPosition?: "top" | "left") => (
  <DxcTabs iconPosition={iconPosition}>
    <DxcTabs.Tab label="Tab 1" notificationNumber={true}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2" notificationNumber={5}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3" notificationNumber={100} disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 4" notificationNumber={200}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 5">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 6">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 7">
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const tabsIcon = (iconPosition?: "top" | "left") => (
  <DxcTabs iconPosition={iconPosition}>
    <DxcTabs.Tab label="Tab 1" icon={iconSVG}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2" icon={iconSVG}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3" icon={iconSVG} disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 4" icon={iconSVG}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 5" icon="mail">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 6" icon="mail">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 7" icon="mail">
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const tabsNotificationIcon = (iconPosition?: "top" | "left") => (
  <DxcTabs iconPosition={iconPosition}>
    <DxcTabs.Tab label="Tab 1" icon={iconSVG} notificationNumber={true}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 2" icon={iconSVG} notificationNumber={5}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 3" icon={iconSVG} notificationNumber={100} disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 4" icon={iconSVG} notificationNumber={200}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 5" icon={iconSVG}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 6" icon={iconSVG}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab 7" icon={iconSVG}>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const opinionatedTheme = {
  tabs: {
    baseColor: "#5f249f",
  },
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Only label" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled tabs" theme="light" level={4} />
      {disabledTabs}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="First two tabs disabled" theme="light" level={4} />
      {firstDisabledTabs}
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered tabs" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused tabs" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived tabs" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With notification number" theme="light" level={4} />
      {tabsNotification()}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position top" theme="light" level={4} />
      {tabsIcon()}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position left" theme="light" level={4} />
      {tabsIcon("left")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon and notification number" theme="light" level={4} />
      {tabsNotificationIcon()}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon on the left and notification number" theme="light" level={4} />
      {tabsNotificationIcon("left")}
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      {tabs("xxsmall")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      {tabs("xsmall")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      {tabs("small")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      {tabs("medium")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      {tabs("large")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      {tabs("xlarge")}
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      {tabs("xxlarge")}
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="With icon and notification" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>{tabsNotificationIcon()}</HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>{disabledTabsFirstActive}</HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>{tabs()}</HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>{tabs()}</HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>{tabs()}</HalstackProvider>
    </ExampleContainer>
  </>
);

export const ScrollableTabs = () => (
  <>
    <ExampleContainer>
      <Title title="Only label" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered tabs" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused tabs" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived tabs" theme="light" level={4} />
      {tabs()}
    </ExampleContainer>
  </>
);

ScrollableTabs.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375], delay: 5000 },
};
