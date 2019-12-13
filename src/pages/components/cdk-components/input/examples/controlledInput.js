import { DxcInput } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("Default");
  const onChange = newValue => {
    changeValue(newValue)
  };

  return <DxcInput label="Input label" assistiveText={"assistive text"} value={value} onChange={onChange} />;
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };
