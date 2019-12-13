import { DxcInput } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import suffixPath from "./house-24px.svg";
import prefixPath from "./text_fields-24px.svg";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcInput
        label="Input label"
        suffix={"suf"}
        prefix={"pre"}
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
}`;

const scope = {
  DxcInput,
  useState,
  suffixPath,
  prefixPath
};

export default { code, scope };
