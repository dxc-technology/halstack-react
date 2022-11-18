import { UnitType, Dayjs } from "dayjs";
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { CalendarPropsType, SelectablePropsType } from "./types";
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

const isDaySelected = (day: number, selectedDate, innerDate) => {
  if (
    selectedDate.get("month") === innerDate.get("month") &&
    selectedDate.get("year") === innerDate.get("year") &&
    selectedDate.get("date") === day
  ) {
    return true;
  }
  return false;
};

const Calendar = ({ selectedDate, innerDate, onInnerDateChange, onDaySelect }: CalendarPropsType): JSX.Element => {
  const [dateToFocus, setDateToFocus] = useState(selectedDate);
  const dayCells = useMemo(() => {
    const monthDayCells = [];
    const firstDayOfMonth = innerDate.startOf("month").day() === 0 ? 6 : innerDate.startOf("month").day() - 1;
    const cellsInMonth = firstDayOfMonth + innerDate.daysInMonth();
    for (let i = 0; i < cellsInMonth; i++) {
      i < firstDayOfMonth ? monthDayCells.push(0) : monthDayCells.push(i - firstDayOfMonth + 1);
    }
    return monthDayCells;
  }, [innerDate]);
  const translatedLabels = useTranslatedLabels();
  const weekDays = translatedLabels.calendar.daysShort;

  const handleOnMonthNextTab = (event) => {
    if (event.key === "Tab" && !event.shiftKey) {
      if (selectedDate.get("month") !== innerDate.get("month") || selectedDate.get("year") !== innerDate.get("year")) {
        setDateToFocus(innerDate.set("date", 1));
      } else {
        setDateToFocus(selectedDate);
      }
    }
  };

  const onDateClickHandler = (date: number, unit: UnitType) => {
    onDaySelect(date, unit);
    const dateToFocusTemp = innerDate.set(unit, date);
    focusDate(dateToFocusTemp);
  };

  const focusDate = (date: Dayjs) => {
    if (innerDate.get("month") !== date.get("month") || innerDate.get("year") !== date.get("year")) {
      onInnerDateChange(date);
    }
    setDateToFocus(date);
    document.getElementById(`day_${date.get("date")}`)?.focus();
  };

  const handleMonthChange = (date: Dayjs) => {
    onInnerDateChange(date);
  };

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
        onDaySelect(day, "date");
        break;
    }
  };
  return (
    <CalendarContainer>
      <PickerHeader>
        <PickerHeaderButton
          aria-label={translatedLabels.calendar.previousMonthTitle}
          title={translatedLabels.calendar.previousMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") - 1))}
        >
          {leftCaret}
        </PickerHeaderButton>
        <HeaderMonthYear aria-live="polite">{innerDate.format("MMMM YYYY")}</HeaderMonthYear>
        <PickerHeaderButton
          aria-label={translatedLabels.calendar.nextMonthTitle}
          title={translatedLabels.calendar.nextMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") + 1))}
          onKeyDown={handleOnMonthNextTab}
        >
          {rightCaret}
        </PickerHeaderButton>
      </PickerHeader>
      <WeekHeader>
        {weekDays.map((weekDay) => (
          <DayHeaderCell key={weekDay}>{weekDay}</DayHeaderCell>
        ))}
      </WeekHeader>
      <DayCellsContainer>
        {dayCells.map((day, index) =>
          day !== 0 ? (
            <DayCell
              onKeyDown={(event) => handleDayKeyboardEvent(event, day)}
              aria-label={day}
              id={`day_${day}`}
              key={`day_${day}`}
              onClick={() => onDateClickHandler(day, "date")}
              selected={isDaySelected(day, selectedDate, innerDate)}
              autoFocus={isDaySelected(day, selectedDate, innerDate)}
              aria-selected={isDaySelected(day, selectedDate, innerDate)}
              tabIndex={day === dateToFocus.get("date") ? 0 : -1}
            >
              {day}
            </DayCell>
          ) : (
            <EmptyDayCell key={`empty_${index}`} />
          )
        )}
      </DayCellsContainer>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
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

const DayCell = styled.button<SelectablePropsType>`
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
  font-size: 0.85rem;
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

export default React.memo(Calendar);
