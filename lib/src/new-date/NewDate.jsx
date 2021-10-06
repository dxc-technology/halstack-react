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
import DxcNewInputText from "../new-input-text/NewInputText";

const DxcNewDate = React.forwardRef(
  (
    {
      label = "",
      name = "",
      value,
      format = "dd-MM-yyyy",
      helperText = "",
      placeholder = false,
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
    const [validationError, setValidationError] = useState("");

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
      const string = moment(newDate).format(format.toUpperCase());
      value ?? setInnerValue(string);
      typeof onChange === "function" &&
        onChange({
          value: string,
          date: newDate && newDate.toJSON() ? newDate : null,
        });
    };

    const handleIOnChange = (string) => {
      const momentDate = moment(string, format.toUpperCase(), true);
      value ?? setInnerValue(string);
      typeof onChange === "function" &&
        onChange({
          value: string,
          date: momentDate.isValid() ? momentDate._d : null,
        });
    };

    const handleIOnBlur = ({ value }) => {
      const momentDate = moment(value, format.toUpperCase(), true);
      const invalidDateMessage = value !== "" && !momentDate.isValid() ? "Invalid date." : null;
      setValidationError(invalidDateMessage);
      typeof onBlur === "function" &&
        onBlur({
          value,
          error: invalidDateMessage,
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
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
        </svg>
      ),
    };

    const dateTheme = createMuiTheme({
      overrides: {
        MuiTypography: {
          root: {
            fontFamily: `${colorsTheme.date.fontFamily} !important`,
          },
        },
        MuiPickersYearSelection: {
          container: {
            color: colorsTheme.date.pickerYearColor,
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
            height: colorsTheme.date.pickerHeight,
            width: colorsTheme.date.pickerWidth,
            backgroundColor: colorsTheme.date.pickerBackgroundColor,
            fontFamily: colorsTheme.date.fontFamily,
          },
        },
        MuiPickersToolbarText: {
          toolbarTxt: {
            color: colorsTheme?.date?.pickerActualDate,
            fontFamily: colorsTheme?.date?.fontFamily,
            fontSize: "2rem",
          },
          toolbarBtnSelected: {
            color: colorsTheme.date.pickerActualDate,
          },
        },
        MuiPickersCalendarHeader: {
          transitionContainer: {
            color: colorsTheme.date.pickerMonthColor,
          },
          dayLabel: {
            color: colorsTheme.date.pickerWeekLabelColor,
            fontFamily: colorsTheme.date.fontFamily,
          },
          switchHeader: {
            backgroundColor: colorsTheme.white,
            color: colorsTheme.date.pickerFontColor,
          },
          iconButton: {
            backgroundColor: colorsTheme.date.pickerBackgroundColorMonthArrows,
            "&:hover": {
              backgroundColor: colorsTheme.date.pickerBackgroundColorMonthArrows,
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
            border: colorsTheme.date.pickerActualDate + " 2px solid",
            color: colorsTheme.date.pickerFontColor,
          },
          day: {
            fontFamily: colorsTheme.date.fontFamily,
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
    });

    return (
      <ThemeProvider theme={colorsTheme}>
        <MuiThemeProvider theme={dateTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDPicker>
              <DxcNewInputText
                label={label}
                name={name}
                value={value ?? innerValue}
                helperText={helperText}
                placeholder={placeholder ? format.toUpperCase() : null}
                action={calendarAction}
                disabled={disabled}
                optional={optional}
                onChange={handleIOnChange}
                onBlur={handleIOnBlur}
                error={error || validationError}
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

DxcNewDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  format: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.bool,
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

export default DxcNewDate;
