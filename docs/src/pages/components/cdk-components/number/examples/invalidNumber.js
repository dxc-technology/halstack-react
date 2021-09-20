import { DxcNumber } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcNumber
      value={value}
      label="Invalid"
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      error="Error message"
    />
  );
}`;

const scope = {
  DxcNumber,
  useState,
};

export default { code, scope };
