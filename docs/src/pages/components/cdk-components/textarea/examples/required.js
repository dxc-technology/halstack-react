import { DxcTextarea } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcTextarea
      label="Textarea label"
      value={value}
      onChange={onChange}
      assistiveText="assistive text"
      required={true}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextarea,
  useState,
};

export default { code, scope };
