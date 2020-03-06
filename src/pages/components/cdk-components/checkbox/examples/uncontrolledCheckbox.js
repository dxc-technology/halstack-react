import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return <DxcCheckbox label="Checkbox" onChange={onChange} margin="medium" />;
}`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
