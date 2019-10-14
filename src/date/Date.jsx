import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

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
  dissableRipple = false,
  onInputChange,
  onChange
}) => {
  function handleMenuItemClick(date, event) {
    if (event === null) {
      setSelectedDate(null);
    } else {
      setSelectedDate(new Date(date));
    }
    if (typeof onInputChange === "function") {
      onInputChange(JSON.stringify(event));
    }
    value = moment(date).format("DD-MM-YYYY");
    var check = moment(value, "DD-MM-YYYY", true).isValid();
    if (check) {
      if (typeof onChange === "function") {
        onChange(date);
      }
    }
  }
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);

  return (
    <ThemeProvider theme={lightTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StyledDPicker invalid={invalid} theme={theme} dissableRipple={dissableRipple}>
          <KeyboardDatePicker
            name={name}
            disabled={disabled}
            value={selectedDate}
            label={label}
            variant="inline"
            required={required}
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
    </ThemeProvider>
  );
};

const StyledDPicker = styled.span`
  .MuiFormControl-root {
    margin: 10px;
    width: 230px;
    .MuiInputBase-input {
      font-family: "Open Sans", sans-serif;
    }
    .MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => {
        if (props.invalid) return props.theme === "light" ? colors.darkRed+"!important" : colors.lightRed+"!important";
        else {
          if (props.theme === "dark") {
            return colors.lightGrey;
          } else {
            return colors.darkGrey;
          }
        }
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
      display: flex;
      flex-direction: row-reverse;
      .MuiFormLabel-asterisk {
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        margin-right: 1px;
      }
    }
    .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):before {
      border-color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? colors.darkRed : colors.lightRed;
        } else {
          if (props.theme === "dark") {
            return colors.lightGrey;
          } else {
            return colors.darkGrey;
          }
        }
      }};
    }
    .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):after {
      border-color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? colors.darkRed : colors.lightRed;
        } else {
          if (props.theme === "dark") {
            return colors.white;
          } else {
            return colors.black;
          }
        }
      }};
    }
    .MuiInput-underline:hover:not(.Mui-disabled):not(.Mui-error):before {
      border-color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? colors.darkRed : colors.lightRed;
        } else {
          if (props.theme === "dark") return colors.lightGrey;
          else {
            return colors.darkGrey;
          }
        }
      }};
    }
    .MuiInput-underline.Mui-disabled:not(.Mui-error):before {
      border-color: ${colors.darkGrey};
      border-bottom-style: solid;
    }
    .MuiFormHelperText-root {
      font-family: "Open Sans", sans-serif;
    }
    .MuiFormHelperText-root:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => {
        if (props.invalid) {
          return props.theme === "light" ? colors.darkRed : colors.lightRed;
        } else {
          if (props.theme === "dark") {
            return colors.lightGrey;
          } else {
            return colors.darkGrey;
          }
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
    .MuiButtonBase-root:not(.Mui-disabled) {
      color: ${colors.black};

      .MuiTouchRipple-root {
        display: ${props => (props.dissableRipple ? "none" : "")};
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
        padding: "0px 10px"
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
  dissableRipple: PropTypes.bool,
  onInputChange: PropTypes.func,
  onChange: PropTypes.func
};

export default DxcDate;
