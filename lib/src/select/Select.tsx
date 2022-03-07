// @ts-nocheck
import React, { useMemo, useRef, useState, useLayoutEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { spaces } from "../common/variables.js";
import { v4 as uuidv4 } from "uuid";
import { getMargin } from "../common/utils.js";
import DxcCheckbox from "../checkbox/Checkbox";
import SelectPropsType, { RefType } from "./types";

const selectIcons = {
  error: (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  arrowUp: (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
    </svg>
  ),
  arrowDown: (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  ),
  clear: (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  ),
  selected: (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  ),
  searchOff: (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3C6.08,3,3.28,5.64,3.03,9h2.02 C5.3,6.75,7.18,5,9.5,5C11.99,5,14,7.01,14,9.5S11.99,14,9.5,14c-0.17,0-0.33-0.03-0.5-0.05v2.02C9.17,15.99,9.33,16,9.5,16 c1.61,0,3.09-0.59,4.23-1.57L14,14.71v0.79l5,4.99L20.49,19L15.5,14z" />
          <polygon points="6.47,10.82 4,13.29 1.53,10.82 0.82,11.53 3.29,14 0.82,16.47 1.53,17.18 4,14.71 6.47,17.18 7.18,16.47 4.71,14 7.18,11.53" />
        </g>
      </g>
    </svg>
  ),
};

const getNotOptionalErrorMessage = () => `This field is required. Please, enter a value.`;

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

const getSelectedOption = (options, multiple, optional, optionalEmptyOption, value, innerValue) => {
  const val = value ?? innerValue;
  let selectedOption = multiple ? [] : {};
  let singleSelectionIndex;

  if (multiple) {
    if (options?.length > 0) {
      options.forEach((option) => {
        if (option.options) {
          option.options.forEach((singleOption) => {
            if (val.includes(singleOption.value)) selectedOption.push(singleOption);
          });
        } else if (val.includes(option.value)) selectedOption.push(option);
      });
    }
  } else {
    if (optional && val === "") {
      selectedOption = optionalEmptyOption;
      singleSelectionIndex = 0;
    } else if (options?.length > 0) {
      let group_index = 0;
      options.some((option, index) => {
        if (option.options) {
          option.options.some((singleOption) => {
            if (singleOption.value === val) {
              selectedOption = singleOption;
              singleSelectionIndex = optional ? group_index + 1 : group_index;
              return true;
            }
            group_index++;
          });
        } else if (option.value === val) {
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
    const optionsListId = `${selectId}-listbox`;
    const [innerValue, setInnerValue] = useState(multiple ? [] : "");
    const [searchValue, setSearchValue] = useState("");
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);
    const [isOpen, changeIsOpen] = useState(false);

    const selectContainerRef = useRef(null);
    const selectSearchInputRef = useRef(null);
    const selectOptionsListRef = useRef(null);

    const colorsTheme = useTheme();

    const optionalEmptyOption = { label: placeholder, value: "" };
    const filteredOptions = useMemo(() => filterOptionsBySearchValue(options, searchValue), [options, searchValue]);
    const lastOptionIndex = useMemo(
      () => getLastOptionIndex(options, filteredOptions, searchable, optional, multiple),
      [searchable, optional, multiple, filteredOptions, options]
    );
    const { selectedOption, singleSelectionIndex } = useMemo(
      () => getSelectedOption(options, multiple, optional, optionalEmptyOption, value, innerValue),
      [options, multiple, optional, value, innerValue]
    );

    const notOptionalCheck = (value) => value === "" && !optional;
    const notOptionalMultipleCheck = () => (value ?? innerValue).length === 0 && !optional;

    const canBeOpenOptions = () => !disabled && options?.length > 0 && groupsHaveOptions();
    const groupsHaveOptions = () =>
      options[0].hasOwnProperty("options")
        ? options[0].options
          ? options.some((groupOption) => groupOption.options.length > 0)
          : false
        : true;
    const filteredGroupsHaveOptions = () =>
      filteredOptions?.[0].options ? filteredOptions.some((groupOption) => groupOption.options?.length > 0) : true;

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
        let res;
        if ((value ?? innerValue).includes(newOption.value))
          value
            ? (res = value.filter((optionVal) => optionVal !== newOption.value))
            : setInnerValue((previous) => previous.filter((optionVal) => optionVal !== newOption.value));
        else value ? (res = [...value, newOption.value]) : setInnerValue((previous) => [...previous, newOption.value]);

        if (notOptionalMultipleCheck(newOption.value))
          onChange?.({ value: res ?? innerValue, error: getNotOptionalErrorMessage() });
        else onChange?.({ value: res ?? innerValue, error: null });
      } else {
        value ?? setInnerValue(newOption.value);

        if (notOptionalCheck(newOption.value))
          onChange?.({ value: newOption.value, error: getNotOptionalErrorMessage() });
        else onChange?.({ value: newOption.value, error: null });
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
          onBlur?.({ value: value ?? innerValue, error: getNotOptionalErrorMessage() });
        else onBlur?.({ value: value ?? innerValue, error: null });
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
                if (optional && !multiple && visualFocusIndex === 0 && filteredGroupsHaveOptions())
                  handleSelectChangeValue(optionalEmptyOption);
                else
                  filteredOptions[0].options
                    ? filteredGroupsHaveOptions() &&
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
              if (optional && !multiple && visualFocusIndex === 0) handleSelectChangeValue(optionalEmptyOption);
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
      onChange?.({ value: [], error: getNotOptionalErrorMessage() });
    };

    const handleClearSearchActionOnClick = (event) => {
      event.stopPropagation();
      setSearchValue("");
    };

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

    const Option = ({ option, index, isGroupedOption = false }) => {
      const isSelected = multiple
        ? (value ?? innerValue).includes(option.value)
        : (value ?? innerValue) === option.value;
      const isLastOption = index === lastOptionIndex;

      return (
        <OptionItem
          id={`option-${index}`}
          onClick={() => {
            handleSelectChangeValue(option);
            !multiple && closeOptions();
            setSearchValue("");
          }}
          visualFocused={visualFocusIndex === index}
          selected={isSelected}
          role="option"
          aria-selected={isSelected}
        >
          <StyledOption
            visualFocused={visualFocusIndex === index}
            selected={isSelected}
            last={isLastOption}
            grouped={isGroupedOption}
            multiple={multiple}
          >
            {multiple && <DxcCheckbox tabIndex={-1} checked={isSelected} />}
            {option.icon && (
              <OptionIcon
                grouped={isGroupedOption}
                multiple={multiple}
                role={!(typeof option.icon === "string") && "img"}
              >
                {typeof option.icon === "string" ? <OptionIconImg src={option.icon}></OptionIconImg> : option.icon}
              </OptionIcon>
            )}
            <OptionContent grouped={isGroupedOption} hasIcon={option.icon} multiple={multiple}>
              <OptionLabel>{option.label}</OptionLabel>
              {!multiple && isSelected && <OptionSelectedIndicator>{selectIcons.selected}</OptionSelectedIndicator>}
            </OptionContent>
          </StyledOption>
        </OptionItem>
      );
    };

    let globalIndex = optional && !multiple ? 0 : -1; // index for options, starting from 0 to options.length -1
    const mapOptionFunc = (option, mapIndex) => {
      if (option.options) {
        const groupId = `group-${mapIndex}`;
        return (
          option.options.length > 0 && (
            <li>
              <GroupList role="group" aria-labelledby={groupId}>
                <GroupLabel role="presentation" id={groupId}>
                  {option.label}
                </GroupLabel>
                {option.options.map((singleOption) => {
                  globalIndex++;
                  return <Option option={singleOption} index={globalIndex} isGroupedOption={true} />;
                })}
              </GroupList>
            </li>
          )
        );
      } else {
        globalIndex++;
        return <Option key={`option-${option.value}`} option={option} index={globalIndex} />;
      }
    };

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
              {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
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
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-labelledby={selectLabelId}
            aria-activedescendant={visualFocusIndex >= 0 ? `option-${visualFocusIndex}` : undefined}
            aria-invalid={error ? "true" : "false"}
            aria-required={!optional}
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
                  title="Clear selection"
                  aria-label="Clear selection"
                >
                  {selectIcons.clear}
                </ClearOptionsAction>
              </SelectionIndicator>
            )}
            <SearchableValueContainer>
              <ValueInput
                name={name}
                value={multiple ? (value ?? innerValue).join(", ") : value ?? innerValue}
                readOnly
                aria-hidden="true"
              />
              {searchable && (
                <SearchInput
                  value={searchValue}
                  disabled={disabled}
                  onChange={handleSearchIOnChange}
                  ref={selectSearchInputRef}
                  autoComplete="off"
                  autoCorrect="off"
                  size="1"
                ></SearchInput>
              )}
              {(!searchable || searchValue === "") &&
                (multiple ? (
                  <SelectedOption
                    disabled={disabled}
                    atBackground={(value ?? innerValue).length === 0 || (searchable && isOpen)}
                  >
                    <OptionLabel>{selectedOption.map((option) => option.label).join(", ")}</OptionLabel>
                    {selectedOption.length === 0 && placeholder}
                  </SelectedOption>
                ) : (
                  <SelectedOption disabled={disabled} atBackground={!(value ?? innerValue) || (searchable && isOpen)}>
                    <OptionLabel>{selectedOption?.label ?? placeholder}</OptionLabel>
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
                title="Clear search"
                aria-label="Clear search"
              >
                {selectIcons.clear}
              </ClearSearchAction>
            )}
            <CollapseIndicator disabled={disabled}>
              {isOpen ? selectIcons.arrowUp : selectIcons.arrowDown}
            </CollapseIndicator>
            {isOpen && (
              <OptionsList
                id={optionsListId}
                onClick={(event) => {
                  event.stopPropagation();
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                ref={selectOptionsListRef}
                role="listbox"
                aria-multiselectable={multiple}
              >
                {searchable && (filteredOptions.length === 0 || !filteredGroupsHaveOptions()) ? (
                  <OptionsSystemMessage>
                    <NoMatchesFoundIcon>{selectIcons.searchOff}</NoMatchesFoundIcon>
                    No matches found
                  </OptionsSystemMessage>
                ) : (
                  optional && !multiple && <Option option={optionalEmptyOption} index={0} />
                )}
                {searchable ? filteredOptions.map(mapOptionFunc) : options.map(mapOptionFunc)}
              </OptionsList>
            )}
          </Select>
          {!disabled && typeof error === "string" && <Error>{error}</Error>}
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

const OptionsList = styled.ul`
  position: absolute;
  z-index: 1;
  max-height: 304px;
  overflow-y: auto;
  top: calc(100% + 4px);
  left: 0;
  margin: 0;
  padding: 0.25rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.listDialogBackgroundColor};
  border: 1px solid ${(props) => props.theme.listDialogBorderColor};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: default;
  color: ${(props) => props.theme.listOptionFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
`;

const OptionsSystemMessage = styled.span`
  display: flex;
  padding: 4px 16px;
  color: ${(props) => props.theme.systemMessageFontColor};
  font-size: 0.875rem;
  line-height: 1.715em;
`;

const NoMatchesFoundIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 16px;
  width: 16px;
  padding: 4px;
  margin-right: 0.25rem;
`;

const GroupList = styled.ul`
  padding: 0;
`;

const GroupLabel = styled.li`
  padding: 4px 16px;
  font-weight: ${(props) => props.theme.listGroupLabelFontWeight};
  line-height: 1.715em;
`;

const OptionItem = styled.li`
  padding: 0 0.5rem;
  box-shadow: inset 0 0 0 2px transparent;
  ${(props) => props.visualFocused && `box-shadow: inset 0 0 0 2px ${props.theme.focusListOptionBorderColor};`}
  ${(props) => props.selected && `background-color: ${props.theme.selectedListOptionBackgroundColor}`};
  line-height: 1.715em;
  cursor: pointer;

  &:hover {
    ${(props) =>
      props.selected
        ? `background-color: ${props.theme.selectedHoverListOptionBackgroundColor};`
        : `background-color: ${props.theme.unselectedHoverListOptionBackgroundColor};`};
  }
  &:active {
    ${(props) =>
      props.selected
        ? `background-color: ${props.theme.selectedActiveListOptionBackgroundColor};`
        : `background-color: ${props.theme.unselectedActiveListOptionBackgroundColor};`};
  }
`;

const StyledOption = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem 0.188rem 0;
  min-height: 24px;
  ${(props) => props.grouped && props.multiple && `padding-left: 16px;`}
  ${(props) =>
    props.last || props.visualFocused || props.selected
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionDividerColor}`};
`;

const OptionContent = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  ${(props) => (props.grouped && !props.multiple && !props.hasIcon ? "padding-left: 16px;" : "padding-left: 8px;")}
`;

const OptionIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  ${(props) => (props.grouped && !props.multiple ? "padding-left: 16px;" : "padding-left: 8px;")}
  color: ${(props) => props.theme.listOptionIconColor};
`;

const OptionIconImg = styled.img`
  width: 16px;
  height: 16px;
`;

const OptionLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionSelectedIndicator = styled.span`
  display: flex;
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${(props) => props.theme.selectedListOptionIconColor};
`;

export default DxcSelect;
