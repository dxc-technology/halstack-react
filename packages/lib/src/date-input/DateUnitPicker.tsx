import dayjs from "dayjs";
import { KeyboardEvent, useContext, useEffect, useId, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { DateUnitPickerPropsType } from "./types";
import scrollbarStyles from "../styles/scroll";
import { HalstackLanguageContext } from "../HalstackContext";

const PickerContainer = styled.div<{ isMonth?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  align-items: center;
  overflow-y: scroll;
  width: ${({ isMonth }) => (isMonth ? "60%" : "40%")};
  max-width: 292px;
  height: 312px;
  box-shadow: var(--shadow-200);
  ${scrollbarStyles}
`;

const PickerButton = styled.button<{
  selected: boolean;
  isCurrent: boolean;
}>`
  min-width: fit-content;
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
      : props.isCurrent
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

const DateUnitPicker = ({
  onYearSelect,
  selectedDate,
  today,
  focusValue,
  isMonth,
  autoFocus = true,
}: DateUnitPickerPropsType): JSX.Element => {
  const translatedLabels = useContext(HalstackLanguageContext).labels;
  const items = useMemo(
    () =>
      isMonth
        ? translatedLabels.calendar.months.map((month, index) => ({
            value: index,
            label: month,
          }))
        : yearList.map((year) => ({
            value: year,
            label: year.toString(),
          })),
    [isMonth, translatedLabels]
  );
  const selectedValue = selectedDate?.isValid() ? selectedDate.get(isMonth ? "month" : "year") : undefined;
  const currentValue = today?.isValid()
    ? today.get(isMonth ? "month" : "year")
    : dayjs().get(isMonth ? "month" : "year");
  const ariaLabel = isMonth ? "Month Picker" : "Year Picker";
  const idPrefix = isMonth ? "month" : "year";

  const id = useId();
  const focusIndex = focusValue == null ? -1 : items.findIndex((item) => item.value === focusValue);
  const currentIndex = items.findIndex((item) => item.value === currentValue);
  const initialFocusIndex = focusIndex >= 0 ? focusIndex : currentIndex >= 0 ? currentIndex : 0;
  const [itemToFocus, setItemToFocus] = useState(initialFocusIndex);

  useEffect(() => {
    const itemToFocusEl = document.getElementById(`${id}_${idPrefix}_${itemToFocus}`);
    itemToFocusEl?.scrollIntoView?.({ block: "center", inline: "center" });
    if (autoFocus) {
      itemToFocusEl?.focus();
    }
  }, [itemToFocus, id, idPrefix]);

  const handleKeyboardEvent = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowUp":
        setItemToFocus((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "ArrowDown":
        setItemToFocus((prev) => (prev < items.length - 1 ? prev + 1 : prev));
        break;
      default:
        break;
    }
  };

  return (
    <PickerContainer role="listbox" aria-label={ariaLabel} isMonth={isMonth}>
      {items.map((item, index) => {
        const isSelected = item.value === selectedValue;
        return (
          <PickerButton
            aria-label={item.label}
            key={item.value}
            selected={isSelected}
            aria-selected={isSelected}
            tabIndex={itemToFocus === index ? 0 : -1}
            isCurrent={item.value === currentValue}
            onKeyDown={(event) => handleKeyboardEvent(event)}
            id={`${id}_${idPrefix}_${index}`}
            onClick={() => {
              onYearSelect(item.value);
            }}
            role="option"
            type="button"
          >
            {item.label}
          </PickerButton>
        );
      })}
    </PickerContainer>
  );
};

export default DateUnitPicker;
