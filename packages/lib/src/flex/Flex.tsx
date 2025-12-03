import styled from "styled-components";
import FlexPropsType, { StyledProps } from "./types";

const Flex = styled.div<StyledProps>`
  display: flex;
  ${(props) => `
    ${typeof props.alignContent === "string" ? `align-content: ${props.alignContent};` : ""}
    ${typeof props.alignItems === "string" ? `align-items: ${props.alignItems};` : ""}
    ${typeof props.alignSelf === "string" ? `align-self: ${props.alignSelf};` : ""}
    ${typeof props.$basis === "string" ? `flex-basis: ${props.$basis};` : ""}
    ${typeof props.$direction === "string" ? `flex-direction: ${props.$direction};` : ""}
    ${props.$fullHeight ? "height: 100%;" : ""}
    ${typeof props.$gap === "string" ? `gap: ${props.$gap};` : ""}
    ${typeof props.$gap === "object" ? `column-gap: ${props.$gap.columnGap}; row-gap: ${props.$gap.rowGap};` : ""}
    ${typeof props.$grow === "number" ? `flex-grow: ${props.$grow};` : ""}
    ${typeof props.justifyContent === "string" ? `justify-content: ${props.justifyContent};` : ""}
    ${typeof props.$order === "number" ? `order: ${props.$order};` : ""}
    ${typeof props.$shrink === "number" ? `flex-shrink: ${props.$shrink};` : ""}
    ${typeof props.$wrap === "string" ? `flex-wrap: ${props.$wrap};` : ""}
  `}
`;

const DxcFlex = ({ basis, direction, fullHeight = false, gap, grow, order, shrink, wrap, ...props }: FlexPropsType) => (
  <Flex
    $basis={basis}
    $direction={direction}
    $gap={gap}
    $grow={grow}
    $order={order}
    $shrink={shrink}
    $wrap={wrap}
    $fullHeight={fullHeight}
    {...props}
  />
);

export default DxcFlex;
