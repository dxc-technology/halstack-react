import { DxcNumberInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  return (
    <DxcNumberInput
      label="Min 5, max 20 and step 5"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      min={5}
      max={20}
      step={5}
      suffix="USD"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNumberInput,
  useState,
};

export default { code, scope };
