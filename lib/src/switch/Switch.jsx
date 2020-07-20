import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcSwitch = ({
  checked,
  value,
  label,
  labelPosition = "before",
  theme = "light",
  name,
  disabled = false,
  disableRipple = false,
  onChange,
  required = false,
  margin,
  size = "fitContent",
}) => {
  const [innerChecked, setInnerChecked] = useState(0);
  const colorsTheme = useContext(ThemeContext) || colors;

  const handlerSwitchChange = (newValue) => {
    if (checked === undefined) {
      const isChecked = newValue.target.checked === undefined ? !innerChecked : newValue.target.checked;
      setInnerChecked(isChecked);
      if (typeof onChange === "function") {
        onChange(isChecked);
      }
    } else {
      if (typeof onChange === "function") {
        onChange(!checked);
      }
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <SwitchContainer margin={margin} brightness={theme} disabled={disabled} labelPosition={labelPosition} size={size}>
        <Switch
          checked={checked != undefined ? checked : innerChecked}
          inputProps={(name = { name })}
          onChange={handlerSwitchChange}
          value={value}
          disabled={disabled}
          disableRipple={disableRipple}
        />
        <LabelContainer
          labelPosition={labelPosition}
          brightness={theme}
          onClick={disabled === true ? () => {} : handlerSwitchChange}
          disabled={disabled}
        >
          {required && <RequiredSpan brightness={theme}>*</RequiredSpan>}
          {label}
        </LabelContainer>
      </SwitchContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const RequiredSpan = styled.span`
  color: ${(props) => (props.brightness === "dark" ? props.theme.lightRed : props.theme.darkRed)};
  margin-right: 1px;
  cursor: default;
`;

const SwitchContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin, props.size)};

  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => (props.labelPosition === "after" ? "row" : "row-reverse")};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "default")};
  .MuiSwitch-root {
    align-items: center;
    width: 60px;
    height: 45px;
    margin: 3px;

    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: ${(props) => props.theme.darkGrey};
      opacity: 1;
      height: 12px;
      opacity: 0.4;
    }

    .MuiIconButton-root {
      /*Enabled and unchecked*/
      top: unset;
      .MuiSwitch-thumb {
        /*Only for thumb in all states*/
        width: 24px;
        height: 24px;
      }
      color: ${(props) => props.theme.white};
      &:hover {
        background-color: transparent;
      }
      .MuiTouchRipple-child {
        background-color: ${(props) => (props.brightness === "dark" ? props.theme.yellow : props.theme.darkGrey)};
        opacity: 1;
      }
      &.Mui-disabled {
        /*Disabled*/
        color: ${(props) => (props.brightness === "dark" ? "#B3B3B3" : props.theme.white)};
        &.Mui-checked {
          /*Disabled and checked*/
          color: ${(props) => (props.brightness === "dark" ? "#B3B3B3" : "#C1C1C1")};
          + .MuiSwitch-track {
            /*Disabled and checked bar*/
            background-color: ${(props) => props.theme.lightGrey};
            opacity: 0.4;
          }
        }
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: ${(props) => props.theme.lightGrey};
          opacity: 0.4;
        }
      }
      &.Mui-checked {
        /*Enabled and checked*/
        color: ${(props) => (props.brightness === "dark" ? props.theme.yellow : props.theme.black)};
        transform: translateX(35%);
        &:hover {
          background-color: transparent;
        }
        .MuiTouchRipple-child {
          background-color: ${(props) => props.theme.darkGrey};
          opacity: 1;
        }
        + .MuiSwitch-track {
          /*Enabled and checked bar*/
          background-color: ${(props) => props.theme.darkGrey};
          opacity: 1;
        }
      }
    }
  }
`;

const LabelContainer = styled.span`
  color: ${(props) =>
    props.disabled
      ? props.brightness === "dark"
        ? props.theme.darkGrey
        : props.theme.lightGrey
      : props.brightness === "dark"
      ? props.theme.white
      : props.theme.black};
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
  font-family: "Open Sans", sans-serif;
`;

DxcSwitch.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
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

export default DxcSwitch;
