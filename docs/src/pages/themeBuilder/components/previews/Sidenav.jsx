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
          <DxcSidenav.Link href="#">Button</DxcSidenav.Link>
          <DxcSidenav.Link href="#">Date</DxcSidenav.Link>
          <DxcSidenav.Subtitle>Guidelines</DxcSidenav.Subtitle>
          <DxcSidenav.Link href="#" onClick={linkClick}>Layout</DxcSidenav.Link>
          <DxcSidenav.Link href="#" onClick={linkClick}>Footer</DxcSidenav.Link>
        </DxcSidenav>
      </Mode>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div``;

export default SideNav;
