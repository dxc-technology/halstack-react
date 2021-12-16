import { DxcNumberInput } from "@dxc-technology/halstack-react";
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
    <DxcNumberInput
      label="Prefix"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      prefix="+34"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNumberInput,
  useState,
};

export default { code, scope };
