import { memo, useEffect, useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import { RadioInputProps } from "./types";
import { icons, getRadioInputStyles } from "./utils";

const Label = styled.span<{ disabled: RadioInputProps["disabled"] }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
`;

type CommonStylingProps = {
  disabled: RadioInputProps["disabled"];
  error: boolean;
  readOnly: RadioInputProps["readOnly"];
};

const RadioButton = styled.span<CommonStylingProps>`
  display: grid;
  place-items: center;
  height: var(--height-s);
  width: 24px;
  border-radius: 50%;
  ${({ disabled }) => disabled && "pointer-events: none;"}

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
`;

const RadioInputContainer = styled.span<CommonStylingProps>`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  color: ${({ disabled, error, readOnly }) => getRadioInputStyles(disabled, error, readOnly, "default")};
  cursor: ${({ disabled, readOnly }) => (disabled ? "not-allowed" : readOnly ? "default" : "pointer")};

  &:hover ${RadioButton} {
    color: ${({ disabled, error, readOnly }) => getRadioInputStyles(disabled, error, readOnly, "hover")};
  }
  &:active ${RadioButton} {
    color: ${({ disabled, error, readOnly }) => getRadioInputStyles(disabled, error, readOnly, "active")};
  }
`;

const RadioInput = ({ checked, disabled, error, focused, label, onClick, readOnly, tabIndex }: RadioInputProps) => {
  const radioLabelId = `radio-${useId()}`;
  const ref = useRef<HTMLSpanElement>(null);
  const [firstUpdate, setFirstUpdate] = useState(true);

  useEffect(() => {
    // Don't apply in the first render
    if (firstUpdate) {
      setFirstUpdate(false);
      return;
    }
    if (focused) ref.current?.focus();
  }, [focused]);

  const handleOnClick = () => {
    onClick();
    if (document.activeElement !== ref.current) ref.current?.focus();
  };

  return (
    <RadioInputContainer
      disabled={disabled}
      error={!!error}
      onClick={disabled ? undefined : handleOnClick}
      readOnly={readOnly}
    >
      <RadioButton
        aria-checked={checked}
        aria-disabled={disabled}
        aria-labelledby={radioLabelId}
        disabled={disabled}
        error={!!error}
        readOnly={readOnly}
        ref={ref}
        role="radio"
        tabIndex={disabled ? -1 : focused ? tabIndex : -1}
      >
        {checked ? icons.checked : icons.unchecked}
      </RadioButton>
      <Label disabled={disabled} id={radioLabelId}>
        {label}
      </Label>
    </RadioInputContainer>
  );
};

export default memo(RadioInput);
