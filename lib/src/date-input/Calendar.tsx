import dayjs, { Dayjs } from "dayjs";
import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { CalendarPropsType } from "./types";
import useTranslatedLabels from "../useTranslatedLabels";

const isDaySelected = (date: { day: number; month: number }, selectedDate, innerDate) => {
  if (
    selectedDate?.get("month") === innerDate.get("month") &&
    selectedDate?.get("month") === date.month &&
    selectedDate?.get("year") === innerDate.get("year") &&
    selectedDate?.get("date") === date.day
  ) {
    return true;
  }
  return false;
};

const Calendar = ({ selectedDate, innerDate, onInnerDateChange, onDaySelect }: CalendarPropsType): JSX.Element => {
  const [dateToFocus, setDateToFocus] = useState(
    selectedDate?.get("month") === innerDate.get("month") && selectedDate?.get("year") === innerDate.get("year")
      ? selectedDate
      : dayjs()
  );
  const [toFocus, setToFocus] = useState(false);
  const today = dayjs();
  const dayCells = useMemo(() => {
    const monthDayCells = [];
    const lastMonthNumberOfDays = innerDate.set("month", innerDate.get("month") - 1).endOf("month");
    const firstDayOfMonth = innerDate.startOf("month").day() === 0 ? 6 : innerDate.startOf("month").day() - 1;
    const daysInMonth = firstDayOfMonth + innerDate.daysInMonth();
    for (let i = 0; i < 42; i++) {
      if (i < firstDayOfMonth) {
        monthDayCells.push({
          day: lastMonthNumberOfDays.get("date") - firstDayOfMonth + i + 1,
          month: innerDate.get("month") - 1,
        });
      } else if (i < daysInMonth) {
        monthDayCells.push({ day: i - firstDayOfMonth + 1, month: innerDate.get("month") });
      } else {
        monthDayCells.push({ day: i - daysInMonth + 1, month: innerDate.get("month") + 1 });
      }
    }
    return monthDayCells;
  }, [innerDate]);
  const translatedLabels = useTranslatedLabels();
  const weekDays = translatedLabels.calendar.daysShort;

  const onDateClickHandler = (date: { day: number; month: number }) => {
    const newDate = innerDate.set("month", date.month).set("date", date.day);
    onDaySelect(newDate);
    focusDate(newDate);
  };

  const focusDate = (date: Dayjs) => {
    if (innerDate.get("month") !== date.get("month") || innerDate.get("year") !== date.get("year")) {
      onInnerDateChange(date);
    }
    setDateToFocus(date);
    setToFocus(true);
  };

  useEffect(() => {
    if (toFocus) {
      document.getElementById(`day_${dateToFocus.get("date")}_month${dateToFocus.get("month")}`)?.focus();
      setToFocus(false);
    }
  }, [dateToFocus]);

  useEffect(() => {
    if (dateToFocus.get("month") !== innerDate.get("month") || dateToFocus.get("year") !== innerDate.get("year"))
      setDateToFocus(innerDate.set("date", 1));
  }, [innerDate]);

  const handleDayKeyboardEvent = (event, date) => {
    let dateToFocusTemp =
      date.month === innerDate.get("month")
        ? innerDate.set("date", date.day)
        : innerDate.set("date", date.day).set("month", date.month);
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
          : (dateToFocusTemp = innerDate.date(date.day - 1).day(1));
        focusDate(dateToFocusTemp);
        break;
      case "End":
        event.preventDefault();
        dateToFocusTemp.get("day") !== 0 && (dateToFocusTemp = dateToFocusTemp.day(7));
        focusDate(dateToFocusTemp);
        break;
      case " ":
        event.preventDefault();
        onDaySelect(dateToFocusTemp);
        break;
    }
  };
  return (
    <CalendarContainer>
      <WeekHeader>
        {weekDays.map((weekDay) => (
          <WeekHeaderCell key={weekDay}>{weekDay}</WeekHeaderCell>
        ))}
      </WeekHeader>
      <DayCellsContainer>
        {dayCells.map((date, index) =>
          date !== 0 ? (
            <DayCell
              onKeyDown={(event) => handleDayKeyboardEvent(event, date)}
              aria-label={date.day}
              id={`day_${date.day}_month${date.month}`}
              key={`day_${index}`}
              onClick={() => onDateClickHandler(date)}
              selected={isDaySelected(date, selectedDate, innerDate)}
              actualMonth={date.month === innerDate.get("month")}
              autoFocus={date.day === dateToFocus.get("date") && date.month === dateToFocus.get("month")}
              aria-selected={isDaySelected(date, selectedDate, innerDate)}
              tabIndex={date.day === dateToFocus.get("date") && date.month === dateToFocus.get("month") ? 0 : -1}
              isCurrentDay={
                today.get("date") === date.day &&
                today.get("month") === innerDate.get("month") &&
                today.get("month") === date.month &&
                today.get("year") === innerDate.get("year")
              }
            >
              {date.day}
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
  // width: ${(props) => props.theme.dateInput.pickerWidth};
  // height: ${(props) => props.theme.dateInput.pickerHeight};
  width: 268px;
  height: 260px;
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px 8px;
  justify-content: center;
  border-radius: 4px;
`;

const WeekHeader = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

const WeekHeaderCell = styled.span`
  color: ${(props) => props.theme.dateInput.pickerWeekFontColor};
  width: 36px;
  text-align: center;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.03333em;
`;

const DayCellsContainer = styled.div`
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  height: 224px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`;

type DayCellPropsType = {
  selected?: boolean;
  actualMonth: boolean;
  isCurrentDay: boolean;
};

const DayCell = styled.button<DayCellPropsType>`
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
  padding: 0;
  font-size: 0.85rem;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-weight: 500;
  border: none;
  border-radius: 50%;
  outline-offset: -2px;
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
  &:active {
    background: #4b1c7d;
    color: #ffffff;
  }
  ${(props) => props.isCurrentDay && !props.selected && `border: 1px solid #CBACEC;`}
  ${(props) => (!props.actualMonth ? `color: #999999;` : ``)}
`;

const EmptyDayCell = styled.div`
  display: inline-block;
  width: 40px;
  height: 36px;
`;

export default React.memo(Calendar);
