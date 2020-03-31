import { DxcInput } from "@diaas/dxc-react-cdk";
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
      isMasked={true}
    />
  );
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };
