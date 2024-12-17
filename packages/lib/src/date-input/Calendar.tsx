import { Dayjs } from "dayjs";
import { useState, useMemo, useEffect, useId, memo, KeyboardEvent, FocusEvent } from "react";
import styled from "styled-components";
import { CalendarPropsType, DateType } from "./types";
import useTranslatedLabels from "../useTranslatedLabels";

const getDays = (innerDate: Dayjs) => {
  const monthDayCells: DateType[] = [];
  const lastMonthNumberOfDays = innerDate.set("month", innerDate.get("month") - 1).endOf("month");
  const firstDayOfMonth = innerDate.startOf("month").day() === 0 ? 6 : innerDate.startOf("month").day() - 1;
  const daysInMonth = firstDayOfMonth + innerDate.daysInMonth();

  for (let i = 0; i < 42; i++) {
    if (i < firstDayOfMonth) {
      monthDayCells.push({
        day: lastMonthNumberOfDays.get("date") - firstDayOfMonth + i + 1,
        month: innerDate.get("month") ? innerDate.get("month") - 1 : 11,
        year: innerDate.set("month", innerDate.get("month") - 1).get("year"),
      });
    } else if (i < daysInMonth) {
      monthDayCells.push({
        day: i - firstDayOfMonth + 1,
        month: innerDate.get("month"),
        year: innerDate.get("year"),
      });
    } else {
      monthDayCells.push({
        day: i - daysInMonth + 1,
        month: innerDate.get("month") === 11 ? 0 : innerDate.get("month") + 1,
        year: innerDate.set("month", innerDate.get("month") + 1).get("year"),
      });
    }
  }
  return monthDayCells;
};

const getDateToFocus = (selectedDate: Dayjs, innerDate: Dayjs, today: Dayjs) =>
  selectedDate?.get("month") === innerDate.get("month") && selectedDate?.get("year") === innerDate.get("year")
    ? selectedDate
    : today.get("month") === innerDate.get("month") && today.get("year") === innerDate.get("year")
      ? today
      : innerDate.set("date", 1);

const isDaySelected = (date: DateType, selectedDate: Dayjs) =>
  selectedDate?.get("month") === date.month &&
  selectedDate?.get("year") === date.year &&
  selectedDate?.get("date") === date.day;

const divideDaysIntoWeeks = (data: DateType[], weekSize: number) =>
  Array.from({ length: Math.ceil(data.length / weekSize) }, (_, rowIndex) =>
    data.slice(rowIndex * weekSize, (rowIndex + 1) * weekSize)
  );

const Calendar = ({
  selectedDate,
  innerDate,
  onInnerDateChange,
  onDaySelect,
  today,
}: CalendarPropsType): JSX.Element => {
  const id = useId();
  const [dateToFocus, setDateToFocus] = useState(getDateToFocus(selectedDate, innerDate, today));
  const [isFocusable, setIsFocusable] = useState(false);
  const dayCells = useMemo(() => getDays(innerDate), [innerDate]);
  const translatedLabels = useTranslatedLabels();
  const weekDays = translatedLabels?.calendar?.daysShort ?? [];

  const onDateClickHandler = (date: DateType) => {
    const newDate = innerDate.set("month", date.month).set("date", date.day);
    onDaySelect(newDate);
    setDateToFocus(newDate);
  };

  const handleOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event?.currentTarget.contains(event.relatedTarget)) {
      setDateToFocus(getDateToFocus(selectedDate, innerDate, today));
    }
  };

  const focusDate = (date: Dayjs) => {
    if (innerDate.get("month") !== date.get("month") || innerDate.get("year") !== date.get("year")) {
      onInnerDateChange(date);
    }
    setDateToFocus(date);
    setIsFocusable(true);
  };

  useEffect(() => {
    if (isFocusable) {
      document.getElementById(`${id}_day_${dateToFocus.get("date")}_month${dateToFocus.get("month")}`)?.focus();
      setIsFocusable(false);
    }
  }, [dateToFocus, isFocusable]);

  useEffect(() => {
    if (dateToFocus.get("month") !== innerDate.get("month") || dateToFocus.get("year") !== innerDate.get("year")) {
      setDateToFocus(getDateToFocus(selectedDate, innerDate, today));
    }
  }, [innerDate, dateToFocus, selectedDate, today]);

  const handleDayKeyboardEvent = (event: KeyboardEvent<HTMLButtonElement>, date: DateType) => {
    let dateToFocusTemp =
      date.month === innerDate.get("month")
        ? innerDate.set("date", date.day)
        : innerDate.set("date", date.day).set("month", date.month);

    switch (event.key) {
      case "PageUp":
        event.preventDefault();
        if (event.shiftKey) {
          dateToFocusTemp = dateToFocusTemp.set("year", dateToFocusTemp.get("year") - 1);
        } else {
          dateToFocusTemp = dateToFocusTemp.set("month", dateToFocusTemp.get("month") - 1);
        }
        focusDate(dateToFocusTemp);
        break;
      case "PageDown":
        event.preventDefault();
        if (event.shiftKey) {
          dateToFocusTemp = dateToFocusTemp.set("year", dateToFocusTemp.get("year") + 1);
        } else {
          dateToFocusTemp = dateToFocusTemp.set("month", dateToFocusTemp.get("month") + 1);
        }
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
        if (dateToFocus.get("day") !== 0) {
          dateToFocusTemp = dateToFocusTemp.day(1);
        } else {
          dateToFocusTemp = innerDate.date(date.day - 1).day(1);
        }
        focusDate(dateToFocusTemp);
        break;
      case "End":
        event.preventDefault();
        if (dateToFocusTemp.get("day") !== 0) {
          dateToFocusTemp = dateToFocusTemp.day(7);
        }
        focusDate(dateToFocusTemp);
        break;
      case " ":
        event.preventDefault();
        onDaySelect(dateToFocusTemp);
        break;
      default:
        break;
    }
  };
  return (
    <CalendarContainer role="grid">
      <CalendarHeaderRow role="row">
        {weekDays.map((weekDay) => (
          <WeekHeaderCell key={weekDay} role="columnheader">
            {weekDay}
          </WeekHeaderCell>
        ))}
      </CalendarHeaderRow>
      <MonthContainer onBlur={handleOnBlur} role="rowgroup">
        {divideDaysIntoWeeks(dayCells, weekDays.length).map((week, rowIndex) => (
          <WeekContainer key={`${id}_week_${rowIndex}`} role="row">
            {week.map((date) => (
              <DayCellButton
                id={`${id}_day_${date.day}_month${date.month}`}
                key={`${id}_day_${date.day}_month${date.month}`}
                role="gridcell"
                aria-selected={isDaySelected(date, selectedDate)}
                onKeyDown={(event) => handleDayKeyboardEvent(event, date)}
                onClick={() => onDateClickHandler(date)}
                selected={isDaySelected(date, selectedDate)}
                actualMonth={date.month === innerDate.get("month")}
                autoFocus={date.day === dateToFocus.get("date") && date.month === dateToFocus.get("month")}
                tabIndex={date.day === dateToFocus.get("date") && date.month === dateToFocus.get("month") ? 0 : -1}
                isCurrentDay={
                  today.get("date") === date.day &&
                  today.get("month") === innerDate.get("month") &&
                  today.get("month") === date.month &&
                  today.get("year") === innerDate.get("year")
                }
              >
                {date.day}
              </DayCellButton>
            ))}
          </WeekContainer>
        ))}
      </MonthContainer>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 8px 8px 8px;
  width: 292px;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: ${(props) => props.theme.dateInput.pickerFontSize};
  color: ${(props) => props.theme.dateInput.pickerFontColor};
  font-weight: ${(props) => props.theme.dateInput.pickerFontWeight};
`;

const CalendarHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const WeekHeaderCell = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
`;

const MonthContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: space-between;
`;

const WeekContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  justify-content: space-between;
`;

const DayCellButton = styled.button<{
  selected: boolean;
  actualMonth: boolean;
  isCurrentDay: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: ${(props) => props.theme.dateInput.pickerFontSize};
  color: ${(props) => props.theme.dateInput.pickerFontColor};
  font-weight: ${(props) => props.theme.dateInput.pickerFontWeight};

  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor} solid 2px;
  }
  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme.dateInput.pickerSelectedBackgroundColor
        : props.theme.dateInput.pickerHoverBackgroundColor};
    color: ${(props) =>
      props.selected ? props.theme.dateInput.pickerSelectedFontColor : props.theme.dateInput.pickerHoverFontColor};
  }
  &:active {
    background-color: ${(props) => props.theme.dateInput.pickerActiveBackgroundColor};
    color: ${(props) => props.theme.dateInput.pickerActiveFontColor};
  }

  ${(props) =>
    props.isCurrentDay &&
    !props.selected &&
    `border: ${props.theme.dateInput.pickerCurrentDateBorderWidth} solid ${props.theme.dateInput.pickerCurrentDateBorderColor};`}
  background-color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedBackgroundColor : "transparent"};
  color: ${(props) =>
    props.selected
      ? props.theme.dateInput.pickerSelectedFontColor
      : props.isCurrentDay
        ? props.theme.dateInput.pickerCurrentDateFontColor
        : !props.actualMonth
          ? props.theme.dateInput.pickerNonCurrentMonthFontColor
          : props.theme.dateInput.pickerFontColor};
`;

export default memo(Calendar);
