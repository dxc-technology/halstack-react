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
      gap={gap}
      as={as}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexPropsType>`
  display: flex;
  ${({ direction, wrap, justifyContent, alignItems, alignContent, gap }) =>
    `flex-direction: ${direction}; 
    flex-wrap: ${wrap}; 
    justify-content: ${justifyContent}; 
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${typeof gap === "object" ? `${gap.rowGap} ${gap.columnGap}` : gap};
    `}
`;
