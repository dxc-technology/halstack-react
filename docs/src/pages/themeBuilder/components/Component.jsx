import React, { useEffect } from "react";
import styled from "styled-components";
import {
  DxcHeading,
  DxcSpinner,
  ThemeProvider,
} from "@dxc-technology/halstack-react";

import componentsPreview from "./ComponentsPreview";
import ColorConfiguration from "./ColorConfiguration";

const Component = ({
  componentProperties,
  isComponentSaved,
  onSaveComponent,
  onResetComponent,
  onChangeComponentProp,
  onDisplayProperty,
  theme,
  componentId,
}) => {
  const preview = componentsPreview.find(
    (component) => component.name === componentId
  );

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
        <ThemeProvider theme={theme}>
          <preview.preview />
        </ThemeProvider>
      </PreviewContainer>
      <ColorConfiguration
        componentId={componentId}
        componentProperties={componentProperties}
        isComponentSaved={isComponentSaved}
        onSaveComponent={onSaveComponent}
        onResetComponent={onResetComponent}
        onChangeComponentProp={onChangeComponentProp}
        onDisplayProperty={onDisplayProperty}
      />
    </ConfigurationContainer>
  );
};

const capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const ConfigurationContainer = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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

export default Component;
