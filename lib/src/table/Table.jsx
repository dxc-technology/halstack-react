import styled from "styled-components";
import { colors, spaces } from "../common/variables.js";
import React from "react";

const DxcTable = ({ children, margin }) => {
  return <DxcTableContainer margin={margin}>{children}</DxcTableContainer>;
};

const DxcTableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;

  margin: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  & tr {
    border-bottom: 1px solid ${colors.lightGrey};
  }

  & td {
    color: ${colors.darkGrey};
    min-height: 48px;
  }

  & th {
    padding: 16px 20px 16px 40px;
    min-height: 60px;
  }

  & td {
    padding: 14px 20px 12px 40px;
  }

  & th {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 100;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  & th:first-child {
    width: 20%;
    border-radius: 4px 0px 0px 0px;
  }

  & th:nth-child(3) {
    border-radius: 0px 4px 0px 0px;
  }
`;

export default DxcTable;
