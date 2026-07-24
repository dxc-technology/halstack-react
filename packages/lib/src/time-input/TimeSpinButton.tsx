import styled from "@emotion/styled";
import { TimeSpinButtonPropsType } from "./types";
import { forwardRef, useContext, useEffect, useMemo, useRef, useState } from "react";
import { handleKeyDown, pad, returnDayPeriod, generateDisplayValue } from "./utils";
import { HalstackLanguageContext } from "../HalstackContext";

const TimeSpinButtonContainer = styled.span<{ isPlaceholder: boolean; disabled: boolean }>`
  caret-color: transparent;
  color: ${(props) =>
    props.disabled
      ? "var(--color-fg-neutral-medium)"
      : props.isPlaceholder
        ? "var(--color-fg-neutral-strong)"
        : "var(--color-fg-neutral-dark)"};
  &:focus {
    ${(props) =>
      !props.disabled &&
      `background-color: var(--color-bg-alpha-light);
    outline: none;`}
  }
  height: var(--height-s);
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-padding-none) var(--spacing-padding-xxxs);
  border-radius: var(--border-radius-s);
  box-sizing: border-box;
`;

const TimeSpinButton = forwardRef<HTMLSpanElement, TimeSpinButtonPropsType>(
  (
    {
      ariaLabel,
      value,
      minValue,
      maxValue,
      tabIndex,
      dataType,
      readOnly,
      disabled,
      isControlled,
      onChange,
      onComplete,
      onNext,
      onPrevious,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState<number | undefined>(value);
    const spanRef = useRef<HTMLSpanElement | null>(null);
    const translatedLabels = useContext(HalstackLanguageContext).labels;

    const placeholder = useMemo(() => {
      switch (dataType) {
        case "hour":
          if (maxValue === 12) {
            return "hh";
          } else {
            return "HH";
          }
        case "minute":
          return "mm";
        case "second":
          return "ss";
        case "dayPeriod":
          return "aa";
        default:
          return "--";
      }
    }, [dataType, maxValue]);

    useEffect(() => {
      if (!spanRef.current) return;
      if (!isControlled) {
        spanRef.current.textContent = generateDisplayValue(
          dataType,
          innerValue,
          placeholder,
          maxValue,
          translatedLabels
        );
      } else {
        spanRef.current.textContent = generateDisplayValue(dataType, value, placeholder, maxValue, translatedLabels);
      }
    }, [innerValue, placeholder, maxValue, dataType, isControlled, translatedLabels]);

    useEffect(() => {
      setInnerValue(value);
      if (spanRef.current) {
        spanRef.current.textContent = generateDisplayValue(dataType, value, placeholder, maxValue, translatedLabels);
      }
    }, [value, placeholder, maxValue, dataType, translatedLabels]);

    // Values used to track the raw input before it's resolved to a valid value.
    const rawInput = useRef<string>("");
    const newDigit = useRef<string>("");

    return (
      <TimeSpinButtonContainer
        ref={(node) => {
          spanRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="spinbutton"
        aria-valuenow={innerValue ?? undefined}
        aria-valuetext={
          innerValue != null
            ? dataType === "dayPeriod"
              ? returnDayPeriod(innerValue, translatedLabels)
              : pad(innerValue)
            : "Empty"
        }
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-label={ariaLabel}
        disabled={disabled}
        contentEditable={!readOnly && !disabled ? "plaintext-only" : "false"}
        inputMode={dataType !== "dayPeriod" ? "numeric" : undefined}
        tabIndex={tabIndex}
        data-type={dataType}
        data-placeholder={innerValue == null}
        isPlaceholder={innerValue == null}
        onKeyDown={(event) =>
          handleKeyDown(
            event,
            !readOnly && !disabled,
            rawInput,
            newDigit,
            spanRef,
            setInnerValue,
            innerValue,
            maxValue,
            minValue,
            dataType === "dayPeriod",
            onChange,
            onComplete,
            onNext,
            onPrevious
          )
        }
      />
    );
  }
);

export default TimeSpinButton;
