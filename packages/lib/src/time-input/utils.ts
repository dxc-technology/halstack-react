export const pad = (num?: number) => (num !== undefined && num < 10 ? `0${num}` : `${num}`);

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

  if (!["Tab", "Enter"].includes(event.key)) event.preventDefault();

  if (/^\d$/.test(event.key) && !isDayPeriod) {
    // Number input
    newDigit.current = event.key;
    rawInput.current = (rawInput.current + newDigit.current).slice(-maxValue.toString().length);
    newValue = resolveValue(rawInput.current, maxValue, minValue);
    // If the raw input has reached the max length or exceeds the max value with the new digit, consider it complete and move to the next field.
    if (checkCompletion(rawInput.current, maxValue)) {
      const newStringValue = newValue.toString();
      // Pad with zeros if the new value is shorter than the max value length.
      if (newStringValue.length < maxValue.toString().length) {
        rawInput.current = "0" + newStringValue;
      } else {
        rawInput.current = newStringValue;
      }
      if (typeof onComplete === "function") {
        onComplete();
      }
    }
    input.textContent = rawInput.current;
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
  } else if (isDayPeriod && /[apAP01]/.test(event.key)) {
    // AM/PM input
    const isAM = /[aA0]/.test(event.key);
    newValue = isAM ? 0 : 1;
  }
  setInnerValue((prevValue) => {
    return prevValue !== newValue ? newValue : prevValue;
  });
  if (typeof onChange === "function") {
    onChange(newValue);
  }
  if (event.key === "ArrowRight" && typeof onNext === "function") {
    onNext();
  } else if (event.key === "ArrowLeft" && typeof onPrevious === "function") {
    onPrevious();
  }
};

export const generateEventValue = (
  hour: number | undefined,
  minute: number | undefined,
  second: number | undefined,
  dayPeriod: number | undefined,
  showSeconds: boolean | undefined,
  timeFormat: "12" | "24" | undefined
) => {
  if (hour === undefined && minute === undefined && second === undefined && dayPeriod === undefined) {
    return "";
  }
  return `${pad(hour)}:${pad(minute)}${showSeconds ? `:${pad(second)}` : ""}${
    timeFormat === "12" ? ` ${dayPeriod !== undefined ? (dayPeriod === 0 ? "AM" : "PM") : undefined}` : ""
  }`;
};
