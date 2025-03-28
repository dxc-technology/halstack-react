import styled from "styled-components";

const Label = styled.label<{
  disabled: boolean;
  hasMargin?: boolean;
}>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
  ${({ hasMargin = false }) => hasMargin && "margin-bottom: var(--spacing-gap-xs);"}

  /* Optional text */
  > span {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
    font-weight: var(--typography-label-regular);
  }
`;

export default Label;
