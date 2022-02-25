import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import Radio from "@material-ui/core/Radio";
import DxcRequired from "../common/RequiredComponent";
import RadioPropsType from "./types";

import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";

const DxcRadio = ({
  checked = false,
  value,
  label = "",
  labelPosition = "before",
  name,
  disabled = false,
  onClick,
  required = false,
  margin,
  size = "fitContent",
}: RadioPropsType): JSX.Element => {
  const [innerChecked, setInnerChecked] = useState(false);
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const handlerRadioChange = () => {
    if (checked == null) {
      setInnerChecked(true);
    }
    if (typeof onClick === "function") {
      onClick(true);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.radio}>
      <RadioContainer
        id={name}
        labelPosition={labelPosition}
        disabled={disabled}
        margin={margin}
        size={size}
        backgroundType={backgroundType}
      >
        <Radio
          checked={(checked != null && checked) || innerChecked}
          name={name}
          onClick={handlerRadioChange}
          value={value}
          disabled={disabled}
          disableRipple
        />
        <LabelContainer
          checked={checked || innerChecked}
          labelPosition={labelPosition}
          disabled={disabled}
          onClick={(!disabled && handlerRadioChange) || null}
          backgroundType={backgroundType}
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
    ${(props) => (props.labelPosition === "after" ? "padding-right" : "padding-left")}: ${(props) =>
      props.theme.circleLabelSpacing};
    padding-left: ${(props) => (props.labelPosition === "after" ? "0px" : "")};
    padding-right: ${(props) => (props.labelPosition === "before" ? "0px" : "")};
    margin-left: ${(props) => (props.labelPosition === "after" ? "0px" : "")};
    margin-right: ${(props) => (props.labelPosition === "before" ? "0px" : "")};
    .MuiIconButton-label {
      .MuiSvgIcon-root {
        height: ${(props) => props.theme.circleSize};
        width: ${(props) => props.theme.circleSize};
      }
      color: ${(props) =>
        props.backgroundType === "dark"
          ? (props.disabled && props.theme.disabledColorOnDark) || props.theme.colorOnDark
          : (props.disabled && props.theme.disabledColor) || props.theme.color};

      > div > :nth-child(2) path {
        color: ${(props) =>
          props.backgroundType === "dark"
            ? (props.disabled && props.theme.disabledColorOnDark) || props.theme.colorOnDark
            : (props.disabled && props.theme.disabledColor) || props.theme.color};
      }
    }

    &.Mui-focusVisible {
      background-color: transparent;
      .MuiSvgIcon-root {
        outline: ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)}
          auto 1px;
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
    color: ${(props) =>
      props.backgroundType === "dark"
        ? (props.disabled && props.theme.disabledColorOnDark) || props.theme.colorOnDark
        : (props.disabled && props.theme.disabledColor) || props.theme.color};
    :hover {
      background-color: transparent;
    }
  }
`;

const LabelContainer = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  color: ${(props) =>
    props.backgroundType === "dark"
      ? (props.disabled && props.theme.disabledFontColorOnDark) || props.theme.fontColorOnDark
      : (props.disabled && props.theme.disabledFontColor) || props.theme.fontColor};
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
`;

export default DxcRadio;
