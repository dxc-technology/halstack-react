import * as Popover from "@radix-ui/react-popover";
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  WheelEvent,
} from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcActionIcon from "../action-icon/ActionIcon";
import { spaces } from "../common/variables";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import NumberInputContext from "../number-input/NumberInputContext";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";
import useWidth from "../utils/useWidth";
import Suggestions from "./Suggestions";
import TextInputPropsType, { AutosuggestWrapperProps, RefType } from "./types";
import {
  calculateWidth,
  hasSuggestions,
  isLengthIncorrect,
  isNumberIncorrect,
  isRequired,
  makeCancelable,
  patternMismatch,
} from "./utils";

const TextInputContainer = styled.div<{
  margin: TextInputPropsType["margin"];
  size: TextInputPropsType["size"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  ${(props) => props.size !== "fillParent" && `min-width:${calculateWidth(props.margin, props.size)}`};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  font-family: ${(props) => props.theme.fontFamily};
`;

const Label = styled.label<{
  disabled: TextInputPropsType["disabled"];
  hasHelperText: boolean;
}>`
  color: ${(props) => (props.disabled ? props.theme.disabledLabelFontColor : props.theme.labelFontColor)};
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

  ${(props) => props.disabled && `background-color: ${props.theme.disabledContainerFillColor};`}
  box-shadow: 0 0 0 2px transparent;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.disabled
        ? props.theme.disabledBorderColor
        : props.readOnly
          ? props.theme.readOnlyBorderColor
          : props.theme.enabledBorderColor};
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
  margin-left: 0.25rem;
  padding-right: ${(props) => props.theme.prefixDividerPaddingRight};
  ${(props) => {
    const color = props.disabled ? props.theme.disabledPrefixColor : props.theme.prefixColor;
    return `color: ${color}; border-right: ${props.theme.prefixDividerBorderWidth} ${props.theme.prefixDividerBorderStyle} ${color};`;
  }};
  font-size: 1rem;
  line-height: 1.5rem;
  pointer-events: none;
`;

const Suffix = styled.span<{ disabled: TextInputPropsType["disabled"] }>`
  height: 1.5rem;
  margin: 0 0.25rem;
  padding-left: ${(props) => props.theme.suffixDividerPaddingLeft};
  ${(props) => {
    const color = props.disabled ? props.theme.disabledSuffixColor : props.theme.suffixColor;
    return `color: ${color}; border-left: ${props.theme.suffixDividerBorderWidth} ${props.theme.suffixDividerBorderStyle} ${color};`;
  }};
  font-size: 1rem;
  line-height: 1.5rem;
  pointer-events: none;
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  font-size: 18px;
  color: ${(props) => props.theme.errorIconColor};
`;

const ErrorMessageContainer = styled.span`
  min-height: 1.5em;
  color: ${(props) => props.theme.errorMessageColor};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  margin-top: 0.25rem;
`;

const AutosuggestWrapper = ({ condition, wrapper, children }: AutosuggestWrapperProps): JSX.Element => (
  <>{condition ? wrapper(children) : children}</>
);

const DxcTextInput = forwardRef<RefType, TextInputPropsType>(
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
      ariaLabel = "Text input",
    },
    ref
  ): JSX.Element => {
    const inputId = `input-${useId()}`;
    const autosuggestId = `suggestions-${inputId}`;
    const errorId = `error-${inputId}`;

    const colorsTheme = useContext(HalstackContext);
    const translatedLabels = useContext(HalstackLanguageContext);
    const numberInputContext = useContext(NumberInputContext);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputContainerRef = useRef<HTMLDivElement | null>(null);
    const actionRef = useRef<HTMLButtonElement | null>(null);

    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, changeIsOpen] = useState(false);
    const [isSearching, changeIsSearching] = useState(false);
    const [isAutosuggestError, changeIsAutosuggestError] = useState(false);
    const [filteredSuggestions, changeFilteredSuggestions] = useState<string[]>([]);
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);

    const width = useWidth(inputContainerRef.current);

    const getNumberErrorMessage = (checkedValue: number) =>
      numberInputContext?.minNumber != null && checkedValue < numberInputContext?.minNumber
        ? translatedLabels.numberInput.valueGreaterThanOrEqualToErrorMessage?.(numberInputContext.minNumber)
        : numberInputContext?.maxNumber != null && checkedValue > numberInputContext?.maxNumber
          ? translatedLabels.numberInput.valueLessThanOrEqualToErrorMessage?.(numberInputContext.maxNumber)
          : undefined;

    const openSuggestions = () => {
      if (hasSuggestions(suggestions)) {
        changeIsOpen(true);
      }
    };

    const closeSuggestions = () => {
      if (hasSuggestions(suggestions)) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const changeValue = (newValue: number | string) => {
      const formattedValue = typeof newValue === "number" ? newValue.toString() : newValue;
      if (value == null) {
        setInnerValue(formattedValue);
      }

      if (isRequired(formattedValue, optional)) {
        onChange?.({
          value: formattedValue,
          error: translatedLabels.formFields.requiredValueErrorMessage,
        });
      } else if (isLengthIncorrect(formattedValue, minLength, maxLength)) {
        onChange?.({
          value: formattedValue,
          error: translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength),
        });
      } else if (patternMismatch(pattern, formattedValue)) {
        onChange?.({ value: formattedValue, error: translatedLabels.formFields.formatRequestedErrorMessage });
      } else if (
        numberInputContext?.typeNumber === "number" &&
        isNumberIncorrect(Number(newValue), numberInputContext?.minNumber, numberInputContext?.maxNumber)
      ) {
        onChange?.({ value: formattedValue, error: getNumberErrorMessage(Number(newValue)) });
      } else {
        onChange?.({ value: formattedValue });
      }
    };

    const decrementNumber = (currentValue = value ?? innerValue) => {
      if (!disabled && !readOnly) {
        const numberValue = Number(currentValue);
        const steppedValue =
          Math.round((numberValue - (numberInputContext?.stepNumber ?? 0) + Number.EPSILON) * 100) / 100;

        if (currentValue !== "") {
          if (
            numberInputContext?.minNumber != null &&
            (numberValue < numberInputContext?.minNumber || steppedValue < numberInputContext?.minNumber)
          ) {
            changeValue(numberValue);
          } else if (numberInputContext?.maxNumber != null && numberValue > numberInputContext?.maxNumber) {
            changeValue(numberInputContext?.maxNumber);
          } else if (numberValue === numberInputContext?.minNumber) {
            changeValue(numberInputContext?.minNumber);
          } else {
            changeValue(steppedValue);
          }
        } else if (numberInputContext?.minNumber != null && numberInputContext?.minNumber >= 0) {
          changeValue(numberInputContext?.minNumber);
        } else if (numberInputContext?.maxNumber != null && numberInputContext?.maxNumber < 0) {
          changeValue(numberInputContext?.maxNumber);
        } else if (numberInputContext?.stepNumber != null) {
          changeValue(-numberInputContext.stepNumber);
        }
      }
    };

    const incrementNumber = (currentValue = value ?? innerValue) => {
      if (!disabled && !readOnly) {
        const numberValue = Number(currentValue);
        const steppedValue =
          Math.round((numberValue + (numberInputContext?.stepNumber ?? 0) + Number.EPSILON) * 100) / 100;

        if (currentValue !== "") {
          if (
            numberInputContext?.maxNumber != null &&
            (numberValue > numberInputContext?.maxNumber || steppedValue > numberInputContext?.maxNumber)
          ) {
            changeValue(numberValue);
          } else if (numberInputContext?.minNumber != null && numberValue < numberInputContext?.minNumber) {
            changeValue(numberInputContext?.minNumber);
          } else if (numberValue === numberInputContext?.maxNumber) {
            changeValue(numberInputContext?.maxNumber);
          } else {
            changeValue(steppedValue);
          }
        } else if (numberInputContext?.minNumber != null && numberInputContext?.minNumber > 0) {
          changeValue(numberInputContext?.minNumber);
        } else if (numberInputContext?.maxNumber != null && numberInputContext?.maxNumber <= 0) {
          changeValue(numberInputContext?.maxNumber);
        } else if (numberInputContext?.stepNumber != null) {
          changeValue(numberInputContext.stepNumber);
        }
      }
    };

    const handleInputContainerOnClick = () => {
      if (document.activeElement !== actionRef.current) {
        inputRef.current?.focus();
      }
    };
    const handleInputContainerOnMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      // Avoid input to lose the focus when the container is pressed
      if (document.activeElement === inputRef.current) {
        event.preventDefault();
      }
    };

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      openSuggestions();
      changeValue(event.target.value);
    };
    const handleInputOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      closeSuggestions();

      if (isRequired(event.target.value, optional)) {
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.requiredValueErrorMessage });
      } else if (isLengthIncorrect(event.target.value, minLength, maxLength)) {
        onBlur?.({
          value: event.target.value,
          error: translatedLabels.formFields.lengthErrorMessage?.(minLength, maxLength),
        });
      } else if (patternMismatch(pattern, event.target.value)) {
        onBlur?.({ value: event.target.value, error: translatedLabels.formFields.formatRequestedErrorMessage });
      } else if (
        numberInputContext?.typeNumber === "number" &&
        isNumberIncorrect(Number(event.target.value), numberInputContext?.minNumber, numberInputContext?.maxNumber)
      ) {
        onBlur?.({ value: event.target.value, error: getNumberErrorMessage(Number(event.target.value)) });
      } else {
        onBlur?.({ value: event.target.value });
      }
    };
    const handleInputOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          if (numberInputContext?.typeNumber === "number") {
            decrementNumber();
          } else {
            openSuggestions();
            if (!isAutosuggestError && !isSearching && filteredSuggestions.length > 0) {
              changeVisualFocusIndex((visualFocusedSuggestionIndex: number) =>
                visualFocusedSuggestionIndex < filteredSuggestions.length - 1
                  ? visualFocusedSuggestionIndex + 1
                  : visualFocusedSuggestionIndex === filteredSuggestions.length - 1
                    ? 0
                    : -1
              );
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
              changeVisualFocusIndex((visualFocusedSuggestionIndex) =>
                visualFocusedSuggestionIndex === 0 || visualFocusedSuggestionIndex === -1
                  ? filteredSuggestions.length > 0
                    ? filteredSuggestions.length - 1
                    : (suggestions?.length ?? 0) - 1
                  : visualFocusedSuggestionIndex - 1
              );
            }
          }
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          if (isOpen) {
            event.stopPropagation();
          }
          if (hasSuggestions(suggestions)) {
            changeValue("");
            if (isOpen) {
              closeSuggestions();
            }
          }
          break;
        case "Enter":
          if (hasSuggestions(suggestions) && !isSearching) {
            const validFocusedSuggestion =
              filteredSuggestions.length > 0 && visualFocusIndex >= 0 && visualFocusIndex < filteredSuggestions.length;
            if (validFocusedSuggestion && filteredSuggestions[visualFocusIndex] != null) {
              changeValue(filteredSuggestions[visualFocusIndex]);
            }
            if (isOpen) {
              closeSuggestions();
            }
          }
          break;
        default:
          break;
      }
    };
    const handleNumberInputWheel = (event: WheelEvent<HTMLInputElement>) => {
      if (document.activeElement === inputRef.current) {
        if (event.deltaY < 0) {
          incrementNumber(inputRef.current?.value);
        } else {
          decrementNumber(inputRef.current?.value);
        }
      }
    };

    const handleClearActionOnClick = () => {
      changeValue("");
      inputRef.current?.focus();
      if (suggestions) {
        closeSuggestions();
      }
    };

    const handleDecrementActionOnClick = () => {
      decrementNumber();
      inputRef.current?.focus();
    };
    const handleIncrementActionOnClick = () => {
      incrementNumber();
      inputRef.current?.focus();
    };

    const setNumberProps = (type?: string, min?: number, max?: number, step?: number) => {
      if (min != null) {
        inputRef.current?.setAttribute("min", min.toString());
      }
      if (max != null) {
        inputRef.current?.setAttribute("max", max.toString());
      }
      if (step != null) {
        inputRef.current?.setAttribute("step", step.toString());
      }
      if (type != null) {
        inputRef.current?.setAttribute("type", type);
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
            if (err.message !== "Is canceled") {
              changeIsSearching(false);
              changeIsAutosuggestError(true);
            }
          });

        return () => {
          cancelablePromise.cancel();
        };
      }
      if (suggestions && suggestions.length > 0) {
        changeFilteredSuggestions(
          suggestions.filter((suggestion) => suggestion.toUpperCase().startsWith((value ?? innerValue).toUpperCase()))
        );
        changeVisualFocusIndex(-1);
      }
      if (numberInputContext != null) {
        setNumberProps(
          numberInputContext.typeNumber,
          numberInputContext.minNumber,
          numberInputContext.maxNumber,
          numberInputContext.stepNumber
        );
      }
      return undefined;
    }, [value, innerValue, suggestions, numberInputContext]);

    return (
      <ThemeProvider theme={colorsTheme.textInput}>
        <TextInputContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label htmlFor={inputId} disabled={disabled} hasHelperText={!!helperText}>
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <AutosuggestWrapper
            condition={hasSuggestions(suggestions)}
            wrapper={(children) => (
              <Popover.Root open={isOpen && (filteredSuggestions.length > 0 || isSearching || isAutosuggestError)}>
                <Popover.Trigger
                  asChild
                  type={undefined}
                  aria-controls={undefined}
                  aria-haspopup={undefined}
                  aria-expanded={undefined}
                >
                  {children}
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    sideOffset={5}
                    style={{ zIndex: "320" }}
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
              error={!!error}
              disabled={disabled}
              readOnly={readOnly}
              onClick={handleInputContainerOnClick}
              onMouseDown={handleInputContainerOnMouseDown}
              ref={inputContainerRef}
            >
              {prefix && <Prefix disabled={disabled}>{prefix}</Prefix>}
              <DxcFlex gap="0.25rem" alignItems="center" grow={1}>
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
                  onWheel={numberInputContext?.typeNumber === "number" ? handleNumberInputWheel : undefined}
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
                  aria-invalid={!!error}
                  aria-errormessage={error ? errorId : undefined}
                  aria-required={!disabled && !optional}
                  aria-label={label ? undefined : ariaLabel}
                />
                {!disabled && error && (
                  <ErrorIcon aria-hidden="true">
                    <DxcIcon icon="filled_error" />
                  </ErrorIcon>
                )}
                {!disabled && !readOnly && clearable && (value ?? innerValue).length > 0 && (
                  <DxcActionIcon
                    onClick={handleClearActionOnClick}
                    icon="close"
                    tabIndex={tabIndex}
                    title={translatedLabels.textInput.clearFieldActionTitle}
                  />
                )}
                {numberInputContext?.typeNumber === "number" && numberInputContext?.showControls && (
                  <>
                    <DxcActionIcon
                      onClick={!readOnly ? handleDecrementActionOnClick : undefined}
                      icon="remove"
                      tabIndex={tabIndex}
                      ref={actionRef}
                      title={translatedLabels.numberInput.decrementValueTitle}
                      disabled={disabled}
                    />
                    <DxcActionIcon
                      onClick={!readOnly ? handleIncrementActionOnClick : undefined}
                      icon="add"
                      tabIndex={tabIndex}
                      ref={actionRef}
                      title={translatedLabels.numberInput.incrementValueTitle}
                      disabled={disabled}
                    />
                  </>
                )}
                {action && (
                  <DxcActionIcon
                    onClick={!readOnly ? action.onClick : undefined}
                    icon={action.icon}
                    tabIndex={tabIndex}
                    ref={actionRef}
                    title={action.title ?? ""}
                    disabled={disabled}
                  />
                )}
              </DxcFlex>
              {suffix && <Suffix disabled={disabled}>{suffix}</Suffix>}
            </InputContainer>
          </AutosuggestWrapper>
          {!disabled && typeof error === "string" && (
            <ErrorMessageContainer id={errorId} role="alert" aria-live={error ? "assertive" : "off"}>
              {error}
            </ErrorMessageContainer>
          )}
        </TextInputContainer>
      </ThemeProvider>
    );
  }
);

export default DxcTextInput;
