import { DxcNewDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = ({ value, error, date }) => {
    setValue(value);
  };
  const onBlur = ({ value, error, date }) => {
    setValue(value);
    error ? setErrorMessage("The typed date is invalid.") : setErrorMessage(null);
  };

  return (
    <DxcNewDate
      label="Custom error"
      helperText="Using onBlur event for handling errors"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={errorMessage}
      margin="medium"
      optional
    />
  );
}`;

const scope = {
  DxcNewDate,
  useState,
};

export default { code, scope };
