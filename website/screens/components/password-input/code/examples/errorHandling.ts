import { DxcPasswordInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const onChange = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onChange");
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onBlur");
  };

  return (
    <DxcInset space="small">
      <DxcPasswordInput
        label="Custom length error"
        helperText="Using onChange/onBlur event for handling errors"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
        error={errorMessage}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcPasswordInput,
  DxcInset,
  useState,
};

export default { code, scope };
