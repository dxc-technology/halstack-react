import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <DxcRadio checked={checked} label="Radio Label" onChange={onChange} />
  );
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
