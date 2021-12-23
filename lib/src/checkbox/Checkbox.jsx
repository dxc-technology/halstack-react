import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import DxcRequired from "../common/RequiredComponent";
import { spaces, componentTokens } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import BackgroundColorContext from "../BackgroundColorContext.js";

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
  tabIndex = 0,
}) => {
  const [innerChecked, setInnerChecked] = useState(false);
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
        <Checkbox
          checked={checked != undefined ? checked : innerChecked}
          inputProps={{
            name: name,
            "aria-label": label,
            role: "checkbox",
            "aria-checked": checked != undefined ? checked : innerChecked,
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
          checked={checked != undefined ? checked : innerChecked}
          backgroundType={backgroundType}
        />
        {required && <DxcRequired />}
        {label && (
          <LabelContainer
            labelPosition={labelPosition}
            onClick={disabled === true ? (e) => {} : handlerCheckboxChange}
            disabled={disabled}
            className="labelContainer"
            backgroundType={backgroundType}
            onMouseOver={handleLabelHover}
            onMouseOut={handleLabelHover}
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
const getDisabledColor = (props, element) => {
  switch (element) {
    case "check":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledCheckColorOnDark
        : props.theme.disabledCheckColor;
      break;
    case "background":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledBackgroundColorCheckedOnDark
        : props.theme.disabledBackgroundColorChecked;
      break;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledBorderColorOnDark
        : props.theme.disabledBorderColor;
      break;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledFontColorOnDark
        : props.theme.disabledFontColor;
      break;
  }
};

const getNotDisabledColor = (props, element) => {
  switch (element) {
    case "check":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.checkColorOnDark
        : props.theme.checkColor;
      break;
    case "background":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.backgroundColorCheckedOnDark
        : props.theme.backgroundColorChecked;
      break;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.borderColorOnDark
        : props.theme.borderColor;
      break;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.fontColorOnDark
        : props.theme.fontColor;
      break;
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
  flex-direction: ${(props) => (props.labelPosition === "before" ? "row-reverse" : "row")};
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
        box-shadow: 0 0 0 2px
          ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)};
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
  tabIndex: PropTypes.number,
};
export default DxcCheckbox;
