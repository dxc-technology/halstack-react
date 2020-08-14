import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "./variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcRequired = ({ theme = "light" }) => {
  return <RequiredSpan>*</RequiredSpan>;
};
const RequiredSpan = styled.span`
  color: #d0011b;
  margin-right: 1px;
  cursor: default;
`;

DxcRequired.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default DxcRequired;
