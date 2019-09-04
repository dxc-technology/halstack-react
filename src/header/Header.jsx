import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

import DefaultWhite from "./dxc_logo_white.png";
import DefaultBlack from "./dxc_logo_black.png";

import PropTypes from "prop-types";

import colors from "../common/variables.js";

const DxcHeader = ({ theme = "light", underlined = false, logoSrc = "default", children }) => {
  return (
    <HeaderContainer theme={theme} underlined={underlined} position="static">
      <LogoIcon
        logoSrc={logoSrc}
        src={
          theme === "light" && underlined && logoSrc === "default"
            ? DefaultBlack
            : theme === "light" && !underlined && logoSrc === "default"
            ? DefaultWhite
            : theme === "dark" && underlined && logoSrc === "default"
            ? DefaultWhite
            : theme === "dark" && !underlined && logoSrc === "default"
            ? DefaultBlack
            : logoSrc
        }
      />
      <div className="ChildComponents">{children}</div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(AppBar)`
  &.MuiAppBar-colorPrimary {
    background-color: ${props =>
      props.theme === "light" && props.underlined === true
        ? colors.white
        : props.theme === "light" && props.underlined === false
        ? colors.black
        : props.theme === "dark" && props.underlined === true
        ? colors.black
        : props.theme === "dark" && props.underlined === false
        ? colors.white
        : colors.white};

    color: ${props =>
      props.theme === "light" && props.underlined === true
        ? colors.black
        : props.theme === "light" && props.underlined === false
        ? colors.white
        : props.theme === "dark" && props.underlined === true
        ? colors.white
        : props.theme === "dark" && props.underlined === false
        ? colors.black
        : colors.black};

    border-bottom: ${props =>
      props.theme === "light" && props.underlined === true
        ? "solid " + colors.black + " 2px"
        : props.theme === "light" && props.underlined === false
        ? "none"
        : props.theme === "dark" && props.underlined === true
        ? "solid " + colors.white + " 2px"
        : props.theme === "dark" && props.underlined === false
        ? "none"
        : "solid " + colors.black + " 2px"};

    font-family: "Open Sans", sans-serif;

    &.MuiPaper-elevation4 {
      box-shadow: none;
    }
    .ChildComponents {
      display: flex;
      align-items: center;
    }
  }
  & {
    min-height: ${props => (props.underlined === true ? "62px" : "64px")};
  }
  &.MuiAppBar-root {
    flex-direction: row;
    align-items: center;
    padding: 0px 60px 0px 20px;
    justify-content: space-between;
  }
`;

const LogoIcon = styled.img`
  height: ${props => {
    if (props.logoSrc === "default") {
      return "34px";
    }
  }};

  width: ${props => {
    if (props.logoSrc === "default") {
      return "auto";
    }
  }};
`;

DxcHeader.propTypes = {
  logoSrc: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  underlined: PropTypes.bool
};


export default DxcHeader;
