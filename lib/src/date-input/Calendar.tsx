import dayjs, { UnitType, Dayjs } from "dayjs";
import React, { useState, useMemo, useEffect, useRef } from "react";
import styled from "styled-components";
import { CalendarPropsType } from "./types";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const firstYear = 1899;
const lastYear = 2100;

const DxcDateInputCalendar = ({ date, onDateSelect, onCloseCalendar }: CalendarPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date.isValid() ? date : dayjs());
  const [selectedDate, setSelectedDate] = useState(date.isValid() ? date : dayjs());
  const [dateToFocus, setDateToFocus] = useState(date.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const dayCells = useMemo(() => {
    const monthDayCells = [];
    const firstDayOfMonth = innerDate.startOf("month").day() === 0 ? 6 : innerDate.startOf("month").day() - 1;
    const cellsInMonth = firstDayOfMonth + innerDate.daysInMonth();
    for (let i = 0; i < cellsInMonth; i++) {
      i < firstDayOfMonth ? monthDayCells.push(0) : monthDayCells.push(i - firstDayOfMonth + 1);
    }
    return monthDayCells;
  }, [innerDate]);

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onCloseCalendar();
      }
    }
    function handleKeyboardEvent(event) {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onCloseCalendar();
          break;
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [ref.current]);

  useEffect(() => {
    document.getElementById(`day_` + dateToFocus.get("date"))?.focus();
  }, [dateToFocus]);

  function handleDateSelect(date: number, unit: UnitType) {
    setInnerDate((innerDate) => {
      const newDate = innerDate.set(unit, date);
      setSelectedDate(newDate);
      onDateSelect(newDate);
      return newDate;
    });
  }

  function focusDate(date: Dayjs) {
    if (innerDate.get("month") !== date.get("month") || innerDate.get("year") !== date.get("year")) {
      setInnerDate((innerDate) => {
        return innerDate.set("month", date.get("month")).set("year", date.get("year"));
      });
    }
    setDateToFocus(date);
  }

  const handleDayKeyboardEvent = (event, day) => {
    let dateToFocusTemp = innerDate.set("date", day);
    switch (event.key) {
      case "PageUp":
        event.preventDefault();
        event.shiftKey
          ? (dateToFocusTemp = dateToFocusTemp.set("year", dateToFocusTemp.get("year") - 1))
          : (dateToFocusTemp = dateToFocusTemp.set("month", dateToFocusTemp.get("month") - 1));
        focusDate(dateToFocusTemp);
        break;
      case "PageDown":
        event.preventDefault();
        event.shiftKey
          ? (dateToFocusTemp = dateToFocusTemp.set("year", dateToFocusTemp.get("year") + 1))
          : (dateToFocusTemp = dateToFocusTemp.set("month", dateToFocusTemp.get("month") + 1));
        focusDate(dateToFocusTemp);
        break;
      case "ArrowLeft":
        event.preventDefault();
        dateToFocusTemp = dateToFocusTemp.set("date", dateToFocusTemp.get("date") - 1);
        focusDate(dateToFocusTemp);
        break;
      case "ArrowRight":
        event.preventDefault();
        dateToFocusTemp = dateToFocusTemp.set("date", dateToFocusTemp.get("date") + 1);
        focusDate(dateToFocusTemp);
        break;
      case "ArrowUp":
        event.preventDefault();
        dateToFocusTemp = dateToFocusTemp.set("date", dateToFocusTemp.get("date") - 7);
        focusDate(dateToFocusTemp);
        break;
      case "ArrowDown":
        event.preventDefault();
        dateToFocusTemp = dateToFocusTemp.set("date", dateToFocusTemp.get("date") + 7);
        focusDate(dateToFocusTemp);
        break;
      case "Home":
        event.preventDefault();
        dateToFocus.get("day") !== 0
          ? (dateToFocusTemp = dateToFocusTemp.day(1))
          : (dateToFocusTemp = innerDate.date(day - 1).day(1));
        focusDate(dateToFocusTemp);
        break;
      case "End":
        event.preventDefault();
        dateToFocusTemp.get("day") !== 0 && (dateToFocusTemp = dateToFocusTemp.day(7));
        focusDate(dateToFocusTemp);
        break;
      case " ":
        event.preventDefault();
        handleDateSelect(day, "date");
        break;
    }
  };

  return (
    <DatePicker id="date-picker" ref={ref}>
      <DatePickerToolbar>
        <DatePickerToolbarButton
          onClick={() => setContent((content) => (content === "yearPicker" ? "calendar" : "yearPicker"))}
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
        <Calendar>
          <PickerHeader>
            <PickerHeaderButton
              aria-label="previous month"
              onClick={() => setInnerDate(innerDate.set("month", innerDate.get("month") - 1))}
            >
              <svg fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                <path fill="none" d="M0 0h24v24H0V0z"></path>
              </svg>
            </PickerHeaderButton>
            <HeaderMonthYear aria-live="polite">{innerDate.format("MMMM YYYY")}</HeaderMonthYear>
            <PickerHeaderButton
              aria-label="next month"
              onClick={() => setInnerDate(innerDate.set("month", innerDate.get("month") + 1))}
            >
              <svg fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                <path fill="none" d="M0 0h24v24H0V0z"></path>
              </svg>
            </PickerHeaderButton>
          </PickerHeader>
          <WeekHeader>
            {weekDays.map((weekDay) => (
              <DayHeaderCell key={weekDay}>{weekDay}</DayHeaderCell>
            ))}
          </WeekHeader>

          <DayCellsContainer>
            {dayCells.map((day) =>
              day !== 0 ? (
                <DayCell
                  onKeyDown={(event) => handleDayKeyboardEvent(event, day)}
                  id={"day_" + day}
                  aria-label={day}
                  onClick={() => handleDateSelect(day, "date")}
                  selected={day === innerDate.get("date") && selectedDate.isSame(innerDate, "day")}
                  autoFocus={day === innerDate.get("date") && selectedDate.isSame(innerDate, "day")}
                  aria-selected={day === innerDate.get("date") && selectedDate.isSame(innerDate, "day")}
                >
                  {day}
                </DayCell>
              ) : (
                <EmptyDayCell />
              )
            )}
          </DayCellsContainer>
        </Calendar>
      )}
      {content === "yearPicker" && (
        <YearPicker>
          {getYearsArray().map((year) => (
            <YearPickerButton
              aria-label={year}
              selected={selectedDate.get("year") === year}
              autoFocus={selectedDate.get("year") === year}
              onClick={() => {
                handleDateSelect(year, "year");
                setContent("calendar");
              }}
            >
              <span>{year}</span>
            </YearPickerButton>
          ))}
        </YearPicker>
      )}
      {content === "monthPicker" && (
        <MonthPicker>
          {months.map((month, index) => (
            <MonthPickerButton
              aria-label={month}
              selected={selectedDate.get("month") === index}
              autoFocus={selectedDate.get("month") === index}
              onClick={() => {
                handleDateSelect(index, "month");
                setContent("calendar");
              }}
            >
              {month}
            </MonthPickerButton>
          ))}
        </MonthPicker>
      )}
    </DatePicker>
  );
};

function getYearsArray() {
  const yearList = [];
  for (let i = firstYear; i <= lastYear; i++) {
    yearList.push(i);
  }
  return yearList;
}

const DatePicker = styled.div`
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
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
`;

const DatePickerToolbarSubtitleButton = styled(DatePickerToolbarButton)`
  line-height: 1.235;
  letter-spacing: 0.00735em;
`;

const Calendar = styled.div`
  width: ${(props) => props.theme.dateInput.pickerWidth};
  height: ${(props) => props.theme.dateInput.pickerHeight};
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  justify-content: center;
  border-radius: 4px;
`;

const PickerHeader = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.dateInput.pickerBackgroundColor};
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

const WeekHeader = styled.div`
  display: flex;
  max-height: 16px;
  align-items: center;
  justify-content: center;
`;

const DayHeaderCell = styled.span`
  color: ${(props) => props.theme.dateInput.pickerWeekFontColor};
  width: 36px;
  margin: 0 2px;
  text-align: center;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;

const DayCellsContainer = styled.div`
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  margin-top: 12px;
  height: 228px;
  padding: 0 5px;
`;

type SelectableProps = {
  selected?: boolean;
};
const DayCell = styled.button<SelectableProps>`
  display: inline-flex;
  background-color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedDateBackgroundColor : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedDateColor : props.theme.dateInput.pickerDayFontColor};
  justify-content: center;
  align-items: center;
  vertical-align: top;
  width: 36px;
  height: 36px;
  margin: 0 2px;
  margin-bottom: 2px;
  padding: 0;
  font-size: 0.75rem;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-weight: 500;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme.dateInput.pickerSelectedDateBackgroundColor
        : props.theme.dateInput.pickerHoverDateBackgroundColor};
    color: ${(props) =>
      props.selected ? props.theme.dateInput.pickerSelectedDateColor : props.theme.dateInput.pickerHoverDateFontColor};
  }
`;

const EmptyDayCell = styled.div`
  display: inline-block;
  width: 40px;
  height: 36px;
`;

const YearPicker = styled.div`
  width: ${(props) => props.theme.dateInput.pickerWidth};
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: ${(props) => props.theme.dateInput.pickerHeight};
  overflow-y: scroll;
  height: 300px;
`;

const YearPickerButton = styled.button<SelectableProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  width: 100%;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 87px;
    height: 40px;
    ${(props) =>
      props.selected
        ? `
    color: ${props.theme.dateInput.pickerSelectedDateColor};
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    font-weight: 500;
    border-radius: 20px;
    background-color: ${props.theme.dateInput.pickerSelectedDateBackgroundColor};`
        : `color: ${props.theme.dateInput.pickerYearFontColor};`}
  }

  &:focus {
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
    font-weight: 500;
    ${(props) =>
      props.selected
        ? `span {background-color: ${props.theme.dateInput.pickerHoverDateBackgroundColor}; color: ${props.theme.dateInput.pickerHoverDateFontColor};}`
        : `background-color: ${props.theme.dateInput.pickerHoverDateBackgroundColor};`}

    outline: none;
  }
`;

const MonthPicker = styled.div`
  width: ${(props) => props.theme.dateInput.pickerWidth};
  display: flex;
  flex-wrap: wrap;
  max-height: ${(props) => props.theme.dateInput.pickerHeight};
  padding: 18px 0px;
`;

const MonthPickerButton = styled.button<SelectableProps>`
  width: 58px;
  margin: 0 7px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  letter-spacing: 0.46px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedDateBackgroundColor : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedDateColor : props.theme.dateInput.pickerDayFontColor};
  &:hover {
    background-color: ${(props) => props.theme.dateInput.pickerHoverDateBackgroundColor};
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
  }
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
`;

export default DxcDateInputCalendar;
