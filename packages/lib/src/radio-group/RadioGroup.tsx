import { FocusEvent, forwardRef, KeyboardEvent, useCallback, useId, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcRadio from "./Radio";
import RadioGroupPropsType, { RadioOption, RefType } from "./types";

const getInitialFocusIndex = (innerOptions: RadioOption[], value?: string) => {
  const initialSelectedOptionIndex = innerOptions.findIndex((option) => option.value === value);
  return initialSelectedOptionIndex !== -1 ? initialSelectedOptionIndex : 0;
};

const DxcRadioGroup = forwardRef<RefType, RadioGroupPropsType>(
  (
    {
      label,
      name,
      helperText,
      options,
      disabled = false,
      optional = false,
      optionalItemLabel,
      readOnly = false,
      stacking = "column",
      defaultValue,
      value,
      onChange,
      onBlur,
      error,
      tabIndex = 0,
    },
    ref
  ): JSX.Element => {
    const radioGroupId = `radio-group-${useId()}`;
    const radioGroupLabelId = `label-${radioGroupId}`;
    const errorId = `error-${radioGroupId}`;

    const [innerValue, setInnerValue] = useState(defaultValue);
    const [firstTimeFocus, setFirstTimeFocus] = useState(true);

    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();

    const innerOptions = useMemo(
      () =>
        optional
          ? [
              ...options,
              {
                label: optionalItemLabel ?? translatedLabels?.radioGroup?.optionalItemLabelDefault ?? "",
                value: "",
                disabled,
              },
            ]
          : options,
      [optional, options, optionalItemLabel, translatedLabels]
    );

    const [currentFocusIndex, setCurrentFocusIndex] = useState(getInitialFocusIndex(innerOptions, value ?? innerValue));

    const handleOnChange = useCallback(
      (newValue: string) => {
        const currentValue = value ?? innerValue;
        if (newValue !== currentValue && !readOnly) {
          if (value == null) {
            setInnerValue(newValue);
          }
          onChange?.(newValue);
        }
      },
      [value, innerValue, onChange]
    );
    const handleOnBlur = (event: FocusEvent<HTMLDivElement>) => {
      // If the radio group loses the focus to an element not contained inside it...
      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
        setFirstTimeFocus(true);
        const currentValue = value ?? innerValue;
        if (!optional && !currentValue) {
          onBlur?.({
            value: currentValue,
            error: translatedLabels?.formFields?.requiredSelectionErrorMessage,
          });
        } else {
          onBlur?.({ value: currentValue });
        }
      }
    };
    const handleOnFocus = () => {
      if (firstTimeFocus) {
        setFirstTimeFocus(false);
      }
    };

    const setPreviousRadioChecked = () => {
      setCurrentFocusIndex((currentFocusIndexValue) => {
        let index = currentFocusIndexValue === 0 ? innerOptions.length - 1 : currentFocusIndexValue - 1;
        while (innerOptions[index]?.disabled) {
          index = index === 0 ? innerOptions.length - 1 : index - 1;
        }
        const option = innerOptions[index];
        if (option != null) {
          handleOnChange(option.value);
        }
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
        if (option != null) {
          handleOnChange(option.value);
        }
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
          if (innerOptions[currentFocusIndex] != null) {
            handleOnChange(innerOptions[currentFocusIndex].value);
          }
          break;
        default:
          break;
      }
    };

    return (
      <ThemeProvider theme={colorsTheme?.radioGroup}>
        <RadioGroupContainer ref={ref}>
          {label && (
            <Label id={radioGroupLabelId} helperText={helperText} disabled={disabled}>
              {label}
              {optional && <OptionalLabel>{` ${translatedLabels?.formFields?.optionalLabel}`}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <RadioGroup
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            onKeyDown={handleOnKeyDown}
            stacking={stacking}
            role="radiogroup"
            aria-disabled={disabled}
            aria-labelledby={radioGroupLabelId}
            aria-invalid={!!error}
            aria-errormessage={error ? errorId : undefined}
            aria-required={!disabled && !readOnly && !optional}
            aria-readonly={readOnly}
            aria-orientation={stacking === "column" ? "vertical" : "horizontal"}
          >
            <ValueInput name={name} disabled={disabled} value={value ?? innerValue ?? ""} readOnly />
            {innerOptions.map((option, index) => (
              // TODO: Remove index from key
              <DxcRadio
                key={`radio-${index}`}
                label={option.label ?? ""}
                checked={(value ?? innerValue) === option.value}
                onClick={() => {
                  handleOnChange(option.value);
                  setCurrentFocusIndex(index);
                }}
                error={error}
                disabled={option.disabled || disabled}
                focused={currentFocusIndex === index}
                readOnly={readOnly}
                tabIndex={tabIndex}
              />
            ))}
          </RadioGroup>
          {!disabled && typeof error === "string" && (
            <ErrorMessageContainer id={errorId} role="alert" aria-live={error ? "assertive" : "off"}>
              {error}
            </ErrorMessageContainer>
          )}
        </RadioGroupContainer>
      </ThemeProvider>
    );
  }
);

const RadioGroupContainer = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
`;

const Label = styled.span<{
  helperText: RadioGroupPropsType["helperText"];
  disabled: RadioGroupPropsType["disabled"];
}>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
  ${(props) => !props.helperText && `margin-bottom: ${props.theme.groupLabelMargin}`}
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

const HelperText = styled.span<{ disabled: RadioGroupPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: ${(props) => props.theme.groupLabelMargin};
`;

const RadioGroup = styled.div<{ stacking: RadioGroupPropsType["stacking"] }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.stacking};
  row-gap: ${(props) => props.theme.groupVerticalGutter};
  column-gap: ${(props) => props.theme.groupHorizontalGutter};
`;

const ValueInput = styled.input`
  display: none;
`;

const ErrorMessageContainer = styled.span`
  min-height: 1.5em;
  color: ${(props) => props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  margin-top: 0.5rem;
`;

DxcRadioGroup.displayName = "DxcRadioGroup";

export default DxcRadioGroup;
