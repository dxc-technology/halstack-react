import React, { useState } from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import DxcRequired from "../common/RequiredComponent";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcRadio = ({
  checked,
  value,
  label,
  labelPosition,
  theme,
  name,
  disabled,
  disableRipple,
  onChange,
  required = false
}) => {
  const [innerChecked, setInnerChecked] = useState(0);

  const handlerRadioChange = value => {
    const checked = innerChecked !== true ? true : value.target.checked;
    setInnerChecked(checked);
    onChange(checked);
  };
  return (
    <RadioContainer id={name} theme={theme} labelPosition={labelPosition} disabled={disabled}>
      <Radio
        checked={(checked != null && checked) || innerChecked}
        name={name}
        onChange={handlerRadioChange}
        value={value}
        label={label}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer checked={checked || innerChecked} labelPosition={labelPosition} theme={theme} disabled={disabled} onClick={!disabled && handlerRadioChange || null}>
        {required && <DxcRequired theme={theme} />}
        {label}
      </LabelContainer>
    </RadioContainer>
  );
};

const RadioContainer = styled.span`
  display: inline-flex;
  align-items: center;
  max-height: 42px;
  position: relative;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
  .MuiButtonBase-root {
    padding: 0px;
    margin: 0px 5px;
    width: 40px;
    height: 40px;
    &.Mui-disabled {
      color: ${props => (props.theme === "dark" ? colors.darkGrey : colors.lightGrey)};
    }
    .MuiIconButton-label {
      .MuiSvgIcon-root {
        height: 24px;
        width: 24px;
      }
      color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
      > div > :nth-child(2) path {
        color: ${props => (props.theme === "dark" ? colors.yellow : colors.black)};
      }
    }
    &.Mui-disabled {
      .MuiIconButton-label {
        color: ${props => (props.theme === "dark" ? colors.darkGrey : colors.lightGrey)};
        > div > :nth-child(2) path {
          color: ${props => (props.theme === "dark" ? colors.darkGrey : colors.lightGrey)};
        }
      }
    }
    &.Mui-focusVisible {
      background-color: ${colors.darkGrey};
      opacity: 0.1;
    }
    :hover {
      background-color: transparent;
    }
    .MuiTouchRipple-ripple {
      height: 40px !important;
      width: 40px !important;
      top: 0px !important;
      left: 0px !important;
      .MuiTouchRipple-child {
        background-color: ${props => (props.theme === "dark" ? colors.white : colors.darkGrey)};
      }
    }
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${props => (props.theme === "dark" ? colors.yellow : colors.black)};
    :hover {
      background-color: transparent;
    }
  }
`;
const LabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: ${props => {
    if(props.disabled) {
      return (props.theme === "dark" ? colors.darkGrey : colors.lightGrey);
    } else {
      return (props.theme === "dark" ? colors.white : colors.black);
    }
  }};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "pointer")};
`;
export default DxcRadio;
