import { useContext, useState, useRef, useId, forwardRef, KeyboardEvent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";
import CheckboxPropsType, { RefType } from "./types";

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const spaces = {
  xxsmall: "var(--spacing-padding-xxs)",
  xsmall: "var(--spacing-padding-xs)",
  small: "var(--spacing-padding-s)",
  medium: "var(--spacing-padding-m)",
  large: "var(--spacing-padding-l)",
  xlarge: "var(--spacing-padding-xl)",
  xxlarge: "var(--spacing-padding-xxl)",
};

const calculateWidth = (margin: CheckboxPropsType["margin"], size: CheckboxPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

const getDisabledColor = (element: string) => {
  switch (element) {
    case "check":
      return "var(--color-fg-neutral-bright)";
    case "background":
      return "var(--color-fg-neutral-medium)";
    case "border":
      return "var(--border-color-neutral-medium)";
    case "label":
      return "var(--color-fg-neutral-medium)";
    default:
      return undefined;
  }
};

const getReadOnlyColor = (element: string) => {
  switch (element) {
    case "check":
      return "var(--color-fg-neutral-bright)";
    case "background":
      return "var(--color-fg-neutral-medium)";
    case "hoverBackground":
      return "var(--color-bg-neutral-stronger)";
    case "border":
      return "var(--border-color-neutral-strong)";
    case "hoverBorder":
      return "var(--border-color-neutral-stronger)";
    case "activeBorder":
      return "var(--border-color-neutral-strongest)";
    case "activeBackground":
      return "var(--color-bg-neutral-strongest)";
    default:
      return undefined;
  }
};

const getEnabledColor = (element: string) => {
  switch (element) {
    case "check":
      return "var(--color-fg-neutral-bright)";
    case "background":
      return "var(--color-bg-secondary-strong)";
    case "hoverBackground":
      return "var(--color-bg-secondary-stronger)";
    case "border":
      return "var(--border-color-secondary-strong)";
    case "hoverBorder":
      return "var(--border-color-secondary-stronger)";
    case "label":
      return "var(--color-fg-neutral-dark)";
    case "activeBorder":
      return "var(--border-color-secondary-strongest)";
    case "activeBackground":
      return "var(--color-bg-secondary-strongest)";
    default:
      return undefined;
  }
};

const LabelContainer = styled.span<{
  disabled: CheckboxPropsType["disabled"];
  labelPosition: CheckboxPropsType["labelPosition"];
}>`
  order: ${(props) => (props.labelPosition === "before" ? 0 : 1)};
  color: ${(props) => (props.disabled ? getDisabledColor("label") : getEnabledColor("label"))};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
`;

const ValueInput = styled.input`
  display: none;
`;

const CheckboxContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: var(--height-s);
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
  height: 18px; // This does not have an apropiate alias
  width: 18px; // This does not have an apropiate alias
  border: var(--border-width-m) solid
    ${(props) =>
      props.disabled
        ? getDisabledColor("border")
        : props.readOnly
          ? getReadOnlyColor("border")
          : getEnabledColor("border")};
  border-radius: 2px;
  background-color: ${(props) =>
    props.checked
      ? props.disabled
        ? getDisabledColor("check")
        : props.readOnly
          ? getReadOnlyColor("check")
          : getEnabledColor("check")
      : "transparent"};
  color: ${(props) =>
    props.disabled
      ? getDisabledColor("background")
      : props.readOnly
        ? getReadOnlyColor("background")
        : getEnabledColor("background")};

  &:focus {
    outline: var(--border-width-m) solid var(--border-color-secondary-medium);
    outline-offset: 1px; // This does not have an apropiate alias
  }
  svg {
    position: absolute;
    width: 24px;
    height: var(--height-s);
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
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
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
    border: var(--border-width-m) solid
      ${(props) => {
        if (!props.disabled) return props.readOnly ? getReadOnlyColor("hoverBorder") : getEnabledColor("hoverBorder");
      }};
    color: ${(props) => {
      if (!props.disabled)
        return props.readOnly ? getReadOnlyColor("hoverBackground") : getEnabledColor("hoverBackground");
    }};
  }

  &:active ${Checkbox} {
    border: var(--border-width-m) solid
      ${(props) => {
        if (!props.disabled) return props.readOnly ? getReadOnlyColor("activeBorder") : getEnabledColor("activeBorder");
      }};
    color: ${(props) => {
      if (!props.disabled)
        return props.readOnly ? getReadOnlyColor("activeBackground") : getEnabledColor("activeBackground");
    }};
  }
`;

const checkedIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
      fill="currentColor"
    />
  </svg>
);

const DxcCheckbox = forwardRef<RefType, CheckboxPropsType>(
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
      ariaLabel = "Checkbox",
    },
    ref
  ): JSX.Element => {
    const labelId = `label-checkbox-${useId()}`;
    const [innerChecked, setInnerChecked] = useState(defaultChecked);
    const checkboxRef = useRef<HTMLSpanElement | null>(null);
    const colorsTheme = useContext(HalstackContext);
    const translatedLabels = useContext(HalstackLanguageContext);

    const handleCheckboxChange = () => {
      if (!disabled && !readOnly) {
        if (document.activeElement !== checkboxRef.current) {
          checkboxRef.current?.focus();
        }
        if (checked == null) {
          setInnerChecked((innerCurrentlyChecked) => !innerCurrentlyChecked);
        }
        onChange?.(!(checked ?? innerChecked));
      }
    };

    const handleKeyboard = (event: KeyboardEvent<HTMLSpanElement>) => {
      switch (event.key) {
        case " ":
          event.preventDefault();
          handleCheckboxChange();
          break;
        default:
          break;
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
              role="checkbox"
              tabIndex={disabled ? -1 : tabIndex}
              aria-checked={checked ?? innerChecked}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              aria-required={!disabled && !optional}
              aria-labelledby={label ? labelId : undefined}
              aria-label={label ? undefined : ariaLabel}
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

export default DxcCheckbox;
