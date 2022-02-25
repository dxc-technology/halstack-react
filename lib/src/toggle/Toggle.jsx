/* eslint-disable no-else-return */
import React from "react";
import { ToggleButton } from "@material-ui/lab";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";

const DxcToggle = ({
  label = "",
  iconSrc = "",
  mode = "basic",
  theme = "light",
  disableRipple = false,
  iconPosition = "before",
  disabled = false,
  onClick,
  selected = false,
  margin,
  size = "fitContent",
}) => {
  const colorsTheme = useTheme();

  const handlerToggleClick = () => {
    if (!disabled && typeof onClick === "function") {
      onClick(!selected);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <DxcToggleContainer
        margin={margin}
        brightness={theme}
        disabled={disabled}
        disableRipple={disableRipple}
        selected={selected}
        label={label}
        mode={mode}
        iconPosition={iconPosition}
        value
        size={size}
        onClick={handlerToggleClick}
      >
        <ToggleButton disabled={disabled} disableRipple={disableRipple} selected={selected} label={label} value>
          <ContentContainer iconPosition={iconPosition} label={label} iconSrc={iconSrc}>
            {iconSrc !== "" && <IconContainer iconPosition={iconPosition} label={label} src={iconSrc}></IconContainer>}
            {label !== "" && <LabelContainer>{label}</LabelContainer>}
          </ContentContainer>
        </ToggleButton>
      </DxcToggleContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const DxcToggleContainer = styled.div`
  & {
    margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
    margin-top: ${(props) =>
      props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
    margin-right: ${(props) =>
      props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
    margin-bottom: ${(props) =>
      props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
    margin-left: ${(props) =>
      props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

    opacity: ${(props) => (props.disabled ? "0.5" : "1")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    display: inline-block;
    width: ${(props) => calculateWidth(props.margin, props.size)};
  }

  .MuiToggleButton-label {
    font-size: 14px;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) =>
      props.brightness === "dark" && props.mode === "outlined" ? props.theme.white : props.theme.black};
  }
  .MuiButtonBase-root {
    width: ${(props) => calculateWidth(props.margin, props.size)};
    min-height: ${(props) => (props.mode === "outlined" ? "41px" : "43px")};
    background-color: ${(props) => (props.mode !== "outlined" ? props.theme.darkWhite : "transparent")};
    &:hover {
      background-color: ${(props) =>
        props.mode === "basic"
          ? props.theme.lightGrey
          : props.brightness === "dark"
          ? props.theme.darkGrey
          : props.theme.darkWhite};
      .MuiToggleButton-label {
        color: ${(props) =>
          props.brightness === "dark" && props.mode === "outlined" ? props.theme.white : props.theme.black};
      }
    }
  }

  .MuiToggleButton-root {
    min-width: 42px;
    height: 43px;
    border: ${(props) =>
      props.mode === "basic"
        ? "none !important"
        : props.brightness === "dark" && !props.selected
        ? `2px solid ${props.theme.white} !important`
        : props.brightness === "dark" && props.selected
        ? `2px solid ${props.theme.yellow} !important`
        : `2px solid ${props.theme.black} !important`};

    border-radius: 4px !important;
  }

  .MuiToggleButton-root.Mui-selected {
    background-color: ${(props) =>
      props.mode === "outlined"
        ? props.brightness === "light"
          ? props.theme.darkWhite
          : "transparent"
        : props.theme.yellow};
    &:hover {
      background-color: ${(props) =>
        props.mode === "basic" && props.brightness === "light"
          ? props.theme.black
          : props.mode === "basic" && props.brightness === "dark"
          ? props.theme.lightBlack
          : props.brightness === "light"
          ? props.theme.lightGrey
          : props.theme.darkGrey};
      .MuiToggleButton-label {
        color: ${(props) =>
          props.mode === "basic"
            ? props.theme.yellow
            : props.brightness === "dark" && props.mode === "outlined"
            ? props.theme.white
            : props.theme.black};
      }
    }
  }

  .MuiToggleButton-root:last-child,
  .MuiToggleButton-root:first-child,
  .MuiToggleButton-root:not(:first-child) {
    padding: ${(props) =>
      props.label !== "" && props.size !== "small"
        ? props.mode === "outlined"
          ? "8px 30px "
          : "12px 30px"
        : props.mode === "outlined"
        ? "8px 10px "
        : "12px 10px"};
  }

  .MuiTouchRipple-child {
    background-color: ${(props) =>
      props.mode === "basic"
        ? props.selected === false
          ? props.theme.yellow
          : props.theme.darkWhite
        : props.selected === false
        ? props.theme.lightGrey
        : props.theme.white};
  }
`;

const ContentContainer = styled.span`
  line-height: 1;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.iconPosition === "after" ? "row-reverse" : "row")};
`;

const IconContainer = styled.img`
  width: 20px;
  height: 20px;
  line-height: 1;
  margin-right: ${(props) => (props.label !== "" && props.iconPosition === "before" ? "10px" : "")};
  margin-left: ${(props) => (props.label !== "" && props.iconPosition === "after" ? "10px" : "")};
`;

const LabelContainer = styled.span``;

DxcToggle.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  theme: PropTypes.oneOf(["light", "dark", ""]),
  mode: PropTypes.oneOf(["basic", "outlined", ""]),
  iconPosition: PropTypes.oneOf(["before", "after", ""]),
  iconSrc: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onClick: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

export default DxcToggle;
