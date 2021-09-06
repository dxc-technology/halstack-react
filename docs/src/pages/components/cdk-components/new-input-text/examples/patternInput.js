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
      label="Pattern"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      clearable
      pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
