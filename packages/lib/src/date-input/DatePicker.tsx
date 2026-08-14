import { memo, useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "@emotion/styled";
import { DatePickerPropsType } from "./types";
import Calendar from "./Calendar";
import DateUnitPicker from "./DateUnitPicker";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import { HalstackLanguageContext } from "../HalstackContext";
import { getFormatFromLocale, validateLocale } from "./utils";

const DatePickerContainer = styled.div`
  padding: var(--spacing-padding-m) var(--spacing-padding-xs) var(--spacing-padding-xs) var(--spacing-padding-xs);
  background-color: var(--color-bg-neutral-lightest);
  box-shadow: var(--shadow-200);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-medium);
  border-radius: var(--border-radius-s);
  width: fit-content;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  color: var(--color-fg-neutral-dark);
  font-weight: var(--typography-label-regular);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xxs);
`;

const PickerHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-m);
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: var(--height-s);
  padding: 0px;
  color: var(--color-fg-neutral-dark);
  background-color: var(--color-bg-neutral-lightest);
  border-radius: var(--border-radius-s);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-primary-light);
  }
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
  &:active {
    color: var(--color-fg-neutral-bright);
    background-color: var(--color-bg-primary-stronger);
  }

  span::before {
    font-size: var(--height-s);
  }
`;

const HeaderYearTrigger = styled(HeaderButton)`
  gap: var(--spacing-gap-s);
  padding: 0px var(--spacing-padding-xs) 0px var(--spacing-padding-m);
  height: var(--height-m);
  width: 172px;
  span::before {
    font-size: var(--height-xxs);
  }
`;

const HeaderYearTriggerLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--typography-label-m);
`;

const YearMonthPickersContainer = styled.div`
  display: flex;
  width: 292px;
  justify-content: center;
`;

const today = dayjs();

const DatePicker = ({ date, onDateSelect, id }: DatePickerPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date?.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const selectedDate = date?.isValid() ? date : dayjs(null);
  const languageContext = useContext(HalstackLanguageContext);
  const translatedLabels = languageContext.labels;
  const localeTag = languageContext.locale;
  const localeFormat = localeTag && validateLocale(localeTag) ? getFormatFromLocale(localeTag) : "MM/dd/yyyy";
  const isYearFirst = localeFormat.indexOf("yyyy") < localeFormat.indexOf("MM");

  const handleDateSelect = (chosenDate: Dayjs) => {
    setInnerDate(chosenDate);
    onDateSelect(chosenDate);
  };

  const closeYearMonthPickerIfCompleted = (year: number | null, month: number | null) => {
    if (year != null && month != null) {
      setInnerDate((prevDate) => prevDate.set("year", year).set("month", month));
      setContent("calendar");
    }
  };

  const handleOnYearSelect = (year: number) => {
    setInnerDate(innerDate.set("year", year));
    closeYearMonthPickerIfCompleted(year, content === "yearPickerMonthSelected" ? innerDate.get("month") : null);
    if (content === "yearPicker") {
      setContent("yearPickerYearSelected");
    }
  };

  const handleOnMonthSelect = (month: number) => {
    setInnerDate(innerDate.set("month", month));
    closeYearMonthPickerIfCompleted(content === "yearPickerYearSelected" ? innerDate.get("year") : null, month);
    if (content === "yearPicker") {
      setContent("yearPickerMonthSelected");
    }
  };

  const handleMonthChange = (chosenDate: Dayjs) => {
    setInnerDate(chosenDate);
  };

  const yearPickerSelectedDate =
    content === "yearPicker" || content === "yearPickerMonthSelected" ? dayjs(null) : innerDate;
  const monthPickerSelectedDate =
    content === "yearPicker" || content === "yearPickerYearSelected" ? dayjs(null) : innerDate;

  const yearPicker = (
    <DateUnitPicker
      selectedDate={yearPickerSelectedDate}
      focusValue={innerDate.get("year")}
      onYearSelect={handleOnYearSelect}
      today={today}
      autoFocus={content === "yearPicker" && isYearFirst}
    />
  );

  const monthPicker = (
    <DateUnitPicker
      selectedDate={monthPickerSelectedDate}
      focusValue={innerDate.get("month")}
      onYearSelect={handleOnMonthSelect}
      today={today}
      isMonth
      autoFocus={content === "yearPicker" && !isYearFirst}
    />
  );

  return (
    <DatePickerContainer id={id}>
      <PickerHeader>
        <Tooltip label={translatedLabels.calendar.previousMonthTitle}>
          <HeaderButton
            aria-label={translatedLabels.calendar.previousMonthTitle}
            onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") - 1))}
            type="button"
          >
            <DxcIcon icon="keyboard_arrow_left" />
          </HeaderButton>
        </Tooltip>
        <HeaderYearTrigger
          aria-live="polite"
          onClick={() => {
            if (content === "calendar") {
              setContent("yearPicker");
            } else {
              setContent("calendar");
            }
          }}
          type="button"
        >
          <HeaderYearTriggerLabel>
            {translatedLabels.calendar.months[innerDate.get("month")]} {innerDate.format("YYYY")}
          </HeaderYearTriggerLabel>
          <DxcIcon icon={content === "calendar" ? "arrow_drop_down" : "arrow_drop_up"} />
        </HeaderYearTrigger>
        <Tooltip label={translatedLabels.calendar.nextMonthTitle}>
          <HeaderButton
            aria-label={translatedLabels.calendar.nextMonthTitle}
            onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") + 1))}
            type="button"
          >
            <DxcIcon icon="keyboard_arrow_right" />
          </HeaderButton>
        </Tooltip>
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
      {content !== "calendar" && (
        <YearMonthPickersContainer>
          {isYearFirst ? yearPicker : monthPicker}
          {isYearFirst ? monthPicker : yearPicker}
        </YearMonthPickersContainer>
      )}
    </DatePickerContainer>
  );
};

export default memo(DatePicker);
