import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";

const DxcTable = ({ children, margin }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.table}>
      <DxcTableContainer margin={margin}>
        <DxcTableContent>{children}</DxcTableContent>
      </DxcTableContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

const DxcTableContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

    
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarThumbColor};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBarTrackColor};
    border-radius: 6px;
  }
`;

const DxcTableContent = styled.table`
  border-collapse: collapse;
  width: 100%;

  & tr {
    border-bottom: ${(props) =>
      `${props.theme.rowSeparatorThickness} ${props.theme.rowSeparatorStyle} ${props.theme.rowSeparatorColor}`};
    height: ${(props) => props.theme.rowHeight};
  }
  & td {
    background-color: ${(props) => props.theme.dataBackgroundColor};
    font-family: ${(props) => props.theme.dataFontFamily};
    font-size: ${(props) => props.theme.dataFontSize};
    font-style: ${(props) => props.theme.dataFontStyle};
    font-weight: ${(props) => props.theme.dataFontWeight};
    color: ${(props) => props.theme.dataFontColor};
    text-transform: ${(props) => props.theme.dataFontTextTransform};
    text-align: ${(props) => props.theme.dataTextAlign};
    min-height: 48px;
    padding: 14px 20px 12px 40px;
  }
  & th {
    background-color: ${(props) => props.theme.headerBackgroundColor};
    font-family: ${(props) => props.theme.headerFontFamily};
    font-size: ${(props) => props.theme.headerFontSize};
    font-style: ${(props) => props.theme.headerFontStyle};
    font-weight: ${(props) => props.theme.headerFontWeight};
    color: ${(props) => props.theme.headerFontColor};
    text-transform: ${(props) => props.theme.headerFontTextTransform};
    text-align: ${(props) => props.theme.headerTextAlign};
    min-height: 60px;
    padding: 16px 20px 16px 40px;
  }
  & th:first-child {
    border-top-left-radius: ${(props) => props.theme.headerBorderRadius};
  }
  & th:last-child {
    border-top-right-radius: ${(props) => props.theme.headerBorderRadius};
  }
`;

export default DxcTable;
