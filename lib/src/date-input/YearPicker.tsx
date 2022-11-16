import React from "react";
import styled from "styled-components";
import { SelectablePropsType, YearPickerPropsType } from "./types";

const getYearsArray = () => {
  const yearList = [];
  for (let i = 1899; i <= 2100; i++) {
    yearList.push(i);
  }
  return yearList;
};
const yearList = getYearsArray();

const YearPicker = ({ onYearSelect, selectedDate }: YearPickerPropsType): JSX.Element => {
  return (
    <YearPickerContainer>
      {yearList.map((year) => (
        <YearPickerButton
          aria-label={year}
          key={year}
          selected={selectedDate.get("year") === year}
          autoFocus={selectedDate.get("year") === year}
          onClick={() => {
            onYearSelect(year);
          }}
        >
          <YearPickerButtonLabel selected={selectedDate.get("year") === year}>{year}</YearPickerButtonLabel>
        </YearPickerButton>
      ))}
    </YearPickerContainer>
  );
};

const YearPickerContainer = styled.div`
  width: ${(props) => props.theme.dateInput.pickerWidth};
  height: ${(props) => props.theme.dateInput.pickerHeight};
  background: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  border-radius: 4px;
  overflow-y: scroll;
`;

const YearPickerButton = styled.button<SelectablePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
  width: 100%;
  cursor: pointer;

  &:focus {
    color: ${(props) => props.theme.dateInput.pickerHoverDateFontColor};
    font-weight: 500;
    ${(props) =>
      props.selected
        ? `span {background-color: ${props.theme.dateInput.pickerHoverDateBackgroundColor}; color: ${props.theme.dateInput.pickerHoverDateFontColor};}`
        : `background-color: ${props.theme.dateInput.pickerHoverDateBackgroundColor};`}

    outline: none;
  }
`;

const YearPickerButtonLabel = styled.span<SelectablePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 87px;
  height: 40px;
  ${(props) =>
    props.selected
      ? `
    color: ${props.theme.dateInput.pickerSelectedDateColor};
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    font-weight: 500;
    border-radius: 20px;
    background-color: ${props.theme.dateInput.pickerSelectedDateBackgroundColor};`
      : `color: ${props.theme.dateInput.pickerYearFontColor};`}
`;

export default React.memo(YearPicker);
