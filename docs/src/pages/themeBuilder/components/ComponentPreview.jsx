import React from "react";
import styled from "styled-components";
import {
  DxcHeading,
  DxcAlert,
  ThemeProvider,
} from "@dxc-technology/halstack-react";
import componentsPreview from "./ComponentsPreviewMap";
import { capitalizeText } from "../utils";
import { ErrorBoundary } from "react-error-boundary";

const ComponentPreview = ({ customTheme, componentId }) => {
  const preview = componentsPreview.find(
    (component) => component.name === componentId
  );

  return (
    <ComponentPreviewContainer>
      <ComponentHeader>
        <DxcHeading
          text={`${capitalizeText(componentId)} component`}
          level={4}
          margin={{ top: "xsmall", bottom: "xsmall" }}
        />
      </ComponentHeader>
      <PreviewContainer>
        <ErrorBoundary
          fallbackRender={() => (
            <ErrorContainer>
              <DxcAlert
                type="error"
                mode="inline"
                inlineText="Unable to render the theme."
                margin="xxlarge"
              />
            </ErrorContainer>
          )}
          resetKeys={[customTheme]}
        >
          <ThemeProvider theme={customTheme}>
            <preview.preview />
          </ThemeProvider>
        </ErrorBoundary>
      </PreviewContainer>
    </ComponentPreviewContainer>
  );
};

const ComponentPreviewContainer = styled.div`
  height: 70%;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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

const PreviewContainer = styled.div`
  height: 65%;
  margin-left: 8%;
  padding-right: 8%;
`;

const ComponentHeader = styled.div`
  height: 10%;
  margin: 36px 8% 0 8%;
  display: flex;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ComponentPreview;
