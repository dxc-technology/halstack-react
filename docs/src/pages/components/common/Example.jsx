import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";
import { DxcButton } from "@dxc-technology/halstack-react";

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

const Example = ({ title, example, children }) => {
  const [isCodeVisible, changeIsCodeVisible] = useState(false);
  const liveEditorRef = useRef(null);
  const toggleCodeClick = () => {
    changeIsCodeVisible(!isCodeVisible);
  };
  const copyCode = () => {
    // Accessing DOM manually to the textarea value (current code) inside the LiveEditor of react-live
    const currentCode = liveEditorRef.current.children[0].children[0].value;
    navigator.clipboard.writeText(currentCode);
  };

  useLayoutEffect(() => {
    // Accessing DOM manually to add focus to the textarea inside the LiveEditor of react-live
    if (liveEditorRef.current && isCodeVisible)
      liveEditorRef.current.children[0].children[0].focus();
  }, [isCodeVisible]);

  return (
    <ExampleContainer>
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
      <Text>{children}</Text>
      <LiveProvider scope={example.scope} theme={theme} code={example.code}>
        <StyledPreview>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreview>
        {isCodeVisible && (
          <LiveEditorContainer ref={liveEditorRef}>
            <LiveEditor />
          </LiveEditorContainer>
        )}
      </LiveProvider>
      <CodeActionsContainer>
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
          onClick={toggleCodeClick}
        />
      </CodeActionsContainer>
    </ExampleContainer>
  );
}

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid #c1c1c1;
  align-items: baseline;
`;

const TitleText = styled.h3`
  font-size: 20px;
  color: gray;
  font-weight: normal;
  flex-grow: 1;
  margin: 5px 0px;
`;

const Text = styled.div`
  margin: 24px 0px 16px 0px;
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
  border-radius: 8px;
  margin-bottom: 8px;
`;

const StyledError = styled.div`
  background: #ffeded;
  border-radius: 8px;
  color: red;
  display: flex;
  padding: 0px 10px;
`;

const LiveEditorContainer = styled.div`
  margin-bottom: 8px;
`;

const CodeActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;

export default Example;
