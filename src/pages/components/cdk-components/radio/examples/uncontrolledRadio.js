import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return <DxcRadio label="Radio Label" onChange={onChange} />;
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
