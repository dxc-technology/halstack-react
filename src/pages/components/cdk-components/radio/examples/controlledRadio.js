import { DxcRadio } from "@diaas/dxc-react-cdk";
import {useState} from "react";

const code = `() => {
    const [checked, changeChecked] = useState(false);
    const onChange = (newValue) => {
        changeChecked(newValue);
    };
  
    return (
      <div>
      <DxcRadio   
      checked={checked}
      label="Radio Label"
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
