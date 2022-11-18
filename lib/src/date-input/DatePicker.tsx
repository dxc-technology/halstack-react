import dayjs, { UnitType } from "dayjs";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DatePickerPropsType } from "./types";
import Calendar from "./Calendar";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";

const DxcDatePicker = ({
  date,
  onDateSelect,
  onCloseCalendar,
  onEscCalendar,
  id,
}: DatePickerPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date.isValid() ? date : dayjs());
  const [selectedDate, setSelectedDate] = useState(date.isValid() ? date : dayjs());
  const [dateToFocus, setDateToFocus] = useState(date.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const ref = useRef(null);

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

  const handleDateSelect = (date: number, unit: UnitType) => {
    const newDate = innerDate.set(unit, date);
    setSelectedDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <DatePicker id={id} ref={ref}>
      <DatePickerToolbar>
        <DatePickerToolbarButton
          onClick={() => setContent((content) => (content === "yearPicker" ? "calendar" : "yearPicker"))}
          onKeyDown={handleOnYearShiftTab}
        >
          {selectedDate.format("YYYY")}
        </DatePickerToolbarButton>
        <DatePickerToolbarSubtitleButton
          onClick={() => setContent((content) => (content === "monthPicker" ? "calendar" : "monthPicker"))}
        >
          {selectedDate.format("MMMM")}
        </DatePickerToolbarSubtitleButton>
      </DatePickerToolbar>
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
            handleDateSelect(year, "year");
            setContent("calendar");
          }}
          selectedDate={selectedDate}
        />
      )}
      {content === "monthPicker" && (
        <MonthPicker
          onMonthSelect={(month) => {
            handleDateSelect(month, "month");
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
  border-radius: 4px;
`;

const DatePickerToolbar = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

const DatePickerToolbarButton = styled.button`
  color: ${(props) => props.theme.dateInput.pickerActualDateFontColor};
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  font-size: 2rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
    outline-offset: -2px;
  }
`;

const DatePickerToolbarSubtitleButton = styled(DatePickerToolbarButton)`
  line-height: 1.235;
  letter-spacing: 0.00735em;
`;

export default React.memo(DxcDatePicker);
