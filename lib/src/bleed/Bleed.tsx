import React from "react";
import styled from "styled-components";

type Spacing =
  | "none"
  | "xxxsmall"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

type BleedProps = {
  space?: Spacing;
  horizontal?: Spacing;
  vertical?: Spacing;
  top?: Spacing;
  right?: Spacing;
  bottom?: Spacing;
  left?: Spacing;
  children: React.ReactNode;
};

export default function Bleed({
  space,
  horizontal,
  vertical,
  top,
  right,
  bottom,
  left,
  children,
}: BleedProps): JSX.Element {
  return (
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

const StyledBleed = styled.div<BleedProps>`
  ${({ space, horizontal, vertical, top, right, bottom, left }: BleedProps) => `
    margin: -${getSpacingValue(top || vertical || space)} -${getSpacingValue(
    right || horizontal || space
  )} -${getSpacingValue(bottom || vertical || space)} -${getSpacingValue(left || horizontal || space)};
`}
`;
