import { ReactNode } from "react";
import styled, { css } from "styled-components";

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

const ExtendedCodeContainer = styled.div`
  ${codeStyles}
  white-space: pre;
  font-size: var(--typography-label-s);
`;

export const ExtendedTableCode = ({ children }: { children: ReactNode }) => (
  <ExtendedCodeContainer>
    <code>{children}</code>
  </ExtendedCodeContainer>
);
