import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import Popper from "@material-ui/core/Popper";
import DxcRequired from "../common/RequiredComponent";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import errorIcon from "./error.svg";
import BackgroundColorContext from "../BackgroundColorContext.js";

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

const DxcInputText = ({
  label = " ",
  name = "",
  value,
  assistiveText = "",
  disabled = false,
  prefix = "",
  suffix = "",
  prefixIcon,
  suffixIcon,
  prefixIconSrc = "",
  suffixIconSrc = "",
  onClickPrefix,
  onClickSuffix,
  onChange = "",
  onBlur = "",
  invalid = false,
  required = false,
  isMasked = false,
  placeholder = "",
  margin,
  size = "medium",
  autocompleteOptions,
  tabIndex = 0,
}) => {
  const [innerValue, setInnerValue] = useState("");
  const [isOpen, changeIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filteredOptions, changeFilteredOptions] = useState([]);
  const [isSearching, changeIsSearching] = useState(false);
  const [isError, changeIsError] = useState(false);

  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const changeValue = (newValue) => {
    if (value === null || value === undefined) {
      if (typeof onChange === "function") {
        setInnerValue(newValue);
        onChange(newValue);
      } else {
        setInnerValue(newValue);
      }
    } else if (onChange !== "") {
      if (typeof onChange === "function") {
        onChange(newValue);
      } else {
        setInnerValue(newValue);
      }
    }
  };

  useEffect(() => {
    if (typeof autocompleteOptions === "function") {
      changeIsSearching(true);
      changeIsError(false);
      changeFilteredOptions([]);

      const cancelablePromise = makeCancelable(autocompleteOptions(value || innerValue));
      cancelablePromise.promise
        .then((promiseResponse) => {
          changeIsSearching(false);
          changeIsError(false);
          changeFilteredOptions(promiseResponse);
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
    }
    if (autocompleteOptions && autocompleteOptions.length) {
      changeFilteredOptions(
        autocompleteOptions.filter((option) => option.toUpperCase().includes((value || innerValue).toUpperCase()))
      );
    }
  }, [value, innerValue, autocompleteOptions]);

  const handlerInputChange = (event) => {
    if (autocompleteOptions) {
      changeIsError(false);
      setAnchorEl(event.currentTarget);
      changeIsOpen(true);
    }

    changeValue(event.target.value);
  };

  const handlerSuggestionClicked = (suggestion) => {
    changeIsOpen(false);
    changeValue(suggestion);
  };
  const handlerInputBlur = (event) => {
    changeIsOpen(false);
    setInnerValue(event.target.value);
    if (onBlur) {
      onBlur(event.target.value);
    }
  };
  const getFocus = (event) => {
    setAnchorEl(event.currentTarget);
    if (autocompleteOptions) {
      changeIsOpen(true);
    }
  };

  const handleSuffixKeyPress = (event) => {
    event.preventDefault();
    if (!disabled && (event.nativeEvent.code === "Enter" || event.nativeEvent.code === "Space")) {
      onClickSuffix(event);
    }
  };

  const handlePrefixKeyPress = (event) => {
    event.preventDefault();
    if (!disabled && (event.nativeEvent.code === "Enter" || event.nativeEvent.code === "Space")) {
      onClickPrefix(event);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.inputText}>
      <TextContainer
        prefixIcon={prefixIcon}
        prefixIconSrc={prefixIconSrc}
        prefix={prefix}
        required={required}
        assistiveText={assistiveText}
        margin={margin}
        size={size}
        backgroundType={backgroundType}
      >
        {prefixIcon ? (
          <PrefixIconContainer
            tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
            disabled={disabled}
            onClick={!disabled ? onClickPrefix : null}
            interactuable={typeof onClickPrefix === "function" && !disabled}
            backgroundType={backgroundType}
            onKeyPress={handlePrefixKeyPress}
          >
            {typeof prefixIcon === "object" ? prefixIcon : React.createElement(prefixIcon)}
          </PrefixIconContainer>
        ) : (
          (prefixIconSrc && (
            <PrefixIcon
              tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
              src={prefixIconSrc}
              disabled={disabled}
              onClick={!disabled ? onClickPrefix : null}
              interactuable={typeof onClickPrefix === "function" && !disabled}
              onKeyPress={handlePrefixKeyPress}
            />
          )) ||
          (prefix && (
            <PrefixLabel
              tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
              disabled={disabled}
              onClick={!disabled ? onClickPrefix : null}
              interactuable={typeof onClickPrefix === "function" && !disabled}
              backgroundType={backgroundType}
              onKeyPress={handlePrefixKeyPress}
            >
              {prefix}
            </PrefixLabel>
          ))
        )}
        <TextField
          error={invalid}
          value={value != null ? value : innerValue}
          name={name}
          disabled={disabled}
          label={
            required ? (
              <React.Fragment>
                <DxcRequired />
                {label}
              </React.Fragment>
            ) : (
              label
            )
          }
          helperText={assistiveText}
          onChange={(event) => handlerInputChange(event)}
          onBlur={handlerInputBlur}
          onFocus={(event) => getFocus(event)}
          placeholder={placeholder}
          type={isMasked ? "password" : "text"}
          InputProps={{
            endAdornment: (suffix || suffixIconSrc || suffixIcon) && (
              <InputAdornment position="end">
                {suffixIcon ? (
                  <SuffixIconContainer
                    tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
                    disabled={disabled}
                    onClick={onClickSuffix}
                    interactuable={typeof onClickSuffix === "function" && !disabled}
                    backgroundType={backgroundType}
                    onKeyPress={handleSuffixKeyPress}
                  >
                    {typeof suffixIcon === "object" ? suffixIcon : React.createElement(suffixIcon)}
                  </SuffixIconContainer>
                ) : (
                  (suffixIconSrc && (
                    <SuffixIcon
                      tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
                      disabled={disabled}
                      src={suffixIconSrc}
                      onClick={onClickSuffix}
                      interactuable={typeof onClickSuffix === "function" && !disabled}
                      onKeyPress={handleSuffixKeyPress}
                    />
                  )) || (
                    <SuffixLabel
                      tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
                      onClick={onClickSuffix}
                      disabled={disabled}
                      interactuable={typeof onClickSuffix === "function" && !disabled}
                      backgroundType={backgroundType}
                      onKeyPress={handleSuffixKeyPress}
                    >
                      {suffix}
                    </SuffixLabel>
                  )
                )}
              </InputAdornment>
            ),
          }}
          inputProps={{ tabIndex: tabIndex }}
        />
      </TextContainer>

      <DxcSuggestions
        open={isOpen}
        anchorEl={anchorEl}
        anchororigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        paperprops={{
          style: {
            marginTop: "0px",
          },
        }}
      >
        <SuggestionsContainer margin={margin} size={size}>
          <React.Fragment>
            <Paper>
              {isOpen && !isSearching && !isError && filteredOptions.length === 0 && (
                <MenuItem>No matches found.</MenuItem>
              )}
              {isOpen &&
                !isSearching &&
                filteredOptions.length > 0 &&
                filteredOptions.map((suggestion) => {
                  return (
                    <MenuItem
                      key={suggestion}
                      disableRipple
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => handlerSuggestionClicked(suggestion)}
                    >
                      {suggestion}
                    </MenuItem>
                  );
                })}

              {isSearching && <MenuItem>Searching...</MenuItem>}
              {isError && (
                <MenuItem>
                  Error fetching data
                  <ErrorIcon src={errorIcon} />
                </MenuItem>
              )}
            </Paper>
          </React.Fragment>
        </SuggestionsContainer>
      </DxcSuggestions>
    </ThemeProvider>
  );
};

const sizes = {
  small: "42px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const ErrorIcon = styled.img`
  padding-left: 12px;
`;

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const getCursor = (interactuable, disabled) => {
  if (disabled) {
    return "cursor:not-allowed;";
  }
  if (interactuable) {
    return "cursor:pointer;";
  }
  return "cursor:default; outline:none;";
};

const DxcSuggestions = styled(Popper)`
  z-index: 1301;
`;

const SuggestionsContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin, props.size)};
  .MuiPaper-root {
    max-height: 250px;

    overflow: auto;
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.scrollBarTrackColor};
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollBarThumbColor};
      border-radius: 3px;
    }
    
    li {
      font-family: ${(props) => props.theme.fontFamilyBase};
      font-size: ${(props) => props.theme.optionFontSize};
      font-style: ${(props) => props.theme.optionFontStyle};
      font-weight: ${(props) => props.theme.optionFontWeight};
      color: ${(props) => props.theme.optionFontColor};

      &:hover {
        color: ${(props) => props.theme.hoverOptionColor};
        background-color: ${(props) => props.theme.hoverOptionBackgroundColor};
      }
      &:active {
        background-color: ${(props) => props.theme.selectedOptionBackgroundColor};
      }
    }
  }
`;

const PrefixIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 0px;
  max-height: 20px;
  max-width: 20px;
  z-index: 1;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  ${(props) => getCursor(props.interactuable, props.disabled)};
`;

const PrefixIconContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.prefixIconColorOnDark : props.theme.prefixIconColor};
  z-index: 1;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  ${(props) => getCursor(props.interactuable, props.disabled)};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const PrefixLabel = styled.span`
  position: absolute;
  top: 20px;
  left: 0px;
  font-weight: ${(props) => props.theme.prefixLabelFontWeight};
  font-family: ${(props) => props.theme.fontFamilyBase};
  font-size: ${(props) => props.theme.prefixLabelFontSize};
  font-style: ${(props) => props.theme.prefixLabelFontStyle};
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.prefixLabelFontColorOnDark : props.theme.prefixLabelFontColor};
  max-height: 20px;
  max-width: 20px;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  z-index: 1;
  ${(props) => getCursor(props.interactuable, props.disabled)};
`;

const SuffixIcon = styled.img`
  top: 23px;
  left: 0;
  max-height: 20px;
  max-width: 20px;
  margin-right: 8px;
  width: 20px;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  ${(props) => getCursor(props.interactuable, props.disabled)};
`;

const SuffixIconContainer = styled.div`
  top: 23px;
  left: 0;
  max-height: 20px;
  max-width: 20px;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.suffixIconColorOnDark : props.theme.suffixIconColor};
  margin-right: 8px;
  width: 20px;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  ${(props) => getCursor(props.interactuable, props.disabled)};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const SuffixLabel = styled.span`
  ${(props) => getCursor(props.interactuable, props.disabled)};
  font-weight: ${(props) => props.theme.suffixLabelFontWeight};
  font-family: ${(props) => props.theme.fontFamilyBase};
  font-size: ${(props) => props.theme.suffixLabelFontSize};
  font-style: ${(props) => props.theme.suffixLabelFontStyle};
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.suffixLabelFontColorOnDark : props.theme.suffixLabelFontColor};
`;

const TextContainer = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: inline-block;
  position: relative;
  height: auto;
  width: ${(props) => calculateWidth(props.margin, props.size)};

  .MuiTextField-root {
    width: 100%;
    font-family: ${(props) => props.theme.fontFamilyBase};

    .MuiFormHelperText-root {
      font-weight: ${(props) => props.theme.assistiveTextFontWeight};
      font-family: ${(props) => props.theme.fontFamilyBase};
      font-size: ${(props) => props.theme.assistiveTextFontSize};
      font-style: ${(props) => props.theme.assistiveTextFontStyle};
      color: ${(props) =>
        props.backgroundType === "dark"
          ? props.theme.assistiveTextFontColorOnDark
          : props.theme.assistiveTextFontColor} !important;
      margin-top: 6px;
    }
    
    .MuiFormLabel-root {
      font-size: ${(props) => props.theme.labelFontSize};
      font-style: ${(props) => props.theme.labelFontStyle};
      font-weight: ${(props) => props.theme.labelFontWeight};
      color: ${(props) =>
        props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
      padding-left: ${(props) => ((props.prefixIconSrc || props.prefix || props.prefixIcon) && "32px") || "inherit"};

      &.Mui-disabled {
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.disabledColorOnDark
            : props.theme.disabledColor} !important;
        cursor: not-allowed;
      }

      &.Mui-focused {
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        &.MuiInputLabel-shrink {
          transform: ${(props) =>
            props.prefixIconSrc ||
            props.prefixIcon ||
            ((props.prefix || props.suffix) && "translate(8px, 1.5px) scale(0.75);") ||
            "translate(0, 1.5px) scale(0.75);"};
        }
      }

      &.MuiInputLabel-shrink {
        font-family: ${(props) => props.theme.fontFamilyBase};

        transform: ${(props) =>
          (props.prefixIcon && "translate(8px, 1.5px) scale(0.75);") ||
          (props.prefixIconSrc && "translate(8px, 1.5px) scale(0.75);") ||
          (props.prefix && "translate(8px, 1.5px) scale(0.75);") ||
          "translate(0, 1.5px) scale(0.75);"};
      }

      &.Mui-error {
        color: ${(props) => (props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor)};
      }

      &:not(.MuiInputLabel-shrink) {
        font-family: ${(props) => props.theme.fontFamilyBase};
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};

        & + div,
        & + div + p {
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.underlineColorOnDark : props.theme.underlineColor};
        }
        & + div + p {
          color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.labelFontColorOnDark : props.theme.labelFontColor};
        }
      }
    }

    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      font-family: ${(props) => props.theme.fontFamilyBase};

      &::before {
        border-bottom: ${(props) =>
          `${props.theme.underlineThickness} solid ${
            props.backgroundType === "dark" ? props.theme.underlineColorOnDark : props.theme.underlineColor
          }`};
      }

      &:not(.Mui-error)::before,
      &:not(&.Mui-focused)::before {
        border-bottom: ${(props) =>
          `${props.theme.underlineThickness} solid ${
            props.backgroundType === "dark" ? props.theme.underlineColorOnDark : props.theme.underlineColor
          }`};
      }

      &::after {
        border-bottom: ${(props) =>
          `2px solid ${
            props.backgroundType === "dark" ? props.theme.underlineFocusColorOnDark : props.theme.underlineFocusColor
          }`};
      }

      &.Mui-error {
        &::before {
          border-width: ${(props) => props.theme.underlineThickness};
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.underlineFocusColorOnDark : props.theme.underlineFocusColor};
          transform: scaleX(1);
        }
        &.Mui-error::after {
          border-color: ${(props) =>
            props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor};
        }
      }

      &.Mui-disabled {
        cursor: not-allowed;

        &::before {
          border-bottom: ${(props) =>
            `${props.theme.underlineThickness} solid ${
              props.backgroundType === "dark" ? props.theme.disabledColorOnDark : props.theme.disabledColor
            } !important`};
          border-bottom-style: solid;
        }
      }

      .MuiInputBase-input {
        font-size: ${(props) => props.theme.customContentFontSize};
        font-style: ${(props) => props.theme.customContentFontStyle};
        font-weight: ${(props) => props.theme.customContentFontWeight};
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.customContentFontColorOnDark
            : props.theme.customContentFontColor};
        padding-left: ${(props) => ((props.prefixIconSrc || props.prefix || props.prefixIcon) && "32px") || "inherit"};
        text-overflow: ellipsis;

        &.Mui-disabled {
          color: ${(props) =>
            props.backgroundType === "dark"
              ? props.theme.disabledColorOnDark
              : props.theme.disabledColor} !important;
          cursor: not-allowed;
        }
      }

      .MuiInputAdornment-root {
        height: 20px;

        &.MuiInputAdornment-positionEnd {
          & > p {
            font-family: ${(props) => props.theme.fontFamilyBase};
            margin-right: 8px;
            margin-bottom: 1px;
          }
        }
        &.Mui-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before {
        border-bottom-color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.underlineFocusColorOnDark : props.theme.underlineFocusColor};
      }
    }

    & > p {
      &.Mui-error {
        color: ${(props) =>
          props.backgroundType === "dark" ? props.theme.errorColorOnDark : props.theme.errorColor} !important;
      }
      &.Mui-disabled {
        color: ${(props) =>
          props.backgroundType === "dark"
            ? props.theme.disabledColorOnDark
            : props.theme.disabledColor} !important;
        cursor: not-allowed;
      }
    }
  }
`;

DxcInputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  prefixIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  suffixIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  prefixIconSrc: PropTypes.string,
  suffixIconSrc: PropTypes.string,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  isMasked: PropTypes.bool,
  onClickIcon: PropTypes.func,
  onClickPrefix: PropTypes.func,
  onClickSuffix: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  autocompleteOptions: PropTypes.any,
  tabIndex: PropTypes.number,
};

export default DxcInputText;
