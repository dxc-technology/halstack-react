import React from "react";
import DxcApplicationLayout from "./ApplicationLayout";
import DxcSidenav from "../sidenav/Sidenav";
import Title from "../../.storybook/components/Title";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Application Layout ",
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
    <DxcApplicationLayout>
      <DxcApplicationLayout.SideNav>
        <DxcSidenav.Title>Application layout with sidenav</DxcSidenav.Title>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
      </DxcApplicationLayout.SideNav>
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
    <DxcApplicationLayout visibilityToggleLabel="Example">
      <DxcApplicationLayout.SideNav>
        <DxcSidenav.Title>Application layout with push sidenav</DxcSidenav.Title>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
      </DxcApplicationLayout.SideNav>
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
};

export const ApplicationLayoutWithCustomHeader = () => (
  <>
    <DxcApplicationLayout>
      <DxcApplicationLayout.Header>
        {" "}
        <p>Custom Header</p>{" "}
      </DxcApplicationLayout.Header>
      <DxcApplicationLayout.SideNav>
        <DxcSidenav.Title>Application layout with custom header</DxcSidenav.Title>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
      </DxcApplicationLayout.SideNav>
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
    <DxcApplicationLayout>
      <DxcApplicationLayout.SideNav>
        <DxcSidenav.Title>Application layout with custom footer</DxcSidenav.Title>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
      </DxcApplicationLayout.SideNav>
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
      <DxcApplicationLayout.Footer>
        <p>Custom Footer</p>
      </DxcApplicationLayout.Footer>
    </DxcApplicationLayout>
  </>
);
