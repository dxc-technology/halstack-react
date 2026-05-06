import styled from "@emotion/styled";
import { TimePickerPropsType } from "./types";
import { useEffect, useState } from "react";
import TimePickerColumn from "./TimePickerColumn";
import { handleColumnKeyDown } from "./utils";
// Array to be used in seconds and minutes.
const STEP = 5;
const ARRAY_OF_60 = Array.from({ length: 60 / STEP }, (_, index) => index * STEP);

const TimePickerContainer = styled.div`
  display: flex;
  height: 200px;
  gap: var(--spacing-gap-m);
`;

const TimePicker = ({
  onPickTime,
  timeFormat,
  showSeconds,
  hourValue,
  minuteValue,
  secondValue,
  dayPeriod,
  id,
  tabIndex = 0,
}: TimePickerPropsType) => {
  const [hourToFocus, setHourToFocus] = useState(hourValue ?? (timeFormat === "12" ? 1 : 0));
  const [minuteToFocus, setMinuteToFocus] = useState(minuteValue ?? 0);
  const [secondToFocus, setSecondToFocus] = useState(secondValue ?? 0);
  const [dayPeriodToFocus, setDayPeriodToFocus] = useState(dayPeriod ?? 0);
  const totalHours = timeFormat === "12" ? 12 : 24;

  const onPickerSelect = (value: number, type: "hour" | "minute" | "second" | "dayPeriod") => {
    const hourVal = type === "hour" ? value : (hourValue ?? (timeFormat === "12" ? 1 : 0));
    const minuteVal = type === "minute" ? value : (minuteValue ?? 0);
    const secondVal = type === "second" ? value : (secondValue ?? 0);
    const dayPeriodVal = type === "dayPeriod" ? value : (dayPeriod ?? 0);

    setDayPeriodToFocus(dayPeriodVal);
    setSecondToFocus(secondVal);
    setMinuteToFocus(minuteVal);
    setHourToFocus(hourVal);
    onPickTime(hourVal, minuteVal, secondVal, dayPeriodVal);
  };

  useEffect(() => {
    if (dayPeriodToFocus !== undefined && id) {
      document.getElementById(`${id}-dayPeriod-${dayPeriodToFocus}`)?.focus();
    }
  }, [dayPeriodToFocus, id]);
  useEffect(() => {
    if (secondToFocus !== undefined && id) {
      document.getElementById(`${id}-second-${secondToFocus}`)?.focus();
    }
  }, [secondToFocus, id]);
  useEffect(() => {
    if (minuteToFocus !== undefined && id) {
      document.getElementById(`${id}-minute-${minuteToFocus}`)?.focus();
    }
  }, [minuteToFocus, id]);
  useEffect(() => {
    if (hourToFocus !== undefined && id) {
      document.getElementById(`${id}-hour-${hourToFocus}`)?.focus();
    }
  }, [hourToFocus, id]);

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
          onPickerSelect(value, "hour");
        }}
        onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
          handleColumnKeyDown(event, "hour", value, totalHours, setHourToFocus, (value) =>
            onPickerSelect(value, "hour")
          )
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
          onPickerSelect(value, "minute");
        }}
        onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
          handleColumnKeyDown(
            event,
            "minute",
            value,
            60,
            setMinuteToFocus,
            (value) => onPickerSelect(value, "minute"),
            STEP
          )
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
            onPickerSelect(value, "second");
          }}
          onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
            handleColumnKeyDown(
              event,
              "second",
              value,
              60,
              setSecondToFocus,
              (value) => onPickerSelect(value, "second"),
              STEP
            )
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
            onPickerSelect(value, "dayPeriod");
          }}
          onKeyboardEvent={(event: React.KeyboardEvent, value: number) =>
            handleColumnKeyDown(event, "dayPeriod", value, 2, setDayPeriodToFocus, (value) =>
              onPickerSelect(value, "dayPeriod")
            )
          }
        />
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
