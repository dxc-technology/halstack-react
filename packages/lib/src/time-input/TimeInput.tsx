import styled from "@emotion/styled";
import inputStylesByState from "../styles/forms/inputStylesByState";
import TimeInputPropsType, { RefType } from "./types";
import { forwardRef, useContext, useEffect, useId, useRef, useState } from "react";
import { HalstackLanguageContext } from "../HalstackContext";
import Label from "../styles/forms/Label";
import HelperText from "../styles/forms/HelperText";
import TimeSpinButton from "./TimeSpinButton";
import DxcFlex from "../flex/Flex";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcPopover from "../popover/Popover";
import TimePicker from "./TimePicker";
import { generateEventValue } from "./utils";
import ErrorMessage from "../styles/forms/ErrorMessage";

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const TimeInputContainer = styled.div<{
  size: TimeInputPropsType["size"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-dark);
  width: ${({ size }) => (size ? sizes[size] : sizes.medium)};
`;

const TimeInputField = styled.div<{
  disabled: Required<TimeInputPropsType>["disabled"];
  error: boolean;
  readOnly: Required<TimeInputPropsType>["readOnly"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  gap: var(--spacing-gap-s);
  ${({ disabled, error, readOnly }) => inputStylesByState(disabled, error, readOnly)}
`;

const ColonContainer = styled.span`
  padding: 0;
  color: var(--color-fg-neutral-dark);
`;

const DxcTimeInput = forwardRef<RefType, TimeInputPropsType>(
  (
    {
      ariaLabel = "Time input",
      clearable = false,
      defaultValue = "",
      disabled = false,
      error,
      helperText,
      label,
      name = "",
      optional = false,
      readOnly = false,
      onBlur,
      onChange,
      showSeconds = false,
      size = "medium",
      tabIndex = 0,
      timeFormat = "12",
      value,
    },
    ref
  ) => {
    const inputId = `input-${useId()}`;
    const errorId = `error-${useId()}`;
    const [hourValue, setHourValue] = useState<number | undefined>(undefined);
    const [minuteValue, setMinuteValue] = useState<number | undefined>(undefined);
    const [secondValue, setSecondValue] = useState<number | undefined>(undefined);
    const [dayPeriodValue, setDayPeriodValue] = useState<number | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const hourRef = useRef<HTMLSpanElement>(null);
    const minuteRef = useRef<HTMLSpanElement>(null);
    const secondRef = useRef<HTMLSpanElement>(null);
    const dayPeriodRef = useRef<HTMLSpanElement>(null);
    const isControlled = value !== undefined;
    const translatedLabels = useContext(HalstackLanguageContext);

    useEffect(() => {
      const time = value || defaultValue || undefined;
      if (time) {
        const numberPart = timeFormat === "12" ? time.split(" ")[0] : time;
        if (numberPart) {
          const [hour, minute, second] = numberPart.split(":").map(Number);
          setHourValue(hour || hour === 0 ? hour : undefined);
          setMinuteValue(minute || minute === 0 ? minute : undefined);
          setSecondValue(second || second === 0 ? second : undefined);
        }
        if (timeFormat === "12" && time.includes(" ")) {
          const dayPeriodValue = time.split(" ")[1] === "AM" ? 0 : time.split(" ")[1] === "PM" ? 1 : undefined;
          setDayPeriodValue(dayPeriodValue);
        } else {
          setDayPeriodValue(undefined);
        }
      } else {
        setHourValue(undefined);
        setMinuteValue(undefined);
        setSecondValue(undefined);
        setDayPeriodValue(undefined);
      }
    }, [value, defaultValue, timeFormat]);

    const generatedInputValue = () => {
      if (hourValue === undefined && minuteValue === undefined && secondValue === undefined) {
        return "";
      } else {
        return generateEventValue(hourValue, minuteValue, secondValue, dayPeriodValue, showSeconds, timeFormat);
      }
    };

    const handleClearActionOnClick = () => {
      if (!isControlled) {
        setHourValue(undefined);
        setMinuteValue(undefined);
        setSecondValue(undefined);
        setDayPeriodValue(undefined);
      }
      if (typeof onChange === "function") {
        onChange(generateEventValue(undefined, undefined, undefined, undefined, showSeconds, timeFormat));
      }
    };

    const validateTimeValue = (value: string) => {
      const timeRegex =
        timeFormat === "12"
          ? /^(0?[1-9]|1[0-2]):[0-5][0-9](?::[0-5][0-9])?\s?(AM|PM)$/i
          : /^([01]?[0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?$/;
      if (!timeRegex.test(value)) {
        return "Invalid time format";
      }
      if (
        !optional &&
        (hourValue === undefined ||
          minuteValue === undefined ||
          (showSeconds && secondValue === undefined) ||
          (timeFormat === "12" && dayPeriodValue === undefined))
      ) {
        return "This field is required";
      }
    };

    return (
      <>
        <TimeInputContainer
          size={size}
          ref={ref}
          onBlur={() => {
            if (typeof onBlur === "function") {
              onBlur({
                value: generatedInputValue(),
                error: validateTimeValue(generatedInputValue()),
              });
            }
          }}
          onChange={() => {
            if (typeof onChange === "function") {
              onChange(generatedInputValue());
            }
          }}
        >
          <Label disabled={disabled} hasMargin={!helperText} htmlFor={inputId}>
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
          </Label>
          {helperText && (
            <HelperText disabled={disabled} hasMargin>
              {helperText}
            </HelperText>
          )}
          <TimeInputField disabled={disabled} error={!!error} readOnly={readOnly}>
            <DxcFlex gap="var(--spacing-gap-xs)" alignItems="center" fullHeight>
              <DxcFlex alignItems="center" fullHeight>
                <TimeSpinButton
                  ariaLabel={label ?? ariaLabel}
                  value={hourValue}
                  minValue={timeFormat === "12" ? 1 : 0}
                  maxValue={timeFormat === "12" ? 12 : 23}
                  tabIndex={tabIndex}
                  dataType="hour"
                  readOnly={readOnly}
                  disabled={disabled}
                  isControlled={isControlled}
                  onComplete={() => {
                    if (minuteRef.current) {
                      minuteRef.current.focus();
                    }
                  }}
                  onChange={(value) => {
                    if (!isControlled) {
                      setHourValue(value);
                    }
                    if (typeof onChange === "function") {
                      onChange(
                        generateEventValue(value, minuteValue, secondValue, dayPeriodValue, showSeconds, timeFormat)
                      );
                    }
                  }}
                  onNext={() => {
                    if (minuteRef.current) {
                      minuteRef.current.focus();
                    }
                  }}
                  ref={hourRef}
                />
                <ColonContainer>:</ColonContainer>
                <TimeSpinButton
                  ariaLabel={label ?? ariaLabel}
                  value={minuteValue}
                  minValue={0}
                  maxValue={59}
                  tabIndex={tabIndex}
                  dataType="minute"
                  readOnly={readOnly}
                  disabled={disabled}
                  isControlled={isControlled}
                  onComplete={() => {
                    if (showSeconds && secondRef.current) {
                      secondRef.current.focus();
                    } else if (timeFormat === "12" && dayPeriodRef.current) {
                      dayPeriodRef.current.focus();
                    }
                  }}
                  onChange={(value) => {
                    if (!isControlled) {
                      setMinuteValue(value);
                    }
                    if (typeof onChange === "function") {
                      onChange(
                        generateEventValue(hourValue, value, secondValue, dayPeriodValue, showSeconds, timeFormat)
                      );
                    }
                  }}
                  onNext={() => {
                    if (showSeconds && secondRef.current) {
                      secondRef.current.focus();
                    } else if (timeFormat === "12" && dayPeriodRef.current) {
                      dayPeriodRef.current.focus();
                    }
                  }}
                  onPrevious={() => {
                    if (hourRef.current) {
                      hourRef.current.focus();
                    }
                  }}
                  ref={minuteRef}
                />
                {showSeconds && (
                  <>
                    <ColonContainer>:</ColonContainer>
                    <TimeSpinButton
                      ariaLabel={label ?? ariaLabel}
                      value={secondValue}
                      minValue={0}
                      maxValue={59}
                      tabIndex={tabIndex}
                      dataType="second"
                      readOnly={readOnly}
                      disabled={disabled}
                      isControlled={isControlled}
                      onComplete={() => {
                        if (timeFormat === "12" && dayPeriodRef.current) {
                          dayPeriodRef.current.focus();
                        }
                      }}
                      onChange={(value) => {
                        if (!isControlled) {
                          setSecondValue(value);
                        }
                        if (typeof onChange === "function") {
                          onChange(
                            generateEventValue(hourValue, minuteValue, value, dayPeriodValue, showSeconds, timeFormat)
                          );
                        }
                      }}
                      onNext={() => {
                        if (timeFormat === "12" && dayPeriodRef.current) {
                          dayPeriodRef.current.focus();
                        }
                      }}
                      onPrevious={() => {
                        if (minuteRef.current) {
                          minuteRef.current.focus();
                        }
                      }}
                      ref={secondRef}
                    />
                  </>
                )}
              </DxcFlex>
              {timeFormat === "12" && (
                <TimeSpinButton
                  ariaLabel={label ?? ariaLabel}
                  value={dayPeriodValue}
                  minValue={0}
                  maxValue={1}
                  tabIndex={tabIndex}
                  dataType="dayPeriod"
                  readOnly={readOnly}
                  disabled={disabled}
                  isControlled={isControlled}
                  onChange={(value) => {
                    if (!isControlled) {
                      setDayPeriodValue(value);
                    }
                    if (typeof onChange === "function") {
                      onChange(generateEventValue(hourValue, minuteValue, secondValue, value, showSeconds, timeFormat));
                    }
                  }}
                  onPrevious={() => {
                    if (showSeconds && secondRef.current) {
                      secondRef.current.focus();
                    } else if (minuteRef.current) {
                      minuteRef.current.focus();
                    }
                  }}
                  ref={dayPeriodRef}
                />
              )}
            </DxcFlex>
            <DxcFlex>
              {clearable && (
                <DxcActionIcon
                  size="xsmall"
                  icon="close"
                  onClick={() => handleClearActionOnClick()}
                  tabIndex={tabIndex}
                  title={!disabled ? translatedLabels.textInput.clearFieldActionTitle : undefined}
                />
              )}
              <DxcPopover
                popoverContent={
                  <TimePicker
                    onSelectHours={(value) => {
                      if (!isControlled) {
                        setHourValue(value);
                      }
                      if (typeof onChange === "function") {
                        onChange(
                          generateEventValue(value, minuteValue, secondValue, dayPeriodValue, showSeconds, timeFormat)
                        );
                      }
                    }}
                    onSelectMinutes={(value) => {
                      if (!isControlled) {
                        setMinuteValue(value);
                      }
                      if (typeof onChange === "function") {
                        onChange(
                          generateEventValue(hourValue, value, secondValue, dayPeriodValue, showSeconds, timeFormat)
                        );
                      }
                    }}
                    onSelectSeconds={(value) => {
                      if (!isControlled) {
                        setSecondValue(value);
                      }
                      if (typeof onChange === "function") {
                        onChange(
                          generateEventValue(hourValue, minuteValue, value, dayPeriodValue, showSeconds, timeFormat)
                        );
                      }
                    }}
                    onSelectDayPeriod={(value: number) => {
                      if (!isControlled) {
                        setDayPeriodValue(value);
                      }
                      if (typeof onChange === "function") {
                        onChange(
                          generateEventValue(hourValue, minuteValue, secondValue, value, showSeconds, timeFormat)
                        );
                      }
                    }}
                    timeFormat={timeFormat}
                    showSeconds={showSeconds}
                    hourValue={hourValue}
                    minuteValue={minuteValue}
                    secondValue={secondValue}
                    dayPeriod={dayPeriodValue}
                    id={inputId}
                    tabIndex={tabIndex}
                  />
                }
                isOpen={isOpen}
                offset={8}
                onClose={() => {
                  setIsOpen(false);
                }}
                align="end"
                asChild
              >
                <DxcActionIcon
                  size="xsmall"
                  disabled={disabled}
                  icon="schedule"
                  title={!disabled ? translatedLabels.timeInput.timePickerActionTitle : undefined}
                  onClick={() => setIsOpen(true)}
                />
              </DxcPopover>
            </DxcFlex>
          </TimeInputField>
        </TimeInputContainer>
        {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
        <input
          aria-label={label ?? ariaLabel}
          aria-errormessage={error ? errorId : undefined}
          type="hidden"
          name={name}
          value={generatedInputValue()}
        />
      </>
    );
  }
);

export default DxcTimeInput;
