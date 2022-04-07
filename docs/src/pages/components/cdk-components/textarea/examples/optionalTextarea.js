import { DxcTextarea } from "@dxc-technology/halstack-react";
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
    <DxcTextarea
      label="Optional"
      helperText="When a textarea is optional, it is not required to fill it in, so it won't pass the required error."
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      optional
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextarea,
  useState,
};

export default { code, scope };
