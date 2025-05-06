import * as Popover from "@radix-ui/react-popover";
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  WheelEvent,
} from "react";
import styled from "styled-components";
import DxcActionIcon from "../action-icon/ActionIcon";
import { spaces } from "../common/variables";
import DxcFlex from "../flex/Flex";
import NumberInputContext from "../number-input/NumberInputContext";
import { HalstackLanguageContext } from "../HalstackContext";
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
import HelperText from "../styles/forms/HelperText";
import Label from "../styles/forms/Label";
import ErrorMessage from "../styles/forms/ErrorMessage";
import inputStylesByState from "../styles/forms/inputStylesByState";

const TextInputContainer = styled.div<{
  margin: TextInputPropsType["margin"];
  size: TextInputPropsType["size"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${({ margin, size }) => calculateWidth(margin, size)};
  ${({ margin, size }) => size !== "fillParent" && `min-width:${calculateWidth(margin, size)}`};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const TextInput = styled.div<{
  disabled: Required<TextInputPropsType>["disabled"];
  error: boolean;
  readOnly: Required<TextInputPropsType>["readOnly"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  ${({ disabled, error, readOnly }) => inputStylesByState(disabled, error, readOnly)}
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  flex-grow: 1;
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ::placeholder {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-strong)")};
  }
  ${({ disabled }) => disabled && "cursor: not-allowed;"}
`;

const Addon = styled.span<{ disabled: TextInputPropsType["disabled"]; type: "prefix" | "suffix" }>`
  ${({ disabled, type }) => {
    const color = disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)";
    return `color: ${color}; border-${type === "prefix" ? "right" : "left"}: var(--border-width-s) var(--border-style-default) ${color};`;
  }};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  ${({ type }) => `padding-${type === "prefix" ? "right" : "left"}: var(--spacing-padding-xs);`}
  pointer-events: none;
`;

const AutosuggestWrapper = ({ condition, wrapper, children }: AutosuggestWrapperProps): JSX.Element => (
  <>{condition ? wrapper(children) : children}</>
);

const DxcTextInput = forwardRef<RefType, TextInputPropsType>(
  (
    {
      action,
      ariaLabel = "Text input",
      autocomplete = "off",
      clearable = false,
      defaultValue = "",
      disabled = false,
      error,
      helperText,
      label,
      margin,
      maxLength,
      minLength,
      name = "",
      optional = false,
      placeholder = "",
      prefix = "",
      readOnly = false,
      suffix = "",
      onBlur,
      onChange,
      pattern,
      size = "medium",
      suggestions,
      tabIndex = 0,
      value,
    },
    ref
  ) => {
    const inputId = `input-${useId()}`;
    const autosuggestId = `suggestions-${inputId}`;
    const errorId = `error-${inputId}`;
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

    const autosuggestWrapperFunction = (children: ReactNode) => (
      <Popover.Root open={isOpen && (filteredSuggestions.length > 0 || isSearching || isAutosuggestError)}>
        <Popover.Trigger
          aria-controls={undefined}
          aria-expanded={undefined}
          aria-haspopup={undefined}
          asChild
          type={undefined}
        >
          {children}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            onCloseAutoFocus={(event) => {
              // Avoid select to lose focus when the list is closed
              event.preventDefault();
            }}
            onOpenAutoFocus={(event) => {
              // Avoid select to lose focus when the list is opened
              event.preventDefault();
            }}
            sideOffset={4}
            style={{ zIndex: "2147483647" }}
          >
            <Suggestions
              highlightedSuggestions={typeof suggestions !== "function"}
              id={autosuggestId}
              isSearching={isSearching}
              searchHasErrors={isAutosuggestError}
              suggestionOnClick={(suggestion) => {
                changeValue(suggestion);
                closeSuggestions();
              }}
              suggestions={filteredSuggestions}
              styles={{ width }}
              value={value ?? innerValue}
              visualFocusIndex={visualFocusIndex}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );

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
      if (min != null) inputRef.current?.setAttribute("min", min.toString());
      if (max != null) inputRef.current?.setAttribute("max", max.toString());
      if (step != null) inputRef.current?.setAttribute("step", step.toString());
      if (type != null) inputRef.current?.setAttribute("type", type);
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
    }, [value, innerValue, suggestions, numberInputContext]);

    return (
      <TextInputContainer margin={margin} ref={ref} size={size}>
        {label && (
          <Label disabled={disabled} hasMargin={!helperText} htmlFor={inputId}>
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
          </Label>
        )}
        {helperText && (
          <HelperText disabled={disabled} hasMargin>
            {helperText}
          </HelperText>
        )}
        <AutosuggestWrapper condition={hasSuggestions(suggestions)} wrapper={autosuggestWrapperFunction}>
          <TextInput
            disabled={disabled}
            error={!!error}
            onClick={handleInputContainerOnClick}
            onMouseDown={handleInputContainerOnMouseDown}
            readOnly={readOnly}
            ref={inputContainerRef}
          >
            {prefix && (
              <Addon disabled={disabled} type="prefix">
                {prefix}
              </Addon>
            )}
            <Input
              aria-activedescendant={
                hasSuggestions(suggestions) && isOpen && visualFocusIndex !== -1
                  ? `suggestion-${visualFocusIndex}`
                  : undefined
              }
              aria-autocomplete={hasSuggestions(suggestions) ? "list" : undefined}
              aria-controls={hasSuggestions(suggestions) ? autosuggestId : undefined}
              aria-errormessage={error ? errorId : undefined}
              aria-expanded={hasSuggestions(suggestions) ? isOpen : undefined}
              aria-haspopup={hasSuggestions(suggestions) ? "listbox" : undefined}
              aria-invalid={!!error}
              aria-label={label ? undefined : ariaLabel}
              aria-required={!disabled && !optional}
              autoComplete={autocomplete === "off" ? "nope" : autocomplete}
              disabled={disabled}
              id={inputId}
              name={name}
              onBlur={handleInputOnBlur}
              onChange={handleInputOnChange}
              onFocus={!readOnly ? openSuggestions : undefined}
              onKeyDown={!readOnly ? handleInputOnKeyDown : undefined}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onWheel={numberInputContext?.typeNumber === "number" ? handleNumberInputWheel : undefined}
              placeholder={placeholder}
              pattern={pattern}
              readOnly={readOnly}
              ref={inputRef}
              role={hasSuggestions(suggestions) ? "combobox" : undefined}
              maxLength={maxLength}
              minLength={minLength}
              tabIndex={tabIndex}
              type="text"
              value={value ?? innerValue}
            />
            <DxcFlex>
              {!disabled && !readOnly && clearable && (value ?? innerValue).length > 0 && (
                <DxcActionIcon
                  icon="close"
                  onClick={handleClearActionOnClick}
                  tabIndex={tabIndex}
                  title={translatedLabels.textInput.clearFieldActionTitle}
                />
              )}
              {numberInputContext?.typeNumber === "number" && numberInputContext?.showControls && (
                <>
                  <DxcActionIcon
                    disabled={disabled}
                    icon="remove"
                    onClick={!readOnly ? handleDecrementActionOnClick : undefined}
                    ref={actionRef}
                    tabIndex={tabIndex}
                    title={translatedLabels.numberInput.decrementValueTitle}
                  />
                  <DxcActionIcon
                    disabled={disabled}
                    icon="add"
                    onClick={!readOnly ? handleIncrementActionOnClick : undefined}
                    ref={actionRef}
                    tabIndex={tabIndex}
                    title={translatedLabels.numberInput.incrementValueTitle}
                  />
                </>
              )}
              {action && (
                <DxcActionIcon
                  disabled={disabled}
                  icon={action.icon}
                  onClick={!readOnly ? action.onClick : undefined}
                  ref={actionRef}
                  tabIndex={tabIndex}
                  title={action.title ?? ""}
                />
              )}
            </DxcFlex>
            {suffix && (
              <Addon disabled={disabled} type="suffix">
                {suffix}
              </Addon>
            )}
          </TextInput>
        </AutosuggestWrapper>
        {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
      </TextInputContainer>
    );
  }
);

DxcTextInput.displayName = "DxcTextInput";

export default DxcTextInput;
