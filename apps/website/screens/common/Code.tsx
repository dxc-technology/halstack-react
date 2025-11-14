import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const codeStyles = css`
  background-color: var(--color-bg-primary-lighter);
  border-radius: var(--border-radius-s);
  color: var(--color-fg-primary-stronger);
  padding: var(--spacing-padding-xxxs) var(--spacing-padding-xxs);
`;

const Code = styled.code`
  ${codeStyles}
  font-size: inherit;
`;

export default Code;

export const TableCode = styled.code`
  ${codeStyles}
  font-size: var(--typography-label-s);
`;

const ExtendedTableCodeContainer = styled.div`
  ${codeStyles}
  white-space: pre;
  font-size: var(--typography-label-s);
`;

const ExtendedCodeContainer = styled.div`
  ${codeStyles}
  white-space: pre;
`;

export const ExtendedCode = ({ children }: { children: ReactNode }) => (
  <ExtendedCodeContainer>
    <code>{children}</code>
  </ExtendedCodeContainer>
);

export const ExtendedTableCode = ({ children }: { children: ReactNode }) => (
  <ExtendedTableCodeContainer>
    <code>{children}</code>
  </ExtendedTableCodeContainer>
);
