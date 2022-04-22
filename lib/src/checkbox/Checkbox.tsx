// @ts-nocheck
import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import DxcRequired from "../common/RequiredComponent";
import { spaces, componentTokens } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";
import CheckboxPropsType from "./types";

const DxcCheckbox = ({
  checked,
  defaultChecked = false,
  value,
  label = "",
  labelPosition = "before",
  name = "",
  disabled = false,
  onChange,
  required = false,
  margin,
  size = "fitContent",
  tabIndex = 0,
}: CheckboxPropsType): JSX.Element => {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);
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

  const handleLabelHover = () => {
    setIsLabelHovered(!isLabelHovered);
  };

  const labelComponent = (
    <LabelContainer
      onClick={disabled === true ? (e) => {} : handlerCheckboxChange}
      disabled={disabled}
      className="labelContainer"
      backgroundType={backgroundType}
      onMouseOver={handleLabelHover}
      onMouseOut={handleLabelHover}
    >
      {label}
    </LabelContainer>
  );

  return (
    <ThemeProvider theme={colorsTheme.checkbox}>
      <CheckboxContainer
        id={name}
        brightness={componentTokens}
        label={label}
        labelPosition={labelPosition}
        disabled={disabled}
        margin={margin}
        size={size}
        backgroundType={backgroundType}
        isLabelHovered={isLabelHovered}
      >
        {label && labelPosition === "before" && labelComponent}
        {required && labelPosition === "before" && <DxcRequired />}
        <Checkbox
          checked={checked ?? innerChecked}
          inputProps={{
            name: name,
            "aria-label": label,
            role: "checkbox",
            "aria-checked": checked ?? innerChecked,
          }}
          onChange={handlerCheckboxChange}
          value={value}
          disabled={disabled}
          disableRipple
          className="test"
          tabIndex={tabIndex}
        />
        <CheckboxBlackBack
          labelPosition={labelPosition}
          disabled={disabled}
          checked={checked ?? innerChecked}
          backgroundType={backgroundType}
        />
        {required && labelPosition === "after" && <DxcRequired />}
        {label && labelPosition === "after" && labelComponent}
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
const getDisabledColor = (props, element) => {
  switch (element) {
    case "check":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledCheckColorOnDark
        : props.theme.disabledCheckColor;
    case "background":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledBackgroundColorCheckedOnDark
        : props.theme.disabledBackgroundColorChecked;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledBorderColorOnDark
        : props.theme.disabledBorderColor;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledFontColorOnDark
        : props.theme.disabledFontColor;
  }
};

const getNotDisabledColor = (props, element) => {
  switch (element) {
    case "check":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.checkColorOnDark
        : props.theme.checkColor;
    case "background":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.backgroundColorCheckedOnDark
        : props.theme.backgroundColorChecked;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.borderColorOnDark
        : props.theme.borderColor;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.fontColorOnDark
        : props.theme.fontColor;
  }
};
const LabelContainer = styled.span`
  color: ${(props) => (props.disabled ? getDisabledColor(props, "label") : getNotDisabledColor(props, "label"))};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
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
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  position: relative;
  .MuiCheckbox-colorSecondary {
    .MuiIconButton-label {
      & > .MuiSvgIcon-root {
        color: ${(props) =>
          props.isLabelHovered
            ? props.backgroundType === "dark"
              ? props.theme.hoverBorderColorOnDark
              : props.theme.hoverBorderColor
            : getNotDisabledColor(props, "border")};
      }
    }
    &.Mui-disabled {
      .MuiIconButton-label {
        & > .MuiSvgIcon-root {
          color: ${(props) => getDisabledColor(props, "border")};
          opacity: 0.34;
        }
      }
    }
    &.Mui-checked {
      .MuiIconButton-label {
        & > .MuiSvgIcon-root {
          color: ${(props) =>
            props.disabled ? getDisabledColor(props, "background") : getNotDisabledColor(props, "background")};
        }
      }

      &:hover {
        background-color: transparent;
        .MuiIconButton-label {
          & > .MuiSvgIcon-root {
            background-color: transparent;
            color: ${(props) =>
              props.backgroundType === "dark"
                ? props.theme.hoverBackgroundColorCheckedOnDark
                : props.theme.hoverBackgroundColorChecked};
          }
        }
      }
    }
    .MuiIconButton-label {
      & > .MuiSvgIcon-root {
        width: 24px;
        height: 24px;
      }
    }
  }

  .MuiIconButton-colorSecondary {
    &:hover {
      background-color: transparent;
    }
  }
  .MuiButtonBase-root {
    &:hover {
      .MuiIconButton-label {
        & > .MuiSvgIcon-root {
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.hoverBorderColorOnDark : props.theme.hoverBorderColor};
        }
      }
    }

    &.Mui-focusVisible {
      .MuiIconButton-label {
        border-radius: 2px;
        outline: 2px solid
          ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)};
        outline-offset: -1px;
      }
    }
    z-index: 1;
    margin-left: ${(props) => (props.labelPosition === "before" && props.label ? props.theme.checkLabelSpacing : "0")};
    margin-right: ${(props) => (props.labelPosition === "after" && props.label ? props.theme.checkLabelSpacing : "0")};
    padding: 0px;
    left: ${(props) => (props.labelPosition === "before" ? "unset" : "1px")};
    right: ${(props) => (props.labelPosition === "before" ? "1px" : "unset")};
  }
`;
const CheckboxBlackBack = styled.span`
  background-color: ${(props) =>
    !props.checked
      ? "transparent"
      : props.disabled
      ? getDisabledColor(props, "check")
      : getNotDisabledColor(props, "check")};
  width: 16px;
  height: 16px;
  position: absolute;
  left: ${(props) => (props.labelPosition === "before" ? "unset" : "5px")};
  right: ${(props) => (props.labelPosition === "before" ? "5px" : "unset")};
  z-index: 0;
  margin-left: ${(props) => (props.labelPosition === "after" ? "0px" : "")};
  margin-right: ${(props) => (props.labelPosition === "before" ? "0px" : "")};
`;

export default DxcCheckbox;
