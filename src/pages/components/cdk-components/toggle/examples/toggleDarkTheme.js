import { DxcToggle } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [selected, changeSelected] = useState(true);

  const onClick = newValue => {
    changeSelected(newValue);
  };

  return (
    <div>
      <div style={{ background: "#000000" }}>
        <DxcToggle
          label="Default toggle"
          selected={selected}
          theme="dark"
          onClick={onClick}
        ></DxcToggle>
      </div>
    </div>
  );
}`;

const scope = {
  DxcToggle,
  useState
};

export default { code, scope };
