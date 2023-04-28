import styled from "styled-components";

const ColoredContainer = styled.div<{ color?: string; width?: string; height?: string }>`
  box-sizing: border-box;
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  padding: 1rem;
  border: 1px solid #a46ede;
  border-radius: 0.5rem;
  background-color: ${({ color }) => color ?? "#e5d5f6"};
  font-family: Open Sans, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #a46ede;
`;

export default ColoredContainer;