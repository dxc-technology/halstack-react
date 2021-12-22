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
      label="Optional"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      optional
    />
  );
}`;

const scope = {
  DxcNumberInput,
  useState,
};

export default { code, scope };
