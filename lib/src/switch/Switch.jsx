import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcSwitch = ({
  checked,
  value,
  label,
  labelPosition,
  theme,
  name,
  disabled,
  disableRipple,
  onChange,
  required
}) => {
  const [innerChecked, setInnerChecked] = useState(0);

  const handlerSwitchChange = newValue => {
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
    <SwitchContainer theme={theme} disabled={disabled} labelPosition={labelPosition}>
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
        theme={theme}
        onClick={disabled === true ? () => {} : handlerSwitchChange}
        disabled={disabled}
      >
        {required && <RequiredSpan theme={theme}>*</RequiredSpan>}
        {label}
      </LabelContainer>
    </SwitchContainer>
  );
};

const RequiredSpan = styled.span`
  color: ${props => (props.theme === "dark" ? colors.lightRed : colors.darkRed)};
  margin-right: 1px;
  cursor: default;
`;

const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
  .MuiSwitch-root {
    align-items: center;
    width: 60px;
    height: 45px;
    margin: 3px;

    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: ${colors.darkGrey};
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
      color: ${colors.white};
      &:hover {
        background-color: transparent;
      }
      .MuiTouchRipple-child {
        background-color: ${props => (props.theme === "dark" ? colors.yellow : colors.darkGrey)};
        opacity: 1;
      }
      &.Mui-disabled {
        /*Disabled*/
        color: ${props => (props.theme === "dark" ? "#B3B3B3" : colors.white)};
        &.Mui-checked {
          /*Disabled and checked*/
          color: ${props => (props.theme === "dark" ? "#B3B3B3" : "#C1C1C1")};
          + .MuiSwitch-track {
            /*Disabled and checked bar*/
            background-color: ${colors.lightGrey};
            opacity: 0.4;
          }
        }
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: ${colors.lightGrey};
          opacity: 0.4;
        }
      }
      &.Mui-checked {
        /*Enabled and checked*/
        color: ${props => (props.theme === "dark" ? colors.yellow : colors.black)};
        transform: translateX(35%);
        &:hover {
          background-color: transparent;
        }
        .MuiTouchRipple-child {
          background-color: ${colors.darkGrey};
          opacity: 1;
        }
        + .MuiSwitch-track {
          /*Enabled and checked bar*/
          background-color: ${colors.darkGrey};
          opacity: 1;
        }
      }
    }
  }
`;

const LabelContainer = styled.span`
  color: ${props => (props.disabled ? props.theme === "dark" ? colors.darkGrey : colors.lightGrey : props.theme === "dark" ? colors.white : colors.black)};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "pointer")};
  font-family: "Open Sans", sans-serif;
`;

DxcSwitch.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default DxcSwitch;
