import { Meta, StoryObj } from "@storybook/react-vite";
import Title from "../../.storybook/components/Title";
import DxcApplicationLayout from "./ApplicationLayout";
import { userEvent, within } from "storybook/internal/test";

export default {
  title: "Application Layout",
  component: DxcApplicationLayout,
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

const items = [
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
];

const ApplicationLayoutDefaultSidenav = () => (
  <>
    <DxcApplicationLayout
      sidenav={
        <DxcApplicationLayout.Sidenav
          branding={{ appTitle: "Application layout with push sidenav" }}
          navItems={items}
        />
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
      sidenav={
        <DxcApplicationLayout.Sidenav
          branding={{ appTitle: "Application layout with push sidenav" }}
          navItems={items}
          defaultExpanded={false}
        />
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
        <DxcApplicationLayout.Sidenav
          branding={{ appTitle: "Application layout with push sidenav" }}
          navItems={items}
        />
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
        <DxcApplicationLayout.Sidenav
          branding={{ appTitle: "Application layout with push sidenav" }}
          navItems={items}
        />
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
  <DxcApplicationLayout
    sidenav={
      <DxcApplicationLayout.Sidenav branding={{ appTitle: "Application layout with push sidenav" }} navItems={items} />
    }
  >
    <DxcApplicationLayout.Main>
      <p>Main Content</p>
    </DxcApplicationLayout.Main>
  </DxcApplicationLayout>
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButton = (await canvas.findAllByRole("button"))[0];
    if (collapseButton) {
      await userEvent.click(collapseButton);
    }
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
    const collapseButton = (await canvas.findAllByRole("button"))[0];
    if (collapseButton) {
      await userEvent.hover(collapseButton);
    }
  },
};
