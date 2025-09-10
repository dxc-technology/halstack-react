import { forwardRef, KeyboardEvent, useContext, useState } from "react";
import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import { HalstackLanguageContext } from "../HalstackContext";
import SwitchPropsType, { RefType } from "./types";

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin: SwitchPropsType["margin"], size: SwitchPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

const getTrackColor = (checked: SwitchPropsType["checked"], disabled: SwitchPropsType["disabled"]) =>
  disabled
    ? checked
      ? "var(--color-bg-primary-lighter)"
      : "var(--color-bg-neutral-light)"
    : checked
      ? "var(--color-bg-primary-strong)"
      : "var(--color-bg-neutral-strong)";

const SwitchContainer = styled.div<{
  disabled: SwitchPropsType["disabled"];
  labelPosition: SwitchPropsType["labelPosition"];
  margin: SwitchPropsType["margin"];
  size: SwitchPropsType["size"];
}>`
  display: inline-grid;
  grid-template-columns: ${({ labelPosition }) =>
    labelPosition === "after" ? "52px minmax(0, max-content)" : "minmax(0, max-content) 52px"};
  place-items: center;
  gap: var(--spacing-gap-m);
  width: ${({ margin, size }) => calculateWidth(margin, size)};
  height: var(--height-m);
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:focus {
    outline: none;
    /* Thumb focus */
    &:not([aria-disabled="true"]) {
      > span::before {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        outline-offset: var(--spacing-padding-xxxs);
      }
    }
  }
`;

const LabelContainer = styled.span<{
  disabled: SwitchPropsType["disabled"];
  labelPosition: SwitchPropsType["labelPosition"];
}>`
  display: flex;
  gap: var(--spacing-gap-xs);
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  max-width: 100%;
  order: ${({ labelPosition }) => (labelPosition === "before" ? 0 : 1)};
`;

const Label = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionalLabel = styled.span<{
  disabled: SwitchPropsType["disabled"];
}>`
  ${({ disabled }) => !disabled && "color: var(--color-fg-neutral-stronger);"}
`;

const Switch = styled.span<{ checked: SwitchPropsType["checked"]; disabled: SwitchPropsType["disabled"] }>`
  position: relative;
  width: 36px;
  height: var(--height-xxxs);
  border-radius: var(--border-radius-xl);
  background-color: ${({ checked, disabled }) => getTrackColor(checked, disabled)};
  transition: background-color 0.2s ease-in-out; /* Background color transition */

  /* Thumb */
  ::before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: -4px;
    width: 24px;
    height: var(--height-s);
    background-color: var(--color-fg-neutral-bright);
    border-radius: 50%;
    box-shadow: var(--shadow-100);
    transform: ${({ checked }) => checked && "translateX(20px)"};
    transition: transform 0.2s ease-in-out; /* Thumb transform transition */
  }
`;

const DxcSwitch = forwardRef<RefType, SwitchPropsType>(
  (
    {
      ariaLabel = "Switch",
      checked,
      defaultChecked = false,
      disabled,
      label,
      labelPosition = "before",
      margin,
      name,
      onChange,
      optional,
      size = "fitContent",
      tabIndex = 0,
      value,
    },
    ref
  ) => {
    const [innerChecked, setInnerChecked] = useState(defaultChecked);
    const translatedLabels = useContext(HalstackLanguageContext);

    const handleOnChange = () => {
      if (checked == null) setInnerChecked((currentInnerChecked) => !currentInnerChecked);
      onChange?.(!(checked ?? innerChecked));
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          setInnerChecked(!(checked ?? innerChecked));
          onChange?.(!(checked ?? innerChecked));
          break;
        default:
          break;
      }
    };

    return (
      <SwitchContainer
        aria-checked={checked ?? innerChecked}
        aria-disabled={disabled}
        aria-label={label ? undefined : ariaLabel}
        disabled={disabled}
        labelPosition={labelPosition}
        margin={margin}
        onClick={!disabled ? handleOnChange : undefined}
        onKeyDown={!disabled ? handleOnKeyDown : undefined}
        ref={ref}
        role="switch"
        size={size}
        tabIndex={disabled ? -1 : tabIndex}
      >
        {label && (
          <LabelContainer disabled={disabled} labelPosition={labelPosition}>
            <Label>{label}</Label>
            {optional && <OptionalLabel disabled={disabled}>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
          </LabelContainer>
        )}
        <Switch checked={checked ?? innerChecked} disabled={disabled} />
        <input
          aria-hidden
          checked={checked ?? innerChecked}
          disabled={disabled}
          name={name}
          readOnly
          role="switch"
          style={{ display: "none" }}
          type="checkbox"
          value={value}
        />
      </SwitchContainer>
    );
  }
);

export default DxcSwitch;
