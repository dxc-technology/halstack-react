import { DxcInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return (
    <DxcInput
      label="Input label"
      assistiveText={"assistive text"}
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };
