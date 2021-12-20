import { V3DxcTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <V3DxcTextarea
      label="Textarea label"
      value={value}
      onChange={onChange}
      assistiveText="assistive text"
      invalid={true}
      margin="medium"
    />
  );
}`;

const scope = {
  V3DxcTextarea,
  useState,
};

export default { code, scope };
