import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcContainer from "../container/Container";
import DxcNavTabs from "./NavTabs";

export default {
  title: "Nav Tabs",
  component: DxcNavTabs,
} as Meta<typeof DxcNavTabs>;

const iconSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const favoriteIcon = "filled_Favorite";

const pinIcon = "Location_On";

const NavTabs = () => (
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
        <DxcNavTabs.Tab href="#" active icon={iconSVG}>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={iconSVG}>
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
      <Title title="NavTabs in a limited space container" theme="light" level={4} />
      <DxcContainer width="500px">
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
      </DxcContainer>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcNavTabs>;

export const Chromatic: Story = {
  render: NavTabs,
};
