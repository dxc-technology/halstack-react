import styled from "styled-components";
import InsetPropsType, { Spacing } from "./types";

const Inset = ({ space, horizontal, vertical, top, right, bottom, left, children }: InsetPropsType): JSX.Element => (
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

function getSpacingValue(spacingName: Spacing | undefined) {
  return spacingName || "0rem";
}

const StyledInset = styled.div<InsetPropsType>`
  ${({ space, horizontal, vertical, top, right, bottom, left }) => `
  padding: ${getSpacingValue(top || vertical || space)} ${getSpacingValue(right || horizontal || space)}
    ${getSpacingValue(bottom || vertical || space)} ${getSpacingValue(left || horizontal || space)};
`}
`;

export default Inset;
