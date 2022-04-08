import { DxcPasswordInput } from "@dxc-technology/halstack-react";
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
    <DxcPasswordInput
      value={value}
      label="Pattern"
      clearable
      onChange={onChange}
      onBlur={onBlur}
      error={error == undefined ? "" : error}
      pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
      margin="medium"
    />
  );
}`;

const scope = {
  DxcPasswordInput,
  useState,
};

export default { code, scope };
