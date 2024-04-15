import React, { useState, useRef, useEffect, useId } from "react";
import dayjs from "dayjs";
import styled, { ThemeProvider } from "styled-components";
import * as Popover from "@radix-ui/react-popover";
import customParseFormat from "dayjs/plugin/customParseFormat";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcTextInput from "../text-input/TextInput";
import DateInputPropsType, { RefType } from "./types";
import DxcDatePicker from "./DatePicker";

dayjs.extend(customParseFormat);

const getValueForPicker = (value, format) =>
  dayjs(value, format.toUpperCase(), true);

const getDate = (value, format, lastValidYear, setLastValidYear) => {
  if ((value || value === "") && format.toUpperCase().includes("YYYY"))
    return getValueForPicker(value, format);
  let newDate = getValueForPicker(value, format);
  if (!lastValidYear) {
    if (+newDate.format("YY") < 68) {
      setLastValidYear(2000 + +newDate.format("YY"));
      newDate = newDate.set("year", 2000 + +newDate.format("YY"));
    } else {
      setLastValidYear(1900 + +newDate.format("YY"));
      newDate = newDate.set("year", 1900 + +newDate.format("YY"));
    }
  } else {
    newDate = newDate.set(
      "year",
      (lastValidYear <= 1999 ? 1900 : 2000) + +newDate.format("YY")
    );
  }
  return newDate;
};

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
      readOnly,
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
  ): JSX.Element => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const calendarId = `date-picker-${useId()}`;
    const [dayjsDate, setDayjsDate] = useState(
      getValueForPicker(value ?? defaultValue ?? "", format)
    );
    const [lastValidYear, setLastValidYear] = useState(
      innerValue || value
        ? !format.toUpperCase().includes("YYYY") &&
          +getValueForPicker(value ?? innerValue, format).format("YY") < 68
          ? 2000
          : 1900
        : undefined
    );
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const dateRef = useRef(null);

    useEffect(() => {
      if (value || value === "")
        setDayjsDate(getDate(value, format, lastValidYear, setLastValidYear));
    }, [value, format, lastValidYear]);

    useEffect(() => {
      if (!disabled) {
        const actionButtonRef = dateRef?.current.querySelector(
          "[title='Select date']"
        );
        actionButtonRef?.setAttribute("aria-haspopup", true);
        actionButtonRef?.setAttribute("role", "combobox");
        actionButtonRef?.setAttribute("aria-expanded", isOpen);
        actionButtonRef?.setAttribute("aria-controls", calendarId);
        actionButtonRef?.setAttribute("aria-describedby", calendarId);
      }
    }, [isOpen, disabled, calendarId]);

    const handleCalendarOnClick = (newDate) => {
      const newValue = newDate.format(format.toUpperCase());
      if (!value) {
        setDayjsDate(newDate);
        setInnerValue(newValue);
      }
      setLastValidYear(newDate.get("year"));
      if (newDate?.set("day", newDate.get("date")).toJSON()) {
        onChange?.({
          value: newValue,
          date: newDate.toDate(),
        });
      } else {
        onChange?.({
          value: newValue,
        });
      }
    };

    const handleOnChange = ({ value: newValue, error: inputError }) => {
      if (value == null) {
        setInnerValue(newValue);
      }
      const newDate = getDate(
        newValue,
        format,
        lastValidYear,
        setLastValidYear
      );
      const invalidDateMessage =
        newValue !== "" &&
        !newDate.isValid() &&
        translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage
          ? { value: newValue, error: inputError || invalidDateMessage }
          : { value: newValue };
      if (newDate.isValid()) {
        setDayjsDate(newDate);
        onChange?.({
          ...callbackParams,
          date: newDate.toDate(),
        });
      } else {
        onChange?.(callbackParams);
        setLastValidYear((validYear) => dayjsDate?.get("year") ?? validYear);
        setDayjsDate(null);
      }
    };
    const handleOnBlur = ({ value: blurValue, error: inputError }) => {
      const date = getDate(blurValue, format, lastValidYear, setLastValidYear);
      const invalidDateMessage =
        blurValue !== "" &&
        !date.isValid() &&
        translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage
          ? { value: blurValue, error: inputError || invalidDateMessage }
          : { value: blurValue };
      if (date.isValid()) {
        onBlur?.({
          ...callbackParams,
          date: date.toDate(),
        });
      } else {
        onBlur?.(callbackParams);
      }
    };

    const openCalendar = () => {
      setIsOpen(!isOpen);
    };
    const closeCalendar = () => {
      setIsOpen(false);
    };

    const handleDatePickerEscKeydown = (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (isOpen) {
          event.stopPropagation();
        }
        closeCalendar();
        dateRef?.current.getElementsByTagName("input")[0].focus();
      }
    };
    const handleDatePickerOnBlur = (event) => {
      if (!event?.currentTarget.contains(event.relatedTarget)) closeCalendar();
    };

    return (
      <ThemeProvider theme={colorsTheme}>
        <div ref={ref}>
          <Popover.Root open={isOpen}>
            <Popover.Trigger asChild aria-controls={undefined}>
              <DxcTextInput
                label={label}
                name={name}
                defaultValue={defaultValue}
                value={value ?? innerValue}
                helperText={helperText}
                placeholder={placeholder ? format.toUpperCase() : null}
                action={{
                  onClick: openCalendar,
                  icon: "filled_calendar_today",
                  title: "Select date",
                }}
                clearable={clearable}
                disabled={disabled}
                readOnly={readOnly}
                optional={optional}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                error={error}
                autocomplete={autocomplete}
                margin={margin}
                size={size}
                tabIndex={tabIndex}
                ref={dateRef}
              />
            </Popover.Trigger>
            <Popover.Portal>
              <StyledPopoverContent
                sideOffset={error ? -18 : 2}
                align="end"
                aria-modal
                onBlur={handleDatePickerOnBlur}
                onKeyDown={handleDatePickerEscKeydown}
                avoidCollisions={false}
              >
                <DxcDatePicker
                  id={calendarId}
                  onDateSelect={handleCalendarOnClick}
                  date={dayjsDate}
                />
              </StyledPopoverContent>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </ThemeProvider>
    );
  }
);

const StyledPopoverContent = styled(Popover.Content)`
  z-index: 2147483647;
  &:focus-visible {
    outline: none;
  }
`;

DxcDateInput.displayName = "DxcDateInput";

export default DxcDateInput;
