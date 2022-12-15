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

const downCaret = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7.5 10L12.5 15L17.5 10H7.5Z" fill="currentColor" />
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
  const [content, setContent] = useState("calendar");
  const selectedDate = date.isValid() ? date : null;
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

  const handleDateSelect = (date: Dayjs) => {
    setInnerDate(date);
    onDateSelect(date);
  };

  const handleMonthChange = (date: Dayjs) => {
    setInnerDate(date);
  };

  return (
    <DatePicker id={id} ref={ref}>
      <PickerHeader>
        <HeaderButton
          aria-label={translatedLabels.calendar.previousMonthTitle}
          title={translatedLabels.calendar.previousMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") - 1))}
        >
          {leftCaret}
        </HeaderButton>
        <HeaderYearTrigger
          aria-live="polite"
          onClick={() => setContent((content) => (content === "yearPicker" ? "calendar" : "yearPicker"))}
        >
          <HeaderYearTriggerLabel>
            {translatedLabels.calendar.months[innerDate.get("month")]} {innerDate.format("YYYY")}
          </HeaderYearTriggerLabel>
          {downCaret}
        </HeaderYearTrigger>
        <HeaderButton
          aria-label={translatedLabels.calendar.nextMonthTitle}
          title={translatedLabels.calendar.nextMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") + 1))}
        >
          {rightCaret}
        </HeaderButton>
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
            setInnerDate(innerDate.set("year", year));
            setContent("calendar");
          }}
          selectedDate={selectedDate}
        />
      )}
    </DatePicker>
  );
};

const DatePicker = styled.div`
  padding-top: 16px;
  background-color: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #bfbfbf;
  border-radius: 4px;
`;

const PickerHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 40px;
  padding: 0px 16px;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0px;
  background-color: ${(props) => props.theme.dateInput.pickerMonthArrowsBackgroundColor};
  font-size: 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
  &:hover {
    background-color: ${(props) => props.theme.dateInput.pickerHoverDateBackgroundColor};
  }
  &:active {
    background-color: ${(props) => props.theme.dateInput.pickerActiveDateBackgroundColor};
    color: ${(props) => props.theme.dateInput.pickerActiveDateFontColor};
  }
  svg {
    display: inline-block;
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    font-size: 1.5rem;
    user-select: none;
  }
`;

const HeaderYearTrigger = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 172px;
  color: ${(props) => props.theme.dateInput.pickerMonthFontColor};
  background-color: transparent;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.dateInput.pickerHoverDateBackgroundColor};
  }
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
  &:active {
    color: ${(props) => props.theme.dateInput.pickerActiveDateFontColor};
    background-color: ${(props) => props.theme.dateInput.pickerActiveDateBackgroundColor};
  }
`;

const HeaderYearTriggerLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 19px;
`;

export default React.memo(DxcDatePicker);
