import { FocusEvent, forwardRef, KeyboardEvent, useCallback, useContext, useId, useMemo, useState } from "react";
import styled from "styled-components";
import { HalstackLanguageContext } from "../HalstackContext";
import RadioInput from "./Radio";
import RadioGroupPropsType, { RefType } from "./types";
import Label from "../styles/forms/Label";
import HelperText from "../styles/forms/HelperText";
import ErrorMessage from "../styles/forms/ErrorMessage";

const RadioGroupContainer = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
`;

const RadioGroup = styled.div<{ stacking: RadioGroupPropsType["stacking"] }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ stacking }) => stacking};
  column-gap: var(--spacing-gap-l);
  row-gap: var(--spacing-gap-xs);
`;

const DxcRadioGroup = forwardRef<RefType, RadioGroupPropsType>(
  (
    {
      ariaLabel = "Radio group",
      defaultValue,
      disabled = false,
      error,
      helperText,
      label,
      name,
      onBlur,
      onChange,
      optional = false,
      optionalItemLabel,
      options,
      readOnly = false,
      stacking = "column",
      tabIndex = 0,
      value,
    },
    ref
  ) => {
    const id = `radio-group-${useId()}`;
    const labelId = `label-${id}`;
    const errorId = `error-${id}`;
    const translatedLabels = useContext(HalstackLanguageContext);
    const innerOptions = useMemo(
      () =>
        optional
          ? [
              ...options,
              {
                label: optionalItemLabel ?? translatedLabels.radioGroup.optionalItemLabelDefault,
                value: "",
                disabled,
              },
            ]
          : options,
      [optional, optionalItemLabel, options, translatedLabels]
    );
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [currentFocusIndex, setCurrentFocusIndex] = useState(() => {
      const initialSelectedOptionIndex = innerOptions.findIndex((option) => option.value === (value ?? innerValue));
      return initialSelectedOptionIndex !== -1 ? initialSelectedOptionIndex : 0;
    });
    const [firstTimeFocus, setFirstTimeFocus] = useState(true);

    const handleOnChange = useCallback(
      (newValue: string) => {
        const currentValue = value ?? innerValue;
        if (newValue !== currentValue && !readOnly) {
          if (value == null) setInnerValue(newValue);
          onChange?.(newValue);
        }
      },
      [innerValue, onChange, value]
    );

    const handleOnBlur = (event: FocusEvent<HTMLDivElement>) => {
      // If the radio group loses the focus to an element not contained inside it...
      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
        setFirstTimeFocus(true);
        const currentValue = value ?? innerValue;
        onBlur?.({
          value: currentValue,
          error: !optional && !currentValue ? translatedLabels.formFields.requiredSelectionErrorMessage : undefined,
        });
      }
    };

    const handleOnFocus = () => {
      if (firstTimeFocus) setFirstTimeFocus(false);
    };

    const setPreviousRadioChecked = () => {
      setCurrentFocusIndex((currentFocusIndexValue) => {
        let index = currentFocusIndexValue === 0 ? innerOptions.length - 1 : currentFocusIndexValue - 1;
        while (innerOptions[index]?.disabled) {
          index = index === 0 ? innerOptions.length - 1 : index - 1;
        }
        const option = innerOptions[index];
        if (option != null) handleOnChange(option.value);
        return index;
      });
    };

    const setNextRadioChecked = () => {
      setCurrentFocusIndex((currentFocusIndexValue) => {
        let index = currentFocusIndexValue === innerOptions.length - 1 ? 0 : currentFocusIndexValue + 1;
        while (innerOptions[index]?.disabled) {
          index = index === innerOptions.length - 1 ? 0 : index + 1;
        }
        const option = innerOptions[index];
        if (option != null) handleOnChange(option.value);
        return index;
      });
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "Left":
        case "ArrowLeft":
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          setPreviousRadioChecked();
          break;
        case "Right":
        case "ArrowRight":
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          setNextRadioChecked();
          break;
        case " ":
          event.preventDefault();
          if (innerOptions[currentFocusIndex] != null) handleOnChange(innerOptions[currentFocusIndex].value);
          break;
        default:
          break;
      }
    };

    return (
      <RadioGroupContainer ref={ref}>
        {label && (
          <Label disabled={disabled} hasMargin={!helperText} id={labelId}>
            {label}
            {optional && <span>{` ${translatedLabels.formFields.optionalLabel}`}</span>}
          </Label>
        )}
        {helperText && (
          <HelperText disabled={disabled} hasMargin>
            {helperText}
          </HelperText>
        )}
        <RadioGroup
          aria-disabled={disabled}
          aria-errormessage={error ? errorId : undefined}
          aria-invalid={!!error}
          aria-labelledby={label ? labelId : undefined}
          aria-orientation={stacking === "column" ? "vertical" : "horizontal"}
          aria-readonly={readOnly}
          aria-required={!disabled && !readOnly && !optional}
          aria-label={label ? undefined : ariaLabel}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          onKeyDown={handleOnKeyDown}
          role="radiogroup"
          stacking={stacking}
        >
          <input disabled={disabled} name={name} readOnly type="hidden" value={value ?? innerValue ?? ""} />
          {innerOptions.map((option, index) => (
            <RadioInput
              checked={(value ?? innerValue) === option.value}
              disabled={option.disabled || disabled}
              error={error}
              focused={currentFocusIndex === index}
              key={`radio-${index}`}
              label={option.label ?? ""}
              onClick={() => {
                handleOnChange(option.value);
                setCurrentFocusIndex(index);
              }}
              readOnly={readOnly}
              tabIndex={tabIndex}
            />
          ))}
        </RadioGroup>
        {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
      </RadioGroupContainer>
    );
  }
);

export default DxcRadioGroup;
