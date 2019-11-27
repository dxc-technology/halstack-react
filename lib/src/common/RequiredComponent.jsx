import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "./variables.js"


const DxcRequired = ({ theme = "light" }) => {
  return <RequiredSpan theme={theme}>*</RequiredSpan>;
};
const RequiredSpan = styled.span`
  color: ${props => (props.theme === "dark" ? colors.lightRed : colors.darkRed)};
  margin-right: 1px;
  cursor: default;
`;

DxcRequired.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"])
};


export default DxcRequired;
