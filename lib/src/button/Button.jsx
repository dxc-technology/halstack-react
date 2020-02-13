/* eslint-disable no-else-return */
import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";

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
  size
}) => {
  return (
    <DxCButton
      margin={margin}
      mode={mode}
      theme={theme}
      disabled={disabled}
      onClick={() => onClick()}
      iconPosition={iconPosition}
      size={size}
    >
      <Button disabled={disabled} disableRipple={disableRipple}>
        <LabelContainer>{label}</LabelContainer>
        {iconSrc && <ButtonIcon label={label} iconPosition={iconPosition} src={iconSrc} />}
      </Button>
    </DxCButton>
  );
};

const sizes = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "unset"
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
`;

const ButtonIcon = styled.img`
  max-height: 15px;
  max-width: 15px;
  margin-left: ${props => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
`;
const DxCButton = styled.div`
  margin: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  display: inline-block;
  width: ${props => calculateWidth(props.margin, props.size)};
  cursor: ${props => (props.disabled && "not-allowed") || "pointer"};

  .MuiButtonBase-root {
    .MuiButton-label {
      display: flex;
      flex-direction: ${props => (props.iconPosition === "after" && "row") || "row-reverse"};
      align-items: center;
    }
    word-break: break-all;
    letter-spacing: 1px;
    box-shadow: none;
    font-size: 14px;
    font-weight: 500;
    padding: ${props => (props.size === "small" && "11px") || "12px 30px"};
    min-width: ${props=>(props.size === "small" && "calc(100% - 22px)") || "unset"};
    border-radius: 4px;
    width: 100%;
    min-height: 43px;

    line-height: 1;
    font-family: "Open Sans", sans-serif;
    ${props => {
      const { mode, theme } = props;
      if (mode === "basic") {
        return `
          background-color: ${colors.yellow};
          color: ${colors.black};
          &:hover{
            background-color: ${(theme === "light" && colors.black) || colors.lightBlack};
            color: ${colors.yellow}; 
          }
          &:disabled{ 
            background-color:${colors.yellow};
            opacity:0.5;
            color: ${colors.black};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child {
            background-color: ${colors.white};
          }
        `;
      } else if (mode === "outlined") {
        return `
          background-color: transparent;
          padding: 10px 28px;
          color: ${(theme === "light" && colors.black) || colors.white};
          border: 2px solid;
          border-color: ${(theme === "light" && colors.black) || colors.white};
          &:hover{
            border-color: ${colors.yellow};
            background-color: transparent;
          }
          &:disabled{ 
            background-color:${(theme === "light" && "transparent") || colors.black};
            border-color:${(theme === "light" && colors.lightGrey) || colors.darkGrey};
            color:${(theme === "light" && colors.lightGrey) || colors.darkGrey};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child{
            background-color:${(theme === "light" && colors.darkGrey) || colors.lightGrey};
          }
          .MuiTouchRipple-root {
            border-radius: 2px;
          }
          
        `;
      } else if (mode === "flat") {
        return `
          background-color: ${(theme === "light" && "transparent") || colors.black};
          color: ${(theme === "light" && colors.black) || colors.white};
          &:hover{
            background-color: ${colors.lightGrey};
            color: ${colors.black};
          }
          &:disabled{ 
            background-color:${(theme === "light" && colors.lightGrey) || colors.darkGrey};
            opacity:0.5;
            color:${(theme === "light" && colors.black) || colors.lightGrey};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child{
            background-color:${(theme === "light" && colors.darkGrey) || colors.darkGrey};
          }
        `;
      } else {
        return `
          background-color: ${colors.yellow};
          color: ${colors.black}
          box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.16);
          &:hover{
            background-color:${(theme === "light" && colors.black) || colors.lightBlack};
            color:${colors.yellow};
          }
          &:disabled{ 
            background-color:${colors.yellow};
            opacity:0.5;
            box-shadow:none;
            color: ${colors.darkGrey};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
          .MuiTouchRipple-child {
            background-color: ${colors.white};
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
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ]),
  label: PropTypes.string,
  mode: PropTypes.oneOf(["basic", "outlined", "raised", "flat"]),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  disableRipple: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onClick: PropTypes.func,
  iconSrc: PropTypes.string
};

export default DxcButton;
