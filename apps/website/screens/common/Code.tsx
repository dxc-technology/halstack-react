import { ReactNode } from "react";
import styled, { css } from "styled-components";

const codeStyles = css`
  background-color: var(--color-bg-primary-lighter);
  border-radius: var(--border-radius-s);
  color: var(--color-fg-primary-stronger);
  padding: var(--spacing-padding-xxxs) var(--spacing-padding-xxs);
`;

export default styled.code`
  ${codeStyles}
  font-size: inherit;
`;

const ExtendedCodeContainer = styled.div`
  ${codeStyles}
  white-space: pre;
  font-size: 0.75rem;
`;

export const ExtendedTableCode = ({ children }: { children: ReactNode }) => (
  <ExtendedCodeContainer>
    <code>{children}</code>
  </ExtendedCodeContainer>
);

export const TableCode = styled.code`
  ${codeStyles}
  font-size: 0.75rem;
`;
