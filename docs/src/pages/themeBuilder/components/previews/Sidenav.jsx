import React from "react";
import styled from "styled-components";
import { DxcSidenav } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const SideNav = () => {
  return (
    <SideNavContainer>
      <Mode text="Default">
        <DxcSidenav title={<DxcSidenav.Title>My sidenav</DxcSidenav.Title>}>
          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
          </DxcSidenav.Section>

          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <DxcSidenav.Group title="Group title">
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
          </DxcSidenav.Section>
        </DxcSidenav>
      </Mode>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div``;

export default SideNav;
