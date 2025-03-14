import { forwardRef, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import NumberInputPropsType, { RefType } from "./types";
import NumberInputContext from "./NumberInputContext";

const DxcNumberInput = forwardRef<RefType, NumberInputPropsType>(
  (
    {
      label,
      name,
      defaultValue,
      value,
      helperText,
      placeholder,
      disabled,
      optional,
      readOnly,
      prefix,
      suffix,
      min,
      max,
      step = 1,
      onChange,
      onBlur,
      error,
      autocomplete,
      margin,
      size,
      tabIndex,
      ariaLabel = "Number input",
      showControls = true,
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
      const input = numberInputRef.current?.getElementsByTagName("input")[0] as HTMLInputElement;
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

const NumberInputContainer = styled.div<{ size: NumberInputPropsType["size"] }>`
  ${(props) => props.size === "fillParent" && "width: 100%;"}
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

export default DxcNumberInput;
