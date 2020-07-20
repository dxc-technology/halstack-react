/* eslint-disable no-else-return */
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcButton = ({
  label = "",
  mode = "basic",
  disabled = false,
  theme = "light",
  disableRipple = false,
  iconPosition = "before",
  iconSrc = "",
  onClick = "",
  margin,
  size,
}) => {
  const colorsTheme = useContext(ThemeContext) || colors;

  return (
    <ThemeProvider theme={colorsTheme}>
      <DxCButton
        margin={margin}
        mode={mode}
        brightness={theme}
        disabled={disabled}
        iconPosition={iconPosition}
        size={size}
      >
        <Button
          disabled={disabled}
          disableRipple={disableRipple}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          <LabelContainer>{label}</LabelContainer>
          {iconSrc && <ButtonIcon label={label} iconPosition={iconPosition} src={iconSrc} />}
        </Button>
      </DxCButton>
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

const LabelContainer = styled.span`
  line-height: 18px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ButtonIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
`;
const DxCButton = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  display: inline-block;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};

  .MuiButtonBase-root {
    .MuiButton-label {
      display: flex;
      flex-direction: ${(props) => (props.iconPosition === "after" && "row") || "row-reverse"};
      align-items: center;
    }
    letter-spacing: 1px;
    box-shadow: none;
    font-size: 14px;
    font-weight: 500;
    padding: ${(props) => (props.size === "small" && "11px") || "12px 30px"};
    min-width: ${(props) => (props.size === "small" && "calc(100% - 22px)") || "unset"};
    border-radius: 4px;
    width: 100%;
    min-height: 43px;

    line-height: 1;
    font-family: "Open Sans", sans-serif;
    ${(props) => {
      const { mode, brightness } = props;
      if (mode === "basic") {
        return `
          background-color: ${props.theme.yellow};
          color: ${props.theme.black};
          &:hover{
            background-color: ${(brightness === "light" && props.theme.black) || props.theme.lightBlack};
            color: ${props.theme.yellow}; 
          }
          &:disabled{ 
            background-color:${props.theme.yellow};
            opacity:0.5;
            color: ${props.theme.black};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child {
            background-color: ${props.theme.white};
          }
        `;
      } else if (mode === "outlined") {
        return `
          background-color: transparent;
          padding: 10px 28px;
          color: ${(brightness === "light" && props.theme.black) || props.theme.white};
          border: 2px solid;
          border-color: ${(brightness === "light" && props.theme.black) || props.theme.white};
          &:hover{
            border-color: ${props.theme.yellow};
            background-color: transparent;
          }
          &:disabled{ 
            background-color:${(brightness === "light" && "transparent") || props.theme.black};
            border-color:${(brightness === "light" && props.theme.lightGrey) || props.theme.darkGrey};
            color:${(brightness === "light" && props.theme.lightGrey) || props.theme.darkGrey};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child{
            background-color:${(brightness === "light" && props.theme.darkGrey) || props.theme.lightGrey};
          }
          .MuiTouchRipple-root {
            border-radius: 2px;
          }
          
        `;
      } else if (mode === "flat") {
        return `
          background-color: ${(brightness === "light" && "transparent") || props.theme.black};
          color: ${(brightness === "light" && props.theme.black) || props.theme.white};
          &:hover{
            background-color: ${props.theme.lightGrey};
            color: ${props.theme.black};
          }
          &:disabled{ 
            background-color:${(brightness === "light" && props.theme.lightGrey) || props.theme.darkGrey};
            opacity:0.5;
            color:${(brightness === "light" && props.theme.black) || props.theme.lightGrey};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child{
            background-color:${(brightness === "light" && props.theme.darkGrey) || props.theme.darkGrey};
          }
        `;
      } else {
        return `
          background-color: ${props.theme.yellow};
          color: ${props.theme.black}
          box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.16);
          &:hover{
            background-color:${(brightness === "light" && props.theme.black) || props.theme.lightBlack};
            color:${props.theme.yellow};
          }
          &:disabled{ 
            background-color:${props.theme.yellow};
            opacity:0.5;
            box-shadow:none;
            color: ${props.theme.darkGrey};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child {
            background-color: ${props.theme.white};
          }
        `;
      }
    }}
  }
`;

DxcButton.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  label: PropTypes.string,
  mode: PropTypes.oneOf(["basic", "outlined", "raised", "flat"]),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  disableRipple: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
};

export default DxcButton;
