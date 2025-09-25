import { ChangeEvent, FocusEvent, forwardRef, useContext, useEffect, useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import { HalstackLanguageContext } from "../HalstackContext";
import TextareaPropsType, { RefType } from "./types";
import scrollbarStyles from "../styles/scroll";
import ErrorMessage from "../styles/forms/ErrorMessage";
import Label from "../styles/forms/Label";
import HelperText from "../styles/forms/HelperText";
import inputStylesByState from "../styles/forms/inputStylesByState";

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
  width: ${({ margin, size }) => calculateWidth(margin, size)};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const Textarea = styled.textarea<{
  disabled: Required<TextareaPropsType>["disabled"];
  error: boolean;
  readOnly: Required<TextareaPropsType>["readOnly"];
  verticalGrow: TextareaPropsType["verticalGrow"];
}>`
  ${({ verticalGrow }) => {
    if (verticalGrow === "none") return "resize: none;";
    else if (verticalGrow === "auto") return `resize: none; overflow: hidden;`;
    else if (verticalGrow === "manual") return "resize: vertical;";
    else return `resize: none;`;
  }};
  padding: var(--spacing-padding-xs) var(--spacing-padding-xs) var(--spacing-padding-xxxs) var(--spacing-padding-xs);
  ${({ disabled, error, readOnly }) => inputStylesByState(disabled, error, readOnly)}
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  line-height: 1.36;
  ${scrollbarStyles}
  ::placeholder {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-strong)")};
  }
`;

const patternMatch = (pattern: string, value: string) => new RegExp(pattern).test(value);

const DxcTextarea = forwardRef<RefType, TextareaPropsType>(
  (
    {
      ariaLabel = "Text area",
      autocomplete = "off",
      defaultValue = "",
      disabled = false,
      error,
      helperText,
      label,
      margin,
      maxLength,
      minLength,
      name,
      onBlur,
      onChange,
      optional = false,
      pattern,
      placeholder,
      readOnly = false,
      rows = 4,
      size = "medium",
      tabIndex = 0,
      value,
      verticalGrow = "auto",
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const textareaId = `textarea-${useId()}`;
    const errorId = `error-${textareaId}`;
    const translatedLabels = useContext(HalstackLanguageContext);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const prevValueRef = useRef<string | null>(null);

    const isLengthOutOfRange = (value: string) =>
      value !== "" && minLength && maxLength && (value.length < minLength || value.length > maxLength);

    const changeValue = (newValue: string) => {
      if (value == null) setInnerValue(newValue);

      if (newValue === "" && !optional) {
        onChange?.({
          value: newValue,
          error: translatedLabels.formFields.requiredValueErrorMessage,
        });
      } else if (isLengthOutOfRange(newValue)) {
        onChange?.({
          value: newValue,
          error: translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength),
        });
      } else if (newValue && pattern && !patternMatch(pattern, newValue)) {
        onChange?.({
          value: newValue,
          error: translatedLabels.formFields.formatRequestedErrorMessage,
        });
      } else onChange?.({ value: newValue });
    };

    const handleOnBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (event.target.value === "" && !optional) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.requiredValueErrorMessage,
        });
      } else if (isLengthOutOfRange(event.target.value)) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength),
        });
      } else if (event.target.value && pattern && !patternMatch(pattern, event.target.value)) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.formatRequestedErrorMessage,
        });
      } else onBlur?.({ value: event.target.value });
    };

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      changeValue(event.target.value);
    };

    useEffect(() => {
      if (verticalGrow === "auto" && prevValueRef.current !== (value ?? innerValue) && textareaRef.current) {
        const computedStyle = window.getComputedStyle(textareaRef.current);
        const textareaLineHeight = parseInt(computedStyle.lineHeight ?? "0", 10);
        const textareaPaddingTopBottom = parseInt(computedStyle.paddingTop ?? "0", 10) * 2;
        textareaRef.current.style.height = `${textareaLineHeight * rows}px`;
        const newHeight = (textareaRef.current.scrollHeight ?? 0) - textareaPaddingTopBottom;
        textareaRef.current.style.height = `${newHeight}px`;
        prevValueRef.current = value ?? innerValue;
      }
    }, [innerValue, rows, value, verticalGrow]);

    return (
      <TextareaContainer margin={margin} size={size} ref={ref}>
        {label && (
          <Label disabled={disabled} hasMargin={!helperText} htmlFor={textareaId}>
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
          </Label>
        )}
        {helperText && (
          <HelperText disabled={disabled} hasMargin>
            {helperText}
          </HelperText>
        )}
        <Textarea
          aria-errormessage={error ? errorId : undefined}
          aria-invalid={!!error}
          aria-label={label ? undefined : ariaLabel}
          aria-required={!disabled && !optional}
          autoComplete={autocomplete}
          disabled={disabled}
          error={!!error}
          id={textareaId}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={textareaRef}
          rows={rows}
          tabIndex={tabIndex}
          value={value ?? innerValue}
          verticalGrow={verticalGrow}
        />
        {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
      </TextareaContainer>
    );
  }
);

DxcTextarea.displayName = "DxcTextarea";

export default DxcTextarea;
