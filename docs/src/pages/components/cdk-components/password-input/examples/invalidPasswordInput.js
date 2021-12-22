import { DxcPasswordInput } from "@dxc-technology/halstack-react";
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
    <DxcPasswordInput
      value={value}
      label="Invalid"
      clearable
      onChange={onChange}
      onBlur={onBlur}
      error="Error message."
      margin="medium"
    />
  );
}`;

const scope = {
  DxcPasswordInput,
  useState,
};

export default { code, scope };
