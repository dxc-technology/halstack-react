import { DxcNewInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error") : setErrorMessage(null);
  };

  return (
    <DxcNewInputText
      label="Custom errors"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      clearable
      pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
      length={{ min: 5, max: 10 }}
      error={errorMessage}
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
