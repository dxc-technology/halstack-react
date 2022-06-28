import React, { createContext, useContext, useMemo } from "react";
import styled from "styled-components";
import { RowProps, RowsContextProps, RowsProps } from "./types";

export const RowsContext = createContext<RowsContextProps | null>(null);

const DxcRows = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: RowsProps): JSX.Element => {
  const contextValue = useMemo(() => ({ alignY }), [alignY]);

  return (
    <Rows as={as} alignX={alignX} gutter={gutter} reverse={reverse}>
      <RowsContext.Provider value={contextValue}>
        {React.Children.map(children, (child, index) => {
          return (
            <>
              {child.type === DxcRows.Row ? child : <DxcRow>{child}</DxcRow>}
              {divider && index !== React.Children.count(children) - 1 && <Divider />}
            </>
          );
        })}
      </RowsContext.Provider>
    </Rows>
  );
};

const DxcRow = ({ height = "auto", children }: RowProps): JSX.Element => {
  const { alignY } = useContext(RowsContext);

  return (
    <Row height={height} alignY={alignY}>
      {children}
    </Row>
  );
};

DxcRows.Row = DxcRow;

const Rows = styled.div<RowsProps>`
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

const Row = styled.div<RowProps & RowsContextProps>`
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
