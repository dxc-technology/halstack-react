import dayjs from "dayjs";
import React from "react";
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
  const date = selectedDate?.isValid() ? selectedDate : dayjs();
  return (
    <YearPickerContainer>
      {yearList.map((year) => (
        <YearPickerButton
          aria-label={year}
          key={year}
          selected={selectedDate?.get("year") === year}
          autoFocus={date.get("year") === year}
          isCurrentYear={dayjs().get("year") === year}
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
  /* width: ${(props) => props.theme.dateInput.pickerWidth};
  height: ${(props) => props.theme.dateInput.pickerHeight}; */
  width: 268px;
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
  ${(props) => props.isCurrentYear && !props.selected && `border: 1px solid #CBACEC; color: #5F249F;`}
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
    background: #4b1c7d !important;
    color: #ffffff;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;
  }
`;

export default React.memo(YearPicker);
