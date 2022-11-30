import dayjs, { Dayjs } from "dayjs";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DatePickerPropsType } from "./types";
import Calendar from "./Calendar";
import YearPicker from "./YearPicker";
import useTranslatedLabels from "../useTranslatedLabels";

const leftCaret = (
  <svg fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
  </svg>
);

const rightCaret = (
  <svg fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
  </svg>
);

const DxcDatePicker = ({
  date,
  onDateSelect,
  onCloseCalendar,
  onEscCalendar,
  id,
}: DatePickerPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date.isValid() ? date : dayjs());
  const [dateToFocus, setDateToFocus] = useState(date.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const selectedDate = date.isValid() ? date : dayjs();
  const ref = useRef(null);
  const translatedLabels = useTranslatedLabels();

  const handleKeyboardEvent = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onEscCalendar();
    }
  };
  const handleClickOutside = (event) => {
    if (ref?.current && !ref?.current.contains(event.target)) {
      onCloseCalendar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [onCloseCalendar]);

  const handleOnYearShiftTab = (event) => {
    if (event.key === "Tab" && event.shiftKey) {
      if (selectedDate.get("month") !== innerDate.get("month") || selectedDate.get("year") !== innerDate.get("year")) {
        setDateToFocus(innerDate.set("date", 1));
      } else {
        setDateToFocus(selectedDate);
      }
    }
  };

  useEffect(() => {
    document.getElementById(`day_${dateToFocus.get("date")}`)?.focus();
  }, [dateToFocus]);

  const handleDateSelect = (date: Dayjs) => {
    // const newDate = innerDate.set(unit, date);
    setInnerDate(date);
    // setSelectedDate(date);
    onDateSelect(date);
  };

  const handleMonthChange = (date: Dayjs) => {
    setInnerDate(date);
  };

  return (
    <DatePicker id={id} ref={ref}>
      <PickerHeader>
        <PickerHeaderButton
          aria-label={translatedLabels.calendar.previousMonthTitle}
          title={translatedLabels.calendar.previousMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") - 1))}
        >
          {leftCaret}
        </PickerHeaderButton>
        <HeaderMonthYear
          aria-live="polite"
          onClick={() => setContent((content) => (content === "yearPicker" ? "calendar" : "yearPicker"))}
        >
          {innerDate.format("MMMM YYYY")}
        </HeaderMonthYear>
        <PickerHeaderButton
          aria-label={translatedLabels.calendar.nextMonthTitle}
          title={translatedLabels.calendar.nextMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") + 1))}
        >
          {rightCaret}
        </PickerHeaderButton>
      </PickerHeader>
      {content === "calendar" && (
        <Calendar
          innerDate={innerDate}
          selectedDate={selectedDate}
          onInnerDateChange={setInnerDate}
          onDaySelect={handleDateSelect}
        />
      )}

      {content === "yearPicker" && (
        <YearPicker
          onYearSelect={(year) => {
            handleDateSelect(innerDate.set("year", year));
            setContent("calendar");
          }}
          selectedDate={selectedDate}
        />
      )}
    </DatePicker>
  );
};

const DatePicker = styled.div`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  border: 1px solid #000000;
  border-radius: 4px;
`;

const PickerHeader = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  box-sizing: border-box;
  padding: 0px 16px;
`;

const PickerHeaderButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 0px;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.theme.dateInput.pickerMonthArrowsBackgroundColor};
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
  svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    flex-shrink: 0;
    user-select: none;
  }
`;

const HeaderMonthYear = styled.span`
  color: ${(props) => props.theme.dateInput.pickerMonthFontColor};
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
`;

export default React.memo(DxcDatePicker);
