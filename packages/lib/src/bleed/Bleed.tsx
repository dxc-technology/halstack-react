import styled from "styled-components";
import BleedPropsType, { Spacing } from "./types";

const Bleed = ({ space, horizontal, vertical, top, right, bottom, left, children }: BleedPropsType): JSX.Element => (
  <StyledBleed
    space={space}
    horizontal={horizontal}
    vertical={vertical}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
  >
    {children}
  </StyledBleed>
);

function getSpacingValue(spacingName: Spacing | undefined) {
  return spacingName ?? "0rem";
}

const StyledBleed = styled.div<BleedPropsType>`
  ${({ space, horizontal, vertical, top, right, bottom, left }) => `
    margin: -${getSpacingValue(top || vertical || space)} -${getSpacingValue(
      right || horizontal || space
    )} -${getSpacingValue(bottom || vertical || space)} -${getSpacingValue(left || horizontal || space)};
`}
`;

export default Bleed;
