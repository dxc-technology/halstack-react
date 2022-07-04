import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { RowProps, RowContextProps, RowsProps } from "./types";
import DxcInline from "../inline/Inline";

const RowContext = createContext<RowContextProps | null>(null);

export const useRowContext = () => {
  const height = useContext(RowContext);
  return height;
};

const DxcRows = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: RowsProps): JSX.Element => {
  const [heightPerChild, setHeightPerChild] = useState(null);

  useEffect(() => {
    let availableHeight = 8;
    let childrenWithoutHeight = 0;
    React.Children.forEach(children, (child) => {
      if (child.props.height && Number(child.props.height))
        availableHeight = availableHeight - Number(child.props.height);
      else childrenWithoutHeight++;
    });

    if (childrenWithoutHeight > 0) {
      setHeightPerChild(availableHeight / childrenWithoutHeight);
    }
  }, [children]);

  return (
    <Rows as={as} alignX={alignX} gutter={gutter} reverse={reverse}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child.type === DxcRows.Row ? (
              React.cloneElement(child, {
                alignY,
                height:
                  child.props.height && (Number(child.props.height) || child.props.height === "content")
                    ? child.props.height
                    : heightPerChild,
              })
            ) : (
              <DxcRow alignY={alignY}>{child}</DxcRow>
            )}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </Rows>
  );
};

const DxcRow = ({ height = "auto", children, ...inlineProps }: RowProps): JSX.Element => {
  return (
    <RowContext.Provider value={height}>
      <DxcInline {...inlineProps}>{children}</DxcInline>
    </RowContext.Provider>
  );
};

DxcRows.Row = DxcRow;

const Rows = styled.div<RowsProps>`
  display: flex;
  ${({ alignX, gutter, reverse }) => `
    flex-direction: ${reverse ? "column-reverse" : "column"};
    align-items: ${alignX === "start" || alignX === "end" ? `flex-${alignX}` : alignX};
    gap: ${gutter};
  `}
  flex-grow: 1;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #999999;
`;

export default DxcRows;
