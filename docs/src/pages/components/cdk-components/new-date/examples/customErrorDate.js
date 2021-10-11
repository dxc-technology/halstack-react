import { DxcNewDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value, date }) => {
    setValue(value);
    setErrorMessage(null);
  };

  const onBlur = ({ value, error, date }) => {
    setValue(value);
    error ? setErrorMessage("Custom error.") : setErrorMessage(null);
  };

  return (
    <DxcNewDate
      label="Custom error"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={errorMessage}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewDate,
  useState,
};

export default { code, scope };
