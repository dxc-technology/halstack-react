import React, { useState } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";
import { DxcButton, DxcFlex, useToast } from "@dxc-technology/halstack-react";

type Example = {
  scope?: object;
  code?: string;
};
type ExamplePropTypes = {
  actionsVisible?: boolean;
  defaultIsVisible?: boolean;
  example: Example;
};

const icons = {
  copy: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  ),
};

const Example = ({ actionsVisible = true, defaultIsVisible = false, example }: ExamplePropTypes): JSX.Element => {
  const toast = useToast();
  const [isCodeVisible, changeIsCodeVisible] = useState(defaultIsVisible);

  const handleCodeOnClick = () => {
    changeIsCodeVisible(!isCodeVisible);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(example.code)
      .then(() => {
        toast.success({ message: "Code copied to the clipboard." });
      })
      .catch(() => {
        toast.warning({ message: "Failed to copy the text to the clipboard." });
      });
  };

  return (
    <DxcFlex direction="column" gap="1rem">
      <LiveProvider scope={example.scope} theme={theme as any} code={example.code}>
        <StyledPreview>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreview>
        {actionsVisible && (
          <DxcFlex justifyContent="flex-end" gap="0.5rem">
            {isCodeVisible && <DxcButton label="Copy code" icon={icons.copy} mode="tertiary" onClick={handleCopy} />}
            <DxcButton
              label={isCodeVisible ? "Hide code" : "View code"}
              icon={icons.code}
              mode="tertiary"
              onClick={handleCodeOnClick}
            />
          </DxcFlex>
        )}
        {isCodeVisible && (
          <StyledEditor>
            <LiveEditor />
          </StyledEditor>
        )}
      </LiveProvider>
    </DxcFlex>
  );
};

const StyledPreview = styled.div`
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #f9f9fa 25%, transparent 25%),
    linear-gradient(135deg, #f9f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f9f9fa 75%),
    linear-gradient(135deg, transparent 75%, #f9f9fa 75%);
  background-size: 20px 20px;
  background-position:
    0px 0px,
    10px 0px,
    10px -10px,
    0px 10px;
  border: 1px solid #707070;
  border-radius: 0.25rem;
  overflow: auto;
  > div {
    min-width: min-content;
  }
`;

const StyledError = styled.div`
  background: #ffeded;
  color: red;
  display: flex;
  padding: 0px 0.5rem;
`;

const StyledEditor = styled.div`
  pre {
    padding: 1rem !important;
  }
`;

export default Example;
