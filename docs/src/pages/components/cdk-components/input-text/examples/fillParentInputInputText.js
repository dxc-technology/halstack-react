import { V3DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <div style={{ width: "250px" }}>
      <V3DxcInputText
        label="Input label"
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
        margin="medium"
        size="fillParent"
      />
    </div>
  );
}`;

const scope = {
  V3DxcInputText,
  useState,
};

export default { code, scope };
