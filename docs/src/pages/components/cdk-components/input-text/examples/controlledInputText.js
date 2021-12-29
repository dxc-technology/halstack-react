import { DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <DxcInputText
      label="Input label"
      assistiveText={"assistive text"}
      value={value}
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcInputText,
  useState,
};

export default { code, scope };
