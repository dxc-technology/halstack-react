import React from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

const DxcCheckbox = ({
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
    <CheckboxContainer id={name} theme={theme} labelPosition={labelPosition}>
      <Checkbox
        checked={checked}
        inputProps={name={name}}
        onChange={e => onChange(!checked)}
        value={value}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer
        labelPosition={labelPosition}
        theme={theme}
        onClick={disabled === true ? e => {} : e => handler({ type, checked, handler, name })}
      >
        {label}
      </LabelContainer>
      <CheckboxBlackBack
        labelPosition={labelPosition}
        disabled={disabled}
        checked={checked}
        theme={theme}
      />
    </CheckboxContainer>
  );
};

const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
`;

const CheckboxContainer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  max-height: 42px;
  position: relative;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  .MuiButtonBase-root {
    padding: 10px 15px;
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
      color: #666666;
    }
    .MuiTouchRipple-child {
      background-color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#666666")};
    }
  }
`;

const CheckboxBlackBack = styled.span`
  background-color: ${props =>
    props.disabled == true
      ? "#FFFFFF"
      : props.theme === "light" && props.checked === true
      ? "#000000"
      : "#FFFFFF"};
  width: 16px;
  height: 16px;
  position: absolute;
  left: ${props => (props.labelPosition === "before" ? "none" : "18px")};
  right: ${props => (props.labelPosition === "before" ? "18px" : "none")};
  z-index: -1;
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
  onChange: PropTypes.func
};

export default DxcCheckbox;
