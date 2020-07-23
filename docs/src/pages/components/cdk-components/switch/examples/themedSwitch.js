import { DxcSwitch } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(true);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcSwitch
        checked={checked}
        theme="dark"
        label="Switch"
        onChange={onChange}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };
