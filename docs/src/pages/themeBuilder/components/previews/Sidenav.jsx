import React from "react";
import styled from "styled-components";
import { DxcSidenav } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const SideNav = () => {
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
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div``;

export default SideNav;
