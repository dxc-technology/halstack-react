import dayjs from "dayjs";
import { useEffect, useId, useState, memo, KeyboardEvent } from "react";
import styled from "styled-components";
import { YearPickerPropsType } from "./types";

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

const YearPickerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  overflow-y: scroll;
  width: 292px;
  height: 312px;
  padding: 2px 8px 8px 8px;
`;

const YearPickerButton = styled.button<{
  selected: boolean;
  isCurrentYear: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-height: 40px;
  line-height: 21px;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: ${(props) => props.theme.dateInput.pickerFontSize};
  color: ${(props) => props.theme.dateInput.pickerFontColor};
  font-weight: ${(props) => props.theme.dateInput.pickerFontWeight};

  ${(props) =>
    props.selected
      ? `font-size: ${props.theme.dateInput.pickerInteractedYearFontSize};
         line-height: 36px;
         color: ${props.theme.dateInput.pickerSelectedFontColor} !important;
         background-color: ${props.theme.dateInput.pickerSelectedBackgroundColor} !important;`
      : props.isCurrentYear
        ? `border: 1px solid ${props.theme.dateInput.pickerCurrentDateBorderColor}; 
         color: ${props.theme.dateInput.pickerCurrentYearFontColor};`
        : ``}

  &:hover, &:focus, &:active {
    font-size: ${(props) => props.theme.dateInput.pickerInteractedYearFontSize};
    line-height: 36px;
  }
  &:hover {
    color: ${(props) => props.theme.dateInput.pickerHoverFontColor};
    background-color: ${(props) => props.theme.dateInput.pickerHoverBackgroundColor};
  }
  &:focus {
    color: ${(props) => props.theme.dateInput.pickerHoverFontColor};
    outline: ${(props) => `${props.theme.dateInput.pickerFocusColor} solid
      ${props.theme.dateInput.pickerFocusWidth}`};
  }
  &:active {
    color: ${(props) => props.theme.dateInput.pickerActiveFontColor};
    background-color: ${(props) => props.theme.dateInput.pickerActiveBackgroundColor} !important;
  }
`;

export default memo(YearPicker);
