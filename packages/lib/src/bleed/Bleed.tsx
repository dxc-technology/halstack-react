import styled from "styled-components";
import BleedPropsType from "./types";

const getSpacingValue = (spacingName?: string) => spacingName ?? "0rem";

const StyledBleed = styled.div<BleedPropsType>`
  ${({ space, horizontal, vertical, top, right, bottom, left }) => `
    margin: -${getSpacingValue(top || vertical || space)} -${getSpacingValue(
      right || horizontal || space
    )} -${getSpacingValue(bottom || vertical || space)} -${getSpacingValue(left || horizontal || space)};
  `}
`;

const Bleed = ({ space, horizontal, vertical, top, right, bottom, left, children }: BleedPropsType) => (
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

export default Bleed;
