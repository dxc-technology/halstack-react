import React, { useState, useContext } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popover from "@material-ui/core/Popover";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import DxcInput from "../input-text/InputText";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import calendarIcon from "./calendar.svg";
import calendarDarkIcon from "./calendar_dark.svg";
import ThemeContext from "../ThemeContext.js";

const DxcDate = ({
  value,
  format = "dd-MM-yyyy",
  label = "",
  theme = "light",
  name,
  disabled = false,
  required = false,
  assistiveText = "",
  invalid = false,
  disableRipple = false,
  onChange,
  placeholder = false,
  onBlur = "",
  margin,
  size = "medium",
}) => {
  const [innerValue, setInnerValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const colorsTheme = useContext(ThemeContext) || colors;

  function handleMenuItemClick(date) {
    const stringValue = moment(date).format(format.toUpperCase());
    setIsOpen(false);
    if (value == null) {
      setInnerValue(stringValue);
    }
    if (typeof onChange === "function") {
      onChange({
        stringValue,
        dateValue: date && date.toJSON() ? date : null,
      });
    }
  }
  const onChangeInput = (string) => {
    const momentDate = moment(string, format.toUpperCase(), true);
    if (value == null) {
      setInnerValue(string);
    }
    if (typeof onChange === "function") {
      onChange({
        stringValue: string,
        dateValue: momentDate.isValid() ? momentDate._d : null,
      });
    }
  };

  const handlerInputBlur = (inputString) => {
    setInnerValue(inputString);
    if (onBlur) {
      onBlur(inputString);
    }
  };

  const getValueForPicker = () => {
    return moment(value == null ? innerValue : value, format.toUpperCase(), true).format();
  };
  const openCalendar = (event) => {
    if (event) {
      setIsOpen(!isOpen);

      setAnchorEl(event.currentTarget);
    }
  };

  const lightTheme = createMuiTheme({
    overrides: {
      MuiPickersYearSelection: {
        container: {
          "&::-webkit-scrollbar": {
            width: "3px",
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: colorsTheme.lightGrey,
            borderRadius: "3px",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colorsTheme.darkGrey,
            borderRadius: "3px",
          },
        },
      },
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: colorsTheme.white,
          color: colorsTheme.black,
        },
      },
      MuiIconButton: {
        root: {
          height: "36px",
          width: "36px",
          padding: "0px",
        },
      },
      MuiPickersBasePicker: {
        pickerView: {
          minWidth: "unset",
          maxWidth: "unset",
          minHeight: "unset",
          padding: "0px 10px",
          height: "316px",
        },
      },
      MuiPickersToolbarText: {
        toolbarTxt: {
          color: colorsTheme.black,
        },
        toolbarBtnSelected: {
          color: colorsTheme.black,
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          backgroundColor: colorsTheme.white,
          color: colorsTheme.black,
        },
      },
      MuiPickersCalendar: {
        week: {
          marginBottom: "2px",
        },
      },
      MuiPickersDay: {
        current: {
          color: colorsTheme.black,
        },
        day: {
          color: colorsTheme.black,
        },
        daySelected: {
          backgroundColor: colorsTheme.black,
          color: colorsTheme.yellow,
          "&:hover": {
            backgroundColor: colorsTheme.black,
          },
        },
      },
      MuiPickersYear: {
        yearSelected: {
          color: colorsTheme.yellow,
          backgroundColor: colorsTheme.black,
          margin: "0px 100px",
          borderRadius: "20px",
          fontSize: "16px",
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: colorsTheme.yellow,
        },
      },
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={colorsTheme}>
      <MuiThemeProvider theme={lightTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <StyledDPicker margin={margin}>
            <DxcInput
              label={label}
              name={name}
              suffixIconSrc={(theme === "dark" ? calendarDarkIcon : calendarIcon)}
              theme={theme}
              disableRipple={disableRipple}
              required={required}
              invalid={invalid}
              disabled={disabled}
              assistiveText={assistiveText}
              margin={margin}
              size={size}
              placeholder={placeholder ? format.toUpperCase() : null}
              value={value == null ? innerValue : value}
              onClickSuffix={openCalendar}
              onChange={onChangeInput}
              onBlur={(onBlur && handlerInputBlur) || null}
            />
            <Popover
              open={isOpen}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  marginTop: "10px",
                },
              }}
            >
              <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <Paper>
                  <DatePicker
                    variant="static"
                    value={getValueForPicker()}
                    onChange={(date) => handleMenuItemClick(date)}
                    format={format}
                    disabled={disabled}
                  />
                </Paper>
              </ClickAwayListener>
            </Popover>
          </StyledDPicker>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

const sizes = {
  medium: "240px",
  large: "480px",
  fillParent: "100%",
};

const StyledDPicker = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  .MuiPaper-root {
    margin-top: 6px;

    border-color: ${(props) =>
      props.brightness === "light" && props.mode === "outlined"
        ? props.theme.black
        : props.brightness === "light" && props.mode === "basic"
        ? props.theme.white
        : props.brightness === "dark" && props.mode === "outlined"
        ? props.theme.white
        : props.brightness === "dark" && props.mode === "basic"
        ? props.theme.black
        : props.theme.black};

    background-color: ${(props) =>
      props.brightness === "light" && props.mode === "outlined"
        ? props.theme.white
        : props.brightness === "light" && props.mode === "basic"
        ? props.theme.black
        : props.brightness === "dark" && props.mode === "outlined"
        ? props.theme.black
        : props.brightness === "dark" && props.mode === "basic"
        ? props.theme.white
        : props.theme.white};

    color: ${(props) =>
      props.brightness === "light" && props.mode === "outlined"
        ? props.theme.black
        : props.brightness === "light" && props.mode === "basic"
        ? props.theme.white
        : props.brightness === "dark" && props.mode === "outlined"
        ? props.theme.white
        : props.brightness === "dark" && props.mode === "basic"
        ? props.theme.black
        : props.theme.black};

    margin-top: ${(props) => (props.mode === "outlined" ? "-2px" : "2px")};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

DxcDate.propTypes = {
  value: PropTypes.string,
  format: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.bool,
  assistiveText: PropTypes.string,
  invalid: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
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
};

export default DxcDate;
