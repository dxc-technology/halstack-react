import dayjs from "dayjs";
import { KeyboardEvent, useEffect, useId, useState } from "react";
import styled from "@emotion/styled";
import { DateUnitPickerPropsType } from "./types";
import scrollbarStyles from "../styles/scroll";

const PickerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
  align-items: center;
  overflow-y: scroll;
  width: 50%;
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

const DateUnitPicker = ({
  onDateUnitSelect,
  selectedDate,
  today,
  items,
  unit = "year",
}: DateUnitPickerPropsType): JSX.Element => {
  const selectedValue = selectedDate?.isValid() && selectedDate ? selectedDate.get(unit) : undefined;
  const currentValue = today?.isValid() && today ? today.get(unit) : dayjs().get(unit);
  const ariaLabel = `${unit.charAt(0).toUpperCase() + unit.slice(1)} Picker`;

  const id = useId();
  const [itemToFocus, setItemToFocus] = useState(selectedDate ? selectedDate.get(unit) : dayjs().get(unit));

  useEffect(() => {
    const itemToFocusEl = document.getElementById(`${id}_${unit}_${itemToFocus}`);
    itemToFocusEl?.scrollIntoView?.({ block: "center", inline: "center" });
    itemToFocusEl?.focus();
  }, [itemToFocus, id, unit]);

  const handleKeyboardEvent = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowUp":
        setItemToFocus((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "ArrowDown":
        setItemToFocus((prev) => {
          const lastValue = items[items.length - 1]?.value;
          return lastValue !== undefined && prev < lastValue ? prev + 1 : prev;
        });
        break;
      default:
        break;
    }
  };

  return (
    <PickerContainer role="listbox" aria-label={ariaLabel}>
      {items.map((item) => {
        const isSelected = item.value === selectedValue;
        return (
          <PickerButton
            aria-label={item.label}
            key={item.value}
            selected={isSelected}
            aria-selected={isSelected}
            tabIndex={itemToFocus === item.value ? 0 : -1}
            isCurrent={item.value === currentValue}
            onKeyDown={(event) => handleKeyboardEvent(event)}
            id={`${id}_${unit}_${item.value}`}
            onClick={() => {
              onDateUnitSelect(item.value);
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
