import React, { useState } from 'react';
import styled from "styled-components";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import defaultTheme from './DefaultTheme.json';
import JSONViewer from './JSONViewer';
import Component from './components/Component';

const ThemeBuilder = () => {
  const [customTheme, setCustomTheme] = useState(defaultTheme);

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
            <Component></Component>
            <JSONViewer customTheme={customTheme} onEdit={setCustomTheme} />
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