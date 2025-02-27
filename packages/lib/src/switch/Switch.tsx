import { forwardRef, KeyboardEvent, useContext, useState } from "react";
import styled from "styled-components";
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

const getTrackColor = (checked: SwitchPropsType["checked"], disabled: SwitchPropsType["disabled"]): string => {
  switch (true) {
    case checked && disabled:
      return "var(--color-bg-primary-lighter)";
    case !checked && disabled:
      return "var(--color-bg-neutral-light)";
    case checked && !disabled:
      return "var(--color-bg-primary-strong)";
    case !checked && !disabled:
      return "var(--color-bg-neutral-strong)";
    default:
      return "";
  }
};

const SwitchContainer = styled.div<{
  disabled: SwitchPropsType["disabled"];
  labelPosition: SwitchPropsType["labelPosition"];
  margin: SwitchPropsType["margin"];
  size: SwitchPropsType["size"];
}>`
  display: inline-grid;
  grid-template-columns: ${(props) => (props.labelPosition === "after" ? "52px minmax(0, max-content)" : "minmax(0, max-content) 52px")};
  place-items: center;
  gap: var(--spacing-gap-m);
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: var(--height-m);
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:focus {
    outline: none;
    /* Thumb focus */
    &:not([aria-disabled="true"]) {
      > span::before {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        outline-offset: 2px;
      }
    }
  }
`;

const LabelContainer = styled.span<{
  disabled: SwitchPropsType["disabled"];
  labelPosition: SwitchPropsType["labelPosition"];
}>`
  display: flex;
  align-items: baseline;
  gap: var(--spacing-gap-xs);
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  max-width: 100%;
  order: ${({ labelPosition }) => (labelPosition === "before" ? 0 : 1)};
`;

const Label = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionalLabel = styled.span<{ disabled: SwitchPropsType["disabled"] }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-stronger)")};
  font-size: var(--typography-label-m);
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
    box-shadow: var(--shadow-low-x-position) var(--shadow-low-y-position) var(--shadow-low-blur)
      var(--shadow-low-spread) var(--shadow-dark);
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

    const handlerOnChange = () => {
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
        onClick={!disabled ? handlerOnChange : undefined}
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
          style={{ display: "none" }}
          type="checkbox"
          role="switch"
          value={value}
        />
      </SwitchContainer>
    );
  }
);

export default DxcSwitch;
