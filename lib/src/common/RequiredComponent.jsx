import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
