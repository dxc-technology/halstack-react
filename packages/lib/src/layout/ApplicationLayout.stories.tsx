import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Title from "../../.storybook/components/Title";
import DxcApplicationLayout from "./ApplicationLayout";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Application Layout",
  component: DxcApplicationLayout,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const DefaultApplicationLayout = () => (
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

export const ApplicationLayoutWithDefaultSidenav = () => (
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

export const ApplicationLayoutWithResponsiveSidenav = () => (
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

ApplicationLayoutWithResponsiveSidenav.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
  chromatic: { viewports: [540] },
};

export const ApplicationLayoutWithCustomHeader = () => (
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

export const ApplicationLayoutWithCustomFooter = () => (
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

export const ApplicationLayoutTooltip = Tooltip.bind({});
ApplicationLayoutTooltip.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
  chromatic: { viewports: [540] },
};
ApplicationLayoutTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const toggleVisibility = await canvas.findByRole("button");
  await userEvent.hover(toggleVisibility);
};
