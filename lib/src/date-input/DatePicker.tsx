import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import styled from "styled-components";
import { DatePickerPropsType } from "./types";
import Calendar from "./Calendar";
import YearPicker from "./YearPicker";
import useTranslatedLabels from "../useTranslatedLabels";
import { downCaret, leftCaret, rightCaret, upCaret } from "./Icons";
const today = dayjs();

const DxcDatePicker = ({ date, onDateSelect, id }: DatePickerPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date?.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const selectedDate = date?.isValid() ? date : null;
  const translatedLabels = useTranslatedLabels();

  const handleDateSelect = (date: Dayjs) => {
    setInnerDate(date);
    onDateSelect(date);
  };

  const handleOnYearSelect = (year) => {
    setInnerDate(innerDate.set("year", year));
    setContent("calendar");
  };

  const handleMonthChange = (date: Dayjs) => {
    setInnerDate(date);
  };

  return (
    <DatePicker id={id}>
      <PickerHeader>
        <HeaderButton
          aria-label={translatedLabels.calendar.previousMonthTitle}
          title={translatedLabels.calendar.previousMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") - 1))}
        >
          {leftCaret}
        </HeaderButton>
        <HeaderYearTrigger
          aria-live="polite"
          onClick={() => setContent((content) => (content === "yearPicker" ? "calendar" : "yearPicker"))}
        >
          <HeaderYearTriggerLabel>
            {translatedLabels.calendar.months[innerDate.get("month")]} {innerDate.format("YYYY")}
          </HeaderYearTriggerLabel>
          {content === "yearPicker" ? upCaret : downCaret}
        </HeaderYearTrigger>
        <HeaderButton
          aria-label={translatedLabels.calendar.nextMonthTitle}
          title={translatedLabels.calendar.nextMonthTitle}
          onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") + 1))}
        >
          {rightCaret}
        </HeaderButton>
      </PickerHeader>
      {content === "calendar" && (
        <Calendar
          innerDate={innerDate}
          selectedDate={selectedDate}
          onInnerDateChange={setInnerDate}
          onDaySelect={handleDateSelect}
          today={today}
        />
      )}
      {content === "yearPicker" && (
        <YearPicker selectedDate={selectedDate} onYearSelect={handleOnYearSelect} today={today} />
      )}
    </DatePicker>
  );
};

const DatePicker = styled.div`
  padding-top: 16px;
  background-color: ${(props) => props.theme.dateInput.pickerBackgroundColor};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: ${(props) => `${props.theme.dateInput.pickerBorderWidth} ${props.theme.dateInput.pickerBorderStyle}
      ${props.theme.dateInput.pickerBorderColor}`};
  border-radius: 4px;
  width: fit-content;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: ${(props) => props.theme.dateInput.pickerFontSize};
  color: ${(props) => props.theme.dateInput.pickerFontColor};
  font-weight: ${(props) => props.theme.dateInput.pickerFontWeight};
`;

const PickerHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0px;
  color: ${(props) => props.theme.dateInput.pickerHeaderFontColor};
  background-color: ${(props) => props.theme.dateInput.pickerHeaderBackgroundColor};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.dateInput.pickerHeaderHoverFontColor};
    background-color: ${(props) => props.theme.dateInput.pickerHeaderHoverBackgroundColor};
  }
  &:focus {
    outline: ${(props) => `${props.theme.dateInput.pickerFocusColor} solid
      ${props.theme.dateInput.pickerFocusWidth}`};
  }
  &:active {
    color: ${(props) => props.theme.dateInput.pickerActiveFontColor};
    background-color: ${(props) => props.theme.dateInput.pickerHeaderActiveBackgroundColor};
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

const HeaderYearTrigger = styled(HeaderButton)`
  gap: 8px;
  height: 40px;
  width: 172px;
`;

const HeaderYearTriggerLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.dateInput.pickerFontFamily};
  font-size: ${(props) => props.theme.dateInput.pickerHeaderFontSize};
`;

export default React.memo(DxcDatePicker);
