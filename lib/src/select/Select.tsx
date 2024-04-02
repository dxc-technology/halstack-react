import React, { useMemo, useRef, useState, useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { spaces } from "../common/variables";
import { v4 as uuidv4 } from "uuid";
import { getMargin } from "../common/utils";
import SelectPropsType, { Option, OptionGroup, RefType } from "./types";
import Listbox from "./Listbox";
import * as Popover from "@radix-ui/react-popover";
import DxcIcon from "../icon/Icon";

const isOptionGroup = (option: Option | OptionGroup): option is OptionGroup =>
  "options" in option && option.options != null;

const isArrayOfOptionGroups = (options: Option[] | OptionGroup[]): options is OptionGroup[] =>
  isOptionGroup(options[0]);

const groupsHaveOptions = (filteredOptions: Option[] | OptionGroup[]) =>
  isArrayOfOptionGroups(filteredOptions)
    ? filteredOptions.some((groupOption) => groupOption.options?.length > 0)
    : true;

const canOpenOptions = (options: Option[] | OptionGroup[], disabled: boolean) =>
  !disabled && options?.length > 0 && groupsHaveOptions(options);

const filterOptionsBySearchValue = (
  options: Option[] | OptionGroup[],
  searchValue: string
): Option[] | OptionGroup[] => {
  if (options?.length > 0) {
    if (isArrayOfOptionGroups(options))
      return options.map((optionGroup) => {
        const group = {
          label: optionGroup.label,
          options: optionGroup.options.filter((option) =>
            option.label.toUpperCase().includes(searchValue.toUpperCase())
          ),
        };
        return group;
      });
    else return options.filter((option) => option.label.toUpperCase().includes(searchValue.toUpperCase()));
  }
};

const getLastOptionIndex = (
  options: Option[] | OptionGroup[],
  filteredOptions: Option[] | OptionGroup[],
  searchable: boolean,
  optional: boolean,
  multiple: boolean
) => {
  let last = 0;
  const reducer = (acc: number, current: OptionGroup) => acc + current.options?.length;

  if (searchable && filteredOptions?.length > 0)
    isArrayOfOptionGroups(filteredOptions)
      ? (last = filteredOptions.reduce(reducer, 0) - 1)
      : (last = filteredOptions.length - 1);
  else if (options?.length > 0)
    isArrayOfOptionGroups(options) ? (last = options.reduce(reducer, 0) - 1) : (last = options.length - 1);

  return optional && !multiple ? last + 1 : last;
};

const getSelectedOption = (
  value: string | string[],
  options: Option[] | OptionGroup[],
  multiple: boolean,
  optional: boolean,
  optionalItem: Option
) => {
  let selectedOption: Option | Option[] = multiple ? [] : ({} as Option);
  let singleSelectionIndex: number;

  if (multiple) {
    if (options?.length > 0) {
      options.forEach((option: Option | OptionGroup) => {
        if (isOptionGroup(option))
          option.options.forEach((singleOption) => {
            if (value.includes(singleOption.value) && Array.isArray(selectedOption)) selectedOption.push(singleOption);
          });
        else if (value.includes(option.value) && Array.isArray(selectedOption)) selectedOption.push(option);
      });
    }
  } else {
    if (optional && value === "") {
      selectedOption = optionalItem;
      singleSelectionIndex = 0;
    } else if (options?.length > 0) {
      let group_index = 0;
      options.some((option: Option | OptionGroup, index: number) => {
        if (isOptionGroup(option)) {
          option.options.some((singleOption) => {
            if (singleOption.value === value) {
              selectedOption = singleOption;
              singleSelectionIndex = optional ? group_index + 1 : group_index;
              return true;
            }
            group_index++;
          });
        } else if (option.value === value) {
          selectedOption = option;
          singleSelectionIndex = optional ? index + 1 : index;
          return true;
        }
      });
    }
  }

  return {
    selectedOption,
    singleSelectionIndex,
  };
};

const getSelectedOptionLabel = (placeholder: string, selectedOption: Option | Option[]) => {
  if (Array.isArray(selectedOption))
    return selectedOption.length === 0 ? placeholder : selectedOption.map((option) => option.label).join(", ");
  else return selectedOption?.label ?? placeholder;
};

const notOptionalCheck = (value: string | string[], multiple: boolean, optional: boolean) =>
  !optional && (multiple ? value.length === 0 : value === "");

const useWidth = (target: HTMLDivElement) => {
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

const DxcSelect = React.forwardRef<RefType, SelectPropsType>(
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
      optional = false,
      searchable = false,
      multiple = false,
      onChange,
      onBlur,
      error,
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ): JSX.Element => {
    const [selectId] = useState(`select-${uuidv4()}`);
    const selectLabelId = `label-${selectId}`;
    const searchableInputId = `searchable-input-${selectId}`
    const errorId = `error-${selectId}`;
    const optionsListId = `${selectId}-listbox`;
    const [innerValue, setInnerValue] = useState(defaultValue ?? (multiple ? [] : ""));
    const [searchValue, setSearchValue] = useState("");
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);
    const [isOpen, changeIsOpen] = useState(false);

    const selectRef = useRef<HTMLDivElement | null>(null);
    const selectSearchInputRef = useRef<HTMLInputElement | null>(null);
    const selectedOptionLabelRef = useRef(null);

    const width = useWidth(selectRef.current);
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();

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

    const openOptions = () => {
      if (!isOpen && canOpenOptions(options, disabled)) changeIsOpen(true);
    };
    const closeOptions = () => {
      if (isOpen) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const handleSelectChangeValue = (newOption: Option) => {
      let newValue: string | string[];

      if (multiple) {
        if ((value ?? innerValue).includes(newOption.value))
          newValue = (
            (value && Array.isArray(value) && value) ??
            (innerValue && Array.isArray(innerValue) && innerValue)
          ).filter((optionVal) => optionVal !== newOption.value);
        else
          newValue = [
            ...((value && Array.isArray(value) && value) ?? (innerValue && Array.isArray(innerValue) && innerValue)),
            newOption.value,
          ];
      } else newValue = newOption.value;

      value ?? setInnerValue(newValue);
      notOptionalCheck(newValue, multiple, optional)
        ? onChange?.({
            value: newValue as string & string[],
            error: translatedLabels.formFields.requiredValueErrorMessage,
          })
        : onChange?.({ value: newValue as string & string[] });
    };
    const handleSelectOnClick = () => {
      searchable && selectSearchInputRef.current.focus();
      if (isOpen) {
        closeOptions();
        setSearchValue("");
      } else openOptions();
    };
    const handleSelectOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) searchable && selectSearchInputRef.current.focus();
    };
    const handleSelectOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      // focus leaves container (outside, not to a child)
      if (!event.currentTarget.contains(event.relatedTarget)) {
        closeOptions();
        setSearchValue("");

        const currentValue = value ?? innerValue;
        notOptionalCheck(currentValue, multiple, optional)
          ? onBlur?.({
              value: currentValue as string & string[],
              error: translatedLabels.formFields.requiredValueErrorMessage,
            })
          : onBlur?.({ value: currentValue as string & string[] });
      }
    };
    const handleSelectOnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          singleSelectionIndex !== undefined &&
          (!isOpen || (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
            ? changeVisualFocusIndex(singleSelectionIndex)
            : changeVisualFocusIndex((visualFocusIndex) => {
                if (visualFocusIndex < lastOptionIndex) return visualFocusIndex + 1;
                else if (visualFocusIndex === lastOptionIndex) return 0;
              });
          openOptions();
          break;
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          singleSelectionIndex !== undefined &&
          (!isOpen || (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
            ? changeVisualFocusIndex(singleSelectionIndex)
            : changeVisualFocusIndex((visualFocusIndex) =>
                visualFocusIndex === 0 || visualFocusIndex === -1 ? lastOptionIndex : visualFocusIndex - 1
              );
          openOptions();
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          event.stopPropagation();
          closeOptions();
          setSearchValue("");
          break;
        case "Enter":
          if (isOpen && visualFocusIndex >= 0) {
            let accLength = optional && !multiple ? 1 : 0;
            if (searchable) {
              if (filteredOptions.length > 0) {
                if (optional && !multiple && visualFocusIndex === 0 && groupsHaveOptions(filteredOptions))
                  handleSelectChangeValue(optionalItem);
                else
                  isArrayOfOptionGroups(filteredOptions)
                    ? groupsHaveOptions(filteredOptions) &&
                      filteredOptions.some((groupOption) => {
                        const groupLength = accLength + groupOption.options.length;
                        groupLength > visualFocusIndex &&
                          handleSelectChangeValue(groupOption.options[visualFocusIndex - accLength]);
                        accLength = groupLength;
                        return groupLength > visualFocusIndex;
                      })
                    : handleSelectChangeValue(filteredOptions[visualFocusIndex - accLength]);
              }
            } else {
              if (optional && !multiple && visualFocusIndex === 0) handleSelectChangeValue(optionalItem);
              else
                isArrayOfOptionGroups(options)
                  ? options.some((groupOption) => {
                      const groupLength = accLength + groupOption.options.length;
                      groupLength > visualFocusIndex &&
                        handleSelectChangeValue(groupOption.options[visualFocusIndex - accLength]);
                      accLength = groupLength;
                      return groupLength > visualFocusIndex;
                    })
                  : handleSelectChangeValue(options[visualFocusIndex - accLength]);
            }
            !multiple && closeOptions();
            setSearchValue("");
          }
          break;
      }
    };

    const handleSearchIOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
      changeVisualFocusIndex(-1);
      openOptions();
    };

    const handleClearOptionsActionOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      value ?? setInnerValue([]);
      !optional
        ? onChange?.({ value: [] as string & string[], error: translatedLabels.formFields.requiredValueErrorMessage })
        : onChange?.({ value: [] as string & string[] });
    };

    const handleClearSearchActionOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setSearchValue("");
    };

    const handleOptionOnClick = useCallback(
      (option: Option) => {
        handleSelectChangeValue(option);
        !multiple && closeOptions();
        setSearchValue("");
      },
      [handleSelectChangeValue, closeOptions, multiple]
    );

    useEffect(() => {
      if (selectedOptionLabelRef?.current != null) {
        if (selectedOptionLabelRef?.current.scrollWidth > selectedOptionLabelRef?.current.clientWidth)
          selectedOptionLabelRef.current.title = getSelectedOptionLabel(placeholder, selectedOption);
        else selectedOptionLabelRef.current.title = "";
      }
    }, [placeholder, selectedOption]);

    return (
      <ThemeProvider theme={colorsTheme.select}>
        <SelectContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label
              id={selectLabelId}
              disabled={disabled}
              onClick={() => {
                selectRef.current.focus();
              }}
              helperText={helperText}
              htmlFor={searchable ? searchableInputId : undefined}
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
                aria-controls={optionsListId}
                aria-disabled={disabled}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-labelledby={label ? selectLabelId : undefined}
                aria-activedescendant={visualFocusIndex >= 0 ? `option-${visualFocusIndex}` : undefined}
                aria-invalid={error ? true : false}
                aria-errormessage={error ? errorId : undefined}
                aria-required={!disabled && !optional}
              >
                {multiple && Array.isArray(selectedOption) && selectedOption.length > 0 && (
                  <SelectionIndicator>
                    <SelectionNumber disabled={disabled}>{selectedOption.length}</SelectionNumber>
                    <ClearOptionsAction
                      disabled={disabled}
                      onMouseDown={(event) => {
                        // Avoid input to lose focus when pressed
                        event.preventDefault();
                      }}
                      onClick={handleClearOptionsActionOnClick}
                      tabIndex={-1}
                      title={translatedLabels.select.actionClearSelectionTitle}
                      aria-label={translatedLabels.select.actionClearSelectionTitle}
                    >
                      <DxcIcon icon="clear" />
                    </ClearOptionsAction>
                  </SelectionIndicator>
                )}
                <SearchableValueContainer>
                  <ValueInput
                    name={name}
                    disabled={disabled}
                    value={
                      multiple
                        ? (
                            (value && Array.isArray(value) && value) ??
                            (innerValue && Array.isArray(innerValue) && innerValue)
                          ).join(",")
                        : value ?? innerValue
                    }
                    readOnly
                    aria-hidden="true"
                  />
                  {searchable && (
                    <SearchInput
                      id={searchableInputId}
                      value={searchValue}
                      disabled={disabled}
                      onChange={handleSearchIOnChange}
                      ref={selectSearchInputRef}
                      autoComplete="nope"
                      autoCorrect="nope"
                      size={1}
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
                      <SelectedOptionLabel ref={selectedOptionLabelRef}>
                        {getSelectedOptionLabel(placeholder, selectedOption)}
                      </SelectedOptionLabel>
                    </SelectedOption>
                  )}
                </SearchableValueContainer>
                {!disabled && error && (
                  <ErrorIcon>
                    <DxcIcon icon="filled_error" />
                  </ErrorIcon>
                )}
                {searchable && searchValue.length > 0 && (
                  <ClearSearchAction
                    onMouseDown={(event) => {
                      // Avoid input to lose focus
                      event.preventDefault();
                    }}
                    onClick={handleClearSearchActionOnClick}
                    tabIndex={-1}
                    title={translatedLabels.select.actionClearSearchTitle}
                    aria-label={translatedLabels.select.actionClearSearchTitle}
                  >
                    <DxcIcon icon="clear" />
                  </ClearSearchAction>
                )}
                <CollapseIndicator disabled={disabled}>
                  <DxcIcon icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} />
                </CollapseIndicator>
              </Select>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={4}
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
                <Listbox
                  id={optionsListId}
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
    : sizes[size];

const SelectContainer = styled.div<{ margin: SelectPropsType["margin"]; size: SelectPropsType["size"] }>`
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

const Label = styled.label<{ disabled: SelectPropsType["disabled"]; helperText: SelectPropsType["helperText"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.labelFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
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
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const Select = styled.div<{ disabled: SelectPropsType["disabled"]; error: SelectPropsType["error"] }>`
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

const SelectionIndicator = styled.span`
  display: flex;
  border: 1px solid ${(props) => props.theme.selectionIndicatorBorderColor};
  border-radius: 2px;
  max-height: 22px;
  width: 46px;
`;

const SelectionNumber = styled.span<{ disabled: SelectPropsType["disabled"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  user-select: none;
  ${(props) => !props.disabled && `background-color: ${props.theme.selectionIndicatorBackgroundColor}`};
  border-right: 1px solid ${(props) => props.theme.selectionIndicatorBorderColor};
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.selectionIndicatorFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.selectionIndicatorFontSize};
  font-style: ${(props) => props.theme.selectionIndicatorFontStyle};
  font-weight: ${(props) => props.theme.selectionIndicatorFontWeight};
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: default;`)}
`;

const ClearOptionsAction = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 23px;
  height: 22px;
  border: none;
  padding: 0.25rem;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
  background-color: ${(props) =>
    props.disabled ? "transparent" : props.theme.enabledSelectionIndicatorActionBackgroundColor};
  color: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.enabledSelectionIndicatorActionIconColor};

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

  font-size:16px;
`;

const SearchableValueContainer = styled.div`
  display: grid;
  width: 100%;
`;

const SelectedOption = styled.span<{ disabled: SelectPropsType["disabled"]; atBackground: boolean }>`
  grid-area: 1 / 1 / 1 / 1;
  display: inline-flex;
  align-items: center;
  height: calc(2.5rem - 2px);
  padding: 0 0.5rem;
  user-select: none;
  overflow: hidden;

  color: ${(props) => {
    if (props.disabled) return props.theme.disabledColor;
    else if (props.atBackground) return props.theme.placeholderFontColor;
    else return props.theme.valueFontColor;
  }};

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

const ValueInput = styled.input`
  display: none;
`;

const SearchInput = styled.input`
  grid-area: 1 / 1 / 1 / 1;
  height: calc(2.5rem - 2px);
  background: none;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.valueFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
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
  pointer-events: none;
  color: ${(props) => props.theme.errorIconColor};

  font-size: 1.25rem;
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

const CollapseIndicator = styled.span<{ disabled: SelectPropsType["disabled"] }>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 16px;
  width: 16px;
  padding: 4px;
  margin-left: 0.25rem;
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.collapseIndicatorColor)};
`;

const ClearSearchAction = styled.button`
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
  background-color: ${(props) => props.theme.actionBackgroundColor};
  color: ${(props) => props.theme.actionIconColor};

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverActionBackgroundColor};
    color: ${(props) => props.theme.hoverActionIconColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeActionBackgroundColor};
    color: ${(props) => props.theme.activeActionIconColor};
  }
  font-size: 16px;
`;

export default DxcSelect;
