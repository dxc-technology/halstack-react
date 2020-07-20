import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";
import hideIcon from "./hide-icon.svg";
import editIcon from "./edit-icon.svg";

function Example({ title, example }) {
  const [isCodeVisible, changeIsCodeVisble] = useState(false);

  const codeFildRef = useRef(null);

  useEffect(() => {
    //Accessing DOM manually to add focus to the textArea inside the LiveEditor of react-live
    if (codeFildRef.current && isCodeVisible) {
      codeFildRef.current.children[0].children[0].focus();
    }
  }, [codeFildRef, isCodeVisible]);

  const toggleCodeClick = () => {
    changeIsCodeVisble(!isCodeVisible);
  };

  return (
    <StyledExample>
      <Title>
        <TitleText>{title}</TitleText>
        <CodeButton onClick={toggleCodeClick}>
          <IconToggleCode
            src={(isCodeVisible && hideIcon) || editIcon}
          ></IconToggleCode>
          {(isCodeVisible && "Hide") || "Edit"} Code
        </CodeButton>
      </Title>
      <LiveProvider scope={example.scope} theme={theme} code={example.code}>
        <StyledPreviewError>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreviewError>
        {isCodeVisible && (
          <div ref={codeFildRef}>
            <LiveEditor />
          </div>
        )}
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
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0px 10px;
`;

const IconToggleCode = styled.img`
  max-width: 20px;
  max-height: 20px;
  margin: 0px 10px;
`;

const StyledPreviewError = styled.div`
  margin-bottom: 20px;
  box-shadow: inset 0 0 10px #0000000d;
  border: 1px dashed #dcdcdc;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledError = styled.div`
  color: red;
  background: #ffeded;
  padding: 0px 10px;
  display: flex;
`;

export default Example;
