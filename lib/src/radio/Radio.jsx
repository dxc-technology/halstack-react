import React, { useState } from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent";
import "../common/OpenSans.css";
import {colors, spaces} from "../common/variables.js";
import {getMargin} from "../common/utils.js"

const DxcRadio = ({
  checked,
  value,
  label,
  labelPosition,
  theme,
  name,
  disabled,
  disableRipple,
  onClick,
  required = false,
  margin,
  size = "medium"
}) => {
  const [innerChecked, setInnerChecked] = useState(false);

  const handlerRadioChange = value => {
    if (checked == null) {
      setInnerChecked(true);
    }
    if (typeof onClick === "function") {
      onClick(true);
    }
  };
  return (
    <RadioContainer id={name} theme={theme} labelPosition={labelPosition} disabled={disabled} margin={margin} size={size}>
      <Radio
        checked={(checked != null && checked) || innerChecked}
        name={name}
        onClick={handlerRadioChange}
        value={value}
        label={label}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer
        checked={checked || innerChecked}
        labelPosition={labelPosition}
        theme={theme}
        disabled={disabled}
        onClick={(!disabled && handlerRadioChange) || null}
      >
        {required && <DxcRequired theme={theme} />}
        {label}
      </LabelContainer>
    </RadioContainer>
  );
};

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset"
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const RadioContainer = styled.span`

  width: ${props =>calculateWidth(props.margin, props.size)};

  display: inline-flex;
  align-items: center;
  max-height: 42px;
  position: relative;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  margin: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
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
    if (props.disabled) {
      return props.theme === "dark" ? colors.darkGrey : colors.lightGrey;
    } else {
      return props.theme === "dark" ? colors.white : colors.black;
    }
  }};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "pointer")};
`;

DxcRadio.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onClick: PropTypes.func,
  required: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};

export default DxcRadio;
