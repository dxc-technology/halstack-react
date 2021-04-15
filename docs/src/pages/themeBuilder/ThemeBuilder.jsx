import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcSidenav,
  DxcButton,
} from "@dxc-technology/halstack-react";
import defaultTheme from "./DefaultTheme.json";
import JSONView from "./JSONView";
import ComponentPreview from "./components/ComponentPreview";
import { capitalizeText } from "./utils";
import Header from "../../common/Header";
import ThemeInputsConfig from "./components/ThemeInputsConfig";
import ImportDialog from "./ImportDialog";

const ThemeBuilder = () => {
  const [customTheme, setCustomTheme] = useState(defaultTheme);
  const [currentComponent, setCurrentComponent] = useState("accordion");

  const changeCustomThemeHandler = (propertyName, propertyValue) => {
    const updatedTheme = JSON.parse(JSON.stringify(customTheme));
    updatedTheme[currentComponent][propertyName] = propertyValue;
    setCustomTheme((prevTheme) => ({ ...prevTheme, ...updatedTheme }));
  };

  return (
    <DxcApplicationLayout>
      <DxcApplicationLayout.Header>
        <Header></Header>
      </DxcApplicationLayout.Header>
      <DxcApplicationLayout.SideNav mode="push" padding="medium">
        <ButtonsContainer>
          <ImportDialog setCustomTheme={setCustomTheme} />
          <DxcButton
            mode="secondary"
            label="Reset"
            onClick={() => {
              setCustomTheme(defaultTheme);
            }}
          />
        </ButtonsContainer>
        <DxcSidenav.Title>Components</DxcSidenav.Title>
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
          <ComponentInputsContainer>
            <ComponentPreview
              customTheme={customTheme}
              componentId={currentComponent}
            />
            <ThemeInputsConfig
              componentInputs={customTheme[currentComponent]}
              onChangeCustomTheme={changeCustomThemeHandler}
            />
          </ComponentInputsContainer>
          <JSONView customTheme={customTheme} onEdit={setCustomTheme} />
        </MainContainer>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

const ComponentInputsContainer = styled.div`
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

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

const ButtonsContainer = styled.div`
  display: flex;
`;

export default ThemeBuilder;
