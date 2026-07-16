import { TranslatedLabels } from "../common/variables";

export const pad = (num?: number) => {
  if (num === undefined) return "";
  return num < 10 ? `0${num}` : `${num}`;
};

export const returnDayPeriod = (value?: number, translatedLabels?: TranslatedLabels) => {
  return value === 0
    ? (translatedLabels?.timeInput.timePeriodAM ?? "AM")
    : value === 1
      ? (translatedLabels?.timeInput.timePeriodPM ?? "PM")
      : "";
};

const resolveValue = (value: string | number, maxValue: number, minValue: number) => {
  const input = typeof value === "string" ? parseInt(value, 10) : value;
  if (input > maxValue) {
    return maxValue;
  } else if (value.toString().length > 1 && input < minValue) {
    return minValue;
  } else {
    return input;
  }
};

const checkCompletion = (value: string, maxValue: number) => {
  const maxValueFirstDigit = maxValue.toString()[0];
  if (
    value.length === 1 &&
    maxValueFirstDigit !== undefined &&
    value[0] !== undefined &&
    parseInt(value[0], 10) > parseInt(maxValueFirstDigit, 10)
  ) {
    return true;
  }
  return value.length >= maxValue.toString().length;
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLSpanElement>,
  interactive: boolean,
  rawInput: React.MutableRefObject<string>,
  newDigit: React.MutableRefObject<string>,
  spanRef: React.MutableRefObject<HTMLSpanElement | null>,
  setInnerValue: React.Dispatch<React.SetStateAction<number | undefined>>,
  innerValue: number | undefined,
  maxValue: number,
  minValue: number,
  isDayPeriod?: boolean,
  onChange?: (value: number | undefined) => void,
  onComplete?: () => void,
  onNext?: () => void,
  onPrevious?: () => void
) => {
  if (!interactive) return;
  const input = event.currentTarget;
  let newValue: number | undefined = innerValue;
  if (event.key === "Backspace" || event.key === "Delete") {
    event.preventDefault();
    rawInput.current = rawInput.current.slice(0, -1);
    if (!spanRef.current) return;
    if (rawInput.current === "") {
      newValue = undefined;
    } else {
      newValue = parseInt(rawInput.current, 10);
    }
  }

  if (!["Tab"].includes(event.key)) event.preventDefault();

  if (/^\d$/.test(event.key) && !isDayPeriod) {
    // Number input
    newDigit.current = event.key;
    rawInput.current = (rawInput.current + newDigit.current).slice(-maxValue.toString().length);
    newValue = resolveValue(rawInput.current, maxValue, minValue);
    // If the raw input has reached the max length or exceeds the max value with the new digit, consider it complete and move to the next field.
    if (checkCompletion(rawInput.current, maxValue)) {
      rawInput.current = pad(newValue);
      if (typeof onComplete === "function") {
        onComplete();
        rawInput.current = "";
      }
    } else {
      input.textContent = rawInput.current;
    }
  } else if (event.key === "ArrowUp") {
    if (innerValue == null || innerValue >= maxValue) {
      newValue = minValue;
    } else {
      newValue = resolveValue(innerValue + 1, maxValue, minValue);
    }
  } else if (event.key === "ArrowDown") {
    if (innerValue == null || innerValue <= minValue) {
      newValue = maxValue;
    } else {
      newValue = resolveValue(innerValue - 1, maxValue, minValue);
    }
  } else if (isDayPeriod && /^[apAP]$/.test(event.key)) {
    // AM/PM input
    const isAM = /[aA]/.test(event.key);
    newValue = isAM ? 0 : 1;
    rawInput.current = newValue.toString();
    if (typeof onComplete === "function") {
      onComplete();
    }
  }
  setInnerValue((prevValue) => {
    return prevValue !== newValue ? newValue : prevValue;
  });
  if (typeof onChange === "function") {
    onChange(newValue);
  }
  if (event.key === "ArrowRight" && typeof onNext === "function") {
    rawInput.current = "";
    onNext();
  } else if (event.key === "ArrowLeft" && typeof onPrevious === "function") {
    rawInput.current = "";
    onPrevious();
  }
  if (event.key === "Tab") {
    rawInput.current = "";
  }
};

/**
 *
 * @param dataType The type of time unit (hour, minute, second, dayPeriod)
 * @param value The current value of the time unit
 * @param placeholder The placeholder text to display when the value is undefined
 * @param maxValue The maximum value for the time unit
 * @param translatedLabels The translated labels for day periods
 * @returns The display value for the spin button, formatted according to the data type and value provided. If the value is undefined, the placeholder will be displayed instead.
 */
export const generateDisplayValue = (
  dataType: "hour" | "minute" | "second" | "dayPeriod" | undefined,
  value: number | undefined,
  placeholder: string,
  maxValue: number,
  translatedLabels?: TranslatedLabels
) => {
  let displayValue;
  if (dataType === "dayPeriod") {
    displayValue = value != null ? returnDayPeriod(value, translatedLabels) : placeholder;
  } else {
    displayValue = value != null ? value.toString().padStart(maxValue.toString().length, "0") : placeholder;
  }
  return displayValue;
};

export const generateEventValue = (
  hour: number | undefined,
  minute: number | undefined,
  second: number | undefined,
  dayPeriod: number | undefined,
  showSeconds: boolean | undefined,
  timeFormat: "12" | "24" | undefined,
  separator: string,
  timePeriodPosition: "before" | "after",
  translatedLabels: TranslatedLabels
) => {
  if (hour === undefined && minute === undefined && second === undefined && dayPeriod === undefined) {
    return "";
  }
  // consider dayperiod position for 12-hour format otherwise ignore it
  if (timeFormat === "12" && timePeriodPosition === "before") {
    return `${returnDayPeriod(dayPeriod, translatedLabels)} ${pad(hour)}${separator}${pad(minute)}${showSeconds ? `${separator}${pad(second)}` : ""}`;
  } else if (timeFormat === "12" && timePeriodPosition === "after") {
    return `${pad(hour)}${separator}${pad(minute)}${showSeconds ? `${separator}${pad(second)}` : ""} ${returnDayPeriod(dayPeriod, translatedLabels)}`;
  } else {
    return `${pad(hour)}${separator}${pad(minute)}${showSeconds ? `${separator}${pad(second)}` : ""}`;
  }
};

export const handleColumnKeyDown = (
  event: React.KeyboardEvent,
  column: string,
  focusedValue: number,
  totalValues: number,
  setValueToFocus: React.Dispatch<React.SetStateAction<number>>,
  onSelect?: (value: number) => void,
  step?: number
) => {
  const stepValue = step || 1;
  // ignore tab key to allow normal tab behavior, and prevent default for other keys to manage focus manually
  if (!["Tab"].includes(event.key)) event.preventDefault();
  if (event.key === "ArrowDown") {
    if (column === "hour" && focusedValue === 23) {
      setValueToFocus(0);
    } else if (column === "hour") {
      const newValue = focusedValue + stepValue > totalValues ? stepValue : focusedValue + stepValue;
      setValueToFocus((prev) => (prev === undefined ? 1 : newValue));
    } else if (focusedValue === totalValues - stepValue) {
      setValueToFocus(0);
    } else {
      const newValue = focusedValue + stepValue > totalValues - stepValue ? 0 : focusedValue + stepValue;
      setValueToFocus(newValue);
    }
  } else if (event.key === "ArrowUp") {
    if (column === "hour" && focusedValue === 0) {
      setValueToFocus(23);
    } else if (column === "hour") {
      const newValue = focusedValue - stepValue < 0 ? totalValues - stepValue : focusedValue - stepValue;
      setValueToFocus((prev) => (prev === undefined ? totalValues - stepValue : newValue));
    } else if (focusedValue === 0) {
      setValueToFocus(totalValues - stepValue);
    } else {
      const newValue = focusedValue - stepValue < 0 ? totalValues - stepValue : focusedValue - stepValue;
      setValueToFocus(newValue);
    }
  } else if (["Enter", " "].includes(event.key)) {
    if (onSelect) {
      onSelect(focusedValue);
    }
  }
};

/**
 * @param locale The locale string (e.g., "en-US") used to determine time formatting conventions.
 * @param formatProp Optional. Specifies whether to use "12" or "24" hour format.
 * @returns An object containing the time separator, preferred format, and day period position.
 */
export const getTimeInputLocale = (
  locale?: string,
  formatProp?: "12" | "24"
): { separator: string; format: "12" | "24"; dayPeriodPosition: "before" | "after" } => {
  if (!locale) {
    return {
      separator: ":",
      format: formatProp || "12",
      dayPeriodPosition: "after",
    };
  }
  const naturalCycle = formatProp
    ? formatProp === "24"
      ? "h23"
      : "h12"
    : new Intl.DateTimeFormat(locale, { hour: "2-digit" }).resolvedOptions().hourCycle;
  const hourCycle: "h12" | "h23" = naturalCycle === "h23" || naturalCycle === "h24" ? "h23" : "h12";

  const formatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle,
  });
  const parts = formatter.formatToParts(new Date(1995, 11, 3, 1, 0, 0));
  const dayPeriodPosition = parts[0]?.type === "dayPeriod" ? "before" : "after";
  const format = hourCycle === "h23" ? "24" : "12";
  // get all parts that are "literal" and use the first one or the last one depending on the dayPeriodPosition to determine the separator
  const separatorParts = parts.filter((part) => part.type === "literal");
  const separator =
    format === "24" || dayPeriodPosition === "after"
      ? separatorParts[0]?.value || ":"
      : separatorParts[separatorParts.length - 1]?.value || ":";

  return {
    separator,
    format,
    dayPeriodPosition,
  };
};
