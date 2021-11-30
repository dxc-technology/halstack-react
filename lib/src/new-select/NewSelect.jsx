import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import { spaces } from "../common/variables.js";
import BackgroundColorContext from "../BackgroundColorContext.js";
import { getMargin } from "../common/utils.js";

const getNotOptionalErrorMessage = () => `This field is required. Please, enter a value.`;

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
};

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
      readOnly = false,
      // multiple = false,
      onChange,
      onBlur,
      error = "",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [isBackgroundValue, changeIsBackgroundValue] = useState(false);

    const [isOpen, changeIsOpen] = useState(false);
    const [isActiveOption, changeIsActiveOption] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [visualFocusedSuggIndex, changeVisualFocusedSuggIndex] = useState(-1);

    const selectContainerRef = useRef(null);
    const selectInputRef = useRef(null);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);

    const notOptionalCheck = (value) => value === "" && !optional;

    const canBeOpenOptions = () => !disabled && !readOnly && options && options.length; // === options?.length ???
    const groupsHaveOptions = () =>
      options[0].options ? filteredOptions.some((option) => option.options?.length > 0) : true;
    const openOptions = () => {
      if (canBeOpenOptions()) {
        searchable && changeIsBackgroundValue(true);
        changeIsOpen(true);
      }
    };
    const closeOptions = () => {
      searchable && changeIsBackgroundValue(false);
      changeIsOpen(false);
      changeVisualFocusedSuggIndex(-1);
    };

    const handleSelectChangeValue = (newValue) => {
      value ?? setInnerValue(newValue);

      if (notOptionalCheck(newValue)) onChange?.({ value: newValue, error: getNotOptionalErrorMessage() });
      else onChange?.({ value: newValue, error: null });
    };
    const handleSelectOnClick = () => {
      isOpen ? closeOptions() : openOptions();
      searchable && selectInputRef.current.focus();
    };
    const handleSelectOnFocus = () => {
      searchable && selectInputRef.current.focus();
    };
    const handleSelectOnBlur = (event) => {
      // focus leaves container (outside, not to childs)
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setSearchValue("");
        closeOptions();

        if (notOptionalCheck(value ?? innerValue))
          onBlur?.({ value: value ?? innerValue, error: getNotOptionalErrorMessage() });
        else onBlur?.({ value: value ?? innerValue, error: null });
      }
    };

    const handleSearchIOnChange = (event) => {
      openOptions();
      setSearchValue(event.target.value);
    };

    const handleClearActionOnClick = (event) => {
      event.stopPropagation(); // not bubbling, clear not executes select event onClick
      setSearchValue("");
    };

    const getSingleSelectedOptionLabel = () => {
      const val = value ?? innerValue;
      let selectedOptionLabel;

      if (options && options.length) {
        options.forEach((option) => {
          if (option.options) {
            option.options.forEach((singleOption) => {
              if (singleOption.value === val) selectedOptionLabel = singleOption.label;
            });
          } else if (option.value === val) selectedOptionLabel = option.label;
        });
      }

      return selectedOptionLabel;
    };

    useEffect(() => {
      if (searchable && options && options.length) {
        changeVisualFocusedSuggIndex(-1);
        if (options[0].options) {
          setFilteredOptions(
            options.map((optionGroup) => {
              let group = JSON.parse(JSON.stringify(optionGroup)); // anything better?
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

    const lastIndex = (isGroupedOptions) => {
      let last = 0;

      if (isGroupedOptions) {
        filteredOptions.length
          ? filteredOptions.forEach((option) => (last += option.options.length))
          : options.forEach((option) => (last += option.options.length));
      } else last = filteredOptions.length ? filteredOptions.length - 1 : options.length - 1;

      return last;
    };
    const Option = ({ option, index, isGroupedOption = false }) => {
      const isSelected = (value ?? innerValue) === option.value;
      const isLastOption = index === lastIndex(isGroupedOption);

      return (
        <OptionItem
          onMouseDown={(event) => {
            event.button === 0 && changeIsActiveOption(true); // left button only
          }}
          onMouseUp={(event) => {
            if (event.button === 0 && isActiveOption) {
              // left button only
              handleSelectChangeValue(option.value);
              setSearchValue("");
              changeIsActiveOption(false);
              closeOptions(); // if not multiple
            }
          }}
          onMouseEnter={() => {
            changeVisualFocusedSuggIndex(index);
          }}
          onMouseLeave={() => {
            changeIsActiveOption(false);
          }}
          visualFocused={visualFocusedSuggIndex === index}
          active={visualFocusedSuggIndex === index && isActiveOption}
          selected={isSelected}
        >
          <StyledOption
            visualFocused={visualFocusedSuggIndex === index}
            active={visualFocusedSuggIndex === index && isActiveOption}
            selected={isSelected}
            last={isLastOption}
          >
            <OptionLabel grouped={isGroupedOption}>{option.label}</OptionLabel>
            {isSelected && <SelectedIcon>{selectIcons.selected}</SelectedIcon>}
          </StyledOption>
        </OptionItem>
      );
    };
    let global_index = 0;
    const mapOptionFunc = (option, index) => {
      if (option.options) {
        return (
          <>
            {option.options.length > 0 && <OptionGroup>{option.label}</OptionGroup>}
            {option.options.map((singleOption) => {
              global_index++;
              return <Option option={singleOption} index={global_index} isGroupedOption={true} />;
            })}
          </>
        );
      } else return <Option option={option} index={index} />;
    };

    return (
      <ThemeProvider theme={colorsTheme.newSelect}>
        <DxcSelect margin={margin} size={size} ref={ref}>
          <Label htmlFor="input-id" disabled={disabled} backgroundType={backgroundType}>
            {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
          </Label>
          <HelperText disabled={disabled} backgroundType={backgroundType}>
            {helperText}
          </HelperText>
          <SelectContainer
            backgroundType={backgroundType}
            disabled={disabled}
            error={error}
            onBlur={handleSelectOnBlur}
            onClick={handleSelectOnClick}
            onFocus={handleSelectOnFocus}
            tabIndex={tabIndex}
            ref={selectContainerRef}
          >
            <SearchableValueContainer>
              {searchable && (
                <SearchInput
                  id="input-id"
                  name={name}
                  value={searchValue}
                  disabled={disabled}
                  readOnly={readOnly}
                  onChange={handleSearchIOnChange}
                  ref={selectInputRef}
                  autoComplete="off"
                  autoCorrect="off"
                ></SearchInput>
              )}
              {(!searchable || searchValue === "") && (
                <SelectedOption disabled={disabled} placeholder={!(value ?? innerValue) || isBackgroundValue}>
                  {getSingleSelectedOptionLabel() ?? placeholder}
                </SelectedOption>
              )}
            </SearchableValueContainer>
            {!disabled && error && <ErrorIcon backgroundType={backgroundType}>{selectIcons.error}</ErrorIcon>}
            {searchable && searchValue.length > 0 && (
              <ClearAction onClick={handleClearActionOnClick} backgroundType={backgroundType} tabIndex={-1}>
                {selectIcons.clear}
              </ClearAction>
            )}
            <Arrow disabled={disabled} backgroundType={backgroundType}>
              {isOpen ? selectIcons.arrowUp : selectIcons.arrowDown}
            </Arrow>
            {((searchable && filteredOptions.length > 0 && groupsHaveOptions() && isOpen) ||
              (!searchable && isOpen)) && (
              <OptionsList
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onMouseLeave={() => {
                  changeVisualFocusedSuggIndex(-1);
                }}
              >
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
  line-height: 1.715em;
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

const SearchableValueContainer = styled.div`
  display: grid;
  width: 100%;
`;

const SelectedOption = styled.span`
  grid-area: 1 / 1 / 1 / 1;
  display: inline-flex;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  max-width: 100%;
  padding: 0 calc(1rem * 0.5);
  overflow: hidden;
  white-space: nowrap;

  color: ${(props) => {
    if (props.placeholder)
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
  ${(props) => props.disabled && `cursor: not-allowed;`}
`;

const SearchInput = styled.input`
  grid-area: 1 / 1 / 1 / 1;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  max-width: 100%;
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
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 3px;
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
  border-radius: 4px;
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
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.listOptionFontColor};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
`;

const OptionGroup = styled.li`
  padding: 4px 16px 4px 16px;
  line-height: 1.715em;
  font-weight: 600;
`;

const OptionItem = styled.li`
  padding: 0 8px 0 8px;
  line-height: 1.715em;

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

const StyledOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 8px 3px 8px;
  ${(props) =>
    props.last
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionBorderBottomColor}`};
`;

const OptionLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.grouped && `padding-left: 8px;`}
`;

const SelectedIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: #4d4d4d;
`;

export default DxcNewSelect;
