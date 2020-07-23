import { DxcSwitch } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return <DxcSwitch label="Switch" onChange={onChange} margin="medium" />;
}`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };
