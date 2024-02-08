import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import useTheme from "../useTheme";
import TablePropsType from "./types";

const DxcTable = ({ children, margin }: TablePropsType): JSX.Element => {
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

const DxcTableContainer = styled.div<{ margin: TablePropsType["margin"] }>`
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
    height: 8px;
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
    height: 60px;
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
    line-height: ${(props) => props.theme.dataTextLineHeight};
    padding: ${(props) =>
      `${props.theme.dataPaddingTop} ${props.theme.dataPaddingRight} ${props.theme.dataPaddingBottom} ${props.theme.dataPaddingLeft}`};
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
    line-height: ${(props) => props.theme.headerTextLineHeight};
    padding: ${(props) =>
      `${props.theme.headerPaddingTop} ${props.theme.headerPaddingRight} ${props.theme.headerPaddingBottom} ${props.theme.headerPaddingLeft}`};
  }
  & th:first-child {
    border-top-left-radius: ${(props) => props.theme.headerBorderRadius};
  }
  & th:last-child {
    border-top-right-radius: ${(props) => props.theme.headerBorderRadius};
  }
  & td:last-child {
    padding-right: 40px;
  }
`;

export default DxcTable;
