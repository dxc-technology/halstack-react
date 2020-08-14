import React, { useState, useContext, useEffect, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import DxcRequired from "../common/RequiredComponent";

import PropTypes from "prop-types";
import "../common/OpenSans.css";
import Popper from "@material-ui/core/Popper";

import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getMargin, getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";
import errorIcon from "./error.svg";

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
}) => {
  const [innerValue, setInnerValue] = useState("");
  const [isOpen, changeIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filteredOptions, changeFilteredOptions] = useState([]);
  const [isSearching, changeIsSearching] = useState(false);
  const [isError, changeIsError] = useState(false);

  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

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
  return (
    <ThemeProvider theme={colorsTheme.inputText}>
      <TextContainer
        prefixIconSrc={prefixIconSrc}
        prefix={prefix}
        required={required}
        assistiveText={assistiveText}
        margin={margin}
        size={size}
      >
        {prefixIconSrc && <PrefixIcon src={prefixIconSrc} disabled={disabled} onClick={onClickPrefix} />}
        {prefix && (
          <PrefixLabel disabled={disabled} onClick={onClickPrefix}>
            {prefix}
          </PrefixLabel>
        )}
        <TextField
          error={invalid}
          value={value != null ? value : innerValue}
          name={name}
          disabled={disabled}
          label={
            required ? (
              <React.Fragment>
                <DxcRequired>{label}</DxcRequired>
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
            endAdornment: (suffix || suffixIconSrc) && (
              <InputAdornment position="end" onClick={onClickSuffix}>
                {(suffixIconSrc && <SuffixIcon disabled={disabled} src={suffixIconSrc} onClick={onClickSuffix} />) ||
                  suffix}
              </InputAdornment>
            ),
          }}
        />
      </TextContainer>

      <Popper
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
      </Popper>
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
const SuggestionsContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin, props.size)};
  .MuiPaper-root {
    max-height: 250px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.lightGrey};
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.darkGrey};
      border-radius: 3px;
    }
  }
`;

const PrefixIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 0px;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  z-index: 1;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  cursor: ${(props) => {
    if (props.onClickPrefix !== "" && !props.disabled) {
      return "pointer";
    }
    return "default";
  }};
`;
const PrefixLabel = styled.span`
  position: absolute;
  top: 20px;
  left: 0px;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => props.theme.fontColor};
  max-height: 20px;
  max-width: 20px;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  z-index: 1;
  cursor: ${(props) => {
    if (props.onClickPrefix !== "" && !props.disabled) {
      return "pointer";
    }
    return "default";
  }};
`;

const SuffixIcon = styled.img`
  top: 23px;
  left: 0;
  max-height: 20px;
  max-width: 20px;
  margin-right: 8px;
  width: 20px;
  opacity: ${(props) => (props.disabled && 0.5) || 1};
  cursor: ${(props) => {
    if (props.onClickSuffix !== "" && !props.disabled) {
      return "pointer";
    }
    return "default";
  }};
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
    font-family: "Open Sans", sans-serif;
    .MuiFormHelperText-root {
      font-family: "Open Sans", sans-serif;
      margin-top: 6px;
    }
    .MuiFormLabel-root {
      font-size: 16px;
      color: ${(props) => props.theme.fontColor};
      &.Mui-disabled {
        opacity: ${(props) => props.theme.disabledAssistiveTextColor};
      }
      padding-left: ${(props) => ((props.prefixIconSrc || props.prefix) && "32px") || "inherit"};
      &.Mui-focused {
        color: ${(props) => props.theme.fontColor};
        &.MuiInputLabel-shrink {
          transform: ${(props) =>
            props.prefixIconSrc ||
            ((props.prefix || props.suffix) && "translate(8px, 1.5px) scale(0.75);") ||
            "translate(0, 1.5px) scale(0.75);"};
        }
      }
      &.Mui-disabled {
        color: ${(props) => props.theme.fontColor};
        opacity: ${(props) => props.theme.disabledLabelColor};
        cursor: not-allowed;
      }
      &.MuiInputLabel-shrink {
        font-family: "Open Sans", sans-serif;
        transform: ${(props) =>
          (props.prefixIconSrc && "translate(8px, 1.5px) scale(0.75);") ||
          (props.prefix && "translate(8px, 1.5px) scale(0.75);") ||
          "translate(0, 1.5px) scale(0.75);"};
      }
      &.Mui-error {
        color: ${(props) => props.theme.error};
      }

      &:not(.MuiInputLabel-shrink) {
        font-family: "Open Sans", sans-serif;
        color: ${(props) => props.theme.fontColor};
        & + div,
        & + div + p {
          color: ${(props) => props.theme.fontColor};
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: ${(props) => props.theme.fontColor};
        }
        & + div + p {
          color: ${(props) => props.theme.fontColor};
        }
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      font-family: "Open Sans", sans-serif;
      &::before {
        border-bottom: ${(props) => `1px solid ${props.theme.fontColor}`};
      }
      &:not(.Mui-error)::before,
      &:not(&.Mui-focused)::before {
        border-bottom: ${(props) => `1px solid ${props.theme.fontColor}`};
      }
      &::after {
        border-bottom: ${(props) => `2px solid ${props.theme.fontColor}`};
      }

      &.Mui-error {
        &::before {
          border-width: 1px;
          border-color: ${(props) => props.theme.error};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: ${(props) => props.theme.fontColor};
          transform: scaleX(1);
        }

        &.Mui-error::after {
          border-color: ${(props) => props.theme.error};
        }
      }

      &.Mui-disabled {
        color: ${(props) => props.theme.fontColor};
        opacity: ${(props) => props.theme.disabledUnderlinedColor};
        cursor: not-allowed;
        
        &::before {
          border-bottom: ${(props) => `1px solid ${props.theme.fontColor}`};
          border-bottom-style: solid;
        }
      }
      .MuiInputBase-input {
        padding-left: ${(props) => ((props.prefixIconSrc || props.prefix) && "32px") || "inherit"};
        color: ${(props) => props.theme.fontColor};
        text-overflow: ellipsis;
        &.Mui-disabled {
          cursor: not-allowed;
        }
      }
      .MuiInputAdornment-root {
        height: 20px;
        color: ${(props) => props.theme.fontColor};
        &.MuiInputAdornment-positionEnd {
          & > p {
            font-family: "Open Sans", sans-serif;
            color: ${(props) => props.theme.fontColor};
            margin-right: 8px;
            margin-bottom: 1px;
            cursor: ${(props) => {
              if (props.onClickSuffix !== "" && !props.disabled) {
                return "pointer";
              }
              return "default";
            }};
          }
        }
        &.Mui-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before {
        border-bottom: ${(props) => props.theme.fontColor};
      }
    }

    & > p {
      &.Mui-error {
        color: ${(props) => props.theme.error} !important;
      }
      &.Mui-disabled {
        opacity: ${(props) => props.theme.disabledAssistiveTextColor};
        cursor: not-allowed;
      }
    }
  }
`;

DxcInputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
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
};

export default DxcInputText;
