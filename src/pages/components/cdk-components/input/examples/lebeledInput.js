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
    <div>
      <DxcInput
        label="Input label"
        suffixIconSrc={suffixPath}
        prefixIconSrc={prefixPath}
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
      />
      <DxcInput
        label="Input label"
        suffix={"suf"}
        prefix={"pre"}
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
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
