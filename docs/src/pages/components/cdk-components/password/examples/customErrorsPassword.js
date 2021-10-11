import { DxcPassword } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error.") : setErrorMessage(null);
  };

  return (
    <DxcPassword
      value={value}
      label="Custom errors"
      clearable
      onChange={onChange}
      onBlur={onBlur}
      error={errorMessage}
      pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
      length={{ min: 5, max: 10 }}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcPassword,
  useState,
};

export default { code, scope };
