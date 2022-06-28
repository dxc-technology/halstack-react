import React, { createContext, useContext, useMemo } from "react";
import styled from "styled-components";
import { ColumnContextProps, ColumnProps, ColumnsProps } from "./types";

const ColumnsContext = createContext<ColumnContextProps | null>(null);

const DxcColumns = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: ColumnsProps): JSX.Element => {
  const contextValue = useMemo(() => ({ alignX }), [alignX]);

  return (
    <Columns as={as} alignY={alignY} gutter={gutter} reverse={reverse}>
      <ColumnsContext.Provider value={contextValue}>
        {React.Children.map(children, (child, index) => {
          return (
            <>
              {child.type === DxcColumns.Column ? child : <DxcColumn>{child}</DxcColumn>}
              {divider && index !== React.Children.count(children) - 1 && <Divider />}
            </>
          );
        })}
      </ColumnsContext.Provider>
    </Columns>
  );
};

const DxcColumn = ({ width = "auto", children }: ColumnProps): JSX.Element => {
  const { alignX } = useContext(ColumnsContext);

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

const Column = styled.div<ColumnProps & ColumnContextProps>`
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
