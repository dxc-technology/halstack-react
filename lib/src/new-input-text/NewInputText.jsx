import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import { v4 as uuidv4 } from "uuid";

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
      // size = "medium",
      suggestions,
      // tabIndex = 0,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState("");

    const [isOpen, changeIsOpen] = useState(false);
    const [isSearching, changeIsSearching] = useState(false);
    const [isError, changeIsError] = useState(false);
    const [filteredSuggestions, changeFilteredSuggestions] = useState([]);
    const [visualFocusedSuggIndex, changeVisualFocusedSuggIndex] = useState(-1);
    const [isScrollable, changeIsScrollable] = useState(false);
    const [isActiveSuggestion, changeIsActiveSuggestion] = useState(false);

    const suggestionsRef = useRef(null);
    const inputRef = useRef(null);

    const colorsTheme = useTheme();
    const inputId = `input-${uuidv4()}`;
    const autosuggestId = `${inputId}-listBox`;

    const closeSuggestions = () => {
      changeIsOpen(false);
      changeVisualFocusedSuggIndex(-1);
    };
    const changeValue = (newValue) => {
      if (value === null || value === undefined) {
        if (typeof onChange === "function") {
          setInnerValue(newValue);
          onChange(newValue);
        } else setInnerValue(newValue);
      } else if (onChange !== null || onChange !== undefined)
        typeof onChange === "function" ? onChange(newValue) : setInnerValue(newValue);
    };

    const handleIOnChange = (event) => {
      if (suggestions) {
        changeIsError(false);
        changeIsOpen(true);
      }
      changeValue(event.target.value);
    };
    const handleIOnClick = () => {
      suggestions && changeIsOpen(true);
    };
    const handleIOnBlur = (event) => {
      suggestions && closeSuggestions();
      onBlur?.(event.target.value);
    };
    const handleIOnFocus = () => {
      suggestions && changeIsOpen(true);
    };
    const handleIOnKeyDown = (event) => {
      switch (event.keyCode) {
        case 40: // Arrow Down
          event.preventDefault();
          if (!isError && !isSearching && filteredSuggestions.length > 0) {
            changeVisualFocusedSuggIndex((visualFocusedSuggIndex) => {
              if (visualFocusedSuggIndex < filteredSuggestions.length - 1) return visualFocusedSuggIndex + 1;
              else if (visualFocusedSuggIndex === filteredSuggestions.length - 1) return 0;
            });
            changeIsOpen(true);
            changeIsScrollable(true);
            changeIsActiveSuggestion(false);
          }
          break;
        case 38: // Arrow Up
          event.preventDefault();
          if (!isError && !isSearching && filteredSuggestions.length > 0) {
            changeVisualFocusedSuggIndex((visualFocusedSuggIndex) => {
              if (visualFocusedSuggIndex === 0 || visualFocusedSuggIndex === -1)
                return filteredSuggestions.length > 0 ? filteredSuggestions.length - 1 : suggestions.length - 1;
              else return visualFocusedSuggIndex - 1;
            });
            changeIsOpen(true);
            changeIsScrollable(true);
            changeIsActiveSuggestion(false);
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
          if (!isError && !isSearching) {
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

    useLayoutEffect(() => {
      isScrollable && suggestionsRef.current?.scrollTo({ top: visualFocusedSuggIndex * 39 });
      return changeIsScrollable(false);
    }, [isScrollable, suggestionsRef, visualFocusedSuggIndex]);

    useEffect(() => {
      if (typeof suggestions === "function") {
        changeIsSearching(true);
        changeIsError(false);
        changeFilteredSuggestions([]);

        const cancelablePromise = makeCancelable(suggestions(value ?? innerValue));
        cancelablePromise.promise
          .then((promiseResponse) => {
            changeIsSearching(false);
            changeIsError(false);
            changeFilteredSuggestions(promiseResponse);
          })
          .catch((err) => {
            if (!err.isCanceled) {
              changeIsSearching(false);
              changeIsError(true);
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
    }, [value, innerValue, suggestions]);

    const defaultClearAction = {
      onClick: () => {
        changeValue("");
        inputRef.current.focus();
        if (suggestions) {
          changeIsError(false);
          closeSuggestions();
        }
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      ),
    };
    const errorIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    );

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
        <DxcInput margin={margin} ref={ref}>
          <Label htmlFor={inputId} disabled={disabled}>
            {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
          </Label>
          <HelperText disabled={disabled}>{helperText}</HelperText>
          <InputContainer error={error} disabled={disabled}>
            {prefix && (
              <Prefix>
                {typeof prefix === "object" || typeof prefix === "string" ? prefix : React.createElement(prefix)}
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
            />
            {error && <ErrorIcon>{errorIcon}</ErrorIcon>}
            {!disabled && clearable && (value ?? innerValue).length > 0 && (
              <Action onClick={defaultClearAction.onClick}>{defaultClearAction.icon}</Action>
            )}
            {!disabled && action && <Action onClick={action.onClick}>{action.icon}</Action>}
            {suffix && (
              <Suffix>
                {typeof suffix === "object" || typeof suffix === "string" ? suffix : React.createElement(suffix)}
              </Suffix>
            )}
            {suggestions && suggestions.length > 0 && isOpen && (
              <Suggestions
                id={autosuggestId}
                isError={isError}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onMouseLeave={() => {
                  changeVisualFocusedSuggIndex(-1);
                }}
                ref={suggestionsRef}
              >
                {!isSearching && !isError && filteredSuggestions.length === 0 && (
                  <SuggestionsSystemMessage>No results found.</SuggestionsSystemMessage>
                )}
                {!isSearching &&
                  !isError &&
                  filteredSuggestions.length > 0 &&
                  filteredSuggestions.map((suggestion, index) => (
                    <HighlightedSuggestion key={`suggestion-${uuidv4()}`} suggestion={suggestion} index={index} />
                  ))}
                {isSearching && <SuggestionsSystemMessage>Searching...</SuggestionsSystemMessage>}
                {isError && (
                  <SuggestionsError>
                    <ErrorIcon>{errorIcon}</ErrorIcon>
                    Error fetching data.
                  </SuggestionsError>
                )}
              </Suggestions>
            )}
          </InputContainer>
          {error && <Error>{error}</Error>}
        </DxcInput>
      </ThemeProvider>
    );
  }
);

// const sizes = {
//   small: "42px",
//   medium: "240px",
//   large: "480px",
//   fillParent: "100%",
// };

const DxcInput = styled.div`
  display: flex;
  flex-direction: column;

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
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
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
  color: ${(props) => (props.disabled ? props.theme.disabledHelperTextFontColor : props.theme.helperTextFontColor)};
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
  border: ${(props) =>
    props.error
      ? `1px solid ${props.theme.errorOutlineColor}`
      : props.disabled
      ? `1px solid ${props.theme.disabledOutlineColor}`
      : `1px solid ${props.theme.enabledOutlineColor}`};
  ${(props) => props.disabled && `background-color: ${props.theme.disabledContainerFillColor};`}
  ${(props) => props.error && `box-shadow: inset 0 0 0 1px ${props.theme.errorOutlineColor};`}
  border-radius: 4px;
  margin: calc(1rem * 0.25) 0;
  padding: 0 calc(1rem * 0.5);

  ${(props) =>
    !props.disabled &&
    `&:hover {
        border-color: #a46ede;
        box-shadow: none;
      }
      &:focus-within {
        border: 1px solid #a46ede;
        box-shadow: inset 0 0 0 1px #a46ede;
      }`};
`;

const Input = styled.input`
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 calc(1rem * 0.5);
  color: ${(props) => props.theme.valueFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  ${(props) => props.disabled && `cursor: not-allowed;`}

  ::placeholder {
    color: ${(props) => (props.disabled ? props.theme.disabledPlaceholderFontColor : props.theme.placeholderFontColor)};
  }
`;

const Action = styled.button`
  height: calc(calc(1rem * 1.5) - calc(1px * 2));
  width: calc(calc(1rem * 1.5) - calc(1px * 2));
  margin: 0 calc(1rem * 0.25) 0 calc(1rem * 0.25);
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 4px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  padding: 0;

  &:hover {
    background-color: #f2f2f2;
  }
  &:focus {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
    outline: none;
  }
  &:focus-visible {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
    outline: none;
  }
  &:active {
    border: 1px solid #a46ede;
    box-shadow: inset 0 0 0 1px #a46ede;
    outline: none;
    background-color: #d9d9d9;
  }
  svg {
    line-height: 18px;
    width: 100%;
    height: 100%;
  }
`;

const ErrorIcon = styled.span`
  color: ${(props) => props.theme.errorIconColor};
  height: calc(24px - (1px * 2));
  width: calc(24px - (1px * 2));
  margin-right: calc(1rem * 0.5);
  display: flex;
  align-content: center;
  justify-content: center;
  pointer-events: none;

  svg {
    font-size: 1.25rem;
    line-height: 22px;
  }
`;

const Prefix = styled.span`
  height: calc(1rem * 1.5);
  border-right: 1px solid #999999;
  line-height: calc(1rem * 1.5);
  padding: 0 calc(1rem * 0.5) 0 0;
  color: #666666;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  pointer-events: none;
`;

const Suffix = styled.span`
  height: calc(1rem * 1.5);
  border-left: 1px solid #999999;
  line-height: calc(1rem * 1.5);
  margin-left: calc(1rem * 0.25);
  padding: 0 0 0 calc(1rem * 0.5);
  color: #666666;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  pointer-events: none;
`;

const Error = styled.span`
  color: ${(props) => props.theme.errorMessageColor};
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
  border: 1px solid
    ${(props) => (props.isError ? props.theme.errorMessageBorderColor : props.theme.enabledOutlineColor)};
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
  font-size: ${(props) => props.theme.systemMessageFontSize};
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
  prefix: PropTypes.string,
  suffix: PropTypes.string,
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
  // size: PropTypes.oneOf([...Object.keys(sizes)]),
  suggestions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  // tabIndex: PropTypes.number,
};

export default DxcNewInputText;
