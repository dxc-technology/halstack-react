import { userEvent, within } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcInset from "../inset/Inset";
import DxcSelect from "../select/Select";
import DxcSidenav from "./Sidenav";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Sidenav",
  component: DxcSidenav,
} as Meta<typeof DxcSidenav>;

const iconSVG = (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const TitleComponent = () => {
  return <DxcSidenav.Title>Dxc technology</DxcSidenav.Title>;
};

const opinionatedTheme = {
  sidenav: {
    baseColor: "#f2f2f2",
  },
};

const SideNav = () => (
  <>
    <ExampleContainer>
      <Title title="Default sidenav" theme="light" level={4} />
      <DxcSidenav title={<DxcSidenav.Title>Dxc technology</DxcSidenav.Title>}>
        <DxcSidenav.Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper consectetur mollis. Suspendisse
            vitae lacinia libero.
          </p>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Link>Single Link</DxcSidenav.Link>
          <DxcSidenav.Group collapsable={false} title="Single Group" icon={iconSVG}>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Section Group" icon="filled_bottom_app_bar">
            <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link icon={iconSVG}>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
          <DxcSidenav.Link icon="filled_bottom_app_bar" newWindow>
            Single Link
          </DxcSidenav.Link>
          <DxcSidenav.Link newWindow>Single Link</DxcSidenav.Link>
          <DxcSidenav.Group collapsable={false} title="Section Group">
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcSidenav>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused options sidenav" theme="light" level={4} />
      <DxcSidenav title={<DxcSidenav.Title>Dxc technology</DxcSidenav.Title>}>
        <DxcSidenav.Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper consectetur mollis. Suspendisse
            vitae lacinia libero.
          </p>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Link>Single Link</DxcSidenav.Link>
          <DxcSidenav.Group collapsable={true} title="Collapsable Group">
            <DxcSidenav.Link icon="filled_bottom_app_bar">Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Collapsable Group">
            <DxcSidenav.Link selected icon={iconSVG}>
              Group Link
            </DxcSidenav.Link>
          </DxcSidenav.Group>
          <DxcSidenav.Group collapsable={false} title="Section Group">
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcSidenav>
    </ExampleContainer>
  </>
);

const CollapsedGroupSidenav = () => (
  <>
    <ExampleContainer>
      <Title title="Collapsed group with a selected link" theme="light" level={4} />
      <DxcSidenav title={<DxcSidenav.Title>Dxc technology</DxcSidenav.Title>}>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Collapsed Group" icon={iconSVG}>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
        <DxcSidenav.Section>
          <DxcSidenav.Group collapsable={true} title="Collapsed Group">
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
          <DxcSidenav.Group collapsable={true} title="Section Group">
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
            <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcSidenav>
    </ExampleContainer>
  </>
);

const HoveredGroupSidenav = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Hover state for groups (selected and not)" theme="light" level={4} />
    <DxcSidenav title={<DxcSidenav.Title>Dxc technology</DxcSidenav.Title>}>
      <DxcSidenav.Section>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Group collapsable={true} title="Collapsed Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
      <DxcSidenav.Section>
        <DxcSidenav.Group collapsable={true} title="Not Collapsed Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Group collapsable={true} title="Collapsed Group">
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
        <DxcSidenav.Group collapsable={true} title="Collapsed Group">
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
    </DxcSidenav>
  </ExampleContainer>
);

const ActiveGroupSidenav = () => (
  <ExampleContainer pseudoState="pseudo-active">
    <Title title="Active state for groups (selected and not)" theme="light" level={4} />
    <DxcSidenav title={<DxcSidenav.Title>Dxc technology</DxcSidenav.Title>}>
      <DxcSidenav.Section>
        <DxcInset space="var(--spacing-padding-m)">
          <DxcSelect
            defaultValue="1"
            options={[
              { label: "v1.0.0", value: "1" },
              { label: "v2.0.0", value: "2" },
              { label: "v3.0.0", value: "3" },
              { label: "v4.0.0", value: "4" },
            ]}
            size="fillParent"
          />
        </DxcInset>
      </DxcSidenav.Section>
      <DxcSidenav.Section>
        <DxcSidenav.Group collapsable={true} title="Collapsed Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
      </DxcSidenav.Section>
      <DxcSidenav.Section>
        <DxcSidenav.Group collapsable={true} title="Not Collapsed Group">
          <DxcSidenav.Link selected>Group Link</DxcSidenav.Link>
          <DxcSidenav.Link>Group Link</DxcSidenav.Link>
        </DxcSidenav.Group>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
        <DxcSidenav.Link>Single Link</DxcSidenav.Link>
      </DxcSidenav.Section>
    </DxcSidenav>
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcSidenav>;

export const Chromatic: Story = {
  render: SideNav,
};

export const CollapsableGroup: Story = {
  render: CollapsedGroupSidenav,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapsableGroups = canvas.getAllByText("Collapsed Group");
    collapsableGroups.forEach((group) => {
      userEvent.click(group);
    });
  },
};

export const CollapsedHoverGroup: Story = {
  render: HoveredGroupSidenav,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapsableGroups = canvas.getAllByText("Collapsed Group");
    collapsableGroups.forEach((group) => {
      userEvent.click(group);
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const CollapsedActiveGroup: Story = {
  render: ActiveGroupSidenav,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapsableGroups = canvas.getAllByText("Collapsed Group");
    collapsableGroups[0] && userEvent.click(collapsableGroups[0]);
  },
};
