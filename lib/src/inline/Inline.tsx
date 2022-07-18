import React from "react";
import styled from "styled-components";
import { useRowContext } from "../rows/Rows";
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
  const height = useRowContext();

  return (
    <Inline as={as} alignX={alignX} alignY={alignY} gutter={gutter} reverse={reverse} height={height} divider={divider}>
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

const Inline = styled.div<
  InlineProps & { height?: "auto" | "content" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" }
>`
  display: flex;
  ${({ alignX, alignY, gutter, reverse, divider }) => `
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: stretch;
    justify-content: ${alignX === "start" || alignX === "end" ? `flex-${alignX}` : alignX};
    gap: ${divider ? `calc(${gutter}/2 - 1px)` : gutter};

    & > * {
      align-self: ${alignY === "start" || alignY === "end" ? `flex-${alignY}` : alignY};
    }
  `}
  flex-wrap: wrap;
  flex-grow: 1;

  ${({ height }) =>
    height &&
    (height === "content"
      ? "height: fit-content"
      : height === "auto"
      ? ""
      : `height: ${(parseInt(height) / 8) * 100}%`)};
  padding: 0px;
  margin: 0px;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #999999;
  align-self: stretch;
`;

export default DxcInline;
