import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onChange = (newValue) => {
      changeChecked(newValue);
  };

    return (
      <div>
    <DxcRadio   
      checked={checked}
      label="Radio Required"
      required={true}
      onChange={onChange}
    />
        
      </div>
    );
  }`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
