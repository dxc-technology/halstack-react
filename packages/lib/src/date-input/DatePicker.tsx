import { memo, useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { DatePickerPropsType } from "./types";
import Calendar from "./Calendar";
import YearPicker from "./YearPicker";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import { HalstackLanguageContext } from "../HalstackContext";

const DatePickerContainer = styled.div`
  padding: var(--spacing-padding-m) var(--spacing-padding-xs) var(--spacing-padding-xs) var(--spacing-padding-xs);
  background-color: var(--color-bg-neutral-lightest);
  box-shadow: var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread)
    var(--shadow-light);
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

const today = dayjs();

const DatePicker = ({ date, onDateSelect, id }: DatePickerPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date?.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const selectedDate = date?.isValid() ? date : dayjs(null);
  const translatedLabels = useContext(HalstackLanguageContext);

  const handleDateSelect = (chosenDate: Dayjs) => {
    setInnerDate(chosenDate);
    onDateSelect(chosenDate);
  };

  const handleOnYearSelect = (year: number) => {
    setInnerDate(innerDate.set("year", year));
    setContent("calendar");
  };

  const handleMonthChange = (chosenDate: Dayjs) => {
    setInnerDate(chosenDate);
  };

  return (
    <DatePickerContainer id={id}>
      <PickerHeader>
        <Tooltip label={translatedLabels.calendar.previousMonthTitle}>
          <HeaderButton
            aria-label={translatedLabels.calendar.previousMonthTitle}
            onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") - 1))}
          >
            <DxcIcon icon="keyboard_arrow_left" />
          </HeaderButton>
        </Tooltip>
        <HeaderYearTrigger
          aria-live="polite"
          onClick={() => setContent((currentContent) => (currentContent === "yearPicker" ? "calendar" : "yearPicker"))}
        >
          <HeaderYearTriggerLabel>
            {translatedLabels.calendar.months[innerDate.get("month")]} {innerDate.format("YYYY")}
          </HeaderYearTriggerLabel>
          <DxcIcon icon={content === "yearPicker" ? "arrow_drop_up" : "arrow_drop_down"} />
        </HeaderYearTrigger>
        <Tooltip label={translatedLabels.calendar.nextMonthTitle}>
          <HeaderButton
            aria-label={translatedLabels.calendar.nextMonthTitle}
            onClick={() => handleMonthChange(innerDate.set("month", innerDate.get("month") + 1))}
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
      {content === "yearPicker" && (
        <YearPicker selectedDate={selectedDate} onYearSelect={handleOnYearSelect} today={today} />
      )}
    </DatePickerContainer>
  );
};

export default memo(DatePicker);
