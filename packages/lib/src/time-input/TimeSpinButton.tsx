import styled from "@emotion/styled";
import { TimeSpinButtonPropsType } from "./types";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { handleKeyDown } from "./utils";

const TimeSpinButtonContainer = styled.span<{ isPlaceholder: boolean }>`
  caret-color: transparent;
  color: ${(props) => (props.isPlaceholder ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  &:focus {
    background-color: var(--color-bg-primary-lighter);
    outline: none;
  }
`;

const TimeSpinButton = forwardRef<HTMLSpanElement, TimeSpinButtonPropsType>(
  (
    { value, minValue, maxValue, inputId, tabIndex, dataType, interactive, onChange, onComplete, onNext, onPrevious },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState<number | undefined>(value);
    let spanRef = useRef<HTMLSpanElement | null>(null);

    const placeholder = useMemo(() => {
      switch (dataType) {
        case "hour":
          return "hh";
        case "minute":
          return "mm";
        case "second":
          return "ss";
        case "dayPeriod":
          return "aa";
        default:
          return "--";
      }
    }, [dataType]);

    useEffect(() => {
      if (!spanRef.current) return;
      let displayValue;
      if (dataType === "dayPeriod") {
        displayValue = innerValue === 0 ? "AM" : innerValue === 1 ? "PM" : placeholder;
      } else {
        displayValue =
          innerValue != null ? innerValue.toString().padStart(maxValue.toString().length, "0") : placeholder;
      }
      spanRef.current.textContent = displayValue;
    }, [innerValue, placeholder, maxValue, dataType]);

    useEffect(() => {
      setInnerValue(value);
    }, [value]);

    // Value used to track the raw input before it's resolved to a valid value.
    const rawInput = useRef<string>("");
    const newDigit = useRef<string>("");

    const handleBlur = () => {
      rawInput.current = "";
    };
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
        aria-valuetext={innerValue != null ? String(innerValue) : "Empty"}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-labelledby={inputId}
        contentEditable={interactive ? "plaintext-only" : "false"}
        inputMode={dataType !== "dayPeriod" ? "numeric" : undefined}
        tabIndex={tabIndex}
        data-type={dataType}
        data-placeholder={innerValue == null}
        isPlaceholder={innerValue == null}
        onKeyDown={(event) =>
          handleKeyDown(
            event,
            rawInput,
            newDigit,
            spanRef,
            setInnerValue,
            innerValue,
            placeholder,
            maxValue,
            minValue,
            dataType === "dayPeriod",
            onChange,
            onComplete,
            onNext,
            onPrevious
          )
        }
        onBlur={handleBlur}
      />
    );
  }
);

export default TimeSpinButton;
