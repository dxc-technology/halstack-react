import styled from "@emotion/styled";

/**
 * Styled component used in the examples of the layout components:
 * Bleed, Flex, Grid and Inset
 */
const Placeholder = styled.div<{ color?: string; width?: string; height?: string }>`
  background-color: ${({ color }) => color ?? "var(--color-bg-primary-light)"};
  border: var(--border-width-s) var(--border-style-default) var(--border-color-primary-light);
  border-radius: var(--border-radius-m);
  box-sizing: border-box;
  color: var(--color-fg-primary-strong);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-xl);
  font-weight: var(--typography-label-semibold);
  ${({ height }) => height && `height: ${height}`};
  padding: var(--spacing-padding-m);
  text-align: center;
  ${({ width }) => width && `width: ${width}`};
`;

export default Placeholder;
