import { Dayjs } from "dayjs";
import { useContext, useState, useMemo, useEffect, useId, memo, KeyboardEvent, FocusEvent } from "react";
import styled from "@emotion/styled";
import { CalendarPropsType, DateType } from "./types";
import { HalstackLanguageContext } from "../HalstackContext";
import { divideDaysIntoWeeks, getCalendarDays, getDateToFocus, isDaySelected } from "./utils";

const CalendarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 292px;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  color: var(--color-fg-neutral-dark);
  font-weight: var(--typography-label-regular);
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
  width: 32px;
  height: var(--height-m);
`;

const MonthContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: var(--spacing-gap-xs);
  flex-direction: column;
  justify-content: space-between;
`;

const WeekContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: var(--spacing-gap-xs);
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
  width: 32px;
  height: var(--height-m);
  padding: 0;
  border: none;
  border-radius: var(--border-radius-xl);
  cursor: pointer;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  background-color: ${(props) => (props.selected ? "var(--color-bg-primary-strong);" : "transparent")};
  color: ${(props) =>
    props.selected
      ? "var(--color-fg-neutral-bright);"
      : !props.actualMonth
        ? "var(--color-fg-neutral-medium);"
        : "var(--color-fg-neutral-dark);"};

  ${(props) =>
    props.isCurrentDay &&
    !props.selected &&
    `border: var(--border-width-s) var(--border-style-default) var(--border-color-primary-lighter);`}

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
  &:hover {
    background-color: ${(props) =>
      props.selected ? "var(--color-bg-primary-strong);" : "var(--color-bg-primary-lighter);"};
    color: ${(props) => (props.selected ? "var(--color-fg-neutral-bright);" : "var(--color-fg-neutral-dark);")};
  }
  &:active {
    background-color: var(--color-bg-primary-stronger);
    color: var(--color-fg-neutral-bright);
  }
`;

const Calendar = ({
  selectedDate,
  innerDate,
  onInnerDateChange,
  onDaySelect,
  today,
}: CalendarPropsType): JSX.Element => {
  const [dateToFocus, setDateToFocus] = useState(getDateToFocus(selectedDate, innerDate, today));
  const [isFocusable, setIsFocusable] = useState(false);
  const id = useId();
  const languageContext = useContext(HalstackLanguageContext);
  const translatedLabels = languageContext.labels;
  const locale = new Intl.Locale(languageContext.locale ? languageContext.locale : navigator.language);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const firstDayOfWeek = (locale ? (locale.getWeekInfo?.()?.firstDay ?? 1) : 1) % 7;
  const dayCells = useMemo(() => getCalendarDays(innerDate, firstDayOfWeek), [innerDate, firstDayOfWeek]);

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

  const orderedWeekDays = useMemo(() => {
    const weekDays = translatedLabels.calendar.daysShort;
    return [...weekDays.slice(firstDayOfWeek - 1), ...weekDays.slice(0, firstDayOfWeek - 1)];
  }, [translatedLabels.calendar.daysShort]);

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
        {/* array needs to be changed based on firstDayOfWeek or the array itself */}
        {orderedWeekDays.map((weekDay) => (
          <WeekHeaderCell key={weekDay} role="columnheader">
            {weekDay}
          </WeekHeaderCell>
        ))}
      </CalendarHeaderRow>
      <MonthContainer onBlur={handleOnBlur} role="rowgroup">
        {divideDaysIntoWeeks(dayCells, translatedLabels.calendar.daysShort.length).map((week, rowIndex) => (
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

export default memo(Calendar);
