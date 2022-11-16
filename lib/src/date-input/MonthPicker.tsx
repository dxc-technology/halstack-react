import React from "react";
import styled from "styled-components";
import { MonthPickerPropsType, SelectablePropsType } from "./types";
import useTranslatedLabels from "../useTranslatedLabels";

const MonthPicker = ({ onMonthSelect, selectedDate }: MonthPickerPropsType): JSX.Element => {
  const translatedLabels = useTranslatedLabels();
  const months = translatedLabels.calendar.monthsShort;

  return (
    <MonthPickerContainer>
      {months.map((month, index) => (
        <MonthPickerButton
          aria-label={month}
          key={month}
          selected={selectedDate.get("month") === index}
          autoFocus={selectedDate.get("month") === index}
          onClick={() => {
            onMonthSelect(index);
          }}
        >
          {month}
        </MonthPickerButton>
      ))}
    </MonthPickerContainer>
  );
};

const MonthPickerContainer = styled.div`
  width: ${(props) => props.theme.dateInput.pickerWidth};
  max-height: ${(props) => props.theme.dateInput.pickerHeight};
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  display: flex;
  padding: 18px 10px;
  justify-content: center;
  border-radius: 4px;
  flex-wrap: wrap;
`;

const MonthPickerButton = styled.button<SelectablePropsType>`
  width: 58px;
  margin: 2px 7px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  letter-spacing: 0.46px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedDateBackgroundColor : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.dateInput.pickerSelectedDateColor : props.theme.dateInput.pickerDayFontColor};
  &:hover {
    background-color: ${(props) => props.theme.dateInput.pickerHoverDateBackgroundColor};
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
  }
  &:focus {
    outline: ${(props) => props.theme.dateInput.pickerFocusColor + " solid 2px"};
  }
`;

export default React.memo(MonthPicker);
