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
      label="Controlled"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      clearable
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
