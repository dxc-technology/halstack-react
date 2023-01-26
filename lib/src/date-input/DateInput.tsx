import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import dayjs from "dayjs";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcTextInput from "../text-input/TextInput";
import DateInputPropsType, { RefType } from "./types";
import DxcDatePicker from "./DatePicker";
import * as Popover from "@radix-ui/react-popover";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { v4 as uuidv4 } from "uuid";
dayjs.extend(customParseFormat);

const calendarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
  </svg>
);

const getValueForPicker = (value, format) => dayjs(value, format.toUpperCase(), true);

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
  ): JSX.Element => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [calendarId] = useState(`date-picker-${uuidv4()}`);
    const [dayjsDate, setDayjsDate] = useState(getValueForPicker(value ?? defaultValue ?? "", format));
    const [lastValidYear, setLastValidYear] = useState(
      innerValue || value
        ? !format.toUpperCase().includes("YYYY") && +getValueForPicker(value ?? innerValue, format).format("YY") < 68
          ? 2000
          : 1900
        : undefined
    );
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const dateRef = useRef(null);

    const getDate = (value) => {
      if ((value || value === "") && format.toUpperCase().includes("YYYY")) return getValueForPicker(value, format);
      else {
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
          newDate = newDate.set("year", (lastValidYear <= 1999 ? 1900 : 2000) + +newDate.format("YY"));
        }
        return newDate;
      }
    };

    useEffect(() => {
      if (value || value === "") setDayjsDate(getDate(value));
    }, [value, format, lastValidYear]);

    useLayoutEffect(() => {
      if (!disabled) {
        const actionButtonRef = dateRef?.current.querySelector("[title='Open calendar']");
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
      newDate?.set("day", newDate.get("date")).toJSON()
        ? onChange?.({
            value: newValue,
            date: newDate.toDate(),
          })
        : onChange?.({
            value: newValue,
          });
    };

    const handleIOnChange = ({ value: newValue, error: inputError }) => {
      value ?? setInnerValue(newValue);
      const newDate = getDate(newValue);
      const invalidDateMessage =
        newValue !== "" && !newDate.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
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
    const handleIOnBlur = ({ value, error: inputError }) => {
      const date = getDate(value);
      const invalidDateMessage = value !== "" && !date.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage ? { value, error: inputError || invalidDateMessage } : { value };
      date.isValid()
        ? onBlur?.({
            ...callbackParams,
            date: date.toDate(),
          })
        : onBlur?.(callbackParams);
    };

    const openCalendar = () => {
      setIsOpen(!isOpen);
    };
    const closeCalendar = () => {
      setIsOpen(false);
    };

    const handleDatePickerEscKeydown = (event) => {
      event.preventDefault();
      closeCalendar();
      dateRef?.current.getElementsByTagName("input")[0].focus();
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
                  icon: calendarIcon,
                  title: "Open calendar",
                }}
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
                ref={dateRef}
              />
            </Popover.Trigger>
            <StyledContent
              sideOffset={error ? -18 : 2}
              align="end"
              aria-modal={true}
              onBlur={handleDatePickerOnBlur}
              onEscapeKeyDown={handleDatePickerEscKeydown}
              avoidCollisions={false}
            >
              <DxcDatePicker id={calendarId} onDateSelect={handleCalendarOnClick} date={dayjsDate} />
            </StyledContent>
          </Popover.Root>
        </div>
      </ThemeProvider>
    );
  }
);

const StyledContent = styled(Popover.Content)`
  &:focus-visible {
    outline: none;
  }
`;

export default DxcDateInput;
