import React from "react";
import styled from "styled-components";
import { DxcSidenav } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const SideNav = () => {
  const linkClick = () => {
    console.log("click");
  };

  return (
    <SideNavContainer>
      <Mode text="Default">
        <DxcSidenav>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </DxcSidenav>
      </Mode>
      <Mode text="With compound components">
        <DxcSidenav padding="xsmall">
          <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
          <p>This is a sidenav.</p>
          <DxcSidenav.Subtitle>Components</DxcSidenav.Subtitle>
            <DxcSidenav.Link href={false}>Button</DxcSidenav.Link>
            <DxcSidenav.Link href={false}>Date</DxcSidenav.Link>
          <DxcSidenav.Subtitle>Guidelines</DxcSidenav.Subtitle>
            <DxcSidenav.Link href={false} onClick={linkClick}>
              Layout
            </DxcSidenav.Link>
            <DxcSidenav.Link href={false} onClick={linkClick}>
              Footer
            </DxcSidenav.Link>
        </DxcSidenav>
      </Mode>
      <Mode text="With scroll">
        <SidenavWithScroll>
          <DxcSidenav padding="xsmall">
            <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <DxcSidenav.Subtitle>Subtitle 1</DxcSidenav.Subtitle>
              <DxcSidenav.Link href={false}>Link 1</DxcSidenav.Link>
              <DxcSidenav.Link href={false}>Link 2</DxcSidenav.Link>
            <DxcSidenav.Subtitle>Subtitle 2</DxcSidenav.Subtitle>
              <DxcSidenav.Link href={false}>Link 3</DxcSidenav.Link>
              <DxcSidenav.Link href={false}>Link 4</DxcSidenav.Link>
            <DxcSidenav.Subtitle>Subtitle 3</DxcSidenav.Subtitle>
              <DxcSidenav.Link href={false}>Link 5</DxcSidenav.Link>
              <DxcSidenav.Link href={false}>Link 6</DxcSidenav.Link>
            <DxcSidenav.Subtitle>Subtitle 4</DxcSidenav.Subtitle>
              <DxcSidenav.Link href={false}>Link 7</DxcSidenav.Link>
              <DxcSidenav.Link href={false}>Link 8</DxcSidenav.Link>
            <DxcSidenav.Subtitle>Subtitle 5</DxcSidenav.Subtitle>
              <DxcSidenav.Link href={false}>Link 9</DxcSidenav.Link>
              <DxcSidenav.Link href={false}>Link 10</DxcSidenav.Link>
          </DxcSidenav>
        </SidenavWithScroll>
      </Mode>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div``;

const SidenavWithScroll = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  margin-bottom: 50px;
`;

export default SideNav;
