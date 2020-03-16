import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";

const DxcDate = ({
  value,
  format = "dd-MM-yyyy",
  label = "",
  theme = "light",
  name,
  iconSrc = "",
  disabled = false,
  required = false,
  assistiveText = "",
  invalid = false,
  disableRipple = false,
  onInputChange,
  onBlur = "",
  margin,
  size = "medium"
}) => {
  const [innerValue, setInnerValue] = useState("");

  function handleMenuItemClick(date, stringValue) {
    if (value == null) {
      setInnerValue(stringValue);
    }
    if (typeof onInputChange === "function") {
      onInputChange({ stringValue, dateValue: date && date.toJSON() ? date : null });
    }
  }

  const handlerInputBlur = event => {
    setInnerValue(event.target.value);
    if (onBlur) {
      onBlur(event.target.value);
    }
  };

  return (
    <MuiThemeProvider theme={lightTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StyledDPicker
          margin={margin}
          invalid={invalid}
          theme={theme}
          disableRipple={disableRipple}
          required={required}
          size={size}
          onBlur={(onBlur && handlerInputBlur) || null}
        >
          <KeyboardDatePicker
            name={name}
            disabled={disabled}
            value={value === "" ? null : value != null ? value : innerValue}
            label={label}
            variant="inline"
            PopoverProps={{ anchorOrigin: { horizontal: "right", vertical: "bottom" } }}
            keyboardIcon={
              iconSrc !== "" ? (
                <img src={iconSrc} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="defaultIcon"
                >
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              )
            }
            placeholder={format}
            helperText={assistiveText}
            onChange={(date, event) => handleMenuItemClick(date, event)}
            format={format}
          />
        </StyledDPicker>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

const sizes = {
  medium: "240px",
  large: "480px",
  fillParent: "100%"
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const StyledDPicker = styled.span`
  .MuiFormControl-root {
    margin: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
    margin-top: ${props =>
      props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
    margin-right: ${props =>
      props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
    margin-bottom: ${props =>
      props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
    margin-left: ${props =>
      props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
    width: ${props => calculateWidth(props.margin, props.size)};
    .MuiInputBase-input {
      font-family: "Open Sans", sans-serif;
    }
    .MuiFormLabel-root {
      max-width: 200px;
      height: 16px;
      overflow: hidden;
      &::before {
        content:'${props => (props.required && "*") || ""}';
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        font-size: 16px; 
      }
    }
    .MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => (props.theme === "dark" ? colors.lightGrey : colors.darkGrey)};
      text-overflow: ellipsis;
      overflow: hidden;
      display: block;
      white-space: nowrap;
    }
    .MuiInputLabel-shrink:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => {
        if (props.invalid)
          return props.theme === "light" ? `${colors.darkRed} !important` : `${colors.lightRed} !important`;
      }};
    }
    .MuiFormLabel-root.Mui-disabled {
      color: ${props => {
        if (props.theme === "dark") return colors.darkGrey;
      }};
    }
    .MuiFormLabel-root.Mui-error {
      color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
    }
    .MuiFormLabel-root {
      font-family: "Open Sans", sans-serif;
      &::before {
        content:'${props => (props.required && "*") || ""}';
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        font-size: 16px; 
      }
    }
    .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):before {
      border-color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? `${colors.darkRed} !important` : `${colors.lightRed} !important`;
        } else {
          return props.theme === "dark" ? colors.lightGrey : colors.darkGrey;
        }
      }};
    }
    .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):after {
      border-color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? colors.darkRed : colors.lightRed;
        } else {
          return props.theme === "dark" ? colors.white : colors.black;
        }
      }};
    }
    .MuiInput-underline:hover:not(.Mui-disabled):not(.Mui-error):before {
      border-bottom: 1px solid;
      border-color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? colors.darkRed : colors.lightRed;
        } else {
          return props.theme === "dark" ? colors.lightGrey : colors.darkGrey;
        }
      }};
    }
    .MuiInput-underline.Mui-disabled:not(.Mui-error):before {
      border-color: ${colors.darkGrey};
      border-bottom-style: solid;
    }
    .MuiInput-underline.Mui-error:before {
      border-color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
    }
    .MuiInput-underline.Mui-error:after {
      border-color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
    }
    .MuiFormHelperText-root {
      font-family: "Open Sans", sans-serif;
      &.Mui-error {
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
      }
    }
    .MuiFormHelperText-root:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? `${colors.darkRed} !important` : `${colors.lightRed} !important`;
        } else {
          return props.theme === "dark" ? colors.lightGrey : colors.darkGrey;
        }
      }};
    }
    .MuiFormHelperText-root.Mui-disabled {
      color: ${props => {
        if (props.theme === "dark") {
          return colors.darkGrey;
        }
      }};
    }
    .MuiInputBase-input:not(.Mui-disabled) {
      color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
    }
    .MuiInputBase-input.Mui-disabled {
      cursor: not-allowed;
      color: ${props => {
        if (props.theme === "dark") {
          return colors.darkGrey;
        }
      }};
    }
    .MuiIconButton-root {
      height: 32px;
      width: 32px;
    }
    .MuiButtonBase-root:not(.Mui-disabled) {
      color: ${colors.black};

      .MuiTouchRipple-root {
        display: ${props => (props.disableRipple ? "none" : "")};
        .MuiTouchRipple-child {
          background-color: ${props => (props.theme === "dark" ? colors.white : colors.darkGrey)};
        }
      }
    }
    .MuiIconButton-root.Mui-disabled {
      pointer-events: all !important;
      cursor: not-allowed;
      .defaultIcon {
        fill: ${props => (props.theme === "dark" ? colors.darkGrey : "rgba(0, 0, 0, 0.26)")};
      }
    }
    .MuiIconButton-root:not(.Mui-disabled) {
      .defaultIcon {
        fill: ${props => (props.theme === "dark" ? colors.yellow : colors.black)};
      }
    }
    label.MuiFormLabel-root.Mui-focused:not(.Mui-error):not(.Mui-disabled),
    label.MuiFormLabel-root.MuiFormLabel-filled:not(.Mui-error):not(.Mui-disabled) {
      color: ${props => (props.theme === "dark" ? colors.white : colors.black)};

      white-space: nowrap;

      & + .MuiInputBase-root {
        &:before {
          border-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
        }
        & + p.MuiFormHelperText-root {
          color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
        }
      }
    }
  }
`;

const lightTheme = createMuiTheme({
  overrides: {
    MuiPickersYearSelection: {
      container: {
        "&::-webkit-scrollbar": {
          width: "3px"
        },

        "&::-webkit-scrollbar-track": {
          backgroundColor: colors.lightGrey,
          borderRadius: "3px"
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: colors.darkGrey,
          borderRadius: "3px"
        }
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.white,
        color: colors.black
      }
    },
    MuiIconButton: {
      root: {
        height: "36px",
        width: "36px",
        padding: "0px"
      }
    },
    MuiPickersBasePicker: {
      pickerView: {
        minWidth: "unset",
        maxWidth: "unset",
        minHeight: "unset",
        padding: "0px 10px",
        height: "316px"
      }
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: colors.black
      },
      toolbarBtnSelected: {
        color: colors.black
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: colors.white,
        color: colors.black
      }
    },
    MuiPickersCalendar: {
      week: {
        marginBottom: "2px"
      }
    },
    MuiPickersDay: {
      current: {
        color: colors.black
      },
      day: {
        color: colors.black
      },
      daySelected: {
        backgroundColor: colors.black,
        color: colors.yellow,
        "&:hover": {
          backgroundColor: colors.black
        }
      }
    },
    MuiPickersYear: {
      yearSelected: {
        color: colors.yellow,
        backgroundColor: colors.black,
        margin: "0px 100px",
        borderRadius: "20px",
        fontSize: "16px"
      }
    },
    MuiPickersModal: {
      dialogAction: {
        color: colors.yellow
      }
    }
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif'
  }
});

DxcDate.propTypes = {
  value: PropTypes.object,
  format: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  iconSrc: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  assistiveText: PropTypes.string,
  invalid: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onInputChange: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};

export default DxcDate;
