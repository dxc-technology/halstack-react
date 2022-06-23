import React from "react";
import styled from "styled-components";
import StackPropsType from "./types";

export default function Stack({
  alignX = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: StackPropsType): JSX.Element {
  return (
    <StyledStack gutter={gutter} alignX={alignX} reverse={reverse} as={as}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </StyledStack>
  );
}

const Divider = styled.div`
  height: 1px;
  background-color: #999999;
`;

const StyledStack = styled.div<StackPropsType>`
  display: flex;
  ${({ alignX, gutter, reverse }) => `
    flex-direction: ${reverse ? "column-reverse" : "column"};
    align-items: ${alignX};
    gap: ${gutter};
  `}
`;
