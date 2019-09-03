import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";
import "../common/OpenSans.css"

const DxcSwitch = ({ checked=false, value, label, labelPosition, theme, name, disabled, disableRipple, onChange, required }) => {
  const [innerChecked, setInnerChecked] = useState(0);

  const handlerSwitchChange = newValue => {
    const switchChecked = newValue.target.checked === undefined ? !innerChecked : newValue.target.checked;
    setInnerChecked(switchChecked);
    onChange(switchChecked);
  };

  return (
    <SwitchContainer theme={theme} disabled={disabled} labelPosition={labelPosition}>
      <Switch
        checked={checked || innerChecked}
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
  color: ${props => (props.theme === "dark" ? "#FF6161" : "#ee2222")};
  margin-right: 1px;
  cursor: default;
`;

const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: baseline;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
  .MuiSwitch-root {
    align-items: center;
    width: 60px;
    height: 45px;
    margin: 3px;

    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: #666666;
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
      color: #ffffff;
      &:hover {
        background-color: transparent;
      }
      .MuiTouchRipple-child {
        background-color: ${props => (props.theme === "dark" ? "#FFED00" : "#666666")};
        opacity: 1;
      }
      &.Mui-disabled {
        /*Disabled*/
        color: ${props => (props.theme === "dark" ? "#B3B3B3" : "#FFFFFF")};
        &.Mui-checked {
          /*Disabled and checked*/
          color: ${props => (props.theme === "dark" ? "#B3B3B3" : "#C1C1C1")};
          + .MuiSwitch-track {
            /*Disabled and checked bar*/
            background-color: #D9D9D9;
            opacity: 0.4;
          }
        }
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: #D9D9D9;
          opacity: 0.4;
        }
      }
      &.Mui-checked {
        /*Enabled and checked*/
        color: ${props => (props.theme === "dark" ? "#FFED00" : "#000000")};
        transform: translateX(35%);
        &:hover {
          background-color: transparent;
        }
        .MuiTouchRipple-child {
          background-color: #666666;
          opacity: 1;
        }
        + .MuiSwitch-track {
          /*Enabled and checked bar*/
          background-color: #666666;
          opacity: 1;
        }
      }
    }
  }
`;

const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
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
