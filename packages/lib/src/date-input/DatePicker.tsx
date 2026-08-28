import { memo, useContext, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "@emotion/styled";
import { DatePickerPropsType } from "./types";
import Calendar from "./Calendar";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import { HalstackLanguageContext } from "../HalstackContext";
import { YearMonthPicker } from "./YearMonthPicker";
import { calculateIsYearFirst } from "./utils";

const DatePickerContainer = styled.div`
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

const HeaderTrigger = styled(HeaderButton)`
  gap: var(--spacing-gap-s);
  padding: 0px var(--spacing-padding-xs) 0px var(--spacing-padding-m);
  height: var(--height-m);
  width: 172px;
  span::before {
    font-size: var(--height-xxs);
  }
`;

const HeaderTriggerLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--typography-label-m);
`;

const today = dayjs();

const DatePicker = ({ date, onDateSelect, id, format }: DatePickerPropsType): JSX.Element => {
  const [innerDate, setInnerDate] = useState(date?.isValid() ? date : dayjs());
  const [content, setContent] = useState("calendar");
  const selectedDate = date?.isValid() ? date : dayjs(null);
  const languageContext = useContext(HalstackLanguageContext);
  const translatedLabels = languageContext.labels;
  const isYearFirst = calculateIsYearFirst(format);

  const handleDateSelect = (chosenDate: Dayjs) => {
    setInnerDate(chosenDate);
    onDateSelect(chosenDate);
  };

  const monthYearLabel = useMemo(() => {
    const month = translatedLabels.calendar.months[innerDate.get("month")];
    const year = innerDate.format("YYYY");
    return isYearFirst ? `${year} ${month}` : `${month} ${year}`;
  }, [translatedLabels, innerDate, isYearFirst]);

  return (
    <DatePickerContainer id={id}>
      <PickerHeader>
        <Tooltip label={translatedLabels.calendar.previousMonthTitle}>
          <HeaderButton
            aria-label={translatedLabels.calendar.previousMonthTitle}
            onClick={() => setInnerDate(innerDate.set("month", innerDate.get("month") - 1))}
            type="button"
          >
            <DxcIcon icon="keyboard_arrow_left" />
          </HeaderButton>
        </Tooltip>
        <HeaderTrigger
          aria-live="polite"
          onClick={() => {
            if (content === "calendar") {
              setContent("yearMonthPicker");
            } else {
              setContent("calendar");
            }
          }}
          type="button"
        >
          <HeaderTriggerLabel>{monthYearLabel}</HeaderTriggerLabel>
          <DxcIcon icon={content === "calendar" ? "arrow_drop_down" : "arrow_drop_up"} />
        </HeaderTrigger>
        <Tooltip label={translatedLabels.calendar.nextMonthTitle}>
          <HeaderButton
            aria-label={translatedLabels.calendar.nextMonthTitle}
            onClick={() => setInnerDate(innerDate.set("month", innerDate.get("month") + 1))}
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
        <YearMonthPicker
          isYearFirst={isYearFirst}
          selectedDate={selectedDate}
          today={today}
          onYearMonthComplete={handleDateSelect}
        />
      )}
    </DatePickerContainer>
  );
};

export default memo(DatePicker);
