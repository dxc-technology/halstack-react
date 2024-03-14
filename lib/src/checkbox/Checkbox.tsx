import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AdvancedTheme, spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import CheckboxPropsType, { RefType } from "./types";

const checkedIcon = (
  <svg fill="currentColor" focusable="false" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
  </svg>
);

const DxcCheckbox = React.forwardRef<RefType, CheckboxPropsType>(
  (
    {
      checked,
      defaultChecked = false,
      value,
      label = "",
      labelPosition = "before",
      name = "",
      disabled = false,
      optional = false,
      readOnly = false,
      onChange,
      margin,
      size = "fitContent",
      tabIndex = 0,
    },
    ref
  ): JSX.Element => {
    const [labelId] = useState(`label-checkbox-${uuidv4()}`);
    const [innerChecked, setInnerChecked] = useState(defaultChecked);
    const checkboxRef = useRef(null);
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();

    const handleCheckboxChange = () => {
      if (!disabled && !readOnly) {
        document.activeElement !== checkboxRef?.current && checkboxRef?.current?.focus();
        const newChecked = checked ?? innerChecked;
        checked ?? setInnerChecked((innerChecked) => !innerChecked);
        onChange?.(!newChecked);
      }
    };

    const handleKeyboard = (event) => {
      switch (event.key) {
        case " ":
          event.preventDefault();
          handleCheckboxChange();
      }
    };

    return (
      <ThemeProvider theme={colorsTheme.checkbox}>
        <MainContainer
          disabled={disabled}
          readOnly={readOnly}
          onClick={handleCheckboxChange}
          margin={margin}
          size={size}
          checked={checked ?? innerChecked}
          ref={ref}
        >
          {label && (
            <LabelContainer id={labelId} disabled={disabled} labelPosition={labelPosition} aria-label={label}>
              {label}
              {optional && ` ${translatedLabels.formFields.optionalLabel}`}
            </LabelContainer>
          )}
          <ValueInput
            type="checkbox"
            checked={checked ?? innerChecked}
            name={name}
            value={value}
            disabled={disabled}
            readOnly
          />
          <CheckboxContainer>
            <Checkbox
              onKeyDown={handleKeyboard}
              role={disabled || tabIndex === -1 ? "presentation" : "checkbox"}
              tabIndex={disabled ? -1 : tabIndex}
              aria-checked={checked ?? innerChecked}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              aria-required={!disabled && !optional}
              aria-labelledby={label ? labelId : undefined}
              aria-label={label ? undefined : "Option"}
              aria-hidden={disabled || tabIndex === -1}
              checked={checked ?? innerChecked}
              disabled={disabled}
              readOnly={readOnly}
              ref={checkboxRef}
            >
              {(checked ?? innerChecked) && checkedIcon}
            </Checkbox>
          </CheckboxContainer>
        </MainContainer>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin: CheckboxPropsType["margin"], size: CheckboxPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const getDisabledColor = (theme: AdvancedTheme["checkbox"], element: string) => {
  switch (element) {
    case "check":
      return theme.disabledCheckColor;
    case "background":
      return theme.disabledBackgroundColorChecked;
    case "border":
      return theme.disabledBorderColor;
    case "label":
      return theme.disabledFontColor;
  }
};

const getReadOnlyColor = (theme: AdvancedTheme["checkbox"], element: string) => {
  switch (element) {
    case "check":
      return theme.readOnlyCheckColor;
    case "background":
      return theme.readOnlyBackgroundColorChecked;
    case "hoverBackground":
      return theme.hoverReadOnlyBackgroundColorChecked;
    case "border":
      return theme.readOnlyBorderColor;
    case "hoverBorder":
      return theme.hoverReadOnlyBorderColor;
  }
};

const getEnabledColor = (theme: AdvancedTheme["checkbox"], element: string) => {
  switch (element) {
    case "check":
      return theme.checkColor;
    case "background":
      return theme.backgroundColorChecked;
    case "hoverBackground":
      return theme.hoverBackgroundColorChecked;
    case "border":
      return theme.borderColor;
    case "hoverBorder":
      return theme.hoverBorderColor;
    case "label":
      return theme.fontColor;
  }
};

const LabelContainer = styled.span<{
  disabled: CheckboxPropsType["disabled"];
  labelPosition: CheckboxPropsType["labelPosition"];
}>`
  order: ${(props) => (props.labelPosition === "before" ? 0 : 1)};
  color: ${(props) =>
    props.disabled ? getDisabledColor(props.theme, "label") : getEnabledColor(props.theme, "label")};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
`;

const ValueInput = styled.input`
  display: none;
`;

const CheckboxContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

const Checkbox = styled.span<{
  checked: CheckboxPropsType["checked"];
  disabled: CheckboxPropsType["disabled"];
  readOnly: CheckboxPropsType["readOnly"];
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  border: 2px solid
    ${(props) =>
      props.disabled
        ? getDisabledColor(props.theme, "border")
        : props.readOnly
        ? getReadOnlyColor(props.theme, "border")
        : getEnabledColor(props.theme, "border")};
  border-radius: 2px;
  background-color: ${(props) =>
    props.checked
      ? props.disabled
        ? getDisabledColor(props.theme, "check")
        : props.readOnly
        ? getReadOnlyColor(props.theme, "check")
        : getEnabledColor(props.theme, "check")
      : "transparent"};
  color: ${(props) =>
    props.disabled
      ? getDisabledColor(props.theme, "background")
      : props.readOnly
      ? getReadOnlyColor(props.theme, "background")
      : getEnabledColor(props.theme, "background")};

  &:focus {
    outline: 2px solid ${(props) => props.theme.focusColor};
    outline-offset: 2px;
  }
  svg {
    position: absolute;
    width: 22px;
    height: 22px;
  }
  ${(props) => props.disabled && "pointer-events: none;"}
`;

const MainContainer = styled.div<{
  margin: CheckboxPropsType["margin"];
  size: CheckboxPropsType["size"];
  disabled: CheckboxPropsType["disabled"];
  readOnly: CheckboxPropsType["readOnly"];
  checked: CheckboxPropsType["checked"];
}>`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.checkLabelSpacing};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${(props) => (props.disabled ? "not-allowed" : props.readOnly ? "default" : "pointer")};

  &:hover ${Checkbox} {
    border: 2px solid
      ${(props) => {
        if (!props.disabled)
          return props.readOnly
            ? getReadOnlyColor(props.theme, "hoverBorder")
            : getEnabledColor(props.theme, "hoverBorder");
      }};
    color: ${(props) => {
      if (!props.disabled)
        return props.readOnly
          ? getReadOnlyColor(props.theme, "hoverBackground")
          : getEnabledColor(props.theme, "hoverBackground");
    }};
  }
`;

export default DxcCheckbox;
