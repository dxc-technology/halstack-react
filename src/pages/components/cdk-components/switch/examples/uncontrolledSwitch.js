import { DxcSwitch } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const onChange = (newValue) => {
        console.log(newValue);
    };

    return (
      <div>
        <DxcSwitch label="Checkbox" onChange={onChange}/>
      </div>
    );
  }`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };
