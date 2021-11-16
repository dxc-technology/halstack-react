import { DxcNewDate } from "@dxc-technology/halstack-react";
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
    <DxcNewDate
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
  DxcNewDate,
  useState,
};

export default { code, scope };
