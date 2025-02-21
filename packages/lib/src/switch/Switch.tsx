import { forwardRef, KeyboardEvent, useContext, useId, useRef, useState } from "react";
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
  margin: SwitchPropsType["margin"];
  size: SwitchPropsType["size"];
  disabled: SwitchPropsType["disabled"];
}>`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: var(--height-xl);
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
`;

const Label = styled.span<{
  disabled: SwitchPropsType["disabled"];
  labelPosition: SwitchPropsType["labelPosition"];
}>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  order: ${({ labelPosition }) => (labelPosition === "before" ? 0 : 1)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Switch = styled.span<{ checked: SwitchPropsType["checked"]; disabled: SwitchPropsType["disabled"] }>`
  position: relative;
  margin: var(--spacing-padding-none) var(--spacing-padding-s);
  width: 36px;
  height: var(--height-xxxs);
  border-radius: var(--border-radius-xl, 24px);
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
    box-shadow:
      0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%),
      0px 1px 3px 0px rgb(0 0 0 / 12%);
    transition: transform 0.2s ease-in-out; /* Thumb transform transition */
  }
  &:focus {
    outline: none;
    ::before {
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
      outline-offset: 4px;
    }
  }
  &[aria-checked="true"]::before {
    transform: translateX(20px);
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
  ): JSX.Element => {
    const switchId = `switch-${useId()}`;
    const labelId = `label-${switchId}`;
    const [innerChecked, setInnerChecked] = useState(defaultChecked);
    const refTrack = useRef<HTMLSpanElement>(null);
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
          refTrack.current?.focus();
          setInnerChecked(!(checked ?? innerChecked));
          onChange?.(!(checked ?? innerChecked));
          break;
        default:
          break;
      }
    };

    return (
      <SwitchContainer
        margin={margin}
        size={size}
        onKeyDown={handleOnKeyDown}
        disabled={disabled}
        onClick={!disabled ? handlerOnChange : undefined}
        ref={ref}
      >
        {label && (
          <Label disabled={disabled} id={labelId} labelPosition={labelPosition}>
            {label} {optional && <>{translatedLabels.formFields.optionalLabel}</>}
          </Label>
        )}
        <input
          aria-hidden
          checked={checked ?? innerChecked}
          disabled={disabled}
          name={name}
          readOnly
          style={{ display: "none" }}
          type="checkbox"
          value={value}
        />
        <Switch
          aria-checked={checked ?? innerChecked}
          aria-disabled={disabled}
          aria-label={label ? undefined : ariaLabel}
          aria-labelledby={labelId}
          checked={checked ?? innerChecked}
          disabled={disabled}
          ref={refTrack}
          role="switch"
          tabIndex={disabled ? -1 : tabIndex}
        />
      </SwitchContainer>
    );
  }
);

export default DxcSwitch;
