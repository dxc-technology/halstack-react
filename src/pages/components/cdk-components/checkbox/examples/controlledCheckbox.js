import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const [checked, changeChecked] = useState(false);
    const onChange = (newValue) => {
        changeChecked(newValue);
    };
  
    return (
      <div>
        <DxcCheckbox
        checked={checked}
        label="Checkbox with onChange"
        onChange={onChange}
        />

        <DxcCheckbox
        checked={checked}
        label="Checkbox without onChange"
        />
      </div>
    );
  }`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
