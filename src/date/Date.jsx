import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import fLocale from "date-fns/locale/es";
import styled from "styled-components";
import PropTypes from "prop-types";

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
      if(typeof onChange === "function") {
        onChange(date);
      }
    }
  }
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);

  return (
    <ThemeProvider theme={lightTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fLocale}>
        <StyledDPicker invalid={invalid} theme={theme} required={required} dissableRipple={dissableRipple}>
          <KeyboardDatePicker
            name={name}
            disabled={disabled}
            value={selectedDate}
            label={label}
            variant="inline"
            keyboardIcon={
              iconSrc !== "" ? (
                <img src={iconSrc} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
    .MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => {
        if (props.invalid) return "#D0011B";
        else {
          if (props.theme === "dark") {
            return "#FFFFFF";
          } else {
            return "#000000";
          }
        }
      }};
    }
    .MuiFormLabel-root.Mui-disabled {
      color: ${props => {
        if (props.theme === "dark") return "#757575";
      }};
    }
    .MuiFormLabel-root.Mui-error {
      color: #d0011b;
    }
    .MuiFormLabel-root {
      &::before {
          content: "*";
          color: #D0011B;
          display: ${props => (props.required ? "" : "none")};
      }
    }
    .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):before {
      border-color: ${props => {
        if (props.invalid) {
          return "#D0011B";
        } else {
          return "#666666";
        }
      }};
      border-bottom-width: ${props => {
        if (props.invalid) return "2px";
      }};
    }
    .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):after {
      border-color: ${props => {
        if (props.invalid) {
          return "#D0011B";
        } else {
          if (props.theme === "dark") {
            return "#FFFFFF";
          } else {
            return "#000000";
          }
        }
      }};
      border-bottom-width: ${props => {
        if (props.invalid) return "2px";
      }};
    }
    .MuiInput-underline:hover:not(.Mui-disabled):not(.Mui-error):before {
      border-color: ${props => {
        if (props.invalid) {
          return "#D0011B";
        } else {
          if (props.theme === "dark") return "#757575";
          else {
            return "#111111";
          }
        }
      }};
      border-bottom-width: ${props => {
        if (props.invalid) return "2px";
        else return "1px";
      }};
    }
    .MuiInput-underline.Mui-disabled:not(.Mui-error):before {
      border-color: ${props => (props.theme === "dark" ? "#757575" : "#666666")};
      border-bottom-style: solid;
    }
    .MuiFormHelperText-root:not(.Mui-disabled):not(.Mui-error) {
      color: ${props => {
        if (props.invalid) {
          return "#D0011B";
        } else {
          if (props.theme === "dark") {
            return "#FFFFFF";
          } else {
            return "#000000";
          }
        }
      }};
    }
    .MuiFormHelperText-root.Mui-disabled {
      color: ${props => {
        if (props.theme === "dark") {
          return "#757575";
        }
      }};
    }
    .MuiInputBase-input:not(.Mui-disabled) {
      color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
    }
    .MuiInputBase-input.Mui-disabled {
      cursor: not-allowed;
      color: ${props => {
        if (props.theme === "dark") {
          return "#757575";
        }
      }};
    }
    .MuiButtonBase-root:not(.Mui-disabled) {
      color: #000;
      .MuiTouchRipple-root {
        display: ${props => (props.dissableRipple ? "none" : "")};
      }
    }
    .MuiIconButton-root.Mui-disabled {
      pointer-events: all !important;
      cursor: not-allowed;
      .defaultIcon {
        fill: ${props => (props.theme === "dark" ? "#757575" : "rgba(0, 0, 0, 0.26)")};
      }
    }
    .MuiIconButton-root:not(.Mui-disabled) {
      .defaultIcon {
        fill: ${props => (props.theme === "dark" ? "#FFED00" : "#000000")};
      }
    }
  }
`;

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
      dark: "#000"
    }
  }
});

DxcDate.propTypes = {

  value: PropTypes.instanceOf(moment),
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
