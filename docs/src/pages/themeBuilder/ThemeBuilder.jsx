import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcSidenav,
  DxcButton,
} from "@dxc-technology/halstack-react";
import defaultTheme from "./themes/DefaultTheme.json";
import advancedTheme from "./themes/AdvancedTheme.json";
import ComponentPreview from "./components/ComponentPreview";
import { capitalizeText, downloadFile } from "./utils";
import Header from "../../common/Header";
import ThemeInputsConfig from "./components/ThemeInputsConfig";
import ImportDialog from "./ImportDialog";
import { useParams } from "react-router";
import defaultSchema from "./themes/schemas/Default.schema.json";
import advancedSchema from "./themes/schemas/Advanced.schema.json";
import exportIcon from "./images/ExportIcon";
import importIcon from "./images/ImportIcon";
import resetIcon from "./images/ResetIcon";

const ThemeBuilder = () => {
  const { type } = useParams();

  const [customTheme, setCustomTheme] = useState(
    type === "advancedTheme" ? advancedTheme : defaultTheme
  );
  const customThemeSchema =
    type === "advancedTheme" ? advancedSchema : defaultSchema;

  const [currentComponent, setCurrentComponent] = useState("accordion");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const setComponentProperty = useCallback(
    (propertyName, propertyValue) => {
      setCustomTheme((prevTheme) => ({
        ...prevTheme,
        [currentComponent]: {
          ...prevTheme[currentComponent],
          [propertyName]: propertyValue,
        },
      }));
    },
    [currentComponent]
  );

  return (
    <DxcApplicationLayout>
      <DxcApplicationLayout.Header>
        <Header></Header>
      </DxcApplicationLayout.Header>
      <DxcApplicationLayout.SideNav mode="push" padding="medium">
        <ButtonsContainer>
          <DxcButton
            mode="text"
            label="Reset"
            onClick={() => {
              setCustomTheme(
                type === "advancedTheme" ? advancedTheme : defaultTheme
              );
            }}
            icon={resetIcon}
          />
          <DxcButton
            mode="secondary"
            label="Import"
            onClick={() => {
              setDialogVisible(true);
            }}
            margin={{ top: "xxsmall", bottom: "xxsmall" }}
            icon={importIcon}
          />
          {isDialogVisible && (
            <ImportDialog
              customThemeSchema={customThemeSchema}
              setCustomTheme={setCustomTheme}
              setDialogVisible={setDialogVisible}
            />
          )}
          <DxcButton
            mode="primary"
            label="Export"
            onClick={() => {
              downloadFile(customTheme);
            }}
            icon={exportIcon}
          />
        </ButtonsContainer>
        <DxcSidenav.Title>Components</DxcSidenav.Title>
        {Object.keys(
          type === "advancedTheme" ? advancedTheme : defaultTheme
        ).map((component, index) => (
          <ComponentLink
            key={`componentLink-${index}`}
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
            customTheme={customTheme}
            componentId={currentComponent}
          />
          <ThemeInputsConfig
            componentInputs={customTheme[currentComponent]}
            componentInputsTypes={customThemeSchema[currentComponent]}
            onChangeCustomTheme={setComponentProperty}
          />
        </MainContainer>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

const MainContainer = styled.div`
  display: flex;
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
  flex-direction: column;
`;

export default ThemeBuilder;
