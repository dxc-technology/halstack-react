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
    <Inline as={as} alignX={alignX} alignY={alignY} gutter={gutter} reverse={reverse} divider={divider}>
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
  ${({ alignX, alignY, gutter, reverse, divider }) => `
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: stretch;
    justify-content: ${alignX === "start" || alignX === "end" ? `flex-${alignX}` : alignX};
    gap: ${divider ? `calc(${gutter}/2)` : gutter};

    & > * {
      align-self: ${alignY === "start" || alignY === "end" ? `flex-${alignY}` : alignY};
    }
  `}
  flex-wrap: wrap;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #999999;
  align-self: stretch;
`;

export default DxcInline;
