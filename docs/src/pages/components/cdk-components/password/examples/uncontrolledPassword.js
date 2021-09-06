import { DxcPassword } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (info) => {
    console.log(info.value);
  };

  const onBlur = (info) => {
    console.log(info.value);
  };

  return (
    <DxcPassword
      label="Uncontrolled"
      clearable
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcPassword,
  useState,
};

export default { code, scope };
