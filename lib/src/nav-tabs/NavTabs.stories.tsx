import React from "react";
import DxcNavTabs from "./NavTabs";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Nav Tabs",
  component: DxcNavTabs,
};

const favoriteIcon = 'filled_Favorite'

const pinIcon = 'Location_On';

const opinionatedTheme = {
  navTabs: {
    baseColor: "#666666",
    accentColor: "#5f249f",
  },
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Only label" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered tabs" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused tabs" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived tabs" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With notification number" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" notificationNumber={12}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position top" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active icon={favoriteIcon}>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={favoriteIcon}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={pinIcon}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={pinIcon}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position left" theme="light" level={4} />
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="#" active icon={pinIcon}>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={favoriteIcon}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon and notification number" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active icon={pinIcon} notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={favoriteIcon} notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon} notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={pinIcon} notificationNumber={12}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon on the left and notification number" theme="light" level={4} />
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="#" active icon={favoriteIcon} notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={favoriteIcon} notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={pinIcon} notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon} notificationNumber={12}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With long label" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon} disabled notificationNumber={3}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon}>
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With long label and left icon alignment" theme="light" level={4} />
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="#" active>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon} disabled notificationNumber={3}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={favoriteIcon}>
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Only label" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="#" active>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" disabled>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
        </DxcNavTabs>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered tabs" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="#" active>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" disabled>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
        </DxcNavTabs>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused tabs" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="#" active>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" disabled>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
        </DxcNavTabs>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived tabs" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="#" active>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" disabled>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
        </DxcNavTabs>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon and notification number" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="#" active icon={favoriteIcon} notificationNumber>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" disabled icon={favoriteIcon} notificationNumber={5}>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" icon={favoriteIcon} notificationNumber={120}>
            Tab 3
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" icon={favoriteIcon} notificationNumber={12}>
            Tab 4
          </DxcNavTabs.Tab>
        </DxcNavTabs>
      </HalstackProvider>
    </ExampleContainer>
  </>
);
