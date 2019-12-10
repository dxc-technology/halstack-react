import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const onChange = (newValue) => {
        console.log(newValue);
    };

    return (
      <div>
        <DxcCheckbox label="Checkbox" onChange={onChange}/>
      </div>
    );
  }`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
