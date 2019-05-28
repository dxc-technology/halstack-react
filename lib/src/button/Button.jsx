import React from "react";
import styled from "styled-components";

const Button = ({ label }) => <StyledButton>{label}</StyledButton>;

const StyledButton = styled.button`
  background: yellow;
`;

export default Button;
