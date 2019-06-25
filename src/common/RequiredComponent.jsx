import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const DxcRequired = ({ theme = "light" }) => {
  return <RequiredSpan theme={theme}>*</RequiredSpan>;
};
const RequiredSpan = styled.span`
  color: ${props => (props.theme === "dark" ? "#FF6161" : "#ee2222")};
  margin-right: 2px;
  cursor: default;
`;

DxcRequired.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"])
};


export default DxcRequired;
