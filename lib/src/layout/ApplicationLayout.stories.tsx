import React from "react";
import DxcApplicationLayout from "./ApplicationLayout";
import DxcSidenav from "../sidenav/Sidenav";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import styled from "styled-components";

export default {
  title: "Application Layout ",
  component: DxcApplicationLayout,
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledResponsiveContainer = styled.div`
  width: 750px;
  height: 100vh;
  position: relative;
`;

export const DefaultApplicationLayout = () => (
  <>
    <StyledContainer>
      <DxcApplicationLayout>
        <DxcApplicationLayout.Main>
          <Title title="Default application layout" theme="light" level={4} />
          <p>Main Content</p>
          <p>Main Content</p>
          <p>Main Content</p>
          <p>Main Content</p>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </StyledContainer>
  </>
);

export const ApplicationLayoutWithDefaultSidenav = () => (
  <>
    <StyledContainer>
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
    </StyledContainer>
  </>
);

export const ApplicationLayoutWithPushSidenav = () => (
  <>
    <StyledContainer>
      <DxcApplicationLayout>
        <DxcApplicationLayout.SideNav mode="push">
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
    </StyledContainer>
  </>
);

export const ApplicationLayoutWithArrowSidenav = () => (
  <>
    <StyledContainer>
      <DxcApplicationLayout>
        <DxcApplicationLayout.SideNav displayArrow>
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
    </StyledContainer>
  </>
);

export const ApplicationLayoutWithResponsiveSidenav = () => (
  <>
    <StyledResponsiveContainer>
      <DxcApplicationLayout>
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
    </StyledResponsiveContainer>
  </>
);
