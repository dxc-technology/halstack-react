import styled from "styled-components";
import {colors, spaces} from "../common/variables.js";
import React from "react";

const DxcTable = ({ children, margin }) => {
  return (
    <DxcTableContainer margin={margin}>
      {children}
    </DxcTableContainer>
  );
};

const DxcTableContainer = styled.table`
  border-collapse: collapse;

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

  & tr:nth-child(odd) {
    background-color: ${colors.darkWhite};
  }
  & tr:nth-child(1) {
    background-color: ${colors.white};
  }
  & td {
    color: ${colors.darkGrey};
  }
  & th,
  td {
    padding: 12px 20px 12px 10px;
  }

  & th {
    text-align: left;
    text-transform: uppercase;
    font-size: 14px;
  }
`;



export default DxcTable;
