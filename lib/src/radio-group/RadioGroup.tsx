import React, { useCallback, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import RadioGroupPropsType, { RefType, Option } from "./types";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";
import DxcRadio from "./Radio";

const getInitialFocusIndex = (innerOptions: Option[], value?: string) => {
  const initialSelectedOptionIndex = innerOptions.findIndex((option) => option.value === value);
  return initialSelectedOptionIndex !== -1 ? initialSelectedOptionIndex : 0;
};

const DxcRadioGroup = React.forwardRef<RefType, RadioGroupPropsType>(
  (
    {
      label,
      name,
      helperText,
      options,
      disabled = false,
      optional = false,
      optionalItemLabel = "N/A",
      readonly = false,
      stacking = "column",
      defaultValue,
      value,
      onChange,
      error,
    },
    ref
  ): JSX.Element => {
    const [radioGroupId] = useState(`select-${uuidv4()}`);
    const radioGroupLabelId = `label-${radioGroupId}`;

    const [innerValue, setInnerValue] = useState(defaultValue);
    const [firstTimeFocus, setFirstTimeFocus] = useState(true);

    const optionalItem = { label: optionalItemLabel, value: "", disabled };
    const innerOptions = useMemo(() => (optional ? [...options, optionalItem] : options), [optional, options]);
    const [currentFocusIndex, setCurrentFocusIndex] = useState(getInitialFocusIndex(innerOptions, value ?? innerValue));

    const colorsTheme = useTheme();

    const handleOnChange = useCallback(
      (newValue: string) => {
        const currentValue = value ?? innerValue;
        if (newValue !== currentValue) {
          value ?? setInnerValue(newValue);
          onChange?.(newValue);
        }
      },
      [value, innerValue, setInnerValue, onChange]
    );
    const handleOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      // If the radio group loses the focus to an element not contained inside it...
      !e.currentTarget.contains(e.relatedTarget as Node) && setFirstTimeFocus(true);
    };
    const setPreviousRadioChecked = () => {
      if (!disabled) {
        setCurrentFocusIndex((currentFocusIndex) => {
          let index = currentFocusIndex === 0 ? innerOptions.length - 1 : currentFocusIndex - 1;
          while (innerOptions[index].disabled) {
            index = index === 0 ? innerOptions.length - 1 : index - 1;
          }
          return index;
        });
      }
    };
    const setNextRadioChecked = () => {
      if (!disabled) {
        setCurrentFocusIndex((currentFocusIndex) => {
          let index = currentFocusIndex === innerOptions.length - 1 ? 0 : currentFocusIndex + 1;
          while (innerOptions[index].disabled) {
            index = index === innerOptions.length - 1 ? 0 : index + 1;
          }
          return index;
        });
      }
    };
    const handleOnKeyDown = useCallback(
      (event) => {
        switch (event.keyCode) {
          case 37: // arrow left
          case 38: // arrow up
            event.preventDefault();
            setPreviousRadioChecked();
            break;
          case 39: // arrow right
          case 40: // arrow down
            event.preventDefault();
            setNextRadioChecked();
            break;
        }
      },
      [disabled, options, setCurrentFocusIndex]
    );

    return (
      <ThemeProvider theme={colorsTheme.radioGroup}>
        <RadioGroupContainer ref={ref}>
          {label && (
            <Label id={radioGroupLabelId} helperText={helperText} disabled={disabled}>
              {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <RadioGroup
            stacking={stacking}
            role="radiogroup"
            aria-labelledby={radioGroupLabelId}
            onBlur={handleOnBlur}
            onKeyDown={handleOnKeyDown}
          >
            <ValueInput name={name} value={value ?? innerValue} readOnly aria-hidden="true" />
            {innerOptions.map((option, index) => (
              <DxcRadio
                option={option}
                currentValue={value ?? innerValue}
                onClick={() => {
                  handleOnChange(option.value);
                  setCurrentFocusIndex(index);
                }}
                onFocus={() => {
                  !firstTimeFocus ? handleOnChange(option.value) : setFirstTimeFocus(false);
                }}
                error={error}
                disabled={option.disabled || disabled}
                focused={currentFocusIndex === index}
              />
            ))}
          </RadioGroup>
          {!disabled && typeof error === "string" && <Error>{error}</Error>}
        </RadioGroupContainer>
      </ThemeProvider>
    );
  }
);

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

type LabelProps = {
  helperText?: string;
  disabled?: boolean;
};
const Label = styled.span<LabelProps>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
  ${(props) => !props.helperText && "margin-bottom: 0.25rem;"}
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

type HelperTextProps = {
  disabled?: boolean;
};
const HelperText = styled.span<HelperTextProps>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.5rem;
`;

type RadioGroupProps = {
  stacking: "row" | "column";
};
const RadioGroup = styled.div<RadioGroupProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.stacking};

  div + div {
    ${(props) => (props.stacking === "column" ? "margin-top: 0.25rem;" : "margin-left: 2rem;")};
  }
`;

const ValueInput = styled.input`
  display: none;
`;

const Error = styled.span`
  min-height: 1.5em;
  color: ${(props) => props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  margin-top: 0.5rem;
`;

export default DxcRadioGroup;
