import styled from "@emotion/styled";
import inputStylesByState from "../styles/forms/inputStylesByState";
import { calculateWidth } from "../text-input/utils";
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
import { pad } from "./utils";

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
  width: ${({ size }) => calculateWidth(undefined, size)};
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
  ${({ disabled, error, readOnly }) => inputStylesByState(disabled, error, readOnly)}
`;

const ColonContainer = styled.span`
  padding: 0;
  color: var(--color-fg-neutral-strong);
`;

const DxcTimeInput = forwardRef<RefType, TimeInputPropsType>(
  (
    {
      ariaLabel = "Text input",
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
    const [hourValue, setHourValue] = useState<number | undefined>(undefined);
    const [minuteValue, setMinuteValue] = useState<number | undefined>(undefined);
    const [secondValue, setSecondValue] = useState<number | undefined>(undefined);
    const [dayPeriod, setDayPeriod] = useState<number | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const hourRef = useRef<HTMLSpanElement>(null);
    const minuteRef = useRef<HTMLSpanElement>(null);
    const secondRef = useRef<HTMLSpanElement>(null);
    const dayPeriodRef = useRef<HTMLSpanElement>(null);
    const isControlled = useRef(value !== undefined);
    const translatedLabels = useContext(HalstackLanguageContext);

    const generateEventValue = ({
      hour,
      minute,
      second,
      dayPeriod,
    }: {
      hour?: number;
      minute?: number;
      second?: number;
      dayPeriod?: number;
    }) => {
      if (hour === undefined && minute === undefined && second === undefined && dayPeriod === undefined) {
        return "";
      }
      return `${pad(hour ?? hourValue)}:${pad(minute ?? minuteValue)}${showSeconds ? `:${pad(second ?? secondValue)}` : ""}${timeFormat === "12" ? `${dayPeriod !== undefined ? (dayPeriod === 0 ? "AM" : "PM") : dayPeriod && dayPeriod === 0 ? "AM" : "PM"}` : ""}`;
    };

    useEffect(() => {
      const time = value || defaultValue;
      if (time) {
        const [hour, minute, second] = time.split(":").map(Number);
        setHourValue(hour);
        setMinuteValue(minute);
        setSecondValue(second);
        if (timeFormat === "12") {
          setDayPeriod(hour && hour >= 12 ? 1 : 0);
        }
      }
    }, [value, defaultValue]);

    const handleClearActionOnClick = () => {
      if (!isControlled.current) {
        setHourValue(undefined);
        setMinuteValue(undefined);
        setSecondValue(undefined);
        setDayPeriod(undefined);
      }
      if (typeof onChange === "function") {
        onChange(generateEventValue({ hour: undefined, minute: undefined, second: undefined, dayPeriod: undefined }));
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
                value: generateEventValue({}),
              });
            }
          }}
          onChange={() => {
            if (typeof onChange === "function") {
              onChange(generateEventValue({}));
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
          <DxcPopover
            popoverContent={
              <TimePicker
                onSelecthours={(value) => {
                  if (!isControlled.current) {
                    setHourValue(value);
                  }
                  if (typeof onChange === "function") {
                    onChange(generateEventValue({ hour: value }));
                  }
                }}
                onSelectMinutes={(value) => {
                  if (!isControlled.current) {
                    setMinuteValue(value);
                  }
                  if (typeof onChange === "function") {
                    onChange(generateEventValue({ minute: value }));
                  }
                }}
                onSelectSeconds={(value) => {
                  if (!isControlled.current) {
                    setSecondValue(value);
                  }
                  if (typeof onChange === "function") {
                    onChange(generateEventValue({ second: value }));
                  }
                }}
                onSelectDayPeriod={(value: number) => {
                  if (!isControlled.current) {
                    setDayPeriod(value ? 1 : 0);
                  }
                  if (typeof onChange === "function") {
                    onChange(generateEventValue({ dayPeriod: value ? 1 : 0 }));
                  }
                }}
                timeFormat={timeFormat}
                showSeconds={showSeconds}
                hourValue={hourValue}
                minuteValue={minuteValue}
                secondValue={secondValue}
                dayPeriod={dayPeriod}
                id={inputId}
                tabIndex={tabIndex}
              />
            }
            asChild
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            align="end"
          >
            <TimeInputField disabled={disabled} error={!!error} readOnly={readOnly}>
              <DxcFlex gap="var(--spacing-gap-xs)" alignItems="center">
                <DxcFlex gap="var(--spacing-gap-xxs)" alignItems="center">
                  <TimeSpinButton
                    value={hourValue}
                    minValue={timeFormat === "12" ? 1 : 0}
                    maxValue={timeFormat === "12" ? 12 : 23}
                    inputId={inputId}
                    tabIndex={tabIndex}
                    dataType="hour"
                    interactive={!disabled && !readOnly}
                    isControlled={isControlled.current}
                    onComplete={() => {
                      if (minuteRef.current) {
                        minuteRef.current.focus();
                      }
                    }}
                    onChange={(value) => {
                      if (!isControlled.current) {
                        setHourValue(value);
                      }
                      if (typeof onChange === "function") {
                        onChange(generateEventValue({ hour: value }));
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
                    value={minuteValue}
                    minValue={0}
                    maxValue={59}
                    inputId={inputId}
                    tabIndex={tabIndex}
                    dataType="minute"
                    interactive={!disabled && !readOnly}
                    isControlled={isControlled.current}
                    onComplete={() => {
                      if (showSeconds && secondRef.current) {
                        secondRef.current.focus();
                      } else if (timeFormat === "12" && dayPeriodRef.current) {
                        dayPeriodRef.current.focus();
                      }
                    }}
                    onChange={(value) => {
                      if (!isControlled.current) {
                        setMinuteValue(value);
                      }
                      onChange?.(generateEventValue({ minute: value }));
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
                        value={secondValue}
                        minValue={0}
                        maxValue={59}
                        inputId={inputId}
                        tabIndex={tabIndex}
                        dataType="second"
                        interactive={!disabled && !readOnly}
                        isControlled={isControlled.current}
                        onComplete={() => {
                          if (timeFormat === "12" && dayPeriodRef.current) {
                            dayPeriodRef.current.focus();
                          }
                        }}
                        onChange={(value) => {
                          if (!isControlled.current) {
                            setSecondValue(value);
                          }
                          onChange?.(generateEventValue({ second: value }));
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
                    value={dayPeriod}
                    minValue={0}
                    maxValue={1}
                    inputId={inputId}
                    tabIndex={tabIndex}
                    dataType="dayPeriod"
                    interactive={!disabled && !readOnly}
                    isControlled={isControlled.current}
                    onChange={(value) => {
                      if (!isControlled.current) {
                        setDayPeriod(value);
                      }
                      onChange?.(generateEventValue({ dayPeriod: value }));
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
                <DxcActionIcon
                  size="xsmall"
                  disabled={disabled}
                  icon="schedule"
                  title="Select time"
                  onClick={() => setIsOpen(true)}
                />
              </DxcFlex>
            </TimeInputField>
          </DxcPopover>
        </TimeInputContainer>
        <input
          aria-label={ariaLabel}
          type="hidden"
          name={name}
          value={`${hourValue}:${minuteValue}${showSeconds ? `:${secondValue}` : ""}${timeFormat === "12" ? `${dayPeriod === 0 ? "AM" : "PM"}` : ""}`}
        />
      </>
    );
  }
);

export default DxcTimeInput;
