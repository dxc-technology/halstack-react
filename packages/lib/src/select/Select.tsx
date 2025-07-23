import * as Popover from "@radix-ui/react-popover";
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import DxcIcon from "../icon/Icon";
import { Tooltip, TooltipWrapper } from "../tooltip/Tooltip";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";
import useWidth from "../utils/useWidth";
import Listbox from "./Listbox";
import {
  canOpenOptions,
  filterOptionsBySearchValue,
  getLastOptionIndex,
  getSelectedOption,
  getSelectedOptionLabel,
  groupsHaveOptions,
  isArrayOfOptionGroups,
  notOptionalCheck,
} from "./utils";
import SelectPropsType, { ListOptionType, RefType } from "./types";

const DxcSelect = forwardRef<RefType, SelectPropsType>(
  (
    {
      label,
      name = "",
      defaultValue,
      value,
      options,
      helperText,
      placeholder = "",
      disabled = false,
      multiple = false,
      optional = false,
      searchable = false,
      onChange,
      onBlur,
      error,
      margin,
      size = "medium",
      tabIndex = 0,
      ariaLabel = "Select",
    },
    ref
  ): JSX.Element => {
    const selectId = `select-${useId()}`;
    const selectLabelId = `label-${selectId}`;
    const errorId = `error-${selectId}`;
    const listboxId = `${selectId}-listbox`;
    const [innerValue, setInnerValue] = useState(defaultValue ?? (multiple ? [] : ""));
    const [searchValue, setSearchValue] = useState("");
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);
    const [isOpen, changeIsOpen] = useState(false);
    const [hasTooltip, setHasTooltip] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);
    const selectSearchInputRef = useRef<HTMLInputElement | null>(null);

    const width = useWidth(selectRef.current);
    const colorsTheme = useContext(HalstackContext);
    const translatedLabels = useContext(HalstackLanguageContext);

    const optionalItem = { label: placeholder, value: "" };
    const filteredOptions = useMemo(() => filterOptionsBySearchValue(options, searchValue), [options, searchValue]);
    const lastOptionIndex = useMemo(
      () => getLastOptionIndex(options, filteredOptions, searchable, optional, multiple),
      [options, filteredOptions, searchable, optional, multiple]
    );
    const { selectedOption, singleSelectionIndex } = useMemo(
      () => getSelectedOption(value ?? innerValue, options, multiple, optional, optionalItem),
      [value, innerValue, options, multiple, optional, optionalItem]
    );

    const openListbox = () => {
      if (!isOpen && canOpenOptions(options, disabled)) {
        changeIsOpen(true);
      }
    };
    const closeListbox = () => {
      if (isOpen) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const handleSelectChangeValue = useCallback(
      (newOption: ListOptionType | undefined) => {
        if (newOption) {
          let newValue: string | string[];

          if (multiple) {
            const currentValue = (value ?? innerValue) as string[];
            newValue = currentValue.includes(newOption.value)
              ? currentValue.filter((optionVal) => optionVal !== newOption.value)
              : [...currentValue, newOption.value];
          } else newValue = newOption.value;

          if (value == null) {
            setInnerValue(newValue);
          }
          onChange?.({
            value: newValue as string & string[],
            error: notOptionalCheck(newValue, multiple, optional)
              ? translatedLabels.formFields.requiredValueErrorMessage
              : undefined,
          });
        }
      },
      [multiple, value, innerValue, onChange, optional, translatedLabels]
    );

    const handleSelectOnClick = () => {
      if (searchable) {
        selectSearchInputRef?.current?.focus();
      }
      if (isOpen) {
        closeListbox();
        setSearchValue("");
      } else {
        openListbox();
      }
    };
    const handleSelectOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget) && searchable) {
        selectSearchInputRef?.current?.focus();
      }
    };
    const handleSelectOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        closeListbox();
        setSearchValue("");

        const currentValue = value ?? innerValue;
        if (notOptionalCheck(currentValue, multiple, optional)) {
          onBlur?.({
            value: currentValue as string & string[],
            error: translatedLabels.formFields.requiredValueErrorMessage,
          });
        } else {
          onBlur?.({ value: currentValue as string & string[] });
        }
      }
    };
    const handleSelectOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          if (
            singleSelectionIndex != null &&
            (!isOpen ||
              (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
          ) {
            changeVisualFocusIndex(singleSelectionIndex);
          } else {
            changeVisualFocusIndex((currentVisualFocusIndex) => {
              if (currentVisualFocusIndex < lastOptionIndex) {
                return currentVisualFocusIndex + 1;
              }
              return 0;
            });
          }
          openListbox();
          break;
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          if (
            singleSelectionIndex != null &&
            (!isOpen ||
              (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
          ) {
            changeVisualFocusIndex(singleSelectionIndex);
          } else {
            changeVisualFocusIndex((currentVisualFocusIndex) =>
              currentVisualFocusIndex === 0 || currentVisualFocusIndex === -1
                ? lastOptionIndex
                : currentVisualFocusIndex - 1
            );
          }
          openListbox();
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          if (isOpen) {
            event.stopPropagation();
          }
          closeListbox();
          setSearchValue("");
          break;
        case "Enter":
          if (isOpen && visualFocusIndex >= 0) {
            let accLength = optional && !multiple ? 1 : 0;
            if (searchable) {
              if (filteredOptions.length > 0) {
                if (optional && !multiple && visualFocusIndex === 0 && groupsHaveOptions(filteredOptions)) {
                  handleSelectChangeValue(optionalItem);
                } else if (isArrayOfOptionGroups(filteredOptions)) {
                  if (groupsHaveOptions(filteredOptions)) {
                    filteredOptions.some((groupOption) => {
                      const groupLength = accLength + groupOption.options.length;
                      if (groupLength > visualFocusIndex) {
                        handleSelectChangeValue(groupOption.options[visualFocusIndex - accLength]);
                      }
                      accLength = groupLength;
                      return groupLength > visualFocusIndex;
                    });
                  }
                } else {
                  handleSelectChangeValue(filteredOptions[visualFocusIndex - accLength]);
                }
              }
            } else if (optional && !multiple && visualFocusIndex === 0) {
              handleSelectChangeValue(optionalItem);
            } else if (isArrayOfOptionGroups(options)) {
              options.some((groupOption) => {
                const groupLength = accLength + groupOption.options.length;
                if (groupLength > visualFocusIndex) {
                  handleSelectChangeValue(groupOption.options[visualFocusIndex - accLength]);
                }
                accLength = groupLength;
                return groupLength > visualFocusIndex;
              });
            } else {
              handleSelectChangeValue(options[visualFocusIndex - accLength]);
            }
            if (!multiple) {
              closeListbox();
            }
            setSearchValue("");
          }
          break;
        default:
          break;
      }
    };

    const handleSearchIOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
      changeVisualFocusIndex(-1);
      openListbox();
    };

    const handleClearOptionsActionOnClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (value == null) {
        setInnerValue([]);
      }
      if (!optional) {
        onChange?.({
          value: [] as string[] as string & string[],
          error: translatedLabels.formFields.requiredValueErrorMessage,
        });
      } else {
        onChange?.({ value: [] as string[] as string & string[] });
      }
    };

    const handleClearSearchActionOnClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setSearchValue("");
    };

    const handleOptionOnClick = useCallback(
      (option: ListOptionType) => {
        handleSelectChangeValue(option);
        if (!multiple) {
          closeListbox();
        }
        setSearchValue("");
      },
      [handleSelectChangeValue, closeListbox, multiple]
    );

    const handleOnMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
      const text = event.currentTarget;
      setHasTooltip(text.scrollWidth > text.clientWidth);
    };

    return (
      <ThemeProvider theme={colorsTheme.select}>
        <SelectContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label
              id={selectLabelId}
              disabled={disabled}
              onClick={() => {
                selectRef?.current?.focus();
              }}
              helperText={helperText}
            >
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <Popover.Root open={isOpen}>
            <Popover.Trigger asChild type={undefined}>
              <Select
                id={selectId}
                disabled={disabled}
                error={error}
                onBlur={handleSelectOnBlur}
                onClick={handleSelectOnClick}
                onFocus={handleSelectOnFocus}
                onKeyDown={handleSelectOnKeyDown}
                ref={selectRef}
                tabIndex={disabled ? -1 : tabIndex}
                role="combobox"
                aria-controls={isOpen ? listboxId : undefined}
                aria-disabled={disabled}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-labelledby={label ? selectLabelId : undefined}
                aria-activedescendant={visualFocusIndex >= 0 ? `option-${visualFocusIndex}` : undefined}
                aria-invalid={!!error}
                aria-errormessage={error ? errorId : undefined}
                aria-required={!disabled && !optional}
                aria-label={label ? undefined : ariaLabel}
              >
                {multiple && Array.isArray(selectedOption) && selectedOption.length > 0 && (
                  <SelectionIndicator>
                    <SelectionNumber disabled={disabled}>{selectedOption.length}</SelectionNumber>
                    <Tooltip label={translatedLabels.select.actionClearSelectionTitle}>
                      <ClearOptionsAction
                        disabled={disabled}
                        onMouseDown={(event) => {
                          // Avoid input to lose focus when pressed
                          event.preventDefault();
                        }}
                        onClick={handleClearOptionsActionOnClick}
                        tabIndex={-1}
                        aria-label={translatedLabels.select.actionClearSelectionTitle}
                      >
                        <DxcIcon icon="clear" />
                      </ClearOptionsAction>
                    </Tooltip>
                  </SelectionIndicator>
                )}
                <TooltipWrapper condition={hasTooltip} label={getSelectedOptionLabel(placeholder, selectedOption)}>
                  <SearchableValueContainer>
                    <input
                      style={{ display: "none" }}
                      name={name}
                      disabled={disabled}
                      value={
                        multiple
                          ? (Array.isArray(value) ? value : Array.isArray(innerValue) ? innerValue : []).join(",")
                          : (value ?? innerValue)
                      }
                      readOnly
                      aria-hidden="true"
                    />
                    {searchable && (
                      <SearchInput
                        value={searchValue}
                        disabled={disabled}
                        onChange={handleSearchIOnChange}
                        ref={selectSearchInputRef}
                        autoComplete="nope"
                        autoCorrect="nope"
                        size={1}
                        aria-labelledby={label ? selectLabelId : undefined}
                      />
                    )}
                    {(!searchable || searchValue === "") && (
                      <SelectedOption
                        disabled={disabled}
                        atBackground={
                          (multiple ? (value ?? innerValue).length === 0 : !(value ?? innerValue)) ||
                          (searchable && isOpen)
                        }
                      >
                        <SelectedOptionLabel onMouseEnter={handleOnMouseEnter}>
                          {getSelectedOptionLabel(placeholder, selectedOption)}
                        </SelectedOptionLabel>
                      </SelectedOption>
                    )}
                  </SearchableValueContainer>
                </TooltipWrapper>
                {!disabled && error && (
                  <ErrorIcon>
                    <DxcIcon icon="filled_error" />
                  </ErrorIcon>
                )}
                {searchable && searchValue.length > 0 && (
                  <Tooltip label={translatedLabels.select.actionClearSelectionTitle}>
                    <ClearSearchAction
                      onMouseDown={(event) => {
                        // Avoid input to lose focus
                        event.preventDefault();
                      }}
                      onClick={handleClearSearchActionOnClick}
                      tabIndex={-1}
                      aria-label={translatedLabels.select.actionClearSearchTitle}
                    >
                      <DxcIcon icon="clear" />
                    </ClearSearchAction>
                  </Tooltip>
                )}
                <CollapseIndicator disabled={disabled}>
                  <DxcIcon icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} />
                </CollapseIndicator>
              </Select>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={4}
                style={{ zIndex: "310" }}
                onOpenAutoFocus={(event) => {
                  // Avoid select to lose focus when the list is opened
                  event.preventDefault();
                }}
                onCloseAutoFocus={(event) => {
                  // Avoid select to lose focus when the list is closed
                  event.preventDefault();
                }}
              >
                <Listbox
                  id={listboxId}
                  currentValue={value ?? innerValue}
                  options={searchable ? filteredOptions : options}
                  visualFocusIndex={visualFocusIndex}
                  lastOptionIndex={lastOptionIndex}
                  multiple={multiple}
                  optional={optional}
                  optionalItem={optionalItem}
                  searchable={searchable}
                  handleOptionOnClick={handleOptionOnClick}
                  styles={{ width }}
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          {!disabled && typeof error === "string" && (
            <Error id={errorId} role="alert" aria-live={error ? "assertive" : "off"}>
              {error}
            </Error>
          )}
        </SelectContainer>
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

const calculateWidth = (margin: SelectPropsType["margin"], size: SelectPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

const SelectContainer = styled.div<{
  margin: SelectPropsType["margin"];
  size: SelectPropsType["size"];
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
  disabled: SelectPropsType["disabled"];
  helperText: SelectPropsType["helperText"];
}>`
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.labelFontColor)};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
  cursor: default;
  ${(props) => !props.helperText && `margin-bottom: 0.25rem`}
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

const HelperText = styled.span<{ disabled: SelectPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.helperTextFontColor)};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const Select = styled.div<{
  disabled: SelectPropsType["disabled"];
  error: SelectPropsType["error"];
}>`
  display: flex;
  position: relative;
  align-items: center;
  height: calc(2.5rem - 2px);
  padding: 0 0.5rem;
  outline: none;
  ${(props) => props.disabled && `background-color: ${props.theme.disabledInputBackgroundColor}`};
  box-shadow: 0 0 0 2px transparent;
  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.disabled ? props.theme.disabledInputBorderColor : props.theme.enabledInputBorderColor)};
  ${(props) =>
    props.error &&
    !props.disabled &&
    `border-color: transparent;
     box-shadow: 0 0 0 2px ${props.theme.errorInputBorderColor};
  `}
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor: pointer;")};

  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        border-color: ${props.error ? "transparent" : props.theme.hoverInputBorderColor};
        ${props.error && `box-shadow: 0 0 0 2px ${props.theme.hoverInputErrorBorderColor};`}
      }
      &:focus-within {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${props.theme.focusInputBorderColor};
      }
    `};
`;

const SelectionIndicator = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 48px;
  min-height: 24px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.selectionIndicatorBorderColor};
`;

const SelectionNumber = styled.span<{ disabled: SelectPropsType["disabled"] }>`
  display: grid;
  place-items: center;
  border-right: 1px solid ${(props) => props.theme.selectionIndicatorBorderColor};
  user-select: none;
  ${(props) => !props.disabled && `background-color: ${props.theme.selectionIndicatorBackgroundColor}`};
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.selectionIndicatorFontColor)};
  font-size: ${(props) => props.theme.selectionIndicatorFontSize};
  font-style: ${(props) => props.theme.selectionIndicatorFontStyle};
  font-weight: ${(props) => props.theme.selectionIndicatorFontWeight};
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: default;`)}
`;

const ClearOptionsAction = styled.button`
  display: grid;
  place-items: center;
  border: none;
  padding: 0;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
  background-color: ${(props) =>
    props.disabled ? "transparent" : props.theme.enabledSelectionIndicatorActionBackgroundColor};
  color: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.enabledSelectionIndicatorActionIconColor};
  font-size: 16px;
  width: 100%;

  :focus-visible {
    outline: none;
  }
  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        background-color: ${props.theme.hoverSelectionIndicatorActionBackgroundColor};
        color: ${props.theme.hoverSelectionIndicatorActionIconColor};
      }
      &:active {
        background-color: ${props.theme.activeSelectionIndicatorActionBackgroundColor};
        color: ${props.theme.activeSelectionIndicatorActionIconColor};
      }
    `}
`;

const SearchableValueContainer = styled.div`
  display: grid;
  width: 100%;
`;

const SelectedOption = styled.span<{
  disabled: SelectPropsType["disabled"];
  atBackground: boolean;
}>`
  grid-area: 1 / 1 / 1 / 1;
  display: inline-flex;
  align-items: center;
  height: calc(2.5rem - 2px);
  padding: 0 0.5rem;
  user-select: none;
  overflow: hidden;

  color: ${(props) =>
    props.disabled
      ? props.theme.disabledColor
      : props.atBackground
        ? props.theme.placeholderFontColor
        : props.theme.valueFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
`;

const SelectedOptionLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SearchInput = styled.input`
  grid-area: 1 / 1 / 1 / 1;
  height: calc(2.5rem - 2px);
  background: none;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.valueFontColor)};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  line-height: 1.5em;
`;

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  margin-left: 0.25rem;
  color: ${(props) => props.theme.errorIconColor};
  font-size: 1.25rem;
`;

const Error = styled.span`
  min-height: 1.5em;
  color: ${(props) => props.theme.errorMessageColor};
  font-size: 0.75rem;
  line-height: 1.5em;
  margin-top: 0.25rem;
`;

const CollapseIndicator = styled.span<{ disabled: SelectPropsType["disabled"] }>`
  display: grid;
  place-items: center;
  padding: 4px;
  font-size: 16px;
  margin-left: 0.25rem;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.collapseIndicatorColor)};
`;

const ClearSearchAction = styled.button`
  display: grid;
  place-items: center;
  min-height: 24px;
  min-width: 24px;
  margin-left: 0.25rem;
  border: none;
  border-radius: 2px;
  padding: 0;
  background-color: ${(props) => props.theme.actionBackgroundColor};
  color: ${(props) => props.theme.actionIconColor};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverActionBackgroundColor};
    color: ${(props) => props.theme.hoverActionIconColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeActionBackgroundColor};
    color: ${(props) => props.theme.activeActionIconColor};
  }
`;

export default DxcSelect;
