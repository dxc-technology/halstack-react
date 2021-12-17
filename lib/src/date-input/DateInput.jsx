import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popover from "@material-ui/core/Popover";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import DxcTextInput from "../text-input/TextInput";

const DxcDateInput = React.forwardRef(
  (
    {
      label = "",
      name = "",
      value,
      format = "dd-MM-yyyy",
      helperText = "",
      placeholder = false,
      clearable = false,
      disabled = false,
      optional = false,
      onChange,
      onBlur,
      error = "",
      autocomplete = "off",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const colorsTheme = useTheme();

    const handleCalendarOnKeyDown = (event) => {
      switch (event.keyCode) {
        case 27: // Esc
          event.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    const handleCalendarOnClick = (newDate) => {
      const newValue = moment(newDate).format(format.toUpperCase());
      value ?? setInnerValue(newValue);

      onChange?.({
        value: newValue,
        error: null,
        date: newDate && newDate.toJSON() ? newDate : null,
      });
    };

    const handleIOnChange = ({ value: newValue, error: inputError }) => {
      value ?? setInnerValue(newValue);
      const momentDate = moment(newValue, format.toUpperCase(), true);
      const invalidDateMessage = newValue !== "" && !momentDate.isValid() ? "Invalid date." : null;

      onChange?.({
        value: newValue,
        error: inputError || invalidDateMessage,
        date: momentDate.isValid() ? momentDate._d : null,
      });
    };

    const handleIOnBlur = ({ value, error: inputError }) => {
      const momentDate = moment(value, format.toUpperCase(), true);
      const invalidDateMessage = value !== "" && !momentDate.isValid() ? "Invalid date." : null;

      onBlur?.({
        value,
        error: inputError || invalidDateMessage,
        date: momentDate.isValid() ? momentDate._d : null,
      });
    };

    const getValueForPicker = () => moment(value ?? innerValue, format.toUpperCase(), true).format();

    const openCalendar = (event) => {
      if (event) {
        setIsOpen(!isOpen);
        setAnchorEl(event.currentTarget);
      }
    };

    const closeCalendar = () => {
      setIsOpen(false);
    };

    const calendarAction = {
      onClick: openCalendar,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
        </svg>
      ),
    };

    const dateTheme = createMuiTheme({
      overrides: {
        MuiTypography: {
          root: {
            fontFamily: `${colorsTheme.dateInput.pickerFontFamily} !important`,
          },
        },
        MuiPickersYearSelection: {
          container: {
            color: colorsTheme.dateInput.pickerYearFontColor,
            "&::-webkit-scrollbar": {
              width: "3px",
            },

            "&::-webkit-scrollbar-track": {
              backgroundColor: "#D9D9D9",
              borderRadius: "3px",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#666666",
              borderRadius: "3px",
            },
          },
        },
        MuiPickersToolbar: {
          toolbar: {
            backgroundColor: colorsTheme.dateInput.pickerBackgroundColor,
            color: colorsTheme.dateInput.pickerDayFontColor,
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
              outline: colorsTheme.dateInput.pickerFocusColor + " solid 2px",
            },
          },
        },
        MuiPickersBasePicker: {
          pickerView: {
            minWidth: "unset",
            maxWidth: "unset",
            minHeight: "unset",
            padding: "0px 10px",
            height: colorsTheme.dateInput.pickerHeight,
            width: colorsTheme.dateInput.pickerWidth,
            backgroundColor: colorsTheme.dateInput.pickerBackgroundColor,
            fontFamily: colorsTheme.dateInput.pickerFontFamily,
          },
        },
        MuiPickersToolbarText: {
          toolbarTxt: {
            color: colorsTheme.dateInput.pickerActualDateFontColor,
            fontFamily: colorsTheme.dateInput.pickerFontFamily,
            fontSize: "2rem",
          },
          toolbarBtnSelected: {
            color: colorsTheme.dateInput.pickerActualDateFontColor,
          },
        },
        MuiPickersCalendarHeader: {
          transitionContainer: {
            color: colorsTheme.dateInput.pickerMonthFontColor,
          },
          dayLabel: {
            color: colorsTheme.dateInput.pickerWeekFontColor,
            fontFamily: colorsTheme.dateInput.pickerFontFamily,
          },
          switchHeader: {
            backgroundColor: "#ffffff",
            color: colorsTheme.dateInput.pickerDayFontColor,
          },
          iconButton: {
            backgroundColor: colorsTheme.dateInput.pickerMonthArrowsBackgroundColor,
            "&:hover": {
              backgroundColor: colorsTheme.dateInput.pickerMonthArrowsBackgroundColor,
            },
          },
        },
        MuiPickersCalendar: {
          week: {
            marginBottom: "2px",
          },
        },
        MuiPickersDay: {
          current: {
            color: colorsTheme.dateInput.pickerDayFontColor,
          },
          day: {
            fontFamily: colorsTheme.dateInput.pickerFontFamily,
            color: colorsTheme.dateInput.pickerDayFontColor,
            "&:hover": {
              backgroundColor: colorsTheme.dateInput.pickerHoverDateBackgroundColor,
              color: colorsTheme.dateInput.pickerHoverDateFontColor,
            },
          },
          daySelected: {
            backgroundColor: colorsTheme.dateInput.pickerSelectedDateBackgroundColor,
            color: colorsTheme.dateInput.pickerSelectedDateColor,
            "&:hover": {
              backgroundColor: colorsTheme.dateInput.pickerSelectedDateBackgroundColor,
              color: colorsTheme.dateInput.pickerSelectedDateColor,
              opacity: "1",
            },
          },
        },
        MuiPickersYear: {
          yearSelected: {
            color: colorsTheme.dateInput.pickerSelectedDateColor,
            backgroundColor: colorsTheme.dateInput.pickerSelectedDateBackgroundColor,
            margin: "0px 100px",
            borderRadius: "20px",
          },
          root: {
            "&:focus": {
              color: colorsTheme.dateInput.pickerHoverDateFontColor,
              backgroundColor: colorsTheme.dateInput.pickerHoverDateBackgroundColor,
            },
          },
        },
        MuiPickersModal: {
          dialogAction: {
            color: "pink",
          },
        },
      },
    });

    return (
      <ThemeProvider theme={colorsTheme}>
        <MuiThemeProvider theme={dateTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDPicker>
              <DxcTextInput
                label={label}
                name={name}
                value={value ?? innerValue}
                helperText={helperText}
                placeholder={placeholder ? format.toUpperCase() : null}
                action={calendarAction}
                clearable={clearable}
                disabled={disabled}
                optional={optional}
                onChange={handleIOnChange}
                onBlur={handleIOnBlur}
                error={error}
                autocomplete={autocomplete}
                margin={margin}
                size={size}
                tabIndex={tabIndex}
                ref={ref}
              />
              <Popover
                onKeyDown={handleCalendarOnKeyDown}
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
                <ClickAwayListener onClickAway={closeCalendar}>
                  <Paper role="dialog" aria-modal="true">
                    <DatePicker
                      variant="static"
                      value={getValueForPicker()}
                      onChange={(date) => handleCalendarOnClick(date)}
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
  }
);

const sizes = {
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const StyledDPicker = styled.div``;

DxcDateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  format: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.bool,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  autocomplete: PropTypes.string,
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
  tabIndex: PropTypes.number,
};

export default DxcDateInput;
