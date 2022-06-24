import React from "react";
import styled from "styled-components";
import { ColumnProps, ColumnsProps } from "./types";

const DxcColumns = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: ColumnsProps): JSX.Element => {
  return (
    <Columns as={as} alignY={alignY} gutter={gutter} reverse={reverse}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child.type === DxcColumns.Column ? (
              React.cloneElement(child, { alignX })
            ) : (
              <DxcColumn alignX={alignX}>{child}</DxcColumn>
            )}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </Columns>
  );
};

const DxcColumn = ({ width = "auto", alignX, children }: ColumnProps): JSX.Element => {
  return (
    <Column width={width} alignX={alignX}>
      {children}
    </Column>
  );
};

DxcColumns.Column = DxcColumn;

const Columns = styled.div<ColumnsProps>`
  display: flex;
  ${({ alignY, gutter, reverse }) => `
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: ${alignY};
    gap: ${gutter};
  `}
  flex-grow: 1;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #999999;
`;

const Column = styled.div<ColumnProps>`
  ${({ width }) =>
    width === "content"
      ? "width: fit-content"
      : width === "auto"
      ? "flex-grow: 1;"
      : `width: ${(parseInt(width) / 8) * 100}%`};

  display: flex;
  flex-direction: column;
  align-items: ${({ alignX }) => alignX};
`;

export default DxcColumns;
