import { DxcNumber } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Invalid number.") : setErrorMessage(null);
  };

  const [secondValue, setSecondValue] = useState("");
  const [customErrorOnChange, setCustomErrorOnChange] = useState("");
  const onChangeSecond = ({ value, error }) => {
    setSecondValue(value);
    error ? setCustomErrorOnChange("Invalid number.") : setCustomErrorOnChange(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcNumber
        label="Min 5, max 20, step 5"
        helperText="Using onChange event for handling errors"
        value={secondValue}
        onChange={onChangeSecond}
        error={customErrorOnChange}
        min={5}
        max={20}
        step={5}
        margin="medium"
        optional
      />
      <DxcNumber
        label="Min 5, max 20, step 5"
        helperText="Using onChange event for handling errors"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={errorMessage}
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
  DxcNumber,
  useState,
};

export default { code, scope };
