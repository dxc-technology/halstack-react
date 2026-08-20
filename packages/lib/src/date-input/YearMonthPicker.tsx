import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { HalstackLanguageContext } from "../HalstackContext";
import DateUnitPicker from "./DateUnitPicker";
import { getMonthPickerItems, getYearPickerItems } from "./utils";
import { YearMonthPickerProps } from "./types";

const YearMonthPickersContainer = styled.div`
  display: flex;
  width: 292px;
  justify-content: center;
`;

export const YearMonthPicker = ({ isYearFirst, selectedDate, today, onYearMonthComplete }: YearMonthPickerProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(selectedDate?.get("year") || null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(selectedDate?.get("month") || null);
  const languageContext = useContext(HalstackLanguageContext);

  const yearItems = getYearPickerItems();
  const monthItems = getMonthPickerItems(languageContext.labels.calendar.months);

  const handleOnYearSelect = (year: number) => {
    const newDate = selectedDate.set("year", year);
    const finalDate = selectedMonth != null ? newDate.set("month", selectedMonth) : newDate;
    setSelectedYear(year);
    onYearMonthComplete(finalDate);
  };

  const handleOnMonthSelect = (month: number) => {
    const newDate = selectedDate.set("month", month);
    const finalDate = selectedYear != null ? newDate.set("year", selectedYear) : newDate;
    setSelectedMonth(month);
    onYearMonthComplete(finalDate);
  };

  const yearPicker = (
    <DateUnitPicker
      selectedDate={selectedDate}
      onDateUnitSelect={handleOnYearSelect}
      today={today}
      items={yearItems}
      unit="year"
    />
  );

  const monthPicker = (
    <DateUnitPicker
      selectedDate={selectedDate}
      onDateUnitSelect={handleOnMonthSelect}
      today={today}
      items={monthItems}
      unit="month"
    />
  );

  return (
    <YearMonthPickersContainer>
      {isYearFirst ? (
        <>
          {yearPicker}
          {monthPicker}
        </>
      ) : (
        <>
          {monthPicker}
          {yearPicker}
        </>
      )}
    </YearMonthPickersContainer>
  );
};
