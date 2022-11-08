import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcTextInput from "../text-input/TextInput";
import DateInputPropsType, { RefType } from "./types";
import DxcCalendar from "./Calendar";
import * as Popover from "@radix-ui/react-popover";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

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
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const refDate = ref || useRef(null);

    const handleCalendarOnClick = (newDate) => {
      const newValue = newDate.format(format.toUpperCase());
      value ?? setInnerValue(newValue);
      newDate?.toJSON()
        ? onChange?.({
            value: newValue,
            date: newDate,
          })
        : onChange?.({
            value: newValue,
          });
    };
    const handleIOnChange = ({ value: newValue, error: inputError }) => {
      value ?? setInnerValue(newValue);
      const dayjsDate = getValueForPicker(newValue, format);
      const invalidDateMessage =
        newValue !== "" && !dayjsDate.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage
          ? { value: newValue, error: inputError || invalidDateMessage }
          : { value: newValue };
      dayjsDate.isValid()
        ? onChange?.({
            ...callbackParams,
            date: dayjsDate.toDate(),
          })
        : onChange?.(callbackParams);
    };
    const handleIOnBlur = ({ value, error: inputError }) => {
      const dayjsDate = getValueForPicker(value, format);
      const invalidDateMessage =
        value !== "" && !dayjsDate.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage ? { value, error: inputError || invalidDateMessage } : { value };
      dayjsDate.isValid()
        ? onBlur?.({
            ...callbackParams,
            date: dayjsDate.toDate(),
          })
        : onBlur?.(callbackParams);
    };

    const openCalendar = () => {
      setIsOpen(!isOpen);
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

    return (
      <ThemeProvider theme={colorsTheme}>
        <Popover.Root open={isOpen}>
          <Popover.Trigger asChild aria-controls={undefined}>
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
          </Popover.Trigger>
          <Popover.Content sideOffset={2} align="end" aria-modal={true}>
            <DxcCalendar
              onCloseCalendar={closeCalendar}
              onDateSelect={handleCalendarOnClick}
              date={value || innerValue ? getValueForPicker(value ?? innerValue, format.toUpperCase()) : dayjs()}
            />
          </Popover.Content>
        </Popover.Root>
      </ThemeProvider>
    );
  }
);

export default DxcDateInput;
