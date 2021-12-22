import { V3DxcTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <V3DxcTextarea
        label="Textarea label"
        value={value}
        onChange={onChange}
        theme="dark"
        assistiveText="assistive text"
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  V3DxcTextarea,
  useState,
};

export default { code, scope };
