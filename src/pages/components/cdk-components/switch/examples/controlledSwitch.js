import { DxcSwitch } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const [checked, changeChecked] = useState(false);
    const onChange = (newValue) => {
        changeChecked(newValue);
    };
  
    return (
      <DxcSwitch
      checked={checked}
      label="Checkbox"
      onChange={onChange}
      />
    );
  }`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };
