import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
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

const YearPicker = ({ onYearSelect, selectedDate }: YearPickerPropsType): JSX.Element => {
  const [yearToFocus, setYearToFocus] = useState(selectedDate ? selectedDate.get("year") : dayjs().get("year"));
  useEffect(() => {
    document.getElementById(`year_${yearToFocus}`)?.focus();
  }, [yearToFocus]);

  const handleDayKeyboardEvent = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setYearToFocus((prev) => {
          if (prev > 1899) {
            return prev - 1;
          } else {
            return prev;
          }
        });
        break;
      case "ArrowDown":
        setYearToFocus((prev) => {
          if (prev < 2100) {
            return prev + 1;
          } else {
            return prev;
          }
        });
        break;
    }
  };

  const date = selectedDate?.isValid() ? selectedDate : dayjs();
  return (
    <YearPickerContainer>
      {yearList.map((year) => (
        <YearPickerButton
          aria-label={year}
          key={year}
          selected={selectedDate?.get("year") === year}
          aria-selected={selectedDate?.get("year") === year}
          autoFocus={date.get("year") === year}
          tabIndex={yearToFocus === year ? 0 : -1}
          isCurrentYear={dayjs().get("year") === year}
          onKeyDown={(event) => handleDayKeyboardEvent(event)}
          id={`year_${year}`}
          onClick={() => {
            onYearSelect(year);
          }}
        >
          {year}
        </YearPickerButton>
      ))}
    </YearPickerContainer>
  );
};

const YearPickerContainer = styled.div`
  width: ${(props) => props.theme.dateInput.pickerWidth};
  height: 288px;
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 8px 8px 8px;
  border-radius: 4px;
  overflow-y: scroll;
`;

type YearPickerButtonPropsType = { selected: boolean; isCurrentYear: boolean };

const YearPickerButton = styled.button<YearPickerButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  width: 80px;
  min-height: 40px;
  cursor: pointer;
  border-radius: 50px;
  outline-offset: -2px;
  color: ${(props) => props.theme.dateInput.pickerYearFontColor};
  ${(props) =>
    props.isCurrentYear &&
    !props.selected &&
    `border: 1px solid ${props.theme.dateInput.pickerCurrentYearBorderColor}; color: ${props.theme.dateInput.pickerCurrentYearFontColor};`}
  ${(props) =>
    props.selected
      ? `background-color: ${props.theme.dateInput.pickerSelectedDateBackgroundColor} !important;
      color: ${props.theme.dateInput.pickerSelectedDateColor} !important;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 33px;`
      : `transparent;`}
  &:hover {
    background: ${(props) => props.theme.dateInput.pickerHoverDateBackgroundColor};
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;
  }
  &:focus {
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
  &:active {
    background: ${(props) => props.theme.dateInput.pickerActiveDateBackgroundColor} !important;
    color: ${(props) => props.theme.dateInput.pickerActiveDateFontColor};
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;
  }
`;

export default React.memo(YearPicker);
