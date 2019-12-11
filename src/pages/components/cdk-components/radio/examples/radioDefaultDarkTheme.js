import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onChange = (newValue) => {
      changeChecked(newValue);
  };

    return (
      <div>
      <div style={{background:'#000000'}}>
      <DxcRadio   
      checked={checked}
      theme="dark"
      label="Radio Label"
      onChange={onChange}
    />  
    </div>
      </div>
    );
  }`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
