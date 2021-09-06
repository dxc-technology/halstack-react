import { DxcPassword } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = (info) => {
    setValue(info.value);
  };

  const onBlur = (info) => {
    setValue(info.value);
  };

  return (
    <DxcPassword
      value={value}
      label="Length"
      clearable
      onChange={onChange}
      onBlur={onBlur}
      length={{ min: "5", max: "10" }}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcPassword,
  useState,
};

export default { code, scope };
