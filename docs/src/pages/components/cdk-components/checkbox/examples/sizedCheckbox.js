import { DxcCheckbox } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <DxcCheckbox
      checked={checked}
      label="Checkbox"
      onChange={onChange}
      margin="medium"
      size="fitContent"
    />
  );
}`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
