import { useState } from "react";
import styled from "@emotion/styled";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "./liveEditorTheme";
import { DxcButton, DxcFlex, useToast } from "@dxc-technology/halstack-react";

const StyledPreview = styled.div`
  background-color: var(--color-bg-neutral-lightest);
  background-image:
    linear-gradient(45deg, var(--color-bg-neutral-light) 25%, transparent 25%),
    linear-gradient(135deg, var(--color-bg-neutral-light) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--color-bg-neutral-light) 75%),
    linear-gradient(135deg, transparent 75%, var(--color-bg-neutral-light) 75%);
  background-size: 20px 20px;
  background-position:
    0px 0px,
    10px 0px,
    10px -10px,
    0px 10px;
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-light);
  border-radius: var(--border-radius-s);
  overflow: auto;

  > div {
    min-width: min-content;
  }
`;

const StyledError = styled.div`
  background-color: var(--color-bg-error-lighter);
  color: var(--color-fg-error-strong);
  display: flex;
  padding: var(--spacing-padding-none) var(--spacing-padding-m);
`;

const StyledEditor = styled.div`
  pre {
    padding: var(--spacing-padding-m) !important;
  }
`;

type ExamplePropTypes = {
  actionsVisible?: boolean;
  defaultIsVisible?: boolean;
  example: {
    scope: Record<string, unknown>;
    code: string;
  };
};
//
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
    <DxcFlex direction="column" gap="var(--spacing-gap-m)">
      <LiveProvider code={liveCode} scope={example.scope} theme={theme}>
        <StyledPreview>
          <LivePreview />
          <StyledError>
            <LiveError />
          </StyledError>
        </StyledPreview>
        {actionsVisible && (
          <DxcFlex gap="var(--spacing-gap-s)" justifyContent="flex-end">
            {isCodeVisible && <DxcButton icon="content_copy" label="Copy code" mode="tertiary" onClick={handleCopy} />}
            <DxcButton
              icon={isCodeVisible ? "code_off" : "code"}
              label={isCodeVisible ? "Hide code" : "View code"}
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
