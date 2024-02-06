import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import { NumberInputContext } from "../number-input/NumberInput";
import TextInputPropsType, { AutosuggestWrapperProps, RefType } from "./types";
import Suggestions from "./Suggestions";
import * as Popover from "@radix-ui/react-popover";
import icons from "./Icons";
import { v4 as uuidv4 } from "uuid";
import DxcActionIcon from "../action-icon/ActionIcon";
import { DxcFlex } from "../main";

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const AutosuggestWrapper = ({ condition, wrapper, children }: AutosuggestWrapperProps): JSX.Element => (
  <>{condition ? wrapper(children) : children}</>
);

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const makeCancelable = (promise) => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise<string[]>((resolve, reject) => {
    promise.then(
      (val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      (promiseError) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(promiseError))
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

const hasSuggestions = (suggestions: TextInputPropsType["suggestions"]) =>
  typeof suggestions === "function" || suggestions?.length > 0;

const isRequired = (value: string, optional: boolean) => value === "" && !optional;

const isLengthIncorrect = (value: string, minLength: number, maxLength: number) =>
  value != null && (value.length < minLength || value.length > maxLength);

const isNumberIncorrect = (value: number, minNumber: number, maxNumber: number) =>
  value < minNumber || value > maxNumber;

const patternMismatch = (pattern: string, value: string) => pattern != null && !new RegExp(pattern).test(value);

const useWidth = (target) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (target != null) {
      setWidth(target.getBoundingClientRect().width);

      const triggerObserver = new ResizeObserver((entries) => {
        const rect = entries[0].target.getBoundingClientRect();
        setWidth(rect?.width);
      });
      triggerObserver.observe(target);
      return () => {
        triggerObserver.unobserve(target);
      };
    }
  }, [target]);

  return width;
};

const DxcTextInput = React.forwardRef<RefType, TextInputPropsType>(
  (
    {
      label,
      name = "",
      defaultValue = "",
      value,
      helperText,
      placeholder = "",
      action,
      clearable = false,
      disabled = false,
      readOnly = false,
      optional = false,
      prefix = "",
      suffix = "",
      onChange,
      onBlur,
      error,
      suggestions,
      pattern,
      minLength,
      maxLength,
      autocomplete = "off",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ): JSX.Element => {
    const [inputId] = useState(`input-${uuidv4()}`);
    const autosuggestId = `suggestions-${inputId}`;
    const errorId = `error-${inputId}`;

    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, changeIsOpen] = useState(false);
    const [isSearching, changeIsSearching] = useState(false);
    const [isAutosuggestError, changeIsAutosuggestError] = useState(false);
    const [filteredSuggestions, changeFilteredSuggestions] = useState([]);
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);

    const inputRef = useRef(null);
    const inputContainerRef = useRef(null);
    const actionRef = useRef(null);

    const width = useWidth(inputContainerRef.current);
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const numberInputContext = useContext(NumberInputContext);

    const getNumberErrorMessage = (value: number) => {
      if (value < numberInputContext?.minNumber)
        return translatedLabels.numberInput.valueGreaterThanOrEqualToErrorMessage(numberInputContext.minNumber);
      else if (value > numberInputContext?.maxNumber)
        return translatedLabels.numberInput.valueLessThanOrEqualToErrorMessage(numberInputContext.maxNumber);
    };

    const openSuggestions = () => {
      hasSuggestions(suggestions) && changeIsOpen(true);
    };

    const closeSuggestions = () => {
      if (hasSuggestions(suggestions)) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const changeValue = (newValue: number | string) => {
      const formattedValue = typeof newValue === "number" ? newValue.toString() : newValue;
      value ?? setInnerValue(formattedValue);

      if (isRequired(formattedValue, optional))
        onChange?.({ value: formattedValue, error: translatedLabels.formFields.requiredValueErrorMessage });
      else if (isLengthIncorrect(formattedValue, minLength, maxLength))
        onChange?.({
          value: formattedValue,
          error: translatedLabels.formFields.lengthErrorMessage(minLength, maxLength),
        });
      else if (patternMismatch(pattern, formattedValue))
        onChange?.({ value: formattedValue, error: translatedLabels.formFields.formatRequestedErrorMessage });
      else if (
        numberInputContext?.typeNumber === "number" &&
        isNumberIncorrect(Number(newValue), numberInputContext?.minNumber, numberInputContext?.maxNumber)
      )
        onChange?.({ value: formattedValue, error: getNumberErrorMessage(Number(newValue)) });
      else onChange?.({ value: formattedValue });
    };

    const handleInputContainerOnClick = () => {
      document.activeElement !== actionRef.current && inputRef.current.focus();
    };
    const handleInputContainerOnMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      // Avoid input to lose the focus when the container is pressed
      document.activeElement === inputRef.current && event.preventDefault();
    };

    const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      openSuggestions();
      changeValue(event.target.value);
    };
    const handleInputOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      closeSuggestions();

      if (isRequired(event.target.value, optional))
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.requiredValueErrorMessage });
      else if (isLengthIncorrect(event.target.value, minLength, maxLength))
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.lengthErrorMessage(minLength, maxLength),
        });
      else if (patternMismatch(pattern, event.target.value))
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.formatRequestedErrorMessage });
      else if (
        numberInputContext?.typeNumber === "number" &&
        isNumberIncorrect(Number(event.target.value), numberInputContext?.minNumber, numberInputContext?.maxNumber)
      )
        onBlur?.({ value: event.target.value, error: getNumberErrorMessage(Number(event.target.value)) });
      else onBlur?.({ value: event.target.value });
    };
    const handleInputOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          if (numberInputContext?.typeNumber === "number") decrementNumber();
          else {
            openSuggestions();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusIndex((visualFocusedSuggIndex) => {
                if (visualFocusedSuggIndex < filteredSuggestions.length - 1) return visualFocusedSuggIndex + 1;
                else if (visualFocusedSuggIndex === filteredSuggestions.length - 1) return 0;
              });
            }
          }
          break;
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          if (numberInputContext?.typeNumber === "number") incrementNumber();
          else {
            openSuggestions();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusIndex((visualFocusedSuggIndex) => {
                if (visualFocusedSuggIndex === 0 || visualFocusedSuggIndex === -1)
                  return filteredSuggestions.length > 0 ? filteredSuggestions.length - 1 : suggestions.length - 1;
                else return visualFocusedSuggIndex - 1;
              });
            }
          }
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          if (hasSuggestions(suggestions)) {
            changeValue("");
            isOpen && closeSuggestions();
          }
          break;
        case "Enter":
          if (hasSuggestions(suggestions) && !isSearching) {
            const validFocusedSuggestion =
              filteredSuggestions.length > 0 && visualFocusIndex >= 0 && visualFocusIndex < filteredSuggestions.length;
            validFocusedSuggestion && changeValue(filteredSuggestions[visualFocusIndex]);
            isOpen && closeSuggestions();
          }
          break;
      }
    };

    const handleClearActionOnClick = () => {
      changeValue("");
      inputRef.current.focus();
      suggestions && closeSuggestions();
    };

    const handleDecrementActionOnClick = () => {
      decrementNumber();
      inputRef.current.focus();
    };
    const handleIncrementActionOnClick = () => {
      incrementNumber();
      inputRef.current.focus();
    };

    const setNumberProps = (type: string, min: number, max: number, step: number) => {
      min && inputRef?.current?.setAttribute("min", min);
      max && inputRef?.current?.setAttribute("max", max);
      inputRef?.current?.setAttribute("step", step);
      inputRef?.current?.setAttribute("type", type);
    };
    const decrementNumber = () => {
      const currentValue = value ?? innerValue;
      const numberValue = Number(currentValue);
      const steppedValue = Math.round((numberValue - numberInputContext?.stepNumber + Number.EPSILON) * 100) / 100;

      if (currentValue !== "") {
        if (numberValue < numberInputContext?.minNumber || steppedValue < numberInputContext?.minNumber)
          changeValue(numberValue);
        else if (numberValue > numberInputContext?.maxNumber) changeValue(numberInputContext?.maxNumber);
        else if (numberValue === numberInputContext?.minNumber) changeValue(numberInputContext?.minNumber);
        else changeValue(steppedValue);
      } else {
        if (numberInputContext?.minNumber >= 0) changeValue(numberInputContext?.minNumber);
        else if (numberInputContext?.maxNumber < 0) changeValue(numberInputContext?.maxNumber);
        else changeValue(-numberInputContext.stepNumber);
      }
    };
    const incrementNumber = () => {
      const currentValue = value ?? innerValue;
      const numberValue = Number(currentValue);
      const steppedValue = Math.round((numberValue + numberInputContext?.stepNumber + Number.EPSILON) * 100) / 100;

      if (currentValue !== "") {
        if (numberValue > numberInputContext?.maxNumber || steppedValue > numberInputContext?.maxNumber)
          changeValue(numberValue);
        else if (numberValue < numberInputContext?.minNumber) changeValue(numberInputContext?.minNumber);
        else if (numberValue === numberInputContext?.maxNumber) changeValue(numberInputContext?.maxNumber);
        else changeValue(steppedValue);
      } else {
        if (numberInputContext?.minNumber > 0) changeValue(numberInputContext?.minNumber);
        else if (numberInputContext?.maxNumber <= 0) changeValue(numberInputContext?.maxNumber);
        else changeValue(numberInputContext.stepNumber);
      }
    };

    useEffect(() => {
      if (typeof suggestions === "function") {
        changeIsSearching(true);
        changeIsAutosuggestError(false);
        changeFilteredSuggestions([]);

        const cancelablePromise = makeCancelable(suggestions(value ?? innerValue));
        cancelablePromise.promise
          .then((promiseResponse) => {
            changeIsSearching(false);
            changeIsAutosuggestError(false);
            changeFilteredSuggestions(promiseResponse);
          })
          .catch((err) => {
            if (!err.isCanceled) {
              changeIsSearching(false);
              changeIsAutosuggestError(true);
            }
          });

        return () => {
          cancelablePromise.cancel();
        };
      } else if (suggestions?.length > 0) {
        changeFilteredSuggestions(
          suggestions.filter((suggestion) => suggestion.toUpperCase().startsWith((value ?? innerValue).toUpperCase()))
        );
        changeVisualFocusIndex(-1);
      }

      numberInputContext != null &&
        setNumberProps(
          numberInputContext.typeNumber,
          numberInputContext.minNumber,
          numberInputContext.maxNumber,
          numberInputContext.stepNumber
        );
    }, [value, innerValue, suggestions, numberInputContext]);

    return (
      <ThemeProvider theme={colorsTheme.textInput}>
        <TextInputContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label htmlFor={inputId} disabled={disabled} hasHelperText={helperText ? true : false}>
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <AutosuggestWrapper
            condition={hasSuggestions(suggestions)}
            wrapper={(children) => (
              <Popover.Root open={isOpen && (filteredSuggestions.length > 0 || isSearching || isAutosuggestError)}>
                <Popover.Trigger asChild aria-controls={undefined}>
                  {children}
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    sideOffset={5}
                    style={{ zIndex: "2147483647" }}
                    onOpenAutoFocus={(event) => {
                      // Avoid select to lose focus when the list is opened
                      event.preventDefault();
                    }}
                    onCloseAutoFocus={(event) => {
                      // Avoid select to lose focus when the list is closed
                      event.preventDefault();
                    }}
                  >
                    <Suggestions
                      id={autosuggestId}
                      value={value ?? innerValue}
                      suggestions={filteredSuggestions}
                      visualFocusIndex={visualFocusIndex}
                      highlightedSuggestions={typeof suggestions !== "function"}
                      searchHasErrors={isAutosuggestError}
                      isSearching={isSearching}
                      suggestionOnClick={(suggestion) => {
                        changeValue(suggestion);
                        closeSuggestions();
                      }}
                      styles={{ width }}
                    />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            )}
          >
            <InputContainer
              error={error ? true : false}
              disabled={disabled}
              readOnly={readOnly}
              onClick={handleInputContainerOnClick}
              onMouseDown={handleInputContainerOnMouseDown}
              ref={inputContainerRef}
            >
              {prefix && <Prefix disabled={disabled}>{prefix}</Prefix>}
              <DxcFlex gap={"0.25rem"} alignItems="center" grow={1}>
                <Input
                  id={inputId}
                  name={name}
                  value={value ?? innerValue}
                  placeholder={placeholder}
                  onBlur={handleInputOnBlur}
                  onChange={handleInputOnChange}
                  onFocus={!readOnly ? openSuggestions : undefined}
                  onKeyDown={!readOnly ? handleInputOnKeyDown : undefined}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  disabled={disabled}
                  readOnly={readOnly}
                  ref={inputRef}
                  pattern={pattern}
                  minLength={minLength}
                  maxLength={maxLength}
                  autoComplete={autocomplete === "off" ? "nope" : autocomplete}
                  tabIndex={tabIndex}
                  type="text"
                  role={hasSuggestions(suggestions) ? "combobox" : undefined}
                  aria-autocomplete={hasSuggestions(suggestions) ? "list" : undefined}
                  aria-controls={hasSuggestions(suggestions) ? autosuggestId : undefined}
                  aria-expanded={hasSuggestions(suggestions) ? isOpen : undefined}
                  aria-haspopup={hasSuggestions(suggestions) ? "listbox" : undefined}
                  aria-activedescendant={
                    hasSuggestions(suggestions) && isOpen && visualFocusIndex !== -1
                      ? `suggestion-${visualFocusIndex}`
                      : undefined
                  }
                  aria-invalid={error ? true : false}
                  aria-errormessage={error ? errorId : undefined}
                  aria-required={!disabled && !optional}
                />
                {!disabled && error && <ErrorIcon aria-label="Error">{icons.error}</ErrorIcon>}
                {!disabled && !readOnly && clearable && (value ?? innerValue).length > 0 && (
                  <DxcActionIcon
                    onClick={handleClearActionOnClick}
                    icon={icons.clear}
                    tabIndex={tabIndex}
                    title={translatedLabels.textInput.clearFieldActionTitle}
                  />
                )}
                {numberInputContext?.typeNumber === "number" && (
                  <>
                    <DxcActionIcon
                      onClick={!readOnly ? handleDecrementActionOnClick : undefined}
                      icon={icons.decrement}
                      tabIndex={tabIndex}
                      ref={actionRef}
                      title={translatedLabels.numberInput.decrementValueTitle}
                    />
                    <DxcActionIcon
                      onClick={!readOnly ? handleIncrementActionOnClick : undefined}
                      icon={icons.increment}
                      tabIndex={tabIndex}
                      ref={actionRef}
                      title={translatedLabels.numberInput.incrementValueTitle}
                    />
                  </>
                )}
                {action && (
                  <DxcActionIcon
                    onClick={!readOnly ? action.onClick : undefined}
                    icon={action.icon}
                    tabIndex={tabIndex}
                    ref={actionRef}
                    title={action.title}
                    disabled={disabled}
                  />
                )}
              </DxcFlex>
              {suffix && <Suffix disabled={disabled}>{suffix}</Suffix>}
            </InputContainer>
          </AutosuggestWrapper>
          {!disabled && typeof error === "string" && (
            <Error id={errorId} aria-live={error ? "assertive" : "off"}>
              {error}
            </Error>
          )}
        </TextInputContainer>
      </ThemeProvider>
    );
  }
);

const TextInputContainer = styled.div<{ margin: TextInputPropsType["margin"]; size: TextInputPropsType["size"] }>`
  box-sizing: border-box;
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
  disabled: TextInputPropsType["disabled"];
  hasHelperText: boolean;
}>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
  ${(props) => !props.hasHelperText && `margin-bottom: 0.25rem`}
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

const HelperText = styled.span<{ disabled: TextInputPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const InputContainer = styled.div<{
  disabled: TextInputPropsType["disabled"];
  readOnly: TextInputPropsType["readOnly"];
  error: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(2.5rem - 2px);
  padding: 0 0.5rem;

  ${(props) => {
    if (props.disabled) return `background-color: ${props.theme.disabledContainerFillColor};`;
  }}
  box-shadow: 0 0 0 2px transparent;
  border-radius: 4px;
  border: 1px solid
    ${(props) => {
      if (props.disabled) return props.theme.disabledBorderColor;
      else if (props.readOnly) return props.theme.readOnlyBorderColor;
      else return props.theme.enabledBorderColor;
    }};
  ${(props) =>
    props.error &&
    !props.disabled &&
    `border-color: transparent;
     box-shadow: 0 0 0 2px ${props.theme.errorBorderColor};
  `}

  ${(props) =>
    !props.disabled
      ? `
      &:hover {
        border-color: ${
          props.error
            ? "transparent"
            : props.readOnly
            ? props.theme.hoverReadOnlyBorderColor
            : props.theme.hoverBorderColor
        };
        ${props.error ? `box-shadow: 0 0 0 2px ${props.theme.hoverErrorBorderColor};` : ""}
      }
      &:focus-within {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${props.theme.focusBorderColor};
      }
    `
      : "cursor: not-allowed;"};
`;

const Input = styled.input`
  height: calc(2.5rem - 2px);
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${(props) => (props.disabled ? props.theme.disabledValueFontColor : props.theme.valueFontColor)};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  line-height: 1.5em;
  ${(props) => props.disabled && `cursor: not-allowed;`}

  ::placeholder {
    color: ${(props) => (props.disabled ? props.theme.disabledPlaceholderFontColor : props.theme.placeholderFontColor)};
  }
`;

const Prefix = styled.span<{ disabled: TextInputPropsType["disabled"] }>`
  height: 1.5rem;
  line-height: 1.5rem;
  margin-left: 0.25rem;
  padding: 0 0.5rem 0 0;
  ${(props) => {
    const color = props.disabled ? props.theme.disabledPrefixColor : props.theme.prefixColor;
    return `color: ${color}; border-right: 1px solid ${color};`;
  }};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  pointer-events: none;
`;

const Suffix = styled.span<{ disabled: TextInputPropsType["disabled"] }>`
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 0 0.25rem;
  padding: 0 0 0 0.5rem;
  ${(props) => {
    const color = props.disabled ? props.theme.disabledSuffixColor : props.theme.suffixColor;
    return `color: ${color}; border-left: 1px solid ${color};`;
  }};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  pointer-events: none;
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  color: ${(props) => props.theme.errorIconColor};

  svg {
    line-height: 18px;
    font-size: 1.25rem;
  }
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

export default DxcTextInput;
