import { ReactNode, useState } from "react";
import { DxcButton, DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";
import styled from "styled-components";

const PreformattedText = styled.pre`
  background-color: var(--color-bg-neutral-lighter);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-light);
  border-radius: var(--border-radius-s);
  box-sizing: border-box;
  margin: 0;
  padding: var(--spacing-padding-m) var(--spacing-padding-m) var(--spacing-padding-m) var(--spacing-padding-l);
  position: relative;
`;

const Code = styled.code`
  color: var(--color-fg-neutral-dark);
  font-size: var(--typography-body-s);
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export default function CodeBlock({ children }: { children: ReactNode }) {
  const [copyActionIsVisible, setCopyActionIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOnMouseEnter = () => {
    setCopyActionIsVisible(true);
  };

  const handleOnMouseLeave = () => {
    setCopyActionIsVisible(false);
    setCopied(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(children as string).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    });
  };

  return (
    <DxcFlex direction="column">
      <PreformattedText onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        <Code>{children}</Code>
        {copyActionIsVisible && (
          <DxcContainer inset={{ top: "0", right: "0" }} padding="var(--spacing-padding-xs)" position="absolute">
            <DxcButton
              icon={copied ? "check" : "content_copy"}
              mode="tertiary"
              onClick={copyCode}
              size={{ height: "medium" }}
              title={copied ? "Copied" : "Copy the code"}
            />
          </DxcContainer>
        )}
      </PreformattedText>
    </DxcFlex>
  );
}
