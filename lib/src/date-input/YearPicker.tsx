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

const YearPicker = ({ onYearSelect, selectedDate, today }: YearPickerPropsType): JSX.Element => {
  const [yearToFocus, setYearToFocus] = useState(selectedDate ? selectedDate.get("year") : dayjs().get("year"));

  useEffect(() => {
    const yearToFocusEl = document.getElementById(`year_${yearToFocus}`);
    yearToFocusEl?.scrollIntoView?.({ block: "nearest", inline: "start" });
    yearToFocusEl?.focus();
  }, [yearToFocus]);

  const handleDayKeyboardEvent = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setYearToFocus((prev) => (prev > 1899 ? prev - 1 : prev));
        break;
      case "ArrowDown":
        setYearToFocus((prev) => (prev < 2100 ? prev + 1 : prev));
        break;
    }
  };

  return (
    <YearPickerContainer>
      {yearList.map((year) => (
        <YearPickerButton
          aria-label={year}
          key={year}
          selected={selectedDate?.get("year") === year}
          aria-selected={selectedDate?.get("year") === year}
          tabIndex={yearToFocus === year ? 0 : -1}
          isCurrentYear={today.get("year") === year}
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  overflow-y: scroll;
  width: ${(props) => props.theme.dateInput.pickerWidth};
  height: 312px;
  padding: 2px 8px 8px 8px;
`;

type YearPickerButtonPropsType = { selected: boolean; isCurrentYear: boolean };

const YearPickerButton = styled.button<YearPickerButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-height: 40px;
  font-size: 0.875rem;
  line-height: 21px;
  color: ${(props) => props.theme.dateInput.pickerYearFontColor};
  background-color: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `font-size: 1.5rem;
         line-height: 36px;
         color: ${props.theme.dateInput.pickerSelectedDateColor} !important;
         background-color: ${props.theme.dateInput.pickerSelectedDateBackgroundColor} !important;`
      : props.isCurrentYear
      ? `border: 1px solid #cbacec; 
         color: #5f249f;`
      : ``}

  &:hover, &:focus, &:active {
    font-size: 1.5rem;
    line-height: 36px;
  }
  &:hover {
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
    background-color: ${(props) => props.theme.dateInput.pickerHoverDateBackgroundColor};
  }
  &:focus {
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
    outline: ${(props) => props.theme.dateInput.pickerFocusColor} solid 2px;
  }
  &:active {
    color: #ffffff;
    background-color: #4b1c7d !important;
  }
`;

export default React.memo(YearPicker);
