import { DxcTextInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const onChange = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onChange: invalid email");
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onBlur: invalid email");
  };

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTextInput
        label="Enter your email"
        onChange={onChange}
        onBlur={onBlur}
        error={errorMessage}
        pattern={validEmail}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  useState,
};

export default { code, scope };
