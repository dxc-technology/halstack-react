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
      label="Suffix"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      suffix="USD"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };
