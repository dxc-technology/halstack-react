import { DxcTextarea } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcTextarea
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
  DxcTextarea,
  useState,
};

export default { code, scope };
