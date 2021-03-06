import { DxcToggle } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [selected, changeSelected] = useState(true);
  const onClick = newValue => {
    changeSelected(newValue);
  };

  return (
    <DxcToggle
      label="Default toggle"
      selected={selected}
      onClick={onClick}
      margin="medium"
    ></DxcToggle>
  );
}`;

const scope = {
  DxcToggle,
  useState
};

export default { code, scope };
