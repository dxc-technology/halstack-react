import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcContainer from "../container/Container";
import DxcNavTabs from "./NavTabs";

export default {
  title: "Nav Tabs",
  component: DxcNavTabs,
} satisfies Meta<typeof DxcNavTabs>;

const iconSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

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
    <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
      <Title title="Active tabs" theme="light" level={4} />
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
      <DxcNavTabs iconPosition="top">
        <DxcNavTabs.Tab href="#" active icon={iconSVG}>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={iconSVG}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="Location_On">
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="Location_On">
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position left" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active icon="Location_On">
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon="filled_Favorite">
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite">
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite">
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position top and notification number" theme="light" level={4} />
      <DxcNavTabs iconPosition="top">
        <DxcNavTabs.Tab href="#" active icon="Location_On" notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon="filled_Favorite" notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite" notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="Location_On" notificationNumber={12}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon position left and notification number" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active icon="filled_Favorite" notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon="filled_Favorite" notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="Location_On" notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite" notificationNumber={12}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With long label and icon position top" theme="light" level={4} />
      <DxcNavTabs iconPosition="top">
        <DxcNavTabs.Tab href="#" active>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite" disabled notificationNumber={3}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite">
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With long label and left icon alignment" theme="light" level={4} />
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite" disabled notificationNumber={3}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite">
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With limited space" theme="light" level={4} />
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

const Scroll = () => (
  <>
    <Title title="Scrollable tabs" theme="light" level={2} />
    <ExampleContainer>
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active icon="filled_Favorite" notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon="filled_Favorite" notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="Location_On" notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="filled_Favorite" notificationNumber={12}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcNavTabs>;

export const Chromatic: Story = {
  render: NavTabs,
};

export const ScrollableNavTabs: Story = {
  render: Scroll,
  parameters: {
    chromatic: { viewports: [375], delay: 5000 },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
};
