import { DxcDateInput } from "@dxc-technology/halstack-react";
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
    <DxcDateInput
      label="Controlled"
      helperText="Helper Text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      clearable
    />
  );
}`;

const scope = {
  DxcDateInput,
  useState,
};

export default { code, scope };
