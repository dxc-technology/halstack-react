import Title from "../../.storybook/components/Title";
import DxcApplicationLayout from "./ApplicationLayout";
import { userEvent, within } from "storybook/test";
import { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Application Layout",
  component: DxcApplicationLayout
} satisfies Meta<typeof DxcApplicationLayout>;

const ApplicationLayout = () => (
  <>
    <DxcApplicationLayout>
      <DxcApplicationLayout.Main>
        <Title title="Default application layout" theme="light" level={4} />
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutDefaultSidenav = () => (
  <>
    <DxcApplicationLayout
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcApplicationLayout.SideNav.Title>
              Application layout with push sidenav
            </DxcApplicationLayout.SideNav.Title>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutResponsiveSidenav = () => (
  <>
    <DxcApplicationLayout
      visibilityToggleLabel="Example"
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcApplicationLayout.SideNav.Title>
              Application layout with push sidenav
            </DxcApplicationLayout.SideNav.Title>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutCustomHeader = () => (
  <>
    <DxcApplicationLayout
      header={<p>Custom Header</p>}
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcApplicationLayout.SideNav.Title>
              Application layout with push sidenav
            </DxcApplicationLayout.SideNav.Title>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutCustomFooter = () => (
  <>
    <DxcApplicationLayout
      footer={<p>Custom Footer</p>}
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcApplicationLayout.SideNav.Title>
              Application layout with push sidenav
            </DxcApplicationLayout.SideNav.Title>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
            <p>SideNav Content</p>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const Tooltip = () => (
  <>
    <DxcApplicationLayout
      sidenav={
        <DxcApplicationLayout.SideNav>
          <DxcApplicationLayout.SideNav.Section>
            <p>SideNav Content</p>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

type Story = StoryObj<typeof DxcApplicationLayout>;

export const DefaultApplicationLayout: Story = {
  render: ApplicationLayout,
};
export const ApplicationLayoutWithDefaultSidenav: Story = {
  render: ApplicationLayoutDefaultSidenav,
};
export const ApplicationLayoutWithResponsiveSidenav: Story = {
  render: ApplicationLayoutResponsiveSidenav,
  parameters: {
    chromatic: { viewports: [540] },
  },
  globals: {
    viewport: { value: "pixel", isRotated: false },
  },
};

export const ApplicationLayoutWithCustomHeader: Story = {
  render: ApplicationLayoutCustomHeader,
};

export const ApplicationLayoutWithCustomFooter: Story = {
  render: ApplicationLayoutCustomFooter,
};

export const ApplicationLayoutTooltip: Story = {
  render: Tooltip,
  parameters: {
    chromatic: { viewports: [540] },
  },
  globals: {
    viewport: { value: "pixel", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleVisibility = await canvas.findByRole("button");
    await userEvent.hover(toggleVisibility);
  },
};
