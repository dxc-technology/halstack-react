import { DxcRadio } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onClick = newValue => {
    changeChecked(newValue);
  };

  return (
    <DxcRadio
      checked={checked}
      label="Radio Label"
      onClick={onClick}
      margin="medium"
      size="small"
    />
  );
}`;

const scope = {
  DxcRadio,
  useState
};

export default { code, scope };
