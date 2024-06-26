import React from "react";
import styled from "styled-components";
import componentsPreview from "./ComponentsPreviewMap";
import { makeReadableSidenav } from "../utils";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/router";
import { DxcHeading, DxcFlex, DxcAlert, HalstackProvider } from "@repo/ui";

type ComponentPreviewProps = {
  customTheme: object;
  componentId: string;
};

const ComponentPreview = ({ customTheme, componentId }: ComponentPreviewProps) => {
  const { asPath } = useRouter();
  const pages = asPath.split("/");
  const type = pages[pages.length - 2];

  const preview = componentsPreview.find((component) => component.name === componentId);

  return (
    <ComponentPreviewContainer>
      <DxcHeading text={`${makeReadableSidenav(componentId)} component`} level={3} />
      <ErrorBoundary
        fallbackRender={() => (
          <DxcFlex alignItems="center" justifyContent="center">
            <DxcAlert type="error" mode="inline" inlineText="Unable to render the theme." margin="xxlarge" />
          </DxcFlex>
        )}
        resetKeys={[customTheme]}
      >
        <HalstackProvider
          theme={type === "opinionated-theme" || type == null ? customTheme : undefined}
          advancedTheme={type === "advanced-theme" ? customTheme : undefined}
        >
          {preview != null && <preview.preview />}
        </HalstackProvider>
      </ErrorBoundary>
    </ComponentPreviewContainer>
  );
};

const ComponentPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2.25rem;
  padding: 3.5rem 8% 8% 8%;
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

export default ComponentPreview;
