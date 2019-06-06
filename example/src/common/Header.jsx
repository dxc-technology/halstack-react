import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

function Header() {
  return (
    <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: black;
  display: flex;
  padding: 5px 20px;
`;

const StyledLogo = styled.img`
  height: 40px;
  margin: 15px 0px;
`;


export default Header;
