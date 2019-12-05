import React, { useState } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";

function Example({ title, example }) {
  const [isCodeVisible, changeIsCodeVisble] = useState(false);
  return (
    <StyledExample>
      <Title>
        <TitleText>{title}</TitleText>
        <CodeButton
          onClick={() => {
            changeIsCodeVisble(!isCodeVisible);
          }}
        >
          Edit Code
        </CodeButton>
      </Title>
      <LiveProvider scope={example.scope} theme={theme} code={example.code}>
        <StyledPreviewError>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreviewError>

        {isCodeVisible && <LiveEditor />}
      </LiveProvider>
    </StyledExample>
  );
}

const StyledExample = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid #c1c1c1;
  align-items: baseline;
  margin-bottom: 30px;
`;

const TitleText = styled.h3`
  font-size: 20px;
  color: gray;
  font-weight: normal;
  flex-grow: 1;
  margin: 5px 0px;
`;

const CodeButton = styled.div`
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0px 10px;
`;

const StyledPreviewError = styled.div`
  margin-bottom: 20px;
`;

const StyledPreview = styled.div``;

const StyledError = styled.div`
  color: red;
  background: #ffeded;
  padding: 0px 10px;
  display: flex;
`;

export default Example;
