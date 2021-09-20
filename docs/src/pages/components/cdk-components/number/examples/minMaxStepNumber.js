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
      label="Min 5, max 20 and step 5"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      min={5}
      max={20}
      step={5}
    />
  );
}`;

const scope = {
  DxcNumber,
  useState,
};

export default { code, scope };
