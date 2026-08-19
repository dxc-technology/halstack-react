import { Dispatch, SetStateAction } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateType, PickerItem } from "./types";

const INVIS_CHARS = /[\u200E\u200F\u061C]/g;

export const getValueForPicker = (value: string, format: string) => dayjs(value, format.toUpperCase(), true);

export const validateLocale = (locale: string): boolean => {
  let valid = false;
  try {
    Intl.DateTimeFormat.supportedLocalesOf(locale);
    valid = true;
  } catch {
    valid = false;
  }
  return valid;
};

export const getDate = (
  value: string,
  format: string,
  lastValidYear: number | null,
  setLastValidYear: Dispatch<SetStateAction<number | null>>
) => {
  if ((value || value === "") && format.toUpperCase().includes("YYYY")) {
    return getValueForPicker(value, format);
  }
  let newDate = getValueForPicker(value, format);
  if (lastValidYear == null) {
    if (+newDate.format("YY") < 68) {
      setLastValidYear(2000 + +newDate.format("YY"));
      newDate = newDate.set("year", 2000 + +newDate.format("YY"));
    } else {
      setLastValidYear(1900 + +newDate.format("YY"));
      newDate = newDate.set("year", 1900 + +newDate.format("YY"));
    }
  } else {
    newDate = newDate.set("year", (lastValidYear <= 1999 ? 1900 : 2000) + +newDate.format("YY"));
  }
  return newDate;
};

export const getFormatFromLocale = (locale: string): string => {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(new Date(1995, 11, 3));

  const dateValues: Record<string, string> = {
    day: "dd",
    month: "MM",
    year: "yyyy",
  };

  // if dateValues[part.type] is undefined, it means that the part is a literal (like a separator), so we return the part.value without invisible characters
  return parts.map((part) => dateValues[part.type] ?? part.value.replace(INVIS_CHARS, "")).join("");
};

export const getCalendarDays = (innerDate: Dayjs, firstDayOfWeek: number) => {
  const monthDayCells: DateType[] = [];
  const lastMonthNumberOfDays = innerDate.set("month", innerDate.get("month") - 1).endOf("month");
  const firstDayOfMonth = (innerDate.startOf("month").day() - firstDayOfWeek + 7) % 7;
  const daysInMonth = firstDayOfMonth + innerDate.daysInMonth();

  for (let i = 0; i < 42; i++) {
    if (i < firstDayOfMonth) {
      // previous month days
      monthDayCells.push({
        day: lastMonthNumberOfDays.get("date") - firstDayOfMonth + i + 1,
        month: innerDate.get("month") ? innerDate.get("month") - 1 : 11,
        year: innerDate.set("month", innerDate.get("month") - 1).get("year"),
      });
    } else if (i < daysInMonth) {
      // this month days
      monthDayCells.push({
        day: i - firstDayOfMonth + 1,
        month: innerDate.get("month"),
        year: innerDate.get("year"),
      });
    } else {
      // next month days
      monthDayCells.push({
        day: i - daysInMonth + 1,
        month: innerDate.get("month") === 11 ? 0 : innerDate.get("month") + 1,
        year: innerDate.set("month", innerDate.get("month") + 1).get("year"),
      });
    }
  }
  return monthDayCells;
};

export const getDateToFocus = (selectedDate: Dayjs, innerDate: Dayjs, today: Dayjs) =>
  selectedDate?.get("month") === innerDate.get("month") && selectedDate?.get("year") === innerDate.get("year")
    ? selectedDate
    : today.get("month") === innerDate.get("month") && today.get("year") === innerDate.get("year")
      ? today
      : innerDate.set("date", 1);

export const isDaySelected = (date: DateType, selectedDate: Dayjs) =>
  selectedDate?.get("month") === date.month &&
  selectedDate?.get("year") === date.year &&
  selectedDate?.get("date") === date.day;

export const divideDaysIntoWeeks = (data: DateType[], weekSize: number) =>
  Array.from({ length: Math.ceil(data.length / weekSize) }, (_, rowIndex) =>
    data.slice(rowIndex * weekSize, (rowIndex + 1) * weekSize)
  );

export const getMonthPickerItems = (months: string[]): PickerItem[] =>
  months.map((month: string, index: number) => ({
    value: index,
    label: month,
  }));

export const getYearPickerItems = (): PickerItem[] => {
  const yearList: number[] = [];
  for (let i = 1899; i <= 2100; i++) {
    yearList.push(i);
  }
  return yearList.map((year: number) => ({
    value: year,
    label: year.toString(),
  }));
};

export const calculateIsYearFirst = (localeFormat: string): boolean => {
  const lower = localeFormat.toLowerCase();
  const yearIndices = [lower.indexOf("yyyy"), lower.indexOf("yy")].filter((i) => i !== -1);
  const monthIndices = [lower.indexOf("m"), lower.indexOf("mm")].filter((i) => i !== -1);
  return Math.min(...yearIndices) < Math.min(...monthIndices);
};
