import React, { useState } from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import DxcRequired from "../common/RequiredComponent.jsx";

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
    const checked = value.target.checked === undefined ? !innerChecked : value.target.checked;
    setInnerChecked(checked);
    onChange(checked);
  };
  return (
    <RadioContainer id={name} theme={theme} labelPosition={labelPosition} disabled={disabled}>
      <Radio
        checked={checked || innerChecked}
        inputProps={(name = { name })}
        onChange={handlerRadioChange}
        value={value}
        label={label}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer labelPosition={labelPosition} theme={theme} disabled={disabled}>
      {required && <DxcRequired theme={theme}/>}
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
    color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
    &.Mui-disabled {
      color: ${props => (props.theme === "dark" ? "#666666" : "#B2B2B2")};
    }
    .MuiIconButton-label {
      color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
      > div > :nth-child(2) path {
        color: ${props => (props.theme === "dark" ? "#FFED00" : "#000000")};
      }
    }
    &.Mui-disabled {
      .MuiIconButton-label {
        color: #666666;
        > div > :nth-child(2) path {
          color: #666666;
        }
      }
    }
    &.Mui-focusVisible {
      background-color: #66666610;
    }
    :hover {
      background-color: transparent;
    }
    .MuiTouchRipple-child {
      background-color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#666666")};
    }
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${props => (props.theme === "dark" ? "#FFED00" : "#000000")};
    :hover {
      background-color: transparent;
    }
  }
`;
const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
`;
export default DxcRadio;
