import React, { useState } from "react";
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
import { spaces } from "../common/variables.js";
import calendarIcon from "./calendar.svg";
import useTheme from "../useTheme.js";

const DxcDate = ({
  value,
  format = "dd-MM-yyyy",
  label = "",
  name,
  disabled = false,
  required = false,
  assistiveText = "",
  invalid = false,
  onChange,
  placeholder = false,
  onBlur = "",
  margin,
  size = "medium",
  tabIndex=0
}) => {
  const [innerValue, setInnerValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const colorsTheme = useTheme();

  function handleMenuItemClick(date) {
    const stringValue = moment(date).format(format.toUpperCase());
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
  const handlerPickerClose = () => {
    setIsOpen(false);
    handlerInputBlur(value == null ? innerValue : value);
  };

  const dateTheme = createMuiTheme({
    overrides: {
      MuiPickersYearSelection: {
        container: {
          "&::-webkit-scrollbar": {
            width: "3px",
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: colorsTheme.date.scrollBarTrackColor,
            borderRadius: "3px",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colorsTheme.date.scrollBarThumbColor,
            borderRadius: "3px",
          },
        },
      },
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: colorsTheme.date.pickerBackgroundColor,
          color: colorsTheme.date.pickerFontColor,
        },
      },
      MuiIconButton: {
        root: {
          height: "36px",
          width: "36px",
          padding: "0px",
        },
      },
      MuiTouchRipple: {
        child: {
          opacity: "0",
        },
      },
      MuiButtonBase: {
        root: {
          "&:focus": {
            outline: colorsTheme.date.focusColor + " 2px solid",
          },
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
          color: colorsTheme.date.pickerFontColor,
        },
        toolbarBtnSelected: {
          color: colorsTheme.date.pickerFontColor,
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          backgroundColor: colorsTheme.white,
          color: colorsTheme.date.pickerFontColor,
        },
      },
      MuiPickersCalendar: {
        week: {
          marginBottom: "2px",
        },
      },
      MuiPickersDay: {
        current: {
          border: colorsTheme.date.pickerActualDate + " 2px solid",
          color: colorsTheme.date.pickerFontColor,
        },
        day: {
          color: colorsTheme.date.pickerFontColor,
          "&:hover": {
            backgroundColor: colorsTheme.date.pickerHoverDateBackgroundColor,
            color: colorsTheme.date.pickerHoverDateFontColor,
          },
        },
        daySelected: {
          backgroundColor: colorsTheme.date.pickerSelectedDateBackgroundColor,
          color: colorsTheme.date.pickerSelectedDateColor,
          "&:hover": {
            backgroundColor: colorsTheme.date.pickerSelectedDateBackgroundColor,
            color: colorsTheme.date.pickerSelectedDateColor,
            opacity: "1",
          },
        },
      },
      MuiPickersYear: {
        yearSelected: {
          color: colorsTheme.date.pickerSelectedDateColor,
          backgroundColor: colorsTheme.date.pickerSelectedDateBackgroundColor,
          margin: "0px 100px",
          borderRadius: "20px",
          fontSize: "16px",
        },
        root: {
          "&:focus": {
            color: colorsTheme.date.pickerHoverDateFontColor,
            backgroundColor: colorsTheme.date.pickerHoverDateBackgroundColor,
          },
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: "pink",
        },
      },
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={colorsTheme}>
      <MuiThemeProvider theme={dateTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <StyledDPicker margin={margin}>
            <DxcInput
              label={label}
              name={name}
              suffixIconSrc={calendarIcon}
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
              tabIndex={tabIndex}
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
              <ClickAwayListener onClickAway={handlerPickerClose}>
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
  background-color: "#FABADA";
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
  tabIndex: PropTypes.number
};

export default DxcDate;
