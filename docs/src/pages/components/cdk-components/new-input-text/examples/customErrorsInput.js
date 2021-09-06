import { DxcNewInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (info) => {
    setValue(info.value);
    info.error ? setErrorMessage("CHANGE error") : setErrorMessage(null);
  };

  const onBlur = (info) => {
    setValue(info.value);
    info.error ? setErrorMessage("BLUR error") : setErrorMessage(null);
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
      length={{ min: "5", max: "10" }}
      error={errorMessage}
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
