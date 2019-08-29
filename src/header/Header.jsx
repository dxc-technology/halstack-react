import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

import DefaultWhite from "./dxc_logo_white.png";
import DefaultBlack from "./dxc_logo_black.png";

import PropTypes from "prop-types";

const DxcHeader = ({ theme = "light", mode = "basic", logoSrc = "default", children }) => {
  return (
    <HeaderContainer theme={theme} mode={mode} position="static">
      <LogoIcon
        logoSrc={logoSrc}
        src={
          theme === "light" && mode === "outlined" && logoSrc === "default"
            ? DefaultBlack
            : theme === "light" && mode === "basic" && logoSrc === "default"
            ? DefaultWhite
            : theme === "dark" && mode === "outlined" && logoSrc === "default"
            ? DefaultWhite
            : theme === "dark" && mode === "basic" && logoSrc === "default"
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
      props.theme === "light" && props.mode === "outlined"
        ? "#FFFFFF"
        : props.theme === "light" && props.mode === "basic"
        ? "#000000"
        : props.theme === "dark" && props.mode === "outlined"
        ? "#000000"
        : props.theme === "dark" && props.mode === "basic"
        ? "#FFFFFF"
        : "#FFFFFF"};

    color: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? "#000000"
        : props.theme === "light" && props.mode === "basic"
        ? "#FFFFFF"
        : props.theme === "dark" && props.mode === "outlined"
        ? "#FFFFFF"
        : props.theme === "dark" && props.mode === "basic"
        ? "#000000"
        : "#000000"};

    border-bottom: ${props =>
      props.theme === "light" && props.mode === "outlined"
        ? "solid #000000 2px;"
        : props.theme === "light" && props.mode === "basic"
        ? "none"
        : props.theme === "dark" && props.mode === "outlined"
        ? "solid #FFFFFF 2px"
        : props.theme === "dark" && props.mode === "basic"
        ? "none"
        : "solid #000000 2px"};

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
    min-height: ${props => (props.mode === "outlined" ? "62px" : "64px")};
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
  mode: PropTypes.oneOf(["basic", "outlined", ""])
};


export default DxcHeader;
