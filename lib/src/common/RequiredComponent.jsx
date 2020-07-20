import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "./variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcRequired = ({ theme = "light" }) => {
  return <RequiredSpan brightness={theme}>*</RequiredSpan>;
};
const RequiredSpan = styled.span`
  color: ${(props) => (props.brightness === "dark" ? props.theme.lightRed : props.theme.darkRed)};
  margin-right: 1px;
  cursor: default;
`;

DxcRequired.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default DxcRequired;
