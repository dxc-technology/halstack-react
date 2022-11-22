import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcButton,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import defaultTheme from "./themes/DefaultTheme.json";
import advancedTheme from "./themes/AdvancedTheme.json";
import ComponentPreview from "./components/ComponentPreview";
import { downloadFile, makeReadableSidenav } from "./utils";
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
    <DxcApplicationLayout
      header={<Header />}
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcApplicationLayout.SideNav.Title>
              Global theme actions
            </DxcApplicationLayout.SideNav.Title>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <DxcInset space="1rem" bottom="1.5rem">
              <DxcFlex direction="column">
                <DxcButton
                  mode="text"
                  label="Reset"
                  onClick={() => {
                    setCustomTheme(
                      type === "advancedTheme" ? advancedTheme : defaultTheme
                    );
                  }}
                  icon={resetIcon}
                  size="fillParent"
                />
                <DxcButton
                  mode="secondary"
                  label="Import"
                  onClick={() => {
                    setDialogVisible(true);
                  }}
                  margin={{ top: "xxsmall", bottom: "xxsmall" }}
                  icon={importIcon}
                  size="fillParent"
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
                  size="fillParent"
                />
              </DxcFlex>
            </DxcInset>
            <DxcApplicationLayout.SideNav.Group title="Components">
              {Object.keys(
                type === "advancedTheme" ? advancedTheme : defaultTheme
              )
                .filter(
                  (component) =>
                    component !== "footer" &&
                    component !== "header" &&
                    component !== "sidenav"
                )
                .map((component, index) => {
                  return (
                    <DxcApplicationLayout.SideNav.Link
                      key={`componentLink-${index}`}
                      selected={currentComponent === component}
                      onClick={() => {
                        setCurrentComponent(component);
                      }}
                    >
                      {makeReadableSidenav(component)}
                    </DxcApplicationLayout.SideNav.Link>
                  );
                })}
            </DxcApplicationLayout.SideNav.Group>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <DxcFlex>
          <ComponentPreview
            customTheme={customTheme}
            componentId={currentComponent}
          />
          <ThemeInputsConfig
            componentInputs={customTheme[currentComponent]}
            componentInputsTypes={customThemeSchema[currentComponent]}
            onChangeCustomTheme={setComponentProperty}
          />
        </DxcFlex>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

export default ThemeBuilder;
