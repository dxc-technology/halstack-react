import { DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";
import suffixPath from "./images/house-24px.svg";
import prefixPath from "./images/text_fields-24px.svg";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcInputText
        label="Input label"
        suffix={"suf"}
        prefix={"pre"}
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
        theme="dark"
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcInputText,
  useState,
  suffixPath,
  prefixPath,
};

export default { code, scope };
