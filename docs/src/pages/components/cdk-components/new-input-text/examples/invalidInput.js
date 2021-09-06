import { DxcNewInputText } from "@dxc-technology/halstack-react";
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
    <DxcNewInputText
      label="Invalid"
      value={value}
      onChange={onChange}
      onBllur={onBlur}
      margin="medium"
      error="Error message"
      clearable
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
