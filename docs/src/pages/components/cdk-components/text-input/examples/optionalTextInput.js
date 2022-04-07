import { DxcTextInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcTextInput
      label="Label"
      helperText="When a text input is optional, it is not required to fill it in, so it won't pass the required error."
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      margin="medium"
      optional
    />
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };
