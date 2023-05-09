import React from "react";
import styled from "styled-components";
import FlexPropsType, { StyledProps } from "./types";

const DxcFlex = ({
  direction = "row",
  wrap = "nowrap",
  gap = "0rem",
  order = 0,
  grow = 0,
  shrink = 1,
  basis = "auto",
  children,
  ...props
}: FlexPropsType): JSX.Element => (
  <Flex
    $direction={direction}
    $wrap={wrap}
    $order={order}
    $grow={grow}
    $shrink={shrink}
    $basis={basis}
    $gap={gap}
    {...props}
  >
    {children}
  </Flex>
);

const Flex = styled.div<StyledProps>`
  display: flex;
  ${({
    justifyContent = "flex-start",
    alignItems = "stretch",
    alignContent = "normal",
    alignSelf = "auto",
    ...props
  }) => `
    flex-direction: ${props.$direction}; 
    flex-wrap: ${props.$wrap}; 
    justify-content: ${justifyContent}; 
    align-items: ${alignItems};
    align-content: ${alignContent};
    align-self: ${alignSelf};
    gap: ${typeof props.$gap === "object" ? `${props.$gap.rowGap} ${props.$gap.columnGap}` : props.$gap};
    order: ${props.$order};
    flex-grow: ${props.$grow};
    flex-shrink: ${props.$shrink};
    flex-basis: ${props.$basis};
  `}
`;

export default DxcFlex;
