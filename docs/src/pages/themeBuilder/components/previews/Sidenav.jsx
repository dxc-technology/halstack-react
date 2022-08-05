import React from "react";
import styled from "styled-components";
import { DxcSidenav } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const SideNav = () => {
  return (
    <SidenavContainer>
      <Mode text="Default">
        <DxcSidenav title={<DxcSidenav.Title>My sidenav</DxcSidenav.Title>}>
          <DxcSidenav.Section>
            <p>Lorem ipsum</p>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
            <DxcSidenav.Group title="Group title" collapsable>
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
            </DxcSidenav.Group>
            <DxcSidenav.Group title="Group title" collapsable>
              <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            </DxcSidenav.Group>
          </DxcSidenav.Section>
        </DxcSidenav>
      </Mode>
      <Mode text="With scroll">
        <SidenavWithScroll>
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
        </SidenavWithScroll>
      </Mode>
    </SidenavContainer>
  );
};

const SidenavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidenavWithScroll = styled.div`
  height: 500px;
  margin-bottom: 50px;
`;

export default SideNav;
