import { DxcTextInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  return (
    <DxcTextInput
      label="Length"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error == undefined ? "" : error}
      margin="medium"
      clearable
      minLength={5}
      maxLength={10}
    />
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };
