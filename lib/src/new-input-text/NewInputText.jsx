import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import { v4 as uuidv4 } from "uuid";
import BackgroundColorContext from "../BackgroundColorContext.js";
import NumberContext from "../number/NumberContext.js";

const makeCancelable = (promise) => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
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

const getLengthErrorMessage = (length) => `Min length ${length.min}, Max length ${length.max}.`;

const patternMatch = (pattern, value) => new RegExp(pattern).test(value);

const getPatternErrorMessage = () => `Please match the format requested.`;

const DxcNewInputText = React.forwardRef(
  (
    {
      label = "",
      name = "",
      value,
      helperText = "",
      placeholder = "",
      action,
      clearable = false,
      disabled = false,
      optional = false,
      prefix = "",
      suffix = "",
      onChange,
      onBlur,
      error = "",
      margin,
      size = "medium",
      suggestions,
      pattern,
      length,
      tabIndex = 0,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState("");

    const [isOpen, changeIsOpen] = useState(false);
    const [isSearching, changeIsSearching] = useState(false);
    const [isError, changeIsError] = useState(false);
    const [isScrollable, changeIsScrollable] = useState(false);
    const [isActiveSuggestion, changeIsActiveSuggestion] = useState(false);
    const [isAutosuggestError, changeIsAutosuggestError] = useState(false);

    const [validationError, changeValidationError] = useState("");
    const [filteredSuggestions, changeFilteredSuggestions] = useState([]);
    const [visualFocusedSuggIndex, changeVisualFocusedSuggIndex] = useState(-1);

    const [minNumber, setMinNumber] = useState(null);
    const [maxNumber, setMaxNumber] = useState(null);
    const [stepNumber, setStepNumber] = useState(null);

    const suggestionsRef = useRef(null);
    const inputRef = useRef(null);
    const actionRef = useRef(null);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);

    const inputId = `input-${uuidv4()}`;
    const autosuggestId = `${inputId}-listBox`;

    const numberContext = useContext(NumberContext);

    const changeValue = (newValue) => {
      const changedValue = typeof newValue === "number" ? newValue.toString() : newValue;
      value ?? setInnerValue(newValue);
      typeof onChange === "function" && onChange(changedValue);
    };

    const isLengthIncorrect = (value) =>
      value !== "" && length && length.min && length.max && (value.length < length.min || value.length > length.max);

    const isNumberIncorrect = (value) =>
      (minNumber && parseInt(value) < minNumber) || (maxNumber && parseInt(value) > maxNumber);

    const getNumberErrorMessage = (value) => {
      if (minNumber && parseInt(value) < minNumber) {
        return `Value must be greater than or equal to ${minNumber}.`;
      } else if (maxNumber && parseInt(value) > maxNumber) {
        return `Value must be less than or equal to ${maxNumber}.`;
      }
    };

    const closeSuggestions = () => {
      changeIsOpen(false);
      changeVisualFocusedSuggIndex(-1);
    };

    const handleInputContainerOnClick = () => {
      document.activeElement !== actionRef.current && inputRef.current.focus();
    };

    const handleIOnChange = (event) => {
      suggestions && changeIsOpen(true);
      changeValue(event.target.value);
    };

    const handleIOnClick = () => {
      suggestions && changeIsOpen(true);
    };

    const handleIOnBlur = (event) => {
      suggestions && closeSuggestions();
      if (isLengthIncorrect(event.target.value)) {
        changeIsError(true);
        changeValidationError(getLengthErrorMessage(length, event));
        onBlur?.({ value: event.target.value, error: getLengthErrorMessage(length) });
      } else if (event.target.value && pattern && !patternMatch(pattern, event.target.value)) {
        changeIsError(true);
        changeValidationError(getPatternErrorMessage());
        onBlur?.({ value: event.target.value, error: getPatternErrorMessage() });
      } else if (event.target.value && isNumberIncorrect(event.target.value)) {
        changeIsError(true);
        changeValidationError(getNumberErrorMessage(event.target.value));
        onBlur?.({ value: event.target.value, error: getNumberErrorMessage(event.target.value) });
      } else {
        changeIsError(false);
        changeValidationError("");
        onBlur?.({ value: event.target.value, error: null });
      }
    };

    const handleIOnFocus = () => {
      suggestions && changeIsOpen(true);
    };

    const handleIOnKeyDown = (event) => {
      switch (event.keyCode) {
        case 40: // Arrow Down
          if (numberContext) {
            incrementNumber();
          } else {
            event.preventDefault();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusedSuggIndex((visualFocusedSuggIndex) => {
                if (visualFocusedSuggIndex < filteredSuggestions.length - 1) return visualFocusedSuggIndex + 1;
                else if (visualFocusedSuggIndex === filteredSuggestions.length - 1) return 0;
              });
              changeIsOpen(true);
              changeIsScrollable(true);
              changeIsActiveSuggestion(false);
            }
          }
          break;
        case 38: // Arrow Up
          if (numberContext) {
            incrementNumber();
          } else {
            event.preventDefault();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusedSuggIndex((visualFocusedSuggIndex) => {
                if (visualFocusedSuggIndex === 0 || visualFocusedSuggIndex === -1)
                  return filteredSuggestions.length > 0 ? filteredSuggestions.length - 1 : suggestions.length - 1;
                else return visualFocusedSuggIndex - 1;
              });
              changeIsOpen(true);
              changeIsScrollable(true);
              changeIsActiveSuggestion(false);
            }
          }
          break;
        case 27: // Esc
          event.preventDefault();
          if (suggestions && suggestions.length > 0) {
            changeValue("");
            if (isOpen) {
              changeIsError(false);
              closeSuggestions();
            }
          }
          break;
        case 13: // Enter
          if (!isAutosuggestError && !isSearching) {
            const validFocusedSuggestion =
              filteredSuggestions.length > 0 &&
              visualFocusedSuggIndex >= 0 &&
              visualFocusedSuggIndex < filteredSuggestions.length;
            validFocusedSuggestion && changeValue(filteredSuggestions[visualFocusedSuggIndex]);
            closeSuggestions();
          }
          break;
      }
    };

    const setNumberProps = (type, min, max, step) => {
      type && inputRef?.current?.setAttribute("type", type);
      min && inputRef?.current?.setAttribute("min", min);
      max && inputRef?.current?.setAttribute("max", max);
      step && inputRef?.current?.setAttribute("step", step);
      setMinNumber(min);
      setMaxNumber(max);
      setStepNumber(step);
    };

    useLayoutEffect(() => {
      isScrollable && suggestionsRef.current?.scrollTo({ top: visualFocusedSuggIndex * 39 });
      return changeIsScrollable(false);
    }, [isScrollable, suggestionsRef, visualFocusedSuggIndex]);

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
      } else if (suggestions && suggestions.length) {
        changeFilteredSuggestions(
          suggestions.filter((suggestion) => suggestion.toUpperCase().startsWith((value ?? innerValue).toUpperCase()))
        );
        changeVisualFocusedSuggIndex(-1);
      }

      numberContext &&
        setNumberProps(
          numberContext.typeNumber,
          numberContext.minNumber,
          numberContext.maxNumber,
          numberContext.stepNumber
        );
    }, [value, innerValue, suggestions]);

    const defaultClearAction = {
      onClick: () => {
        changeValue("");
        changeValidationError("");
        changeIsError(false);
        changeIsAutosuggestError(false);
        inputRef.current.focus();
        suggestions && closeSuggestions();
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      ),
    };

    const errorIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    );

    const decrementNumber = () => {
      const numberValue = value || innerValue;
      if (minNumber && parseInt(numberValue) < minNumber) {
        changeValue(parseInt(numberValue));
      } else if (maxNumber && parseInt(numberValue) > maxNumber) {
        changeValue(maxNumber);
      } else if (
        minNumber &&
        (parseInt(numberValue) === minNumber ||
          numberValue === "" ||
          (stepNumber && parseInt(numberValue) - stepNumber < minNumber))
      ) {
        changeValue(minNumber);
      } else if (
        (stepNumber && minNumber && parseInt(numberValue) - stepNumber >= minNumber) ||
        (stepNumber && numberValue !== "")
      ) {
        changeValue(parseInt(numberValue) - stepNumber);
      } else if (stepNumber && numberValue == "") {
        changeValue(-stepNumber);
      } else if (numberValue === "") {
        changeValue(-1);
      } else {
        changeValue(parseInt(numberValue) - 1);
      }
    };

    const incrementNumber = () => {
      const numberValue = value || innerValue;
      if (maxNumber && parseInt(numberValue) > maxNumber) {
        changeValue(parseInt(numberValue));
      } else if (minNumber && (parseInt(numberValue) < minNumber || numberValue === "")) {
        changeValue(minNumber);
      } else if (
        maxNumber &&
        (parseInt(numberValue) === maxNumber || (stepNumber && parseInt(numberValue) + stepNumber > maxNumber))
      ) {
        changeValue(maxNumber);
      } else if (
        (stepNumber && maxNumber && parseInt(numberValue) + stepNumber <= maxNumber) ||
        (stepNumber && numberValue !== "")
      ) {
        changeValue(parseInt(numberValue) + stepNumber);
      } else if (stepNumber && numberValue == "") {
        changeValue(stepNumber);
      } else if (numberValue === "") {
        changeValue(1);
      } else {
        changeValue(parseInt(numberValue) + 1);
      }
    };

    const decrementAction = {
      onClick: () => {
        decrementNumber();
        inputRef.current.focus();
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      ),
    };

    const incrementAction = {
      onClick: () => {
        incrementNumber();
        inputRef.current.focus();
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      ),
    };

    const HighlightedSuggestion = ({ suggestion, index }) => {
      const regEx = new RegExp(value ?? innerValue, "i");
      const matchedWords = suggestion.match(regEx);
      const noMatchedWords = suggestion.replace(regEx, "");

      return (
        <Suggestion
          onMouseDown={() => {
            changeIsActiveSuggestion(true);
          }}
          onMouseUp={() => {
            if (isActiveSuggestion) {
              changeValue(suggestion);
              changeIsActiveSuggestion(false);
              closeSuggestions();
            }
          }}
          onMouseEnter={() => {
            changeVisualFocusedSuggIndex(index);
          }}
          onMouseLeave={() => {
            changeIsActiveSuggestion(false);
          }}
          visualFocused={visualFocusedSuggIndex === index}
          active={visualFocusedSuggIndex === index && isActiveSuggestion}
        >
          {typeof suggestions === "function" ? (
            suggestion
          ) : (
            <>
              <strong>{matchedWords}</strong>
              {noMatchedWords}
            </>
          )}
        </Suggestion>
      );
    };

    return (
      <ThemeProvider theme={colorsTheme.newInputText}>
        <DxcInput margin={margin} ref={ref} size={size}>
          <Label htmlFor={inputId} disabled={disabled} backgroundType={backgroundType}>
            {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
          </Label>
          <HelperText disabled={disabled} backgroundType={backgroundType}>
            {helperText}
          </HelperText>
          <InputContainer
            error={error === undefined ? validationError : error}
            disabled={disabled}
            backgroundType={backgroundType}
            onClick={handleInputContainerOnClick}
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
              onChange={handleIOnChange}
              onClick={handleIOnClick}
              onBlur={handleIOnBlur}
              onFocus={handleIOnFocus}
              onKeyDown={handleIOnKeyDown}
              disabled={disabled}
              ref={inputRef}
              backgroundType={backgroundType}
              pattern={pattern}
              tabIndex={tabIndex}
            />
            {(error || isError) && <ErrorIcon backgroundType={backgroundType}>{errorIcon}</ErrorIcon>}
            {!disabled && clearable && (value ?? innerValue).length > 0 && (
              <Action onClick={defaultClearAction.onClick} backgroundType={backgroundType} tabIndex={tabIndex}>
                {defaultClearAction.icon}
              </Action>
            )}
            {numberContext?.typeNumber === "number" ? (
              <>
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={decrementAction.onClick}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                >
                  {decrementAction.icon}
                </Action>
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={incrementAction.onClick}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                >
                  {incrementAction.icon}
                </Action>
              </>
            ) : (
              action && (
                <Action
                  ref={actionRef}
                  disabled={disabled}
                  onClick={action.onClick}
                  backgroundType={backgroundType}
                  tabIndex={tabIndex}
                >
                  {action.icon}
                </Action>
              )
            )}
            {suffix && (
              <Suffix disabled={disabled} backgroundType={backgroundType}>
                {suffix}
              </Suffix>
            )}
            {((suggestions && suggestions.length > 0) || typeof suggestions === "function") && isOpen && (
              <Suggestions
                id={autosuggestId}
                isError={isAutosuggestError}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onMouseLeave={() => {
                  changeVisualFocusedSuggIndex(-1);
                }}
                ref={suggestionsRef}
              >
                {!isSearching && !isAutosuggestError && filteredSuggestions.length === 0 && (
                  <SuggestionsSystemMessage>No results found</SuggestionsSystemMessage>
                )}
                {!isSearching &&
                  !isAutosuggestError &&
                  filteredSuggestions.length > 0 &&
                  filteredSuggestions.map((suggestion, index) => (
                    <HighlightedSuggestion key={`suggestion-${uuidv4()}`} suggestion={suggestion} index={index} />
                  ))}
                {isSearching && <SuggestionsSystemMessage>Searching...</SuggestionsSystemMessage>}
                {isAutosuggestError && (
                  <SuggestionsError>
                    <ErrorIcon backgroundType={backgroundType}>{errorIcon}</ErrorIcon>
                    Error fetching data
                  </SuggestionsError>
                )}
              </Suggestions>
            )}
          </InputContainer>
          <Error backgroundType={backgroundType}>{error || validationError}</Error>
        </DxcInput>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "60px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const DxcInput = styled.div`
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

const Label = styled.label`
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
  line-height: 1.75em;
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

const HelperText = styled.span`
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
  line-height: 1.5em;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));

  ${(props) => {
    if (props.disabled)
      return props.backgroundType === "dark"
        ? `background-color: ${props.theme.disabledContainerFillColorOnDark};`
        : `background-color: ${props.theme.disabledContainerFillColor};`;
  }}
  ${(props) =>
    props.error &&
    `box-shadow: inset 0 0 0 1px ${
      props.backgroundType === "dark" ? props.theme.errorBorderColorOnDark : props.theme.errorBorderColor
    };`}

  border: 1px solid
    ${(props) => {
    if (props.error)
      return props.backgroundType === "dark" ? props.theme.errorBorderColorOnDark : props.theme.errorBorderColor;
    else
      return props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledBorderColorOnDark
          : props.theme.disabledBorderColor
        : props.backgroundType === "dark"
        ? props.theme.enabledBorderColorOnDark
        : props.theme.enabledBorderColor;
  }};
  border-radius: 4px;
  margin: calc(1rem * 0.25) 0;
  padding: 0 calc(1rem * 0.5);

  ${(props) => props.disabled && "cursor: not-allowed;"};
  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        border-color: ${
          props.error
            ? props.backgroundType === "dark"
              ? props.theme.hoverErrorBorderColorOnDark
              : props.theme.hoverErrorBorderColor
            : props.backgroundType === "dark"
            ? props.theme.hoverBorderColorOnDark
            : props.theme.hoverBorderColor
        };
        ${
          props.error
            ? `box-shadow: inset 0 0 0 1px ${
                props.backgroundType === "dark"
                  ? props.theme.hoverErrorBorderColorOnDark
                  : props.theme.hoverErrorBorderColor
              };`
            : `box-shadow: none;`
        }
      }
      &:focus-within {
        border-color: ${
          props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
        };
        box-shadow: inset 0 0 0 1px ${
          props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
        };
      }
    `};
`;

const Input = styled.input`
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 calc(1rem * 0.5);

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

const Action = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 3px;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer`)};

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
      &:focus {
        outline: none;
        border: 1px solid ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        box-shadow: inset 0 0 0 1px ${
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
        border: 1px solid ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        box-shadow: inset 0 0 0 1px ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        color: ${
          props.backgroundType === "dark" ? props.theme.focusActionIconColorOnDark : props.theme.focusActionIconColor
        };
      }
      &:active {
        outline: none;
        border: 1px solid ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        box-shadow: inset 0 0 0 1px ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
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

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 18px;
  width: 18px;
  margin-right: 4px;
  pointer-events: none;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorIconColorOnDark : props.theme.errorIconColor};

  svg {
    line-height: 18px;
    font-size: 1.25rem;
  }
`;

const Prefix = styled.span`
  height: calc(1rem * 1.5);
  line-height: calc(1rem * 1.5);
  margin-left: calc(1rem * 0.25);
  padding: 0 calc(1rem * 0.5) 0 0;
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

const Suffix = styled.span`
  height: calc(1rem * 1.5);
  line-height: calc(1rem * 1.5);
  margin-right: calc(1rem * 0.25);
  margin-left: calc(1rem * 0.25);
  padding: 0 0 0 calc(1rem * 0.5);
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

const Error = styled.span`
  min-height: 1.5em;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorMessageColorOnDark : props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
`;

const Suggestions = styled.ul`
  background-color: ${(props) => (props.isError ? props.theme.errorMessageBackgroundColor : "#ffffff")};
  position: absolute;
  z-index: 1;
  max-height: 160px;
  overflow: auto;
  top: calc(100% + 4px);
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  cursor: default;
  border: 1px solid ${(props) => (props.isError ? props.theme.errorMessageBorderColor : props.theme.enabledBorderColor)};
  border-radius: 4px;
  color: ${(props) => props.theme.listOptionFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
`;

const Suggestion = styled.li`
  padding: calc((39px - 1.75em) / 2) 0 calc((39px - 1.75em) / 2) 1em;
  line-height: 1.75em;
  list-style-type: none;
  cursor: pointer;

  ${(props) =>
    props.active
      ? `background-color: ${props.theme.activeListOptionBackgroundColor};`
      : props.visualFocused && `background-color: ${props.theme.hoverListOptionBackgroundColor};`}
`;

const SuggestionsSystemMessage = styled.span`
  display: flex;
  padding: calc((39px - 1.75em) / 2) 0 calc((39px - 1.75em) / 2) 1em;
  color: ${(props) => props.theme.systemMessageFontColor};
  font-size: 0.875rem;
  line-height: 1.75em;
`;

const SuggestionsError = styled.span`
  display: flex;
  padding: calc((39px - 1.75em) / 2) 0 calc((39px - 1.75em) / 2) 1em;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.75em;
`;

DxcNewInputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  action: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.shape({ type: PropTypes.oneOf(["svg"]) }).isRequired,
  }),
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ type: PropTypes.oneOf(["svg"]) })]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ type: PropTypes.oneOf(["svg"]) })]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  suggestions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  pattern: PropTypes.string,
  length: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
  tabIndex: PropTypes.number,
};

export default DxcNewInputText;
