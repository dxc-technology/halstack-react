/* eslint-disable no-else-return */
import React from "react";
import { ToggleButton } from "@material-ui/lab";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcToggle = ({
  label = "",
  iconSrc = "",
  mode = "basic",
  theme = "light",
  disableRipple = false,
  iconPosition = "before",
  disabled = false,
  onClick,
  selected = false
}) => {
  return (
    <DxcToggleContainer
      theme={theme}
      disabled={disabled}
      disableRipple={disableRipple}
      selected={selected}
      label={label}
      mode={mode}
      value
      onClick={() => {
        if (!disabled) onClick(selected);
      }}
    >
      <ToggleButton disabled={disabled} disableRipple={disableRipple} selected={selected} label={label} value>
        <ContentContainer iconPosition={iconPosition} label={label} iconSrc={iconSrc}>
          {iconSrc !== "" && <IconContainer label={label} src={iconSrc}></IconContainer>}
          {label !== "" && <LabelContainer>{label}</LabelContainer>}
        </ContentContainer>
      </ToggleButton>
    </DxcToggleContainer>
  );
};

const DxcToggleContainer = styled.div`
  & {
    margin: 15px;
    opacity: ${props => (props.disabled ? "0.5" : "1")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }

  .MuiToggleButton-label {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: ${props => (props.theme === "dark" && props.mode === "outlined" ? colors.white : colors.black)};
  }
  .MuiButtonBase-root {
    padding: 0px 0px;
    height: ${props => (props.mode === "outlined" ? "41px" : "43px")};
    background-color: ${props => (props.mode !== "outlined" ? colors.darkWhite : "transparent")};
    &:hover {
      background-color: ${props =>
        props.mode === "basic" ? colors.lightGrey : props.theme === "dark" ? colors.darkGrey : colors.darkWhite};
      .MuiToggleButton-label {
        color: ${props => (props.theme === "dark" && props.mode === "outlined" ? colors.white : colors.black)};
      }
    }
  }

  .MuiToggleButton-root {
    border: ${props =>
      props.mode === "basic"
        ? "none !important"
        : props.theme === "dark" && !props.selected
        ? `2px solid ${colors.white} !important`
        : props.theme === "dark" && props.selected
        ? `2px solid ${colors.yellow} !important`
        : `2px solid ${colors.black} !important`};

    border-radius: 4px !important;
  }

  .MuiToggleButton-root.Mui-selected {
    background-color: ${props =>
      props.mode === "outlined" ? (props.theme === "light" ? colors.darkWhite : "transparent") : colors.yellow};
    &:hover {
      background-color: ${props =>
        props.mode === "basic" && props.theme === "light"
          ? colors.black
          : props.mode === "basic" && props.theme === "dark"
          ? colors.lightBlack
          : props.theme === "light"
          ? colors.lightGrey
          : colors.darkGrey};
      .MuiToggleButton-label {
        color: ${props =>
          props.mode === "basic"
            ? colors.yellow
            : props.theme === "dark" && props.mode === "outlined"
            ? colors.white
            : colors.black};
      }
    }
  }

  .MuiToggleButton-root:last-child,
  .MuiToggleButton-root:first-child,
  .MuiToggleButton-root:not(:first-child) {
    padding: ${props =>
      props.label !== ""
        ? props.mode === "outlined"
          ? "8px 30px "
          : "12px 30px"
        : props.mode === "outlined"
        ? "8px 10px "
        : "12px 10px"};
  }

  .MuiTouchRipple-child {
    background-color: ${props =>
      props.mode === "basic"
        ? props.selected === false
          ? colors.yellow
          : colors.darkWhite
        : props.selected === false
        ? colors.lightGrey
        : colors.white};
  }
`;

const ContentContainer = styled.span`
  line-height: 1;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.img`
  width: 20px;
  height: 20px;
  line-height: 1;
  margin-right: ${props => (props.label !== "" ? "10px" : "")};
`;

const LabelContainer = styled.span``;

DxcToggle.propTypes = {
  theme: PropTypes.oneOf(["light", "dark", ""]),
  mode: PropTypes.oneOf(["basic", "outlined", ""]),
  iconPosition: PropTypes.oneOf(["before", "after", ""]),
  iconSrc: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onClick: PropTypes.func
};

export default DxcToggle;
