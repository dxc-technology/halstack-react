import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext from "../BackgroundColorContext";
import CheckboxPropsType, { Margin, Space } from "./types";

const DxcCheckbox = ({
  checked,
  defaultChecked = false,
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
}: CheckboxPropsType): JSX.Element => {
  const [checkboxId] = useState(`checkbox-${uuidv4()}`);
  const labelId = `label-${checkboxId}`;
  const [innerChecked, setInnerChecked] = useState(defaultChecked);
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);
  const translatedLabels = useTranslatedLabels();

  const handleCheckboxChange = (checkboxValue) => {
    if (checked === undefined) {
      const isChecked = checkboxValue.target.checked === undefined ? !innerChecked : !checkboxValue.target.checked;
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

  const handleKeyboard = (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      handleCheckboxChange(event);
    }
  };

  const labelComponent = (
    <LabelContainer
      id={labelId}
      onClick={disabled === true ? () => {} : handleCheckboxChange}
      disabled={disabled}
      backgroundType={backgroundType}
      onMouseOver={handleLabelHover}
      onMouseOut={handleLabelHover}
    >
      {labelPosition === "before" ? (
        <>
          {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
        </>
      ) : (
        <>
          {optional && <span>(Optional)</span>} {label}
        </>
      )}
    </LabelContainer>
  );

  return (
    <ThemeProvider theme={colorsTheme.checkbox}>
      <CheckboxContainer id={name} disabled={disabled} margin={margin} size={size}>
        {label && labelPosition === "before" && labelComponent}
        <CheckboxInput
          type="checkbox"
          checked={checked ?? innerChecked}
          name={name}
          aria-labelledby={labelId}
          role="checkbox"
          aria-checked={checked ?? innerChecked}
          onChange={handleCheckboxChange}
          value={value}
          disabled={disabled}
          tabIndex={-1}
        />
        <CheckboxFocus
          backgroundType={backgroundType}
          labelPosition={labelPosition}
          label={label}
          tabIndex={tabIndex}
          onClick={disabled === true ? () => {} : handleCheckboxChange}
          onKeyDown={disabled === true ? () => {} : handleKeyboard}
        >
          {disabled ? (
            <DisabledCheckbox backgroundType={backgroundType} checked={checked ?? innerChecked} />
          ) : (
            <Checkbox
              backgroundType={backgroundType}
              isLabelHovered={isLabelHovered}
              checked={checked ?? innerChecked}
            />
          )}
        </CheckboxFocus>
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
    case "hoverBackground":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.hoverBackgroundColorCheckedOnDark
        : props.theme.hoverBackgroundColorChecked;
    case "border":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.borderColorOnDark
        : props.theme.borderColor;
    case "hoverBorder":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.hoverBorderColorOnDark
        : props.theme.hoverBorderColor;
    case "label":
      return props.backgroundType && props.backgroundType === "dark"
        ? props.theme.fontColorOnDark
        : props.theme.fontColor;
  }
};

type LabelContainerProps = {
  disabled: boolean;
  backgroundType: "dark" | "light";
};

const LabelContainer = styled.span<LabelContainerProps>`
  color: ${(props) => (props.disabled ? getDisabledColor(props, "label") : getNotDisabledColor(props, "label"))};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

type CheckboxContainerProps = {
  margin?: Space | Margin;
  size: "small" | "medium" | "large" | "fillParent" | "fitContent";
  disabled: boolean;
};

const CheckboxContainer = styled.div<CheckboxContainerProps>`
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
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  user-select: none;
`;

type CheckboxFocusProps = {
  backgroundType: "dark" | "light";
  label: string;
  labelPosition: "after" | "before";
};

const CheckboxFocus = styled.span<CheckboxFocusProps>`
  width: 24px;
  height: 24px;
  position: relative;
  ${(props) =>
    props.label
      ? props.labelPosition === "after"
        ? `margin-right: ${props.theme.checkLabelSpacing}; left: 1px; right: unset;`
        : `margin-left: ${props.theme.checkLabelSpacing}; right: 1px; left: unset;`
      : "right: 1px; left: unset;"};
  &:focus-visible {
    border-radius: 0.25rem;
    outline: 2px solid
      ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)};
    outline-offset: -1px;
  }
`;

type CheckboxProps = {
  backgroundType: "dark" | "light";
  isLabelHovered?: boolean;
  checked: boolean;
};

const Checkbox = styled.span<CheckboxProps>`
  height: 14px;
  width: 14px;
  border: solid 2px
    ${(props) =>
      props.isLabelHovered ? getNotDisabledColor(props, "hoverBorder") : getNotDisabledColor(props, "border")};
  content: "";
  background-color: ${(props) =>
    props.checked
      ? props.isLabelHovered
        ? getNotDisabledColor(props, "hoverBackground")
        : getNotDisabledColor(props, "background")
      : "transparent"};
  border-radius: 2px;
  position: absolute;
  top: 3px;
  left: 3px;
  &:hover {
    border: solid 2px
      ${(props) =>
        props.backgroundType === "dark" ? props.theme.hoverBorderColorOnDark : props.theme.hoverBorderColor};
    background-color: ${(props) => (props.checked ? getNotDisabledColor(props, "hoverBackground") : "transparent")};
  }
  &:after {
    content: "";
    position: absolute;
    left: 3px;
    bottom: 2px;
    width: 5px;
    height: 12px;
    border: solid ${(props) => getNotDisabledColor(props, "check")};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    ${(props) => (props.checked ? `display: block;` : `display: none`)}
  }
  &:focus {
    outline: none;
  }
`;

const DisabledCheckbox = styled(Checkbox)`
  opacity: 0.34;
  border: solid 2px ${(props) => getDisabledColor(props, "border")};
  background-color: ${(props) => (props.checked ? getDisabledColor(props, "background") : "transparent")};
  &:hover {
    border: solid 2px ${(props) => getDisabledColor(props, "border")};
    background-color: ${(props) => (props.checked ? getDisabledColor(props, "background") : "transparent")};
  }
  &:after {
    border: solid ${(props) => getDisabledColor(props, "check")};
    border-width: 0 2px 2px 0;
  }
`;

export default DxcCheckbox;
