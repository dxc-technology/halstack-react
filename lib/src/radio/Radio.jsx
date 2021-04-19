import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent";
import "../common/OpenSans.css";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";

const DxcRadio = ({
  checked = false,
  value,
  label,
  labelPosition = "before",
  name,
  disabled = false,
  onClick,
  required = false,
  margin,
  size = "fitContent",
}) => {
  const [innerChecked, setInnerChecked] = useState(false);
  const colorsTheme = useTheme();

  const handlerRadioChange = (value) => {
    if (checked == null) {
      setInnerChecked(true);
    }
    if (typeof onClick === "function") {
      onClick(true);
    }
  };
  return (
    <ThemeProvider theme={colorsTheme.radio}>
      <RadioContainer id={name} labelPosition={labelPosition} disabled={disabled} margin={margin} size={size}>
        <Radio
          checked={(checked != null && checked) || innerChecked}
          name={name}
          onClick={handlerRadioChange}
          value={value}
          label={label}
          disabled={disabled}
          disableRipple
        />
        <LabelContainer
          checked={checked || innerChecked}
          labelPosition={labelPosition}
          disabled={disabled}
          onClick={(!disabled && handlerRadioChange) || null}
        >
          {required && <DxcRequired />}
          {label}
        </LabelContainer>
      </RadioContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "120px",
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

const RadioContainer = styled.span`
  width: ${(props) => calculateWidth(props.margin, props.size)};

  display: inline-flex;
  align-items: center;
  max-height: 42px;
  position: relative;
  flex-direction: ${(props) => (props.labelPosition === "before" ? "row-reverse" : "row")};
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
  .MuiButtonBase-root {
    width: auto;
    height: auto;
    padding: 10px;
    margin: 2px;
    padding-left: ${(props) => (props.labelPosition === "after" ? "0px" : "")};
    padding-right: ${(props) => (props.labelPosition === "before" ? "0px" : "")};
    margin-left: ${(props) => (props.labelPosition === "after" ? "0px" : "")};
    margin-right: ${(props) => (props.labelPosition === "before" ? "0px" : "")};
    .MuiIconButton-label {
      .MuiSvgIcon-root {
        height: 24px;
        width: 24px;
      }
      color: ${(props) => (props.disabled && props.theme.disabledColor) || props.theme.color};

      > div > :nth-child(2) path {
        color: ${(props) => (props.disabled && props.theme.disabledColor) || props.theme.color};
      }
    }

    &.Mui-focusVisible {
      background-color: transparent;
      .MuiSvgIcon-root {
        outline: ${(props) => props.theme.focusColor} auto 1px;
      }
    }
    :hover {
      background-color: transparent;
    }
    .MuiTouchRipple-ripple {
      height: 40px !important;
      width: 40px !important;
      top: 0px !important;
      left: 0px !important;
    }
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${(props) => (props.disabled && props.theme.disabledColor) || props.theme.color};
    :hover {
      background-color: transparent;
    }
  }
`;
const LabelContainer = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => (props.disabled && props.theme.disabledFontColor) || props.theme.fontColor};
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
`;

DxcRadio.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
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

export default DxcRadio;
