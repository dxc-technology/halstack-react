import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import { spaces } from "../common/variables.js";
import BackgroundColorContext from "../BackgroundColorContext.js";
import { v4 as uuidv4 } from "uuid";
import { getMargin } from "../common/utils.js";
import { useLayoutEffect } from "react";
import DxcCheckbox from "../checkbox/Checkbox";

const selectIcons = {
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  arrowUp: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
    </svg>
  ),
  arrowDown: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  ),
  clear: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  ),
  selected: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  ),
  searchOff: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
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

const DxcNewSelect = React.forwardRef(
  (
    {
      label = "",
      name = "",
      value,
      options,
      helperText = "",
      placeholder = "",
      disabled = false,
      optional = false,
      searchable = false,
      multiple = false,
      onChange,
      onBlur,
      error = "",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ) => {
    const [selectId] = useState(`select-${uuidv4()}`);
    const selectLabelId = `label-${selectId}`;
    const [innerValue, setInnerValue] = useState(multiple ? [] : "");
    const [searchValue, setSearchValue] = useState("");
    const [isBackgroundValue, changeIsBackgroundValue] = useState(false);

    const [isOpen, changeIsOpen] = useState(false);
    const [isActiveOption, changeIsActiveOption] = useState(false);
    const [isScrollable, changeIsScrollable] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);

    const selectContainerRef = useRef(null);
    const selectSearchInputRef = useRef(null);
    const selectOptionsListRef = useRef(null);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);

    const optionalEmptyOption = { label: placeholder, value: "" };

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
      if (!isOpen && canBeOpenOptions()) {
        searchable && changeIsBackgroundValue(true);
        changeIsOpen(true);
      }
    };
    const closeOptions = () => {
      if (isOpen) {
        searchable && changeIsBackgroundValue(false);
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
      changeVisualFocusIndex(0);
      isOpen ? closeOptions() : openOptions();
      searchable && selectSearchInputRef.current.focus();
    };
    const handleSelectOnFocus = () => {
      searchable && selectSearchInputRef.current.focus();
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
          changeVisualFocusIndex((visualFocusIndex) => {
            if (visualFocusIndex < lastOptionIndex) return visualFocusIndex + 1;
            else if (visualFocusIndex === lastOptionIndex) return 0;
          });
          openOptions();
          changeIsActiveOption(false);
          isOpen && changeIsScrollable(true);
          break;
        case 38: // Arrow Up
          event.preventDefault();
          changeVisualFocusIndex((visualFocusIndex) =>
            visualFocusIndex === 0 || visualFocusIndex === -1 ? lastOptionIndex : visualFocusIndex - 1
          );
          openOptions();
          changeIsActiveOption(false);
          isOpen && changeIsScrollable(true);
          break;
        case 27: // Esc
          event.preventDefault();
          closeOptions();
          setSearchValue("");
          break;
        case 13: // Enter
          if (isOpen) {
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
      !isOpen && changeVisualFocusIndex(0);
      openOptions();
    };

    const handleClearActionOnClick = (event) => {
      event.stopPropagation();
      setSearchValue("");
    };

    const handleClearOptionsActionOnClick = (event) => {
      event.stopPropagation();
      value ?? setInnerValue([]);
      onChange?.({ value: [], error: getNotOptionalErrorMessage() });
      selectContainerRef.current.focus();
    };

    const getLastOptionIndex = () => {
      let last = 0;
      const reducer = (acc, current) => acc + current.options?.length;

      if (searchable && filteredOptions.length > 0)
        filteredOptions[0].options
          ? (last = filteredOptions.reduce(reducer, 0) - 1)
          : (last = filteredOptions.length - 1);
      else if (options?.length > 0)
        options[0].options ? (last = options.reduce(reducer, 0) - 1) : (last = options.length - 1);

      return optional && !multiple ? last + 1 : last;
    };
    const lastOptionIndex = useMemo(
      () => getLastOptionIndex(),
      [searchable, optional, multiple, searchable ? filteredOptions : options]
    );

    const getSelectedOption = () => {
      const val = value ?? innerValue;
      let selectedOption = multiple ? [] : "";

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
        if (options?.length > 0) {
          options.forEach((option) => {
            if (option.options) {
              option.options.forEach((singleOption) => {
                if (singleOption.value === val) selectedOption = singleOption;
              });
            } else if (option.value === val) selectedOption = option;
          });
        }
      }

      return selectedOption;
    };
    const selectedOption = useMemo(() => getSelectedOption(), [options, multiple, value ?? innerValue]);

    useLayoutEffect(() => {
      if (isScrollable) {
        const visualFocusedOptionEl =
          selectOptionsListRef?.current?.querySelectorAll("[role='option']")[visualFocusIndex];
        visualFocusedOptionEl?.scrollIntoView({ block: "nearest", inline: "start" });
        return changeIsScrollable(false);
      }
    }, [isScrollable]);

    useEffect(() => {
      if (searchable && options?.length > 0) {
        if (options[0].options) {
          setFilteredOptions(
            options.map((optionGroup) => {
              const group = JSON.parse(JSON.stringify(optionGroup)); // circular issue
              group.options = group.options.filter((option) =>
                option.label.toUpperCase().includes(searchValue.toUpperCase())
              );
              return group;
            })
          );
        } else
          setFilteredOptions(
            options.filter((option) => option.label.toUpperCase().includes(searchValue.toUpperCase()))
          );
      }
    }, [options, searchable, searchValue]);

    useEffect(() => {
      visualFocusIndex > lastOptionIndex && changeVisualFocusIndex(0);
    }, [filteredOptions]);

    const Option = ({ option, index, isGroupedOption = false }) => {
      const isSelected = multiple
        ? (value ?? innerValue).includes(option.value)
        : (value ?? innerValue) === option.value;
      const isLastOption = index === lastOptionIndex;

      return (
        <OptionItem
          onMouseDown={(event) => {
            // left mouse button only
            event.button === 0 && changeIsActiveOption(true);
          }}
          onMouseUp={(event) => {
            if (event.button === 0 && isActiveOption) {
              // left mouse button only
              handleSelectChangeValue(option);
              !multiple && closeOptions();
              setSearchValue("");
              changeIsActiveOption(false);
            }
          }}
          onMouseEnter={() => {
            changeVisualFocusIndex(index);
          }}
          onMouseLeave={() => {
            changeIsActiveOption(false);
          }}
          visualFocused={visualFocusIndex === index}
          active={visualFocusIndex === index && isActiveOption}
          selected={isSelected}
          aria-selected={isSelected && "true"}
          role="option"
        >
          <StyledOption
            visualFocused={visualFocusIndex === index}
            active={visualFocusIndex === index && isActiveOption}
            selected={isSelected}
            last={isLastOption}
            grouped={isGroupedOption}
            multiple={multiple}
          >
            {multiple && <DxcCheckbox tabIndex={-1} checked={isSelected} />}
            {option.icon && (
              <OptionIcon>
                {typeof option.icon === "string" ? <OptionIconImg src={option.icon}></OptionIconImg> : option.icon}
              </OptionIcon>
            )}
            <OptionContent grouped={isGroupedOption} hasIcon={option.icon} multiple={multiple}>
              <OptionLabel>{option.label}</OptionLabel>
              {!multiple && isSelected && <SelectedIcon>{selectIcons.selected}</SelectedIcon>}
            </OptionContent>
          </StyledOption>
        </OptionItem>
      );
    };

    let global_index = optional && !multiple ? 0 : -1; // index for options (not groups), starting from 0 to options.length -1
    const mapOptionFunc = (option) => {
      if (option.options) {
        return (
          <>
            {option.options.length > 0 && <OptionGroupLabel>{option.label}</OptionGroupLabel>}
            {option.options.map((singleOption) => {
              global_index++;
              return <Option option={singleOption} index={global_index} isGroupedOption={true} />;
            })}
          </>
        );
      } else {
        global_index++;
        return <Option option={option} index={global_index} />;
      }
    };

    return (
      <ThemeProvider theme={colorsTheme.newSelect}>
        <DxcSelect margin={margin} size={size} ref={ref}>
          <Label
            id={selectLabelId}
            disabled={disabled}
            backgroundType={backgroundType}
            onClick={() => {
              selectContainerRef.current.focus();
            }}
          >
            {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
          </Label>
          <HelperText disabled={disabled} backgroundType={backgroundType}>
            {helperText}
          </HelperText>
          <SelectContainer
            id={selectId}
            backgroundType={backgroundType}
            disabled={disabled}
            error={error}
            onBlur={handleSelectOnBlur}
            onClick={handleSelectOnClick}
            onFocus={handleSelectOnFocus}
            onKeyDown={handleSelectOnKeyDown}
            ref={selectContainerRef}
            tabIndex={tabIndex}
            aria-labelledby={selectLabelId}
          >
            {multiple && selectedOption.length > 0 && (
              <SelectionIndicator>
                <SelectionValue>{selectedOption.length} </SelectionValue>
                <ClearOptionsAction
                  onClick={handleClearOptionsActionOnClick}
                  backgroundType={backgroundType}
                  tabIndex={-1}
                  title="Clear selected options"
                  aria-label="Clear selected options"
                >
                  {selectIcons.clear}
                </ClearOptionsAction>
              </SelectionIndicator>
            )}
            <SearchableValueContainer>
              <ValueInput name={name} value={value ?? innerValue} readOnly />
              {searchable && (
                <SearchInput
                  value={searchValue}
                  disabled={disabled}
                  onChange={handleSearchIOnChange}
                  ref={selectSearchInputRef}
                  autoComplete="off"
                  autoCorrect="off"
                ></SearchInput>
              )}
              {(!searchable || searchValue === "") &&
                (multiple ? (
                  <SelectedOption
                    disabled={disabled}
                    backgroundValue={(value ?? innerValue).length === 0 || isBackgroundValue}
                  >
                    <OptionLabel>{selectedOption.map((option) => option.label).join(", ")}</OptionLabel>
                    {selectedOption.length === 0 && placeholder}
                  </SelectedOption>
                ) : (
                  <SelectedOption disabled={disabled} backgroundValue={!(value ?? innerValue) || isBackgroundValue}>
                    <OptionLabel>{selectedOption?.label ?? placeholder}</OptionLabel>
                  </SelectedOption>
                ))}
            </SearchableValueContainer>
            {!disabled && error && <ErrorIcon backgroundType={backgroundType}>{selectIcons.error}</ErrorIcon>}
            {searchable && searchValue.length > 0 && (
              <ClearAction
                onClick={handleClearActionOnClick}
                backgroundType={backgroundType}
                tabIndex={-1}
                title="Clear search text"
                aria-label="Clear search text"
              >
                {selectIcons.clear}
              </ClearAction>
            )}
            <Arrow disabled={disabled} backgroundType={backgroundType}>
              {isOpen ? selectIcons.arrowUp : selectIcons.arrowDown}
            </Arrow>
            {isOpen && (
              <OptionsList
                onClick={(event) => {
                  event.stopPropagation();
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                ref={selectOptionsListRef}
                role="listbox"
                aria-label={label}
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
          </SelectContainer>
          {!disabled && <Error backgroundType={backgroundType}>{error}</Error>}
        </DxcSelect>
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

const DxcSelect = styled.div`
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

const Label = styled.span`
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
  line-height: 1.715em;
  cursor: default;
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

const SelectContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  margin: calc(1rem * 0.25) 0;
  padding: 0 calc(1rem * 0.5);
  outline: none;
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
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor: pointer;")};

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

const SelectionIndicator = styled.span`
  display: flex;
  border: 1px solid ${(props) => props.theme.selectionIndicatorBorderColor};
  border-radius: 2px;
  width: 48px;
`;

const ClearOptionsAction = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  padding: 3px;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
  background-color: ${(props) => props.theme.enabledSelectionIndicatorActionBackgroundColor};
  color: ${(props) => props.theme.enabledSelectionIndicatorActionIconColor};

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

const SelectionValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  user-select: none;
  background-color: ${(props) => props.theme.selectionIndicatorBackgroundColor};
  border-right: 1px solid ${(props) => props.theme.selectionIndicatorBorderColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 11px;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: default;`)}
`;

const SearchableValueContainer = styled.div`
  display: grid;
  width: 100%;
`;

const SelectedOption = styled.span`
  grid-area: 1 / 1 / 1 / 1;
  display: inline-flex;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  padding: 0 calc(1rem * 0.5);
  user-select: none;
  overflow: hidden;

  color: ${(props) => {
    if (props.backgroundValue)
      return props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledPlaceholderFontColorOnDark
          : props.theme.disabledPlaceholderFontColor
        : props.backgroundType === "dark"
        ? props.theme.placeholderFontColorOnDark
        : props.theme.placeholderFontColor;
    else
      return props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledValueFontColorOnDark
          : props.theme.disabledValueFontColor
        : props.backgroundType === "dark"
        ? props.theme.valueFontColorOnDark
        : props.theme.valueFontColor;
  }};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  line-height: 1.5em;
`;

const ValueInput = styled.input`
  display: none;
`;

const SearchInput = styled.input`
  grid-area: 1 / 1 / 1 / 1;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
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
  line-height: 1.5em;

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

const ErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 3px;
  height: 18px;
  width: 18px;
  margin-left: calc(1rem * 0.25);
  pointer-events: none;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorIconColorOnDark : props.theme.errorIconColor};

  svg {
    line-height: 18px;
    font-size: 1.25rem;
  }
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

const Arrow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 16px;
  width: 16px;
  padding: 4px;
  margin-left: calc(1rem * 0.25);

  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledArrowColorOnDark
        : props.theme.disabledArrowColor
      : props.backgroundType === "dark"
      ? props.theme.arrowColorOnDark
      : props.theme.arrowColor};
`;

const ClearAction = styled.button`
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
  margin-left: calc(1rem * 0.25);
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}

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

const OptionsList = styled.ul`
  position: absolute;
  z-index: 1;
  max-height: 304px;
  overflow-x: auto;
  top: calc(100% + 4px);
  left: 0;
  margin: 0;
  padding: 4px 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.enabledListBorderColor};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: default;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.listOptionFontColor};
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
  margin-right: calc(1rem * 0.25);
`;

const OptionGroupLabel = styled.li`
  padding: 4px 16px;
  line-height: 1.715em;
  font-weight: 600;
`;

const OptionItem = styled.li`
  padding: 0 8px;
  line-height: 1.715em;
  cursor: pointer;

  ${(props) => {
    if (props.selected) {
      if (props.active) return `background-color: #BFBFBF`;
      else if (props.visualFocused) return `background-color: #CCCCCC`;
      else return `background-color: ${props.theme.selectedListOptionBackgroundColor}`;
    } else {
      if (props.active) return `background-color: ${props.theme.activeListOptionBackgroundColor};`;
      else if (props.visualFocused) return `background-color: ${props.theme.hoverListOptionBackgroundColor};`;
    }
  }};
`;

const StyledOption = styled.span`
  display: flex;
  padding: 4px 8px 3px 0;
  min-height: 24px;
  ${(props) => props.grouped && props.multiple && `padding-left: 16px;`}
  ${(props) =>
    props.last
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionBorderBottomColor}`};
`;

const OptionContent = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  padding-left: 8px;
  ${(props) => props.grouped && !props.multiple && !props.hasIcon && `padding-left: 16px;`}
`;

const OptionIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  margin-left: 8px;
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

const SelectedIcon = styled.span`
  display: flex;
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: #4d4d4d;
`;

export default DxcNewSelect;
