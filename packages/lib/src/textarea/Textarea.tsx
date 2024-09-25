import { ChangeEvent, FocusEvent, forwardRef, useEffect, useId, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import getMargin from "../common/utils";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import TextareaPropsType, { RefType } from "./types";

const patternMatch = (pattern: string, value: string) => new RegExp(pattern).test(value);

const DxcTextarea = forwardRef<RefType, TextareaPropsType>(
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

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const prevValueRef = useRef<string | null>(null);
    const errorId = `error-${textareaId}`;

    const isNotOptional = (checkedValue: string) => checkedValue === "" && !optional;

    const isLengthIncorrect = (checkedValue: string) =>
      checkedValue !== "" &&
      minLength &&
      maxLength &&
      (checkedValue.length < minLength || checkedValue.length > maxLength);

    const changeValue = (newValue: string) => {
      if (value == null) {
        setInnerValue(newValue);
      }

      if (isNotOptional(newValue)) {
        onChange?.({
          value: newValue,
          error: translatedLabels?.formFields?.requiredValueErrorMessage,
        });
      } else if (isLengthIncorrect(newValue)) {
        onChange?.({
          value: newValue,
          error: translatedLabels?.formFields?.lengthErrorMessage?.(minLength, maxLength),
        });
      } else if (newValue && pattern && !patternMatch(pattern, newValue)) {
        onChange?.({
          value: newValue,
          error: translatedLabels?.formFields?.formatRequestedErrorMessage,
        });
      } else {
        onChange?.({ value: newValue });
      }
    };

    const autoVerticalGrow = () => {
      if (textareaRef?.current) {
        const computedStyle = window.getComputedStyle(textareaRef?.current);
        const textareaLineHeight = parseInt(computedStyle.lineHeight || "0", 10);
        const textareaPaddingTopBottom = parseInt(computedStyle.paddingTop || "0", 10) * 2;
        textareaRef.current.style.height = `${textareaLineHeight * rows}px`;
        const newHeight = textareaRef.current.scrollHeight - textareaPaddingTopBottom;
        textareaRef.current.style.height = `${newHeight}px`;
      }
    };

    const handleOnBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (isNotOptional(event.target.value)) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels?.formFields?.requiredValueErrorMessage,
        });
      } else if (isLengthIncorrect(event.target.value)) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels?.formFields?.lengthErrorMessage?.(minLength, maxLength),
        });
      } else if (event.target.value && pattern && !patternMatch(pattern, event.target.value)) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels?.formFields?.formatRequestedErrorMessage,
        });
      } else {
        onBlur?.({ value: event.target.value });
      }
    };

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      changeValue(event.target.value);
      if (verticalGrow === "auto") {
        autoVerticalGrow();
      }
    };

    useEffect(() => {
      if (verticalGrow === "auto" && prevValueRef.current !== (value ?? innerValue) && textareaRef?.current) {
        const computedStyle = window.getComputedStyle(textareaRef?.current);
        const textareaLineHeight = parseInt(computedStyle.lineHeight || "0", 10);
        const textareaPaddingTopBottom = parseInt(computedStyle.paddingTop || "0", 10) * 2;
        textareaRef.current.style.height = `${textareaLineHeight * rows}px`;
        const newHeight = (textareaRef?.current?.scrollHeight ?? 0) - textareaPaddingTopBottom;
        textareaRef.current.style.height = `${newHeight}px`;
        prevValueRef.current = value ?? innerValue;
      }
    }, [verticalGrow, value, innerValue, rows]);

    return (
      <ThemeProvider theme={colorsTheme?.textarea}>
        <TextareaContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label htmlFor={textareaId} disabled={disabled} helperText={helperText}>
              {label} {optional && <OptionalLabel>{translatedLabels?.formFields?.optionalLabel}</OptionalLabel>}
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
            aria-invalid={!!error}
            aria-errormessage={error ? errorId : undefined}
            aria-required={!disabled && !optional}
          />
          {!disabled && typeof error === "string" && (
            <ErrorMessageContainer id={errorId} role="alert" aria-live={error ? "assertive" : "off"}>
              {error}
            </ErrorMessageContainer>
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

const calculateWidth = (margin: TextareaPropsType["margin"], size: TextareaPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

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
  ${({ verticalGrow }) =>
    verticalGrow === "none"
      ? "resize: none;"
      : verticalGrow === "auto"
        ? `resize: none; overflow: hidden;`
        : verticalGrow === "manual"
          ? "resize: vertical;"
          : `resize: none;`};

  ${(props) =>
    props.disabled ? `background-color: ${props.theme.disabledContainerFillColor};` : `background-color: transparent;`}

  padding: 0.5rem 1rem;
  box-shadow: 0 0 0 2px transparent;
  border-radius: 0.25rem;
  border: 1px solid
    ${(props) =>
      props.disabled
        ? props.theme.disabledBorderColor
        : props.error
          ? "transparent"
          : props.readOnly
            ? props.theme.readOnlyBorderColor
            : props.theme.enabledBorderColor};

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

const ErrorMessageContainer = styled.span`
  color: ${(props) => props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  min-height: 1.5em;
  line-height: 1.5em;
  margin-top: 0.25rem;
`;

DxcTextarea.displayName = "DxcTextarea";

export default DxcTextarea;
