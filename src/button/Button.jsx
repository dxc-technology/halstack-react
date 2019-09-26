/* eslint-disable no-else-return */
import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../common/OpenSans.css"
import colors from "../common/variables.js"

const DxcButton = ({ label="", mode="basic", disabled=false, theme="light", disableRipple=false, iconPosition = "after", iconSrc="", onClick="" }) => {
  return (
    <DxCButton mode={mode} theme={theme} disabled={disabled} onClick={() => onClick()} iconPosition={iconPosition}>
      <Button disabled={disabled} disableRipple={disableRipple}>
        <LabelContainer>{label}</LabelContainer>
        {iconSrc && <ButtonIcon iconPosition={iconPosition} src={iconSrc} />}
      </Button>
    </DxCButton>
  );
};

DxcButton.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.oneOf(["basic", "outlined", "raised", "flat"]),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  disableRipple: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onClick: PropTypes.func,
  iconSrc: PropTypes.string
};
const LabelContainer = styled.div`
  line-height: 18px;
  font-size: 14px;
`;

const ButtonIcon = styled.img`
  max-height: 15px;
  max-width: 15px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;
const DxCButton = styled.span`
  display: inline-block;
  margin: 15px;
  cursor:${props => (props.disabled  && "not-allowed") || "pointer"};

  .MuiButtonBase-root {
    .MuiButton-label {
      display: flex;
      flex-direction: ${props => (props.iconPosition === "after" && "row") || "row-reverse"};
      align-items: center;
    }
    box-shadow: none;
    font-size: 14px;
    font-weight: 500;
    padding: 12px 30px;
    border-radius: 4px;
    min-width: 122px;
    max-width: 420px;
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
          padding: 10px 30px;
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
export default DxcButton;
