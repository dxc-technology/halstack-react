import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import { spaces } from "../common/variables.js";
import BackgroundColorContext from "../BackgroundColorContext.js";
import { v4 as uuidv4 } from "uuid";

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
    const [isChildrenFocused, changeIsChildrenFocused] = useState(false);

    const [isOpen, changeIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);

    const selectInputRef = useRef(null);
    const clearRef = useRef(null);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);

    const selectId = `select-${uuidv4()}`;
    const errorId = `error-message-${selectId}`;

    const notOptionalCheck = (value) => value === "" && !optional;

    const changeValue = (newValue) => {
      value ?? setInnerValue(newValue);
      typeof onChange === "function" && onChange(newValue);
    };

    const canBeOpen = () => options && options.length > 0;

    const openOptions = () => {
      canBeOpen() && changeIsOpen(true);
    };

    const closeOptions = () => {
      changeIsOpen(false);
    };

    const handleSelectOnClick = () => {
      isOpen ? closeOptions() : openOptions();
      searchable && selectInputRef.current.focus();
    };

    const handleSelectOnBlur = (event) => {
      if (!isChildrenFocused) {
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

    const handleSearchIOnMouseDown = () => {
      changeIsChildrenFocused(true);
    };

    const handleClearActionOnClick = () => {
      setSearchValue("");
      selectInputRef.current.focus();
    };

    const getSingleSelectedOptionLabel = () => {
      const index = value ?? innerValue;
      // Mas optimo condicionar a searchable?? Busqueda en array menor cuando hay
      return options.filter((option) => option.value === index)[0]?.label;
    };

    useEffect(() => {
      if (options && options.length)
        setFilteredOptions(
          options.filter((option) => option.label.toUpperCase().startsWith(searchValue.toUpperCase()))
        );
    }, [searchValue, options]);

    const Option = ({ option, index }) => {
      const isSelected = (value ?? innerValue) === option.value;
      const isLastOption = filteredOptions.length ? index === filteredOptions.length - 1 : index === options.length - 1;

      return (
        <OptionContainer
          selected={isSelected}
          onMouseUp={() => {
            changeValue(option.value);
            closeOptions(); // condicionar, si es multiple no
          }}
        >
          <StyledOption selected={isSelected} last={isLastOption}>
            <OptionLabel>{option.label}</OptionLabel>
          </StyledOption>
        </OptionContainer>
      );
    };

    return (
      <ThemeProvider theme={colorsTheme.newSelect}>
        <DxcSelect margin={margin} size={size} ref={ref}>
          <Label htmlFor={selectId} disabled={disabled} backgroundType={backgroundType}>
            {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
          </Label>
          <HelperText disabled={disabled} backgroundType={backgroundType}>
            {helperText}
          </HelperText>
          <SelectContainer
            error={error}
            disabled={disabled}
            backgroundType={backgroundType}
            onClick={handleSelectOnClick}
            onBlur={handleSelectOnBlur}
            tabIndex={tabIndex}
          >
            {searchable ? (
              <SearchInput
                id={selectId}
                name={name}
                value={searchValue}
                placeholder={placeholder}
                onChange={handleSearchIOnChange}
                onMouseDown={handleSearchIOnMouseDown}
                // onKeyDown={handleSearchIOnMouseDown}
                disabled={disabled}
                ref={selectInputRef}
                autoComplete="off"
              ></SearchInput>
            ) : (
              <SelectedOption
                id={selectId}
                name={name}
                disabled={disabled}
                placeholder={getSingleSelectedOptionLabel() ? false : true}
              >
                {getSingleSelectedOptionLabel() ?? placeholder}
              </SelectedOption>
            )}
            {!disabled && error && <ErrorIcon backgroundType={backgroundType}>{selectIcons.error}</ErrorIcon>}
            {!disabled && searchable && searchValue.length > 0 && (
              <ClearAction
                onClick={handleClearActionOnClick}
                onMouseDown={handleSearchIOnMouseDown}
                // onKeyDown={handleSearchIOnMouseDown}
                backgroundType={backgroundType}
                ref={clearRef}
              >
                {selectIcons.clear}
              </ClearAction>
            )}
            <Arrow disabled={disabled} backgroundType={backgroundType}>
              {isOpen ? selectIcons.arrowUp : selectIcons.arrowDown}
            </Arrow>
            {isOpen && (
              <OptionsContainer
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
              >
                {searchable && filteredOptions.length === 0 && (
                  <NoOptionsSystemMessage>No options available</NoOptionsSystemMessage>
                )}
                {searchable
                  ? filteredOptions.map((option, index) => <Option option={option} index={index} />)
                  : options.map((option, index) => <Option option={option} index={index} />)}
              </OptionsContainer>
            )}
          </SelectContainer>
          {!disabled && (
            <Error id={errorId} backgroundType={backgroundType}>
              {error}
            </Error>
          )}
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

const SelectedOption = styled.span`
  display: inline-flex;
  align-items: center;
  height: calc(calc(1rem * 2.5) - calc(1px * 2));
  padding: 0 calc(1rem * 0.5);
  width: 100%;

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
      props.disabled
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
  box-shadow: 0 0 0 2px transparent;
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
        box-shadow: 0 0 0 2px ${
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
        box-shadow: 0 0 0 2px ${
          props.backgroundType === "dark"
            ? props.theme.focusActionBorderColorOnDark
            : props.theme.focusActionBorderColor
        };
        color: ${
          props.backgroundType === "dark" ? props.theme.focusActionIconColorOnDark : props.theme.focusActionIconColor
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

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  max-height: 160px;
  overflow: auto;
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

const NoOptionsSystemMessage = styled.span`
  padding: 4px 8px 4px 16.15px;
  color: ${(props) => props.theme.systemMessageFontColor};
  font-size: 0.875rem;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px 0 8px;
  line-height: 1.75em;

  background-color: ${(props) => props.selected && `${props.theme.selectedListOptionBackgroundColor}`};
  :hover {
    background-color: ${(props) => (props.selected ? "#CCCCCC" : props.theme.hoverListOptionBackgroundColor)};
  }
  :active {
    background-color: ${(props) => (props.selected ? "#BFBFBF" : props.theme.activeListOptionBackgroundColor)};
  }
`;

const StyledOption = styled.span`
  padding: 4px 0 3px 0;
  ${(props) =>
    !props.last &&
    `border-bottom: 1px solid ${
      props.selected ? props.theme.selectedListOptionBackgroundColor : props.theme.listOptionBorderBottomColor
    }`};

  :hover {
    border-bottom-color: ${(props) => (props.selected ? "#CCCCCC" : props.theme.hoverListOptionBackgroundColor)};
  }
  :active {
    border-bottom-color: ${(props) => (props.selected ? "#BFBFBF" : props.theme.activeListOptionBackgroundColor)};
  }
`;

const OptionLabel = styled.span`
  padding-left: 8.15px;
`;

export default DxcNewSelect;
