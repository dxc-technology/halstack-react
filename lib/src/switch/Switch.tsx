// @ts-nocheck
import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Switch } from "@material-ui/core";
import DxcRequired from "../common/RequiredComponent";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";
import SwitchPropsType from "./types";

const DxcSwitch = ({
  defaultChecked = false,
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
}: SwitchPropsType): JSX.Element => {
  const [switchId] = useState(`switch-${uuidv4()}`);
  const labelId = `label-${switchId}`;
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const handlerSwitchChange = (event) => {
    if (checked === undefined) {
      const isChecked = event.target.checked ?? !innerChecked;
      setInnerChecked(isChecked);
      onChange?.(isChecked);
    } else onChange?.(!checked);
  };

  return (
    <ThemeProvider theme={colorsTheme.switch}>
      <SwitchContainer
        margin={margin}
        disabled={disabled}
        labelPosition={labelPosition}
        size={size}
        backgroundType={backgroundType}
      >
        <Switch
          checked={checked ?? innerChecked}
          inputProps={{
            name: name,
            "aria-labelledby": labelId,
            role: "switch",
            "aria-checked": checked ?? innerChecked,
            tabIndex: tabIndex,
          }}
          onChange={handlerSwitchChange}
          value={value}
          disabled={disabled}
          disableRipple
        />
        <LabelContainer
          id={labelId}
          labelPosition={labelPosition}
          onClick={!disabled && handlerSwitchChange}
          disabled={disabled}
          backgroundType={backgroundType}
        >
          {required && <DxcRequired />}
          {label}
        </LabelContainer>
      </SwitchContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const SwitchContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin, props.size)};
  display: inline-flex;
  align-items: center;
  flex-direction: ${(props) => (props.labelPosition === "after" ? "row" : "row-reverse")};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  .MuiSwitch-root {
    align-items: center;
    width: ${(props) => props.theme.trackWidth};
    height: 45px;
    margin: 3px;

    .Mui-focusVisible {
      outline: ${(props) =>
        `${
          props.backgroundType === "dark" ? props.theme.thumbFocusColorOnDark : props.theme.thumbFocusColor
        } solid 2px`};
      outline-offset: -3px;
    }

    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.uncheckedTrackBackgroundColorOnDark
          : props.theme.uncheckedTrackBackgroundColor};
      height: ${(props) => props.theme.trackHeight};
    }

    .MuiSwitch-switchBase + .MuiSwitch-track {
      opacity: 1;
    }

    .MuiIconButton-root {
      /*Enabled and unchecked*/
      top: unset;
      .MuiSwitch-thumb {
        /*Only for thumb in all states*/
        width: ${(props) => props.theme.thumbWidth};
        height: ${(props) => props.theme.thumbHeight};
      }
      color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.uncheckedThumbBackgroundColorOnDark
          : props.theme.uncheckedThumbBackgroundColor};
      &:hover {
        background-color: transparent;
      }
      &.Mui-disabled {
        /*Disabled and unchecked*/
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.disabledUncheckedThumbBackgroundColorOnDark
            : props.theme.disabledUncheckedThumbBackgroundColor};
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: ${(props) =>
            props.backgroundType === "dark"
              ? props.theme.disabledUncheckedTrackBackgroundColorOnDark
              : props.theme.disabledUncheckedTrackBackgroundColor};
        }
      }
      &.Mui-disabled.Mui-checked {
        /*Disabled and checked*/
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.disabledCheckedThumbBackgroundColorOnDark
            : props.theme.disabledCheckedThumbBackgroundColor};
        + .MuiSwitch-track {
          /*Disabled and checked bar*/
          background-color: ${(props) =>
            props.backgroundType === "dark"
              ? props.theme.disabledCheckedTrackBackgroundColorOnDark
              : props.theme.disabledCheckedTrackBackgroundColor};
        }
      }
      &.Mui-checked {
        /*Enabled and checked*/
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.checkedThumbBackgroundColorOnDark
            : props.theme.checkedThumbBackgroundColor};
        transform: translateX(${(props) => props.theme.thumbShift});
        &:hover {
          background-color: transparent;
        }
        + .MuiSwitch-track {
          /*Enabled and checked bar*/
          background-color: ${(props) =>
            props.backgroundType === "dark"
              ? props.theme.checkedTrackBackgroundColorOnDark
              : props.theme.checkedTrackBackgroundColor};
        }
      }
    }
  }
`;

const LabelContainer = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledLabelFontColorOnDark
        : props.theme.disabledLabelFontColor
      : props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.theme.labelFontColor};
  opacity: 1;
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => (props.disabled ? props.theme.disabledLabelFontStyle : props.theme.labelFontStyle)};
  font-weight: ${(props) => props.theme.labelFontWeight};
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
  ${(props) =>
    props.labelPosition === "after"
      ? `margin-left: ${props.theme.spaceBetweenLabelSwitch};`
      : `margin-right: ${props.theme.spaceBetweenLabelSwitch};`}
`;

export default DxcSwitch;
