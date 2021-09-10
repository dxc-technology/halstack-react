import { DxcNewInputText } from "@dxc-technology/halstack-react";
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
    <DxcNewInputText
      label="Prefix"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      prefix="+34"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
