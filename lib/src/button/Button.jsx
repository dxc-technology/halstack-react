import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";

const DxcButton = ({ label, mode, disabled, theme, disableRipple, iconPosition = "after", iconSrc, onClick }) => {
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
  label: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["basic", "outlined", "raised", "flat"]).isRequired,
  disabled: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(["dark", "light"]).isRequired,
  disableRipple: PropTypes.bool.isRequired,
  iconPosition: PropTypes.oneOf(["after", "before"]).isRequired,
  onClick: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired
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
    color: #000000;
    line-height: 1;
    margin: 15px;
    font-family: "Open Sans", sans-serif;
    ${props => {
      const { mode, theme } = props;
      if (mode === "basic") {
        return `
          background-color: #ffed00;
          &:hover{
            background-color: ${(theme === "light" && "#000000") || "#212121"};
            color: #ffed00
          }
          &:disabled{ 
            background-color:#ffed0078;
            opacity:0.5;
          }
          &:active{
            background-color:#666666;
          }
        `;
        // eslint-disable-next-line no-else-return
      } else if (mode === "outlined") {
        return `
          background-color: transparent;
          padding: 10px 30px;
          color: ${(theme === "light" && "#000000") || "#FFFFFF"};
          border: 2px solid;
          border-color: ${(theme === "light" && "#000") || "#FFFFFF"};
          &:hover{
            border-color: #ffed00;
            background-color: transparent;
          }
          &:disabled{ 
            background-color:${(theme === "light" && "transparent") || "#000000"};
            border-color:${(theme === "light" && "#000") || "#FFFFFF"};
            color:${(theme === "light" && "#000") || "#FFFFFF"};
            opacity:0.5;
          }
        `;
      } else if (mode === "flat") {
        return `
          background-color: ${(theme === "light" && "transparent") || "#000000"};
          color: ${(theme === "light" && "#d9d9d9") || "#FFFFFF"};
          &:hover{
            background-color: #e5e5e5;
            color: #000000;
          }
          &:disabled{ 
            background-color:${(theme === "light" && "#d9d9d9") || "#666666"};
            opacity:0.5;
            color:${(theme === "light" && "#000000") || "#d9d9d9"};
          }
        `;
      } else {
        return `
          background-color: #ffed00;
          box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.16);
          &:hover{
            background-color:${(theme === "light" && "#000000") || "#212121"};
            color:#ffed00;
          }
          &:disabled{ 
            background-color:"#ffed0078";
            opacity:0.5;
            box-shadow:none;
          }
        `;
      }
    }}
  }
`;
export default DxcButton;
