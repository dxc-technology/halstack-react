import styled from "@emotion/styled";
import { TimePickerPropsType } from "./types";
import DxcContainer from "../container/Container";
import DxcFlex from "../flex/Flex";
import { useEffect, useState } from "react";

// Array to be used in seconds and minutes.
const STEP = 5;
const ARRAY_OF_60 = Array.from({ length: 60 / STEP }, (_, index) => index * STEP);

const TimePickerContainer = styled.div`
  display: flex;
  height: 200px;
  gap: var(--spacing-gap-m);
`;

const TimePickerOption = styled.li<{
  selected: boolean;
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
  color: ${(props) => (props.selected ? "var(--color-fg-neutral-bright);" : "var(--color-fg-neutral-dark);")};

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: calc(var(--border-width-m) * -1);
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

  // Function that returns the hour value based on the index and the format.
  const returnHourBasedOnIndex = (index: number) => (index + 1 === 24 ? 0 : index + 1);

  return (
    <TimePickerContainer role="listbox" aria-label="Time picker">
      <DxcContainer maxHeight="100%" overflow="auto">
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          {Array.from({ length: totalHours }, (_, index) => (
            <TimePickerOption
              role="option"
              key={`hour-${returnHourBasedOnIndex(index)}`}
              id={`${id}-hour-${returnHourBasedOnIndex(index)}`}
              selected={hourValue === returnHourBasedOnIndex(index)}
              aria-selected={hourValue === returnHourBasedOnIndex(index)}
              autoFocus={hourToFocus === returnHourBasedOnIndex(index)}
              tabIndex={hourToFocus === returnHourBasedOnIndex(index) ? tabIndex || 0 : -1}
              onClick={() => {
                onSelecthours(returnHourBasedOnIndex(index));
                setHourToFocus(returnHourBasedOnIndex(index));
              }}
              onKeyDown={(event) =>
                handleColumnKeyDown(
                  event,
                  "hour",
                  returnHourBasedOnIndex(index),
                  totalHours,
                  setHourToFocus,
                  onSelecthours
                )
              }
            >
              {index + 1 === 24 ? "00" : index + 1 < 10 ? `0${index + 1}` : index + 1}
            </TimePickerOption>
          ))}
        </DxcFlex>
      </DxcContainer>
      <DxcContainer maxHeight="100%" overflow="auto">
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          {ARRAY_OF_60.map((index) => (
            <TimePickerOption
              role="option"
              key={index}
              id={`${id}-minute-${index}`}
              selected={minuteValue === index}
              aria-selected={minuteValue === index}
              autoFocus={minuteToFocus === index}
              tabIndex={minuteToFocus === index ? tabIndex || 0 : -1}
              onClick={() => {
                onSelectMinutes(index);
                setMinuteToFocus(index);
              }}
              onKeyDown={(event) =>
                handleColumnKeyDown(event, "minute", index, 60, setMinuteToFocus, onSelectMinutes, STEP)
              }
            >
              {index < 10 ? `0${index}` : index}
            </TimePickerOption>
          ))}
        </DxcFlex>
      </DxcContainer>
      {showSeconds && (
        <DxcContainer maxHeight="100%" overflow="auto">
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
            {ARRAY_OF_60.map((index) => (
              <TimePickerOption
                role="option"
                key={index}
                id={`${id}-second-${index}`}
                selected={secondValue === index}
                aria-selected={secondValue === index}
                autoFocus={secondToFocus === index}
                tabIndex={secondToFocus === index ? tabIndex || 0 : -1}
                onClick={() => {
                  if (typeof onSelectSeconds === "function") {
                    onSelectSeconds(index);
                    setSecondToFocus(index);
                  }
                }}
                onKeyDown={(event) =>
                  handleColumnKeyDown(event, "second", index, 60, setSecondToFocus, onSelectSeconds, STEP)
                }
              >
                {index < 10 ? `0${index}` : index}
              </TimePickerOption>
            ))}
          </DxcFlex>
        </DxcContainer>
      )}
      {timeFormat === "12" && (
        <DxcContainer maxHeight="100%" overflow="auto">
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
            {["AM", "PM"].map((period) => (
              <TimePickerOption
                role="option"
                key={period}
                id={`${id}-dayPeriod-${period === "AM" ? 0 : 1}`}
                selected={dayPeriod === (period === "AM" ? 0 : 1)}
                aria-selected={dayPeriod === (period === "AM" ? 0 : 1)}
                autoFocus={dayPeriodToFocus === (period === "AM" ? 0 : 1)}
                tabIndex={dayPeriodToFocus === (period === "AM" ? 0 : 1) ? tabIndex || 0 : -1}
                onClick={() => {
                  if (typeof onSelectDayPeriod === "function") {
                    onSelectDayPeriod(period === "AM" ? 0 : 1);
                    setDayPeriodToFocus(period === "AM" ? 0 : 1);
                  }
                }}
                onKeyDown={(event) =>
                  handleColumnKeyDown(
                    event,
                    "dayPeriod",
                    period === "AM" ? 0 : 1,
                    2,
                    setDayPeriodToFocus,
                    onSelectDayPeriod
                  )
                }
              >
                {period}
              </TimePickerOption>
            ))}
          </DxcFlex>
        </DxcContainer>
      )}
    </TimePickerContainer>
  );
};

export default TimePicker;
