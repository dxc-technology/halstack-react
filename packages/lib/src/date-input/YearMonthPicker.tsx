import { useContext, useState } from "react";
import { Dayjs } from "dayjs";
import styled from "@emotion/styled";
import { HalstackLanguageContext } from "../HalstackContext";
import DateUnitPicker from "./DateUnitPicker";
import { getPickerItems } from "./utils";

const YearMonthPickersContainer = styled.div`
  display: flex;
  width: 292px;
  justify-content: center;
`;

interface YearMonthPickerProps {
  isYearFirst: boolean;
  innerDate: Dayjs;
  today: Dayjs;
  onYearMonthComplete: (newDate: Dayjs) => void;
}

export const YearMonthPicker = ({ isYearFirst, innerDate, today, onYearMonthComplete }: YearMonthPickerProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const languageContext = useContext(HalstackLanguageContext);
  const translatedLabels = languageContext.labels;
  const yearItems = getPickerItems(false, translatedLabels);
  const monthItems = getPickerItems(true, translatedLabels);

  const handleOnYearSelect = (year: number) => {
    const newDate = innerDate.set("year", year);
    const finalDate = selectedMonth != null ? newDate.set("month", selectedMonth) : newDate;
    setSelectedYear(year);
    onYearMonthComplete(finalDate);
  };

  const handleOnMonthSelect = (month: number) => {
    const newDate = innerDate.set("month", month);
    const finalDate = selectedYear != null ? newDate.set("year", selectedYear) : newDate;
    setSelectedMonth(month);
    onYearMonthComplete(finalDate);
  };

  const yearPickerSelectedDate = selectedYear != null ? innerDate.set("year", selectedYear) : innerDate;
  const monthPickerSelectedDate = selectedMonth != null ? innerDate.set("month", selectedMonth) : innerDate;

  const yearPicker = (
    <DateUnitPicker
      selectedDate={yearPickerSelectedDate}
      focusValue={innerDate.get("year")}
      onYearSelect={handleOnYearSelect}
      today={today}
      autoFocus={isYearFirst}
      items={yearItems}
    />
  );

  const monthPicker = (
    <DateUnitPicker
      selectedDate={monthPickerSelectedDate}
      focusValue={innerDate.get("month")}
      onYearSelect={handleOnMonthSelect}
      today={today}
      autoFocus={!isYearFirst}
      items={monthItems}
    />
  );

  return (
    <YearMonthPickersContainer>
      {isYearFirst ? yearPicker : monthPicker}
      {isYearFirst ? monthPicker : yearPicker}
    </YearMonthPickersContainer>
  );
};
