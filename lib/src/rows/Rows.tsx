import React from "react";
import styled from "styled-components";
import { RowProps, RowsProps } from "./types";

const DxcRows = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: RowsProps): JSX.Element => {
  return (
    <RowsContainer as={as} alignX={alignX} gutter={gutter} reverse={reverse}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {React.cloneElement(child, { alignY })}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </RowsContainer>
  );
};

const DxcRow = ({ height = "auto", alignY, children }: RowProps): JSX.Element => {
  return (
    <StyledRow height={height} alignY={alignY}>
      {children}
    </StyledRow>
  );
};

DxcRows.Row = DxcRow;

const RowsContainer = styled.div<RowsProps>`
  display: flex;
  ${({ alignX, gutter, reverse }) => `
    flex-direction: ${reverse ? "column-reverse" : "column"};
    align-items: ${alignX};
    gap: ${gutter};
  `}
  flex-grow: 1;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #999999;
`;

const StyledRow = styled.div<RowProps>`
  ${({ height }) =>
    height === "content"
      ? "height: fit-content"
      : height === "auto"
      ? "flex-grow: 1;"
      : `height: ${(parseInt(height) / 8) * 100}%`};

  display: flex;
  align-items: ${({ alignY }) => alignY};
`;

export default DxcRows;
