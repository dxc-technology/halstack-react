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
  rawInput: React.MutableRefObject<string>,
  newDigit: React.MutableRefObject<string>,
  spanRef: React.MutableRefObject<HTMLSpanElement | null>,
  setInnerValue: React.Dispatch<React.SetStateAction<number | undefined>>,
  innerValue: number | undefined,
  placeholder: string,
  maxValue: number,
  minValue: number,
  isDayPeriod?: boolean,
  onChange?: (value: number | undefined) => void,
  onComplete?: () => void,
  onNext?: () => void,
  onPrevious?: () => void
) => {
  const input = event.currentTarget;
  let newValue: number | undefined = innerValue;
  if (event.key === "Backspace" || event.key === "Delete") {
    event.preventDefault();
    rawInput.current = rawInput.current.slice(0, -1);
    if (!spanRef.current) return;
    if (rawInput.current === "") {
      setInnerValue(undefined);
      spanRef.current.textContent = placeholder;
    } else {
      const numericValue = parseInt(rawInput.current, 10);
      setInnerValue(numericValue);
      spanRef.current.textContent = rawInput.current;
    }
    return;
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
    if (typeof onChange === "function") {
      onChange(newValue);
    }
    return prevValue !== newValue ? newValue : prevValue;
  });
  if (event.key === "ArrowRight" && typeof onNext === "function") {
    onNext();
  } else if (event.key === "ArrowLeft" && typeof onPrevious === "function") {
    onPrevious();
  }
};

export const handleClearActionOnClick = () => {
  console.log("clear action on click");
};
