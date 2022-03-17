import React from "react";
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
  switch (spacingName) {
    case "none":
      return "0rem";
    case "xxxsmall":
      return "0.125rem";
    case "xxsmall":
      return "0.25rem";
    case "xsmall":
      return "0.5rem";
    case "small":
      return "1rem";
    case "medium":
      return "1.5rem";
    case "large":
      return "2rem";
    case "xlarge":
      return "3rem";
    case "xxlarge":
      return "4rem";
    case "xxxlarge":
      return "5rem";
    default:
      return "0rem";
  }
}

const StyledInset = styled.div<InsetPropsType>`
  ${({ space, horizontal, vertical, top, right, bottom, left }: InsetPropsType) => `
  padding: ${getSpacingValue(top || vertical || space)} ${getSpacingValue(right || horizontal || space)}
    ${getSpacingValue(bottom || vertical || space)} ${getSpacingValue(left || horizontal || space)};
`}
`;
