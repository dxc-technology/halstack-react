import { forwardRef, useEffect, useMemo, useRef } from "react";
import styled from "@emotion/styled";
import DxcTextInput from "../text-input/TextInput";
import NumberInputPropsType, { RefType } from "./types";
import NumberInputContext from "./NumberInputContext";

const NumberInputContainer = styled.div<{ size: NumberInputPropsType["size"] }>`
  ${({ size }) => size === "fillParent" && "width: 100%;"}

  // Chrome, Safari, Edge, Opera
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const DxcNumberInput = forwardRef<RefType, NumberInputPropsType>(
  (
    {
      ariaLabel = "Number input",
      autocomplete,
      defaultValue,
      disabled,
      error,
      helperText,
      label,
      margin,
      max,
      min,
      name,
      onBlur,
      onChange,
      optional,
      placeholder,
      prefix,
      readOnly,
      showControls = true,
      size,
      step = 1,
      suffix,
      tabIndex,
      value,
    },
    ref
  ) => {
    const numberInputRef = useRef<HTMLInputElement | null>(null);

    const contextValue = useMemo(
      () => ({
        maxNumber: max,
        minNumber: min,
        showControls,
        stepNumber: step,
        typeNumber: "number",
      }),
      [max, min, showControls, step]
    );

    useEffect(() => {
      const input = numberInputRef.current?.getElementsByTagName("input")[0];
      const preventDefault = (event: WheelEvent) => {
        event.preventDefault();
      };
      input?.addEventListener("wheel", preventDefault, { passive: false });
      return () => {
        input?.removeEventListener("wheel", preventDefault);
      };
    }, []);

    return (
      <NumberInputContext.Provider value={contextValue}>
        <NumberInputContainer ref={numberInputRef} size={size}>
          <DxcTextInput
            label={label}
            name={name}
            defaultValue={defaultValue}
            value={value}
            helperText={helperText}
            placeholder={placeholder}
            disabled={disabled}
            optional={optional}
            readOnly={readOnly}
            prefix={prefix}
            suffix={suffix}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            autocomplete={autocomplete}
            margin={margin}
            size={size}
            tabIndex={tabIndex}
            ref={ref}
            ariaLabel={ariaLabel}
          />
        </NumberInputContainer>
      </NumberInputContext.Provider>
    );
  }
);

DxcNumberInput.displayName = "DxcNumberInput";

export default DxcNumberInput;
