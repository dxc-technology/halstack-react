import { DxcSwitch } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const [checked, changeChecked] = useState(true);
    const onChange = (newValue) => {
        changeChecked(newValue);
    };

    const [checked1, changeChecked1] = useState(false);
    const onChange1 = (newValue) => {
        changeChecked1(newValue);
    };
  
    return (
      <div>
        <DxcSwitch
          checked={checked}
          labelPosition="before"
          label="Label before"
          onChange={onChange}
        />

        <DxcSwitch
          checked={checked1}
          labelPosition="after"
          label="Label after"
          onChange={onChange1}
        />
      </div>
    );
  }`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };
