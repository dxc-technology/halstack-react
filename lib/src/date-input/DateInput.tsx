// @ts-nocheck
import React, { useState, useRef } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popover from "@material-ui/core/Popover";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import DxcTextInput from "../text-input/TextInput";
import DateInputPropsType, { RefType } from "./types";

const getValueForPicker = (value, format) => moment(value, format.toUpperCase(), true).format();

const DxcDateInput = React.forwardRef<RefType, DateInputPropsType>(
  (
    {
      label,
      name,
      defaultValue = "",
      value,
      format = "dd-MM-yyyy",
      helperText,
      placeholder = false,
      clearable,
      disabled,
      optional,
      onChange,
      onBlur,
      error,
      autocomplete,
      margin,
      size,
      tabIndex,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const colorsTheme = useTheme();
    const refDate = ref || useRef(null);

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
        date: newDate?.toJSON() ? newDate : null,
      });
    };
    const handleIOnChange = ({ value: newValue, error: inputError }) => {
      value ?? setInnerValue(newValue);
      const momentDate = moment(newValue, format.toUpperCase(), true);
      const invalidDateMessage = newValue !== "" && !momentDate.isValid() ? "Invalid date." : null;

      onChange?.({
        value: newValue,
        error: inputError || invalidDateMessage,
        date: momentDate.isValid() ? momentDate.toDate() : null,
      });
    };
    const handleIOnBlur = ({ value, error: inputError }) => {
      const momentDate = moment(value, format.toUpperCase(), true);
      const invalidDateMessage = value !== "" && !momentDate.isValid() ? "Invalid date." : null;

      onBlur?.({
        value,
        error: inputError || invalidDateMessage,
        date: momentDate.isValid() ? momentDate.toDate() : null,
      });
    };

    const openCalendar = () => {
      const dateBtn = refDate.current.getElementsByTagName("button")[0];
      setIsOpen(!isOpen);
      setAnchorEl(dateBtn);
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
                defaultValue={defaultValue}
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
                ref={refDate}
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
                      value={getValueForPicker(value ?? innerValue, format)}
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

const StyledDPicker = styled.div``;

export default DxcDateInput;
