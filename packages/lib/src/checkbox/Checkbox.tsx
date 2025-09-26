import { useContext, useState, useRef, useId, forwardRef, KeyboardEvent } from "react";
import styled from "@emotion/styled";
import { HalstackLanguageContext } from "../HalstackContext";
import CheckboxPropsType, { RefType } from "./types";
import { calculateWidth, icons, spaces } from "./utils";
import CheckboxContext from "./CheckboxContext";

const Label = styled.span<{
  disabled: CheckboxPropsType["disabled"];
}>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  span {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  }
`;

const Checkbox = styled.span<{
  disabled: CheckboxPropsType["disabled"];
  readOnly: CheckboxPropsType["readOnly"];
}>`
  display: flex;
  border-radius: var(--border-radius-s);
  color: ${({ disabled, readOnly }) =>
    disabled || readOnly ? "var(--color-fg-neutral-medium)" : "var(--color-fg-secondary-medium)"};
  ${({ disabled }) => disabled && "pointer-events: none;"}

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
  svg {
    width: 24px;
    height: var(--height-s);
  }
`;

const CheckboxContainer = styled.div<{
  disabled: CheckboxPropsType["disabled"];
  labelPosition: CheckboxPropsType["labelPosition"];
  margin: CheckboxPropsType["margin"];
  readOnly: CheckboxPropsType["readOnly"];
  size: CheckboxPropsType["size"];
}>`
  display: flex;
  align-items: center;
  flex-direction: ${({ labelPosition }) => (labelPosition === "before" ? "row" : "row-reverse")};
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
  cursor: ${({ disabled, readOnly }) => (disabled ? "not-allowed" : readOnly ? "default" : "pointer")};

  &:hover ${Checkbox} {
    ${({ disabled, readOnly }) =>
      !disabled && `color: ${readOnly ? "var(--color-fg-neutral-strong)" : "var(--color-fg-secondary-strong)"}`};
  }
  &:active ${Checkbox} {
    ${({ disabled, readOnly }) =>
      !disabled && `color: ${readOnly ? "var(--color-fg-neutral-strong)" : "var(--color-fg-secondary-strong)"}`};
  }
`;

const DxcCheckbox = forwardRef<RefType, CheckboxPropsType>(
  (
    {
      ariaLabel = "Checkbox",
      checked,
      defaultChecked = false,
      disabled = false,
      label = "",
      labelPosition = "before",
      margin,
      name = "",
      onChange,
      optional = false,
      readOnly = false,
      size = "fitContent",
      tabIndex = 0,
      value,
    },
    ref
  ) => {
    const labelId = `label-checkbox-${useId()}`;
    const [innerChecked, setInnerChecked] = useState(defaultChecked);
    const checkboxRef = useRef<HTMLSpanElement | null>(null);
    const translatedLabels = useContext(HalstackLanguageContext);
    const { partial } = useContext(CheckboxContext) ?? {};

    const handleOnChange = () => {
      if (!disabled && !readOnly) {
        if (document.activeElement !== checkboxRef.current) checkboxRef.current?.focus();
        if (checked == null) setInnerChecked((innerCurrentlyChecked) => !innerCurrentlyChecked);
        onChange?.(!(checked ?? innerChecked));
      }
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
      switch (event.key) {
        case " ":
          event.preventDefault();
          handleOnChange();
          break;
        default:
          break;
      }
    };

    return (
      <CheckboxContainer
        disabled={disabled}
        labelPosition={labelPosition}
        margin={margin}
        onClick={handleOnChange}
        readOnly={readOnly}
        ref={ref}
        size={size}
      >
        {label && (
          <Label aria-label={label} disabled={disabled} id={labelId}>
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
          </Label>
        )}
        <Checkbox
          aria-checked={checked ?? innerChecked}
          aria-disabled={disabled}
          aria-label={label ? undefined : ariaLabel}
          aria-labelledby={label ? labelId : undefined}
          aria-readonly={readOnly}
          aria-required={!disabled && !optional}
          disabled={disabled}
          onKeyDown={handleOnKeyDown}
          readOnly={readOnly}
          role="checkbox"
          ref={checkboxRef}
          tabIndex={disabled ? -1 : tabIndex}
        >
          {partial ? icons.partial : (checked ?? innerChecked) ? icons.checked : icons.unchecked}
        </Checkbox>
        <input
          checked={checked ?? innerChecked}
          disabled={disabled}
          name={name}
          readOnly
          style={{ display: "none" }}
          type="checkbox"
          value={value}
        />
      </CheckboxContainer>
    );
  }
);

DxcCheckbox.displayName = "DxcCheckbox";

export default DxcCheckbox;
