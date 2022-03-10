import React, { useCallback, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import RadioGroupPropsType, { RefType } from "./types";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";
import DxcRadio from "./Radio";

const getNotOptionalErrorMessage = () => `This field is required. Please, enter a value.`;

const notOptionalCheck = (value: string, optional: boolean) => value === "" && !optional;

const DxcRadioGroup = React.forwardRef<RefType, RadioGroupPropsType>(
  (
    {
      label,
      name,
      helperText,
      options,
      disabled,
      optional,
      optionalOptionLabel = "None",
      readonly,
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

    const [innerValue, setInnerValue] = useState("");

    const colorsTheme = useTheme();

    const handleOnChange = useCallback(
      (optionValue: string) => {
        const val = value ?? innerValue;
        if (optionValue !== val) {
          value ?? setInnerValue(optionValue);
          onChange?.({ value: optionValue });
        }
      },
      [value, innerValue, setInnerValue, onChange]
    );

    return (
      <ThemeProvider theme={colorsTheme.radioGroup}>
        <RadioGroupContainer ref={ref}>
          {label && (
            <Label id={radioGroupLabelId} helperText={helperText}>
              {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText>{helperText}</HelperText>}
          <RadioGroup stacking={stacking} role="radiogroup" aria-labelledby={radioGroupLabelId}>
            <ValueInput name={name} value={value ?? innerValue} readOnly aria-hidden="true" />
            {optional && (
              <DxcRadio
                option={{ label: optionalOptionLabel, value: "", disabled }}
                value={value ?? innerValue}
                onChange={handleOnChange}
              />
            )}
            {options.map((option) => (
              <DxcRadio option={option} value={value ?? innerValue} onChange={handleOnChange} error={error} />
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
};
const Label = styled.span<LabelProps>`
  color: ${(props) => props.theme.labelFontColor};
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

const HelperText = styled.span`
  color: ${(props) => props.theme.helperTextFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

type RadioGroupProps = {
  stacking: "row" | "column";
};
const RadioGroup = styled.div<RadioGroupProps>`
  display: flex;
  flex-direction: ${(props) => props.stacking};

  div + div {
    ${(props) => (props.stacking === "column" ? "margin-top: 0.5rem;" : "margin-left: 2rem;")};
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
  margin-top: 0.25rem;
`;

export default DxcRadioGroup;
