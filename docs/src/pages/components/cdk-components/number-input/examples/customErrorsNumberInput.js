import { DxcNumberInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error ? "Invalid number." : "");
  };

  const [secondValue, setSecondValue] = useState("");
  const [customErrorOnChange, setCustomErrorOnChange] = useState("");
  const onChangeSecond = ({ value }) => {
    setSecondValue(value);
  };
  const onBlur = ({ value, error }) => {
    setSecondValue(value);
    setCustomErrorOnChange(error ? "The typed number is not valid. Please, check it." : "");
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcNumberInput
        label="Custom range error"
        helperText="Using onChange event for handling errors"
        value={value}
        onChange={onChange}
        error={errorMessage}
        min={5}
        max={20}
        step={5}
        margin="medium"
        optional
      />
      <DxcNumberInput
        label="Custom range error"
        helperText="Using onBlur event for handling errors"
        value={secondValue}
        onChange={onChangeSecond}
        onBlur={onBlur}
        error={customErrorOnChange}
        min={5}
        max={20}
        step={5}
        margin="medium"
        optional
      />
    </div>
  );
}`;

const scope = {
  DxcNumberInput,
  useState,
};

export default { code, scope };
