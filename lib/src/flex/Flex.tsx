import React from "react";
import styled from "styled-components";
import FlexPropsType from "./types";

const DxcFlex = ({ children, ...props }: FlexPropsType): JSX.Element => <Flex {...props}>{children}</Flex>;

const Flex = styled.div<FlexPropsType>`
  display: flex;
  ${({ direction, wrap, justifyContent, alignItems, alignContent, gap, order, grow, shrink, basis, alignSelf }) => `
    flex-direction: ${direction}; 
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

export default DxcFlex;
