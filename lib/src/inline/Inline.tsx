import React from "react";
import styled from "styled-components";
import InlineProps from "./types";

const DxcInline = ({
  alignX = "start",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: InlineProps): JSX.Element => {
  return (
    <Inline as={as} alignX={alignX} alignY={alignY} gutter={gutter} reverse={reverse}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </Inline>
  );
};

const Inline = styled.div<InlineProps>`
  display: flex;
  ${({ alignX, alignY, gutter, reverse }) => `
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: ${alignY === "start" || alignY === "end" ? `flex-${alignY}` : alignY};
    justify-content: ${alignX === "start" || alignX === "end" ? `flex-${alignX}` : alignX};
    gap: ${gutter};
  `}
  flex-wrap: wrap;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #999999;
`;

export default DxcInline;
