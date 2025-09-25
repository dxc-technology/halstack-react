import styled from "@emotion/styled";

const HelperText = styled.span<{ disabled: boolean; hasMargin?: boolean }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  ${({ hasMargin }) => hasMargin && "margin-bottom: var(--spacing-padding-xxs);"}
`;

export default HelperText;
