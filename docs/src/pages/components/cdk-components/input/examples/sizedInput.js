import { DxcInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <DxcInput
      label="Input label"
      assistiveText={"assistive text"}
      value={value}
      onChange={onChange}
      margin="medium"
      size="large"
    />
  );
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };