import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcSidenav,
  DxcButton,
} from "@dxc-technology/halstack-react";
import defaultTheme from "./themes/DefaultTheme.json";
import advancedTheme from "./themes/AdvancedTheme.json";
import JSONView from "./JSONView";
import ComponentPreview from "./components/ComponentPreview";
import { capitalizeText } from "./utils";
import Header from "../../common/Header";
import ThemeInputsConfig from "./components/ThemeInputsConfig";
import ImportDialog from "./ImportDialog";
import { useParams } from "react-router";
import defaultSchema from "./themes/schemas/Default.schema.json";
import advancedSchema from "./themes/schemas/Advanced.schema.json";

const ThemeBuilder = () => {
  const { type } = useParams();

  const [customTheme, setCustomTheme] = useState(type === 'advancedTheme' ? advancedTheme: defaultTheme);
  const customThemeSchema = type === 'advancedTheme' ? advancedSchema: defaultSchema;
  
  const [currentComponent, setCurrentComponent] = useState("accordion");
  const [isDialogVisible, setDialogVisible] = useState(false);

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
          <DxcButton
            mode="primary"
            label="Import"
            onClick={() => {
              setDialogVisible(true);
            }}
            margin={{ right: "xxsmall" }}
          />
          {isDialogVisible && (
            <ImportDialog
              setCustomTheme={setCustomTheme}
              setDialogVisible={setDialogVisible}
            />
          )}
          <DxcButton
            mode="text"
            label="Reset"
            onClick={() => {
              setCustomTheme(type === 'advancedTheme' ? advancedTheme: defaultTheme);
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
              componentInputsTypes={customThemeSchema[currentComponent]}
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
