import dayjs from "dayjs";
import { useEffect, useId, useState, memo, KeyboardEvent } from "react";
import styled from "@emotion/styled";
import { YearPickerPropsType } from "./types";

const YearPickerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  align-items: center;
  overflow-y: scroll;
  width: 292px;
  height: 312px;
  box-shadow: var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread)
    var(--shadow-light);
`;

const YearPickerButton = styled.button<{
  selected: boolean;
  isCurrentYear: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-height: var(--height-m);
  height: var(--height-m);
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius-xl);
  cursor: pointer;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  color: var(--color-fg-neutral-dark);
  font-weight: var(--typography-label-regular);

  ${(props) =>
    props.selected
      ? `font-size: var(--typography-label-xl);
         color: var(--color-fg-neutral-bright) !important;
         background-color: var(--color-bg-primary-strong) !important;`
      : props.isCurrentYear
        ? `border: var(--border-width-s) var(--border-style-default) var(--border-color-primary-lighter); 
         color: var(--color-fg-primary-strong);`
        : ``}

  &:hover, &:focus, &:active {
    font-size: var(--typography-label-xl);
  }
  &:hover {
    background-color: var(--color-bg-primary-light);
    color: var(--color-fg-neutral-dark);
  }
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
  &:active {
    color: var(--color-fg-neutral-bright);
    background-color: var(--color-bg-primary-stronger);
  }
`;

const getYearsArray = () => {
  const yearList = [];
  for (let i = 1899; i <= 2100; i++) {
    yearList.push(i);
  }
  return yearList;
};

const yearList = getYearsArray();

const YearPicker = ({ onYearSelect, selectedDate, today }: YearPickerPropsType): JSX.Element => {
  const id = useId();
  const [yearToFocus, setYearToFocus] = useState(selectedDate ? selectedDate.get("year") : dayjs().get("year"));

  useEffect(() => {
    const yearToFocusEl = document.getElementById(`${id}_year_${yearToFocus}`);
    yearToFocusEl?.scrollIntoView?.({ block: "nearest", inline: "start" });
    yearToFocusEl?.focus();
  }, [yearToFocus]);

  const handleDayKeyboardEvent = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowUp":
        setYearToFocus((prev) => (prev > 1899 ? prev - 1 : prev));
        break;
      case "ArrowDown":
        setYearToFocus((prev) => (prev < 2100 ? prev + 1 : prev));
        break;
      default:
        break;
    }
  };

  return (
    <YearPickerContainer role="listbox" aria-label="Year Picker">
      {yearList.map((year) => (
        <YearPickerButton
          aria-label={year.toString()}
          key={year}
          selected={selectedDate?.get("year") === year}
          aria-selected={selectedDate?.get("year") === year}
          tabIndex={yearToFocus === year ? 0 : -1}
          isCurrentYear={today.get("year") === year}
          onKeyDown={(event) => handleDayKeyboardEvent(event)}
          id={`${id}_year_${year}`}
          onClick={() => {
            onYearSelect(year);
          }}
          role="option"
        >
          {year}
        </YearPickerButton>
      ))}
    </YearPickerContainer>
  );
};

export default memo(YearPicker);
