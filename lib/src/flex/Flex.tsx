import React from "react";
import styled from "styled-components";
import FlexPropsType from "./types";

export default function Flex({
  direction = "row",
  wrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "normal",
  gap = "0",
  order = 0,
  grow = 0,
  shrink = 1,
  basis = "auto",
  alignSelf = "auto",
  as,
  children,
}: FlexPropsType): JSX.Element {
  return (
    <FlexContainer
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      order={order}
      grow={grow}
      shrink={shrink}
      basis={basis}
      alignSelf={alignSelf}
      gap={gap}
      as={as}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexPropsType>`
  display: flex;
  ${({ direction, wrap, justifyContent, alignItems, alignContent, gap, order, grow, shrink, basis, alignSelf }) =>
    `flex-direction: ${direction}; 
    flex-wrap: ${wrap}; 
    justify-content: ${justifyContent}; 
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${typeof gap === "object" ? `${gap.rowGap} ${gap.columnGap}` : gap};
    order: ${order};
    flex-grow: ${grow};
    flex-shrink: ${shrink};
    flex-basis: ${basis};
    align-self: ${alignSelf};
    `}
`;
