import React from "react";
import styled from "styled-components";
import InlineProps from "./types";

const DxcInline = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: InlineProps): JSX.Element => {
  return (
    <InlineContainer as={as} alignX={alignX} alignY={alignY} gutter={gutter} reverse={reverse}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </InlineContainer>
  );
};

const InlineContainer = styled.div<InlineProps>`
  display: flex;
  ${({ alignX, alignY, gutter, reverse }) => `
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: ${alignY};
    justify-content: ${alignX};
    gap: ${gutter};
  `}
  flex-wrap: wrap;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #999999;
`;

export default DxcInline;
