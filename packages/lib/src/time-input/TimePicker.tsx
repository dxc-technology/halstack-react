import styled from "@emotion/styled";
import { TimePickerPropsType } from "./types";
import { useEffect, useState } from "react";
import TimePickerColumn from "./TimePickerColumn";

// Array to be used in seconds and minutes.
const STEP = 5;
const ARRAY_OF_60 = Array.from({ length: 60 / STEP }, (_, index) => index * STEP);

const TimePickerContainer = styled.div`
  display: flex;
  height: 200px;
  gap: var(--spacing-gap-m);
`;
const handleColumnKeyDown = (
  event: React.KeyboardEvent,
  column: string,
  focusedValue: number,
  totalValues: number,
  setValueToFocus: React.Dispatch<React.SetStateAction<number>>,
  onSelect?: (value: number) => void,
  step?: number
) => {
  const stepValue = step || 1;
  // ignore tab key to allow normal tab behavior, and prevent default for other keys to manage focus manually
  if (!["Tab"].includes(event.key)) event.preventDefault();
  if (event.key === "ArrowDown") {
    if (column === "hour" && focusedValue === 23) {
      setValueToFocus(0);
    } else if (column === "hour") {
      const newValue = focusedValue + stepValue > totalValues ? stepValue : focusedValue + stepValue;
      setValueToFocus((prev) => (prev === undefined ? 1 : newValue));
    } else if (focusedValue === totalValues - stepValue) {
      setValueToFocus(0);
    } else {
      const newValue = focusedValue + stepValue > totalValues - stepValue ? 0 : focusedValue + stepValue;
      setValueToFocus(newValue);
    }
  } else if (event.key === "ArrowUp") {
    if (column === "hour" && focusedValue === 0) {
      setValueToFocus(23);
    } else if (column === "hour") {
      const newValue = focusedValue - stepValue < 0 ? totalValues - stepValue : focusedValue - stepValue;
      setValueToFocus((prev) => (prev === undefined ? totalValues - stepValue : newValue));
    } else if (focusedValue === 0) {
      setValueToFocus(totalValues - stepValue);
    } else {
      const newValue = focusedValue - stepValue < 0 ? totalValues - stepValue : focusedValue - stepValue;
      setValueToFocus(newValue);
    }
  } else if (["Enter", " "].includes(event.key)) {
    if (onSelect) {
      onSelect(focusedValue);
    }
  }
};

const TimePicker = ({
  onSelecthours,
  onSelectMinutes,
  onSelectSeconds,
  onSelectDayPeriod,
  timeFormat,
  showSeconds,
  hourValue,
  minuteValue,
  secondValue,
  dayPeriod,
  id,
  tabIndex = 0,
}: TimePickerPropsType) => {
  const [hourToFocus, setHourToFocus] = useState(hourValue || 1);
  const [minuteToFocus, setMinuteToFocus] = useState(minuteValue || 0);
  const [secondToFocus, setSecondToFocus] = useState(secondValue || 0);
  const [dayPeriodToFocus, setDayPeriodToFocus] = useState(dayPeriod || 0);
  const totalHours = timeFormat === "12" ? 12 : 24;

  useEffect(() => {
    if (dayPeriodToFocus !== undefined) {
      document.getElementById(`${id}-dayPeriod-${dayPeriodToFocus}`)?.focus();
    }
  }, [dayPeriodToFocus]);
  useEffect(() => {
    if (secondToFocus !== undefined) {
      document.getElementById(`${id}-second-${secondToFocus}`)?.focus();
    }
  }, [secondToFocus]);
  useEffect(() => {
    if (minuteToFocus !== undefined) {
      document.getElementById(`${id}-minute-${minuteToFocus}`)?.focus();
    }
  }, [minuteToFocus]);
  useEffect(() => {
    if (hourToFocus !== undefined) {
      document.getElementById(`${id}-hour-${hourToFocus}`)?.focus();
    }
  }, [hourToFocus]);

  return (
    <TimePickerContainer role="listbox" aria-label="Time picker">
      <TimePickerColumn
        valuesArray={Array.from({ length: totalHours }, (_, index) => index)}
        id={id}
        selectedValue={hourValue}
        valueToFocus={hourToFocus}
        tabIndex={tabIndex}
        dataType="hour"
        onClick={(value: number) => {
          onSelecthours(value);
          setHourToFocus(value);
        }}
        onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
          handleColumnKeyDown(event, "hour", value, totalHours, setHourToFocus, onSelecthours)
        }
      />
      <TimePickerColumn
        valuesArray={ARRAY_OF_60}
        id={id}
        selectedValue={minuteValue}
        valueToFocus={minuteToFocus}
        tabIndex={tabIndex}
        dataType="minute"
        onClick={(value: number) => {
          onSelectMinutes(value);
          setMinuteToFocus(value);
        }}
        onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
          handleColumnKeyDown(event, "minute", value, 60, setMinuteToFocus, onSelectMinutes, STEP)
        }
      />
      {showSeconds && (
        <TimePickerColumn
          valuesArray={ARRAY_OF_60}
          id={id}
          selectedValue={secondValue}
          valueToFocus={secondToFocus}
          tabIndex={tabIndex}
          dataType="second"
          onClick={(value: number) => {
            if (typeof onSelectSeconds === "function") {
              onSelectSeconds(value);
              setSecondToFocus(value);
            }
          }}
          onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
            handleColumnKeyDown(event, "minute", value, 60, setMinuteToFocus, onSelectMinutes, STEP)
          }
        />
      )}
      {timeFormat === "12" && (
        <TimePickerColumn
          valuesArray={[0, 1]}
          id={id}
          selectedValue={dayPeriod}
          valueToFocus={dayPeriodToFocus}
          tabIndex={tabIndex}
          dataType="dayPeriod"
          onClick={(value: number) => {
            if (typeof onSelectDayPeriod === "function") {
              onSelectDayPeriod(value);
              setDayPeriodToFocus(value);
            }
          }}
          onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
            handleColumnKeyDown(event, "dayPeriod", value, 2, setDayPeriodToFocus, onSelectDayPeriod)
          }
        />
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
