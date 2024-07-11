import styled from "styled-components";

/**
 * Styled component used in the examples of the layout components:
 * Bleed, Flex, Grid and Inset
 */
const Placeholder = styled.div<{ color?: string; width?: string; height?: string }>`
  box-sizing: border-box;
  text-align: center;
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  padding: 1rem;
  border: 1px solid #a46ede;
  border-radius: 0.5rem;
  background-color: ${({ color }) => color ?? "#e5d5f6"};
  font-family:
    Open Sans,
    sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  color: #7d2fd0;
`;

export default Placeholder;
