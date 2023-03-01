import React from "react";
import { DxcNavTabs } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const iconSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const NavTabs = () => (
  <PreviewContainer>
    <Mode text="Default ">
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 4</DxcNavTabs.Tab>
      </DxcNavTabs>
    </Mode>
    <Mode text="With icon and notification">
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="#" active icon={iconSVG} notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon={iconSVG} notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={iconSVG} notificationNumber={120}>
          Tab 3
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon={iconSVG}>
          Tab 4
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </Mode>
  </PreviewContainer>
);

export default NavTabs;
