import { ChangeEvent, FocusEvent, forwardRef, useContext, useEffect, useId, useRef, useState } from "react";
import styled from "styled-components";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import { HalstackLanguageContext } from "../HalstackContext";
import TextareaPropsType, { RefType } from "./types";
import { scrollbarStyles } from "../styles/scroll";
import DxcIcon from "../icon/Icon";

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

const Label = styled.label<{
  disabled: TextareaPropsType["disabled"];
  helperText: TextareaPropsType["helperText"];
}>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
  ${({ helperText }) => !helperText && "margin-bottom: var(--spacing-gap-xs);"}

  /* Optional text */
  > span {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
    font-weight: var(--typography-label-regular);
  }
`;

const HelperText = styled.span<{ disabled: TextareaPropsType["disabled"] }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  margin-bottom: var(--spacing-gap-xs);
`;

const Textarea = styled.textarea<{
  error: TextareaPropsType["error"];
  verticalGrow: TextareaPropsType["verticalGrow"];
}>`
  ${({ verticalGrow }) => {
    if (verticalGrow === "none") return "resize: none;";
    else if (verticalGrow === "auto") return `resize: none; overflow: hidden;`;
    else if (verticalGrow === "manual") return "resize: vertical;";
    else return `resize: none;`;
  }};
  ${scrollbarStyles}
  padding: var(--spacing-padding-xs) var(--spacing-padding-xs) var(--spacing-padding-xxxs) var(--spacing-padding-xs);
  background-color: ${({ disabled }) => (disabled ? `var(--color-bg-neutral-lighter)` : `transparent`)};
  border-radius: var(--border-radius-s);
  border: ${({ disabled, error }) => (!disabled && error ? "var(--border-width-m)" : "var(--border-width-s)")}
    var(--border-style-default)
    ${(props) => {
      if (props.disabled) return "var(--border-color-neutral-strong)";
      else if (props.error) return "var(--border-color-error-medium)";
      else if (props.readOnly) return "var(--border-color-neutral-strong)";
      else return "var(--border-color-neutral-dark)";
    }};

  ${(props) =>
    !props.disabled
      ? `&:hover {
        border-color: ${
          props.error
            ? "var(--border-color-error-strong)"
            : props.readOnly
              ? "var(--border-color-neutral-stronger)"
              : "var(--border-color-primary-strong)"
        };
      }
      &:focus, &:focus-within {
        border-color: transparent;
        outline-offset: -2px;
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
      }`
      : "cursor: not-allowed;"};

  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  ::placeholder {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-strong)")};
  }
`;

const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  color: var(--color-fg-error-medium);
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  margin-top: var(--spacing-gap-xs);

  /* Error icon */
  > span[role="img"] {
    font-size: var(--height-xxs);
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
          <Label htmlFor={textareaId} disabled={disabled} helperText={helperText}>
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
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
          aria-label={label ? undefined : ariaLabel}
        />
        {!disabled && typeof error === "string" && (
          <ErrorMessage id={errorId} role="alert" aria-live={error ? "assertive" : "off"}>
            {error && <DxcIcon icon="filled_error" />}
            {error}
          </ErrorMessage>
        )}
      </TextareaContainer>
    );
  }
);

export default DxcTextarea;
