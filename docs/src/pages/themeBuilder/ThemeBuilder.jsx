import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import styled from "styled-components";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import defaultTheme from './DefaultTheme.json';
import JSONView from './JSONView';
import Component from './components/Component';

const ThemeBuilder = () => {
  const [customTheme, setCustomTheme] = useState(defaultTheme);
  const location = useLocation();
  const componentId = matchPath(location?.pathname, {
    path: "/themeBuilder/:componentId",
    exact: true,
    strict: false,
  })?.params?.componentId ?? "accordion";

  return (
    <ThemeBuilderContainer>
      <DxcApplicationLayout>
        <DxcApplicationLayout.SideNav mode="push">
          <p>SideNav Content</p>
          <p>SideNav Content</p>
          <p>SideNav Content</p>
        </DxcApplicationLayout.SideNav>
        <DxcApplicationLayout.Main>
          <MainContainer>
            <Component componentId={componentId} customTheme={customTheme} onEdit={setCustomTheme} />
            <JSONView customTheme={customTheme} onEdit={setCustomTheme} />
          </MainContainer>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </ThemeBuilderContainer>
  );
}

const MainContainer = styled.div`
  
`;

const ThemeBuilderContainer = styled.div`

`;

export default ThemeBuilder;