import React, { useContext, useEffect, useRef, useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import BackgroundColorContext from "../BackgroundColorContext";
import NumberInputContext from "../number-input/NumberInputContext";
import TextInputPropsType, { AutosuggestWrapperProps, RefType } from "./types";
import Suggestions from "./Suggestions";
import * as Popover from "@radix-ui/react-popover";
import icons from "./Icons";
import { v4 as uuidv4 } from "uuid";

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

const hasSuggestions = (suggestions) => typeof suggestions === "function" || suggestions?.length > 0;

const isNotOptional = (value, optional) => value === "" && !optional;

const isLengthIncorrect = (value, minLength, maxLength) =>
  value && minLength && maxLength && (value.length < minLength || value.length > maxLength);

const isNumberIncorrect = (value, minNumber, maxNumber) =>
  (minNumber && parseInt(value) < minNumber) || (maxNumber && parseInt(value) > maxNumber);

const patternMissmatch = (pattern, value) => pattern && !new RegExp(pattern).test(value);

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
    const id = useState(uuidv4());
    const inputId = `input-${id}`;
    const autosuggestId = `suggestions-${id}`;
    const errorId = `error-${id}`;

    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, changeIsOpen] = useState(false);
    const [isSearching, changeIsSearching] = useState(false);
    const [isAutosuggestError, changeIsAutosuggestError] = useState(false);
    const [filteredSuggestions, changeFilteredSuggestions] = useState([]);
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);

    const inputRef = useRef(null);
    const actionRef = useRef(null);

    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const backgroundType = useContext(BackgroundColorContext);
    const numberInputContext = useContext(NumberInputContext);

    const getNumberErrorMessage = (value) => {
      if (numberInputContext?.minNumber && parseInt(value) < numberInputContext?.minNumber)
        return translatedLabels.numberInput.valueGreaterThanOrEqualToErrorMessage(numberInputContext.minNumber);
      else if (numberInputContext?.maxNumber && parseInt(value) > numberInputContext?.maxNumber)
        return translatedLabels.numberInput.valueLessThanOrEqualToErrorMessage(numberInputContext.maxNumber);
    };

    const getTextInputWidth = useCallback(() => {
      const rect = inputRef?.current?.parentElement?.getBoundingClientRect();
      return rect?.width;
    }, []);

    const openSuggestions = () => {
      hasSuggestions(suggestions) && changeIsOpen(true);
    };

    const closeSuggestions = () => {
      if (hasSuggestions(suggestions)) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const changeValue = (newValue) => {
      value ?? setInnerValue(newValue);
      const changedValue = typeof newValue === "number" ? newValue.toString() : newValue;

      if (isNotOptional(newValue, optional))
        onChange?.({ value: changedValue, error: translatedLabels.formFields.requiredValueErrorMessage });
      else if (isLengthIncorrect(newValue, minLength, maxLength))
        onChange?.({
          value: changedValue,
          error: translatedLabels.formFields.lengthErrorMessage(minLength, maxLength),
        });
      else if (patternMissmatch(pattern, newValue))
        onChange?.({ value: changedValue, error: translatedLabels.formFields.formatRequestedErrorMessage });
      else if (isNumberIncorrect(newValue, numberInputContext?.minNumber, numberInputContext?.maxNumber))
        onChange?.({ value: changedValue, error: getNumberErrorMessage(newValue) });
      else onChange?.({ value: changedValue });
    };

    const handleInputContainerOnClick = () => {
      document.activeElement !== actionRef.current && inputRef.current.focus();
    };
    const handleInputContainerOnMouseDown = (event) => {
      // Avoid input to lose the focus when the container is pressed
      document.activeElement === inputRef.current && event.preventDefault();
    };

    const handleInputOnChange = (event) => {
      openSuggestions();
      changeValue(event.target.value);
    };
    const handleInputOnBlur = (event) => {
      closeSuggestions();

      if (isNotOptional(event.target.value, optional))
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.requiredValueErrorMessage });
      else if (isLengthIncorrect(event.target.value, minLength, maxLength))
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.lengthErrorMessage(minLength, maxLength),
        });
      else if (patternMissmatch(pattern, event.target.value))
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.formatRequestedErrorMessage });
      else if (isNumberIncorrect(event.target.value, numberInputContext?.minNumber, numberInputContext?.maxNumber))
        onBlur?.({ value: event.target.value, error: getNumberErrorMessage(event.target.value) });
      else onBlur?.({ value: event.target.value });
    };
    const handleInputOnKeyDown = (event) => {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          if (numberInputContext?.typeNumber === "number") {
            decrementNumber();
          } else {
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
          if (numberInputContext?.typeNumber === "number") {
            incrementNumber();
          } else {
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

    const setNumberProps = (type, min, max, step) => {
      type && inputRef?.current?.setAttribute("type", type);
      min && inputRef?.current?.setAttribute("min", min);
      max && inputRef?.current?.setAttribute("max", max);
      step && inputRef?.current?.setAttribute("step", step);
    };
    const decrementNumber = () => {
      const numberValue = value ?? innerValue;
      if (numberInputContext?.minNumber && parseInt(numberValue) < numberInputContext?.minNumber) {
        changeValue(parseInt(numberValue));
      } else if (numberInputContext?.maxNumber && parseInt(numberValue) > numberInputContext?.maxNumber) {
        changeValue(numberInputContext?.maxNumber);
      } else if (
        numberInputContext?.minNumber &&
        (parseInt(numberValue) === numberInputContext?.minNumber ||
          numberValue === "" ||
          (numberInputContext?.stepNumber &&
            parseInt(numberValue) - numberInputContext?.stepNumber < numberInputContext?.minNumber))
      ) {
        changeValue(numberInputContext?.minNumber);
      } else if (
        (numberInputContext?.stepNumber &&
          numberInputContext?.minNumber &&
          parseInt(numberValue) - numberInputContext?.stepNumber >= numberInputContext?.minNumber) ||
        (numberInputContext?.stepNumber && numberValue !== "")
      ) {
        changeValue(parseInt(numberValue) - numberInputContext?.stepNumber);
      } else if (numberInputContext?.stepNumber && numberValue == "") {
        changeValue(-numberInputContext?.stepNumber);
      } else if (numberValue === "") {
        changeValue(-1);
      } else {
        changeValue(parseInt(numberValue) - 1);
      }
    };
    const incrementNumber = () => {
      const numberValue = value ?? innerValue;
      if (numberInputContext?.maxNumber && parseInt(numberValue) > numberInputContext?.maxNumber) {
        changeValue(parseInt(numberValue));
      } else if (
        numberInputContext?.minNumber &&
        (parseInt(numberValue) < numberInputContext?.minNumber || numberValue === "")
      ) {
        changeValue(numberInputContext?.minNumber);
      } else if (
        numberInputContext?.maxNumber &&
        (parseInt(numberValue) === numberInputContext?.maxNumber ||
          (numberInputContext?.stepNumber &&
            parseInt(numberValue) + numberInputContext?.stepNumber > numberInputContext?.maxNumber))
      ) {
        changeValue(numberInputContext?.maxNumber);
      } else if (
        (numberInputContext?.stepNumber &&
          numberInputContext?.maxNumber &&
          parseInt(numberValue) + numberInputContext?.stepNumber <= numberInputContext?.maxNumber) ||
        (numberInputContext?.stepNumber && numberValue !== "")
      ) {
        changeValue(parseInt(numberValue) + numberInputContext?.stepNumber);
      } else if (numberInputContext?.stepNumber && numberValue == "") {
        changeValue(numberInputContext?.stepNumber);
      } else if (numberValue === "") {
        changeValue(1);
      } else {
        changeValue(parseInt(numberValue) + 1);
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

      numberInputContext?.typeNumber === "number" &&
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
            <Label
              htmlFor={inputId}
              disabled={disabled}
              backgroundType={backgroundType}
              hasHelperText={helperText ? true : false}
            >
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && (
            <HelperText disabled={disabled} backgroundType={backgroundType}>
              {helperText}
            </HelperText>
          )}
          <AutosuggestWrapper
            condition={hasSuggestions(suggestions)}
            wrapper={(children) => (
              <Popover.Root open={isOpen && (filteredSuggestions.length > 0 || isSearching || isAutosuggestError)}>
                <Popover.Trigger
                  asChild
                  type={undefined}
                  aria-expanded={undefined}
                  aria-controls={undefined}
                  aria-haspopup={undefined}
                >
                  {children}
                </Popover.Trigger>
                <Popover.Content
                  sideOffset={4}
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
                    getTextInputWidth={getTextInputWidth}
                  />
                </Popover.Content>
              </Popover.Root>
            )}
          >
            <InputContainer
              error={error ? true : false}
              disabled={disabled}
              backgroundType={backgroundType}
              onClick={handleInputContainerOnClick}
              onMouseDown={handleInputContainerOnMouseDown}
            >
              {prefix && (
                <Prefix disabled={disabled} backgroundType={backgroundType}>
                  {prefix}
                </Prefix>
              )}
              <Input
                id={inputId}
                name={name}
                value={value ?? innerValue}
                placeholder={placeholder}
                onBlur={handleInputOnBlur}
                onChange={handleInputOnChange}
                onFocus={openSuggestions}
                onKeyDown={handleInputOnKeyDown}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
                disabled={disabled}
                ref={inputRef}
                backgroundType={backgroundType}
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
                aria-required={optional ? false : true}
              />
              {!disabled && error && (
                <ErrorIcon backgroundType={backgroundType} aria-label="Error">
                  {icons.error}
                </ErrorIcon>
              )}
              {!disabled && clearable && (value ?? innerValue).length > 0 && (
                <Action
                  onClick={handleClearActionOnClick}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                  title={translatedLabels.textInput.clearFieldActionTitle}
                  aria-label={translatedLabels.textInput.clearFieldActionTitle}
                >
                  {icons.clear}
                </Action>
              )}
              {numberInputContext?.typeNumber === "number" && (
                <>
                  <Action
                    ref={actionRef}
                    disabled={disabled}
                    onClick={handleDecrementActionOnClick}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    backgroundType={backgroundType}
                    tabIndex={tabIndex}
                    title={translatedLabels.numberInput.decrementValueTitle}
                    aria-label={translatedLabels.numberInput.decrementValueTitle}
                  >
                    {icons.decrement}
                  </Action>
                  <Action
                    ref={actionRef}
                    disabled={disabled}
                    onClick={handleIncrementActionOnClick}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    backgroundType={backgroundType}
                    tabIndex={tabIndex}
                    title={translatedLabels.numberInput.incrementValueTitle}
                    aria-label={translatedLabels.numberInput.incrementValueTitle}
                  >
                    {icons.increment}
                  </Action>
                </>
              )}
              {action && (
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={action.onClick}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  title={action.title}
                  aria-label={action.title}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                >
                  {typeof action.icon === "string" ? <ActionIcon src={action.icon}></ActionIcon> : action.icon}
                </Action>
              )}
              {suffix && (
                <Suffix disabled={disabled} backgroundType={backgroundType}>
                  {suffix}
                </Suffix>
              )}
            </InputContainer>
          </AutosuggestWrapper>
          {!disabled && typeof error === "string" && (
            <Error id={errorId} backgroundType={backgroundType} aria-live={error ? "assertive" : "off"}>
              {error}
            </Error>
          )}
        </TextInputContainer>
      </ThemeProvider>
    );
  }
);

type CommonBackgroundTypeProps = {
  backgroundType: "dark" | "light";
};
type CommonDisabledBackgroundTypeProps = CommonBackgroundTypeProps & {
  disabled: boolean;
};

const TextInputContainer = styled.div<TextInputPropsType>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

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

const Label = styled.label<CommonDisabledBackgroundTypeProps & { hasHelperText: boolean }>`
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledLabelFontColorOnDark
        : props.theme.disabledLabelFontColor
      : props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.theme.labelFontColor};

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

const HelperText = styled.span<CommonDisabledBackgroundTypeProps>`
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledHelperTextFontColorOnDark
        : props.theme.disabledHelperTextFontColor
      : props.backgroundType === "dark"
      ? props.theme.helperTextFontColorOnDark
      : props.theme.helperTextFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const InputContainer = styled.div<CommonDisabledBackgroundTypeProps & { error: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  height: calc(2.5rem - 2px);
  padding: 0 0.5rem;

  ${(props) => {
    if (props.disabled)
      return props.backgroundType === "dark"
        ? `background-color: ${props.theme.disabledContainerFillColorOnDark};`
        : `background-color: ${props.theme.disabledContainerFillColor};`;
  }}
  box-shadow: 0 0 0 2px transparent;
  border-radius: 4px;
  border: 1px solid
    ${(props) => {
      if (props.disabled)
        return props.backgroundType === "dark"
          ? props.theme.disabledBorderColorOnDark
          : props.theme.disabledBorderColor;
      else
        return props.backgroundType === "dark" ? props.theme.enabledBorderColorOnDark : props.theme.enabledBorderColor;
    }};
  ${(props) =>
    props.error &&
    !props.disabled &&
    `border-color: transparent;
     box-shadow: 0 0 0 2px ${
       props.backgroundType === "dark" ? props.theme.errorBorderColorOnDark : props.theme.errorBorderColor
     };
  `}
  ${(props) => props.disabled && "cursor: not-allowed;"};

  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        border-color: ${
          props.error
            ? "transparent"
            : props.backgroundType === "dark"
            ? props.theme.hoverBorderColorOnDark
            : props.theme.hoverBorderColor
        };
        ${
          props.error &&
          `box-shadow: 0 0 0 2px ${
            props.backgroundType === "dark"
              ? props.theme.hoverErrorBorderColorOnDark
              : props.theme.hoverErrorBorderColor
          };`
        }
      }
      &:focus-within {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${
          props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
        };
      }
    `};
`;

const Input = styled.input<CommonBackgroundTypeProps>`
  height: calc(2.5rem - 2px);
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledValueFontColorOnDark
        : props.theme.disabledValueFontColor
      : props.backgroundType === "dark"
      ? props.theme.valueFontColorOnDark
      : props.theme.valueFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  line-height: 1.5em;
  ${(props) => props.disabled && `cursor: not-allowed;`}

  ::placeholder {
    color: ${(props) =>
      props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledPlaceholderFontColorOnDark
          : props.theme.disabledPlaceholderFontColor
        : props.backgroundType === "dark"
        ? props.theme.placeholderFontColorOnDark
        : props.theme.placeholderFontColor};
  }
`;

const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Action = styled.button<CommonBackgroundTypeProps>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 3px;
  margin-left: 0.25rem;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}

  box-shadow: 0 0 0 2px transparent;
  background-color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledActionBackgroundColorOnDark
        : props.theme.disabledActionBackgroundColor
      : props.backgroundType === "dark"
      ? props.theme.actionBackgroundColorOnDark
      : props.theme.actionBackgroundColor};

  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledActionIconColorOnDark
        : props.theme.disabledActionIconColor
      : props.backgroundType === "dark"
      ? props.theme.actionIconColorOnDark
      : props.theme.actionIconColor};

  ${(props) =>
    !props.disabled &&
    `
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        color: ${
          props.backgroundType === "dark" ? props.theme.focusActionIconColorOnDark : props.theme.focusActionIconColor
        };
      }
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        color: ${
          props.backgroundType === "dark" ? props.theme.focusActionIconColorOnDark : props.theme.focusActionIconColor
        };
      }
      &:hover {
        background-color: ${
          props.backgroundType === "dark"
            ? props.theme.hoverActionBackgroundColorOnDark
            : props.theme.hoverActionBackgroundColor
        };
        color: ${
          props.backgroundType === "dark" ? props.theme.hoverActionIconColorOnDark : props.theme.hoverActionIconColor
        };
      }
      &:active {
        background-color: ${
          props.backgroundType === "dark"
            ? props.theme.activeActionBackgroundColorOnDark
            : props.theme.activeActionBackgroundColor
        };
        color: ${
          props.backgroundType === "dark" ? props.theme.activeActionIconColorOnDark : props.theme.activeActionIconColor
        };
      }
    `}

  svg {
    line-height: 18px;
  }
`;

const Prefix = styled.span<CommonDisabledBackgroundTypeProps>`
  height: 1.5rem;
  line-height: 1.5rem;
  margin-left: 0.25rem;
  padding: 0 0.5rem 0 0;
  ${(props) => {
    const color = props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledPrefixColorOnDark
        : props.theme.disabledPrefixColor
      : props.backgroundType === "dark"
      ? props.theme.prefixColorOnDark
      : props.theme.prefixColor;
    return `color: ${color}; border-right: 1px solid ${color};`;
  }};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  pointer-events: none;
`;

const Suffix = styled.span<CommonDisabledBackgroundTypeProps>`
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 0 0.25rem;
  padding: 0 0 0 0.5rem;
  ${(props) => {
    const color = props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledSuffixColorOnDark
        : props.theme.disabledSuffixColor
      : props.backgroundType === "dark"
      ? props.theme.suffixColorOnDark
      : props.theme.suffixColor;
    return `color: ${color}; border-left: 1px solid ${color};`;
  }};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  pointer-events: none;
`;

const ErrorIcon = styled.span<CommonBackgroundTypeProps>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  margin-left: 0.25rem;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorIconColorOnDark : props.theme.errorIconColor};

  svg {
    line-height: 18px;
    font-size: 1.25rem;
  }
`;

const Error = styled.span<CommonBackgroundTypeProps>`
  min-height: 1.5em;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorMessageColorOnDark : props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  margin-top: 0.25rem;
`;

export default DxcTextInput;
