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
      label="Suffix"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      suffix="USD"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
