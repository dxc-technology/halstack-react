import React, { useState } from "react";
import styled from "styled-components";
import { DxcApplicationLayout, DxcSidenav } from "@dxc-technology/halstack-react";
import defaultTheme from "./DefaultTheme.json";
import JSONView from "./JSONView";
import ComponentPreview from "./components/ComponentPreview";
import { capitalizeText } from "./utils";

const ThemeBuilder = () => {
  const [customTheme, setCustomTheme] = useState(defaultTheme);
  const [currentComponent, setCurrentComponent] = useState("accordion");

  return (
    <ThemeBuilderContainer>
      <DxcApplicationLayout>
        <DxcApplicationLayout.SideNav mode="push" padding="medium">
          <DxcSidenav.Title>
            Components
          </DxcSidenav.Title>
          {Object.keys(defaultTheme).map((component) => (
            <ComponentLink
              isSelected={currentComponent === component}
              onClick={() => {
                setCurrentComponent(component);
              }}
            >
              {capitalizeText(component)}
            </ComponentLink>
          ))}
        </DxcApplicationLayout.SideNav>
        <DxcApplicationLayout.Main>
          <MainContainer>
            <ComponentPreview
              componentId={currentComponent}
              customTheme={customTheme}
              onEdit={setCustomTheme}
            />
            <JSONView customTheme={customTheme} onEdit={setCustomTheme} />
          </MainContainer>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </ThemeBuilderContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

const ThemeBuilderContainer = styled.div``;

const ComponentLink = styled.p`
  :hover {
    cursor: pointer;
  }
  text-decoration: none;
  font: ${(props) => (props.isSelected ? "700" : "400")} 14px/19px Open Sans;
  letter-spacing: 0.24px;
  color: ${(props) => (props.isSelected ? "#000000" : "#00000099")};
  margin: 6px 10px;
`;

export default ThemeBuilder;
