import React, { createContext, useContext, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { ColumnContextProps, ColumnProps, ColumnsProps } from "./types";
import DxcStack from "../stack/Stack";

const ColumnContext = createContext<ColumnContextProps | null>(null);

export const useColumnContext = () => {
  const width = useContext(ColumnContext);
  return width;
};

const getWidthPerChild = (children) => {
  let availableWidth = 8;
  let childrenWithoutWidth = 0;
  React.Children.forEach(children, (child) => {
    if (child.props.width && Number(child.props.width)) availableWidth = availableWidth - Number(child.props.width);
    else childrenWithoutWidth++;
  });

  if (childrenWithoutWidth > 0) {
    return availableWidth / childrenWithoutWidth;
  }

  return null;
};

const DxcColumns = ({
  alignX = "stretch",
  alignY = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: ColumnsProps): JSX.Element => {
  const [widthPerChild, setWidthPerChild] = useState(null);

  useLayoutEffect(() => {
    setWidthPerChild(getWidthPerChild(children));
  }, [children]);

  return (
    <Columns as={as} alignY={alignY} gutter={gutter} reverse={reverse} divider={divider}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child.type === DxcColumns.Column ? (
              React.cloneElement(child, {
                alignX,
                width:
                  child.props.width && (Number(child.props.width) || child.props.width === "content")
                    ? child.props.width
                    : widthPerChild,
              })
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

const DxcColumn = ({ width = "auto", children, ...stackProps }: ColumnProps): JSX.Element => {
  return (
    <ColumnContext.Provider value={width}>
      <DxcStack {...stackProps}>{children}</DxcStack>
    </ColumnContext.Provider>
  );
};

DxcColumns.Column = DxcColumn;

const Columns = styled.div<ColumnsProps>`
  display: flex;
  ${({ alignY, gutter, reverse, divider }) => `
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: ${alignY === "start" || alignY === "end" ? `flex-${alignY}` : alignY};
    gap: ${divider ? `calc(${gutter}/2)` : gutter};
  `}
  flex-grow: 1;
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: #999999;
`;

export default DxcColumns;
