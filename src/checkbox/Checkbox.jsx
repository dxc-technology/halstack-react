import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent.jsx";

const DxcCheckbox = ({
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
  const [innerChecked, setInnerChecked] = useState(false);

  const handlerCheckboxChange = checkboxValue => {
    const isChecked = checkboxValue.target.checked === undefined ? !innerChecked : checkboxValue.target.checked;
    setInnerChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <CheckboxContainer id={name} theme={theme} labelPosition={labelPosition}>
      <Checkbox
        checked={checked || innerChecked}
        inputProps={(name = { name })}
        onChange={handlerCheckboxChange}
        value={value}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer
        labelPosition={labelPosition}
        theme={theme}
        onClick={disabled === true ? e => {} : handlerCheckboxChange}
        disabled={disabled}
      >
        {required && <DxcRequired theme={theme} />}
        {label}
      </LabelContainer>
      <CheckboxBlackBack
        labelPosition={labelPosition}
        disabled={disabled}
        checked={checked || innerChecked}
        theme={theme}
      />
    </CheckboxContainer>
  );
};
const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: default;
`;

const CheckboxContainer = styled.span`
  display: inline-flex;
  align-items: center;
  cursor: not-allowed;
  position: relative;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  .MuiButtonBase-root {
    padding: 10px 10px;
    margin: 0px 3px;
    color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#666666")};

    :hover {
      background-color: transparent;
    }
    &.Mui-checked {
      color: #ffed00;
      &:hover {
        background-color: transparent;
      }
    }
    &.Mui-disabled {
      color: ${props => (props.theme === "dark" ? "#666666" : "#B2B2B2")};
    }
    .MuiTouchRipple-child {
      background-color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#666666")};
    }
    .MuiSvgIcon-root {
      width: 26.6px;
      height: 26.6px;
    }
    .MuiIconButton-label {
      z-index: 1;
    }
  }
`;

const CheckboxBlackBack = styled.span`
    background-color: ${props =>
      props.checked !== true
        ? "transparent"
        : props.theme === "light" && props.disabled === true
        ? "ffffff"
        : "#000000"};
  width: 17px;
  height: 17px;
  position: absolute;
  left: ${props => (props.labelPosition === "before" ? "unset" : "18px")};
  right: ${props => (props.labelPosition === "before" ? "18px" : "unset")};
  z-index: 0;
`;

DxcCheckbox.propTypes = {
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

export default DxcCheckbox;
