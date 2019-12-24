import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onClick = newValue => {
    changeChecked(newValue);
  };

  return (
    <DxcRadio
      checked={checked}
      label="Disabled Radio"
      disabled={true}
      onClick={onClick}
    />
  );
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
