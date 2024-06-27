import styled from "styled-components";
import InsetPropsType from "./types";

export default function Inset({
  space,
  horizontal,
  vertical,
  top,
  right,
  bottom,
  left,
  children,
}: InsetPropsType): JSX.Element {
  return (
    <StyledInset
      space={space}
      horizontal={horizontal}
      vertical={vertical}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </StyledInset>
  );
}

function getSpacingValue(spacingName) {
  return spacingName ? spacingName : "0rem";
}

const StyledInset = styled.div<InsetPropsType>`
  ${({ space, horizontal, vertical, top, right, bottom, left }) => `
  padding: ${getSpacingValue(top || vertical || space)} ${getSpacingValue(right || horizontal || space)}
    ${getSpacingValue(bottom || vertical || space)} ${getSpacingValue(left || horizontal || space)};
`}
`;
