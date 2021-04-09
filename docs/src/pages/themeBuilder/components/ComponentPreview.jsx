import React, { useEffect } from "react";
import styled from "styled-components";
import {
  DxcHeading,
  DxcSpinner,
  ThemeProvider,
} from "@dxc-technology/halstack-react";

import componentsPreview from "./ComponentsPreviewMap";
import ThemeInputsConfig from "./ThemeInputsConfig";
import {capitalizeText} from "../utils";

const ComponentPreview = ({
  // onResetComponent,
  // onDisplayProperty,
  customTheme,
  onEdit,
  componentId,
}) => {
  const preview = componentsPreview.find(
    (component) => component.name === componentId
  );

  const changeCustomThemeHandler = (propertyName, propertyValue) => {
    const updatedTheme = JSON.parse(JSON.stringify(customTheme));
    updatedTheme[componentId][propertyName] = propertyValue;
    onEdit((prevTheme) => ({ ...prevTheme, ...updatedTheme }));
  };

  return (
    <ConfigurationContainer>
      <ComponentHeader>
        <DxcHeading
          text={`${capitalizeText(componentId)} component`}
          level={4}
          margin={{ top: "xsmall", bottom: "xsmall" }}
        />
      </ComponentHeader>
      <PreviewContainer>
        <ThemeProvider theme={customTheme}>
          <preview.preview />
        </ThemeProvider>
      </PreviewContainer>
      <ThemeInputsConfig
        componentInputs={customTheme[componentId]}
        onChangeCustomTheme={changeCustomThemeHandler}
      />
    </ConfigurationContainer>
  );
};

const ConfigurationContainer = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

const PreviewContainer = styled.div`
  height: 65%;
  margin-left: 8%;
  padding-right: 8%;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 26px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #666666;
    border-radius: 26px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ComponentHeader = styled.div`
  height: 10%;
  margin: 36px 8% 0 8%;
  display: flex;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ComponentPreview;
