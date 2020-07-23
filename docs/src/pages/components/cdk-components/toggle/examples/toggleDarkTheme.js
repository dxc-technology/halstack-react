import { DxcToggle } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [selected, changeSelected] = useState(true);
  const onClick = newValue => {
    changeSelected(newValue);
  };

  return (
    <div style={{ background: "#000000" }}>
      <DxcToggle
        label="Default toggle"
        selected={selected}
        theme="dark"
        onClick={onClick}
        margin="medium"
      ></DxcToggle>
    </div>
  );
}`;

const scope = {
  DxcToggle,
  useState
};

export default { code, scope };
