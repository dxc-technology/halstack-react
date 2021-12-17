import { V3DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return (
    <V3DxcInputText
      label="Input label"
      assistiveText={"assistive text"}
      onChange={onChange}
      margin="medium"
      isMasked={true}
    />
  );
}`;

const scope = {
  V3DxcInputText,
  useState,
};

export default { code, scope };
