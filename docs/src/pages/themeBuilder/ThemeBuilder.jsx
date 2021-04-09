import React, { useState } from 'react';
import styled from "styled-components";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import defaultTheme from './DefaultTheme.json';
import JSONView from './JSONView';
import ComponentPreview from './components/ComponentPreview';

const ThemeBuilder = () => {
  const [customTheme, setCustomTheme] = useState(defaultTheme);
  const [currentComponent, setCurrentComponent] = useState("accordion");

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
            <ComponentPreview componentId={currentComponent} customTheme={customTheme} onEdit={setCustomTheme} />
            <JSONView customTheme={customTheme} onEdit={setCustomTheme} />
          </MainContainer>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </ThemeBuilderContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
`;

const ThemeBuilderContainer = styled.div`

`;

export default ThemeBuilder;