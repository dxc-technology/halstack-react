import React, { useEffect } from "react";
import styled from "styled-components";
import { DxcHeading, ThemeProvider } from "@dxc-technology/halstack-react";
import componentsPreview from "./ComponentsPreviewMap";
import { capitalizeText } from "../utils";

const ComponentPreview = ({
  // onResetComponent,
  customTheme,
  componentId,
}) => {
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
        <ThemeProvider theme={customTheme}>
          <preview.preview />
        </ThemeProvider>
      </PreviewContainer>
    </ComponentPreviewContainer>
  );
};

const ComponentPreviewContainer = styled.div`
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

export default ComponentPreview;
