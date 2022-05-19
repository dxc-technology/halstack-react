// @ts-nocheck
import React, { useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { spaces } from "../common/variables.js";
import { v4 as uuidv4 } from "uuid";
import { getMargin } from "../common/utils.js";
import SelectPropsType, { RefType } from "./types";
import selectIcons from "./Icons";
import Listbox from "./Listbox";

const getNotOptionalErrorMessage = () => `This field is required. Please, enter a value.`;

const groupsHaveOptions = (innerOptions) =>
  innerOptions[0].hasOwnProperty("options")
    ? innerOptions[0].options
      ? innerOptions.some((groupOption) => groupOption.options.length > 0)
      : false
    : true;

const filteredGroupsHaveOptions = (filteredOptions) =>
  filteredOptions?.[0].options ? filteredOptions.some((groupOption) => groupOption.options?.length > 0) : true;

const filterOptionsBySearchValue = (options, searchValue) => {
  if (options?.length > 0) {
    if (options[0].options)
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

const getLastOptionIndex = (options, filteredOptions, searchable, optional, multiple) => {
  let last = 0;
  const reducer = (acc, current) => acc + current.options?.length;

  if (searchable && filteredOptions.length > 0)
    filteredOptions[0].options ? (last = filteredOptions.reduce(reducer, 0) - 1) : (last = filteredOptions.length - 1);
  else if (options?.length > 0)
    options[0].options ? (last = options.reduce(reducer, 0) - 1) : (last = options.length - 1);

  return optional && !multiple ? last + 1 : last;
};

const getSelectedOption = (value, options, multiple, optional, optionalItem) => {
  let selectedOption = multiple ? [] : {};
  let singleSelectionIndex;

  if (multiple) {
    if (options?.length > 0) {
      options.forEach((option) => {
        if (option.options) {
          option.options.forEach((singleOption) => {
            if (value.includes(singleOption.value)) selectedOption.push(singleOption);
          });
        } else if (value.includes(option.value)) selectedOption.push(option);
      });
    }
  } else {
    if (optional && value === "") {
      selectedOption = optionalItem;
      singleSelectionIndex = 0;
    } else if (options?.length > 0) {
      let group_index = 0;
      options.some((option, index) => {
        if (option.options) {
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
    const errorId = `error-${selectId}`;
    const optionsListId = `${selectId}-listbox`;
    const [innerValue, setInnerValue] = useState(defaultValue ?? (multiple ? [] : ""));
    const [searchValue, setSearchValue] = useState("");
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);
    const [isOpen, changeIsOpen] = useState(false);

    const selectContainerRef = useRef(null);
    const selectSearchInputRef = useRef(null);
    const selectOptionsListRef = useRef(null);

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

    const notOptionalCheck = (value) => !optional && value === "";
    const notOptionalMultipleCheck = (value) => !optional && value.length === 0;

    const canBeOpenOptions = () => !disabled && options?.length > 0 && groupsHaveOptions(options);

    const openOptions = () => {
      if (!isOpen && canBeOpenOptions()) changeIsOpen(true);
    };
    const closeOptions = () => {
      if (isOpen) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const handleSelectChangeValue = (newOption) => {
      if (multiple) {
        let res = [];

        if ((value ?? innerValue).includes(newOption.value))
          res = (value ?? innerValue).filter((optionVal) => optionVal !== newOption.value);
        else res = [...(value ?? innerValue), newOption.value];

        value ?? setInnerValue(res);
        if (notOptionalMultipleCheck(res))
          onChange?.({ value: res, error: translatedLabels.formFields.requiredValueErrorMessage });
        else onChange?.({ value: res });
      } else {
        value ?? setInnerValue(newOption.value);
        if (notOptionalCheck(newOption.value))
          onChange?.({ value: newOption.value, error: translatedLabels.formFields.requiredValueErrorMessage });
        else onChange?.({ value: newOption.value });
      }
    };
    const handleSelectOnClick = () => {
      searchable && selectSearchInputRef.current.focus();
      if (isOpen) {
        closeOptions();
        setSearchValue("");
      } else openOptions();
    };
    const handleSelectOnFocus = (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) searchable && selectSearchInputRef.current.focus();
    };
    const handleSelectOnBlur = (event) => {
      // focus leaves container (outside, not to childs)
      if (!event.currentTarget.contains(event.relatedTarget)) {
        closeOptions();
        setSearchValue("");

        if (notOptionalCheck(value ?? innerValue))
          onBlur?.({ value: value ?? innerValue, error: translatedLabels.formFields.requiredValueErrorMessage });
        else onBlur?.({ value: value ?? innerValue });
      }
    };
    const handleSelectOnKeyDown = (event) => {
      switch (event.keyCode) {
        case 40: // Arrow Down
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
        case 38: // Arrow Up
          event.preventDefault();
          singleSelectionIndex !== undefined &&
          (!isOpen || (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
            ? changeVisualFocusIndex(singleSelectionIndex)
            : changeVisualFocusIndex((visualFocusIndex) =>
                visualFocusIndex === 0 || visualFocusIndex === -1 ? lastOptionIndex : visualFocusIndex - 1
              );
          openOptions();
          break;
        case 27: // Esc
          event.preventDefault();
          closeOptions();
          setSearchValue("");
          break;
        case 13: // Enter
          if (isOpen && visualFocusIndex >= 0) {
            let accLength = optional && !multiple ? 1 : 0;
            if (searchable) {
              if (filteredOptions.length > 0) {
                if (optional && !multiple && visualFocusIndex === 0 && filteredGroupsHaveOptions(filteredOptions))
                  handleSelectChangeValue(optionalItem);
                else
                  filteredOptions[0].options
                    ? filteredGroupsHaveOptions(filteredOptions) &&
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
                options[0].options
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

    const handleSearchIOnChange = (event) => {
      setSearchValue(event.target.value);
      changeVisualFocusIndex(-1);
      openOptions();
    };

    const handleClearOptionsActionOnClick = (event) => {
      event.stopPropagation();
      value ?? setInnerValue([]);
      !optional
        ? onChange?.({ value: [], error: translatedLabels.formFields.requiredValueErrorMessage })
        : onChange?.({ value: [] });
    };

    const handleClearSearchActionOnClick = (event) => {
      event.stopPropagation();
      setSearchValue("");
    };

    const handleOptionOnClick = useCallback(
      (option) => {
        handleSelectChangeValue(option);
        !multiple && closeOptions();
        setSearchValue("");
      },
      [handleSelectChangeValue, closeOptions, multiple]
    );

    useLayoutEffect(() => {
      if (isOpen && singleSelectionIndex) {
        const listEl = selectOptionsListRef?.current;
        const selectedListOptionEl = listEl?.querySelector("[aria-selected='true']");
        listEl?.scrollTo?.({ top: selectedListOptionEl?.offsetTop - listEl?.clientHeight / 2 });
      }
    }, [isOpen]);

    useLayoutEffect(() => {
      const visualFocusedOptionEl =
        selectOptionsListRef?.current?.querySelectorAll("[role='option']")[visualFocusIndex];
      visualFocusedOptionEl?.scrollIntoView?.({ block: "nearest", inline: "start" });
    }, [visualFocusIndex]);

    return (
      <ThemeProvider theme={colorsTheme.select}>
        <SelectContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label
              id={selectLabelId}
              disabled={disabled}
              onClick={() => {
                selectContainerRef.current.focus();
              }}
              helperText={helperText}
            >
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <Select
            id={selectId}
            disabled={disabled}
            error={error}
            onBlur={handleSelectOnBlur}
            onClick={handleSelectOnClick}
            onFocus={handleSelectOnFocus}
            onKeyDown={handleSelectOnKeyDown}
            ref={selectContainerRef}
            tabIndex={tabIndex}
            role="combobox"
            aria-controls={optionsListId}
            aria-disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-labelledby={selectLabelId}
            aria-activedescendant={visualFocusIndex >= 0 ? `option-${visualFocusIndex}` : undefined}
            aria-invalid={error ? "true" : "false"}
            aria-errormessage={error ? errorId : undefined}
            aria-required={!disabled && !optional}
          >
            {multiple && selectedOption.length > 0 && (
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
                  {selectIcons.clear}
                </ClearOptionsAction>
              </SelectionIndicator>
            )}
            <SearchableValueContainer>
              <ValueInput
                name={name}
                value={multiple ? (value ?? innerValue).join(",") : value ?? innerValue}
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
                ></SearchInput>
              )}
              {(!searchable || searchValue === "") &&
                (multiple ? (
                  <SelectedOption
                    disabled={disabled}
                    atBackground={(value ?? innerValue).length === 0 || (searchable && isOpen)}
                  >
                    <SelectedOptionLabel>{selectedOption.map((option) => option.label).join(", ")}</SelectedOptionLabel>
                    {selectedOption.length === 0 && placeholder}
                  </SelectedOption>
                ) : (
                  <SelectedOption disabled={disabled} atBackground={!(value ?? innerValue) || (searchable && isOpen)}>
                    <SelectedOptionLabel>{selectedOption?.label ?? placeholder}</SelectedOptionLabel>
                  </SelectedOption>
                ))}
            </SearchableValueContainer>
            {!disabled && error && <ErrorIcon>{selectIcons.error}</ErrorIcon>}
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
                {selectIcons.clear}
              </ClearSearchAction>
            )}
            <CollapseIndicator disabled={disabled}>
              {isOpen ? selectIcons.arrowUp : selectIcons.arrowDown}
            </CollapseIndicator>
            {isOpen && (
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
                ref={selectOptionsListRef}
              />
            )}
          </Select>
          {!disabled && typeof error === "string" && (
            <Error id={errorId} aria-live={error ? "assertive" : "off"}>
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

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const SelectContainer = styled.div`
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

const Label = styled.span`
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

const HelperText = styled.span`
  color: ${(props) => (props.disabled ? props.theme.disabledColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const Select = styled.div`
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

const SelectionNumber = styled.span`
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
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
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

  svg {
    line-height: 18px;
  }
`;

const SearchableValueContainer = styled.div`
  display: grid;
  width: 100%;
`;

const SelectedOption = styled.span`
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

const CollapseIndicator = styled.span`
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
  svg {
    line-height: 18px;
  }
`;

export default DxcSelect;
