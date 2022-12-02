//@ts-nocheck
import React from "react";
import styled from "styled-components";
import {
  DxcHeading,
  DxcAlert,
  HalstackProvider,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import componentsPreview from "./ComponentsPreviewMap";
import { capitalizeText } from "../utils";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/router";

const ComponentPreview = ({ customTheme, componentId }) => {
  const { asPath } = useRouter();
  const pages = asPath.split("/");
  const type = pages[pages.length - 2];

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
            <DxcFlex alignItems="center" justifyContent="center">
              <DxcAlert
                type="error"
                mode="inline"
                inlineText="Unable to render the theme."
                margin="xxlarge"
              />
            </DxcFlex>
          )}
          resetKeys={[customTheme]}
        >
          <HalstackProvider
            theme={
              type === "opinionated-theme" || type == null
                ? customTheme
                : undefined
            }
            advancedTheme={type === "advanced-theme" ? customTheme : undefined}
          >
            <preview.preview />
          </HalstackProvider>
        </ErrorBoundary>
      </PreviewContainer>
    </ComponentPreviewContainer>
  );
};

const ComponentPreviewContainer = styled.div`
  flex-grow: 1;
  overflow-x: auto;

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
  margin: 0 8% 8% 8%;
`;

const ComponentHeader = styled.div`
  display: flex;
  margin: 36px 8% 0 8%;
`;

export default ComponentPreview;
