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
      label="Fill parent"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      margin="medium"
      size="fillParent"
    />
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };
