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
      label="Length"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      clearable
      length={{ min: "5", max: "10" }}
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
