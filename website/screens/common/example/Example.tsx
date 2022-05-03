//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";
import { DxcButton } from "@dxc-technology/halstack-react";

type Example = {
  scope?: object;
  code?: string;
};
type ExamplePropTypes = {
  defaultIsVisible?: boolean;
  example: Example;
};

const icons = {
  copy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  ),
  code: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  ),
};

const Example = ({
  defaultIsVisible = false,
  example,
}: ExamplePropTypes): JSX.Element => {
  const [isCodeVisible, changeIsCodeVisible] = useState(defaultIsVisible);
  const [copied, changeCopied] = useState(false);

  const liveEditorRef = useRef<HTMLDivElement>(null);

  const showCode = () => {
    changeIsCodeVisible(!isCodeVisible);
  };
  const copyCode = () => {
    // Accessing DOM manually to the textarea value (current code) inside the LiveEditor of react-live
    const currentCode = (
      liveEditorRef?.current?.children[0].children[0] as HTMLTextAreaElement
    ).value;
    navigator.clipboard.writeText(currentCode);
    changeCopied(true);
  };

  useEffect(() => {
    // Accessing DOM manually to add focus to the textarea inside the LiveEditor of react-live
    if (isCodeVisible) {
      (
        liveEditorRef?.current?.children[0].children[0] as HTMLTextAreaElement
      ).focus();
    }
  }, [isCodeVisible]);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        changeCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <ExampleContainer>
      <LiveProvider scope={example.scope} theme={theme} code={example.code}>
        <StyledPreview>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreview>
        <CodeActionsContainer isCodeVisible={isCodeVisible}>
          {isCodeVisible && (
            <DxcButton
              label={"Copy code"}
              icon={icons.copy}
              mode="text"
              onClick={copyCode}
            />
          )}
          <DxcButton
            label={isCodeVisible ? "Hide code" : "View code"}
            icon={icons.code}
            mode="text"
            onClick={showCode}
          />
        </CodeActionsContainer>
        {isCodeVisible && (
          <LiveEditorContainer ref={liveEditorRef}>
            {copied && (
              <BackgroundOverlay>
                <span>
                  Copied!{" "}
                  <span role="img" aria-label="emoji">
                    🎉
                  </span>
                </span>
              </BackgroundOverlay>
            )}
            <LiveEditor />
          </LiveEditorContainer>
        )}
      </LiveProvider>
    </ExampleContainer>
  );
};

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPreview = styled.div`
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #f9f9fa 25%, transparent 25%),
    linear-gradient(135deg, #f9f9fa 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f9f9fa 75%),
    linear-gradient(135deg, transparent 75%, #f9f9fa 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
  border: 1px solid #707070;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const StyledError = styled.div`
  background: #ffeded;
  color: red;
  display: flex;
  padding: 0px 0.5rem;
`;

const LiveEditorContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 0.5rem;
  textarea,
  pre {
    padding: 2rem !important;
  }
  > div {
    width: 100% !important;
  }
`;

type CodeActionsContainerProps = {
  isCodeVisible: boolean;
};
const CodeActionsContainer = styled.div<CodeActionsContainerProps>`
  display: flex;
  column-gap: 0.5rem;
  justify-content: flex-end;
  ${({ isCodeVisible }) => isCodeVisible && "margin-bottom: 0.5rem;"};
`;

const BackgroundOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 1.5rem;
  background-color: #000000b3;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1;
  user-select: none;
`;

export default Example;
