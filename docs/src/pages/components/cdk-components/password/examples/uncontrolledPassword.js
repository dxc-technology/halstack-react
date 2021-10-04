import { DxcPassword } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (value) => {
    console.log(value);
  };

  const onBlur = ({ value }) => {
    console.log(value);
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
