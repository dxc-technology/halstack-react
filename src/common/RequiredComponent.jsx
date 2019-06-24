import React from "react";
import styled from "styled-components";

const DxcRequired = ({ theme="light" }) => {
  return <RequiredSpan theme={theme}>*</RequiredSpan>;
};
const RequiredSpan = styled.span`
  color: ${props => (props.theme === "dark" ? "#FF6161" : "#ee2222")};
  margin-right: 2px;
  cursor: default;
`;

export default DxcRequired;
