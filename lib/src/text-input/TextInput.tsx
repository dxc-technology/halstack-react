import React, { useContext, useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import { v4 as uuidv4 } from "uuid";
import BackgroundColorContext from "../BackgroundColorContext";
import NumberInputContext from "../number-input/NumberInputContext";
import TextInputPropsType, { RefType } from "./types";
import Suggestion from "./Suggestion";

const textInputIcons = {
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  clear: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  ),
  increment: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  ),
  decrement: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 13H5v-2h14v2z" />
    </svg>
  ),
};

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

const getNotOptionalErrorMessage = () => `This field is required. Please, enter a value.`;

const getPatternErrorMessage = () => `Please match the format requested.`;

const patternMatch = (pattern, value) => new RegExp(pattern).test(value);

const getLastOptionIndex = (filteredSuggestions) => {
  let last = 0;
  const reducer = (acc, current) => acc + current.options?.length;

  if (filteredSuggestions.length > 0)
    filteredSuggestions[0].options
      ? (last = filteredSuggestions.reduce(reducer, 0) - 1)
      : (last = filteredSuggestions.length - 1);

  return last;
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
  ) => {
    const [inputId] = useState(`input-${uuidv4()}`);
    const [innerValue, setInnerValue] = useState(defaultValue);

    const [isOpen, changeIsOpen] = useState(false);
    const [isSearching, changeIsSearching] = useState(false);
    const [isAutosuggestError, changeIsAutosuggestError] = useState(false);
    const [filteredSuggestions, changeFilteredSuggestions] = useState([]);
    const [visualFocusedSuggIndex, changeVisualFocusedSuggIndex] = useState(-1);

    const suggestionsRef = useRef(null);
    const inputRef = useRef(null);
    const actionRef = useRef(null);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);

    const autosuggestId = `${inputId}-listBox`;
    const errorId = `error-${inputId}`;

    const numberInputContext = useContext(NumberInputContext);

    const lastOptionIndex = useMemo(() => getLastOptionIndex(filteredSuggestions), [filteredSuggestions]);

    const isNotOptional = (value) => value === "" && !optional;

    const isLengthIncorrect = (value) =>
      value && minLength && maxLength && (value.length < minLength || value.length > maxLength);

    const getLengthErrorMessage = () => `Min length ${minLength}, max length ${maxLength}.`;

    const isNumberIncorrect = (value) =>
      (numberInputContext?.minNumber && parseInt(value) < numberInputContext?.minNumber) ||
      (numberInputContext?.maxNumber && parseInt(value) > numberInputContext?.maxNumber);

    const isTextInputType = () =>
      !inputRef?.current?.getAttribute("type") || inputRef?.current?.getAttribute("type") === "text";

    const getNumberErrorMessage = (value) => {
      if (numberInputContext?.minNumber && parseInt(value) < numberInputContext?.minNumber)
        return `Value must be greater than or equal to ${numberInputContext?.minNumber}.`;
      else if (numberInputContext?.maxNumber && parseInt(value) > numberInputContext?.maxNumber)
        return `Value must be less than or equal to ${numberInputContext?.maxNumber}.`;
    };

    const hasSuggestions = () => typeof suggestions === "function" || suggestions?.length > 0;

    const openSuggestions = () => {
      hasSuggestions() && changeIsOpen(true);
    };

    const closeSuggestions = () => {
      changeIsOpen(false);
      changeVisualFocusedSuggIndex(-1);
    };

    const changeValue = (newValue) => {
      value ?? setInnerValue(newValue);
      const changedValue = typeof newValue === "number" ? newValue.toString() : newValue;

      if (isNotOptional(newValue)) onChange?.({ value: changedValue, error: getNotOptionalErrorMessage() });
      else if (isLengthIncorrect(newValue)) onChange?.({ value: changedValue, error: getLengthErrorMessage() });
      else if (newValue && pattern && !patternMatch(pattern, newValue))
        onChange?.({ value: changedValue, error: getPatternErrorMessage() });
      else if (newValue && isNumberIncorrect(newValue))
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

    const handleIOnChange = (event) => {
      openSuggestions();
      changeValue(event.target.value);
    };
    const handleIOnBlur = (event) => {
      suggestions && closeSuggestions();

      if (isNotOptional(event.target.value))
        onBlur?.({ value: event.target.value, error: getNotOptionalErrorMessage() });
      else if (isLengthIncorrect(event.target.value))
        onBlur?.({ value: event.target.value, error: getLengthErrorMessage() });
      else if (event.target.value && pattern && !patternMatch(pattern, event.target.value))
        onBlur?.({ value: event.target.value, error: getPatternErrorMessage() });
      else if (event.target.value && isNumberIncorrect(event.target.value))
        onBlur?.({ value: event.target.value, error: getNumberErrorMessage(event.target.value) });
      else onBlur?.({ value: event.target.value });
    };
    const handleIOnKeyDown = (event) => {
      switch (event.keyCode) {
        case 40: // Arrow Down
          if (numberInputContext?.typeNumber === "number") {
            decrementNumber();
            event.preventDefault();
          } else {
            event.preventDefault();
            openSuggestions();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusedSuggIndex((visualFocusedSuggIndex) => {
                if (visualFocusedSuggIndex < filteredSuggestions.length - 1) return visualFocusedSuggIndex + 1;
                else if (visualFocusedSuggIndex === filteredSuggestions.length - 1) return 0;
              });
            }
          }
          break;
        case 38: // Arrow Up
          if (numberInputContext?.typeNumber === "number") {
            incrementNumber();
            event.preventDefault();
          } else {
            event.preventDefault();
            openSuggestions();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusedSuggIndex((visualFocusedSuggIndex) => {
                if (visualFocusedSuggIndex === 0 || visualFocusedSuggIndex === -1)
                  return filteredSuggestions.length > 0 ? filteredSuggestions.length - 1 : suggestions.length - 1;
                else return visualFocusedSuggIndex - 1;
              });
            }
          }
          break;
        case 27: // Esc
          event.preventDefault();
          if (hasSuggestions()) {
            changeValue("");
            isOpen && closeSuggestions();
          }
          break;
        case 13: // Enter
          if (hasSuggestions() && !isSearching) {
            const validFocusedSuggestion =
              filteredSuggestions.length > 0 &&
              visualFocusedSuggIndex >= 0 &&
              visualFocusedSuggIndex < filteredSuggestions.length;
            validFocusedSuggestion && changeValue(filteredSuggestions[visualFocusedSuggIndex]);
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

    useLayoutEffect(() => {
      const visualFocusedOptionEl =
        suggestionsRef?.current?.querySelectorAll("[role='option']")[visualFocusedSuggIndex];
      visualFocusedOptionEl?.scrollIntoView?.({ block: "nearest", inline: "start" });
    }, [visualFocusedSuggIndex]);

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
        changeVisualFocusedSuggIndex(-1);
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
              helperText={helperText ? true : false}
            >
              {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
            </Label>
          )}
          {helperText && (
            <HelperText disabled={disabled} backgroundType={backgroundType}>
              {helperText}
            </HelperText>
          )}
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
              onBlur={handleIOnBlur}
              onChange={handleIOnChange}
              onFocus={() => {
                openSuggestions();
              }}
              onKeyDown={handleIOnKeyDown}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              disabled={disabled}
              ref={inputRef}
              backgroundType={backgroundType}
              pattern={pattern}
              minLength={minLength}
              maxLength={maxLength}
              autoComplete={autocomplete}
              tabIndex={tabIndex}
              role={isTextInputType() && hasSuggestions() ? "combobox" : "textbox"}
              aria-autocomplete={isTextInputType() && hasSuggestions() ? "list" : undefined}
              aria-controls={isTextInputType() && hasSuggestions() ? autosuggestId : undefined}
              aria-disabled={disabled}
              aria-expanded={isTextInputType() && hasSuggestions() ? (isOpen ? "true" : "false") : undefined}
              aria-activedescendant={
                isTextInputType() && hasSuggestions() && isOpen && visualFocusedSuggIndex !== -1
                  ? `suggestion-${visualFocusedSuggIndex}`
                  : undefined
              }
              aria-invalid={error ? "true" : "false"}
              aria-errormessage={error ? errorId : undefined}
              aria-required={optional ? "false" : "true"}
            />
            {!disabled && error && (
              <ErrorIcon backgroundType={backgroundType} aria-label="Error">
                {textInputIcons.error}
              </ErrorIcon>
            )}
            {!disabled && clearable && (value ?? innerValue).length > 0 && (
              <Action
                onClick={() => handleClearActionOnClick()}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
                backgroundType={backgroundType}
                tabIndex={tabIndex}
                title="Clear field"
                aria-label="Clear field"
              >
                {textInputIcons.clear}
              </Action>
            )}
            {numberInputContext?.typeNumber === "number" ? (
              <>
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={() => handleDecrementActionOnClick()}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                  title="Decrement value"
                  aria-label="Decrement value"
                >
                  {textInputIcons.decrement}
                </Action>
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={() => handleIncrementActionOnClick()}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                  title="Increment value"
                  aria-label="Increment value"
                >
                  {textInputIcons.increment}
                </Action>
              </>
            ) : (
              action && (
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={() => action.onClick()}
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
              )
            )}
            {suffix && (
              <Suffix disabled={disabled} backgroundType={backgroundType}>
                {suffix}
              </Suffix>
            )}
            {isOpen && (filteredSuggestions.length > 0 || isSearching || isAutosuggestError) && (
              <Suggestions
                id={autosuggestId}
                error={isAutosuggestError ? true : false}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                ref={suggestionsRef}
                role="listbox"
                aria-label={label}
              >
                {!isSearching &&
                  !isAutosuggestError &&
                  filteredSuggestions.length > 0 &&
                  filteredSuggestions.map((suggestion, index) => (
                    <Suggestion
                      key={`suggestion-${index}`}
                      id={`suggestion-${index}`}
                      value={value ?? innerValue}
                      onClick={() => {
                        changeValue(suggestion);
                        closeSuggestions();
                      }}
                      suggestion={suggestion}
                      isLast={index === lastOptionIndex}
                      visuallyFocused={visualFocusedSuggIndex === index}
                      highlighted={typeof suggestions === "function"}
                    />
                  ))}
                {isSearching && <SuggestionsSystemMessage>Searching...</SuggestionsSystemMessage>}
                {isAutosuggestError && (
                  <SuggestionsError>
                    <SuggestionsErrorIcon backgroundType={backgroundType}>{textInputIcons.error}</SuggestionsErrorIcon>
                    Error fetching data
                  </SuggestionsError>
                )}
              </Suggestions>
            )}
          </InputContainer>
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

type CommonBackgroundTypeProps = {
  backgroundType: BackgroundColorContext;
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

const Label = styled.label<CommonDisabledBackgroundTypeProps & { helperText: boolean }>`
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
  ${(props) => !props.helperText && `margin-bottom: 0.5rem;`}
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
  margin-bottom: 0.5rem;
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
  margin-top: 0.5rem;
`;

const Suggestions = styled.ul<{ error: boolean }>`
  position: absolute;
  z-index: 1;
  max-height: 304px;
  overflow-y: auto;
  top: calc(100% + 4px);
  left: 0;
  margin: 0;
  padding: 0.25rem 0;
  width: 100%;
  background-color: ${(props) =>
    props.error ? props.theme.errorListDialogBackgroundColor : props.theme.listDialogBackgroundColor};
  border: 1px solid
    ${(props) => (props.error ? props.theme.errorListDialogBorderColor : props.theme.listDialogBorderColor)};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: default;
  color: ${(props) => props.theme.listOptionFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
`;

const SuggestionsSystemMessage = styled.span`
  display: flex;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.systemMessageFontColor};
  line-height: 1.715em;
`;

const SuggestionsErrorIcon = styled.span<CommonBackgroundTypeProps>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-right: 0.5rem;
  height: 18px;
  width: 18px;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorIconColorOnDark : props.theme.errorIconColor};
`;

const SuggestionsError = styled.span`
  display: flex;
  padding: 0.25rem 1rem;
  align-items: center;
  line-height: 1.715em;
  color: ${(props) => props.theme.errorListDialogFontColor};
`;

export default DxcTextInput;
