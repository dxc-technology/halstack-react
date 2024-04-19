import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { spaces } from "../common/variables";
import TextareaPropsType, { RefType } from "./types";

const patternMatch = (pattern, value) => new RegExp(pattern).test(value);

const DxcTextarea = React.forwardRef<RefType, TextareaPropsType>(
  (
    {
      label,
      name = "",
      defaultValue = "",
      value,
      helperText,
      placeholder = "",
      disabled = false,
      readOnly = false,
      optional = false,
      verticalGrow = "auto",
      rows = 4,
      onChange,
      onBlur,
      error,
      pattern,
      minLength,
      maxLength,
      autocomplete = "off",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const textareaId = `textarea-${useId()}`;

    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();

    const textareaRef = useRef(null);
    const prevValueRef = useRef(null);
    const errorId = `error-${textareaId}`;

    const isNotOptional = (value) => value === "" && !optional;

    const isLengthIncorrect = (value) =>
      value !== "" && minLength && maxLength && (value.length < minLength || value.length > maxLength);

    const changeValue = (newValue) => {
      value ?? setInnerValue(newValue);

      if (isNotOptional(newValue))
        onChange?.({ value: newValue, error: translatedLabels.formFields.requiredValueErrorMessage });
      else if (isLengthIncorrect(newValue))
        onChange?.({ value: newValue, error: translatedLabels.formFields.lengthErrorMessage(minLength, maxLength) });
      else if (newValue && pattern && !patternMatch(pattern, newValue))
        onChange?.({ value: newValue, error: translatedLabels.formFields.formatRequestedErrorMessage });
      else onChange?.({ value: newValue });
    };

    const handleOnBlur = (event) => {
      if (isNotOptional(event.target.value))
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.requiredValueErrorMessage });
      else if (isLengthIncorrect(event.target.value))
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.lengthErrorMessage(minLength, maxLength),
        });
      else if (event.target.value && pattern && !patternMatch(pattern, event.target.value))
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.formatRequestedErrorMessage });
      else onBlur?.({ value: event.target.value });
    };

    const handleOnChange = (event) => {
      changeValue(event.target.value);
    };

    useEffect(() => {
      if (verticalGrow === "auto" && prevValueRef.current !== (value ?? innerValue)) {
        const textareaLineHeight = parseInt(window.getComputedStyle(textareaRef.current)["line-height"]);
        const textareaPaddingTopBottom = parseInt(window.getComputedStyle(textareaRef.current)["padding-top"]) * 2;
        textareaRef.current.style.height = `${textareaLineHeight * rows}px`;
        const newHeight = textareaRef.current.scrollHeight - textareaPaddingTopBottom;
        textareaRef.current.style.height = `${newHeight}px`;
        prevValueRef.current = value ?? innerValue;
      }
    }, [verticalGrow, value, innerValue, rows]);

    return (
      <ThemeProvider theme={colorsTheme.textarea}>
        <TextareaContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label htmlFor={textareaId} disabled={disabled} helperText={helperText}>
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <Textarea
            id={textareaId}
            name={name}
            value={value ?? innerValue}
            placeholder={placeholder}
            verticalGrow={verticalGrow}
            rows={rows}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            minLength={minLength}
            maxLength={maxLength}
            autoComplete={autocomplete}
            ref={textareaRef}
            tabIndex={tabIndex}
            aria-invalid={error ? true : false}
            aria-errormessage={error ? errorId : undefined}
            aria-required={!disabled && !optional}
          />
          {!disabled && typeof error === "string" && (
            <Error id={errorId} role="alert" aria-live={error ? "assertive" : "off"}>
              {error}
            </Error>
          )}
        </TextareaContainer>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const TextareaContainer = styled.div<{
  margin: TextareaPropsType["margin"];
  size: TextareaPropsType["size"];
}>`
  display: flex;
  flex-direction: column;
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
`;

const Label = styled.label<{
  disabled: TextareaPropsType["disabled"];
  helperText: TextareaPropsType["helperText"];
}>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
  ${(props) => !props.helperText && `margin-bottom: 0.25rem`}
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

const HelperText = styled.span<{ disabled: TextareaPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const Textarea = styled.textarea<{
  verticalGrow: TextareaPropsType["verticalGrow"];
  error: TextareaPropsType["error"];
}>`
  ${({ verticalGrow }) => {
    if (verticalGrow === "none") return "resize: none;";
    else if (verticalGrow === "auto") return `resize: none; overflow: hidden;`;
    else if (verticalGrow === "manual") return "resize: vertical;";
    else return `resize: none;`;
  }};

  ${(props) =>
    props.disabled ? `background-color: ${props.theme.disabledContainerFillColor};` : `background-color: transparent;`}

  padding: 0.5rem 1rem;
  box-shadow: 0 0 0 2px transparent;
  border-radius: 0.25rem;
  border: 1px solid
    ${(props) => {
      if (props.disabled) return props.theme.disabledBorderColor;
      else if (props.error) return "transparent";
      else if (props.readOnly) return props.theme.readOnlyBorderColor;
      else props.theme.enabledBorderColor;
    }};

  ${(props) =>
    props.error &&
    !props.disabled &&
    `box-shadow: 0 0 0 2px ${props.theme.errorBorderColor};
  `}

  ${(props) =>
    !props.disabled
      ? `&:hover {
        border-color: ${
          props.error
            ? "transparent"
            : props.readOnly
            ? props.theme.hoverReadOnlyBorderColor
            : props.theme.hoverBorderColor
        };
        ${props.error && `box-shadow: 0 0 0 2px ${props.theme.hoverErrorBorderColor};`}
      }
      &:focus, &:focus-within {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 0 2px ${props.theme.focusBorderColor};
      }`
      : "cursor: not-allowed;"};

  color: ${(props) => (props.disabled ? props.theme.disabledValueFontColor : props.theme.valueFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  line-height: 1.5em;

  ::placeholder {
    color: ${(props) => (props.disabled ? props.theme.disabledPlaceholderFontColor : props.theme.placeholderFontColor)};
  }
`;

const Error = styled.span`
  color: ${(props) => props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  min-height: 1.5em;
  line-height: 1.5em;
  margin-top: 0.25rem;
`;

export default DxcTextarea;
