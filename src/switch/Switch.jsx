import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";

const DxcSwitch = ({
  checked,
  value,
  label,
  labelPosition,
  theme,
  name,
  disabled,
  disableRipple,
  onChange
}) => {
  return (
    <SwitchContainer theme={theme} disabled={disabled} labelPosition={labelPosition}>
      <Switch
        checked={checked}
        checked={checked}
        inputProps={(name = { name })}
        onChange={e => onChange(!checked)}
        value={value}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer
        labelPosition={labelPosition}
        theme={theme}
        onClick={disabled === true ? e => {} : e => onChange(!checked)}
      >
        {label}
      </LabelContainer>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "pointer")};
  .MuiSwitch-root {
    align-items:center;
    width: 60px;
    height: 45px;
    margin: 3px;
    .MuiIconButton-root {
      /*Enabled and unchecked*/
      top: unset;
      .MuiSwitch-thumb {
        /*Only for ball*/
        width: 26px;
        height: 26px;
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
            background-color: ${props => (props.theme === "dark" ? "#3D3D3D" : "#EFEFEF")};
            opacity: 1;
          }
        }
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: ${props => (props.theme === "dark" ? "#3D3D3D" : "#F4F4F4")};
          opacity: 1;
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
        }
      }
    }
    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: ${props => (props.theme === "dark" ? "#292929" : "#C2C2C2")};
      opacity: 1;
      height: 12px;
    }
  }
`;

const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
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
  onChange: PropTypes.func
};

export default DxcSwitch;
