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
      label="Optional"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      margin="medium"
      optional
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
