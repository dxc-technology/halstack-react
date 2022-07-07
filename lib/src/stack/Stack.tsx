import React from "react";
import styled from "styled-components";
import { useColumnContext } from "../columns/Columns";
import StackPropsType from "./types";

const DxcStack = ({
  alignX = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: StackPropsType): JSX.Element => {
  const width = useColumnContext();

  return (
    <Stack gutter={gutter} alignX={alignX} reverse={reverse} as={as} width={width}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </Stack>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999999;
`;

const Stack = styled.div<
  StackPropsType & { width?: "auto" | "content" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" }
>`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  ${({ alignX, gutter, reverse }) => `
    flex-direction: ${reverse ? "column-reverse" : "column"};
    align-items: ${alignX === "start" || alignX === "end" ? `flex-${alignX}` : alignX};
    gap: ${gutter};
  `}
  padding: 0px;
  margin: 0px;

  ${({ width }) =>
    width === "content" ? "width: fit-content" : width === "auto" ? "" : `width: ${(parseInt(width) / 8) * 100}%`};
`;

export default DxcStack;
