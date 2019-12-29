import { DxcRadio } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const onClick = newValue => {
    console.log(newValue);
  };

  return <DxcRadio label="Radio Label" onClick={onClick} margin="medium" />;
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
