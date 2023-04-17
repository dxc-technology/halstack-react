import React, { useState, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext, { BackgroundColorsType } from "../BackgroundColorContext";
import SwitchPropsType, { RefType } from "./types";

const DxcSwitch = React.forwardRef<RefType, SwitchPropsType>(
  (
    {
      defaultChecked,
      checked,
      value,
      label = "",
      labelPosition = "before",
      name = "",
      disabled = false,
      optional = false,
      onChange,
      margin,
      size = "fitContent",
      tabIndex = 0,
    },
    ref
  ): JSX.Element => {
    const [switchId] = useState(`switch-${uuidv4()}`);
    const labelId = `label-${switchId}`;
    const [innerChecked, setInnerChecked] = useState(defaultChecked ?? false);

    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const backgroundType = useContext(BackgroundColorContext);
    const refTrack = useRef(null);

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "Enter":
        case " ": //Space
          event.preventDefault();
          refTrack.current.focus();
          const isChecked = !(checked ?? innerChecked);
          setInnerChecked(isChecked);
          onChange?.(isChecked);
          break;
      }
    };

    const handlerSwitchChange = (event) => {
      checked ?? setInnerChecked((innerChecked) => !innerChecked);
      onChange?.(checked ? !checked : !innerChecked);
    };

    return (
      <ThemeProvider theme={colorsTheme.switch}>
        <SwitchContainer
          margin={margin}
          size={size}
          onKeyDown={handleOnKeyDown}
          disabled={disabled}
          onClick={!disabled ? handlerSwitchChange : undefined}
          ref={ref}
        >
          {labelPosition === "before" && label && (
            <LabelContainer
              id={labelId}
              labelPosition={labelPosition}
              disabled={disabled}
              backgroundType={backgroundType}
              label={label}
            >
              {label} {optional && <>{translatedLabels.formFields.optionalLabel}</>}
            </LabelContainer>
          )}
          <ValueInput
            type="checkbox"
            name={name}
            aria-hidden={true}
            value={value}
            disabled={disabled}
            checked={checked ?? innerChecked}
            readOnly
          />
          <SwitchBase>
            <SwitchTrack
              role="switch"
              backgroundType={backgroundType}
              aria-checked={checked ?? innerChecked}
              aria-disabled={disabled}
              disabled={disabled}
              aria-labelledby={labelId}
              tabIndex={!disabled ? tabIndex : -1}
              ref={refTrack}
            />
          </SwitchBase>
          {labelPosition === "after" && label && (
            <LabelContainer
              id={labelId}
              labelPosition={labelPosition}
              disabled={disabled}
              backgroundType={backgroundType}
              label={label}
            >
              {optional && <>{translatedLabels.formFields.optionalLabel}</>} {label}
            </LabelContainer>
          )}
        </SwitchContainer>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const getDisabledColor = (props, element, subelement?) => {
  switch (element) {
    case "track":
      switch (subelement) {
        case "check":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.disabledCheckedTrackBackgroundColorOnDark
            : props.theme.disabledCheckedTrackBackgroundColor;
        case "uncheck":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.disabledUncheckedTrackBackgroundColorOnDark
            : props.theme.disabledUncheckedTrackBackgroundColor;
      }
    case "thumb":
      switch (subelement) {
        case "check":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.disabledCheckedThumbBackgroundColorOnDark
            : props.theme.disabledCheckedThumbBackgroundColor;
        case "uncheck":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.disabledUncheckedThumbBackgroundColorOnDark
            : props.theme.disabledUncheckedThumbBackgroundColor;
      }
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.disabledLabelFontColorOnDark
        : props.theme.disabledLabelFontColor;
  }
};

const getNotDisabledColor = (props, element, subelement?) => {
  switch (element) {
    case "track":
      switch (subelement) {
        case "check":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.checkedTrackBackgroundColorOnDark
            : props.theme.checkedTrackBackgroundColor;
        case "uncheck":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.uncheckedTrackBackgroundColorOnDark
            : props.theme.uncheckedTrackBackgroundColor;
      }
    case "thumb":
      switch (subelement) {
        case "check":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.checkedThumbBackgroundColorOnDark
            : props.theme.checkedThumbBackgroundColor;
        case "uncheck":
          return props.backgroundType && props.backgroundType === "dark"
            ? props.theme.uncheckedThumbBackgroundColorOnDark
            : props.theme.uncheckedThumbBackgroundColor;
      }
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.labelFontColorOnDark
        : props.theme.labelFontColor;
  }
};

const SwitchContainer = styled.div<{
  margin: SwitchPropsType["margin"];
  size: SwitchPropsType["size"];
  disabled: SwitchPropsType["disabled"];
}>`
  display: inline-flex;
  align-items: center;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: 40px;
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const LabelContainer = styled.span<{
  labelPosition: SwitchPropsType["labelPosition"];
  disabled: SwitchPropsType["disabled"];
  label: SwitchPropsType["label"];
  backgroundType: BackgroundColorsType;
}>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => (props.disabled ? getDisabledColor(props, "label") : getNotDisabledColor(props, "label"))};
  opacity: 1;
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => (props.disabled ? props.theme.disabledLabelFontStyle : props.theme.labelFontStyle)};
  font-weight: ${(props) => props.theme.labelFontWeight};

  ${(props) =>
    !props.label
      ? "margin: 0px;"
      : props.labelPosition === "after"
      ? `margin-left: ${props.theme.spaceBetweenLabelSwitch};`
      : `margin-right: ${props.theme.spaceBetweenLabelSwitch};`};

  ${(props) => props.labelPosition === "before" && "order: -1"}
`;

const SwitchBase = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 0px 12px;
`;

const ValueInput = styled.input`
  display: none;
`;

const SwitchTrack = styled.span<{ disabled: SwitchPropsType["disabled"]; backgroundType: BackgroundColorsType }>`
  border-radius: 15px;
  width: ${(props) => props.theme.trackWidth};
  height: ${(props) => props.theme.trackHeight};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:focus-visible {
    outline: none;
    ::before {
      outline: ${(props) =>
        `${
          props.backgroundType === "dark" ? props.theme.thumbFocusColorOnDark : props.theme.thumbFocusColor
        } solid 2px`};
      outline-offset: 6px;
    }
  }

  /* Thumb element */
  ::before {
    content: "";
    transform: initial;
    position: absolute;
    width: ${(props) => props.theme.thumbWidth};
    height: ${(props) => props.theme.thumbHeight};
    border-radius: 50%;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    bottom: -6px;
    left: -4px;
    transform: translateX(0px);
    background-color: ${(props) =>
      props.disabled ? getDisabledColor(props, "thumb", "uncheck") : getNotDisabledColor(props, "thumb", "uncheck")};
  }

  /* Unchecked */
  background-color: ${(props) =>
    props.disabled ? getDisabledColor(props, "track", "uncheck") : getNotDisabledColor(props, "track", "uncheck")};

  /* Checked */
  &[aria-checked="true"] {
    background-color: ${(props) =>
      props.disabled ? getDisabledColor(props, "track", "check") : getNotDisabledColor(props, "track", "check")};
    ::before {
      transform: translateX(${(props) => props.theme.thumbShift});
      background-color: ${(props) =>
        props.disabled ? getDisabledColor(props, "thumb", "check") : getNotDisabledColor(props, "thumb", "check")};
    }
  }
`;

export default DxcSwitch;
