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
      label="Prefix"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      prefix="+34"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };
