import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

import DefaultWhite from "./dxc_logo_white.png";
import DefaultBlack from "./dxc_logo_black.png";

import PropTypes from "prop-types";

import { colors, spaces } from "../common/variables.js";

const DxcHeader = ({
  theme = "light",
  underlined = false,
  logoSrc = "default",
  onClick = "",
  children,
  margin,
  padding
}) => {
  function onClickHandle() {
    if (typeof onClick === "function") {
      onClick();
    }
  }
  return (
    <HeaderContainer theme={theme} underlined={underlined} position="static" margin={margin}>
      <a onClick={() => onClickHandle()}>
        <LogoIcon
          onLogoClick={onClick}
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
      </a>
      <ChildContainer padding={padding}>{children}</ChildContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(AppBar)`
  margin-bottom: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};

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
        ? `solid ${colors.black}  2px`
        : props.theme === "light" && props.underlined === false
        ? "none"
        : props.theme === "dark" && props.underlined === true
        ? `solid ${colors.white}  2px`
        : props.theme === "dark" && props.underlined === false
        ? "none"
        : `solid ${colors.black}  2px`};

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
    min-height: 64px;
  }
  &.MuiAppBar-root {
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 20px;
    justify-content: space-between;
  }
`;

const LogoIcon = styled.img`
  max-height: 32px;
  width: auto;
  vertical-align: middle;

  cursor: ${props => {
    if (props.onLogoClick === "") {
      return "default";
    } else {
      return "pointer";
    }
  }};
`;

const ChildContainer = styled.div`
  width: calc(100% - 186px);
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  padding: ${props => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
  padding-top: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;

DxcHeader.propTypes = {
  logoSrc: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  underlined: PropTypes.bool,
  onClick: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};

export default DxcHeader;
