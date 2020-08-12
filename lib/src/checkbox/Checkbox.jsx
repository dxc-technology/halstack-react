import React, { useMemo, useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent";
import "../common/OpenSans.css";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getMargin, getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";

const DxcCheckbox = ({
  checked,
  value,
  label = "",
  labelPosition = "before",
  name = "",
  disabled = false,
  onChange,
  required = false,
  margin,
  size = "fitContent",
}) => {
  const [innerChecked, setInnerChecked] = useState(false);
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  const handlerCheckboxChange = (checkboxValue) => {
    if (checked === undefined) {
      const isChecked = checkboxValue.target.checked === undefined ? !innerChecked : checkboxValue.target.checked;
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
    <ThemeProvider theme={colorsTheme.checkbox}>
      <CheckboxContainer
        id={name}
        brightness={theme}
        labelPosition={labelPosition}
        disabled={disabled}
        margin={margin}
        size={size}
      >
        <Checkbox
          checked={checked != undefined ? checked : innerChecked}
          inputProps={(name = { name })}
          onChange={handlerCheckboxChange}
          value={value}
          disabled={disabled}
          disableRipple
          className="test"
        />
        <CheckboxBlackBack
          labelPosition={labelPosition}
          disabled={disabled}
          checked={checked != undefined ? checked : innerChecked}
        />

        {required && <DxcRequired />}

        {label && (
          <LabelContainer
            labelPosition={labelPosition}
            onClick={disabled === true ? (e) => {} : handlerCheckboxChange}
            disabled={disabled}
            className="labelContainer"
          >
            {label}
          </LabelContainer>
        )}
      </CheckboxContainer>
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

const LabelContainer = styled.span`
  color: black;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-family: "Open Sans", sans-serif;
`;

const CheckboxContainer = styled.span`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  width: ${(props) => calculateWidth(props.margin, props.size)};

  opacity: ${(props) => (props.disabled ? props.theme.disabled : "1")};
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  position: relative;
  flex-direction: ${(props) => (props.labelPosition === "before" ? "row-reverse" : "row")};
  .MuiCheckbox-colorSecondary {
    &.Mui-checked {
      color: ${(props) => props.theme.color};
      &.Mui-disabled {
        color: ${(props) => props.theme.color};
      }
      &:hover {
        background-color: transparent;
      }
    }
    &.Mui-disabled {
      color: ${(props) => props.theme.color};
    }
  }
  .MuiIconButton-colorSecondary {
    &:hover {
      background-color: transparent;
    }
  }
  .MuiButtonBase-root {
    &.Mui-focusVisible {
      .MuiIconButton-label {
        outline: ${(props) => props.theme.focusColor} auto 1px;
      }
    }
    z-index: 1;
    padding: 10px 10px;
    margin: 0px 2px;
    color: ${(props) => props.theme.color}};
    &.Mui-checked {
      color: ${(props) => props.theme.color};
      &:hover {
        background-color: transparent;
      }
    }
    &.Mui-disabled {
      opacity: ${(props) => props.theme.disabled};
    }
    .MuiSvgIcon-root {
      width: 26.6px;
      height: 26.6px;
    }
  }
`;

const CheckboxBlackBack = styled.span`
  background-color: ${(props) => (props.checked !== true ? "transparent" : props.theme.checkColor)};
  width: 17px;
  height: 17px;
  position: absolute;
  left: ${(props) => (props.labelPosition === "before" ? "unset" : "17px")};
  right: ${(props) => (props.labelPosition === "before" ? "17px" : "unset")};
  z-index: 0;
  opacity: ${(props) => (props.disabled ? props.theme.disabled : "1")};
`;

DxcCheckbox.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
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

export default DxcCheckbox;
