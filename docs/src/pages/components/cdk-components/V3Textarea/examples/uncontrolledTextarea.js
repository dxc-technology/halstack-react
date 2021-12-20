import { V3DxcTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <V3DxcTextarea
      label="Textarea label"
      assistiveText={"assistive text"}
      onChange={onChange}
      size="fillParent"
      margin="medium"
    />
  );
}`;

const scope = {
  V3DxcTextarea,
  useState,
};

export default { code, scope };
