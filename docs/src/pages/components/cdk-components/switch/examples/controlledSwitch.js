import { DxcSwitch } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <DxcSwitch
      checked={checked}
      label="Switch"
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };
