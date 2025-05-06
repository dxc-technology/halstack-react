import { useState } from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";
import { DxcButton, DxcFlex, useToast } from "@dxc-technology/halstack-react";

const StyledPreview = styled.div`
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #f2f2f2 25%, transparent 25%),
    linear-gradient(135deg, #f2f2f2 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f2f2f2 75%),
    linear-gradient(135deg, transparent 75%, #f2f2f2 75%);
  background-size: 20px 20px;
  background-position:
    0px 0px,
    10px 0px,
    10px -10px,
    0px 10px;
  border: 1px solid #bfbfbf;
  border-radius: 0.25rem;
  overflow: auto;

  > div {
    min-width: min-content;
  }
`;

const StyledError = styled.div`
  padding: 0px 1rem;
  display: flex;
  background: #ffe6e9;
  color: #d0011b;
`;

const StyledEditor = styled.div`
  pre {
    padding: 1rem !important;
  }
`;

type ExamplePropTypes = {
  actionsVisible?: boolean;
  defaultIsVisible?: boolean;
  example: {
    scope: Record<string, any>;
    code: string;
  };
};

const Example = ({ actionsVisible = true, defaultIsVisible = false, example }: ExamplePropTypes) => {
  const toast = useToast();
  const [isCodeVisible, changeIsCodeVisible] = useState(defaultIsVisible);
  const [liveCode, setLiveCode] = useState(example.code);

  const handleCodeOnClick = () => {
    changeIsCodeVisible(!isCodeVisible);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(liveCode)
      .then(() => {
        toast.success({ message: "Code copied to the clipboard." });
      })
      .catch(() => {
        toast.warning({ message: "Failed to copy the text to the clipboard." });
      });
  };

  return (
    <DxcFlex direction="column" gap="0.75rem">
      <LiveProvider code={liveCode} scope={example.scope} theme={theme}>
        <StyledPreview>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreview>
        {actionsVisible && (
          <DxcFlex justifyContent="flex-end" gap="0.5rem">
            {isCodeVisible && <DxcButton label="Copy code" icon="content_copy" mode="tertiary" onClick={handleCopy} />}
            <DxcButton
              label={isCodeVisible ? "Hide code" : "View code"}
              icon={isCodeVisible ? "code_off" : "code"}
              mode="tertiary"
              onClick={handleCodeOnClick}
            />
          </DxcFlex>
        )}
        {isCodeVisible && (
          <StyledEditor>
            <LiveEditor code={liveCode} onChange={setLiveCode} />
          </StyledEditor>
        )}
      </LiveProvider>
    </DxcFlex>
  );
};

export default Example;
