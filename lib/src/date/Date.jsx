import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popover from "@material-ui/core/Popover";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";
import PropTypes from "prop-types";
import DxcInput from "../input-text/InputText";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import calendarIcon from "./calendar.svg";
import calendarDarkIcon from "./calendar_dark.svg";

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
  onChange,
  placeholder = false,
  onBlur = "",
  margin,
  size = "medium",
}) => {
  const [innerValue, setInnerValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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

  return (
    <MuiThemeProvider theme={lightTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StyledDPicker margin={margin}>
          <DxcInput
            label={label}
            name={name}
            suffixIconSrc={iconSrc || (theme === "dark" ? calendarDarkIcon : calendarIcon)}
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
      props.theme === "light" && props.mode === "outlined"
        ? colors.black
        : props.theme === "light" && props.mode === "basic"
        ? colors.white
        : props.theme === "dark" && props.mode === "outlined"
        ? colors.white
        : props.theme === "dark" && props.mode === "basic"
        ? colors.black
        : colors.black};

    background-color: ${(props) =>
      props.theme === "light" && props.mode === "outlined"
        ? colors.white
        : props.theme === "light" && props.mode === "basic"
        ? colors.black
        : props.theme === "dark" && props.mode === "outlined"
        ? colors.black
        : props.theme === "dark" && props.mode === "basic"
        ? colors.white
        : colors.white};

    color: ${(props) =>
      props.theme === "light" && props.mode === "outlined"
        ? colors.black
        : props.theme === "light" && props.mode === "basic"
        ? colors.white
        : props.theme === "dark" && props.mode === "outlined"
        ? colors.white
        : props.theme === "dark" && props.mode === "basic"
        ? colors.black
        : colors.black};

    margin-top: ${(props) => (props.mode === "outlined" ? "-2px" : "2px")};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const lightTheme = createMuiTheme({
  overrides: {
    MuiPickersYearSelection: {
      container: {
        "&::-webkit-scrollbar": {
          width: "3px",
        },

        "&::-webkit-scrollbar-track": {
          backgroundColor: colors.lightGrey,
          borderRadius: "3px",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: colors.darkGrey,
          borderRadius: "3px",
        },
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.white,
        color: colors.black,
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
        color: colors.black,
      },
      toolbarBtnSelected: {
        color: colors.black,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: colors.white,
        color: colors.black,
      },
    },
    MuiPickersCalendar: {
      week: {
        marginBottom: "2px",
      },
    },
    MuiPickersDay: {
      current: {
        color: colors.black,
      },
      day: {
        color: colors.black,
      },
      daySelected: {
        backgroundColor: colors.black,
        color: colors.yellow,
        "&:hover": {
          backgroundColor: colors.black,
        },
      },
    },
    MuiPickersYear: {
      yearSelected: {
        color: colors.yellow,
        backgroundColor: colors.black,
        margin: "0px 100px",
        borderRadius: "20px",
        fontSize: "16px",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: colors.yellow,
      },
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});

DxcDate.propTypes = {
  value: PropTypes.string,
  format: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  iconSrc: PropTypes.string,
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
