import { ReactNode, useState } from "react";
import { DxcButton, DxcContainer, DxcFlex, HalstackProvider } from "@dxc-technology/halstack-react";
import styled from "styled-components";

const PreformattedText = styled.pre`
  position: relative;
  box-sizing: border-box;
  margin: 0;
  border-radius: 0.25rem;
  padding: 1rem 1rem 1rem 1.5rem;
  background-color: #333;
`;

const Code = styled.code`
  font-size: 0.875rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #fff;
`;

const buttonTokens = {
  button: {
    tertiaryDefaultFontColor: "#fff",
    tertiaryHoverDefaultBackgroundColor: "#4d4d4d",
    tertiaryActiveDefaultBackgroundColor: "#666666",
  },
};

export default function CodeBlock({ children }: { children: ReactNode; language?: string }) {
  const [copyActionIsVisible, setCopyActionIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const onMouseEnter = () => {
    setCopyActionIsVisible(true);
  };
  const onMouseLeave = () => {
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
      <PreformattedText onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Code>{children}</Code>
        {copyActionIsVisible && (
          <DxcContainer position="absolute" inset={{ top: "0", right: "0" }} padding="var(--spacing-padding-xs)">
            <HalstackProvider advancedTheme={buttonTokens}>
              <DxcButton
                icon={copied ? "check" : "content_copy"}
                mode="tertiary"
                onClick={copyCode}
                size={{ height: "medium" }}
                title={copied ? "Copied" : "Copy the code"}
              />
            </HalstackProvider>
          </DxcContainer>
        )}
      </PreformattedText>
    </DxcFlex>
  );
}
