import styled from "styled-components";

const HelperText = styled.span<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  margin-bottom: var(--spacing-gap-xs);
`;

export default HelperText;