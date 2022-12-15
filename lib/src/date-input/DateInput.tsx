import React, { useState, useRef, useLayoutEffect } from "react";
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

const getValueForPicker = (value, format) => dayjs(value, format.toUpperCase(), true);
const calendarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
  </svg>
);

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
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const refDate = useRef(null);

    useLayoutEffect(() => {
      if (!disabled) {
        let actionButtonRef = document.querySelector(`[title="Open calendar"]`);
        actionButtonRef?.setAttribute("aria-haspopup", true);
        actionButtonRef?.setAttribute("role", "combobox");
        actionButtonRef?.setAttribute("aria-expanded", isOpen);
        actionButtonRef?.setAttribute("aria-controls", calendarId);
        actionButtonRef?.setAttribute("aria-describedby", calendarId);
      }
    }, [isOpen, disabled, calendarId]);

    const handleCalendarOnClick = (newDate) => {
      const newValue = newDate.format(format.toUpperCase());
      value ?? setInnerValue(newValue);
      newDate?.set("day", newDate.get("date")).toJSON()
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
      icon: calendarIcon,
      title: "Open calendar",
    };
    const handleEscCalendar = () => {
      closeCalendar();
      refDate?.current.getElementsByTagName("input")[0].focus();
    };
    const handleFocusOutside = (event) => {
      if (event?.target.getAttribute("aria-controls") !== calendarId) {
        closeCalendar();
      }
    };
    window.addEventListener("blur", closeCalendar);

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
              ref={ref}
            />
          </Popover.Trigger>
          <StyledContent
            sideOffset={error ? -18 : 2}
            align="end"
            aria-modal={true}
            onFocusOutside={handleFocusOutside}
            avoidCollisions={false}
          >
            <DxcDatePicker
              id={calendarId}
              onCloseCalendar={closeCalendar}
              onEscCalendar={handleEscCalendar}
              onDateSelect={handleCalendarOnClick}
              date={getValueForPicker(value ?? innerValue, format.toUpperCase())}
            />
          </StyledContent>
        </Popover.Root>
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
