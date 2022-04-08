import React from "react";
import styled from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import NumberInputContext from "./NumberInputContext";
import NumberInputPropsType, { RefType } from "./types";

const DxcNumberInput = React.forwardRef<RefType, NumberInputPropsType>(
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
    },
    ref
  ) => {
    return (
      <NumberInputContext.Provider value={{ typeNumber: "number", minNumber: min, maxNumber: max, stepNumber: step }}>
        <NumberInputContainer>
          <DxcTextInput
            label={label}
            name={name}
            defaultValue={defaultValue}
            value={value}
            helperText={helperText}
            placeholder={placeholder}
            disabled={disabled}
            optional={optional}
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
          />
        </NumberInputContainer>
      </NumberInputContext.Provider>
    );
  }
);

const NumberInputContainer = styled.div`
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
