import styled from "@emotion/styled";
import inputStylesByState from "../styles/forms/inputStylesByState";
import TimeInputPropsType, { RefType } from "./types";
import { forwardRef, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { HalstackLanguageContext } from "../HalstackContext";
import Label from "../styles/forms/Label";
import HelperText from "../styles/forms/HelperText";
import TimeSpinButton from "./TimeSpinButton";
import DxcFlex from "../flex/Flex";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcPopover from "../popover/Popover";
import TimePicker from "./TimePicker";
import { buildTimeRegex, generateEventValue, getTimeInputLocale } from "./utils";
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

const isNumber = (value: string) => /^\d{1,2}$/.test(value);

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
      timeFormat,
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
    const languageContext = useContext(HalstackLanguageContext);
    const translatedLabels = languageContext.labels;
    const formatInfo = useMemo(
      () => getTimeInputLocale(languageContext.locale, timeFormat),
      [languageContext.locale, timeFormat]
    );
    useEffect(() => {
      const time = value || defaultValue || undefined;
      if (time) {
        const numberPart =
          formatInfo.format === "12" ? time.split(" ")[formatInfo.dayPeriodPosition === "before" ? 1 : 0] : time;
        if (numberPart) {
          const [hourStr, minuteStr, secondStr] = numberPart.split(formatInfo.separator);
          setHourValue(hourStr && isNumber(hourStr) ? Number(hourStr) : undefined);
          setMinuteValue(minuteStr && isNumber(minuteStr) ? Number(minuteStr) : undefined);
          setSecondValue(secondStr && isNumber(secondStr) ? Number(secondStr) : undefined);
        }
        if (formatInfo.format === "12" && time.includes(" ")) {
          const dayPeriod = time.split(" ")[formatInfo.dayPeriodPosition === "before" ? 0 : 1];
          const dayPeriodValue =
            dayPeriod === translatedLabels.timeInput.timePeriodAM
              ? 0
              : dayPeriod === translatedLabels.timeInput.timePeriodPM
                ? 1
                : undefined;
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
    }, [value, defaultValue, formatInfo.format]);

    const generatedInputValue = () => {
      if (hourValue === undefined && minuteValue === undefined && secondValue === undefined) {
        return "";
      } else {
        return generateEventValue(
          hourValue,
          minuteValue,
          secondValue,
          dayPeriodValue,
          showSeconds,
          formatInfo.format,
          formatInfo.separator,
          formatInfo.dayPeriodPosition,
          translatedLabels
        );
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
        onChange(
          generateEventValue(
            undefined,
            undefined,
            undefined,
            undefined,
            showSeconds,
            formatInfo.format,
            formatInfo.separator,
            formatInfo.dayPeriodPosition,
            translatedLabels
          )
        );
      }
    };

    const validateTimeValue = (value: string) => {
      const timeRegex = buildTimeRegex(
        formatInfo.format,
        formatInfo.separator,
        showSeconds,
        formatInfo.dayPeriodPosition,
        translatedLabels.timeInput.timePeriodAM || "AM",
        translatedLabels.timeInput.timePeriodPM || "PM"
      );
      if (!timeRegex.test(value)) {
        console.log("Invalid time format");
        return "Invalid time format";
      }
      if (
        !optional &&
        (hourValue === undefined ||
          minuteValue === undefined ||
          (showSeconds && secondValue === undefined) ||
          (formatInfo.format === "12" && dayPeriodValue === undefined))
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
              {formatInfo.format === "12" && formatInfo.dayPeriodPosition === "before" && (
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
                      onChange(
                        generateEventValue(
                          hourValue,
                          minuteValue,
                          secondValue,
                          value,
                          showSeconds,
                          formatInfo.format,
                          formatInfo.separator,
                          formatInfo.dayPeriodPosition,
                          translatedLabels
                        )
                      );
                    }
                  }}
                  onComplete={() => {
                    if (hourRef.current) {
                      hourRef.current.focus();
                    }
                  }}
                  onNext={() => {
                    if (hourRef.current) {
                      hourRef.current.focus();
                    }
                  }}
                  ref={dayPeriodRef}
                />
              )}
              <DxcFlex alignItems="center" fullHeight>
                <TimeSpinButton
                  ariaLabel={label ?? ariaLabel}
                  value={hourValue}
                  minValue={formatInfo.format === "12" ? 1 : 0}
                  maxValue={formatInfo.format === "12" ? 12 : 23}
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
                        generateEventValue(
                          value,
                          minuteValue,
                          secondValue,
                          dayPeriodValue,
                          showSeconds,
                          formatInfo.format,
                          formatInfo.separator,
                          formatInfo.dayPeriodPosition,
                          translatedLabels
                        )
                      );
                    }
                  }}
                  onNext={() => {
                    if (minuteRef.current) {
                      minuteRef.current.focus();
                    }
                  }}
                  onPrevious={() => {
                    if (
                      formatInfo.format === "12" &&
                      formatInfo.dayPeriodPosition === "before" &&
                      dayPeriodRef.current
                    ) {
                      dayPeriodRef.current.focus();
                    }
                  }}
                  ref={hourRef}
                />
                <ColonContainer>{formatInfo.separator}</ColonContainer>
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
                    } else if (formatInfo.format === "12" && dayPeriodRef.current) {
                      dayPeriodRef.current.focus();
                    }
                  }}
                  onChange={(value) => {
                    if (!isControlled) {
                      setMinuteValue(value);
                    }
                    if (typeof onChange === "function") {
                      onChange(
                        generateEventValue(
                          hourValue,
                          value,
                          secondValue,
                          dayPeriodValue,
                          showSeconds,
                          formatInfo.format,
                          formatInfo.separator,
                          formatInfo.dayPeriodPosition,
                          translatedLabels
                        )
                      );
                    }
                  }}
                  onNext={() => {
                    if (showSeconds && secondRef.current) {
                      secondRef.current.focus();
                    } else if (formatInfo.format === "12" && dayPeriodRef.current) {
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
                    <ColonContainer>{formatInfo.separator}</ColonContainer>
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
                        if (
                          formatInfo.format === "12" &&
                          formatInfo.dayPeriodPosition === "after" &&
                          dayPeriodRef.current
                        ) {
                          dayPeriodRef.current.focus();
                        }
                      }}
                      onChange={(value) => {
                        if (!isControlled) {
                          setSecondValue(value);
                        }
                        if (typeof onChange === "function") {
                          onChange(
                            generateEventValue(
                              hourValue,
                              minuteValue,
                              value,
                              dayPeriodValue,
                              showSeconds,
                              formatInfo.format,
                              formatInfo.separator,
                              formatInfo.dayPeriodPosition,
                              translatedLabels
                            )
                          );
                        }
                      }}
                      onNext={() => {
                        if (
                          formatInfo.format === "12" &&
                          formatInfo.dayPeriodPosition === "after" &&
                          dayPeriodRef.current
                        ) {
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
              {formatInfo.format === "12" && formatInfo.dayPeriodPosition === "after" && (
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
                      onChange(
                        generateEventValue(
                          hourValue,
                          minuteValue,
                          secondValue,
                          value,
                          showSeconds,
                          formatInfo.format,
                          formatInfo.separator,
                          formatInfo.dayPeriodPosition,
                          translatedLabels
                        )
                      );
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
                    onPickTime={(hour, minute, second, dayPeriod) => {
                      if (!isControlled) {
                        setDayPeriodValue(dayPeriod);
                        setSecondValue(second);
                        setMinuteValue(minute);
                        setHourValue(hour);
                      }
                      if (typeof onChange === "function") {
                        onChange(
                          generateEventValue(
                            hour,
                            minute,
                            second,
                            dayPeriod,
                            showSeconds,
                            formatInfo.format,
                            formatInfo.separator,
                            formatInfo.dayPeriodPosition,
                            translatedLabels
                          )
                        );
                      }
                    }}
                    timeFormat={formatInfo.format}
                    dayPeriodPosition={formatInfo.dayPeriodPosition}
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
                  onClick={() => !readOnly && setIsOpen(true)}
                />
              </DxcPopover>
            </DxcFlex>
          </TimeInputField>
          {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
        </TimeInputContainer>
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
